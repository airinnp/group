var modal = document.getElementById("imageModal");


var images = document.querySelectorAll(".promo-item img");
var modalImg = document.getElementById("modalImage");
images.forEach(img => {
    img.addEventListener("click", function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});


var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
    modal.style.display = "none";
}