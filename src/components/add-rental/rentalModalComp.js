import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RentalForm from './rentalForm';
import { Link } from 'react-router-dom';

export default class RentalModalComp extends Component{
    render(){
        console.log(1)
    return(
        <>
                <Link to='/'><div className="add_rental_bg"></div></Link>
                <RentalForm />
                 
        </>
    )}
}