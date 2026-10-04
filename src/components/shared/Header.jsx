import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Container and Flex layout */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Column 1: Logo Text */}
        <div className="text-2xl font-extrabold text-blue-600 tracking-wide">
          <Link href="/">
            StoreX
          </Link>
        </div>

        {/* Column 2: Menu Items */}
        <nav className="hidden sm:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="#products" className="hover:text-blue-600 transition-colors">Products</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        {/* Column 3: Button */}
        <div>
          <Link 
            href="/cart" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-sm"
          >
            Cart (0)
          </Link>
        </div>

      </div>
    </header>
  );
}