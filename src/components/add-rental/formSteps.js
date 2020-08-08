import React, {Component} from 'react';


export default class FormStep extends Component{
    render(){
        const {step} = this.props;
        const steps = [1, 2, 3, 4, 5, 6]
        return(
            <>
                <div className="steps">
                    <span className="numberOfSteps">Шаг {step} из <span>6</span></span>
                    <div className="steps__markers">
                    {
                        steps.map((elem, index) => (
                            <div className={`step ${step === index + 1 ? 'is-active' : ''} ${step > index + 1 ? 'is-completed' : ''}`}>
                                <span>{index + 1}</span>
                                <div className="step__line"></div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </>
        )
    }
}

