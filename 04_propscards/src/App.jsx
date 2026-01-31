import React from 'react'
import Card from './components/Card'

const App = () => {
  const arr = [
      {
    brandlogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$25/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$30/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/infosys.com",
    companyName: "Infosys",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$18/hour",
    location: "Nagpur, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/tcs.com",
    companyName: "TCS",
    datePosted: "1 week ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$22/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/flipkart.com",
    companyName: "Flipkart",
    datePosted: "4 weeks ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$20/hour",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/zomato.com",
    companyName: "Zomato",
    datePosted: "6 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$28/hour",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/paytm.com",
    companyName: "Paytm",
    datePosted: "10 weeks ago",
    post: "Node.js Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$40/hour",
    location: "Remote, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/wipro.com",
    companyName: "Wipro",
    datePosted: "8 days ago",
    post: "System Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$24/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/startup.com",
    companyName: "TechNova",
    datePosted: "12 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$26/hour",
    location: "Mumbai, India"
  }
  ]
  return (
    <div className='parent'>

      {arr.map((elem , index)=>{
        return <Card key={index} logo={elem. brandlogo} company={elem.companyName}  date={elem. datePosted} tag1={elem.tag1} tag2={elem.tag2} payment={elem.pay} loc={elem.location} post={elem.post}/>
      
      })}


    </div>
  )
}

export default App