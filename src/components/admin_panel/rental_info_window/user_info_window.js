import React from 'react';
import { connect } from 'react-redux';

class UserInfoWindow extends React.Component{
        render(){
          const data = this.props.data[0];
            console.log(data);
            return(
                <div className="rental_info_window">
                    <div className="info_window_header">
                      <span>YourtHome</span>
                      <div onClick={this.props.closeRental}></div>
                    </div>
                    <div className="info_window_content">
              
                      <div><span>Тип недвижимости:</span> <span></span></div>
                        <div>
                          <span>Кол-во комнат: </span>
                          <span></span>
                        </div>
                        <div>
                          <span>Описание: </span>
                          <span></span>
                        </div>
                    </div>
                </div>
            )
        }
}

const mapStateToProps = state => {
    return {
        data: state.getDataAdmin.data
      .filter((rental) => rental.rentalID === state.getRentalID.rentalId)
    }
  }

  
  export default connect(mapStateToProps, null)(UserInfoWindow)