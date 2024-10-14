import "./App.css";
import React from "react";

import Header from "./components/header/Header";
import SocialCard from "./components/socialcard/SocialCard";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  const handleRippleEffect = (e) => {
    const ripple = document.createElement("span");
    const main = e.currentTarget;

    // Definindo o tamanho da onda
    const diameter = Math.max(main.clientWidth, main.clientHeight);
    const radius = diameter / 2;

    // Posicionando o efeito de onda
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - main.offsetLeft - radius}px`;
    ripple.style.top = `${e.clientY - main.offsetTop - radius}px`;
    ripple.classList.add("ripple");

    // Adiciona o ripple ao main
    main.appendChild(ripple);

    // Remove o ripple após a animação
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return (
    <main
      className="bg-slate-500 w-screen min-h-screen justify-center block"
      onClick={handleRippleEffect}
    >
      <Header />
      <div className="flex flex-col md:flex-grow justify-center items-center flex-grow space-y-4 md:space-y-0 md:space-x-4">
        <SocialCard />
        <About />
      </div>
      <div className="flex justify-center flex-grow mt-6">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

export default App;
