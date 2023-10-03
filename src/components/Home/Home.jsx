import React from 'react'
import "./Home.css"
import Product from '../product/Product'
import Header from '../Header/Header'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        <div className="home__row">
          <Product
            title="The lean startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            rating={5}
          />
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and whisk, 5 litre "
            price={239.0}
            image="https://m.media-amazon.com/images/I/71J+Mv115IL._AC_SX522_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="KACLUT Smart Watch,2-inch Utral Large HD Display,100M Waterproof Rugged Military S=martwatch with Bluetooth"
            price={89.99}
            image="https://m.media-amazon.com/images/I/718jI4Lw47L._AC_SX425_.jpg"
            rating={3}
          />
          <Product
            title="Amazon Echo (3rd Generation) Smart speaker with Alexa, Charcoal Fabric"
            price={98.90}
            image="https://m.media-amazon.com/images/I/61dD-QdDYjL._AC_SY355_.jpg"
            rating={5}
          />
          <Product
            title="New Apple ipad Pro (12.9 inch, Wi-Fi, 128 GB) - Silver (4th Generation)"
            price={598.99}
            image="https://m.media-amazon.com/images/I/61PnHlc0HCL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung LC49RG90SSUXEN 49' Curved LED gaming monitor - Super Ultra wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://m.media-amazon.com/images/I/81mVo0xRU0L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home