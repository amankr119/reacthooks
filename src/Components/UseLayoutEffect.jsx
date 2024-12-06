import React, { useLayoutEffect, useRef, useState } from 'react'

const UseLayoutEffect = () => {

    const [toggle, setToggle] = useState(false)
    const textRef = useRef()

    const handleToggle = ()=>{
        setToggle(!toggle)
    }

    // useEffect(()=>{
    //     if(textRef.current!=null){
    //         const dimension = textRef.current.getBoundingClientRect();
    //         textRef.current.style.paddingTop = `${dimension.height}px`
    //     }        
    // }, [toggle])

    useLayoutEffect(()=>{
        if(textRef.current!=null){
            const dimension = textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop = `${dimension.height}px`
        }
    }, [toggle])

  return (
    <div>
      <button className='btn btn-primary' onClick={handleToggle}>Toggle</button>
      {toggle&&<h3 ref={textRef} className={toggle?"bg-info p-5":"bg-white"}>This is uselayouteffect component</h3>}
    </div>
  )
}

export default UseLayoutEffect
