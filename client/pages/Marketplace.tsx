import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard, type ProductItem } from "@/components/common/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const inventory: ProductItem[] = [
  { id: "r1", name: "Red Roses (12)", price: 399, rating: 4.7, seller: "Rose Valley Gardens", eta: "20-30 min", image: "https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1600&auto=format&fit=crop" },
  { id: "r2", name: "White Roses (12)", price: 379, rating: 4.4, seller: "Rose Valley Gardens", eta: "25-35 min", image: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?q=80&w=1600&auto=format&fit=crop" },
  { id: "m1", name: "Marigold Garland (5ft)", price: 349, rating: 4.6, seller: "Puja Florist", eta: "30-40 min", image: "https://images.unsplash.com/photo-1595147389795-37094173bfd4?q=80&w=1600&auto=format&fit=crop" },
  { id: "o1", name: "Pink Orchid Stems (5)", price: 599, rating: 4.7, seller: "Orchid House", eta: "25-35 min", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" },
  { id: "j1", name: "Jasmine Mogra (100g)", price: 189, rating: 4.2, seller: "Fresh Florals", eta: "20-25 min", image: "https://images.unsplash.com/photo-1626980637897-6a672135283b?q=80&w=1600&auto=format&fit=crop" },
  { id: "b1", name: "Mixed Seasonal Bouquet", price: 749, rating: 4.5, seller: "Bloom Cart", eta: "20-30 min", image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1600&auto=format&fit=crop" },
  { id: "g1", name: "Temple Garland (2ft)", price: 199, rating: 4.1, seller: "Puja Florist", eta: "30-40 min", image: "https://images.unsplash.com/photo-1620288645426-55f5c42760b5?q=80&w=1600&auto=format&fit=crop" },
  { id: "t1", name: "Dutch Tulips (10)", price: 559, rating: 4.6, seller: "Tulip Traders", eta: "35-45 min", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1600&auto=format&fit=crop" },
];

export default function Marketplace() {
  const q = useQuery();
  const [search, setSearch] = useState("");
  const category = q.get("category") || undefined;

  useEffect(() => {
    const s = q.get("search") || "";
    setSearch(s);
  }, [q]);

  const items = useMemo(() => {
    const term = search.trim().toLowerCase();
    return inventory.filter((p) => {
      const inCategory = category
        ? p.name.toLowerCase().includes(category) || p.id.startsWith(category[0])
        : true;
      const inSearch = term
        ? [p.name, p.seller].join(" ").toLowerCase().includes(term)
        : true;
      return inCategory && inSearch;
    });
  }, [category, search]);

  return (
    <div className="container mx-auto space-y-6 px-4 py-6">
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <h1 className="font-display text-2xl font-semibold">Marketplace</h1>
        <div className="flex w-full max-w-xl items-center gap-2 md:w-auto">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search flowers, bouquets, sellers..."
            className="bg-accent/50"
          />
          <Button variant="secondary" className="gap-2"><SlidersHorizontal className="size-4" /> Filters</Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {items.length === 0 && (
        <div className="py-16 text-center text-muted-foreground">No items found. Try a different search.</div>
      )}
    </div>
  );
}
