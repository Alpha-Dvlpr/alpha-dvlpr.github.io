const imagesPath = "resources/images/";

window.onload = function() {
    document.getElementById("header_image").src = imagesPath + "mini_icon.png";
    applyForCurrentPage();
}

// get current page
function applyForCurrentPage() {
    var html = window.location.href.split("/").slice(-1);

    if (html == 'main.html') {
        document.getElementById("main_image").src = imagesPath + "main_image.jpg";
        setMainText();
    } else {
        alert('unknown page');
    }
}

// about page scripts
function setMainText() {
    document.getElementsByClassName("main_text")[0].innerHTML = "\
    Mi nombre es Aarón Granado, tengo 26 años y actualmente resido en Cáceres. \n\n\
    Estudié el Grado Superior en Desarrollo de Aplicaciones Multiplataforma y fue antes de entregar la propuesta del TFG cuando \
    decidí que mi carrera profesional iba a comenzar con el desarrollo de iOS, arriesgándome totalmente a suspenderlo \
    (spoiler: aprobé con muy buena nota) ya que cualquier cosa diferente e innovadora (cualquier cosa que no estuviera en sus \
    apuntes de principios de siglo) era fuertemente penalizada por mis profesores, pero no me importó y me compré un MacBook \
    Pro de 2010 bastante demacrado pero funcional y comencé a aprender como funcionan tanto Swift como XCode con tutoriales en \
    YouTube y algún que otro curso de Udemy.\n\n\
    Lamentablemente el año en el que terminé el Grado estamabos a mitad del primer confinamiento del 2020, por lo que no pude hacer \
    mis FCT, las cuales se sustituyeron por un trabajo de investigación, pero eso no me detuvo, ya que durante esos dos meses estuve \
    enviando mi currículum por todo internet con la esperanza de que me llamaran de algún sitio.\n\n\
    Tuve suerte y realicé\
    ".replaceAll("\n", "</br>");
}