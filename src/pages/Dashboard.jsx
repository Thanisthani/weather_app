import React from 'react'
import CityCard from '../components/Dashboard/CityCard'
import Header from '../components/Dashboard/Header'

function Dashboard() {
  return (
      <div className='bg-cloud-bg  bg-cover bg-center min-h-screen xs:w-screen '>
          <Header />
          <CityCard />
    </div>
  )
}

export default Dashboard