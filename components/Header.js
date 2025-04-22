import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-primary-300 text-white py-6 px-8 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href='/' className="flex items-center space-x-3">
                <img src="/logo.png" alt="Smith & Associates Logo" className="h-10 w-auto" />
                <h1 className="text-2xl font-bold text-yellow-400">Seridan Partners</h1>
                </Link>
                <nav className="space-x-6">
                <Link href="/" className="relative group">Home</Link>
                <Link href="/about" className="relative group">About</Link>
                <Link href="/attorneys" className="relative group">Attorneys</Link>
                <Link href="/#practice-areas" className="relative group">Practice Areas</Link>
                <Link href="/contact" className="relative group">Contact</Link>
                </nav>
            </div>
        </header>
    );
}   