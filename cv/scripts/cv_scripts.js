/* Spanish texts */
function logoAction() {
    window.location.href = "../../index.html";
}

function setAbout() {
    document.getElementsByClassName("main_text")[0].innerHTML = "\
    Mi nombre es Aarón Granado, tengo 26 años y actualmente resido en Asturias. \n\n\
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
    La web la he realizado yo enteramente aplicando mis conocimientos en desarrollo web pero pretendiendo que sea sencilla. \
    ".replaceAll("\n", "</br>");
}

function setQualifs() {
    document.getElementsByClassName("ciberseguridad")[0].innerHTML = "\
    EN CURSO | INTECSSA \n\n\
    Máster en Ciberseguridad Corporativa y Hacking Ético \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("dam")[0].innerHTML = "\
    JUNIO 2020 | IES ÁGORA \n\n\
    Grado Superior en Desarrollo de Aplicaciones Multiplataforma \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("ingles")[0].innerHTML = "\
    JUNIO 2016 | ESCUELA OFICIAL DE IDIOMAS DE PLASENCIA \n\n\
    Inglés B2 \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("frances")[0].innerHTML = "\
    JUNIO 2015 | ESCUELA OFICIAL DE IDIOMAS DE PLASENCIA \n\n\
    Francés B1 \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("fundae")[0].innerHTML = "\
    MAYO 2022 | IT FORMACIÓN Y SERVICIOS \n\n\
    Desarrollo SQLite \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("it_institute")[0].innerHTML = "\
    OCTUBRE 2021 | IT INSTITUTE \n\n\
    Metodologías Ágiles de Desarrollo \
    ".replaceAll("\n", "</br>");
}

function setJobs() {
    document.getElementsByClassName("knowmad_mood")[0].innerHTML = "\
    DESARROLLADOR iOS | KNOWMADMOOD | ABRIL 2023 -> SEPTIEMBRE 2024 \n\n\
    Desarrollos nuevos y mantenimiento de los existentes con Swift, UIKit y Storyboards. \n\n\
    Git, GitLab, Merge Requests, Figma, AppStore Connect, TestFlight. \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("telynet")[0].innerHTML = "\
    DESARROLLADOR iOS | TELYNET | MAYO 2022 -> ABRIL 2023 \n\n\
    Desarrollos desde cero para diversos clientes en SwiftUI. \n\n\
    Subversion, SQLite. \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("minsait")[0].innerHTML = "\
    DESARROLLADOR iOS | MINSAIT (INDRA) | JUNIO 2021 -> ABRIL 2022 \n\n\
    Desarrollos nuevos y mantenimiento de los existentes con Swift, UIKit y Storyboards. \n\n\
    Git, Jenkins, Merge Requests, Zeplin. \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("zimaltec")[0].innerHTML = "\
    DESARROLLADOR iOS | ZIMALTEC SOLUCIONES | JUNIO 2020 -> JUNIO 2021 \n\n\
    Desarrollos nuevos y mantenimiento de los existentes con Swift, UIKit y Storyboards. \n\n\
    Git, Merge Requests, Realm Database, AppStore Connect, TestFlight. \
    ".replaceAll("\n", "</br>");
}

/* English texts */
function logoEnAction() {
    window.location.href = "../../../en_index.html";
}

