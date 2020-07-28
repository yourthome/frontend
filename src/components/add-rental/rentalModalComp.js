import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RentalForm from './rentalForm';

export default class RentalModalComp extends Component{
    render(){

    return(
        <>
        {ReactDOM.createPortal(
                <div>
                    <div className="modal--overlay" onClick={this.props.onClose}>
                    <span className="modal__cross__icon"></span>
                    </div>
                    <RentalForm />
                </div>,document.getElementById('portal'))}
        </>
    )}
}