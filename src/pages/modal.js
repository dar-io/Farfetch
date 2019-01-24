import React from "react"
import "../assets/fonts/load-font.scss"

import ShopTheLookModal from "../components/ShopTheLookModal/ShopTheLookModal";

import {Helmet} from "react-helmet";

export default () => (
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
        
      </Helmet>
   

      <ShopTheLookModal />

     
    </div>
)