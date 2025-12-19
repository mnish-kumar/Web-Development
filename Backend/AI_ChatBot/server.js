require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const generateResponse  = require("./src/services/ai.service");
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  }
});


const chatHistory = [];

// connection event when fire a user connects
io.on("connection", (socket) => {
  console.log("A user connection");

  // disconnection event fire when user disconnects
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  // Custom event for [ai-message : event name]
  socket.on("ai-message", async (data) => {
    // console.log("Message received from client: -> ", data);

    // Push user message to chat history
    chatHistory.push(
      { role: "user", 
        parts: [{text: data }]
      }
    );

    // Generate AI response
    let aiResponse = await generateResponse(chatHistory);
    
    // Push AI response to chat history
    chatHistory.push(
      { role: "model", 
        parts: [{text: aiResponse }]
      }
    );

    // Emit the AI response back to the client
    socket.emit("ai-message-response", aiResponse);
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
