import { useState } from "react";
import Link from "next/link";
import { routes } from "@/utils/routes";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-dark p-2'>
      <div className='container mx-auto flex justify-between items-center text-sm'>
        {/* Logo or Title */}
        <div className='text-primary text-xl font-bold'>
          <Link href='/'>Ravi Choppari</Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-4'>
          {routes.map(({ name, dest }: { name: string; dest: string }) => (
            <Link
              key={name}
              href={dest}
              className={`text-white hover:text-primary p-2 rounded ${
                router.asPath === `/${dest}` ? "text-primary" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <button className='md:hidden text-white' onClick={toggleMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-secondary`}>
        <div className='flex flex-col items-center space-y-4 p-4 w-full'>
          {routes.map(({ name, dest }: { name: string; dest: string }) => (
            <Link
              key={name}
              href={dest}
              className={`text-white hover:bg-dark p-2 rounded w-full text-center ${
                router.asPath === `/${dest}` ? "bg-dark" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
