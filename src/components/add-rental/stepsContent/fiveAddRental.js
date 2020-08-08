import React, {useState} from 'react';


export function FifthAddRental({nextStep, prevStep}){
    return(
        <div>
            <h1>Загрузите фото</h1>
            <input type="file" placeholder='Загрузить'/>
            <div className="rental__form__btns">
                    <button onClick={prevStep}>Назад</button>
                        <button onClick={nextStep}>Далее</button>
                </div>
        </div>
    )
}