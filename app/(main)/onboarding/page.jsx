import { industries } from '@/data/industries'
import OnboardingForm from './_components/onboarding-form'
import { getOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'


//check if user is already onboarded, if they are then redirect them to dashboard
const OnboardingPage =async () => {
  const {isOnboarded}= await getOnboardingStatus();

  if(isOnboarded){
    redirect('/dashboard');
  }

  return (
    <main>
      <OnboardingForm industries={industries}/>  {/*client component */}
    </main>
  )
}

export default OnboardingPage