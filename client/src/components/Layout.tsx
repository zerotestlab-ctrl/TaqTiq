import { Link, useLocation } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2v20" />
                <path d="M2 12h20" />
                <path d="m12 12 4.25-4.25" />
                <path d="M7.75 7.75 12 12" />
              </svg>
            </div>
            <span className="font-heading">TaqTiq</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>
              Home
            </Link>
            <Link href="/about" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}>
              About
            </Link>
            <Link href="/demo" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/demo") ? "text-primary" : "text-muted-foreground"}`}>
              Demo
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/demo" className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Launch Simulation
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t bg-muted/40 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-heading font-bold text-lg">TaqTiq</span>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering strategic decisions through advanced simulation and data-driven insights.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TaqTiq. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
