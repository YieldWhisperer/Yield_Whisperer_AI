# YieldWhisperer

**YieldWhisperer** is an AI-powered cross-chain DeFi yield discovery and comparison platform. It helps users find, compare, and understand the best yield farming, staking, and lending opportunities across multiple blockchains, with a special focus on the Binance Smart Chain (BSC). The app features a conversational AI assistant, actionable DeFi panels, and wallet integration for a seamless DeFi experience.

---

## ✨ Features

### 1. **AI Chatbot Yield Assistant**
- **Conversational DeFi Queries**: Ask natural-language questions about yield farming, staking, lending, and DeFi strategies.
- **BSC-Focused Guidance**: Get tailored recommendations and comparisons for BSC tokens (BNB, WBNB, USDC, ETH, BUSD, USDT, FDUSD, etc.).
- **Cross-Chain Support**: Compare yields and strategies across Ethereum, Polygon, Arbitrum, Optimism, and BSC.
- **Personalized Suggestions**: Ask for low-risk, high-yield, or protocol-specific strategies based on your preferences.
- **Education**: Learn about DeFi concepts, protocols, and best practices directly from the chatbot.

### 2. **Live & Mock Yield Data**
- **Mock Data Mode**: Uses static mock yield data for all opportunities—no live API keys required, ensuring privacy and stability.
- **Yield Comparison**: Instantly compare APY, risk level, and protocols across chains and tokens.
- **BSC Leaderboards & Highlights**: Dedicated UI for top BSC yield opportunities and protocols.

### 3. **Wallet Integration**
- **Connect Your Wallet**: Supports MetaMask, WalletConnect, and other EVM wallets via RainbowKit and Wagmi.
- **Address-Aware Actions**: The app can personalize yield suggestions and simulate swap/bridge routes using your connected wallet address.
- **Safe by Design**: No automatic transactions are performed—your assets remain safe unless you manually interact with DeFi protocols.

### 4. **Cross-Chain Action Panel**
- **Token Swapping Simulation**: Choose from BSC, Ethereum, Polygon, Arbitrum, and Optimism. Select supported tokens and simulate cross-chain swaps.
- **BSC Token Support**: Full support for major BSC tokens in swap panels and yield queries.
- **Chain & Token Selection**: UI lets you easily select source/destination chains and tokens for yield or swap simulation.

### 5. **Modern, Responsive UI**
- **Beautiful Design**: Built with React, TypeScript, Tailwind CSS, and Shadcn UI components.
- **Mobile-Friendly**: Works across devices and screen sizes.
- **User-Friendly Panels**: Actionable panels for yield comparison, BSC highlights, and wallet connection.

---

## 🤖 AI Model & Security
- **OpenRouter Integration**: Uses the Deepseek Chat model (`deepseek/deepseek-chat-v3-0324:free`) via OpenRouter for all AI responses.
- **API Security**: The OpenRouter API key is stored securely in the `.env` file and never exposed in client-side code.
- **Custom LangChain Integration**: Implements a custom `OpenRouterChatModel` for seamless AI chat.

---

## 🚀 Getting Started

### 1. **Clone the Repository**
```bash
git clone https://github.com/YOUR_USERNAME/yield-whisper.git
cd yield-whisper
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Configure Environment Variables**
- Copy `.env.example` to `.env` and add your OpenRouter API key (if using live AI):
  ```env
  OPENROUTER_API_KEY=your_openrouter_api_key_here
  ```
- For demo/mock mode, no API key is required (mock yield data is used).

### 4. **Run the App**
```bash
npm run dev
```
- The app will be available at [http://localhost:8080](http://localhost:8080) or your configured port.

---

## 🛡️ Security & Privacy
- **No Private Keys**: The app never asks for or stores your private keys.
- **No Live Transactions**: By default, the app does not execute on-chain transactions—only simulates routes and yield opportunities.
- **API Key Management**: All sensitive keys are loaded from environment variables and never hardcoded.

---

## 💡 Example Questions You Can Ask the AI
- Where can I stake USDC for best yield?
- What are the best BSC yield farms right now?
- Show me BNB staking opportunities on BSC.
- Compare yields for USDT on BSC vs Ethereum.
- Which BSC protocols offer the highest APY for FDUSD?
- I have 500 USDT and want low-risk DeFi farming options.
- Compare ETH staking on Arbitrum vs Solana.

---

## 🛠️ Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **AI**: LangChain, OpenRouter, Deepseek Chat
- **Wallet**: RainbowKit, Wagmi
- **Build Tools**: Vite

---

## 📦 Project Structure
- `/src/components` — UI components (chat, panels, wallet, etc.)
- `/src/services` — Yield data, cross-chain logic, AI integration
- `/src/constants` — Token, chain, and protocol constants
- `/src/wallet` — Wallet provider setup
- `/public` — Static assets

---

## 🙋 FAQ

**Q: Can I use my real wallet?**  
A: Yes, but the app will only read your address for simulation and suggestions. No transactions are made without your explicit action.

**Q: Does the AI give financial advice?**  
A: No. The AI provides information and suggestions for research and demo purposes only.

**Q: Can I add more tokens or chains?**  
A: Yes! Update the token and chain lists in the source code as needed.

**Q: Is live yield data supported?**  
A: Currently, only mock yield data is used. You can extend the API integration for live data if desired.

---

## 📝 License
MIT

---

## 👤 Author & Contributions
- Created by [YOUR NAME or ORG]
- Contributions welcome! Open an issue or PR to suggest improvements.

---

## 📣 Disclaimer
This app is for educational and demonstration purposes only. Yield opportunities and APYs are mock data and do not represent real-time or accurate financial information. Always do your own research before investing in DeFi protocols.
