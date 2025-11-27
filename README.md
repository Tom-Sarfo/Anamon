# Anamon

A React application built with React Router v7 Framework Mode.

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Type Checking

Generate route types and check TypeScript:

```bash
npm run typecheck
```

**Important:** Run this command after adding or renaming routes to generate type definitions.

### Building

Build for production:

```bash
npm run build
```

### Production Server

Start the production server:

```bash
npm start
```

## Project Structure

```
app/
  root.tsx          # Root component with layout and error boundary
  routes.ts         # Route configuration
  routes/
    home.tsx        # Home page route
    about.tsx       # About page route
```

## React Router v7 Framework Mode

This project uses React Router v7 in Framework Mode, which provides:

- Type-safe route modules with auto-generated types
- Server-side rendering (SSR) by default
- Intelligent code splitting
- Type-safe URL generation with `href()`
- Automatic route type generation

### Adding New Routes

1. Create a new route file in `app/routes/`
2. Add the route to `app/routes.ts`
3. Run `npm run typecheck` to generate types

Example:

```tsx
// app/routes.ts
route("products/:id", "routes/product.tsx")

// app/routes/product.tsx
import type { Route } from "./+types/product";

export async function loader({ params }: Route.LoaderArgs) {
  return { product: await getProduct(params.id) };
}

export default function Product({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData.product.name}</div>;
}
```

## Learn More

- [React Router Documentation](https://reactrouter.com)
- [Framework Mode Guide](https://reactrouter.com/start/modes#framework)
