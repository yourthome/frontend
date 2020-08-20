import React, {useState} from 'react';


export function FifthAddRental({nextStep, prevStep, photos, setPhotos, handleSubmit}){
        const [file, setFile] = useState('');
        const uploadImg = e =>{
            setFile(e.target.files[0]);
            console.log(file)
            setPhotos(file);
        }
        const [image, setImage] = useState('');
        const [image1, setImage1] = useState('');
        const [image2, setImage2] = useState('');
        const [image3, setImage3] = useState('');
        const [image4, setImage4] = useState('');
        const [image5, setImage5] = useState('');
        const [image6, setImage6] = useState('');
        const [image7, setImage7] = useState('');
        const setRentalImage = e =>{
            if(image == ''){
            const reader = new FileReader();
            console.log(1)
            reader.onload = () => {
                if(reader.readyState === 2){
                    setImage({image: reader.result})
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }

            else if(image1 == ''){
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage1({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image2 == ''){
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage2({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image3 == ''){
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage3({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image4 == ''){
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage4({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image5 == ''){
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage5({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image6 == ''){
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage6({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image7 == ''){
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage7({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }
        }

    return(
        <div className="rental__form__content">

            <div className="upload__images">
                    </div>
                    <div className="add_rental_imgBlock">
                    <img src={image.image}></img>
                    <img src={image1.image}></img>
                    <img src={image2.image}></img>
                    <img src={image3.image}></img>
                    <img src={image4.image}></img>
                    <img src={image5.image}></img>
                    <img src={image6.image}></img>
                    <img src={image7.image}></img>
                    </div>
                    <div className="img_inp_label">
                        <input type="file" id='file' onChange={setRentalImage}/>
                        <label for='file'>
                            Выберите фото
                        </label>
                    </div>
            <div className="rental__form__btns">
                    <button onClick={prevStep}>Назад</button>
                        <button onClick={handleSubmit}>Готово</button>
                </div>
        </div>
    )
}