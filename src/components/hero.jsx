import React from "react";
import  BackgroundGradientAnimation  from "./herobg";

export default function Hero() {
    return (
    <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center -mt-20 justify-center text-white font-bold px-4 pointer-events-none text-center md:text-[140px] ">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Otaku Guide
        </p>
        </div>
    </BackgroundGradientAnimation>
    );
}
