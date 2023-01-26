import React from "react";
import oxido from "../assets/Oxido-Nitroso.jpg";
import Endodontia from "../assets/Endodontia.jpg";
import Estetica from "../assets/Estetica.jpg";
import Implantes from "../assets/Implantes.jpg";
import Ortodontia from "../assets/Ortodontia.jpg";
import Proteses from "../assets/Proteses.jpg";
export default function Trata() {
  return (
    <div className="container mx-auto max-w-auto py-1.5 sm:px-4 sm:py-20 lg:px-10">
      <div className="animated fadeInDown m-5 font-sans text-4xl font-medium text-center text-cyan-500  shadow-blue-500/50">
        <h1>TRATAMENTOS</h1>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div className="animated fadeInDown bg-[#0081C9] shadow-lg shadow-blue-500/50 rounded-xl">
          <div className="bg-cover ">
            <img className="max-w-auto " src={oxido} />
          </div>
          <div className="m-2">
            <h2 className="m-2 text-2xl font-mono font-bold text-slate-200 text-center uppercase">
            Sedação com Óxido Nitroso
            </h2>
            <p className=" text-slate-100 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              nostrum ea beatae molestias tempora veniam odio nemo, suscipit
              possimus porro assumenda, similique consequuntur iste unde optio
              excepturi, eligendi et cumque!
            </p>
          </div>
        </div>

        <div className="animated fadeInDown bg-[#5BC0F8] shadow-lg shadow-cyan-500/50 rounded-xl">
          <div className=" bg-cover">
            <img className="max-w-auto" src={Estetica} />
          </div>
          <div className="m-2">
          <h2 className="m-2 text-2xl font-mono font-bold text-slate-200 text-center uppercase">
          Estética
            </h2>
            <p className="text-slate-100 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              nostrum ea beatae molestias tempora veniam odio nemo, suscipit
              possimus porro assumenda, similique consequuntur iste unde optio
              excepturi, eligendi et cumque!
            </p>
          </div>
        </div>
        <div className="animated fadeInDown bg-[#0081C9] shadow-lg shadow-blue-500/50 rounded-xl">
          <div className="bg-cover ">
            <img className="max-w-auto" src={Ortodontia} />
          </div>
          <div className="m-2">
          <h2 className="m-2 text-2xl font-mono font-bold text-slate-200 text-center uppercase">
          Ortodontia
            </h2>
            <p className="text-slate-100 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              nostrum ea beatae molestias tempora veniam odio nemo, suscipit
              possimus porro assumenda, similique consequuntur iste unde optio
              excepturi, eligendi et cumque!
            </p>
          </div>
        </div>
        <div className=" animated fadeInDown bg-[#0081C9] shadow-lg shadow-blue-500/50 rounded-xl">
          <div className="bg-cover ">
            <img className="max-w-auto" src={Endodontia} />
          </div>
          <div className="m-2">
          <h2 className="m-2 text-2xl font-mono font-bold text-slate-200 text-center uppercase">
          Endodontia 
            </h2>
            <p className="text-slate-100 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              nostrum ea beatae molestias tempora veniam odio nemo, suscipit
              possimus porro assumenda, similique consequuntur iste unde optio
              excepturi, eligendi et cumque!
            </p>
          </div>
        </div>
        <div className="animated fadeInDown bg-[#5BC0F8] shadow-lg shadow-cyan-500/50 rounded-xl">
          <div className="bg-cover ">
            <img className="max-w-auto" src={Implantes} />
          </div>
          <div className="m-2">
          <h2 className="m-2 text-2xl font-mono font-bold text-slate-200 text-center uppercase">
          Implantes
            </h2>
            <p className="text-slate-100 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              nostrum ea beatae molestias tempora veniam odio nemo, suscipit
              possimus porro assumenda, similique consequuntur iste unde optio
              excepturi, eligendi et cumque!
            </p>
          </div>
        </div>
        <div className=" animated fadeInDown bg-[#0081C9] shadow-lg shadow-blue-500/50 rounded-xl">
          <div className="bg-cover ">
            <img className="max-w-auto" src={Proteses} />
          </div>
          <div className="m-2">
          <h2 className="m-2 text-2xl font-mono font-bold text-slate-200 text-center uppercase">
          Proteses
            </h2>
            <p className="text-slate-100 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              nostrum ea beatae molestias tempora veniam odio nemo, suscipit
              possimus porro assumenda, similique consequuntur iste unde optio
              excepturi, eligendi et cumque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
