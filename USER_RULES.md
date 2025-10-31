# KUZO Tennis Academy - User Rules & Guidelines

## Project Overview
This is a modern React web application for KUZO Tennis Academy built with:
- Vite (build tool)
- TypeScript (type safety)
- React (UI library)
- shadcn/ui (component library)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Router (routing)
- React Three Fiber/Drei (3D graphics)

## Code Structure & Conventions

### 1. Component Structure
- Components are organized in `src/components/`
- UI components follow shadcn/ui patterns
- Pages are in `src/pages/`
- Each component should be a single default export
- Use functional components with TypeScript interfaces

### 2. Styling Guidelines
- Use Tailwind CSS utility classes exclusively
- Custom colors are defined in `tailwind.config.ts`
- Responsive design using Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Custom animations are defined in `tailwind.config.ts` and `index.css`

### 3. TypeScript Usage
- All components and pages must be written in TypeScript (.tsx)
- Define prop interfaces for all components
- Use TypeScript types for state and function parameters
- Leverage TypeScript for better IDE support and error checking

### 4. Routing
- All routes are defined in `src/App.tsx`
- Each page is wrapped with the Layout component
- Use React Router v6 syntax for navigation

### 5. Assets
- Images are stored in `src/assets/`
- Import images directly in components
- Use appropriate alt text for accessibility

## Component Development Rules

### 1. UI Components
- Follow shadcn/ui component patterns
- Use `cn()` utility for conditional class names
- Export both component and variants when applicable
- Use Radix UI primitives when available

### 2. Page Components
- Pages should focus on layout and composition
- Import and use shared components
- Implement responsive design
- Use Framer Motion for entrance animations

### 3. Animation Guidelines
- Use Framer Motion for page/component animations
- Leverage existing custom animations from `tailwind.config.ts`
- Implement staggered animations for lists and grids
- Use viewport-based animations for scroll-triggered effects

## Branding & Design System

### 1. Color Palette
- Primary: Blue-based (`hsl(var(--primary))`)
- Accent: Purple-based (`hsl(var(--accent))`)
- Background: Light theme by default with dark mode support
- Glass morphism effect: `kuzo-glass` class

### 2. Typography
- Font: Inter (loaded via Google Fonts)
- Font weights: 300-900
- Responsive font sizing using Tailwind classes

### 3. Custom Animations
- `tennis-bounce`: Bouncing effect
- `court-glow`: Pulsing glow effect
- `hero-float`: Gentle floating movement
- `geometric-float`: Complex floating pattern

## Development Workflow

### 1. Adding New Pages
1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Ensure the page is wrapped with Layout component
4. Test navigation and responsiveness

### 2. Adding New Components
1. Create component in appropriate subdirectory of `src/components/`
2. Follow existing patterns for props and TypeScript interfaces
3. Use Tailwind for styling
4. Export component as default export

### 3. Adding New Routes
1. Create the page component first
2. Import the component in `src/App.tsx`
3. Add the route within the Routes component
4. Wrap with Layout component
5. Place before the catch-all "*" route

## Performance & Best Practices

### 1. Image Optimization
- Use appropriate image formats (JPG for photos, PNG for graphics)
- Optimize image sizes for web use
- Use responsive image techniques when needed

### 2. Code Splitting
- Lazy load non-critical components when possible
- Use React's lazy and Suspense for route-based code splitting

### 3. Accessibility
- Use semantic HTML elements
- Provide alt text for images
- Ensure proper color contrast
- Implement keyboard navigation support

## Deployment
- Project is deployed via kuzoplatform
- Use `npm run build` for production builds
- Use `npm run dev` for development server