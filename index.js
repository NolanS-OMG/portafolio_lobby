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

  console.log( visible, elapsedTime );

  let delay = elapsedTime > 0 ? 0 : time;

  setTimeout( () => {
    console.log( 'delay:', delay );
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
    console.log('visible');
    start = Date.now();
  } else {
    console.log('not');
  }
});

const projectsContainer = document.getElementById("projectsContainer");
console.log('ola');
console.log(projectsContainer);

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

for( let i=0; i<projects.length; i++ ) {
  console.log('oalalal');
  const pro = document.createElement("div");
  pro.classList.add("position-relative");
  pro.classList.add("overflow-hidden");
  pro.classList.add("display-flex");
  pro.classList.add("project-height");
  console.log(pro);

  const linkUrl = document.createElement("a");
  linkUrl.classList.add("project-link");
  linkUrl.href = projects[i].url;
  linkUrl.innerText = language ? projects[i].titleTrue : projects[i].titleFalse;
  console.log(linkUrl);

  const image = document.createElement("img");
  image.classList.add("project-image");
  image.src = projects[i].image;
  console.log(image);

  pro.appendChild(image);
  pro.appendChild(linkUrl);
  console.log(pro);

  projectsContainer.appendChild(pro);
}
