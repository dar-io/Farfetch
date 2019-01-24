import React from 'react'
import './ProductDetails.scss'
import Layout from '../Layout/Layout';
import ContactUs from '../ContactUs/ContactUs';

class ProductDetails extends React.Component {
    
    render() {
        return (
        <Layout className="product-details">
  
  <div id="containerCollapser" className="_5dee9f">
    <ol className="_97d3c4" data-tstid="breadcrumb" itemScope="" itemType="http://schema.org/BreadcrumbList">
        <li className="_74698a" data-index="0" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
            <meta itemProp="position" content="1"/><a className="fd9e8e _2f2ff4 cfc654 pointer" data-ffref="pp_top_bc" itemScope="" itemProp="item" itemType="http://schema.org/Thing"><span itemProp="name">home</span></a>
            <svg aria-hidden="true" className="e4e5c3">
                <use xlinkHref="#iconArrowSolidDown"></use>
            </svg>
        </li>
        <li className="_74698a" data-index="1" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
            <meta itemProp="position" content="2" /><a href="#" className="fd9e8e _2f2ff4 cfc654" data-ffref="pp_top_bc" itemScope="" itemProp="item" itemType="http://schema.org/Thing"><span itemProp="name">Women</span></a>
            <svg aria-hidden="true" className="e4e5c3">
                <use xlinkHref="#iconArrowSolidDown"></use>
            </svg>
        </li>
        <li className="_74698a" data-index="2" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
            <meta itemProp="position" content="3"/><a href="#" className="fd9e8e _2f2ff4 cfc654" data-ffref="pp_top_bc" itemScope="" itemProp="item" itemType="http://schema.org/Thing"><span itemProp="name">{this.props.Brand}</span></a>
            <svg aria-hidden="true" className="e4e5c3">
                <use xlinkHref="#iconArrowSolidDown"></use>
            </svg>
        </li>
        <li className="_74698a" data-index="3" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
            <meta itemProp="position" content="4"/><a href="#" className="fd9e8e _2f2ff4 cfc654" data-ffref="pp_top_bc" itemScope="" itemProp="item" itemType="http://schema.org/Thing"><span itemProp="name">Clothing</span></a>
            <svg aria-hidden="true" className="e4e5c3">
                <use xlinkHref="#iconArrowSolidDown"></use>
            </svg>
        </li>
        <li className="_74698a" data-index="4" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
            <meta itemProp="position" content="5"/><a href="#" className="fd9e8e _2f2ff4 cfc654" data-ffref="pp_top_bc" itemScope="" itemProp="item" itemType="http://schema.org/Thing"><span itemProp="name">{this.props.Category}</span></a></li>
        <li className="_74698a" data-index="5" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem" aria-hidden="true">
            <meta itemProp="position" content="6"/>
            <div>
                <meta itemProp="name" content="Velocite suede shearling jacket"/>
                <div itemProp="item" itemScope="" itemType="http://schema.org/Thing">
                    <meta itemProp="url" content="https://www.farfetch.com/uk/shopping/women/acne-studios-velocite-suede-shearling-jacket-item-13431381.aspx?storeid=11786"/>
                </div>
            </div>
        </li>
    </ol>
    
    <div className="_7bbfc8 _62e534" id="collapserDetails">
        <p className="be9c5c a86047" data-tstid="orderByPhone">Order by phone &nbsp;<a href="tel:+44 (0) 20 3962 2362" className="fd9e8e _3b33ac" data-tstid="phone">+44 (0) 20 3962 2362</a></p>
        <div className="_19fb94 d1ae32" role="tablist" data-tstid="collapser" data-collapsed="false">
            <div className="a7c1ee">
                <button className="_27dbe0 cd70e0" data-index="0" id="the-details" aria-expanded="true" aria-controls="panel-0" role="tab" data-tstid="collapserTab"><span className="_7252d4 cd70e0 _59d662" data-tstid="collapserTabText" data-elements-anchor="collapserEachItem">The Details</span></button>
                <button className="_27dbe0 cd70e0" data-index="1" id="size-&amp;-fit" aria-expanded="false" aria-controls="panel-1" role="tab" data-tstid="collapserTab"><span className="_7252d4 cd70e0 _59d662" data-tstid="collapserTabText" data-elements-anchor="collapserEachItem">Size &amp; Fit</span></button>
                <button className="_27dbe0 cd70e0" data-index="2" id="shipping-&amp;-returns" aria-expanded="false" aria-controls="panel-2" role="tab" data-tstid="collapserTab"><span className="_7252d4 cd70e0 _59d662" data-tstid="collapserTabText" data-elements-anchor="collapserEachItem">Shipping &amp; Returns</span></button>
            </div>
            <span data-tstid="collapserTabTextLine" className="_91eb25" style={{width: '101px', transform: 'translate(0px, 1px)'}}></span>
            <div className=" ">
                <div id="panel-0" className="fd83db _776e41" role="tabpanel" aria-labelledby="the-details" aria-hidden="false" data-index="0" data-tstid="collapserPanel">
                    <div id="panelInner-0">
                        <h2 className="_20b562">The Details</h2>
                        <div data-tstid="productDetails" className="_81a186">
                            <div className="_06fd3e">
                                <div className="_1c263b">
                                    <div className="_715ae7">
                                        <p className="_41db0e" data-tstid="merchandiseTagDetailsTab"></p>
                                    </div><a className="pointer fd9e8e e484bf _4a941d f140b0" data-ffref="pp_infobrd" data-tstid="cardInfo-title">{this.props.Brand}</a>
                                    <p data-tstid="cardInfo-description">{this.props.Product}</p>
                                </div>
                                <div className="_89741a">
                                    <div className="be0930">
                                        <div>
                                            <p data-tstid="fullDescription" className="_9b60a7">{this.props.Description}</p>
                                            <div className="_9b60a7">
                                                <p data-tstid="designerStyleId">{this.props.StyleId}</p>
                                                <p data-tstid="designerColor">{this.props.DesignerColor}</p>
                                                <p data-tstid="madeIn">{this.props.MadeIn}</p>
                                            </div>
                                        </div>
                                        <p> Composition </p>
                                        <dl data-tstid="productComposition" className="_9b60a7">
                                            <dd className="_13f28d">{this.props.MaterialOne}</dd>
                                            <dd className="_13f28d">{this.props.MaterialTwo}</dd>
                                            <dd className="_13f28d">{this.props.MaterialThree}</dd>
                                        </dl>
                                        <dl className="_9b60a7"><dt className="cc8c49">Washing instructions:</dt>
                                            <dd className="_13f28d">{this.props.WashInstructions}</dd>
                                        </dl>
                                        <div className="_8ea7c1" data-tstid="shareProduct">
                                            <h4 className="_62e534 d6e148" data-tstid="shareProduct-label">Share this</h4>
                                            <ul className="b16964">
                                                <li className="ffb86f">
                                                    <a href="#" target="popup" className="_4526dd" aria-label="Share this on facebook" data-tstid="shareProduct-facebook">
                                                        <svg className="_2e005f">
                                                            <use xlinkHref="#iconFacebook"></use>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="ffb86f">
                                                    <a href="#" target="popup" className="_4526dd" aria-label="Share this on twitter" data-tstid="shareProduct-twitter">
                                                        <svg className="_2e005f">
                                                            <use xlinkHref="#iconTwitter"></use>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="ffb86f">
                                                    <a href="#" target="popup" className="_4526dd" aria-label="Share this on pinterest" data-tstid="shareProduct-pinterest">
                                                        <svg className="_2e005f">
                                                            <use xlinkHref="#iconPinterest"></use>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="ffb86f">
                                                    <a href="#" target="popup" className="_4526dd" aria-label="Share this on googlePlus" data-tstid="shareProduct-googlePlus">
                                                        <svg className="_2e005f">
                                                            <use xlinkHref="#iconGooglePlus"></use>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                    </div>
                                   
                                    <div className="be0930">
                                        <div className="_9b60a7">
                                            <h3 className="_595cd7 _9b60a7 a974de">Wearing</h3>
                                            <p className="_9b60a7" data-tstid="modelFittingInformation">{this.props.Wearing}</p>
                                            <p className="f12637">
                                                {this.props.WearingProducts}
                                            </p>
                                        </div>
                                        <div className="_9b60a7" data-tstid="designerBackStory">
                                            <h3 className="_595cd7 _9b60a7 a974de">Designer Backstory</h3>
                                            <p className="_9b60a7" data-tstid="designerInformation">{this.props.Backstory}</p>
                                            <div className="_9b60a7"><a  className="pointer fd9e8e _3b33ac _1eaa82" data-ffref="pp_infobrd" data-tstid="viewAll">View all {this.props.Brand}</a></div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="_73a739" data-tstid="productDetailImage">
                                <div className="_5a7352 spcr-mb-S"><img className="c2a3d5 " alt="Acne Studios Velocite suede shearling jacket" src={`${ this.props.image }`} /></div>
                            
                            </div>
                            
                        </div>
                        
                    </div>
                   
                </div>
                
                <div id="panel-1" className="fd83db " role="tabpanel" aria-labelledby="size-&amp;-fit" aria-hidden="true" data-index="1" data-tstid="collapserPanel">
                    <div id="panelInner-1">
                        <h2 className="_20b562">Size &amp; Fit</h2>
                        <div data-tstid="sizeAndFitCollapserArea" className="_81a186">
                            <div className="_898310">
                                <div className="b0b6a9">
                                    <div className="bd218a" data-tstid="measurementsModule">
                                        <div>
                                            <div className="_0e24aa">
                                                <button className="fa9ea0 _60e186 _62e534" data-tstid="measurement-tab-0">centimetres</button>
                                                <div className="c21d89">
                                                    <div className="e9792b " data-tstid="measurementsToggle"></div>
                                                </div>
                                                <button className="fa9ea0 _62e534" data-tstid="measurement-tab-1">inches</button>
                                            </div>
                                            <div className="c63302">
                                                <div className="_469051" data-tstid="modelMeasurements">
                                                    <p className="a974de">Model Measurements</p>
                                                    <table>
                                                        <tbody>
                                                            <tr className="_0e03a0">
                                                                <th className="_0e2c3c">height:</th>
                                                                <td className="edce06" data-tstid="standardMeasurement">1.8 m</td>
                                                            </tr>
                                                            <tr className="_0e03a0">
                                                                <th className="_0e2c3c">bust/Chest:</th>
                                                                <td className="edce06" data-tstid="standardMeasurement">81 cm</td>
                                                            </tr>
                                                            <tr className="_0e03a0">
                                                                <th className="_0e2c3c">hips:</th>
                                                                <td className="edce06" data-tstid="standardMeasurement">88 cm</td>
                                                            </tr>
                                                            <tr className="_0e03a0">
                                                                <th className="_0cc8d6">waist:</th>
                                                                <td className="be2d26" data-tstid="standardMeasurement">62 cm</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <p data-tstid="modelFittingInformationSizeFit">Model is 1.8 m wearing size 36</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="_489198">All measurements are made by the Farfetch team</p>
                                                <div data-tstid="measurementsSizeGuide">
                                                    <p className="_6eacb8 _62e534">Still need help? Try our</p><span className="a50de9 _62e534">&nbsp;<button className="_315884 _557b5d d4f875" id="sizeGuideTrigger" data-tstid="sizeGuideLink">Size Guide</button></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aa96e8" data-tstid="sizeFitImageColumn">
                                <div className="_5a7352"><img className="c2a3d5" alt="Acne Studios Velocite suede shearling jacket" data-tstid="sizeFitImage" src="https://cdn-images.farfetch-contents.com/13/43/13/81/13431381_15558877_480.jpg"/></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div id="panel-2" className="fd83db " role="tabpanel" aria-labelledby="shipping-&amp;-returns" aria-hidden="true" data-index="2" data-tstid="collapserPanel">
                    <div id="panelInner-2">
                        <h2 className="_20b562">Shipping &amp; Returns</h2>
                        <div className="_376ebb _62e534" data-tstid="newShippingAndReturns">
                            <div className="_113e75">
                                <div className="c4669f e93fe1 _265fc6">
                                    <h4 className="a974de _5a3120">We've got your back</h4>
                                    <div>
                                        <ul>
                                            <li>One shipping fee</li>
                                            <li>Free returns within 14 days</li>
                                            <li>Click &amp; Collect</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="c4669f e93fe1 _265fc6">
                                    <h4 className="a974de _5a3120">Import duties information</h4>
                                    <div>
                                        <p>Let us handle the legwork.</p>
                                        <p>Delivery duties are included in the item price when shipping to all EU countries plus USA, Canada, China, Australia, New Zealand, Israel, Puerto Rico, Switzerland, Singapore, Republic Of Korea, Kuwait, Mexico, Qatar, India, Norway, Saudi Arabia, Taiwan, Thailand, U.A.E., Japan, Brazil, Guernsey, Isle of Man, Jersey and San Marino. All import duties are included in your order – the price you see is the price you pay.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="_113e75">
                                <div className="c4669f e93fe1 _265fc6 c965df">
                                    <h4 className="a974de _5a3120">In a hurry?</h4>
                                    <div>
                                        <p>We offer Express Delivery for most locations, and our even speedier Same Day Delivery in selected cities.</p>
                                        <p>If available, we’ll present the option at checkout.</p>
                                        <p>Express Delivery</p>
                                        <ul>
                                            <li>Europe &amp; USA within 2-4 days</li>
                                            <li>Rest of the world within 3-7 days</li>
                                            <li>Selected locations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="_113e75">
                                <div className="c4669f e93fe1 _265fc6">
                                    <h4 className="a974de _5a3120">Need more information</h4>
                                    <ul>
                                        <li><a href="#" className="fd9e8e _3b33ac _1eaa82" target="_blank" data-tstid="need-more-link-Orders &amp; Shipping">Orders &amp; Shipping</a></li>
                                        <li><a href="#" className="fd9e8e _3b33ac _1eaa82" target="_blank" data-tstid="need-more-link-Returns &amp; Refunds">Returns &amp; Refunds</a></li>
                                        <li><a href="#" className="fd9e8e _3b33ac _1eaa82" target="_blank" data-tstid="need-more-link-Duties &amp; Taxes">Duties &amp; Taxes</a></li>
                                    </ul>
                                 
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
   
    <ContactUs/>
 
</div>

        </Layout>

        );
    }
}

export default ProductDetails
