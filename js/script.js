// =========================
// PROJECT FILTER
// =========================

const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(filter)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});


// =========================
// PROJECT MODAL
// =========================

const modal = document.getElementById("projectModal");
const closeModal = document.querySelector(".close-modal");

if (modal && closeModal) {

    document.querySelectorAll(".project-card").forEach(card => {

        card.addEventListener("click", (e) => {

            // Si on clique sur View Project ou View Resume,
            // on ne lance PAS cette modal.
            if (e.target.closest(".preview-btn")) return;

            modal.style.display = "flex";

            document.getElementById("modal-title").innerText =
                card.querySelector("h3").innerText;

            document.getElementById("modal-description").innerText =
                card.querySelector("p").innerText;

            document.getElementById("modal-image").src =
                card.querySelector("img").src;

        });

    });

    closeModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

}


// =========================
// IMAGE VIEWER
// =========================

const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.querySelector(".close-viewer");

document.querySelectorAll(".preview-btn").forEach(button => {

    button.addEventListener("click", (e) => {

        e.preventDefault();
        e.stopPropagation();

        const image = button.dataset.image;

        viewerImage.src = image;

        imageViewer.style.display = "flex";

    });

});

closeViewer.addEventListener("click", () => {

    imageViewer.style.display = "none";

});

imageViewer.addEventListener("click", (e) => {

    if (e.target === imageViewer) {

        imageViewer.style.display = "none";

    }

});
/*==========================
MOBILE MENU
==========================*/

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){

menuToggle.innerHTML="✕";

}else{

menuToggle.innerHTML="☰";

}

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuToggle.innerHTML="☰";

});

});