import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "react-router";
import type { Route } from "./+types/root";
import { Header } from "./components/Header";
import "./styles/app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root(props: Route.ComponentProps) {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  
  return (
    <Layout>
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Oops!</h1>
          <p className="text-primary/70 mb-6">
            {isRouteErrorResponse(error)
              ? `${error.status} ${error.statusText}`
              : error instanceof Error
              ? error.message
              : "Unknown Error"}
          </p>
          <a
            href="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </Layout>
  );
}

