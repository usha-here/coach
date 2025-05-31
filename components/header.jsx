import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const Header = () => {
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]: bg-background/60'>
      <nav className='container h-19 flex items-center justify-between'>
        <Link href="/">
          <Image src='/coachlogo.png' alt='logo' width={200} height={60}
            className='h-15 px-0 w-auto object-contain' />
        </Link>
        {/* Action Buttons */}

        <div className='flex items-center space-x-2 md:space-x-4'>
          <SignedIn>
            <Link href={'/dashboard'}>
              <Button variant='outline'>
                <LayoutDashboard className='h-5 w-5' />
                 Industry Insights
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-5 w-5" />
              </Button>
            </Link>

          {/* Growth Tools Dropdown */}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className='h-5 w-5' />
                <span className='hidden md:block'>Growth Tools</span>
                <ChevronDown className='h-5 w-5' />
              </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={'/resume'} className=' flex items-center gap-2'>
                  <FileText className='h-5 w-5' />
                  <span>Build resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/ai-cover-letter'} className=' flex items-center gap-2'>
                  <PenBox className='h-5 w-5' />
                  <span>Cover letter</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/interview'} className=' flex items-center gap-2'>
                  <GraduationCap className='h-5 w-5' />
                  <span>Interview Prep</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>
          <SignedOut>         
            <SignInButton>
              <Button variant='outline'>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
            appearance={{
              elements:{
                avatarBox:'w-20 h-20',
                userButtonPopoverCard:'shadow-xl',
                userPreviewMainIdentifier: 'font-semibold',
              },
            }}
            afterSignOutUrl='/'
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header
