import React from 'react'
import Aboutgroup from '../../components/aboutgroup/Aboutgroup'
import Benifit from '../../components/benifit/Benifit'
import Improvement from '../../components/improvement/Improvement'
import Inspire from '../../components/inspire/Inspire'
import Meet from '../../components/meet/Meet'
import Process from '../../components/process/Process'

function Aboutus() {
  return (
    <>
       <Aboutgroup></Aboutgroup>
       <Improvement></Improvement>
       <Process></Process>
       <Inspire></Inspire>
       <Benifit></Benifit>
       <Meet></Meet>
    </>
  )
}

export default Aboutus