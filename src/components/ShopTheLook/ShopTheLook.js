import React from 'react'
import StickyBox from "react-sticky-box";
import './ShopTheLook.scss'
import '../Typography/typography.scss'
import '../Utilities/spacers.scss'
import Layout from '../Layout/Layout';
import ProductCard from '../ProductCard/ProductCard'
import Modal from '../Modal/Modal';
import ShopTheLookModal from '../ShopTheLookModal/ShopTheLookModal';
import SimilarButton from '../Buttons/SimilarButton';
import AddToBagButton from '../Buttons/AddToBagButton';
import SelectSize from '../Buttons/SelectSize';

class ShopTheLook extends React.Component {

  state = {
    show: false
  }

  showModal = () => {
    this.setState({
      ...this.state, show: !this.state.show
    });
    document.body.classList.add('modal-open');
    this.setState({ showModal: true });
  }


  render() {
    return (
     
      
      <Layout className="shop-the-look spcr-mb-XL">
    
      
          <a className="anchorSTL" name="STLtop"></a>
          <h3 id="STL" className="spcr-pb-M heading type-L type-bold type-center Polaris-Bold">{this.props.Heading}</h3>
         
          <div>
            <Modal 
              onClose={this.showModal}
              show={this.state.show}>
            
              <ShopTheLookModal/>
            </Modal>
           
        </div>

        <div className="shop-the-look--container">
 
         <div className="A">
          <StickyBox offsetTop={174} offsetBottom={20}>
            <div className="image-container">
              <a href="#" onClick={this.showModal }
              value="Show Modal">
              <img alt="" src="https://cdn-images.farfetch-contents.com/12/68/86/60/12688660_12808251_1000.jpg"/>
              
              </a>
            </div>
           
          </StickyBox>
          </div>
        
          <ProductCard
            classes="B"  
            title="Unravel Project"
            // description="single breasted houndstooth virgin wool blend blazer"
            price=          "£748"
            image=          "https://cdn-images.farfetch-contents.com/12/68/86/60/12688660_12808249_480.jpg"
            imageHover=     "https://cdn-images.farfetch-contents.com/12/68/86/60/12688660_12808251_480.jpg"
            // SimilarButton=  {<SimilarButton />}
            SelectSize=     {<SelectSize />}
            AddToBagButton= {<AddToBagButton />}
            /> 

           <ProductCard
            classes="C"  
            title="Off-White"
            // description="side-stripe check trousers"
            price="Sold Out"
            priceClass="bold"
            image="https://cdn-images.farfetch-contents.com/12/54/98/49/12549849_12476464_480.jpg"
            imageHover="https://cdn-images.farfetch-contents.com/12/54/98/49/12549849_12476466_480.jpg"
            SimilarButton=  {<SimilarButton />}
            // SelectSize=     {<SelectSize />}
            // AddToBagButton= {<AddToBagButton />}
            /> 

            <ProductCard
            classes="D"  
            title="BLINDNESS"
            // description="black For Walking 110 leather pumps"
            price="£615"
            image="https://cdn-images.farfetch-contents.com/12/66/66/27/12666627_12446991_480.jpg"
            imageHover="https://cdn-images.farfetch-contents.com/12/66/66/27/12666627_12446993_480.jpg"
            // SimilarButton=  {<SimilarButton />}
            SelectSize=     {<SelectSize />}
            AddToBagButton= {<AddToBagButton />}
            /> 
          
            <ProductCard
            classes="E"  
            title="UNRAVEL PROJECT"
            // description="Kan I F woven leather shoulder bag"
            price="£600"
            image="https://cdn-images.farfetch-contents.com/12/68/86/55/12688655_12793824_1000.jpg"
            imageHover="https://cdn-images.farfetch-contents.com/12/68/86/55/12688655_12793832_1000.jpg"
            // SimilarButton=  {<SimilarButton />}
            SelectSize=     {<SelectSize />}
            AddToBagButton= {<AddToBagButton />}
            /> 


            <ProductCard
            classes="F"  
            title="Fendi"
            // description="High waisted leggings with rear logo"
            price="£224"
            image="https://cdn-images.farfetch-contents.com/13/04/47/90/13044790_13916977_480.jpg"
            imageHover="https://cdn-images.farfetch-contents.com/13/04/47/90/13044790_13916984_480.jpg"
            // SimilarButton=  {<SimilarButton />}
            // SelectSize=     {<SelectSize />}
            AddToBagButton= {<AddToBagButton />}
            /> 

            {/* <ProductCard
            classes="G"  
            title="Off-White"
            price="£555"
            // description="stripe floral print long sleeve shirt"
            image="https://cdn-images.farfetch-contents.com/13/00/01/96/13000196_14191702_480.jpg"
            imageHover="https://cdn-images.farfetch-contents.com/13/00/01/96/13000196_14191716_480.jpg"
            // SimilarButton=  {<SimilarButton />}
            SelectSize=     {<SelectSize />}
            AddToBagButton= {<AddToBagButton />}
            />  */}
        
      
        </div>
      </Layout>
      
    );
  }
}

export default ShopTheLook;