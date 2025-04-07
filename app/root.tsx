import { CurrentUserProvider } from "./context/currentUser.context";
// ... (autres imports existants)

export default function App() {
  return (
    <html lang="en">
      <head>
        {/* ... (contenu existant) */}
      </head>
      <body>
        <CurrentUserProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </CurrentUserProvider>
      </body>
    </html>
  );
}
