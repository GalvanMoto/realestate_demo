import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MOCK_PROPERTIES } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are a helpful and knowledgeable real estate assistant for 'Housify'. 
Your goal is to help users find their dream home based on the available listings.
Be professional, concise, and enthusiastic.

Here is the current list of available properties in JSON format:
${JSON.stringify(MOCK_PROPERTIES)}

If a user asks about available properties, query this list.
If a user asks about something else related to real estate (buying tips, mortgage, etc.), provide general helpful advice.
Keep responses short and easy to read.
`;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing. Chat features will not work.");
    // Return a dummy object or handle gracefully in UI
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = initializeChat();
    const result: GenerateContentResponse = await session.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the server right now. Please check your API key.";
  }
};