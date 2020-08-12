import React from 'react';
import {AdminPanelHeader} from './admin_panel_header';
import { connect } from 'react-redux';
import { userActions } from '../../redux/auth_redux/_actions';
import { setSearchValUsers } from '../../redux/actions/actions';
import UserInfoWindow from './rental_info_window/user_info_window';
import { authHeader } from '../../redux/auth_redux/_helpers/auth-header';

class AdminPanelContentUsers extends React.Component{

    state = {
        active: false,
        data: ''
    }

    componentDidMount() {
        this.props.getUsers();
    }

    toggleRentalActive = () =>{
        this.setState({
            active: !this.state.active
        })
    }

    closeRentalWindow = () =>{
        this.setState({
            active: false
        })
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
      }

      setVal = e =>{
        e.preventDefault();
        this.props.setSearchValUsers(e.target.value)
    }

    getUserRentals(id) {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        fetch(`https://yourthometest.herokuapp.com/PersonalPage/getuserrentals/`, requestOptions).then(
            res => {
                this.setState({
                    data: res
                })
            }
        )
    }


    render(){
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
                        <span>Пользователи</span>
                        <div className="admin_cont_filter_block">
                            {/* <select className="selct__block__filter" onChange={this.props.setRegion}>
                            <option value="" id="city">Город</option>
                            <option value='0'>Бишкек</option>
                            <option value="1">Чуй</option>
                            <option value="2">Ысык-куль</option>
                            <option value="3">Нарын</option> 
                            <option value="4">Талас</option> 
                            <option value="5">Джалал-Абад</option>
                            <option value="6">Ош</option>  
                            <option value="5">Баткен</option>  
                            </select> */}
                            {/* <select className="selct__block__filter" onChange={this.props.setPropertytype}>
                            <option value="" id="city">Тип строения</option>
                            <option value='0'>Участок</option>
                            <option value="1">Квартира</option>
                            </select> */}
                            <input placeholder="Поиск..." onChange={this.setVal}></input>
                        </div>
                    </div>
                        {this.props.users.loading && <em className="admin_users_loader">Loading users...</em>}
                        {Array.isArray(this.props.users) && 
                         <div className="admin_cont_rentals">
                             {
                                        this.state.active && <UserInfoWindow />
                                    }
                            {this.props.users.map(elem => {
                            return(
                        <div className="admin_cont_rental_row_parent">
                        <div className="admin_cont_rental_row">
                            <div className="admin_user_icon">
                                <img src={require('../../content/images/adminPanel/user.jpg')}></img>
                            </div>
                            <span>{elem.username}</span>
                            <span>+996709999666</span>
                            <div className="admin_user_rentals" /*onClick={() => this.getUserRentals(elem.id)}*/>
                                <span>Saburov_1984@gmail.com</span>
                            </div>
                        </div>
                        <div className="admin_panel_bin" onClick={this.handleDeleteUser(elem.id)}>
                                <img src={require('../../content/images/adminPanel/bin.png')}></img>
                            </div>
                        </div>
                            )
                        })}
                        </div>
                        }
                        
                    
                
            </div>
            </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { 
            users: state.users.items ? state.users.items.filter(elem => elem.username.toLowerCase().includes(state.searchValUsers.data)) : state.users
        };
  }
  
const mapDispatchToProps = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    setSearchValUsers
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelContentUsers);