import React from 'react'
import Image from 'next/image'
import { Chakra_Petch } from 'next/font/google'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';

const chakra = Chakra_Petch({ subsets: ["latin"],weight: "400"});
const Header = () => {

  return (
    <header>
        <nav className='w-4/5 h-24 bg-background text-primary m-auto flex justify-between items-center'>
            <div className={cn("text-2xl", chakra.className)}>
                <Link href={"/"}>
               VK STORE
               </Link>
            </div>
            <ul className='hidden md:flex justify-center items-center gap-5 text-lg'>
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>Shop</Link>
                <Link href={"/login"}><Button>Login</Button></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
