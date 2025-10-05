import { Star, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  seller: string;
  eta?: string;
}

export function ProductCard({ item, onAdd }: { item: ProductItem; onAdd?: (id: string) => void }) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {item.eta && (
          <span className="absolute left-2 top-2 rounded-md bg-background/80 px-2 py-1 text-xs font-medium shadow-sm backdrop-blur">
            {item.eta} delivery
          </span>
        )}
      </div>
      <CardContent className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-1 font-medium">{item.name}</h3>
            <p className="text-xs text-muted-foreground">by {item.seller}</p>
          </div>
          <div className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
            <Star className="size-3.5 text-primary" /> {item.rating.toFixed(1)}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">₹{item.price.toFixed(2)}</div>
          <Button size="sm" onClick={() => onAdd?.(item.id)} className="gap-2">
            <ShoppingBag className="size-4" /> Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
