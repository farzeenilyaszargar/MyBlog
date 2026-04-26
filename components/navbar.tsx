import Link from "next/link";

export default function Navbar()
{
    return(
        <div className="h-16 border-b flex justify-between items-center">
            <h1 className="text-xl font-bold py-5">Fizzy's Blog</h1>
            <div className="flex justify-center items-center">
                <Link href="/" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">About</Link>
                <p>Light</p>
            </div>
        </div>
    );
}