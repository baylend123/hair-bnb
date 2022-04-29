import React from "react";
import { useState } from "react";
import './StylistSignup.css'
import PageOne from "./Page-1";
import PageTwo from "./Page-2"
import PageThree from "./Page-3";
export default function StylistSignUp() {
    const [page, changePage] = useState(1)
    const [pageOneState, setPageOneState] = useState({
        firstName : '',
        lastName : '', 
        email : '',
        password : '',
        confirmPassword : ''
    })
    const [pageTwoState, setPageTwoState] = useState({
        profilePhoto : '', 
        bio : ''
    })
    const [pageThreeState, setPageThreeState] = useState([])
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
        </>
    )
}