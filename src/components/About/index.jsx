import React from "react";
import "./styles.css";
import perfil from "../assets/perfil.jpg";
export default function About() {
  return (
    <div className="">
      <div className="m-5 font-sans text-4xl font-medium text-center text-cyan-500  shadow-blue-500/50">
        <h1 className="text-cemtered">Quem somos</h1>
      </div>
      <div className="flex items-center justify-center  h-96 mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="flex justify-center">
          <div className="m-2 flex-none ">
            <img
              className="w-80 h-80 rounded-full mx-auto drop-shadow-2xl border-4 border-indigo-200 border-l-[#0081C9]"
              src={perfil}
              alt="img"
            />
          </div>
          <div className="basis-1/4 rounded-lg bg-gradient-to-b from-cyan-800">
            <p className="m-2 text-slate-100 text-center italic font-mono ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus qui alias libero cumque veniam, numquam nostrum sequi
              ducimus molestias totam iusto aut ipsa soluta dolores voluptates
              porro facilis velit excepturi.
            </p>
            <div className="flex justify-center">
              <div className="animated pulse mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-[#0081C9] px-3.5 py-1.5 text-base font-semibold leading-7 text-[#f8fafc] shadow-sm hover:bg-[#5BC0F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Agende uma consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
