import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="font-display text-3xl font-semibold">{title}</h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        This page is a placeholder. Tell me what you want here and I’ll build it next.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
