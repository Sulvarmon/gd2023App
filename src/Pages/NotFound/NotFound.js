import { React,useEffect } from 'react'

export default function NotFound() {
  useEffect(()=>{
    window.scrollTo(0, 0);
    document.title = 'NotFound'
},[])
  return (
    <div className='dfjcac colorBlue' style={{fontSize:'40px'}}>NotFound</div>
  )
}
