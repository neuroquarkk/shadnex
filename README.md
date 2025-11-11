# 🚀 Shadnex

<div align="center">

[![npm version](https://img.shields.io/npm/v/shadnex.svg?style=flat-square)](https://www.npmjs.com/package/shadnex)
[![npm downloads](https://img.shields.io/npm/dm/shadnex.svg?style=flat-square)](https://www.npmjs.com/package/shadnex)
[![GitHub stars](https://img.shields.io/github/stars/vedantlavale/shadnex.svg?style=flat-square)](https://github.com/vedantlavale/shadnex)
[![GitHub issues](https://img.shields.io/github/issues/vedantlavale/shadnex.svg?style=flat-square)](https://github.com/vedantlavale/shadnex/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**The ultimate CLI for creating Next.js applications with Shadcn UI**

[📦 Install](#-installation) • [🚀 Quick Start](#-quick-start) • [📚 Features](#-key-features)

---

</div>

## ✨ What is Shadnex?

**Shadnex** is a powerful, interactive CLI tool that revolutionizes the way you set up modern Next.js applications with Shadcn UI. It combines the robustness of Next.js with the elegance of Shadcn UI components, providing a seamless development experience from project initialization to production-ready deployment.

Whether you're a seasoned developer or just starting your React journey, Shadnex eliminates the tedious setup process and gets you coding faster than ever.

## 🚀 Quick Start

Get started in seconds with zero configuration:

```bash
# No installation required - use npx
npx shadnex@latest

# Or install globally for repeated use
npm install -g shadnex
shadnex
```

That's it! Follow the interactive prompts and you'll have a fully configured Next.js + Shadcn UI project ready to go.

## 🎯 Key Features

### ⚡ Lightning Fast Setup
- **Interactive CLI** with beautiful, intuitive prompts
- **Zero-config defaults** for the most common use cases
- **Smart package manager detection** and compatibility
- **One-command project creation** with all dependencies installed

### 🎨 Modern Tech Stack
- **Next.js 14+** with App Router support
- **TypeScript** with strict type checking
- **Tailwind CSS** for utility-first styling
- **Shadcn UI** for beautiful, accessible components
- **ESLint** for code quality and consistency

### 🛠️ Developer Experience
- **Turbopack** integration for blazing-fast builds
- **Custom import aliases** (`@/*` by default)
- **Flexible project structure** (src/ or root directory)
- **Graceful error handling** with helpful recovery suggestions
- **Cross-platform compatibility** (macOS, Linux, Windows)

### 📦 Package Manager Support
- **npm** - The classic package manager
- **yarn** - Facebook's fast, reliable package manager
- **pnpm** - Disk-efficient package manager
- **bun** - The fastest JavaScript runtime & package manager

## 📦 Installation

### Option 1: Use npx (Recommended)

No installation required - run directly:

```bash
npx shadnex@latest
```

### Option 2: Global Installation

Install once, use everywhere:

```bash
# npm
npm install -g shadnex

# yarn
yarn global add shadnex

# pnpm
pnpm add -g shadnex

# bun
bun add -g shadnex
```

### Option 3: Local Development

For contributors or testing:

```bash
# Clone the repository
git clone https://github.com/vedantlavale/shadnex.git
cd shadnex

# Install dependencies
bun install

# Run the CLI
bun run dev
```

## 🛠️ Usage

### Basic Usage

```bash
# Using npx (recommended)
npx shadnex@latest

# Using globally installed CLI
shadnex

# Local development
cd shadnex && bun run dev
```

### Interactive Setup Flow

The CLI guides you through a comprehensive setup process:

1. **📦 Package Manager Selection**
   - Choose between npm, yarn, pnpm, or bun

2. **📝 Project Configuration**
   - Project name and directory
   - TypeScript support
   - ESLint integration
   - Tailwind CSS inclusion

3. **🏗️ Project Structure**
   - App Router vs Pages Router
   - Source directory (`src/`) preference
   - Custom import aliases

4. **⚡ Performance Options**
   - Turbopack for faster development
   - Build optimizations

5. **🎨 UI Framework Setup**
   - Automatic Shadcn UI installation
   - Component library configuration

### Example Output

```
╭────────────────────────────────────────────────────────────╮
│ 🚀 What is your project named?                             │
╰────────────────────────────────────────────────────────────╯

my-awesome-app

╭────────────────────────────────────────────────────────────╮
│ ◆ Which package manager would you like to use?            │
╰────────────────────────────────────────────────────────────╯

● npm
  yarn
  pnpm
  bun

[... interactive prompts ...]

╭────────────────────────────────────────────────────────────╮
│ 🎉 Success! Your Next.js app is ready.                    │
│                                                           │
│ 🚀 Quick start:                                           │
│    cd my-awesome-app                                       │
│    npm run dev                                            │
│                                                           │
│ 📚 Resources:                                             │
│    Shadcn UI: https://ui.shadcn.com                       │
│    Next.js Docs: https://nextjs.org/docs                  │
╰────────────────────────────────────────────────────────────╯
```

## 📁 Generated Project Structure

After running Shadnex, you'll get a production-ready project:

```
my-awesome-app/
├── app/                    # Next.js 13+ App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Shadcn UI components
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx    # Button component
│   │   └── ...
│   └── ...
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── ...
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS config
├── components.json       # Shadcn UI config
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript config
└── eslint.config.js      # ESLint configuration
```

## 🎨 Working with Shadcn UI

Once your project is set up, adding components is effortless:

```bash
# Navigate to your project
cd my-awesome-app

# Add individual components
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card

# Add multiple components at once
npx shadcn@latest add button input card dialog

# View available components
npx shadcn@latest add --help
```

## 🔧 Configuration Options

| Option | Description | Default | Choices |
|--------|-------------|---------|---------|
| **Project Name** | Your application name | - | Any valid directory name |
| **Package Manager** | Dependency management | npm | npm, yarn, pnpm, bun |
| **TypeScript** | Type-safe development | Yes | Yes/No |
| **ESLint** | Code linting | Yes | Yes/No |
| **Tailwind CSS** | Utility-first CSS | Yes | Yes/No |
| **App Router** | Next.js routing | Yes | Yes/No |
| **Source Directory** | `src/` structure | No | Yes/No |
| **Turbopack** | Fast bundler | Yes | Yes/No |
| **Import Alias** | Path alias | `@/*` | Custom alias |
| **Shadcn UI** | Component library | Yes | Yes/No |

## 🏗️ Development

### Prerequisites

- **Node.js** 18.0.0 or higher
- **Bun** (recommended for development)

### Building from Source

```bash
# Clone the repository
git clone https://github.com/vedantlavale/shadnex.git
cd shadnex

# Install dependencies
bun install

# Development mode
bun run dev

# Build for production
bun run build

# Test the built CLI
node dist/cli.js
```

### Project Architecture

```
src/
├── cli.ts              # Main CLI entry point
├── types/
│   └── index.ts        # TypeScript definitions
├── utils/
│   ├── commands.ts     # Shell command utilities
│   ├── ui.ts          # Terminal UI helpers
│   ├── logo.ts        # ASCII logo display
│   └── package-manager.ts # Package manager utilities
└── prompts/
    └── setup.ts        # Interactive prompts
```

## 🤝 Contributing

We welcome contributions from developers of all skill levels!

### Getting Started

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/your-username/shadnex.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Install** dependencies: `bun install`
5. **Make** your changes
6. **Test** thoroughly: `bun run dev`
7. **Commit** your changes: `git commit -m 'Add amazing feature'`
8. **Push** to your branch: `git push origin feature/amazing-feature`
9. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style and patterns
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting
- Use conventional commit messages

### Issue Templates

- 🐛 **[Bug Report](https://github.com/vedantlavale/shadnex/issues/new?template=bug_report.md)**
- 💡 **[Feature Request](https://github.com/vedantlavale/shadnex/issues/new?template=feature_request.md)**
- ❓ **[Questions & Discussions](https://github.com/vedantlavale/shadnex/discussions)**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Shadnex stands on the shoulders of giants:

- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[Shadcn UI](https://ui.shadcn.com/)** - Beautiful and accessible components
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and toolkit
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types

## 📞 Support & Community

- **📧 Email**: vedantlavale.work@gmail.com
- **🐛 Issues**: [GitHub Issues](https://github.com/vedantlavale/shadnex/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/vedantlavale/shadnex/discussions)
- **📖 Documentation**: [Next.js Docs](https://nextjs.org/docs) • [Shadcn UI](https://ui.shadcn.com/)

---

<div align="center">

**Made with ❤️ by [Vedant Lavale](https://github.com/vedantlavale)**

[⭐ Star on GitHub](https://github.com/vedantlavale/shadnex) • [📦 Install from npm](https://www.npmjs.com/package/shadnex) • [🚀 Get Started](#-quick-start)

</div>
