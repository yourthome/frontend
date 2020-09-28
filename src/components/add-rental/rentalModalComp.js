import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RentalForm from './rentalForm';
import { Link } from 'react-router-dom';

export default class RentalModalComp extends Component{

    pushIfPosted = (posted) => {
        if (posted) {
            this.props.history.replace("/")
        }
    }

    render(){
        console.log(1)
    return(
        <div className="big-bg">
            <Link to='/'>
                {/* <div className="add_rental_bg">
                </div> */}
                <div className="modal__cross__icon"></div>
            </Link>
            <RentalForm pushIfPosted={this.pushIfPosted}/>
        </div>
    )}
}