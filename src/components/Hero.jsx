import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/hero-img.svg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-0 md:p-6">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-xl p-10 flex flex-col-reverse md:flex-row items-center md:gap-10 h-screen md:h-auto">
        {/* LEFT */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Automatizált <br /> parkolás
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Intelligens parkolási rendszerek rendszámfelismeréssel,
            beléptetéssel és fizetéssel – egy rendszerben.
          </p>

          <button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition">
            Ajánlatkérés
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center">
          <img src={heroImg} alt="parking system" className="md:w-6xl w-7xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
