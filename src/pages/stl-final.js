import React from "react";
import "../assets/fonts/load-font.scss";
import Header from "../components/Header/Header";
import InfoBanner from "../components/InfoBanner/InfoBanner";
import Product from "../components/Product/Product";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ShopTheLook from "../components/ShopTheLook/ShopTheLook";
import Recommendations from "../components/Recommendations/Recommendations";
import ViewTheLookButton from "../components/Buttons/ViewTheLookButton";
import TestMenu from "../components/TestMenu/TestMenu";
// import Carousel from "../components/Carousel/Carousel";
// import Related from "../components/Related/Related";
import Footer from "../components/Footer/Footer";
import {Helmet} from "react-helmet";
import StlTitle1 from "../components/STL-Title/stl-title-1";
import StlTitle2 from "../components/STL-Title/stl-title-2";
import StlTitle3 from "../components/STL-Title/stl-title-3";
import StlTitle4 from "../components/STL-Title/stl-title-4";
import StlTitle5 from "../components/STL-Title/stl-title-5";

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

      {/* <Header />  */}
      <TestMenu 
        option1= {<StlTitle1/>} 
        URLoption1="/stl-title-1/#STLtop"

        option2= {<StlTitle2/>} 
        URLoption2="/stl-title-2/#STLtop"
                
        option3= {<StlTitle3/>} 
        URLoption3="/stl-title-3/#STLtop"
                
        option4= {<StlTitle4/>} 
        URLoption4="/stl-title-4/#STLtop"
                
        option5= {<StlTitle5/>} 
        URLoption5="/stl-title-5/#STLtop"
        />
      
      <div class="demoBlock">
        <ShopTheLook 
        Heading="Get inspired here"
        
        />
      </div>

      <div class="demoBlock">
      <ShopTheLook 
        Heading="Inspiration? Sorted."/>
      </div>

      <div class="demoBlock">
       <ShopTheLook 
        Heading="Wear it with"/>
      </div>

    <div class="demoBlock">
      <ShopTheLook 
      Heading="How to style it"/>
    </div>

    <div class="demoBlock">
      <ShopTheLook 
      Heading="Wear this with"/>
    </div>
        </div>
    )
  }
}

export default Indexpage;