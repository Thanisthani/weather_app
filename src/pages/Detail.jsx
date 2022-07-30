import React from 'react'
import DetailCard from '../components/Detail/DetailCard'
import Footer from '../components/Detail/Footer'
import Header from '../components/Detail/Header'

function Detail() {
  return (
  
      <div className='bg-cloud-bg  bg-cover bg-center min-h-screen xs:w-screen '>
      <Header />
      <DetailCard />
      <Footer />
      </div>
   
    
  )
}

export default Detail