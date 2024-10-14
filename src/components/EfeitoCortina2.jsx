import { useState } from "react";

const CurtainEffect2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCurtain = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleCurtain}
        className="inline-block rounded bg-white/50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-white/70 hover:shadow-primary-2 focus:bg-white/70 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-white/80 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong
"
      >
        {isOpen ? "Fechar Experiência" : "Abrir Experiência"}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden mt-4 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ background: "#f0f0f0" }}
      >
        <p className="p-4">
          Trabalho com tecnologia desde 2011, porém na área de telecomunicações
          e redes. De 2011 a 2021 atuei na operação de telecom, em 2021 passei à
          função de Gestor de Área. De 2022 em diante venho atuando como
          Analista de Redes. Iniciando neste ano minha transição de carreira
          para o desenvolvimento.
        </p>
      </div>
    </div>
  );
};

export default CurtainEffect2;
