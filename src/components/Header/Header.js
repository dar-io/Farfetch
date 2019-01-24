import React from 'react'
import './Header.scss'


export default class Header extends React.Component{
  render() {
    return (
      
  /* eslint-disable */
        <div className="wrapper AppBanner">

          <header className="mainHeader ff-main-header ff-bob" style={{display: 'block'}}>
          <div id="header-top" data-test="Div_HeaderTop">
            <div className="grd container mt-m-xl mt-s-md mt-s-xs headerTop__container">
              <div className="hide-on-xs grd-cell bg-content ctr-container">
                <ul id="ff-bob-cntrslt" className="headerLocale visible-xl hidden-md hidden-sm hidden-xs ff-details float-left">
                  <li className="mt-m-xs">
                    <a href="" data-ffref="hd" data-test="Go_CurrencyChange">
                      <div className="flags flag-gb"></div> <span className="ff-bob-cntrslt__chevron"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="5 0 24 24"> <path fill="#000" fillRule="nonzero" d="M7.537 10.393a.915.915 0 1 0-1.241 1.344L11.998 17l5.702-5.263a.915.915 0 0 0-1.241-1.344l-4.461 4.117-4.461-4.117z"></path> </svg> </span>              </a>
                  </li>
                </ul>
              </div>
              <div className="headerTop__container__Hambnsearch"> 
                <a className="ff-nav-trigger " href="#"> 
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#222" fillRule="evenodd"></path> 
                </svg> 
                </a>
                <a className="js-search-trigger ff-search-trigger"
                  href="#" data-tstid="Go_Search_Mobile" trk="{&quot;tid&quot;:&quot;76&quot;,&quot;val&quot;:&quot;76&quot;}"> 
                  <span className="icon-search icon-search-click"> 
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M19.757 17.433l-2.787-2.78c.864-1.136 1.374-2.546 1.374-3.995C18.344 6.978 15.36 4 11.672 4 7.982 4 5 6.977 5 10.658c0 3.68 2.983 6.658 6.672 6.658 1.452 0 2.865-.47 4.003-1.37l2.787 2.78c.157.157.392.274.628.274.235 0 .47-.078.628-.274.157-.157.274-.392.274-.627.04-.278-.078-.51-.235-.67zm-8.085-1.958c-2.67 0-4.827-2.154-4.827-4.817 0-2.663 2.158-4.817 4.827-4.817 2.67 0 4.827 2.158 4.827 4.82s-2.16 4.818-4.83 4.818z" fill="#222" fillRule="evenodd"></path> 
                  </svg> 
                  </span>  
                  </a>        
              </div>
              <ul id="header-tabs-container" className="float-left tabs-gender-wrap line-anime-wrap tst-mnHeader grd-cell bg-content ff-tabs-active" data-tstid="Header_GenderToggle">

                <li className="tabs-gender tst-mnSecGroup tst-gender249 ff-tabs-active"> <a className="tabs-gender-a condensed letter-spacing  tst-mnLink" href="#" data-target="#tab_249" data-test="Header_Toggle_Gender249"><span className="tabs__span">Women</span></a> </li>
                <li className="tabs-gender tst-mnSecGroup tst-gender248">
                <a className="tabs-gender-a condensed letter-spacing  tst-mnLink" href="#" data-target="#tab_248" data-test="Header_Toggle_Gender248"><span className="tabs__span">Men</span></a> </li>
                <li className="tabs-gender tst-mnSecGroup tst-gender19018">
                <a className="tabs-gender-a condensed letter-spacing js-asyncMenuTrigger tst-mnLink" href="#" data-async-link="#" data-target="#tab_19018" data-test="Header_Toggle_Gender19018"><span className="tabs__span">Kids</span></a>          </li>
                <li className="line-anime js-anime triangle-anime" style={{width: '54px', transform: 'translateX(36px)'}}></li>
              </ul> 
              <svg data-test="ff-logo-icon" className="ff-logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 67"> 
                <a href="#" data-ffref="chk_hd_logo" data-tstid="Go_HomePage" aria-label="Farfetch Logo"> 
                <g fill="#222222" fillRule="evenodd"><title>Farfetch Logo</title><rect style={{stroke:'none', fill: '#fffff', fillOpacity:'0'}} x="0" y="0" height="100%" width="100%"></rect><polyline points="13.35 13.34 40 13.34 40 0 13.35 0 13.35 0 0 13.34 0 66.54 13.35 66.54 13.35 39.95 33.36 39.95 33.36 26.61 13.35 26.61 13.35 13.34"></polyline><path d="M77.63,26.61 L90.9,26.61 L90.9,13.34 L77.63,13.34 L77.63,26.61 Z M90.9,0 L77.63,0 L64.28,13.34 L64.28,66.54 L77.63,66.54 L77.63,39.95 L90.9,39.95 L90.9,66.54 L104.25,66.54 L104.25,13.34 L90.9,0 Z"></path><polyline points="459.52 0 459.52 66.54 472.87 66.54 472.87 39.95 486.14 39.95 486.14 66.54 499.49 66.54 499.49 0 486.14 0 486.14 26.61 472.87 26.61 472.87 0 459.52 0"></polyline><polyline points="146.63 26.61 146.63 13.34 160.04 13.34 160.04 26.61 173.39 26.61 173.39 13.34 160.04 0 133.33 0 133.33 66.54 146.63 66.54 146.63 39.95 160.04 39.95 160.04 66.54 173.39 66.54 173.39 39.95 160.04 26.61 146.63 26.61"></polyline><polyline points="215.73 13.34 242.38 13.34 242.38 0 215.72 0 202.38 13.34 202.38 66.54 215.72 66.54 215.72 39.95 235.74 39.95 235.74 26.61 215.72 26.61 215.72 13.34 215.73 13.34"></polyline><polyline points="370.96 0 331 0 330.95 13.34 344.28 13.34 344.28 66.54 357.63 66.54 357.63 13.34 370.96 13.34 370.96 0"></polyline><polyline points="277.65 53.22 277.63 53.22 277.63 39.95 297.65 39.95 297.65 26.61 277.63 26.61 277.63 13.34 304.3 13.34 304.3 0 277.63 0 264.3 13.34 264.29 13.34 264.29 53.22 264.31 53.22 277.63 66.54 304.3 66.54 304.3 53.22 277.65 53.22"></polyline><polyline points="408.59 53.22 408.59 13.34 435.23 13.34 435.23 0 408.58 0 395.24 13.34 395.24 53.22 408.58 66.54 435.24 66.54 435.24 53.22 408.59 53.22"></polyline></g> </a> 
              </svg>
            
              <div className="hide-onxs grd-cell bg-content details-container">
                <ul id="ff-details" className="ff-details relative float-right">
                  <li className="ff-details-account-wrapper visible-xl hidden-md hidden-sm hidden-xs"> <a href="#" id="ff-details-account" className="js-details-account ff-details-name" data-test="Go_SignInOrRegister" rel="nofollow" trk="433"> <span className=" js-userFloatStatus"> <svg width="24" height="24" viewBox="0 2 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M12 5c-1.93 0-3.5 1.58-3.5 3.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5C15.5 6.58 13.97 5 12 5zm0 7.88c-2.32 0-7 1.18-7 3.5V19h14v-2.63c0-2.3-4.64-3.5-7-3.5z" fill="#222" fillRule="evenodd"></path> </svg> </span> <span className="js-details-account-name ff-details-account-name ff-details-name-span"></span> </a>            </li>
                  <li> <a href="#" data-tstid="Go_Wishlist" rel="nofollow" trk="{&quot;tid&quot;:&quot;65&quot;,&quot;val&quot;:&quot;65&quot;}" className=""> <span className="icon-favourites"> <svg width="24" height="24" viewBox="0 2 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20.47 10.087c-.07-.172-.21-.275-.388-.275h-5.885L12.39 4.275C12.32 4.103 12.177 4 12 4c-.178 0-.32.103-.39.275L9.802 9.812H3.918c-.178 0-.32.103-.39.275-.07.172 0 .344.142.447l4.75 3.405-1.808 5.535c-.07.172 0 .343.14.447.143.103.32.103.462 0L12 16.518l4.785 3.405c.07.034.142.068.248.068.106 0 .177-.032.248-.066.144-.104.215-.275.144-.447l-1.808-5.537 4.75-3.406c.106-.103.177-.275.106-.447z" fill="#222" fillRule="evenodd"></path> </svg> </span> <span className="js-wishlist-item-count ff-details-number"></span> </a>            </li>
                  <li> <a href="#" data-tstid="Go_Bag" rel="nofollow" trk="{&quot;tid&quot;:&quot;66&quot;,&quot;val&quot;:&quot;66&quot;}" className=""> <span className="icon-bag "> <svg width="24" height="24" viewBox="0 2 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M18.5625 8.5918H5.4375S5 8.5918 5 9.008v9.0206c0 .0555 0 .111.0292.1665.029.056.0583.084.0875.139.029.028.0875.056.1458.083.0583.028.1167.028.175.028l3.675.555h5.8333l3.6167-.527c.0583 0 .1167 0 .175-.028.0583-.028.0875-.055.1458-.083.0292-.0275.0584-.083.0875-.1385.0292-.056.0292-.1113.0292-.167V8.98c0-.3885-.4375-.3885-.4375-.3885zM9.375 9.8408c-.2333 0-.4375-.1943-.4375-.4163s.2042-.4164.4375-.4164.4375.195.4375.417c0 .222-.2042.4165-.4375.4165zm5.25 0c-.2333 0-.4375-.1943-.4375-.4163s.2042-.4164.4375-.4164.4375.195.4375.417c0 .222-.2042.4165-.4375.4165zm-4.3622-1.249H8.4872C8.4872 5.4772 9.6212 4 12 4c2.4478 0 3.545 1.453 3.5128 4.6l-1.7756-.0164c.0235-2.3034-.4223-2.894-1.7372-2.894-1.256 0-1.7372.6268-1.7372 2.9022z" fill="#222" fillRule="evenodd"></path> </svg>  </span> <span className="js-bag-item-count-header js-bag-item-count ff-details-number" dir="LTR" data-wrap="true" data-tstid="Header_Item_Counter"></span>  </a>            </li>
                </ul>
              </div>
        
            </div>
          </div>
          <div id="header-nav">
            <div className="container search-container grd unwrap">
              <div id="ff-menus" className="grd-cell bg-content">
                <div id="ff-gender-message" className="ff-gender-message condensed hide tst-genderMsg"> <span className="glyphs icon-arrow-select"></span> Please select a gender to shop </div>
                <nav id="tab_249" className="ff-nav ff-nav-bg tst-mnNav tst-gender249 ff-tabs-active">
                  <ul className="ff-primary-nav  bob">
                    <li className="hidden-xl visible-md visible-sm visible-xs tst-mnSecGroupHome"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase ff-first" href="#" data-tstid="Go_MobileMenu_Shop_Gender249" title="Women's Homepage"> <span className="tabs__span">Women's Homepage</span> </a> </li>
                    <li className=" ff-has-children tst-mnSec" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="NewIn" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_NewIn" title="New In"> <span className="tabs__span">new in</span> </a>              </li>
                    <li className=" ff-has-children tst-mnSec" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="Designers" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_Designers" title="Designers"> <span className="tabs__span">designers</span> </a>              </li>
                    <li className=" ff-has-children tst-mnSec" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="General" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_Clothing" title="Clothing"> <span className="tabs__span">clothing</span> </a>              </li>
                    <li className=" ff-has-children tst-mnSec" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="General" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_Shoes" title="Shoes"> <span className="tabs__span">shoes</span> </a>              </li>
                    <li className=" ff-has-children tst-mnSec" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="General" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_Bags" title="Bags"> <span className="tabs__span">bags</span> </a>              </li>
                    <li className=" ff-has-children tst-mnSec" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="General" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_Accessories" title="Accessories"> <span className="tabs__span">accessories</span> </a>              </li>
                    <li className=" ff-has-children tst-mnSec ff-is-loading" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="Women" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_Jewellery" title="Jewellery"> <span className="tabs__span">jewellery</span> </a>              </li>
                    <li className=" ff-has-children tst-mnSec ff-is-loading" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="Women" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_Vintage" title="Vintage"> <span className="tabs__span">vintage</span> </a>              </li>
                    <li className=" ff-has-children tst-mnSec" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="General" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_Gifts" title="Gifts"> <span className="tabs__span">gifts</span> </a>              </li>
                    <li className=" ff-has-children tst-mnSec" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase ff-sale tst-mnSecTitle" data-sectiontype="Sale" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopWomen_Sale" title="Sale"> <span className="tabs__span">sale</span> </a>              </li>
                    <li className="p-m mt-m hidden-xl visible-md visible-sm visible-xs ff-moves-obj ff-user-mobile-not-logged"> <span className="button__title pa0 mb-xs"> My account </span> <a href="#" className="ff-button button-black mt-s mb-xxs" rel="nofollow" data-test="Go_SidenavLogin"> <span className="ff-button-text">Sign in</span> </a> <a href="#"
                        className="ff-button button-white mt-xxs" rel="nofollow" data-test="Go_SidenavRegister"> <span className="ff-button-text">Register</span> </a> </li>
                    <li className="MyAccount p-m mt-m hidden-xl visible-md visible-sm visible-xs ff-moves-obj ff-user-mobile-logged ff-hide">
                    <span className="button__title pa0 mb-xs"> My account </span> <a href="#" className="ff-nav-a bold js-details-account" data-test="Go_MyAccountRedirect" rel="nofollow"> <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M12 5c-1.93 0-3.5 1.58-3.5 3.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5C15.5 6.58 13.97 5 12 5zm0 7.88c-2.32 0-7 1.18-7 3.5V19h14v-2.63c0-2.3-4.64-3.5-7-3.5z" fill="#222" fillRule="evenodd"></path> </svg> <span className="js-details-account-name ff-details-account-name"></span> </a>              <a href="#" data-ffref="hd_lidd_so" className="ff-button button-white mt-s" rel="nofollow" trk="431"> <span className="ff-button-text">Logout</span> </a> </li>
                    <li className="ff-locale col12 pt-m mb-m hidden-xl visible-md visible-sm visible-xs ff-moves-obj">
                    <span className="ff-locale__title bold mb-xs"> Delivery Country or Region </span>
                      <div className="ff-locale__wrapper">
                        <a href="#" className="ff-locale__link ff-drag-level condensed letter-spacing uppercase tst-mnSecTitle ff-nav-a" rel="nofollow" data-test="ChangeLocaleSidebar">
                          <div className="flags flag-gb"></div> <span className="tabs__span">United Kingdom</span> </a>
                      </div> <span className="ff-locale__description mt-s pl-m pr-m"> You are currently shipping to United Kingdom and your order will be billed in <span className="force-ltr force-inline">GBP £</span> . </span>
                    </li>
                  </ul>
                </nav>
                <nav id="tab_248" className="ff-nav ff-nav-bg tst-mnNav tst-gender248">
                  <ul className="ff-primary-nav  bob">
                    <li className="hidden-xl visible-md visible-sm visible-xs tst-mnSecGroupHome"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase ff-first" href="#" data-tstid="Go_MobileMenu_Shop_Gender248" title="Men's Homepage"> <span className="tabs__span">Men's Homepage</span> </a> </li>
                    <li
                      className=" ff-has-children tst-mnSec" data-async="true"> <a className="ff-nav-a ff-drag-level condensed letter-spacing uppercase  tst-mnSecTitle" data-sectiontype="Designers" href="#" data-ffref="hd_mnav" data-tstid="Go_Menu_ShopMen_Designers" title="Designers"> <span className="tabs__span">designers</span> </a>              </li>
                      <li className="p-m mt-m hidden-xl visible-md visible-sm visible-xs ff-moves-obj ff-user-mobile-not-logged"> <span className="button__title pa0 mb-xs"> My account </span> <a href="#" className="ff-button button-black mt-s mb-xxs" rel="nofollow" data-test="Go_SidenavLogin"> <span className="ff-button-text">Sign in</span> </a> <a href="#"
                          className="ff-button button-white mt-xxs" rel="nofollow" data-test="Go_SidenavRegister"> <span className="ff-button-text">Register</span> </a> </li>
                      <li className="MyAccount p-m mt-m hidden-xl visible-md visible-sm visible-xs ff-moves-obj ff-user-mobile-logged ff-hide">
                      <span className="button__title pa0 mb-xs"> My account </span> <a href="#" className="ff-nav-a bold js-details-account" data-test="Go_MyAccountRedirect" rel="nofollow"> <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M12 5c-1.93 0-3.5 1.58-3.5 3.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5C15.5 6.58 13.97 5 12 5zm0 7.88c-2.32 0-7 1.18-7 3.5V19h14v-2.63c0-2.3-4.64-3.5-7-3.5z" fill="#222" fillRule="evenodd"></path> </svg> <span className="js-details-account-name ff-details-account-name"></span> </a>                <a href="#" data-ffref="hd_lidd_so" className="ff-button button-white mt-s" rel="nofollow" trk="431"> <span className="ff-button-text">Logout</span> </a> </li>
                      <li className="ff-locale col12 pt-m mb-m hidden-xl visible-md visible-sm visible-xs ff-moves-obj">
                      <span className="ff-locale__title bold mb-xs"> Delivery Country or Region </span>
                        <div className="ff-locale__wrapper">
                          <a href="#" className="ff-locale__link ff-drag-level condensed letter-spacing uppercase tst-mnSecTitle ff-nav-a" rel="nofollow" data-test="ChangeLocaleSidebar">
                            <div className="flags flag-gb"></div> <span className="tabs__span">United Kingdom</span> </a>
                        </div> <span className="ff-locale__description mt-s pl-m pr-m"> You are currently shipping to United Kingdom and your order will be billed in <span className="force-ltr force-inline">GBP £</span> . </span>
                      </li>
                  </ul>
                </nav>
                <nav id="tab_19018" className="ff-nav ff-nav-bg tst-mnNav tst-gender19018"> </nav>
              </div>
              <form className="ff-search grd-cell" role="search" action="https://www.farfetch.com/uk/shopping/all/search/items.aspx"> 
                <input className="js-searchboxABTest force-ltr" type="search" name="q" data-minchars="3" title="Search" aria-label="Search" autoCorrect="off" autoCapitalize="off" autoComplete="off" spellCheck="false" id="ff-searchfield-input" maxLength="200" placeholder="Search"
                  data-tstid="Go_Search" trk="{&quot;tid&quot;:&quot;76&quot;,&quot;val&quot;:&quot;76&quot;}"/>

                <div className="ac-no-results-div hide" style={{display: 'none'}}></div> 
                <button className="js-searchfield-trigger glyphs icon-search" data-tags="gtm_19"> <svg width="24" height="24" viewBox="0 -1 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M19.757 17.433l-2.787-2.78c.864-1.136 1.374-2.546 1.374-3.995C18.344 6.978 15.36 4 11.672 4 7.982 4 5 6.977 5 10.658c0 3.68 2.983 6.658 6.672 6.658 1.452 0 2.865-.47 4.003-1.37l2.787 2.78c.157.157.392.274.628.274.235 0 .47-.078.628-.274.157-.157.274-.392.274-.627.04-.278-.078-.51-.235-.67zm-8.085-1.958c-2.67 0-4.827-2.154-4.827-4.817 0-2.663 2.158-4.817 4.827-4.817 2.67 0 4.827 2.158 4.827 4.82s-2.16 4.818-4.83 4.818z" fill="#222" fillRule="evenodd"></path> </svg> 
                </button>
                <div id="ff-search-desktop" data-tstid="SearchContainer_Desktop">
                  <div className="ff-search-write float-left">
                    <div className="container">
                      <div className="space-filler baseline col3 col-md-4 alpha visible-xl hidden-md hidden-sm hidden-xs">&nbsp;</div>
                      <div className="search-labels-wrapper baseline col9 col-md-12 col-sm-12 col-xs-12 alpha omega"> <a href="#" id="ff-search-clear" className=" hidden-xl visible-md visible-sm visible-xs no-underline ff-hide" data-test="Search_ClearButton"> Clear </a>
                       
                        
                        <button className="js-search-closer search-clear"> <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" > <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="icon/cross/white" fill="#FFFFFF"> <path d="M13.1421356,11.1421356 L21.1421356,11.1421356 C21.6944204,11.1421356 22.1421356,11.5898509 22.1421356,12.1421356 C22.1421356,12.6944204 21.6944204,13.1421356 21.1421356,13.1421356 L13.1421356,13.1421356 L13.1421356,21.1421356 C13.1421356,21.6944204 12.6944204,22.1421356 12.1421356,22.1421356 C11.5898509,22.1421356 11.1421356,21.6944204 11.1421356,21.1421356 L11.1421356,13.1421356 L3.14213562,13.1421356 C2.58985087,13.1421356 2.14213562,12.6944204 2.14213562,12.1421356 C2.14213562,11.5898509 2.58985087,11.1421356 3.14213562,11.1421356 L11.1421356,11.1421356 L11.1421356,3.14213562 C11.1421356,2.58985087 11.5898509,2.14213562 12.1421356,2.14213562 C12.6944204,2.14213562 13.1421356,2.58985087 13.1421356,3.14213562 L13.1421356,11.1421356 Z" id="icn_close" transform="translate(12.142136, 12.142136) rotate(45.000000) translate(-12.142136, -12.142136) "></path> </g> </g>  </svg> </button>                </div>
                    </div>
                  </div>
                  <div className="ff-search-header float-left">
                    <div className="container">
                      <div className="baseline search-tabs-wrapper col9 col-md-12 col-sm-12 col-xs-12 alpha omega sticky">
                        <ul id="search-tabs-gender" className="float-left tabs-gender-wrap line-anime-wrap ff-tabs-active" data-tstid="Search_GenderToggle">
                          <li className="tabs-gender ff-tabs-active">
                            <div> <a tabIndex="0" href="#women" className="tabs-gender-a condensed letter-spacing" title="Women" trk="{&quot;tid&quot;:&quot;358&quot;,&quot;val&quot;:&quot;249&quot;}" data-target="#tab_249" data-tstid="Search_ToggleWomen">Women</a> </div>
                          </li>
                          <li className="tabs-gender">
                            <div> <a tabIndex="1" href="#men" className="tabs-gender-a condensed letter-spacing" title="Men" trk="{&quot;tid&quot;:&quot;358&quot;,&quot;val&quot;:&quot;248&quot;}" data-target="#tab_248" data-tstid="Search_ToggleMen">Men</a> </div>
                          </li>
                          <li className="tabs-gender">
                            <div> <a tabIndex="2" href="#kids" className="tabs-gender-a condensed letter-spacing" title="Kids" trk="{&quot;tid&quot;:&quot;358&quot;,&quot;val&quot;:&quot;19018&quot;}" data-target="#tab_19018" data-tstid="Search_ToggleKids">Kids</a> </div>
                          </li>
                          <li className="line-anime js-anime" style={{width: '50px', transform: 'translateX(0px)'}}></li>
                        </ul> <button className="js-search-closer float-right button-white-circle"> <span className="glyphs icon-close"></span> </button> </div>
                    </div>
                    <div id="search-labels" className="search-labels-wrapper baseline col9 col-md-12 col-sm-12 col-xs-12 alpha omega">
                      <div className="ff-search-label"> <span className="js-search-label-men hide" data-tstid="Search_MenswearWarning">Selecting one of the suggestions will take you to results within menswear.</span> <span className="js-search-label-women hide" data-tstid="Search_WomenswearWarning">Selecting one of the suggestions will take you to results within womenswear.</span>                <span className="js-search-label-kids hide" data-tstid="Search_KidswearWarning">Selecting one of the suggestions will take you to results within kidswear.</span> </div>
                    </div>
                  </div>
                  <div className="ff-search-result float-left" style={{marginTop: '0px'}}>
                    <div className="container">
                      <div className="suggestions-counter baseline col3 col-md-12 col-sm-12 col-xs-12 alpha visible-xl visible-md visible-sm hidden-xs"> <strong className="hide js-results-container float-left mb30" style={{display: 'none'}}> <span id="ff-search-result-counter" className="js-resultsautoComplete">0</span> suggestions </strong> </div>
                      <div className="baseline col9 col-md-12 col-sm-12 col-xs-12 alpha omega ff-suggestions-container">
                        <div className="autoComplete-suggestions" style={{position: 'static', display: 'none'}}></div>
                        <div className="autoComplete-suggestions" style={{position: 'static', display: 'none'}}></div>
                      </div>
                      <div className="space-filler baseline col3 col-md-12 col-sm-12 col-xs-12 alpha visible-xl hidden-md hidden-sm hidden-xs">&nbsp;</div>
                      <div className="baseline col9 col-md-12 col-sm-12 col-xs-12 alpha omega heading-bold header-search-noResults hide" data-tstid="Search_NoSuggestions" style={{display: 'none'}}> Hit enter to search </div>
                    </div>
                  </div>
                  <div className="ff-search-result float-left">
                    <div className="baseline col9 col-md-12 col-sm-12 col-xs-12 alpha omega ff-suggestions-container">
                      <div className="autoComplete-suggestions" style={{position: 'static', display: 'none', maxHeight: '170px', zIndex: '1'}}></div>
                      <div className="autoComplete-suggestions" style={{position: 'static', display: 'none', maxHeight: '170px', zIndex: '1'}}></div>
                    </div>
                    <div id="js-recommended-designers" className="baseline col9 col-md-12 col-sm-12 col-xs-12 alpha omega hide">
                      <div data-tstid="Search_Favourite_Designers" className="autoComplete-group recommended-designer-container" style={{width: '140%'}}> <b style={{textTransform: 'uppercase'}}> Designers you may like </b>
                        <div id="js-recommended-designers-list"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          
            <div className="ff-bg-nav"></div>
          </div>
        </header>
          
        </div>

    );
  }
}
