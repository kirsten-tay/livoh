import React from 'react'
import early from './../Assets/early.png'
import { GlobeIcon, LibraryIcon, MapIcon } from '@heroicons/react/outline'


const Earlyaccess =()=>{
    return(
        <div>
        <div className=" flex flex-1 py-20 ">
            <div className="flex flex-cols-1">
                <div className="flex flex-col max-w-2xl mx-auto justify-center   space-y-5 py-10 px-28">
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
          
            </div> 
                 <div className="flex flex-col " > 
                    <img src={early}className="relative h-full"  alt="" /></div>
            </div>

             <div className="flex flex-1 bg-slate-900">
                 <div className="flex flex-row justify-center">
                  <GlobeIcon className="h-10 w-10"/>
                  <LibraryIcon className="h-10 w-10"/>
                  <MapIcon className="h-10 w-10"/>
                 </div>
                <hr/>
            </div>
        </div>
    )
}

export default Earlyaccess;