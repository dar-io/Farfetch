import React from 'react'
import './InfoBanner.scss'
import Layout from '../Layout/Layout';

export default class InfoBanner extends React.Component {
  render() {
    return (
      
       <div id="globalPos" className="swiper-container info-banners-container" trk="551">
    <div className="swiper-wrapper">
        <div className="info global-pos accordion accordion-sm pt20 pl10 pb20 banner js-accordion" style={{backgroundColor: '#dddddd'}} data-interval="6000" data-index="0">
            <div className="accordion-item pl10 global-pos-item" data-index="0">
                <span className="accordion-title global-pos-title">
			<span className="condensed uppercase letter-spacing color-red">SALE</span>
                <span className="color-black pl10 pr10 visible-xl visible-md hidden-sm hidden-xs">|</span>
                <span className="glyphs icon-more float-right color-white pl10 pr10"></span>
                </span>
                <div className="accordion-content global-pos-content">
                    <span className="color-black">Up to 60% off</span>
                </div>
            </div>
        </div>
        <div className="info global-pos accordion accordion-sm pt20 pl10 pb20 banner js-accordion" style={{backgroundColor: '#dddddd'}} data-interval="6000" data-index="1">
            <div className="accordion-item pl10 global-pos-item" data-index="0">
                <span className="accordion-title global-pos-title">
			<span style={{fontSize:'15px'}}>Get your gift in time.</span>
                <span className="glyphs icon-more float-right color-white pl10 pr10"></span>
                </span>
                <div className="accordion-content global-pos-content">
                    <span style={{fontSize:'15px'}}>Find last order dates for your region <a className="underline" href="/uk/holiday-sos" style={{fontSize:'15px'}}>here</a></span>
                </div>
            </div>
        </div>
        <div className="info global-pos global-pos-shadow accordion accordion-md pt20 pl10 pb20 banner js-accordion active" style={{backgroundColor: '#dddddd'}} data-interval="6000" data-index="0">
            <div className="accordion-item pl10 global-pos-item" data-index="0">
                <span className="accordion-title global-pos-title">
            <span className="color-red condensed uppercase letter-spacing color-red">Sign up to our newsletter</span>
                <span className="pl10 pr10 visible-xl hidden-md hidden-sm hidden-xs">|</span>
                {/* <span className="glyphs icon-more float-right pr10 pl10"></span> */}
                </span>
                <div className="accordion-content global-pos-content">
                    <span className="">for exclusive early access to our sale plus new arrivals, trends and promotions</span>
                    <span className="pl10 pr10">|</span>
                    <span className=""><a className="underline" href="/uk/newsletter/signupnewsletter">Click here</a></span>
                </div>
            </div>
        </div>
    </div>
</div>
      
    )
  }
}
