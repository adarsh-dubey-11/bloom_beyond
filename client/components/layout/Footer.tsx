import { Link } from "react-router-dom";
import { Flower2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-background">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="mb-3 inline-flex items-center gap-2">
            <div className="grid size-8 place-content-center rounded-md bg-primary text-primary-foreground">
              <Flower2 className="size-4" />
            </div>
            <span className="font-display text-lg font-semibold">Bloom & Beyond</span>
          </div>
          <p className="text-sm text-muted-foreground">
            India’s trusted flower marketplace. Fresh flowers from local sellers delivered fast.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-medium">Marketplace</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/marketplace" className="hover:text-foreground">Shop all</Link></li>
            <li><Link to="/marketplace?category=roses" className="hover:text-foreground">Roses</Link></li>
            <li><Link to="/marketplace?category=garlands" className="hover:text-foreground">Garlands</Link></li>
            <li><Link to="/marketplace?category=bouquets" className="hover:text-foreground">Bouquets</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-medium">Sellers</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sellers" className="hover:text-foreground">Top sellers</Link></li>
            <li><Link to="/become-a-seller" className="hover:text-foreground">Become a seller</Link></li>
            <li><Link to="/account" className="hover:text-foreground">Seller login</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-medium">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/help" className="hover:text-foreground">Help</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Bloom & Beyond. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
