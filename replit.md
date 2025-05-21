# Portfolio Website Project

## Overview

This project is a modern personal portfolio website built with React, TypeScript, and Express.js. It features a responsive design, client-side routing, and a contact form with server validation. The application uses a clean architecture with a client-server separation and leverages the Shadcn UI component library for consistent design patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built using a modern React stack with the following key technologies:

- **React**: Core UI library
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Shadcn UI**: Component library based on Radix UI
- **Framer Motion**: For animations
- **React Hook Form**: Form management with Zod validation
- **Wouter**: Lightweight client-side routing
- **React Query**: For API data fetching and caching

The frontend follows a component-based architecture with clear separation of concerns:

1. **Pages**: Top-level components that represent entire routes
2. **Components**: Reusable UI components, organized by feature and responsibility
3. **Hooks**: Custom React hooks for shared logic
4. **Utilities**: Helper functions and common utilities

### Backend Architecture

The backend is a lightweight Express.js server that provides:

- API endpoints for handling form submissions
- Static file serving for the React app
- Development support with Vite integration

The server is structured to:

1. Handle API routes through a clean routing system
2. Use middleware for request processing
3. Provide structured error handling
4. Support database integration through Drizzle ORM

### Database Architecture

The application is set up to use Drizzle ORM with PostgreSQL. The schema defines:

- Users table with authentication fields
- Contact messages table for storing form submissions

## Key Components

### Frontend Components

1. **App and Router**: Main application entry with route definitions
2. **Section Components**: Modular sections of the portfolio (Hero, About, Experience, etc.)
3. **UI Components**: Core UI elements from Shadcn UI
4. **Form Components**: Contact form with validation
5. **Theme Provider**: Handles theme switching between light and dark modes

### Backend Components

1. **Express Server**: Main server setup and configuration
2. **API Routes**: RESTful endpoints for data operations
3. **Storage Interface**: Abstraction for data persistence
4. **Schema**: Database schema definitions with Drizzle ORM
5. **Vite Integration**: Development server setup for HMR and debugging

## Data Flow

1. **Client-side Rendering**:
   - React components render in the browser
   - Data is fetched from the API when needed
   - Forms submit data to API endpoints

2. **API Communication**:
   - RESTful API endpoints exposed by Express
   - JSON data exchange between client and server
   - Form data validated on both client and server sides

3. **Data Persistence**:
   - Contact form submissions stored in the database
   - User data potentially stored for authentication
   - In-memory storage fallback for development

## External Dependencies

### Frontend Dependencies

- **@radix-ui/**: UI primitives for accessible components
- **@tanstack/react-query**: Data fetching and state management
- **class-variance-authority**: For component styling variants
- **framer-motion**: Animation library
- **react-hook-form**: Form state management
- **zod**: Schema validation
- **wouter**: Client-side routing

### Backend Dependencies

- **express**: Web server framework
- **drizzle-orm**: Database ORM
- **@neondatabase/serverless**: PostgreSQL client
- **zod**: Schema validation

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**:
   - Vite bundles frontend assets
   - Server code compiled with esbuild
   - Static assets served from the dist directory

2. **Runtime Environment**:
   - Node.js for server execution
   - PostgreSQL for database (to be provisioned)
   - Environment variables for configuration

3. **Development Workflow**:
   - `npm run dev`: Starts development server with hot reloading
   - `npm run build`: Builds for production
   - `npm run start`: Runs production build
   - `npm run db:push`: Updates database schema

## Development Guidelines

1. **Component Development**:
   - Follow the existing pattern of modular, self-contained components
   - Use TypeScript types for props and state
   - Leverage Shadcn UI components where possible

2. **API Development**:
   - Add new endpoints in `server/routes.ts`
   - Follow RESTful principles
   - Validate request data with Zod schemas

3. **Database Operations**:
   - Use Drizzle ORM for database queries
   - Define schemas in `shared/schema.ts`
   - Create migrations using Drizzle Kit

4. **Styling Approach**:
   - Use Tailwind CSS utility classes
   - Follow the existing design system with CSS variables
   - Use the shadcn/ui component library for consistent UI

5. **State Management**:
   - Use React Query for server state
   - Use React hooks for local component state
   - Share state between components using context where appropriate