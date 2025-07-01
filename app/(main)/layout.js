import React from 'react'

const MainLayout = ({children}) => {
  //if user not onboarded then redirect them to onboarding page.
  return (
    <div className='container mx-auto mt-24 mb-20'>
      {children}
    </div>
  )
};

export default MainLayout