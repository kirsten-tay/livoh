import React from 'react'
import { CogIcon } from '@heroicons/react/outline'
import concert from './../Assets/shot-a-dope-concert.png'


const Keyfeatures = () => {
    return (
        <div>
            <div className="bg-black text-white space-y-8 p-16">
                <h2 className="font-medium text-center  text-3xl  "> Key features</h2>
                <div className="max-w-2xl mx-auto text-white text-center ">
                    <h5>
                        Our app will be up and running soon, in the meantime please register your interest here to be one of the first exclusive users to test the LivOH app.
                    </h5>
                </div>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-0.5 ">
                    <div className="bg-slate-800 p-10 py-14 space-y-4 font-medium ">
                        <CogIcon className="h-10 text-pink-500   w-10" />
                        <h4 >Quick and Free Setup</h4>
                    </div>

                    <div className="bg-slate-800 p-10 py-14 space-y-4 font-medium ">
                        <CogIcon className="h-10 text-pink-500   w-10" />
                        <h4 >Monetise your events</h4>
                    </div>

                    <div className="bg-slate-800 p-10 py-14 space-y-4 font-medium ">
                        <CogIcon className="h-10 text-pink-500   w-10" />
                        <h4 >Fan Engagement</h4>
                    </div>

                    <div className="bg-slate-800 p-10 py-14 space-y-4 font-medium ">
                        <CogIcon className="h-10 text-pink-500   w-10" />
                        <h4 >Host full-scale events</h4>
                    </div>

                    <div className="bg-slate-800 p-10 py-14 space-y-4 font-medium ">
                        <CogIcon className="h-10 text-pink-500   w-10" />
                        <h4 >Environmentally friendly</h4>
                    </div>

                    <div className="bg-slate-800 p-10 py-14 space-y-4 font-medium ">
                        <CogIcon className="h-10 text-pink-500   w-10" />
                        <h4 >Payment dashboard and analytics</h4>
                    </div>

                </div>

            </div>
            <div className="bg-slate-800 text-white space-y-8 p-16">
                <div className="font-medium text-3xl text-center">
                    <h2>Join the LivOH waiting list!</h2>
                    <h2>Stay up to date with us.</h2>
                </div >
                <div className="max-w-4xl text-center mx-auto px-11 ">
                    Our app will be up and running soon, in the meantime please register your
                    interest here to be one of the first exclusive users to test the LivOH app.
                </div>
                <div className="flex justify-center items-center mx-auto">
                    <button className="flex px-11 py-3  items-center border-o outline-none hover:bg-pink-700 font-medium p-2 bg-pink-500 text-white rounded-md my-3">
                        Join Us Now

                    </button>
                </div>
            </div>
            <div className="w-full relative ">
                <img src={concert} alt="" />
                <div className="absolute lg:mx-20 inset-0 h-full w-full flex flex-col justify-center text-left text-white ">
                    <div className="w-3/5 space-y-5 px-11 font-light">
                        <h2 className="font-bold text-3xl">About us</h2>
                        <h5>LivOH is a live streaming platform that allows fans to watch artists perform live virtually.</h5>
                        <h5 className="">The app also allows professionals to deliver webinars and seminars to a global audience and their specific target market.</h5>
                        <h5>We also enable audiences to interact directly with each other during performances.</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Keyfeatures;
