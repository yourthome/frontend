import React from 'react';
import FirstAddRental from './stepsContent/firstAddRental';
import SecondAddRental from './stepsContent/secondAddRentals';
import ThirdAddRental from './stepsContent/thirdAddRental';
import FourthAddRental from './stepsContent/fourthAddRental';
import {FifthAddRental} from './stepsContent/fiveAddRental';
import SixthAddRental from './stepsContent/sixthAddRental';
import './rentalForm.css';
import FormStep from './formSteps';
import { connect } from 'react-redux';
import { userActions } from '../../redux/auth_redux/_actions/user.actions'


class RentalForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        rental: {
            title: '',
            region: '',
            street: "string",
            rooms: '',
            cost: '',
            floor: '0',
            propertyType: '',
            rentTime: 0,
            description: "",
            latitude: 0,
            longitude: 0,
            facilities: {
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
                cafe: false,
                kindergarten: false,
                parking: false,
                busStop: false,
                supermarket: false,
                park: false,
                hospital: false
            },
            photos: ''
        },
        step: 1
        }
    }

    // mapStateToForm = () =>{
    //     const { rental } = this.state;
    //     rental = new FormData();
    // }

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

    handleSubmit = (arr) => {
        // event.preventDefault();
        let formData = new FormData();
        formData.append('title', this.state.rental.title);
        formData.append('region', this.state.rental.region);
        formData.append('street', this.state.rental.street);
        formData.append('rooms', this.state.rental.rooms);
        formData.append('cost', this.state.rental.cost);
        formData.append('floor', this.state.rental.floor);
        formData.append('propertyType', this.state.rental.propertyType);
        formData.append('rentTime', this.state.rental.rentTime);
        formData.append('description', this.state.rental.description);
        formData.append('latitude', this.state.rental.latitude);
        formData.append('longitude', this.state.rental.longitude);
        formData.append('facilities', this.state.rental.facilities);
        formData.append('infrastructure', this.state.rental.infrastructure);
        formData.append('photos', arr[0]);
        formData.append('photos', arr[1]);
        formData.append('photos', arr[2]);
        formData.append('photos', arr[3]);
        formData.append('photos', arr[4]);
        formData.append('photos', arr[5]);
        formData.append('photos', arr[6]);
        formData.append('photos', arr[7]);
        this.props.postNewRental(formData);
      }

    setPhotos = (file) => {
        const {rental} = this.state;
        this.setState({
            rental: ({
                ...rental, 
                photos: file
            })
        })
        console.log(this.state.rental.photos);
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
        console.log(this.state.rental)
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

    handleMarker = marker => {
        const { rental } = this.state;
        this.setState({
            rental: ({
                ...rental,
                latitude: marker.lat,
                longitude: marker.lng,
            })
        })
        console.log(marker)
    }
    

    render(){
        const { step } = this.state;
        const { title, rooms, description, cost, floor, region } = this.state.rental;
        const values = { rooms, description, cost, title, floor, region };
        const { facilities, infrastructure } = this.state.rental;
        const { propertyType } = this.state.rental;

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
                        <SecondAddRental  handleChangeNum={this.handleChangeNum} values={values} prevStep = {this.prevStep} nextStep = {this.nextStep} propertyType={propertyType}/>
                    </div>
                    </>
                )
            case 3:
                return(
                    <>
                    <div className="rental__form">
                        <FormStep step={step} />
                        <ThirdAddRental nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} facilities={ facilities } toggleFacilitiesInternet = {this.toggleFacilitiesInternet} toggleFacilitiesPhone = {this.toggleFacilitiesPhone} toggleFacilitiesKitchen = {this.toggleFacilitiesKitchen} toggleFacilitiesTv = {this.toggleFacilitiesTv} toggleFacilitiesBalcony ={this.toggleFacilitiesBalcony}  toggleFacilitiesWasher = {this.toggleFacilitiesWasher} toggleFacilitiesAirConditioning = {this.toggleFacilitiesAirConditioning} toggleFacilitiesRefrigerator = {this.toggleFacilitiesRefrigerator}/>
                    </div>
                    </>
                )
            case 4:
                return(
                    <>
                    <div className="rental__form">
                        <FormStep step={step} />
                        <FourthAddRental nextStep={this.nextStep} prevStep={this.prevStep} handleChangeNum={this.handleChangeNum} values={values} infrastructure={ infrastructure } toggleInfrastructureCafe ={this.toggleInfrastructureCafe} toggleInfrastructureGarden={ this.toggleInfrastructureGarden } toggleInfrastructureParking={this.toggleInfrastructureParking} toggleInfrastructureBusStop={this.toggleInfrastructureBusStop} toggleInfrastructureSupermarket={this.toggleInfrastructureSupermarket} toggleInfrastructurePark={this.toggleInfrastructurePark} toggleInfrastructureHospital={this.toggleInfrastructureHospital} showState={this.showState} />
                    </div>
                    </>
                )
            case 5:
                return(
                    <div className="rental__form">
                        <FormStep step={step} />
                        <SixthAddRental prevStep={this.prevStep} handleMarker={this.handleMarker} nextStep={this.nextStep} />
                    </div>
                )
            case 6:
                return(
                    <div className="rental__form">
                        <FormStep step={step} />
                        <FifthAddRental nextStep={this.nextStep} prevStep={this.prevStep} photos={this.state.rental.photos} setPhotos={this.setPhotos} handleSubmit={this.handleSubmit} rental={this.state.rental} />
                    </div>
                )
            default:
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