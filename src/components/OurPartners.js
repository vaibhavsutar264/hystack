import React from 'react'
import OurPartner from './OurPartner'

// import "../styles/Offers.css"  


const OurPartners = ({ourPartner}) => {
    return (
        <>
        <h1 className="heading">OUR PARTNERS </h1>
        <div className="ourPartner"> 
        
        {ourPartner.map((item,index)=>(
        <OurPartner key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
    </>
    )
}

export default OurPartners
