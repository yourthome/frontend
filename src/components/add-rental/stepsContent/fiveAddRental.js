import React, {useState} from 'react';


export function FifthAddRental({nextStep, prevStep, photos, setPhotos}){
        const [file, setFile] = useState('');

        const uploadImg = e =>{
            setFile(e.target.files[0]);
            setPhotos(file);
            console.log(file);
        }

    return(
        <div className="rental__form__content">
            <h3>Загрузите фото</h3>
            <div className="upload__images">

                    </div>
                    <div className="img_inp_label">
                        <input type="file" id='file' onChange={uploadImg}/>
                        <label for='file'>
                            Выберите фото
                        </label>
                    </div>
            <div className="rental__form__btns">
                    <button onClick={prevStep}>Назад</button>
                        <button onClick={nextStep}>Далее</button>
                </div>
        </div>
    )
}