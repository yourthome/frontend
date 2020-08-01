import React from 'react';
import {AdminPanelHeader} from './admin_panel_header';
import { connect } from 'react-redux';
import { userActions } from '../../redux/auth_redux/_actions';

class AdminPanelContentUsers extends React.Component{

    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
      }

    render(){
        const {user, users} = this.props;
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
                            <input placeholder="Поиск..."></input>
                        </div>
                    </div>
                        {users.loading && <em className="admin_users_loader">Loading users...</em>}
                        {users.items && 
                         <div className="admin_cont_rentals">
                            {users.items.map(elem => {
                            return(
                                <div className="admin_cont_rental_row">
                            <div className="admin_user_icon">
                                <img src={require('../../content/images/adminPanel/user.jpg')}></img>
                            </div>
                            <span>{elem.username}</span>
                            <span>+996709999666</span>
                            <div className="admin_user_rentals">
                                <span>Обьявлений: 3</span>
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
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
  }
  
const mapDispatchToProps = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelContentUsers);