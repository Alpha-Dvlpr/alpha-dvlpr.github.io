window.onload = function() {
    setHeaderImage();
    applyForCurrentPage();
}

// get current page
function applyForCurrentPage() {
    var currentPage = window.location.href;
    var parts = currentPage.split("/");
    var html = parts.slice(-1);

    if (html == 'main.html') {
        setMainImage();
        setMainText();
    } else {
        alert('unknown page');
    }
}

// images scripts
const imagesPath = "resources/images/";

function setHeaderImage() {
    var image = document.getElementById("header_image");
    image.src = imagesPath + "mini_icon.png";
}

function setMainImage() {
    var image = document.getElementById("main_image");
    image.src = imagesPath + "main_image.jpg";
}

// about page scripts
function setMainText() {
    var label = document.getElementsByClassName("main_text")[0];
    label.textContent = "Mi nombre es Aarón";
}