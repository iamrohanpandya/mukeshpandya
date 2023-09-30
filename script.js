// Function to open a specific tab
function openTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";
}

// Function to display image in popup
function displayImage(imageSrc) {
    var popupImage = document.getElementById("popup-image");
    popupImage.src = imageSrc;
    document.getElementById("image-popup").style.display = "flex";
}

// Load images for Miniature Art
var miniatureGallery = document.getElementById("miniature");
for (var i = 1; i <= 30; i++) {
    var img = document.createElement("img");
    img.src = "resources/miniature art/" + i + ".jpg";
    img.onclick = function () {
        displayImage(this.src);
    };
    miniatureGallery.appendChild(img);
}

// Load images for Paper Art
var paperGallery = document.getElementById("paper");
for (var i = 1; i <= 30; i++) {
    var img = document.createElement("img");
    img.src = "resources/paper art/" + i + ".jpg";
    img.onclick = function () {
        displayImage(this.src);
    };
    paperGallery.appendChild(img);
}


// Function to close the image popup
function closePopup() {
    document.getElementById("image-popup").style.display = "none";
}
