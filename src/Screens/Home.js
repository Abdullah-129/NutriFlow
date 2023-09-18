import React, {useEffect} from 'react'
import Hero from '../components/Hero'
import Proucts from '../components/Proucts'


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Hero/>
        <Proucts/>
    </div>
  )
}

export default Home