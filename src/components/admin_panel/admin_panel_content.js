import React from 'react';
import {AdminPanelHeader} from './admin_panel_header';
import { connect } from 'react-redux';
import { getDataAdmin } from '../../redux/actions/actions';
import { setSearchValRentals } from '../../redux/actions/actions';
import { getRentalID } from '../../redux/actions/actions';
import { authHeader } from '../../redux/auth_redux/_helpers/auth-header';
import RentalInfoWindow from './rental_info_window/rental_info_window';
import {getAdminFilterData} from '../../redux/actions/actions';

class AdminPanelContent extends React.Component{
    state = {
        active: false
    }

    toggleRentalActive = (id) =>{
        this.props.getRentalID(id)
        this.setState({
            active: !this.state.active
        })
    }

    closeRentalWindow = () =>{
        this.setState({
            active: false
        })
    }

    componentDidMount(){
        this.props.getAdminFilterData();
    }

    setVal = e =>{
        e.preventDefault();
        this.props.setSearchValRentals(e.target.value)
    }

    removeRental = id =>{
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader()
        };

        fetch(`https://yourthometest.herokuapp.com/Admin/rentals/${id}/delete`, requestOptions).then( () =>{
            this.props.getAdminFilterData();
        })
    }

    // getAdminFilterData = () =>{
    //     this.props.getAdminFilterData()
    // }

    render(){
        console.log(this.props)
        const { dataRentals } = this.props;
        return(
            <div className={this.props.active ? 'admin_panel_content' : 'admin_panel_content_active  admin_panel_content'}>
                <div className="burger_col">
                    <div className="admin_panel_burger" onClick={this.props.toggleActive}>
                        <div></div>
                    </div>
                </div>
            <div>
                <AdminPanelHeader />
                <div className="admin_panel_cont_info">
                    <div className="admin_cont_filter">
                        <span>Обьявления</span>
                        <div className="admin_cont_filter_block">
                            <select className="selct__block__filter" onChange={(e) => this.props.getAdminFilterData(e.target.value)}>
                            <option value="" id="city">Город</option>
                            <option value='region=0'>Бишкек</option>
                            <option value="region=1">Чуй</option>
                            <option value="region=2">Ысык-куль</option>
                            <option value="region=3">Нарын</option> 
                            <option value="region=4">Талас</option> 
                            <option value="region=5">Джалал-Абад</option>
                            <option value="region=6">Ош</option>  
                            <option value="region=5">Баткен</option>  
                            </select>
                            {/* <select className="selct__block__filter" onChange={this.props.setPropertytype}>
                            <option value="" id="city">Тип строения</option>
                            <option value='0'>Участок</option>
                            <option value="1">Квартира</option>
                            </select> */}
                            <input placeholder="Поиск..." onChange={this.setVal}></input>
                        </div>
                    </div>
                    <div className="admin_cont_rentals">
                    {
                                        this.state.active && <RentalInfoWindow closeRental ={this.closeRentalWindow}/>
                                    }
                        <div className="admin_cont_rentals_header">
                            <span>Название</span>
                            <span>Цена</span>
                            <span>Владелец</span>
                        </div>
                        {dataRentals ? dataRentals.map(elem => {
                            return(
                        <div className="admin_cont_rental_row_parent">
                            <div className="admin_cont_rental_row" onClick={() =>this.toggleRentalActive(elem.rentalID)}>        
                            <span>{elem.title}</span>
                            <span>{elem.cost}c</span>
                            <span>Оунер123</span> 
                            </div>
                            <div className="admin_panel_bin" onClick={() => this.removeRental(elem.rentalID)}>
                            <img src={require('../../content/images/adminPanel/bin.png')}></img>
                        </div>
                        </div>
                            )
                        }) : 
                            <div>Загрузка</div>
                        }
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataRentals: state.getAdminFilterData.data
    }
  }
  
  const mapDispatchToProps = {
    getDataAdmin,
    setSearchValRentals,
    getRentalID,
    getAdminFilterData
  } 
  
  export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelContent)