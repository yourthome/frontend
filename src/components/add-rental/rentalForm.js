import React from 'react';
import FirstAddRental from './stepsContent/firstAddRental';
import SecondAddRental from './stepsContent/secondAddRentals';
import ThirdAddRental from './stepsContent/thirdAddRental';
import FourthAddRental from './stepsContent/fourthAddRental'
import './rentalForm.css';
import FormStep from './formSteps';
import { connect } from 'react-redux';
import { userActions } from '../../redux/auth_redux/_actions/user.actions'


class RentalForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        rental: {title:'',region:'',street:"string",rooms:'',cost:'',floor:'',propertyType:'',rentTime:0,description:"",latitude:0,longitude:0,facilities:{internet:false,phone:false,refrigerator:false,kitchen:false,tv:false,balcony:false,washer:false,airConditioning:false},infrastructure:{cafe:false,kindergarten:false,parking:false,busStop:false,supermarket:false,park:false,hospital:false}},
        step: 1
        }
    }

    toggleFacilitiesInternet = () => {
        const { facilities } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
                facilities: ({
                    ...facilities,
                    internet : !facilities.internet
            })
        })} )
    }

    toggleFacilitiesPhone = () => {
        const { facilities } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
                facilities: ({
                    ...facilities,
                    phone : !facilities.phone
            })
        })
        } )
    }

    toggleFacilitiesKitchen = () => {
        const { facilities } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
                facilities: ({
                    ...facilities,
                    kitchen : !facilities.kitchen
            })
        })
        } )
    }

    toggleFacilitiesTv = () => {
        const { facilities } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
                facilities: ({
                    ...facilities,
                    tv : !facilities.tv
            })
        })
        } )
    }

    toggleFacilitiesBalcony = () => {
        const { facilities } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
                facilities: ({
                    ...facilities,
                    balcony : !facilities.balcony
            })
        })
        } )
    }

    toggleFacilitiesWasher = () => {
        const { facilities } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
                facilities: ({
                    ...facilities,
                    washer : !facilities.washer
            })
        })
        } )
    }

    toggleFacilitiesAirConditioning = () => {
        const { facilities } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
                facilities: ({
                    ...facilities,
                    airConditioning : !facilities.airConditioning
            })
        })
        } )
    }

    toggleFacilitiesRefrigerator = () => {
        const { facilities } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
                facilities: ({
                    ...facilities,
                    refrigerator : !facilities.refrigerator
            })
        })
        } )
    }



    toggleInfrastructureGarden = () => {
        const { infrastructure } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
            infrastructure: ({
                ...infrastructure,
                kindergarten : !infrastructure.kindergarten
            })})
        } )
    }

    toggleInfrastructureCafe = () => {
        const { infrastructure } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
            infrastructure: ({
                ...infrastructure,
                cafe : !infrastructure.cafe
            })})
        } )
    }

    toggleInfrastructureParking = () => {
        const { infrastructure } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
            infrastructure: ({
                ...infrastructure,
                parking : !infrastructure.parking
            })})
        } )
    }

    toggleInfrastructureBusStop = () => {
        const { infrastructure } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
            infrastructure: ({
                ...infrastructure,
                busStop : !infrastructure.busStop
            })})
        } )
    }

    toggleInfrastructureSupermarket = () => {
        const { infrastructure } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
            infrastructure: ({
                ...infrastructure,
                supermarket : !infrastructure.supermarket
            })})
        } )
    }

    toggleInfrastructurePark = () => {
        const { infrastructure } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
            infrastructure: ({
                ...infrastructure,
                park : !infrastructure.park
            })})
        } )
    }

    toggleInfrastructureHospital = () => {
        const { infrastructure } = this.state.rental;
        const {rental} = this.state
        this.setState({
            rental: ({
                ...rental,
            infrastructure: ({
                ...infrastructure,
                hospital : !infrastructure.hospital
            })})
        } )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postNewRental(this.state.rental);
      }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        const { rental } = this.state;
        this.setState({
            rental: ({
                ...rental,
                [input] : e.target.value
            })
        }) 
    }

    handleChangeNum = input => e => {
        const { rental } = this.state;
        this.setState({
            rental: ({
                ...rental,
                [input] : +e.target.value
            })
        })
    }

    setRegion = e => {
        const { rental } = this.state;
        this.setState({
            rental: ({
                ...rental,
                region : +e.target.value
            })
        })
    }

    setPropertytype = e => {
        const { rental } = this.state;
        this.setState({
            rental: ({
                ...rental,
                propertyType : +e.target.value
            })
        })
    }

    render(){
        const { step } = this.state;
        const { title, rooms, description, cost, floor, region } = this.state.rental;
        const values = { rooms, description, cost, title, floor, region };
        const { facilities, infrastructure } = this.state.rental;

        switch(step){
            case 1:
                return(
                    <>
                     <div className="rental__form">
                    <FormStep step={ step } />
                    <FirstAddRental handleChange={this.handleChange} values={values} nextStep = {this.nextStep} setRegion={this.setRegion} setPropertytype={this.setPropertytype}/>
                    </div>
                    </>
                )
            case 2:
                return(
                    <>
                    <div className="rental__form">
                        <FormStep step={ step }/>
                        <SecondAddRental  handleChangeNum={this.handleChangeNum} values={values} prevStep = {this.prevStep} nextStep = {this.nextStep}/>
                    </div>
                    </>
                )
            case 3:
                return(
                    <>
                    <div className="rental__form">
                        <FormStep step={step} />
                        <ThirdAddRental nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} facilities={ facilities } toggleFacilitiesInternet = {this.toggleFacilitiesInternet} toggleFacilitiesPhone = {this.toggleFacilitiesPhone} toggleFacilitiesKitchen = {this.toggleFacilitiesKitchen} toggleFacilitiesTv = {this.toggleFacilitiesTv} toggleFacilitiesBalcony ={this.toggleFacilitiesBalcony}  toggleFacilitiesWasher = {this. toggleFacilitiesWasher} toggleFacilitiesAirConditioning = {this.toggleFacilitiesAirConditioning} toggleFacilitiesRefrigerator = {this.toggleFacilitiesRefrigerator}/>
                    </div>
                    </>
                )
            case 4:
                return(
                    <>
                    <div className="rental__form">
                        <FormStep step={step} />
                        <FourthAddRental nextStep={this.nextStep} prevStep={this.prevStep} handleChangeNum={this.handleChangeNum} values={values} infrastructure={ infrastructure } toggleInfrastructureCafe ={this.toggleInfrastructureCafe} toggleInfrastructureGarden={ this.toggleInfrastructureGarden } toggleInfrastructureParking={this.toggleInfrastructureParking} toggleInfrastructureBusStop={this.toggleInfrastructureBusStop} toggleInfrastructureSupermarket={this.toggleInfrastructureSupermarket} toggleInfrastructurePark={this.toggleInfrastructurePark} toggleInfrastructureHospital={this.toggleInfrastructureHospital} showState={this.showState} handleSubmit={this.handleSubmit}/>
                    </div>
                    </>
                )
        }
    }
}


const mapStateToProps = state => {
    const { posting } = state.postNewRentalData;
    return { posting }
  }
  
  const mapDispatchToProps = {
    postNewRental: userActions.postNewRental
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RentalForm);