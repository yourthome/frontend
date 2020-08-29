import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import check from '../../content/images/addRental/tick.png';
import { Link } from 'react-router-dom';
import {Loader} from '../loader/loader';

export default class ModalAlert extends Component{
    state = {
    };

  render() {
    return(
    <>
        {ReactDOM.createPortal(  
          <div className="modal-overplay-window">
              <div className="modal-alert_content">
                {this.props.posted !== true ?  <Loader /> : <><img src={check} alt='icon'></img>
                <h4>Обьявление загружено!</h4>
                <Link to='/' className='modal_alert_link' onClick={this.props.changeSuccessPosted}>
                  <button>ok</button>
                </Link></>}
              </div>
          </div> 
         ,document.getElementById('portal'))} 
    </>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Registration);