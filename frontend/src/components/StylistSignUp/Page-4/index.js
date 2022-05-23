import React from "react";
import { useNavigate } from 'react-router-dom'
import homeicon from '../../../images/home-icon.png'
import './PageFour.css'

export default function PageFour({
    changePage,
    pageFourState,
    setPageFourState,
    handleSubmit
}) {
    const navigate = useNavigate()
    return (
        <div className="stylist-sign-up-container">
            <div className="ssup-image">
                <img onClick={() => navigate('/')} src={homeicon} alt='home icon' />
            </div>
            <h1 className="ssup-h1">Location information</h1>
            <form className="ssup-form">
                <div className="ssup-item">
                    <label className="ssup-label" htmlFor="fist-name">City</label>
                    <input
                        onChange={(e) => {
                            pageFourState.city = e.target.value
                            setPageFourState(pageFourState)
                        }
                        }
                        className="ssup-input" type='text' />
                </div>
                <div className="ssup-item">
                    <label className="ssup-label" htmlFor="fist-name">State Abbreviation</label>
                    <select
                        onChange={(e) => {
                            pageFourState.state = e.target.value
                            setPageFourState(pageFourState)
                        }
                        }
                        className="ssup-input"
                    >
                        <option>Select Your State</option>
                        <option>TX</option>
                        <option>CA</option>
                    </select>
                </div>
                <div className="ssup-item">
                    <label className="ssup-label" htmlFor="fist-name">Physical address</label>
                    <input
                        onChange={(e) => {
                            pageFourState.address = e.target.value
                            setPageFourState(pageFourState)
                        }
                        }
                        className="ssup-input" type='text' />
                </div>
                <div className="ssup-item">
                    <label className="ssup-label" htmlFor="fist-name">Do you have a venue?</label>
                    <input className="ssup-input" type='checkbox'  onChange={(e) => {
                            pageFourState.venue = !pageFourState.venue
                            setPageFourState(pageFourState)
                        }
                        }/>
                </div>
            </form>
            <div className="ssup-p2-button-container">
                <button className="ssup-next"
                    onClick={() => changePage((prev) => prev - 1)}
                >Go Back</button>
                <button className="ssup-next"
                    onClick={handleSubmit}
                >Submit</button>
            </div>
        </div>
    )
}