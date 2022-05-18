import {React, useState} from "react";
import { csrfFetch } from "../../../store/csrf.js";
import {useNavigate} from 'react-router-dom'
import homeicon from '../../../images/home-icon.png'
import './PageThree.css'
export default function PageThree ({changePage, pageThreeState, setPageThreeState}){
    const navigate = useNavigate()
    const [upload, setUpload] = useState(false)
    const handleUpload = async (e) => {
        const formData = new FormData();
        formData.append('profilePhoto', e.target.files[0])
        let response = await csrfFetch('/api/image-upload', {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        });
        response = await response.json()
        setUpload(true)
        await setPageThreeState((prev) => [...prev, response.profilePhoto])
        setUpload((prev) => !prev)
    }
    return(
        <div className='stylist-sign-up-container'>
            <div className="ssup-image">
                <img onClick={() => navigate('/')} src={homeicon} alt='home icon' />
            </div>
            <h1 className="ssup-h1">Upload more photos if you'd like</h1>
            <div className="ssup-p2-button-container">
                <div className="ssup-page-3-photo-container">
                   {pageThreeState[0] ? <img className="ssup-p3-image" src={pageThreeState[0]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[1] ? <img className="ssup-p3-image" src={pageThreeState[1]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[2] ? <img className="ssup-p3-image" src={pageThreeState[2]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[3] ? <img className="ssup-p3-image" src={pageThreeState[3]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[4] ? <img className="ssup-p3-image" src={pageThreeState[4]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[5] ? <img className="ssup-p3-image" src={pageThreeState[5]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[6] ? <img className="ssup-p3-image" src={pageThreeState[6]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[7] ? <img className="ssup-p3-image" src={pageThreeState[7]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[8] ? <img className="ssup-p3-image" src={pageThreeState[8]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[9] ? <img className="ssup-p3-image" src={pageThreeState[9]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[10] ? <img className="ssup-p3-image" src={pageThreeState[10]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                   {pageThreeState[11] ? <img className="ssup-p3-image" src={pageThreeState[11]} alt="multiPhoto" /> : <input 
                   onChange={handleUpload}
                   className="ssup-p3-image" type="file" /> }
                </div>
                <button className="ssup-next"
                    onClick={() => changePage((prev) => prev - 1)}
                >Go Back</button>
                <button className="ssup-next"
                    onClick={() => changePage((prev) => prev + 1)}
                >next</button>
            </div>
        </div>
    )
}