import React from 'react'
import { Bookmark } from "lucide-react"

const Card = (props) => {
        
  return (
    
         <div className='card'>
            <div className='top'>
                    <img src="{props.logo}" alt="Na" />
                    <button>Save <Bookmark/></button>
            </div>
            <div className='centre'>
                     <h3>{props.company}<span>{props.date}</span></h3>
                    <h2>{props.post}</h2>
            <div className='tag'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
            </div>
  
          </div>
                <div className='bottom'>
                  <div>
                        <h3>{props.payment}</h3>
                          <p>{props.loc}</p>
                 </div>

                 <div>
                     <button>Apply Now</button>
                </div>
             </div>
   

     </div>
    
  )
}

export default Card