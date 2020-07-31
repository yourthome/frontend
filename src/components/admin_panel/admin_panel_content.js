import React from 'react';
import {AdminPanelHeader} from './admin_panel_header';
import { connect } from 'react-redux';
import { getDataAdmin } from '../../redux/actions/actions';

class AdminPanelContent extends React.Component{

    componentDidMount(){
        this.props.getDataAdmin();
    }

    render(){
        const { dataRentals } = this.props;
        console.log(dataRentals)
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
                            <select className="selct__block__filter" onChange={this.props.setRegion}>
                            <option value="" id="city">Город</option>
                            <option value='0'>Бишкек</option>
                            <option value="1">Чуй</option>
                            <option value="2">Ысык-куль</option>
                            <option value="3">Нарын</option> 
                            <option value="4">Талас</option> 
                            <option value="5">Джалал-Абад</option>
                            <option value="6">Ош</option>  
                            <option value="5">Баткен</option>  
                            </select>
                            <select className="selct__block__filter" onChange={this.props.setPropertytype}>
                            <option value="" id="city">Тип строения</option>
                            <option value='0'>Участок</option>
                            <option value="1">Квартира</option>
                            </select>
                            <input placeholder="Поиск..."></input>
                        </div>
                    </div>
                    <div className="admin_cont_rentals">
                        <div className="admin_cont_rentals_header">
                            <span>Название</span>
                            <span>Цена</span>
                            <span>Владелец</span>
                        </div>
                        {dataRentals ? dataRentals.map(elem => {
                            return(
                                <div className="admin_cont_rental_row">
                            <span>{elem.description}</span>
                            <span>{elem.cost}c</span>
                            <span>Оунер123</span>
                            <div className="admin_panel_bin">
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
        dataRentals: state.getDataAdmin.data
    }
  }
  
  const mapDispatchToProps = {
    getDataAdmin
  } 
  
  export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelContent)