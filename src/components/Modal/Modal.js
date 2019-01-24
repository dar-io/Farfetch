import React from 'react';
import './Modal.scss';

export default class Modal extends React.Component {
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
        document.body.classList.remove('modal-open');
        this.setState({ showModal: false });
    }
    render() {
        if (!this.props.show){
            return null;
        }
        return (
            <div className="modal-wrapper">
                <div className="modal-container">
                <button className="modal-close _315884 eeb628 _4b1322" data-tstid="btnClose" aria-label="[Close Size Guide Modal]" onClick={(e) => { this.onClose(e)}}><svg className="_1a2756 eef8f9"><use xlinkHref="#iconCross"></use></svg></button>
                    
                    {this.props.children}
                </div>
                
                
            </div>
        )
    }

}

