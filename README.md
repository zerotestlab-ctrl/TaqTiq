TaqTiq — Smart Borrowing Decision Assistant for Compound V3

TaqTiq is a user-focused decentralized finance (DeFi) tool that helps borrowers on COMPOUND V3 make better, safer lending and borrowing decisions. It provides an intuitive, interactive simulation interface that enables users to explore borrowing scenarios, understand risk exposure, and receive actionable recommendations.

Live Demo: https://taqtiq.vercel.app/  
GitHub Repo: https://github.com/zerotestlab-ctrl/TaqTiq

🚀 Project Overview

Decentralized lending protocols like Compound provide powerful financial primitives but many users struggle with complex risk parameters, liquidation thresholds, and optimal borrow limits. TaqTiq focuses on making these core concepts easy to understand by offering:

- Real-time scenario simulation based on user inputs  
- Clear risk classification and suggested borrowing strategies  
- A simple interactive interface with visual feedback  
- A lightweight, browser-based MVP demo

This project is designed as a **non-functional MVP prototype**, demonstrating the core concept and user experience without backend integration.

📌 Key Features

⚡ Homepage
- Introduces TaqTiq and its value proposition  
- Highlights key problems in DeFi borrowing  
- Explains the solution with clear feature breakdown

📘 About Page
- Describes the mission and vision of TaqTiq  
- Explains why this tool matters in the Compound ecosystem

🧠 Interactive Demo
- Accepts user inputs (e.g., collateral, borrow amount, risk tolerance)  
- Simulates outcomes and displays:
  - Risk level
  - Suggested strategy
  - Clear explanation text
- Uses simple client-side logic to deliver immediate feedback

💡 How It Works

TaqTiq helps users understand:
- The impact of different borrow amounts
- How volatility influences risk
- When a position becomes high risk or low risk
- Suggested action steps based on simulation results

This is particularly valuable for:
- New DeFi users learning to interact safely with Compound
- Experienced users looking for strategic decision support
- Community members evaluating risk and borrowing behavior


🧰 Tech Stack

| Component | Technology |
|----------|------------|
| Frontend  | Next.js (App Router) |
| Styling   | Tailwind CSS |
| UI Logic  | React (functional components) |
| Hosting   | Vercel |
| Demo Logic| Client-side simulation |

No backend or database is part of the MVP.

---

📂 Repo Structure
TaqTiq/ ├── client/                  # Vite frontend code │   ├── index.html │   ├── package.json │   ├── src/ │       ├── components/ │       ├── pages/ │       └── styles/ ├── server/                  (optional – unused in MVP) ├── shared/                  shared code ├── .gitignore └── README.md
Copy code

Important: Only the `client` folder is deployed on Vercel as a standalone frontend demo.

🧪 Running Locally

To run TaqTiq locally:

1. Clone the repo
   ```bash
   git clone https://github.com/zerotestlab-ctrl/TaqTiq.git
Navigate into the client folder
Copy code
Bash
cd TaqTiq/client
Install dependencies
Copy code
Bash
npm install
Start development server
Copy code
Bash
npm run dev
Open http://localhost:3000 in your browser.

📅 Project Status
TaqTiq is currently an MVP prototype showcasing core simulation and UI flows. The demo is functional and deployed via Vercel.
Future enhancements may include:
Integration with live on-chain Compound market data
More detailed risk modeling
Multi-scenario comparisons
User accounts and saved simulations

👨‍💻 Contributors
Name
Role
Profile
Mady Fofana (Founder)
Product Lead / UX
https://github.com/zerotestlab-ctrl

Ligalaz
Full-stack Developer & AI Integration
https://github.com/dravynn (AI), https://github.com/Yupsecous (Blockchain)

Jelson
Frontend Developer
https://github.com/nightskydev / https://www.linkedin.com/in/jelson-hosly

📄 License
This project is released under the MIT License.

❤️ Thank You
Thanks for checking out TaqTiq!
If you have questions, ideas, or want to contribute, feel free to reach out or open an issue.
