import React from 'react'
import './Carousel.scss'



export class Carousel extends React.Component {
    render() {
  
      return (
        <div className={this.props.classes}>
            <div className="items-wraper">
                  
            <div className="items" id="items">
            <div className="item">
                <img className="item-image" alt="description" src="https://cdn-images.farfetch-contents.com/13/00/25/79/13002579_14188766_1000.jpg"/>
                <h2 className="item-title Polaris-Bold type-M">View the Look</h2>
                <p className="item-description">6 Pieces</p>
            </div>
            <div className="item">
                <img className="item-image" alt="description" src="https://cdn-images.farfetch-contents.com/13/00/30/65/13003065_13861162_1000.jpg"/>
                    <h2 className="item-title Polaris-Bold type-M">View the Look</h2>
                <p className="item-description">6 Pieces</p>
            </div>
            <div className="item">
                <img className="item-image" alt="description" src="https://cdn-images.farfetch-contents.com/12/96/73/06/12967306_14307926_1000.jpg"/>
                    <h2 className="item-title Polaris-Bold type-M">View the Look</h2>
                <p className="item-description">6 Pieces</p>
            </div>
            <div className="item">
                <img className="item-image" alt="description" src="https://cdn-images.farfetch-contents.com/13/00/01/96/13000196_14191716_1000.jpg"/>
                    <h2 className="item-title Polaris-Bold type-M">View the Look</h2>
                <p className="item-description">6 Pieces</p>
            </div>
            <div className="item">
                <img className="item-image" alt="description" src="https://cdn-images.farfetch-contents.com/12/97/22/18/12972218_13892278_1000.jpg"/>
                    <h2 className="item-title Polaris-Bold type-M">View the Look</h2>
                <p className="item-description">6 Pieces</p>
            </div>
            <div className="item">
                <img className="item-image" alt="description" src="https://cdn-images.farfetch-contents.com/13/04/47/90/13044790_13916984_1000.jpg"/>
                <h2 className="item-title Polaris-Bold type-M">View the Look</h2>
                <p className="item-description">6 Pieces</p>
            </div>
            <div className="item">
                <img className="item-image" alt="description" src="https://cdn-images.farfetch-contents.com/12/66/20/86/12662086_13203346_1000.jpg"/>
                    <h2 className="item-title Polaris-Bold type-M">View the Look</h2>
                <p className="item-description">6 Pieces</p>
            </div>
            </div>
            </div>
    
    </div >
    )
  }
}

export default Carousel
