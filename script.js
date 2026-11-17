const groups = [
  {
    id: "grupo-1",
    number: "01",
    title: "Grupo 1",
    subtitle: "Transiciones espaciales y perceptuales en sectores portuarios",
    path: "grupo-1/index.html",
    wikiUrl: "https://wiki.ead.pucv.cl/Proyecto_de_Visualizaci%C3%B3n_-_Grupo_1",
    students: [
      { name: "Amanda Garviso", wiki: "https://wiki.ead.pucv.cl/Amanda_Garviso" },
      { name: "Agustina Silva", wiki: "https://wiki.ead.pucv.cl/Agustina_Silva" },
      { name: "Catalina González", wiki: "https://wiki.ead.pucv.cl/Catalina_Esperanza_Gonz%C3%A1lez_Godoy" },
      { name: "Florencia Pimentel", wiki: "https://wiki.ead.pucv.cl/Florencia_Pimentel" },
      { name: "Gloria García", wiki: "https://wiki.ead.pucv.cl/Gloria_Garc%C3%ADa" },
      { name: "Antonela Barría", wiki: "https://wiki.ead.pucv.cl/Antonela_Barr%C3%ADa" },
      { name: "Fabián Flores", wiki: "https://wiki.ead.pucv.cl/Fabi%C3%A1n_Flores" }
    ]
  },
  {
    id: "grupo-2",
    number: "02",
    title: "Grupo 2",
    subtitle: "Visualizando la experiencia sonora de la ciudad puerto",
    path: "grupo-2/index.html",
    wikiUrl: "https://wiki.ead.pucv.cl/Proyecto_de_Visualizaci%C3%B3n_-_Grupo_2",
    students: [
      { name: "Matías Córdova Arce", wiki: "https://wiki.ead.pucv.cl/Matias_Cordova_Arce" },
      { name: "Catalina Cabezas", wiki: "https://wiki.ead.pucv.cl/Catalina_Cabezas" },
      { name: "Mateo Mackay", wiki: "https://wiki.ead.pucv.cl/Mateo_Mackay" },
      { name: "Sofía Rojas", wiki: "https://wiki.ead.pucv.cl/Sof%C3%ADa_Rojas" },
      { name: "Sofía Vera", wiki: "https://wiki.ead.pucv.cl/Sof%C3%ADa_Vera" },
      { name: "Piera Ivelic Porzio", wiki: "https://wiki.ead.pucv.cl/Piera_Ivelic_Porzio" },
      { name: "Francisco Daniou", wiki: "https://wiki.ead.pucv.cl/Francisco_Daniou" }
    ]
  },
  {
    id: "grupo-3",
    number: "03",
    title: "Grupo 3",
    subtitle: "Tramas del tránsito y percepción en el espacio urbano",
    path: "grupo-3/index.html",
    wikiUrl: "https://wiki.ead.pucv.cl/Proyecto_de_Visualizaci%C3%B3n_-_Grupo_3",
    students: [
      { name: "Franchesca Salgado", wiki: "https://wiki.ead.pucv.cl/Franchesca_Salgado" },
      { name: "Misael Vergara", wiki: "https://wiki.ead.pucv.cl/Misael_Vergara" },
      { name: "Damián Maturana", wiki: "https://wiki.ead.pucv.cl/Damian_Maturana" },
      { name: "Fernanda Moya", wiki: "https://wiki.ead.pucv.cl/Fernanda_Moya" },
      { name: "Pascal Gratacós", wiki: "https://wiki.ead.pucv.cl/Pascal_Gratac%C3%B3s" },
      { name: "Antonella Conley", wiki: "https://wiki.ead.pucv.cl/Antonella_Conley" },
      { name: "Constanza Cruz", wiki: "https://wiki.ead.pucv.cl/Constanza_Cruz" }
    ]
  },
  {
    id: "grupo-4",
    number: "04",
    title: "Grupo 4",
    subtitle: "Visualizando los flujos: movimiento y comportamiento peatonal",
    path: "grupo-4/index.html",
    wikiUrl: "https://wiki.ead.pucv.cl/Proyecto_de_Visualizaci%C3%B3n_-_Grupo_4",
    students: [
      { name: "Paz Vega Soto", wiki: "https://wiki.ead.pucv.cl/Paz_Vega_Soto" },
      { name: "Denisse Navarro", wiki: "https://wiki.ead.pucv.cl/Denisse_Navarro" },
      { name: "Pedro Beltrán", wiki: "https://wiki.ead.pucv.cl/Pedro_Beltr%C3%A1n" },
      { name: "Gerardo Acevedo", wiki: "https://wiki.ead.pucv.cl/Gerardo_Acevedo" },
      { name: "Paula Rosenthal La Fuente", wiki: "https://wiki.ead.pucv.cl/Paula_Rosenthal_La_Fuente" },
      { name: "Muriel Sánchez", wiki: "https://wiki.ead.pucv.cl/Muriel_Sanchez" }
    ]
  }
];

const container = document.getElementById("projectsContainer");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

function renderGrid() {
  container.innerHTML = "";
  container.className = "projects grid-view";

  groups.forEach(group => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = group.path;
    card.setAttribute("aria-label", `Abrir subpágina de ${group.title}`);

    const studentNames = group.students.map(s => s.name).join(" · ");

    card.innerHTML = `
      <div class="project-media">
        <div class="group-number">${group.number}</div>
        <div class="group-subtitle-box">
          <p class="group-subtitle">${group.subtitle}</p>
          <p class="group-desc">${studentNames}</p>
        </div>
        <span class="project-arrow">↗</span>
      </div>

      <div class="project-info">
        <span class="project-title">${group.title}</span>
        <span class="project-title-ghost">${group.title}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderList() {
  container.innerHTML = "";
  container.className = "projects list-view";

  groups.forEach(group => {
    const categoryCard = document.createElement("article");
    categoryCard.className = "category-card";

    categoryCard.innerHTML = `
      <h3 class="category-title">
        <a href="${group.path}" class="category-title-link">
          ${group.title}
          <span class="external-icon">↗</span>
        </a>
      </h3>

      <div class="category-students">
        ${group.students
          .map(
            student => `
          <a href="${student.wiki}" target="_blank" rel="noopener noreferrer">
            ${student.name}
            <span class="external-icon">↗</span>
          </a>
        `
          )
          .join("")}
      </div>
    `;

    container.appendChild(categoryCard);
  });
}

function changeView(view) {
  container.classList.add("is-changing");

  setTimeout(() => {
    if (view === "grid") {
      renderGrid();
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    }

    if (view === "list") {
      renderList();
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
    }

    requestAnimationFrame(() => {
      container.classList.remove("is-changing");
    });
  }, 230);
}

function showModal() {
  modalOverlay.classList.add("visible");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function hideModal() {
  modalOverlay.classList.remove("visible");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

gridBtn.addEventListener("click", () => changeView("grid"));
listBtn.addEventListener("click", () => changeView("list"));

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);

modalOverlay.addEventListener("click", event => {
  if (event.target === modalOverlay) hideModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") hideModal();
});

renderGrid();
