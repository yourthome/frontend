import React, {Component} from 'react';

export default class FourthAddRental extends Component{
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
        const {cafe, kindergarten, parking, busStop, supermarket, park, hospital } = this.props.infrastructure;
        return(     
                <div className="rental__form__content">
                    <span className="rental__form__title">Рядом есть:</span>
                    <div className="rental__form__icons">
                        <div className={cafe ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleInfrastructureCafe}>
                                <img src={require(`../../../content/images/addRental/food.png`)} alt="img"></img>
                                <span>Кафе</span>
                            </div>
                            <div className={kindergarten ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'}  onClick={this.props.toggleInfrastructureGarden}>
                                <img src={require(`../../../content/images/addRental/kindergarten.png`)} alt="img"></img>
                                <span>Детский сад</span>
                            </div>
                            <div className={parking ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleInfrastructureParking} >
                                <img src={require(`../../../content/images/addRental/car.png`)} alt="img"></img>
                                <span>Парковка</span>
                            </div>
                            <div className={busStop ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleInfrastructureBusStop} >
                                <img src={require(`../../../content/images/addRental/station.png`)} alt="img"></img>
                                <span>Остановка</span>
                            </div>
                            <div className={supermarket ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleInfrastructureSupermarket} >
                                <img src={require(`../../../content/images/addRental/cart.png`)} alt="img"></img>
                                <span>Супермаркет</span>
                            </div>
                            <div className={park ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleInfrastructurePark} >
                                <img src={require(`../../../content/images/addRental/park.png`)} alt="img"></img>
                                <span>Парк</span>
                            </div>
                            <div className={hospital ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleInfrastructureHospital} >
                                <img src={require(`../../../content/images/addRental/cross.png`)} alt="img"></img>
                                <span>Больница</span>
                            </div>
                            {/* <div className={hospital ? 'rental__icons__block__selected rental__icons__block' : 'rental__icons__block'} onClick={this.props.toggleInfrastructureHospital} >
                                <img src={require(`../../../content/images/addRental/school.png`)} alt="img"></img>
                                <span>Школа</span>
                            </div> */}
                    </div>
                    <div className="rental__form__btns">
                    <button onClick={ this.props.prevStep}>Назад</button>
                        <button onClick={ this.props.nextStep}>Далее</button>
                    </div>
                </div>  
        )
    }}