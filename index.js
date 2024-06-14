const perfiles = [
  "Diseño gráfico",
  "Programación",
  "Fotografía",
  "Arquitectura",
  "Arte",
  "Escritura",
  "Marketing",
  "Educación",
  "Música",
  "Cualquier cosa"
];

const profiles = [
  "Graphic Design",
  "Coding",
  "Photograph",
  "Architecture",
  "Art",
  "Writing",
  "Marketing",
  "Education",
  "Musica",
  "Anything"
];

const svgRoutes = [
  "./assets/svg/graphic.svg",
  "./assets/svg/code.svg",
  "./assets/svg/photograph.svg",
  "./assets/svg/arquitect.svg",
  "./assets/svg/art.svg",
  "./assets/svg/writing.svg",
  "./assets/svg/marketing.svg",
  "./assets/svg/education.svg",
  "./assets/svg/music.svg",
  "./assets/svg/otros.svg"
];

let language = true; // true == Español | false == Inglés

let index = 0;

let visible = true;

let start = Date.now();

const isVisible = document.getElementById("isVisible");
const svgContainer = document.getElementById("svgContainer");

const projectTitle = document.getElementById("projectTitle");
const frontSVG = document.getElementById("frontSVG");

function increment(time) {

  let elapsedTime = 0;

  if(visible) {
    setTitle();
    // setSVG();
    putSVG();

    index += 1;
    if( index >= profiles.length ) {
      index = 0;
    }
  } else {
    let now = Date.now();
    elapsedTime = now - start;
  }

  let delay = elapsedTime > 0 ? 0 : time;

  setTimeout( () => {
    increment(time);
  }, delay );
}

function setTitle() {
  projectTitle.innerHTML = `${language ? perfiles[index] : profiles[index]} <span>&#160;</span>`;
}

function setSVG() {
  frontSVG.src = svgRoutes[index];
}

function putSVG() {
  svgContainer.innerHTML = `<img src="${svgRoutes[index]}" alt="" id="frontSVG">`
}

increment(4000);

document.addEventListener('visibilitychange', function() {
  visible = !document.hidden;
  if (visible) {
    start = Date.now();
  }
});

const plantillasContainer = document.getElementById("plantillasContainer");
const projectsContainer = document.getElementById("projectsContainer");

const projects = [
  { 
    titleTrue: "Mi portafolio", 
    titleFalse: "My portfolio", 
    url: "https://nolanashcraft.netlify.app/",
    image: "./assets/images/nolan.JPG"
  },
  { 
    titleTrue: "Fernando Sánchez", 
    titleFalse: "Fernando Sánchez", 
    url: "https://fernandosanchezgonzales.netlify.app/",
    image: "./assets/images/fernando.JPG"
  },
  { 
    titleTrue: "Victor Zapata", 
    titleFalse: "Victor Zapata", 
    url: "https://victorzapata.netlify.app/",
    image: "./assets/images/victor.JPG"
  },
];
const plantillas = [
  { 
    titleTrue: "Plantilla 01", 
    titleFalse: "Template 01", 
    url: "https://portafolio-plantilla01.netlify.app/",
    image: "./assets/images/plantilla.JPG"
  },
];

for( let i=0; i<plantillas.length; i++ ) {
  const pro = document.createElement("div");
  pro.classList.add("position-relative");
  pro.classList.add("overflow-hidden");
  pro.classList.add("display-flex");
  pro.classList.add("project-height");
  pro.classList.add("project-height-phone");

  const linkUrl = document.createElement("a");
  linkUrl.classList.add("project-link");
  linkUrl.href = plantillas[i].url;
  linkUrl.target = "_blank";
  linkUrl.innerText = language ? plantillas[i].titleTrue : plantillas[i].titleFalse;

  const image = document.createElement("img");
  image.classList.add("project-image");
  image.src = plantillas[i].image;

  pro.appendChild(image);
  pro.appendChild(linkUrl);

  plantillasContainer.appendChild(pro);
}

for( let i=0; i<projects.length; i++ ) {
  const pro = document.createElement("div");
  pro.classList.add("position-relative");
  pro.classList.add("overflow-hidden");
  pro.classList.add("display-flex");
  pro.classList.add("project-height");
  pro.classList.add("project-height-phone");

  const linkUrl = document.createElement("a");
  linkUrl.classList.add("project-link");
  linkUrl.href = projects[i].url;
  linkUrl.target = "_blank";
  linkUrl.innerText = language ? projects[i].titleTrue : projects[i].titleFalse;

  const image = document.createElement("img");
  image.classList.add("project-image");
  image.src = projects[i].image;

  pro.appendChild(image);
  pro.appendChild(linkUrl);

  projectsContainer.appendChild(pro);
}
