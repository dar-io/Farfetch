import React from 'react';
import './TestMenu.scss';
import { genericHashLink } from 'react-router-hash-link';
import GatsbyLink from 'gatsby-link';

const MyHashLink = (props) => genericHashLink(props, GatsbyLink);

class TestMenu extends React.Component {

  
    render() {
      return (
       
            <div className="test-menu">
            <div className="title">
                <h4 className="heading type-L type-bold Polaris-Bold"> Choose a heading that in your view best describes this section.</h4>
            </div>
                <ol className="heading type-L type-bold Polaris-Bold">
                    <li className={`${this.props.active1}`}><MyHashLink smooth to={`${this.props.URLoption1}`} >{this.props.option1}</MyHashLink></li>
                    <li className={`${this.props.active2}`}><MyHashLink smooth to={`${this.props.URLoption2}`}>{this.props.option2}</MyHashLink></li>
                    <li className={`${this.props.active3}`}><MyHashLink smooth to={`${this.props.URLoption3}`}>{this.props.option3}</MyHashLink></li>
                    <li className={`${this.props.active4}`}><MyHashLink smooth to={`${this.props.URLoption4}`}>{this.props.option4}</MyHashLink></li>
                    <li className={`${this.props.active5}`}><MyHashLink smooth to={`${this.props.URLoption5}`}>{this.props.option5}</MyHashLink></li>
                    
                </ol>
            </div>
        )
    }

}


export default TestMenu;
