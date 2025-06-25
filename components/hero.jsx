"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
  const imageRef=useRef(null);                        //by default , value of useRef is useRef(null)
  
  useEffect(()=>{
    const imageElement=imageRef.current;
    const handleScroll=()=>{
          const scrollPosition= window.scrollY;                //for rotation
    const scrollThreshold= 100;                         //for making it comeback to original position
    if(scrollPosition>scrollThreshold){
      imageElement.classList.add("scrolled");
    }
     else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);


  },[])
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
      <div className='space-y-6 text-center'> 
        <div className='space-y-6 mx-auto'>
          <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl 
          bg-gradient-to-b from-gray-400 via-grey-200 to-gray-600 
          gradient font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2'>
            Your AI Career Coach for <br/>
            Professional Success.
            </h1> <br/>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl font-semibold'>
            COACH : Creating Opportunities And Career Hope. <br/>
            Advance your career with personalized guidance,interview perp, and 
            AI powered tools for job success.
          </p>
          
        </div>
        <div className='flex justify-center space-x-4 '>
          <Link href="/dashboard">
          <Button size="lg" className="px-8 animate-bounce">Get Started</Button>
          </Link>
          <Link href="/dashboard">
          <Button size="lg" className="px-8 animate-bounce" variant="outline">Sign In</Button>
          </Link>
        </div>
        <div className='hero-image-wrapper mt-5 md:mt-0'>
          <div ref={imageRef} className='hero-image'>          {/*Through this {imageRef} ,you  will get the access to all the components of the div */}
            <Image src={"/banner2.jpeg"} 
            width={1280} 
            height={720} 
            alt="banner" 
            className='rounded-lg shadow-2xl border mx-auto' priority />
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection