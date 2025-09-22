# Overview

This is a full-stack educational web application focused on transmission media analysis. The application provides an interactive dashboard for comparing guided and unguided transmission media characteristics across different use cases. It features visualizations through charts, gauges, and data tables to help users understand the trade-offs between different transmission media types in various scenarios like LANs, remote areas, industrial environments, and mobile communications.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent design
- **Styling**: Tailwind CSS with CSS variables for theming and dark mode support
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query for server state management and data fetching
- **Charts**: Recharts library for data visualization (bar charts, gauges)
- **Build Tool**: Vite with React plugin and runtime error overlay for development

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server Structure**: Modular route registration system with centralized error handling
- **Storage Interface**: Abstract storage interface (IStorage) with in-memory implementation
- **Development Setup**: Vite middleware integration for seamless full-stack development
- **API Design**: RESTful API structure with `/api` prefix for all endpoints

## Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL adapter
- **Development Storage**: In-memory storage implementation for development/testing

## Database Schema
- **Users Table**: Basic user structure with ID, username, and password fields
- **Schema Location**: Shared schema definitions in `shared/schema.ts`
- **Type Safety**: Zod schema validation integrated with Drizzle for runtime type checking

## External Dependencies

- **Database**: Neon Database (serverless PostgreSQL)
- **UI Framework**: Radix UI component primitives
- **Charts**: Recharts for data visualization
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Development Tools**: Replit-specific plugins for development environment integration
- **Build Tools**: ESBuild for production server bundling, Vite for client bundling