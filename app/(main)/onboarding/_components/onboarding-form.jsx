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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';



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

  const onSubmit = async (values) => {
    console.log(values);

  };



const watchIndustry = watch("industry"); //to watch the industry value


  return (
    //create ui
    <div className="flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
  <CardHeader>
    <CardTitle className="font-bold md:text-4xl lg:text-4xl xl:text-8xl    
    bg-gradient-to-b from-gray-400 via-grey-100 to-blue-200  
    gradient font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2">Complete Your Profile</CardTitle>
    <CardDescription> Select your industry to get personalized career insights and
            recommendations.</CardDescription>
   </CardHeader>
  <CardContent>
    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">

      <Label htmlFor="industry">Industry</Label>
      <Select
      onValueChange={(value) => {
                  setValue("industry", value);
                  setSelectedIndustry(
                    industries.find((ind) => ind.id === value)
                  );
                  setValue("subIndustry", "");
                }}
      >
  <SelectTrigger id="industry">
    <SelectValue placeholder="Select an Industry" />
  </SelectTrigger>
  <SelectContent>
    {industries.map((ind)=>{
      return (<SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>);
      })}
    </SelectContent>
</Select>
{/*if user has not selected an industry, and tries to submit then show an error message*/}
{errors.industry && (
  <p className="text-red-500 text-sm mt-1">
    {errors.industry.message}
  </p>
)}
</div>


{/* sub industry*/}
{ watchIndustry && (
<div className="space-y-2">
      <Label htmlFor="subIndustry">Specialization</Label>
      <Select onValueChange={(value) => setValue("subIndustry", value)}>
  <SelectTrigger id="subIndustry">
    <SelectValue placeholder="Select an Industry" />
  </SelectTrigger>
  <SelectContent>
    {selectedIndustry?.subIndustries.map((ind)=>{
      return (
      <SelectItem value={ind} key={ind}>
        {ind}
        </SelectItem>);
      })}
    </SelectContent>
</Select>
{/*if user has not selected an industry, and tries to submit then show an error message*/}
{errors.subIndustry && (
  <p className="text-red-500 text-sm mt-1">
    {errors.subIndustry.message}
  </p>
)}
</div>
)}


{/* experience*/}
<div className="space-y-2">
      <Label htmlFor="experience">Years Of Experience</Label>
     <Input
     id="experience"
      type="number"
      min="0"
      max="50"
      placeholder="Enter your years of experience"
      {...register("experience")}
      
     />
{/*if user has not selected an industry, and tries to submit then show an error message*/}
{errors.experience && (
  <p className="text-red-500 text-sm mt-1">
    {errors.experience.message}
  </p>
)}
</div>

{/* skills*/}

<div className="space-y-2">
      <Label htmlFor="Skills">Skills</Label>
     <Input
     id="skills"
    placeholder="eg. JavaScript, React, project management"
      {...register("skills")}
     />
     <p className="text-sm text-muted-foreground">
      Separate multiple skills with commas.
      </p>
{/*if user has not selected an industry, and tries to submit then show an error message*/}
{errors.skills && (
  <p className="text-red-500 text-sm mt-1">
    {errors.skills.message}
  </p>
)}
</div>

{/* Bio*/}

<div className="space-y-2">
      <Label htmlFor="bio">Professional Bio</Label>
     <Textarea
     id="bio"
    placeholder="Tell us about your professional background...."
    className="h-32"
      {...register("bio")}
     />
{/*if user has not selected an industry, and tries to submit then show an error message*/}
{errors.bio && (
  <p className="text-red-500 text-sm mt-1">
    {errors.bio.message}
  </p>
)}
</div>

<Button type="submit" className="w-full">
  Complete Profile
</Button>
    </form>
  </CardContent>
</Card>
  </div>
  )
}

export default OnboardingForm;