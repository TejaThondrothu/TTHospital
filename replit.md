# APIC Hospital - React Website

## Project Overview
A modern hospital website built with React and Vite, featuring multiple pages including Home, About Us, Services, Doctors, Location & Hours, and Appointment booking. The site uses Tailwind CSS for styling and includes various interactive components.

## Architecture
- **Frontend**: React 19.1.1 with Vite 7.1.4 build tool
- **Routing**: React Router DOM for single-page application navigation
- **Styling**: Tailwind CSS with PostCSS
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React and React Icons
- **Development**: ESLint for code quality

## Project Structure
```
src/
├── components/        # Reusable UI components
├── pages/            # Route-based page components
├── utilities/        # Utility components (spinner)
├── assets/           # Static assets
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## Configuration
- **Vite Config**: Configured for Replit environment with host 0.0.0.0:5000
- **Deployment**: Autoscale deployment with build and preview commands
- **Workflow**: Frontend server running on port 5000

## Recent Changes (2025-09-19)
- Configured Vite for Replit proxy compatibility
- Set up development workflow on port 5000
- Configured deployment settings for production
- Project successfully imported and running

## Key Components
- Hero Slider for homepage banner
- About sections with vision/mission/values
- Services listing and details
- Doctor profiles section
- Appointment booking modal
- Location and hours information
- Testimonials section
- Footer with contact information

## Dependencies
All dependencies are installed and managed via npm. The project uses modern React patterns and hooks throughout.