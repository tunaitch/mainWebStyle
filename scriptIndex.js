// ********* ------------- Members section ---------------- ***********************

// ********* ------------- Tunos ---------------- ***********************

kimyTuno = {
  name: "Kimy",
  alias: "Simi-o",
  range: "Tuno",
  date: "08/04/17",
  phrase: "",
  img: "https://i.ibb.co/Z8jTKxD/kimytuno2.png",
  link: "",
};

davidTuno = {
  name: "David",
  alias: "Kotex",
  range: "Tuno",
  date: "02/12/18",
  phrase: "",
  img: "https://i.ibb.co/2FtPrwx/davidtuno.png",
  link: "",
};

richardTuno = {
  name: "Richard",
  alias: "Perrita",
  range: "Tuno",
  date: "02/12/18",
  phrase: "",
  img: "https://i.ibb.co/kg0wKk5/richardtuno.png",
  link: "",
};

cantiTuno = {
  name: "Juan",
  alias: "Canti",
  range: "Tuno",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/19Q6gSL/cantituno.png",
  link: "",
};

gerardoTuno = {
  name: "Gerardo",
  alias: "&nbsp;&nbsp;&nbsp; ",
  range: "Tuno",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/qYnfrNv/geratuno.png",
  link: "",
};

tunos = [kimyTuno, davidTuno, richardTuno, cantiTuno, gerardoTuno];

// ********* ------------- Pardillos ---------------- ***********************
popaPardillo = {
  name: "José",
  alias: "Popa, Abuelo",
  range: "Director Musical",
  date: "08/04/17",
  phrase: "",
  img: "https://i.ibb.co/gMxzxp1/popapardillo.png",
  link: "",
};

christianPardillo = {
  name: "Christian",
  alias: "Peque",
  range: "Jefe de pardillos",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/vC9859W/christianpardillo.png",
  link: "",
};

juanPabloPardillo = {
  name: "Juan Pablo",
  alias: "Foster",
  range: "Pardillo",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/FqDKxNG/juanpablopardillo.png",
  link: "",
};

alfonsoPardillo = {
  name: "Alfonso",
  alias: "",
  range: "Pardillo",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/V9VKjS5/alfonsopardillo.png",
  link: "https://www.tunaitch.x10.mx/home.html",
};

serranoPardillo = {
  name: "César",
  alias: "Serrano",
  range: "Pardillo",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/m9chFX6/serranopardillo.png",
  link: "",
};

angelPardillo = {
  name: "Ángel",
  alias: "Vicitos",
  range: "Pardillo",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/KDjm0Pp/miguelangelpardillo.png",
  link: "",
};

gioPardillo = {
  name: "Gio",
  alias: "Meñique",
  range: "Pardillo",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/nC8jVfV/davidgiopardillo.png",
  link: "",
};

garyPardillo = {
  name: "Gary",
  alias: "Shikamaru",
  range: "Pardillo",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/6wv2T5B/garypardillo.png",
  link: "",
};

pardillos = [
  popaPardillo,
  christianPardillo,
  juanPabloPardillo,
  alfonsoPardillo,
  serranoPardillo,
  angelPardillo,
  gioPardillo,
  garyPardillo,
];

// ********* ------------- Aspirantes ---------------- ***********************
emirAspirante = {
  name: "Emir",
  alias: "",
  range: "Aspirante Veterano",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/TRWM4rH/emiraspiranteof.png",
  link: "",
};

adolfoAspirante = {
  name: "Adolfo",
  alias: "Fürer",
  range: "Aspirante",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/fSDmK5h/adolfoaspiranteof.png",
  link: "",
};

uriAspirante = {
  name: "Uri",
  alias: "",
  range: "Aspirante",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/kJZGtzk/urielaspiranteof.png",
  link: "",
};

ulisesAspirante = {
  name: "Ulises",
  alias: "",
  range: "Aspirante",
  date: "",
  phrase: "",
  img: "https://i.ibb.co/F5Ymb1R/ulisesaspiranteof.png",
  link: "",
};

aspirantes = [emirAspirante, adolfoAspirante, uriAspirante, ulisesAspirante];

// ********* ------------- Sections ---------------- ***********************

sections = ["tunosSelectArea", "pardillosSelectArea", "aspirantesSelectArea"];

// ********* ------------- End of Members section ---------------- ***********************

// ********* ------------- Code ---------------- ***********************

// ********* ------------- Function ---------------- ***********************

function createAllMembers() {
  createMembers(sections[0], tunos, "tuno");
  createMembers(sections[1], pardillos, "pardillo");
  createMembers(sections[2], aspirantes, "pardillo");
}

function getContainerById(name) {
  return document.getElementById(name);
}

function createCenter(container) {
  center = document.createElement("center");
  container.appendChild(center);
  return center;
}

function createMember(mainCenter, member, memberData) {
  // Section
  select = createContainer(mainCenter, "select", "div");

  // Subsection
  center = createCenter(select);
  imageSelect = createContainer(center, "select-image circle", "div");
  a = createAnA(imageSelect, "");
  image = createImageIntoContainer(a, "select-image-pic", member.img, "");

  // Text
  firstP = createParagraph(center, "select-text", memberData[0]);

  secondP = createParagraph(center, "select-text small", memberData[1]);
}

function createAnA(parentContainer, link) {
  a = createContainer(parentContainer, "", "a");
  a.setAttribute("href", link);
  return a;
}

function createParagraph(parentContainer, className, text) {
  p = createContainer(parentContainer, className, "p");
  p.innerHTML = text;
  return p;
}

function createImageIntoContainer(parentContainer, className, source, textAlt) {
  image = createContainer(parentContainer, className, "img");
  image.setAttribute("src", source);
  image.setAttribute("alt", textAlt);
  return image;
}

function createContainer(parentContainer, className, type) {
  container = document.createElement(type);
  container.setAttribute("class", className);
  parentContainer.appendChild(container);
  return container;
}

function createElementFunc(name) {
  container = getContainer("demo");
  element = document.createElement("div");
  element.setAttribute("class", "round blue cont");
  element.innerHTML = name;
  container.appendChild(element);
}

function createMembers(name, members, range) {
  selectArea = getContainerById(name);
  mainCenter = createCenter(selectArea);

  members.forEach((member) => {
    switch (range) {
      case "tuno":
        memberData = [
          member.alias + " (" + member.name + ") " + member.range,
          "Becación: " + member.date,
        ];
        break;
      default:
        memberData = [member.alias + " (" + member.name + ")", member.range];
        break;
    }
    createMember(mainCenter, member, memberData);
  });
}

// ********* ------------- Gallery Code ---------------- ***********************
