import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard, type ProductItem } from "@/components/common/ProductCard";

const featured: ProductItem[] = [
  {
    id: "r1",
    name: "Premium Red Rose Bouquet (24)",
    price: 899,
    rating: 4.8,
    seller: "Rose Valley Gardens",
    eta: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "m1",
    name: "Marigold Garland (5ft)",
    price: 349,
    rating: 4.6,
    seller: "Puja Florist",
    eta: "30-40 min",
    image:
      "https://images.unsplash.com/photo-1595147389795-37094173bfd4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "o1",
    name: "Pink Orchid Stem (5)",
    price: 599,
    rating: 4.7,
    seller: "Orchid House",
    eta: "25-35 min",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "b1",
    name: "Mixed Seasonal Bouquet",
    price: 749,
    rating: 4.5,
    seller: "Bloom Cart",
    eta: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Index() {
  const benefits = useMemo(
    () => [
      { icon: Truck, title: "Express delivery", desc: "Fresh flowers at your door in minutes" },
      { icon: Sparkles, title: "Handpicked quality", desc: "Curated from trusted local sellers" },
      { icon: ShieldCheck, title: "Secure payments", desc: "Safe checkout and easy refunds" },
    ],
    [],
  );

  return (
    <div>
      {/* Hero */}
      <section className="container mx-auto grid items-center gap-8 px-4 pb-10 pt-8 md:grid-cols-2 md:py-14">
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              India’s flower marketplace
            </span>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Bloom & Beyond — flowers from local sellers, delivered fast.
            </h1>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Discover roses, garlands, bouquets and more from verified florists near you. Shop like Blinkit — quick, reliable, delightful.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link to="/marketplace">
                Start shopping <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/become-a-seller">Become a seller</Link>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-2 md:max-w-lg">
            {benefits.map((b) => (
              <Card key={b.title} className="border-none bg-white/70 shadow-none backdrop-blur supports-[backdrop-filter]:bg-white/50">
                <CardContent className="flex items-start gap-3 p-3">
                  <b.icon className="mt-0.5 size-4 text-primary" />
                  <div>
                    <div className="text-sm font-medium">{b.title}</div>
                    <div className="text-xs text-muted-foreground">{b.desc}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border bg-card p-2 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop"
              alt="Bloom & Beyond hero"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -left-6 -top-6 -z-10 size-32 rounded-full bg-primary/15 blur-2xl md:size-40" />
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto space-y-6 px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold">Bestsellers near you</h2>
          <Button asChild variant="link" className="text-primary">
            <Link to="/marketplace">View all</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Seller highlight */}
      <section className="container mx-auto grid items-center gap-6 px-4 py-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1543363136-6b3acb7b51df?q=80&w=1600&auto=format&fit=crop"
            alt="Local seller"
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold">Support local florists</h3>
          <p className="text-muted-foreground">
            We partner with trusted sellers in your city to bring you the freshest flowers. Every order supports local businesses.
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <Link to="/sellers">Explore sellers</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/become-a-seller">Join as seller</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
