import React, {Component} from 'react';

export default class ThirdAddRental extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    prev = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        const { facilities } = this.props;
        const { airConditioning, balcony, internet, kitchen, phone, refrigerator, tv, washer} = facilities;
        const nameOfIcons = ["Интернет", "Телефон", "Гарнитура", "Телевизор", "Балкон", "Стиралка", "Кондиционер", "Диван"];
        const nameOfPhoto = ["work.png", "fax.png", "kitchen.png", "television.png", "window.png", "laundry.png", "air-conditioner.png", "living-room.png"];
        return(     
                <div className="rental__form__content">
                    <span className="rental__form__title">В наличии:</span>
                    <div className="rental__form__icons">
                        {/* {nameOfIcons.map((elem, index) =>( */}

                            <div className={internet ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleFacilitiesInternet}>
                                <img src={require(`../../../content/images/addRental/work.png`)} alt="img"></img>
                                <span>Интернет</span>
                            </div>
                            <div className={phone ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'}  onClick={this.props.toggleFacilitiesPhone}>
                                <img src={require(`../../../content/images/addRental/fax.png`)} alt="img"></img>
                                <span>Телефон</span>
                            </div>
                            <div className={kitchen ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleFacilitiesKitchen} >
                                <img src={require(`../../../content/images/addRental/kitchen.png`)} alt="img"></img>
                                <span>Гарнитура</span>
                            </div>
                            <div className={tv ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleFacilitiesTv} >
                                <img src={require(`../../../content/images/addRental/television.png`)} alt="img"></img>
                                <span>Телевизор</span>
                            </div>
                            <div className={balcony ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleFacilitiesBalcony} >
                                <img src={require(`../../../content/images/addRental/window.png`)} alt="img"></img>
                                <span>Балкон</span>
                            </div>
                            <div className={washer ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleFacilitiesWasher} >
                                <img src={require(`../../../content/images/addRental/laundry.png`)} alt="img"></img>
                                <span>Стиралка</span>
                            </div>
                            <div className={airConditioning ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleFacilitiesAirConditioning} >
                                <img src={require(`../../../content/images/addRental/air-conditioner.png`)} alt="img"></img>
                                <span>Кондиционер</span>
                            </div>
                            <div className={refrigerator ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleFacilitiesRefrigerator} >
                                <img src={require(`../../../content/images/addRental/living-room.png`)} alt="img"></img>
                                <span>Холодильник</span>
                            </div>
                        {/* // ))} */}
                    </div>
                    <div className="rental__form__btns">
                    <button onClick={this.props.prevStep}>Назад</button>
                        <button onClick={this.props.nextStep}>Дальше</button>
                    </div>
                </div>  
        )
    }}