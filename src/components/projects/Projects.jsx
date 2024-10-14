import imagecks from "../../img/adcks.png";
import imagecafe from "../../img/cafeteria.png";

function Projects() {
  return (
    <div className="mt-6 bg-gray-800 max-w-screen-2xl rounded-xl shadow-2xl p-2">
      <div className="bg-white/50 rounded-xl shadow-2xl">
        <h1 className="text-center font-bold text-white">Projetos Recentes</h1>
      </div>
      <div class="grid-cols-1 sm:grid md:grid-cols-3 max-w-screen-lg">
        <div class="mx-3 mt-4 flex flex-col rounded-lg bg-white/50 backdrop-blur-lg border border-white/30 shadow-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a target="_blank" href="https://site-ad-carajas.vercel.app/">
            <img
              class="rounded-t-lg"
              src={imagecks}
              alt="imagem do site de uma igreja"
            />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight">
              Site da Igreja AD Carajás
            </h5>
            <p class="mb-4 text-base">
              Neste projeto, busquei uma navegação fluuida e simples para o
              usuário. Com um carrossel de imagens que levam às suas respectivas
              seções. Cultos, Agnda Semanal, Eventos, Missões e História da
              Igreja.
            </p>
          </div>
          <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
            <small>Última atualização em 02/10/2024</small>
          </div>
        </div>

        <div class="mx-3 mt-4 flex flex-col rounded-lg bg-white/50 backdrop-blur-lg border border-white/30 shadow-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a target="_blank" href="https://site-cafeteria-roan.vercel.app/">
            <img
              class="rounded-t-lg"
              src={imagecafe}
              alt="Imagem de um site de uma cafeteria"
            />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight">
              Site Cafeteria
            </h5>
            <p class="mb-4 text-base">
              Neste Site busquei uma paleta de cores que remetem aos tons de
              café. Dividi em seções Sobre, Eventos, Cardápio, Fale conoisco,
              que podem ser direcionadas pelo menu de navegação. utilizei
              Bootstrap, CSS e JS.
            </p>
          </div>
          <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
            <small>Última atualização em 02/10/2024</small>
          </div>
        </div>

        <div class="mx-3 mt-4 flex flex-col rounded-lg bg-white/50 backdrop-blur-lg border border-white/30 shadow-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a target="_blank" href="#!">
            <img
              class="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
              alt="Palm Springs Road"
            />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight">
              Projeto Futuro
            </h5>
            <p class="mb-4 text-base">
              Espaço destinado para futuros projetos.
            </p>
          </div>
          <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
            <small>LÚltima atualização em 02/10/2024</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
