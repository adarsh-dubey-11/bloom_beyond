import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MapPin, Search, ShoppingCart, UserRound, Leaf, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const categories = [
  { key: "roses", label: "Roses" },
  { key: "marigold", label: "Marigold" },
  { key: "tulips", label: "Tulips" },
  { key: "jasmine", label: "Jasmine" },
  { key: "orchids", label: "Orchids" },
  { key: "bouquets", label: "Bouquets" },
  { key: "garlands", label: "Garlands" },
  { key: "seasonal", label: "Seasonal" },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/marketplace?search=${encodeURIComponent(query)}`);
  };

  const isActive = useMemo(() => (path: string) => location.pathname === path, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/70">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-16 items-center gap-4">
          <Link to="/" className="group inline-flex items-center gap-2">
            <div className="grid size-9 place-content-center rounded-md bg-primary text-primary-foreground shadow-sm">
              <Flower2 className="size-5" />
            </div>
            <div className="leading-tight">
              <div className="text-xl font-semibold tracking-tight font-display">Bloom & Beyond</div>
              <div className="text-xs text-muted-foreground -mt-0.5">Flower marketplace</div>
            </div>
          </Link>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <div className="hidden items-center gap-2 rounded-md border bg-secondary/50 px-3 py-1.5 text-sm text-secondary-foreground md:flex">
              <MapPin className="mr-1 size-4" />
              Deliver to
              <span className="ml-1 font-medium">Your location</span>
            </div>
            <form onSubmit={onSearch} className="relative w-[46vw] max-w-2xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search flowers, bouquets, sellers..."
                className="w-full rounded-md bg-accent/50 pl-10 pr-4"
              />
            </form>
            <NavLink to="/marketplace" className={({ isActive }) => cn("text-sm font-medium", isActive && "text-primary")}>Shop</NavLink>
            <NavLink to="/sellers" className={({ isActive }) => cn("text-sm font-medium", isActive && "text-primary")}>Sellers</NavLink>
            <NavLink to="/become-a-seller" className={({ isActive }) => cn("text-sm font-medium", isActive && "text-primary")}>Become a Seller</NavLink>
            <Button asChild variant="secondary" className="gap-2">
              <Link to="/cart"><ShoppingCart className="size-4" /> Cart</Link>
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="ml-auto flex items-center gap-2 md:hidden">
            <Button size="icon" variant="secondary" asChild>
              <Link to="/cart"><ShoppingCart className="size-4" /></Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link to="/account"><UserRound className="size-4" /></Link>
            </Button>
          </div>
        </div>

        {/* Category rail */}
        <div className="-mx-2 mb-3 flex snap-x items-center gap-2 overflow-x-auto pb-2 md:mb-4">
          {categories.map((c) => (
            <button
              key={c.key}
              className={cn(
                "snap-start rounded-full border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5",
                isActive(`/marketplace/${c.key}`) && "border-primary bg-primary/10 text-foreground",
              )}
              onClick={() => navigate(`/marketplace?category=${c.key}`)}
            >
              <span className="inline-flex items-center gap-2">
                <Leaf className="size-4 text-primary" /> {c.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
