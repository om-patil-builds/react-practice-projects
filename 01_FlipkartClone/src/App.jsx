import React from 'react'
import Header from './components/Header'
import CategoryNav from './components/CategoryNav'
import HeroBanner from './components/HeroBanner'
import  AppRouter from './components/AppRouter'

const App = () => {
  return (
    <div className='flex flex-col gap-2'>
    <Header/>
    <CategoryNav/>
    <HeroBanner/>
    <AppRouter/>

      
    </div>
  )
}

export default App