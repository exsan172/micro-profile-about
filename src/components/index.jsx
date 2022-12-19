import React from "react"
import Assets from "../assets"
import "../index.scss"

const About = () => {
    return (
        <div className="flex flex-col my-10 justify-center items-center w-full" id="profile">
            <div className="flex justify-center">
                <img src={Assets.Profile} alt="profile" className="w-10/12 md:w-3/12 rounded-full border-4 border-green-400"/>
            </div>
            <div className="flex shadow py-7 px-5 mt-10 border rounded-md flex-col justify-center items-center">
                <div className="flex">
                    <h1 className="text-2xl md:text-4xl">Exsan Renaldhi</h1>
                </div>
                <div className="flex mt-7 text-xs md:text-sm">
                    <p>Hi, saya adalah software engineer saya lulusan SMK jurusan Rekayasa Perangkat Lunak atau RPL. saya bisa membuat aplikasi android, website bagian frontend maupun backend, anda bisa menghubungi saya di bagian kontak pada halaman website ini.</p>
                </div>
            </div>
        </div>
    )
}

export default About