import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create server instance
const server = new McpServer({
  name: "demo-server",
  version: "1.0.0",
});


server.registerTool("addTwoNumbers", {
  name: "Add Two Numbers",
  description: "Add two numbers together",
  inputSchema: {
    a: z.number().describe("The first number to add"),
    b: z.number().describe("The second number to add"),
  },
},
  async ({a , b}) => {
    return {
      content: [{ type: "text", text: `The sum of ${a} and ${b} is = ${a + b}` }]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);