import React, {useState} from 'react';


export function FifthAddRental({nextStep, prevStep, photos, setPhotos, handleSubmit}){
        const [file, setFile] = useState([]);
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
            setFile(file.concat(e.target.files[0]));
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setImage({image: reader.result})
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }

            else if(image1 == ''){
                setFile(file.concat(e.target.files[0]));
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage1({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image2 == ''){
                setFile(file.concat(e.target.files[0]));
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage2({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image3 == ''){
                setFile(file.concat(e.target.files[0]));
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage3({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image4 == ''){
                setFile(file.concat(e.target.files[0]));
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage4({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image5 == ''){
                setFile(file.concat(e.target.files[0]));
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage5({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image6 == ''){
                setFile(file.concat(e.target.files[0]));
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage6({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }

            else if(image7 == ''){
                setFile(file.concat(e.target.files[0]));
                const reader = new FileReader();
                reader.onload = () => {
                if(reader.readyState === 2){
                    setImage7({image: reader.result})
                }
                }
                reader.readAsDataURL(e.target.files[0])
            }
        }

        const handleSubmitExp = e =>{
            let imgArr = [image, image1, image2, image3, image4, image5, image6, image7];
            let imgArr1 = imgArr.filter(elem => {
                if(elem == ''){
                    return false
                }
                else{
                    return true
                }
            })
            console.log(file);
            handleSubmit(file);
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
                        <input type="file" id='file' onChange={setRentalImage} accept="image/*"/>
                        <label for='file'>
                            Выберите фото
                        </label>
                    </div>
            <div className="rental__form__btns">
                    <button onClick={prevStep}>Назад</button>
                        <button onClick={handleSubmitExp}>Готово</button>
                </div>
        </div>
    )
}