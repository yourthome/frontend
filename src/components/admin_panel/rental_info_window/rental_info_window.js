import React from 'react';
import { connect } from 'react-redux';

class RentalInfoWindow extends React.Component{
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
              
                      <div><span>Тип недвижимости:</span> <span>{data.propetyType == 0 ? 'Квартира' : 'Участок'}</span></div>
                        <div>
                          <span>Кол-во комнат: </span>
                          <span>{data.rooms}</span>
                        </div>
                        <div>
                          <span>Описание: </span>
                          <span>{data.description}</span>
                        </div>
                    </div>
                </div>
            )
        }
}

const mapStateToProps = state => {
    return {
        data: state.getAdminFilterData.data
      .filter((rental) => rental.rentalID === state.getRentalID.rentalId)
    }
  }

  
  export default connect(mapStateToProps, null)(RentalInfoWindow)