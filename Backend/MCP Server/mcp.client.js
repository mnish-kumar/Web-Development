import { config } from "dotenv";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { GoogleGenAI, Type } from "@google/genai";

config();

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

const tools = [];

// Make transport for client to connect to the server
const transport = new StdioClientTransport({
  command: "node",
  args: ["./index.js"],
});

// Create client instance and connect to the server
const client = new Client({
  name: "demo-client",
  version: "1.0.0",
});

await client.connect(transport);

client.listTools().then(async (response) => {
  response.tools.forEach((tool) => {
    tools.push({
      name: tool.name,
      description: tool.description,
      parameters: {
        type: Type.OBJECT,
        properties: tool.inputSchema.properties,
        required: tool.inputSchema.required || [],
      },
    });
  });

  const aiResponse = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Add 100 and 3 using the addTwoNumbers tool.",
    config: {
      tools: [
        {
          functionDeclarations: [tools],
        },
      ],
    },
  });

  console.log("AI response: ", aiResponse.functionCalls);

  aiResponse.functionCalls.forEach(async (call) => {
    const toolResponse = await client.callTool({
      name: call.name,
      arguments: call.args,
    });

    console.log("Tool Response: ", toolResponse);
  });
});
