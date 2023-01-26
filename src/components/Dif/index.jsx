import React from "react";

import equi from "../assets/equi.jpg";
import sup from "../assets/sup.jpg";
import sorriso from "../assets/sorriso.jpg";
import { Carousel } from "react-carousel3";

const style = {
  width: 400,
  height: 400,
};

export default function Dife() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Carousel
        height={500}
        width={800}
        yOrigin={42}
        yRadius={48}
        autoPlay={true}
      >
        <div className="headline" key={1} style={style}>
          <div className="bg-[#0081C9] shadow-lg shadow-blue-500/50 rounded-xl">
            <div className="bg-cover ">
              <img className="max-w-auto" src={equi} />
            </div>
            <div className="m-2">
              <h2 className="m-2 text-2xl font-mono font-bold text-slate-200 text-center uppercase">
                Atendimento
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
        <div key={2} style={style}>
          <div className="bg-[#0081C9] shadow-lg shadow-blue-500/50 rounded-xl">
            <div className="bg-cover ">
              <img className="max-w-auto" src={sup} />
            </div>
            <div className="m-2">
              <h2 className="m-2 text-2xl font-mono font-bold text-slate-200 text-center uppercase">
                Atendimento
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
        <div key={3} style={style}>
          <div className="bg-[#0081C9] shadow-lg shadow-blue-500/50 rounded-xl">
            <div className="bg-cover ">
              <img className="max-w-auto" src={sorriso} />
            </div>
            <div className="m-2">
              <h2 className="m-2 text-2xl font-mono font-bold text-slate-200 text-center uppercase">
                Custos
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
      </Carousel>
    </div>
  );
}
