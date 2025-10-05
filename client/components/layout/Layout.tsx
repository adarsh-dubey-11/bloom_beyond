import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-[radial-gradient(1200px_600px_at_100%_-20%,hsl(var(--accent))/60,transparent_60%),radial-gradient(900px_500px_at_-10%_-10%,hsl(var(--secondary))/60,transparent_60%)]">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
