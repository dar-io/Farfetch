import React from "react";
import "../assets/fonts/load-font.scss";
import Header from "../components/Header/Header";
import InfoBanner from "../components/InfoBanner/InfoBanner";
import Product from "../components/Product/Product";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ShopTheLook from "../components/ShopTheLook/ShopTheLook";
import Recommendations from "../components/Recommendations/Recommendations";
import ViewTheLookButton from "../components/Buttons/ViewTheLookButton";
// import Carousel from "../components/Carousel/Carousel";
// import Related from "../components/Related/Related";
import Footer from "../components/Footer/Footer";
import {Helmet} from "react-helmet";
import StlTitle1 from "../components/STL-Title/stl-title-1";
import StlTitle2 from "../components/STL-Title/stl-title-2";
import StlTitle3 from "../components/STL-Title/stl-title-3";
import StlTitle4 from "../components/STL-Title/stl-title-4";
import StlTitle5 from "../components/STL-Title/stl-title-5";
import TestMenu from "../components/TestMenu/TestMenu";

class Indexpage extends React.Component {

    render() {
      return (
    <div>
      <Helmet>
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/v2-27-18332-75-onboarding/static/css/bundlecss/essentials.min.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/v2-27-18332-75-onboarding/static/css/bundlecss/essentials2.min.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/v2-27-18332-75-onboarding/static/css/bundlecss/essentials3.min.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/v2-27-18332-75-onboarding/static/css/bundlecss/essentials4.min.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/v2-27-18332-75-onboarding/static/css/bundlecss/essentialsAsync.min.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/Content/UP/editorial/js/dynamicProductRow/dynamicProducts-3.0.1.min.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/v2-27-18332-75-onboarding/static/css/bundlecss/headerbob.min.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/v2-27-18332-75-onboarding/static/css/bundlecss/editorial.min.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/PortalSlicePDP/box.client.ef40c5e36762124931f745fff93f3360.ltr.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/PortalSlicePDP/slice-pdp.client.d12c92acd8bc36acdc0adb50ab919261.ltr.css" />
        <link type="text/css" rel="stylesheet" href="https://cdn-static.farfetch-contents.com/v2-28-19003-437/static/css/bundlecss/sliceRecommendations.min.css" />
      </Helmet>

      <Header /> 
      <InfoBanner />
      <Product 
         mainPiece="https://cdn-images.farfetch-contents.com/12/68/86/60/12688660_12808249_480.jpg"
         mainLook="https://cdn-images.farfetch-contents.com/12/68/86/60/12688660_12808251_480.jpg"
         Brand="Unravel Project"
         Product="Inside Out Denim Shorts"
         Description=""
         Price="£748"
         ScaleName="Jeans (Waist)"
        //  ViewTheLookButton= {<ViewTheLookButton Label="View the Look"/>}
      />

      <ProductDetails 
        Brand="Unravel Project"
        Product="Inside Out Denim Shorts"
        Category="Denim Shorts"
        Description="Blue Cotton Inside Out Denim Shorts from Unravel Project."
        StyleId="Designer Style ID: UWYC001S180840017100"
        DesignerColor="Colour: BLUE"
        MadeIn="Italy"
        image="https://cdn-images.farfetch-contents.com/12/68/86/60/12688660_12808258_480.jpg"
        MaterialOne="Outer:cotton 100%"
        MaterialTwo="Lining: polyester 65%"
        MaterialThree="Lining: cotton 35%"
        WashInstructions="machine wash"
        Wearing="Model is 1.78 m wearing size 26"
        WearingProducts="The model is also styled with: Unravel Project Silk Trench Coat, Off-White White For Walking 100 Ankle Boots, Blindness printed open split seam sweatshirt."
        Backstory=""
      />
      <TestMenu 
        option1= {<StlTitle1/>} 
        URLoption1="/stl-title-1/#STLtop"

        option2= {<StlTitle2/>} 
        URLoption2="/stl-title-2/#STLtop"
                
        option3= {<StlTitle3/>} 
        URLoption3="/stl-title-3/#STLtop"
        active4="active"

        option4= {<StlTitle4/>} 
        URLoption4="/stl-title-4/#STLtop"
                
        option5= {<StlTitle5/>} 
        URLoption5="/stl-title-5/#STLtop"
        />
      <ShopTheLook 
        Heading= {<StlTitle4/>} />
      {/* <Carousel 
        classes= "prototype-wrapper" 
      /> */}
      <Recommendations />
      {/* <Related /> */}
      <Footer /> 
    </div>
    )
  }
}

export default Indexpage;