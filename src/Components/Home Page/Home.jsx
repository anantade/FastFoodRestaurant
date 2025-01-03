/* eslint-disable no-unused-vars */
import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import OfferSection from './OfferSection'
import WhyChoose from './WhyChoose'
import ReservationTable from './ReservationTable'
import DeliciousMenu from './DeliciousMenu'

export default function Home() {
  return (
    <div>
        <HeaderTop/>
        <HeaderBottom/>
        <OfferSection/>
        <WhyChoose/>
        <ReservationTable/>
        <DeliciousMenu/>
    </div>
  )
}
