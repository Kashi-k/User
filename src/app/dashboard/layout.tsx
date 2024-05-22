import React from 'react'
import Navbar from './_components/navbar';

const Authlayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <Navbar/>
      {children}
    
    </div>
  )
}

export default Authlayout