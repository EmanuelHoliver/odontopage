import React from "react";

export default function Navbar() {
  return (
    <>
    
      <nav class="absolute  inset-x-0 p-2 top-0 flex justify-center space-x-4 bg-white">
        <a
          href="/dashboard"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-[#0081C9] hover:text-slate-900"
        >
          Home
        </a>
        <a
          href="/team"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Tratamentos
        </a>
        <a
          href="/projects"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Quem somos
        </a>
        <a
          href="/reports"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Contato
        </a>
      </nav>
    </>
  );
}
