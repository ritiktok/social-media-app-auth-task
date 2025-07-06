# Atlys Frontend Task

This is a simple React + TypeScript frontend project for a forum-like app. It features:

- User authentication (login/signup) with modal support
- Main feed with messages
- Responsive and modern UI using Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Project Structure

- `src/` - Main source code
  - `views/` - Page components (MainFeed, AccessPage, RegistrationPage)
  - `modules/` - Message-related components
  - `shared/` - Shared UI components (NavigationBar, AuthModal)
  - `core/` - Session management
  - `data/` - Data types

## Features

- Login and signup via modal or dedicated pages
- Message feed with interactive elements
- Session management using localStorage

## License

MIT
