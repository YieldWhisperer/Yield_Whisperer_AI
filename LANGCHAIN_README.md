# LangChain Integration with OpenRouter for YieldWhisperer

This README explains how to set up and run the LangChain integration with OpenRouter for the YieldWhisperer application.

## Prerequisites

- Node.js and npm installed
- OpenRouter API key (already configured in the .env file)

## Setup Instructions

1. **Install dependencies**

```bash
npm install
```

2. **OpenRouter API Configuration**

The `.env` file is already configured with the OpenRouter API key and model:

```
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
VITE_OPENROUTER_MODEL=deepseek/deepseek-chat-v3-0324:free
```

3. **Run the application**

```bash
npm run dev
```

## How It Works

- The application uses a custom OpenRouter integration with LangChain.js to process chat messages
- The integration is in `src/services/langchain-service.ts` using a custom `OpenRouterChatModel` class
- The chat context and UI remain the same, but now use the Deepseek model via OpenRouter for AI responses
- If there's an error with the API, the app will fall back to a simple error message

## Security Considerations

- The API key is stored in the `.env` file and accessed via environment variables
- The key is never hard-coded in the source files
- In production, you should consider using a backend proxy to handle API calls instead of making them directly from the browser

## Customization

You can modify the `src/services/langchain-service.ts` file to:
- Use different OpenRouter models
- Adjust the system message to guide the AI's responses
- Change the model parameters like temperature
- Implement memory or retrieval augmentation
- Add specialized tools or agents for DeFi knowledge

## Features

- **OpenRouter Integration**: Uses the Deepseek Chat model via OpenRouter
- **System Message**: The AI is guided by a system message that focuses it on DeFi yield strategies
- **Error Handling**: Graceful fallbacks if the API is unavailable
- **Type Safety**: Full TypeScript integration with your existing types
- **Extensible**: Easy to add more advanced LangChain features like agents, tools, or retrievers
