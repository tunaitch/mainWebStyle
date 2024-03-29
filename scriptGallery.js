// ********* ------------- Photos section ---------------- ***********************

// ********* ------------- Photos ---------------- ***********************

photo1 = {
    src: "https://i.ibb.co/QQ62YZS/tuna1.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "Ceremonia de Graduación 27/Mayo/22"
}

photo2 = {
    src: "https://i.ibb.co/f19vvJx/tuna2.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "Participación en el Aniversario de la Tuna Guerrero UAGRO 05/Mayo/22"
}

photo3 = {
    src: "https://i.ibb.co/MpBGJZQ/tuna3.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "Participación en el Aniversario de la Tuna Guerrero UAGRO 05/Mayo/22"
}

photo4 = {
    src: "https://i.ibb.co/Y203rMb/tuna4.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "Participación en el Aniversario de la Tuna Guerrero UAGRO 05/Mayo/22"
}

photo5 = {
    src: "https://i.ibb.co/Ctg1fkf/9.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo6 = {
    src: "https://i.ibb.co/0CFvKXw/tuna6.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "Participación en el Aniversario de la Tuna Guerrero UAGRO 05/Mayo/22"
}

photo7 = {
    src: "https://i.ibb.co/ZdBs2Tk/tuna7.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "Aniversario Luctuoso del Tuno Bromas 26/Abril/22"
}

photo8 = {
    src: "https://i.ibb.co/rmgRkjw/1.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo9 = {
    src: "https://i.ibb.co/jVnPCxv/2.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo10 = {
    src: "https://i.ibb.co/CBNyy3p/3.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo11 = {
    src: "https://i.ibb.co/QMhqfn0/4.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo12 = {
    src: "https://i.ibb.co/fvxMkLR/5.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo13 = {
    src: "https://i.ibb.co/hmqc6mJ/6.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo14 = {
    src: "https://i.ibb.co/frj35J0/tuna14.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "Participación Decembrina 10/Dic/22"
}

photo15 = {
    src: "https://i.ibb.co/KNbzg4X/7.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo16 = {
    src: "https://i.ibb.co/pr4pP5S/Whats-App-Image-2022-11-29-at-11-44-40-AM-1.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo17 = {
    src: "https://i.ibb.co/QK5sZ3J/Whats-App-Image-2022-12-01-at-8-11-37-PM.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo18 = {
    src: "https://i.ibb.co/BjkHxNn/Whats-App-Image-2022-11-29-at-12-20-37-PM-1.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo19 = {
    src: "https://i.ibb.co/zfxFtrn/IMG-E1306.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo20 = {
    src: "https://i.ibb.co/Kz1b2bZ/IMG-E1349.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo21 = {
    src: "https://i.ibb.co/BL8GXHv/IMG-E1363.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}

photo22 = {
    src: "https://i.ibb.co/2PPp7SL/IMG-E1369.jpg",
    action: "onClick(this)",
    class: "myImg",
    alt: "S/D"
}


mainPhotos = [
    photo1,
    photo21,
    photo22,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo20,
    photo11,
    photo12,
    photo19,
    photo14,
    photo15,
    photo16,
    photo17, 
    photo18
];

allPhotos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15, 
    photo16,
    photo17, 
    photo18, 
    photo19,
    photo20, 
    photo21,
    photo22
];

// ********* ------------- End Photos ---------------- ***********************


// ********* ------------- End Photos section ---------------- ***********************
function loadGallery(isMain) {
    addImagesToContainer("gallery", isMain);
}

function addImagesToContainer(name, isMain) {
    container = document.getElementById(name);
    if (isMain) {
        addImages(container, mainPhotos);
    } else {
        addImages(container, allPhotos);
    }
}



function addImages(parentContainer, photos) {

    photos.forEach((photo) => {
        createImage(parentContainer, photo);
    });

}



function createImage(parentContainer, photo) {
    image = document.createElement("img");
    image.setAttribute("src", photo.src);
    image.setAttribute("onclick", photo.action);
    image.setAttribute("class", photo.class);
    image.setAttribute("alt", photo.alt);
    parentContainer.appendChild(image);

}



