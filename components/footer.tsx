import Image from "next/image";
import Link from "next/link";

export default function Footer()
{
    return(
        <div className="flex justify-between items-center border-t">
            © 2024 Farzeen Ilyas Zargar.
            <div className="flex">
                <Link href="x.com/farzeenilya" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/x.png" alt="X" width={24} height={24} /></Link>
                <Link href="github.com/farzeenilya" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/github.png" alt="GitHub" width={24} height={24} /></Link>
                <Link href="linkedin.com/in/farzeenilya" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} /></Link>
                <Link href="mailto:farzeenilyaszargar@gmail.com" className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"><Image src="/email.png" alt="Email" width={24} height={24} /></Link>
            
                
            </div>
        </div>
    );
}