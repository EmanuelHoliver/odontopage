import React from "react";
import styles from "./styles.css";
export default function Header() {
  return (
    <section id="home">
      <div className="bg-hero bg-cover bg-no-repeat ">
        <div className="relative left-[30rem] top-10px mx-auto max-w-md bg-">
          <div className=" mx-auto max-w-md text-center  lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="font-poppins text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Felicidade começa com um sorriso
              <br />
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="font-poppins mt-6 text-lg leading-8 text-[#0f172a]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              necessitatibus ipsam porro quibusdam molestias quas maiores, nemo
              assumenda recusandae nisi, neque vel delectus atque suscipit
              accusamus qui saepe deleniti repudiandae.
            </p>
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
    </section>
  );
}
