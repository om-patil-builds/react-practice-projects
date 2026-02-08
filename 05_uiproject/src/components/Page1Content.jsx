import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

//import RightContent from './RightContent'

const Page1Content = (props) => {
 // console.log(props.users)
 // console.log(props.users)
  return (
    <div className='pb-16 pt-6 flex items-center justify-between gap-10 h-[90vh] px-18'>
        <LeftContent/>
        <RightContent users={props.users}/>
    
    </div>
  )
}

export default Page1Content