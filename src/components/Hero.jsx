import React from 'react';
import mobile from './../Assets/mobile.png'
import logo from './../Assets/logo.svg'
import Sessions from './../Assets/Sessions.png'




const Hero = () => {
    return (

        <div >
            <div className="flex justify-center m-10">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="flex flex-col items-center my-10  ">
                <div className="space-y-3 text-center">
                    <h1 className="font-medium text-4xl  "> The new normal  </h1>
                    <h1 className="font-medium text-4xl"> in all events </h1>
                </div>
                <div className="space-y-2 my-4 text-center">
                    <h5 className=" text-2xl "> LivOH provides an interactive virtual solution for events. It is</h5>
                    <h5 className=" text-2xl ">an all-in-one ticketed online events platform designed to</h5>
                    <h5 className=" text-2xl ">connect audiences.</h5>
                </div>
            </div>
            <div className="flex justify-center my-14">
                <img src={mobile} alt="mobile" />
            </div>
            <div className=" p-14 bg-stone-100 space-y-10 text-center ">
                <h2 className="font-medium text-3xl ">How LivOH works</h2>
                <div className="max-w-3xl mx-auto  font-light text-gray-600 px-11 space-y-3">
                    <h5 className="">LivOH is an event streaming service allowing fans to connect with their favourite artists and content creators virtually.</h5>
                    <h5>We are revolutionising live performances through a virtual concept. Fans can connect with their favourite artists and creatives through a concept which has not been done before.
                    </h5>
                </div>
                <div className="max-w-6xl mx-auto">
                    <img src={Sessions} alt="session" />
                </div>
                <h5>Use the navigation arrows to view all slidess</h5>
            </div>
        </div>
    )
}

export default Hero;