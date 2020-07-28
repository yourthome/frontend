import React from 'react';
import FirstAddRental from './stepsContent/firstAddRental';
import SecondAddRental from './stepsContent/secondAddRentals';
import ThirdAddRental from './stepsContent/thirdAddRental';
import FourthAddRental from './stepsContent/fourthAddRental'
import './rentalForm.css';
import FormStep from './formSteps';


export default class RentalForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            step: 1,
            userID: 1,
            region: 0,
            street: null,
            rooms: '',
            cost: '',
            propertyType: 0,
            rentTime: 0,
            floor: '',
            title: '',
            description: '',
            latitude: 0,
            longitude: 0,
            facilities: {
              facilitiesID: 7,
              rentalID: 8,
              internet: false,
              phone: false,
              refrigerator: false,
              kitchen: false,
              tv: false,
              balcony: false,
              washer: false,
              airConditioning: false
            },
            infrastructure: {
              infrastructureID: 8,
              rentalID: 8,
              cafe: false,
              kindergarten: false,
              parking: false,
              busStop: false,
              supermarket: false,
              park: false,
              hospital: false
            },
            photos: []
        }
    }

    toggleFacilitiesInternet = () => {
        const { facilities } = this.state;
        this.setState({
            facilities: ({
                ...facilities,
                internet : !facilities.internet
            })
        } )
    }

    toggleFacilitiesPhone = () => {
        const { facilities } = this.state;
        this.setState({
            facilities: ({
                ...facilities,
                phone : !facilities.phone
            })
        } )
    }

    toggleFacilitiesKitchen = () => {
        const { facilities } = this.state;
        this.setState({
            facilities: ({
                ...facilities,
                kitchen : !facilities.kitchen
            })
        } )
    }

    toggleFacilitiesTv = () => {
        const { facilities } = this.state;
        this.setState({
            facilities: ({
                ...facilities,
                tv : !facilities.tv
            })
        } )
    }

    toggleFacilitiesBalcony = () => {
        const { facilities } = this.state;
        this.setState({
            facilities: ({
                ...facilities,
                balcony : !facilities.balcony
            })
        } )
    }

    toggleFacilitiesWasher = () => {
        const { facilities } = this.state;
        this.setState({
            facilities: ({
                ...facilities,
                washer : !facilities.washer
            })
        } )
    }

    toggleFacilitiesAirConditioning = () => {
        const { facilities } = this.state;
        this.setState({
            facilities: ({
                ...facilities,
                airConditioning : !facilities.airConditioning
            })
        } )
    }

    toggleFacilitiesRefrigerator = () => {
        const { facilities } = this.state;
        this.setState({
            facilities: ({
                ...facilities,
                refrigerator : !facilities.refrigerator
            })
        } )
    }



    toggleInfrastructureGarden = () => {
        const { infrastructure } = this.state;
        this.setState({
            infrastructure: ({
                ...infrastructure,
                kindergarten : !infrastructure.kindergarten
            })
        } )
    }

    toggleInfrastructureCafe = () => {
        const { infrastructure } = this.state;
        this.setState({
            infrastructure: ({
                ...infrastructure,
                cafe : !infrastructure.cafe
            })
        } )
    }

    toggleInfrastructureParking = () => {
        const { infrastructure } = this.state;
        this.setState({
            infrastructure: ({
                ...infrastructure,
                parking : !infrastructure.parking
            })
        } )
    }

    toggleInfrastructureBusStop = () => {
        const { infrastructure } = this.state;
        this.setState({
            infrastructure: ({
                ...infrastructure,
                busStop : !infrastructure.busStop
            })
        } )
    }

    toggleInfrastructureSupermarket = () => {
        const { infrastructure } = this.state;
        this.setState({
            infrastructure: ({
                ...infrastructure,
                supermarket : !infrastructure.supermarket
            })
        } )
    }

    toggleInfrastructurePark = () => {
        const { infrastructure } = this.state;
        this.setState({
            infrastructure: ({
                ...infrastructure,
                park : !infrastructure.park
            })
        } )
    }

    toggleInfrastructureHospital = () => {
        const { infrastructure } = this.state;
        this.setState({
            infrastructure: ({
                ...infrastructure,
                hospital : !infrastructure.hospital
            })
        } )
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
        this.setState({[input]: e.target.value});
        console.log(this.state)
    }

    setRegion = e => {
        this.setState({region: e.target.value});
    }

    setPropertytype = e => {
        this.setState({propertyType: e.target.value});
    }

    render(){
        const { step } = this.state;
        const { title, rooms, description, cost, floor, region } = this.state;
        const values = { rooms, description, cost, title, floor, region };
        const { facilities, infrastructure } = this.state;

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
                        <SecondAddRental  handleChange={this.handleChange} values={values} prevStep = {this.prevStep} nextStep = {this.nextStep}/>
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
                        <FourthAddRental nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} infrastructure={ infrastructure } toggleInfrastructureCafe ={this.toggleInfrastructureCafe} toggleInfrastructureGarden={ this.toggleInfrastructureGarden } toggleInfrastructureParking={this.toggleInfrastructureParking} toggleInfrastructureBusStop={this.toggleInfrastructureBusStop} toggleInfrastructureSupermarket={this.toggleInfrastructureSupermarket} toggleInfrastructurePark={this.toggleInfrastructurePark} toggleInfrastructureHospital={this.toggleInfrastructureHospital}/>
                    </div>
                    </>
                )
        }
    }
}
