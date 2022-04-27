import React from "react";
import { useState } from "react";
import './StylistSignup.css'
import PageOne from "./Page-1";
import PageTwo from "./Page-2"
export default function StylistSignUp() {
    const [page, changePage] = useState(1)
    const [pageOneState, setPageOneState] = useState({
        firstName : '',
        lastName : '', 
        email : '',
        password : '',
        confirmPassword : ''
    })
    console.log(pageOneState)
    return (
        <>
        {page === 1 && 
        <PageOne 
        pageOneState={pageOneState} 
        setPageOneState={setPageOneState}
        changePage={changePage} />
        }
        {page === 2 &&
        <PageTwo changePage={changePage}  />
        }
        </>
    )
}