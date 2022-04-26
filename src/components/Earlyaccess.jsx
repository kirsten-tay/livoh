import React from 'react'
import early from './../Assets/early.png'


const Earlyaccess =()=>{
    return(
        <div className="py-20 ">
            <div className="flex flex-col-1">
                <div className="flex flex-col max-w-2xl mx-auto justify-center  w-3/5 space-y-5 py-10 px-28">
                    <h2 className="font-medium text-4xl">Get LivOH</h2>
                   <h2 className="font-medium text-4xl">Early Access</h2>
                   <div>
                   <h5>LivOH is now available to a limited amount of 
                       users so we can test it, improve and release an 
                       unstoppable service. If you want to be one of the 
                       first LivOH users then go register for early access
                        to help us create LivOH.</h5>
                        </div>

                    <div >
                    <button className="flex px-11 py-3  items-center border-o outline-none hover:bg-pink-700 font-medium p-2 bg-pink-500 text-white rounded-md my-3">
                        Request Access

                    </button>
                </div>
                </div>
                <div className="flex flex-col-2 h-auto"> 
                    <img src={early} alt="" /></div>
            </div>
            
        </div>
    )
}

export default Earlyaccess;