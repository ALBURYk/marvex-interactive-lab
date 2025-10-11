# MarVex - AI & Robotics Development Platform

MarVex is a comprehensive platform that empowers developers, researchers, and students to explore and build intelligent systems through an intuitive web interface. Our suite of tools makes advanced AI and robotics concepts accessible to everyone.

## 🚀 Features

- **Neural Network Visualizer** - Visualize and understand neural network architectures
- **Computer Vision Studio** - Real-time object detection and image analysis
- **ML Model Playground** - Train and test machine learning models in your browser
- **Robot Path Planner** - Simulate and optimize robot navigation algorithms

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn-ui
- **Backend**: Lovable Cloud (Supabase)
- **Authentication**: Secure user authentication system
- **Routing**: React Router v6

## 📚 Documentation

Detailed documentation for each tool is available in the `/docs` folder:

- [Getting Started Guide](docs/getting-started.md)
- [Neural Network Visualizer](docs/neural-network-visualizer.md)
- [Computer Vision Studio](docs/computer-vision-studio.md)
- [ML Model Playground](docs/ml-model-playground.md)
- [Robot Path Planner](docs/robot-path-planner.md)

## 🏃 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Development

### Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components and routes
│   └── tools/       # Individual tool pages
├── contexts/        # React contexts (Auth, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── integrations/    # Backend integrations
```

### Editing Your Code

**Use Lovable (Recommended)**

Simply visit the [Lovable Project](https://lovable.dev/projects/4f675a11-402e-4029-921f-756573316780) and start prompting. Changes are automatically committed to this repo.

**Use Your Preferred IDE**

Clone this repo and push changes. All changes sync with Lovable automatically.

**Edit Directly in GitHub**

Navigate to files and click the "Edit" button (pencil icon) to make changes.

**Use GitHub Codespaces**

Click "Code" → "Codespaces" → "New codespace" to launch a cloud development environment.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is configured for deployment on Lovable. Simply open [Lovable](https://lovable.dev/projects/4f675a11-402e-4029-921f-756573316780) and click Share → Publish.

### Custom Domain

To connect a custom domain:
1. Navigate to Project > Settings > Domains in Lovable
2. Click "Connect Domain" and follow instructions
3. Note: A paid Lovable plan is required for custom domains

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 🔒 Environment Variables

The following environment variables are automatically configured:
- `VITE_SUPABASE_URL` - Backend API URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Public API key
- `VITE_SUPABASE_PROJECT_ID` - Project identifier

## 📖 Usage Guidelines

### Ethical AI Use

MarVex tools are designed for educational and research purposes. Users must:
- Respect data privacy and obtain proper consent
- Avoid surveillance or unauthorized monitoring
- Follow ethical AI guidelines and local regulations
- Disclose AI-generated content appropriately

### Tool-Specific Rules

Each tool has specific usage restrictions and guidelines. Please review the documentation for each tool before use.

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- Documentation: [docs/getting-started.md](docs/getting-started.md)
- Issues: Create an issue in this repository
- Project URL: https://lovable.dev/projects/4f675a11-402e-4029-921f-756573316780

## 🙏 Acknowledgments

Built with [Lovable](https://lovable.dev) - The AI-powered app builder.

---

© 2025 MarVex. Empowering intelligent systems for everyone.
