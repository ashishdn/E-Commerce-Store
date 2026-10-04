import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      {/* Container and Flex layout */}
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright Text */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} StoreX. All rights reserved.
        </div>

        {/* Right Side: Footer Links */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="#privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="#support" className="hover:text-white transition-colors">
            Support
          </Link>
        </nav>

      </div>
    </footer>
  );
}