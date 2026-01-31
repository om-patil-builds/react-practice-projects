import React, { useState } from 'react'
import { Diamond , Search , ShoppingCart} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [search, setSearch] = useState('')
  const formHandler = (e)=>{
   e.preventDefault()
    //setSearch(search)
    console.log(search)
    setSearch('')
  }
  const navigate = useNavigate()
  return (
    <div className="bg-blue-600 h-[10vh] flex items-center gap-11">
      
      {/* Logo section */}
      <div className="ml-[15%] leading-tight">
        <h1 className="font-bold text-2xl italic text-white">
          Flipkart
        </h1>
        <h2 className="italic flex items-center gap-1 text-white text-sm">
          Explore <span className="text-yellow-400 font-semibold">Plus</span>
          <Diamond className="w-4 h-4 text-yellow-400 fill-current" />
        </h2>
      </div>

      <div className="flex-1 max-w-xl relative">
        <form onSubmit={formHandler} className='relative'>
          <input
          required
          type="text"
          placeholder="Search for products, brands and more"
          className="w-full px-4 py-2 rounded-sm outline-none text-sm border-2 bg-white cursor-pointer border-none"   
         value={search}
         onChange={(e)=>
           setSearch(e.target.value)
         }
        />
         <button type="submit"><Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 active:scale-95 cursor-pointer " />  </button>
        </form>
      </div>

      <div className='flex items-center justify-between'>
        <button onClick={() => navigate('/login')} className='bg-white px-10 py-1 text-blue-400 font-bold text-m active:scale-95 cursor-pointer border-none'>Login</button>
      </div>
      <div className='flex gap-15 text-white'>
        <h2>Become a seller</h2>
        <h2>More</h2>
        <h2 className='flex gap-1'> 
            <ShoppingCart/>
            Cart</h2>
      </div>


    </div>
  )
}

export default Header

