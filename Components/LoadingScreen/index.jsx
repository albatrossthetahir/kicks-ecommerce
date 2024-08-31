import { useEffect, useState } from "react";

const helloList = [
    {
        helloEl : 'Hello'
    },
    {
        helloEl : 'Bonjour'
    },
    {
        helloEl : 'स्वागत हे'
    },
    {
        helloEl : 'Ciao'
    },
    {
        helloEl : 'Olá'
    },
    {
        helloEl : 'おい'
    },
    {
        helloEl : 'Hallå'
    },
    {
        helloEl : 'Hola'
    },
    {
        helloEl : 'Guten tag'
    },
    {
        helloEl : 'Hallo'
    },
    {
        helloEl : 'Home'
    },
    {
        helloEl : 'Work'
    },
    {
        helloEl : 'TWICE'
    },
    {
        helloEl : 'The Damai'
    },
    {
        helloEl : 'FABRIC™'
    },
    {
        helloEl : 'Aanstekelijk'
    },
    {
        helloEl : 'Base Create'
    },
    {
        helloEl : 'AVVR'
    },
    {
        helloEl : 'GraphicHunters'
    },
    {
        helloEl : 'Future Goals'
    },
    {
        helloEl : 'Atypikal'
    },
    {
        helloEl : 'One:Nil'
    },
    {
        helloEl : 'Andy Hardy'
    },
    {
        helloEl : 'About'
    },
    {
        helloEl : 'Contact'
    },
    {
        helloEl : 'Success'
    },
    {
        helloEl : 'Archive'
    },
    {
        helloEl : 'Error'
    },
    {
        helloEl : 'Styleguide'
    },
]

export default function LoadingScreen(){

    // function ActiveClassComponent() {
    //     const [isActive, setIsActive] = useState(false);
    //     const [currentIndex, setCurrentIndex] = useState(0);
      
    //     const elements = ['Element 1', 'Element 2', 'Element 3'];
      
    //     useEffect(() => {
    //       const toggleActive = () => {
    //         setIsActive(!isActive);
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
    //       };
      
    //       const intervalId = setInterval(toggleActive, 5000);
      
    //       return () => clearInterval(intervalId);
    // }, [elements.length]);

    return<>
        <div className="fixed top-0 left-0 w-screen h-screen bg-black grid place-items-center">
            {
                helloList.map((res, i) => {
                    return <h2 key={i} className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-white font-semibold relative flex items-center gap-5 before:w-3 before:h-3 before:rounded-full before:bg-white before:block">{res.helloEl}</h2>
                })
            }
        </div>
    </>
}