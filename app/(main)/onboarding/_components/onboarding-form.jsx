"use client";

import { onboardingSchema } from '@/app/lib/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { 
  Card, 
   CardContent, 
   CardDescription, 
   CardHeader, 
   CardTitle } from '@/components/ui/card';


const OnboardingForm = ({ industries }) => {

    const router = useRouter();
    //usestate
  const [selectedIndustry, setSelectedIndustry] = useState(null);


  const { 
    register,     
    handleSubmit,   //for submitting the form
    formState: { errors },   //for form validation errors
    setValue,         //
    watch,              //to watch the form values
  }=useForm({
    resolver:zodResolver(onboardingSchema),
  });                               //to create schemas for onboarding form create a new folder lib inside app folder
  return (
    //create ui
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
  <CardHeader>
    <CardTitle className="font-bold md:text-4xl lg:text-4xl xl:text-8xl    
    bg-gradient-to-b from-gray-400 via-grey-200 to-gray-600  
    gradient font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2">Complete Your Profile</CardTitle>
    <CardDescription>Card Description</CardDescription>
   </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
</Card>
    </div>
  )
}

export default OnboardingForm;