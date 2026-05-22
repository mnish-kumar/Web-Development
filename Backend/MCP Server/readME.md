
# MCP Server (Simple Demo)

This folder is a small demo of **MCP (Model Context Protocol)**.

- **MCP Server** exposes tools (functions) that an AI can call.
- **MCP Client** connects to the server, asks an AI model what tool to call, then calls the tool and prints the result.

In this demo the server provides one tool:

- `addTwoNumbers(a, b)` → returns a text message with the sum.

## What is inside this folder?

- `index.js` → the MCP **server**. It registers the tool `addTwoNumbers` and waits for requests over stdin/stdout.
- `mcp.client.js` → the MCP **client**. It starts the server as a child process, reads the tool list, asks Gemini to call the tool, then calls it.
- `package.json` → Node scripts and dependencies.
- `.env` → environment variables (your API key). Do not commit this file.

## Requirements

- Node.js **18+** (because this project uses ES Modules and top-level `await`).
- A Google Gemini API key saved in `.env`.

## Setup (first time)

Open a terminal in this folder:

`Backend/MCP Server`

Install dependencies:

```bash
npm install
```

Create or edit `.env` and add your key:

```bash
GOOGLE_API_KEY=your_key_here
```

## How to run

### Option A (recommended): run the client

The client will automatically start the server and talk to it.

```bash
node mcp.client.js
```

Expected output (example):

```text
AI response:  [ { name: 'addTwoNumbers', args: { a: 100, b: 3 } } ]
Tool Response:  {
	content: [ { type: 'text', text: 'The sum of 100 and 3 is = 103' } ]
}
```

If the program keeps running after printing the result, press **Ctrl + C** to stop it.

### Option B: run the server alone

```bash
npm start
```

Note: the server uses **stdio** (stdin/stdout) transport, so it will look like it is “stuck”. That is normal.
It is waiting for a client to send it messages.

## How the code works (simple explanation)

### 1) Server: `index.js`

- Creates an `McpServer` instance.
- Registers a tool named `addTwoNumbers`.
- The tool input is validated using `zod`:
	- `a` must be a number
	- `b` must be a number
- Connects the server using `StdioServerTransport()`.

So the server is ready to receive tool calls from any MCP client.

### 2) Client: `mcp.client.js`

- Loads `.env` with `dotenv` (so `process.env.GOOGLE_API_KEY` is available).
- Creates a Gemini client (`GoogleGenAI`).
- Creates a `StdioClientTransport` that runs `node ./index.js` (this starts the server process).
- Connects an MCP `Client` to the server.
- Calls `client.listTools()` to get the tools from the server.
- Converts the MCP tool schema into a Gemini “function declaration” format.
- Sends a prompt to Gemini: *“Add 100 and 3 using the addTwoNumbers tool.”*
- Gemini returns function calls.
- The client executes those calls with `client.callTool(...)` and prints the response.

## Common problems & fixes

### 1) `GOOGLE_API_KEY` missing

If you see an error about authentication / API key:

- Make sure `.env` exists in this folder.
- Make sure it contains `GOOGLE_API_KEY=...`.
- Restart the terminal and run again.

### 2) Node version is too old

If you see errors like “Unexpected reserved word” or top-level `await` issues:

- Install Node.js 18+.
- Run `node -v` to confirm.

### 3) The server looks frozen

That is normal when you run `npm start` / `node index.js`.
The server is waiting for a client over stdio.

### 4) The client keeps running after printing the answer

This can happen because the client started the MCP server process and the stdio connection is still open.
Just press **Ctrl + C**.

### 5) Exit code 1 when running `node mcp.client.js`

Usually it is one of these:

- Missing/invalid API key (most common)
- Network/API error from Gemini
- A mismatch in the tool declaration format

