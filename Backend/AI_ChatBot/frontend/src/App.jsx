import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './App.css';

function App() {
  const [conversationHistory, setConversationHistory] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Initialize Socket.IO connection
  useEffect(() => {
    socketRef.current = io('http://localhost:3000');

    socketRef.current.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to server');
    });

    socketRef.current.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from server');
    });

    socketRef.current.on('ai-message-response', (response) => {
      setIsTyping(false);
      setConversationHistory(prev => [
        ...prev,
        {
          role: 'model',
          text: response,
          timestamp: new Date().toISOString()
        }
      ]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversationHistory]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || !isConnected) return;

    // Add user message to conversation history
    setConversationHistory(prev => [
      ...prev,
      {
        role: 'user',
        text: inputMessage,
        timestamp: new Date().toISOString()
      }
    ]);

    // Emit message to server
    socketRef.current.emit('ai-message', inputMessage);
    
    // Set typing indicator
    setIsTyping(true);
    
    // Clear input
    setInputMessage('');
  };

  const clearConversation = () => {
    setConversationHistory([]);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-header">
          <h1>AI ChatBot</h1>
          <div className="header-controls">
            <span className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
              {isConnected ? '● Connected' : '○ Disconnected'}
            </span>
            {conversationHistory.length > 0 && (
              <button onClick={clearConversation} className="clear-btn">
                Clear Chat
              </button>
            )}
          </div>
        </div>

        <div className="messages-container">
          {conversationHistory.length === 0 ? (
            <div className="empty-state">
              <h2>👋 Welcome to AI ChatBot</h2>
              <p>Start a conversation by typing a message below</p>
            </div>
          ) : (
            conversationHistory.map((message, index) => (
              <div
                key={index}
                className={`message ${message.role === 'user' ? 'user-message' : 'ai-message'}`}
              >
                <div className="message-header">
                  <span className="message-role">
                    {message.role === 'user' ? '👤 You' : '🤖 AI'}
                  </span>
                  <span className="message-time">{formatTime(message.timestamp)}</span>
                </div>
                <div className="message-content">{message.text}</div>
              </div>
            ))
          )}
          
          {isTyping && (
            <div className="message ai-message typing-indicator">
              <div className="message-header">
                <span className="message-role">🤖 AI</span>
              </div>
              <div className="message-content">
                <span className="typing-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={isConnected ? "Type your message..." : "Connecting..."}
            disabled={!isConnected}
            className="message-input"
          />
          <button
            type="submit"
            disabled={!isConnected || !inputMessage.trim()}
            className="send-btn"
          >
            Send ➤
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
