function logoAction() {
    window.location.href = "../main.html";
}

function setAbout() {
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
    Realicé un par de entrevistas y tuve la suerte de que una empresa de Zaragoza me dio la oportunidad de comenzar mi carrera como \
    desarrollador iOS. Al principio, por culpa de la pandemia y de los confinamientos estuve trabajando en remoto pero tras pasar el \
    verano de aquel año decidí hacer las maletas e irme a Zaragoza a vivr y trabajar presencialmente, ya que no me hacía a la idea \
    de trabajar en casa. \n\n\
    A lo largo de mi carrera he pasado por varias empresas trabajando en proyectos completamente nativos en iOS entre los que se encuentran \
    varios proyectos de GPVs, un proyecto para una de las principales empresas de telecomunicaciones de España y Europa para gestionar \
    las linéas telefónicas de los usuarios y un proyecto de VoD para uno de los principales grupos audiovisuales de España para el que \
    también se desarrolla para tvOS. \n\n\
    Algunos de estos proyectos se han desarrollado en SwiftUI completamente, tecnología sobre la que sigo aprendiendo a día de hoy \
    aunque en el proyecto acutual no se esté utilizando. \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("more_info_text")[0].innerHTML = "\
    En esta web podrás ver en detalle mi experiencia laboral y descargar mi CV actualizado en formato PDF, ver todas mis titulaciones \
    y contactarme para cualquier cosa. \n\n\
    También enlaces a otras páginas que he desarrollado. \n\n\
    La web la he realizado yo enteramente aplicando mis conocimientos en desarrollo web. \
    ".replaceAll("\n", "</br>")
}

function setQualifs() {

}

function setJobs() {

}

function setContact() {
    
}