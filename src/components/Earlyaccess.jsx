import React from 'react'
import early from './../Assets/early.png'


const Earlyaccess =()=>{
    return(
        <div>
            <div className="flex flex-col-2">
                <div>
                    <h2>Get LivOH</h2>
                   <h2>Early Access</h2>
                   <h5>LivOH is now available to a limited amount of 
                       users so we can test it, improve and release an 
                       unstoppable service. If you want to be one of the 
                       first LivOH users then go register for early access
                        to help us create LivOH.</h5>
                </div>
                <div> 
                    <img src={early} alt="" /></div>
            </div>
            
        </div>
    )
}

export default Earlyaccess;