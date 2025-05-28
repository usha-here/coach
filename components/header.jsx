import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>         
        <nav>
            <Link href="/">
            <Image src='/coachlogo.png' alt='logo' width={200} height={60}
            className='h-12 py-1 w-auto object-contain'/>
            </Link>
        </nav>
      <SignedOut>    
              <SignInButton />    
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
    </header>
  )
}

export default Header
