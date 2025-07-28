import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-slate-900">Sn</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-slate-600 hover:text-primary hover:bg-background/5 px-2 rounded-radius transition-colors text-base font-medium">
            Produtos
          </Link>
          <Link href="#why-us" className="text-slate-600 hover:text-primary hover:bg-background/5 px-2 rounded-radius transition-colors text-base font-medium">
            Por que escolher?
          </Link>
          <Link href="#cases" className="text-slate-600 hover:text-primary hover:bg-background/5 px-2 rounded-radius transition-colors text-base font-medium">
            Casos
          </Link>
          <Link
            href="#how-it-works"
            className="text-slate-600 hover:text-primary hover:bg-background/5 px-2 rounded-radius transition-colors text-base font-medium"
          >
            Como funciona?
          </Link>
        </nav>
        <Button size="sm" className="bg-primary hover:bg-accent text-primary-foreground hidden md:block">
          Contato
        </Button>
        {/* Mobile menu toggle would go here */}
      </div>
    </header>
  )
}
