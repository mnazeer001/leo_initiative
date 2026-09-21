/* =========================================================
   LEO INITIATIVE
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

/*
    Find the mobile menu button and navigation menu.

    DEBUG NOTE:
    If the mobile menu does not open, check that these IDs
    exist in index.html:

        id="menuToggle"
        id="mainNav"
*/

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


/*
    Make sure both elements exist before adding events.

    This prevents JavaScript errors if a page does not contain
    the navigation elements.
*/

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        /*
            Add/remove the "active" class.

            CSS controls what happens when the menu is active.
        */

        mainNav.classList.toggle("active");


        /*
            Change the accessibility state of the menu button.
        */

        const isOpen = mainNav.classList.contains("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

}


/* =========================================================
   2. CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

if (mainNav) {

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            /*
                When a visitor clicks a navigation link,
                close the mobile menu.
            */

            mainNav.classList.remove("active");

            if (menuToggle) {

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        });

    });

}


/* =========================================================
   3. HEADER SCROLL EFFECT
   ========================================================= */

const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", function () {

    if (!siteHeader) {
        return;
    }

    /*
        Add "scrolled" class after the visitor scrolls
        down the page.

        We can style this class later if needed.
    */

    if (window.scrollY > 30) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

});


/* =========================================================
   4. SHARED FOOTER
   ========================================================= */

const siteFooter = document.querySelector(".site-footer");

if (siteFooter) {

    siteFooter.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <a href="index.html" class="footer-logo">Leo Initiative</a>
                    <p>Youth in Action for Health and Hope.</p>
                    <p>A youth-led, community-focused initiative working for healthier and empowered communities.</p>
                </div>

                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="impact.html">Our Impact</a></li>
                        <li><a href="get-involved.html">Get Involved</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3>Focus Areas</h3>
                    <ul>
                        <li><a href="focus-areas.html#health">Health &amp; Well-being</a></li>
                        <li><a href="focus-areas.html#education">Education &amp; Empowerment</a></li>
                        <li><a href="focus-areas.html#development">Personal Development</a></li>
                        <li><a href="focus-areas.html#community">Community Impact</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h3>Connect With Us</h3>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook">Facebook</a>
                        <a href="#" aria-label="Instagram">Instagram</a>
                        <a href="#" aria-label="LinkedIn">LinkedIn</a>
                        <a href="#" aria-label="TikTok">TikTok</a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 Leo Initiative. All rights reserved.</p>
                <div>
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="terms.html">Terms of Use</a>
                </div>
            </div>
        </div>
    `;
}


/* =========================================================
   5. CURRENT YEAR
   ========================================================= */

/*
    We can use JavaScript to automatically update the year
    when we add a dedicated year element later.
*/

const currentYear = document.querySelector("#currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   5. BASIC IMAGE ERROR HANDLING
   ========================================================= */

/*
    If an image cannot be loaded, log a useful message
    in the browser console.

    DEBUG NOTE:
    Open:

        Browser → Right Click → Inspect → Console

    to see these messages.
*/

const images = document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        console.warn(
            "Leo Initiative image could not be loaded:",
            image.src
        );

    });

});


/* =========================================================
   6. PAGE LOADED MESSAGE
   ========================================================= */

/*
    This is useful while developing.

    We can remove or replace this later in production.
*/

console.log(
    "Leo Initiative website frontend loaded successfully."
);