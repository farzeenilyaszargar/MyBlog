import Image from "next/image";
import Link from "next/link";

export default function Hero()
{
    return(
        <div className="flex border-t border-b flex-col ">
            <h2 className="text-2xl font-bold ">Hello, I am @farzeenilya</h2>
            <p className="text-lg">I learn new things and build things. Also have a nack for creating engaging content.</p>
            <div className="flex ">
                <Link href="x.com/farzeenilya" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/x.png" alt="X" width={24} height={24} /></Link>
                <Link href="github.com/farzeenilya" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/github.png" alt="GitHub" width={24} height={24} /></Link>
                <Link href="linkedin.com/in/farzeenilya" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} /></Link>
                <Link href="mailto:farzeenilyaszargar@gmail.com" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/email.png" alt="Email" width={24} height={24} /></Link>
            </div>
        </div>
    );
}