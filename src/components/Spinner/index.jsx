import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className={`${!loading&&'hidden'} absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-[99999999]`}>
      <ClipLoader loading={loading} />
    </div>
  )
}

export default Spinner

