import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="projects min-h-screen w-screen">
      <h2 className="font-title text-center">Mes projets</h2>
      <div className=" flex flex-wrap justify-center">
        <article className="flex flex-col items-center gap-4">
          <a href="https://pokemon-green-gamma.vercel.app" target="_blank">
            <div className="card-project pokemon ">
              <div className="flex justify-center container-title-project">
                <h3 className="title-project">Pokemon Store</h3>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/luciemtro/pokemon"
            className="cursor-pointer hover:scale-125 transform transition-transform duration-500 ease-in-out hover:text-white flex items-center justify-center gap-2"
            target="_blank"
          >
            <FaGithub size={30} />
            <span className="metallic-text ">Github</span>
          </a>
        </article>
        <div className="card-project drinksaver">
          <div className="flex justify-center items-center container-title-project">
            <h3 className="title-project">Drink Saver</h3>
          </div>
        </div>
        <div className="card-project lunova">
          <div className="flex justify-center items-center container-title-project">
            <h3 className="title-project">Lunova</h3>
          </div>
        </div>
        <div className="card-project nextflix">
          <div className="flex justify-center items-center container-title-project">
            <h3 className="title-project">NextFlix</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
