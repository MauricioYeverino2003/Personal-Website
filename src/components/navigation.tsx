import Link from "next/link";
import { Button } from "src/components/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-medium">Mauricio Yeverino</h1>
          <div className="flex space-x-2">
            <Button asChild variant="ghost" className="px-4">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="ghost" className="px-4">
              <Link href="/personal">Personal Corner</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
