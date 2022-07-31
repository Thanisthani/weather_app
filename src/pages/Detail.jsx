import React,{useEffect} from 'react'
import DetailCard from '../components/Detail/DetailCard'
import Footer from '../components/Detail/Footer'
import Header from '../components/Detail/Header'
import { useParams } from 'react-router-dom';

function Detail() {
  const { id,index } = useParams();

  useEffect(() => {
    console.log(id);
     
  }, []);
  return (
  
      <div className='bg-cloud-bg  bg-cover bg-center min-h-screen xs:w-screen '>
      <Header />
      <DetailCard item={id} index={ index} />
      <Footer />
      </div>
   
    
  )
}

export default Detail