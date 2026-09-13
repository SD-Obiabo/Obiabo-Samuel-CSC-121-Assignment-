/* =========================================
   MADUKA UNIVERSITY LIBRARY
   JavaScript
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("nav");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("show");
    });
}


/* =========================================
   CONTACT FORM
   ========================================= */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {
            alert("Please fill in all the fields.");
            return;
        }

        alert(
            "Thank you, " +
            name +
            ". Your message has been received."
        );

        contactForm.reset();
    });
}


/* =========================================
   DIGITAL LIBRARY SEARCH
   ========================================= */

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

if (searchButton && searchInput) {

    searchButton.addEventListener("click", function () {

        const searchText = searchInput.value.trim();

        if (searchText === "") {

            alert("Please enter something to search.");

            return;
        }

        alert(
            "You searched for: " +
            searchText
        );

        /*
            Later, this section can be connected
            to a real library catalogue or database.
        */
    });
}


/* =========================================
   FAQ
   ========================================= */

const faqQuestions = document.querySelectorAll(".faq h3");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = this.nextElementSibling;

        if (answer) {

            if (
                answer.style.display === "none" ||
                answer.style.display === ""
            ) {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }

        }

    });

});


/* =========================================
   CURRENT YEAR
   ========================================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});


/* =========================================
   BACK TO TOP BUTTON
   ========================================= */

const backToTop =
    document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}