function setEnAbout() {
    document.getElementsByClassName("main_text")[0].innerHTML = "\
    My name is Aaron Granado, I am 26 years old and I currently reside in Asturias. \n\n\
    I studied the Higher Degree in Multiplatform Application Development and it was before submitting the TFG proposal when I \
    decided that my professional career was going to begin with iOS development, totally risking failing it \
    (spoiler: I passed with very good marks) since anything different and innovative (anything that was not in their notes from \
    the beginning of the century) was strongly penalized by my teachers, but I did not care and I bought a rather emaciated but functional 2010 MacBook \
    Pro and began to learn how both Swift and XCode work with tutorials on \
    YouTube and the occasional Udemy course. \n\n\
    Unfortunately, the year I finished the Degree we were in the middle of the first lockdown of 2020, so I could not do \
    my FCT, which were replaced by a research paper, but that did not stop me, since during those two months I was \
    sending my resume all over the internet in the hope of I had to wait for a call from somewhere.\n\n\
    I did a couple of interviews and was lucky enough that a company in Zaragoza gave me the opportunity to start my career as an \
    iOS developer. At first, due to the pandemic and the lockdowns, I was working remotely, but after spending the \
    summer of that year I decided to pack my bags and go to Zaragoza to live and work in person, since I couldn't \
    imagine working from home. \n\n\
    Throughout my career I have worked for several companies on completely native iOS projects, including \
    several GPV projects, a project for one of the main telecommunications companies in Spain and Europe to manage \
    users' telephone lines, and a VoD project for one of the main audiovisual groups in Spain for which \
    tvOS is also developed. \n\n\
    Some of these projects have been developed entirely in SwiftUI, a technology that I am still learning about today, even though it is not being used in the current project.\
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("more_info_text")[0].innerHTML = "\
    On this website you can see my work experience in detail and download my updated CV in PDF format, see all my qualifications and contact me for anything. \n\n\
    Also links to other pages that I have developed. \n\n\
    I have created the website entirely myself, applying my knowledge in web development but trying to keep it simple. \
    ".replaceAll("\n", "</br>");
}

function setEnQualifs() {
    document.getElementsByClassName("ciberseguridad")[0].innerHTML = "\
    IN PROGRESS | INTECSSA \n\n\
    Master in Corporate Cybersecurityand Ethical Hacking \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("dam")[0].innerHTML = "\
    JUNE 2020 | IES ÁGORA \n\n\
    Higher Degree in Multiplatform Application Development \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("ingles")[0].innerHTML = "\
    JUNE 2016 | PLASENCIA OFFICAL LANGUAGE SCHOOL \n\n\
    English B2 \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("frances")[0].innerHTML = "\
    JUNE 2015 | PLASENCIA OFFICAL LANGUAGE SCHOOL \n\n\
    French B1 \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("fundae")[0].innerHTML = "\
    MAY 2022 | IT FORMACIÓN Y SERVICIOS \n\n\
    SQLite Development \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("it_institute")[0].innerHTML = "\
    OCTOBER 2021 | IT INSTITUTE \n\n\
    Agile Development Methodologies \
    ".replaceAll("\n", "</br>");
}

function setEnJobs() {
    document.getElementsByClassName("knowmad_mood")[0].innerHTML = "\
    iOS DEVELOPER | KNOWMADMOOD | APRIL 2023 -> SEPTEMBER 2024 \n\n\
    New developments and maintenance of existing ones with Swift, UIKit and Storyboards. \n\n\
    Git, GitLab, Merge Requests, Figma, AppStore Connect, TestFlight. \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("telynet")[0].innerHTML = "\
    iOS DEVELOPER | TELYNET | MAY 2022 -> APRIL 2023 \n\n\
    Developments from scratch for various clients in SwiftUI. \n\n\
    Subversion, SQLite. \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("minsait")[0].innerHTML = "\
    iOS DEVELOPER | MINSAIT (INDRA) | JUNE 2021 -> APRIL 2022 \n\n\
    New developments and maintenance of existing ones with Swift, UIKit and Storyboards. \n\n\
    Git, Jenkins, Merge Requests, Zeplin. \
    ".replaceAll("\n", "</br>");

    document.getElementsByClassName("zimaltec")[0].innerHTML = "\
    iOS DEVELOPER | ZIMALTEC SOLUCIONES | JUNE 2020 -> JUNE 2021 \n\n\
    New developments and maintenance of existing ones with Swift, UIKit and Storyboards. \n\n\
    Git, Merge Requests, Realm Database, AppStore Connect, TestFlight. \
    ".replaceAll("\n", "</br>");
}