import React from 'react'
import './ProductCard.scss'
import '../Animations/Animations.scss'

class ProductCard extends React.Component {
   

    render() {
        
       return (
           
        <div className={`product-card ${ this.props.classes }`}>
       
        <button className="wishlist-btn" aria-label="wishlist button add" data-test="wishlist-button-add"><span className="icon-star"></span></button>
            <div className="product-card--image">
                <div className="product-card--image-inner">
                    <img className="rollover-image" alt="" src={`${ this.props.imageHover }`}/>
                    <span className="product-image">
                        <img alt="" src={`${ this.props.image }`}/>
                    </span>
                </div>
            </div>
            <div className="product-card--Details">
            <div className="product-card--info ">
                <div className="product-card--title">{this.props.title}</div>
                <div className="product-card--description type-M">{this.props.description}</div>
                <span className={`product-card--price spcr-mt-S ${this.props.priceClass}`}>{this.props.price}</span>
            </div>
            
                <div className="product-card--buttons">
                    {this.props.SimilarButton}
                    {this.props.SelectSize}
                    {this.props.AddToBagButton}
                    
                </div>
            </div>
        </div>
       );
    }
 }
 export default ProductCard;



 