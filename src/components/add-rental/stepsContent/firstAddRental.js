import React, {Component} from 'react';

export default class FirstAddRental extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { values, handleChange } = this.props;
        
        return(     
                <div className="rental__form__content">
                    <input placeholder="Название обьявления" onChange={handleChange('title')} defaultValue={values.title}></ input>
                    <textarea placeholder="Описание обьявления" onChange={handleChange('description')} defaultValue={values.description}></ textarea>
                    <div className="rental__form__dropblock">
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
                    </div>
                    <div className="rental__form__btns rental__form__btns__first">
                        <button onClick={this.continue}>Дальше</button>
                    </div>
                </div>  
        )
    }}