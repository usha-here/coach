import { industries } from '@/data/industries'
import OnboardingForm from './_components/onboarding-form'
import React from 'react'
//check if user is already onboarded, if they are then redirect them to dashboard
const OnboardingPage = () => {
  return (
    <main>
      <OnboardingForm industries={industries}/>        {/*client component */}
    </main>
  )
}

export default OnboardingPage