import CurtainEffect from "../EfeitoCortina";
import CurtainEffect2 from "../EfeitoCortina2";
import CurtainEffect3 from "../EfeitoCortina3";

function About() {
  return (
    <div className="mt-6 bg-gray-800 max-w-screen-md w-1/2  m-20 rounded-xl shadow-2xl">
      <div className="bg-white/50 rounded-xl shadow-2xl">
        <h1 className="text-center font-bold text-white">SOBRE</h1>
      </div>
      <div className="fblock">
        <CurtainEffect />
        <CurtainEffect2 />
        <CurtainEffect3 />
      </div>
    </div>
  );
}

export default About;
