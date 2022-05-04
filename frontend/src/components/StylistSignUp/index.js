import React from "react";
import { useState } from "react";
import './StylistSignup.css'
import PageOne from "./Page-1";
import PageTwo from "./Page-2"
import PageThree from "./Page-3";
import PageFour from "./Page-4";
export default function StylistSignUp() {
    const [page, changePage] = useState(1)
    const [pageOneState, setPageOneState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [pageTwoState, setPageTwoState] = useState({
        profilePhoto: '',
        bio: ''
    })
    const [pageThreeState, setPageThreeState] = useState([])
    const [pageFourState, setPageFourState] = useState({
        city: '',
        state: '',
        address: '',
        venue: false,
    })
    const handleSubmit = () => {
        let info = {...pageOneState, ...pageTwoState, photos : pageThreeState, ...pageFourState}
        console.log(info)
    }
    return (
        <>
            {page === 1 &&
                <PageOne
                    pageOneState={pageOneState}
                    setPageOneState={setPageOneState}
                    changePage={changePage} />
            }
            {page === 2 &&
                <PageTwo changePage={changePage}
                    pageTwoState={pageTwoState}
                    setPageTwoState={setPageTwoState}
                />
            }
            {page === 3 &&
                <PageThree
                    changePage={changePage}
                    pageThreeState={pageThreeState}
                    setPageThreeState={setPageThreeState}
                />
            }
            {page === 4 &&
                <PageFour
                    changePage={changePage}
                    pageFourState={pageFourState}
                    setPageFourState={setPageFourState}
                    handleSubmit={handleSubmit}
                />
            }
        </>
    )
}