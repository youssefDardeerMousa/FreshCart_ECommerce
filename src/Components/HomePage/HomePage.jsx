import React, { useContext, useEffect, useState } from 'react'
import Mainslider from "../Mainslider/Mainslider"
import CategorySlider from '../CategorySlider/CategorySlider'
import Products from '../Products/Products'
import style from "./Home.module.css"
import { DataContext } from '../../Context/ContextData'
import { Helmet } from 'react-helmet'
export default function HomePage() {

  return (
    <>
      <div className={`${style.bgimg}`}>
    <Mainslider/>
    <CategorySlider/>
    <Products/>
</div>
<Helmet>
  <title>
    HomePage
  </title>
</Helmet>
    </>
  )
}
