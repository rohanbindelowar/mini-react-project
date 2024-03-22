import React, { useRef, useState } from 'react'
import UseOutsideClick from './OutsideClick';

export const UseOnClickOutsideTest = () => {
    const ref = useRef();
    UseOutsideClick(ref,()=>setShowContent(false))
    const [showContent, setShowContent] = useState(false);
  return (
    <div className='container' ref={ref}>
        {
            showContent?<div style={{background:"gray",color:"white",padding:"30px"}}>
                <h1>This is random content</h1>
                <p>click outside</p>
            </div>
            :
            <button onClick={()=>setShowContent(true)}>show Content</button>
        }
    </div>
  )
}
export default UseOnClickOutsideTest;
