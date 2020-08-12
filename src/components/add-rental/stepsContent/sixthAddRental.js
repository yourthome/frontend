import React, {useState} from 'react';


export function SixthAddRental({nextStep, prevStep, handleSubmit}){
    return(
        <div className="rental__form__content">
            <h3>Укажите адресс</h3>
            <div className="rental__form__btns">
                    <button onClick={prevStep}>Назад</button>
                        <button onClick={handleSubmit}>Готово</button>
                </div>
        </div>
    )
}