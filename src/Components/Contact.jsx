import React, { createContext, useContext, useState } from "react";
import ContactDetails from'./ContactDetails'
export const contactContext = createContext(null)
function ContactPage(){
    const [contactData,setData]=useState({
        name: 'pi innovations',
        email:'piinnovations@gmail.com',
        location:'Biratnagar,Nepal'
    })
    return(
       <contactContext.Provider value={{contactData}}>
        <h1 className="font-bold ">This is Contact page </h1>
        
<ContactDetails/>
        </contactContext.Provider>
    )
}
export default ContactPage