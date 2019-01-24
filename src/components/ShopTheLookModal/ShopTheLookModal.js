import React from 'react'
import StickyBox from "react-sticky-box";
import './ShopTheLookModal.scss'
import '../Typography/typography.scss'
import '../Utilities/spacers.scss'
import Layout from '../Layout/Layout';
import ProductCard from '../ProductCard/ProductCard'
import Carousel from '../Carousel/Carousel';

export default class ShopTheLookModal extends React.Component{
  render() {
    return (
      <Layout className="ShopTheLookModal spcr-mt-L spcr-mb-L">
          <h3 className="spcr-pb-M heading type-L type-bold type-center Polaris-Bold">Go, be inspired...</h3>
        <div className="ShopTheLookModal--container">
      
      
      <div className="A">
       <StickyBox offsetTop={0} offsetBottom={0}>
          <div className="image-container">
            <img className="stickyImage" alt="" src="https://cdn-images.farfetch-contents.com/13/00/25/79/13002579_14188766_1000.jpg"/>
          </div>
       </StickyBox>
       </div>
     
       <ProductCard
         classes="B"  
         title="Off-White"
         price="£1,450"
         image="https://cdn-images.farfetch-contents.com/13/00/25/79/13002579_14188765_1000.jpg"
         /> 

        <ProductCard
         classes="C"  
         title="Off-White"
         price="£820"
         image="https://cdn-images.farfetch-contents.com/13/00/30/65/13003065_13861158_480.jpg"
         /> 

         <ProductCard
         classes="D"  
         title="Off-White"
         price="£615"
         image="https://cdn-images.farfetch-contents.com/12/97/22/18/12972218_13892277_480.jpg"
         /> 
       
         <ProductCard
         classes="E"  
         title="Fendi"
         price="£1,890"
         image="https://cdn-images.farfetch-contents.com/12/96/73/06/12967306_14307925_480.jpg"
         /> 

         <ProductCard
         classes="F"  
         title="JUNYA WATANABE COMME DES GARÇONS VINTAGE"
         price="£555"
         image="https://cdn-images.farfetch-contents.com/13/00/01/96/13000196_14191702_480.jpg"
         /> 

         <ProductCard
         classes="G"  
         title="Fendi"
         price="£224"
         image="https://cdn-images.farfetch-contents.com/13/04/47/90/13044790_13916977_480.jpg"
         /> 
       
     

          
        </div>
        <Carousel
        classes="B" 
        />
      </Layout>
    );
  }
}