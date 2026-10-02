/* =========================
   PASSKEY
========================= */

function unlock() {

    const key =
        document.getElementById("passkey").value;

    const error =
        document.getElementById("error");


    if (key === "1509") {

        document
            .getElementById("lock")
            .classList
            .add("hidden");


        document
            .getElementById("site")
            .classList
            .add("show");


        document.body.style.overflowX = "hidden";


        setTimeout(function() {

            document
                .getElementById("letter")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }, 900);


    } else {

        error.textContent =
            "That isn't the secret key 💔";


        document
            .getElementById("passkey")
            .value = "";


        setTimeout(function() {

            error.textContent = "";

        }, 1800);

    }
}


/* =========================
   ENTER KEY
========================= */

document
    .getElementById("passkey")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                unlock();

            }

        }
    );


/* =========================
   SCROLL REVEAL
========================= */

const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        function(element) {

            observer.observe(element);

        }
    );