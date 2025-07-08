
const PAGE_PATHS = {
    home: 'pages/home.html',
    people: 'pages/people.html',
    facilities: 'pages/facilities.html',
    offerings: 'pages/offerings.html',
    past: 'pages/past.html',
    ongoing: 'pages/ongoing.html',
    contact: 'pages/contact.html'
};


window.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash.substring(1);

    if (hash && PAGE_PATHS[hash]) {
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${hash}`) {
                loadPage(hash, link);
            }
        });

        
    } else {
        // Load default "home" page if no hash is present
        const defaultLink = document.querySelector('nav a[href="#home"]');
        if (defaultLink) {
            loadPage("home", defaultLink);
        }
    }
});



const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.remove("hidden");
    } else {
        scrollBtn.classList.add("hidden");
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


async function loadPage(page, el) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '<div><i class="fas fa-spinner fa-spin fa-2x"></i></div>'; // Optional loading indicator

    try {
        const response = await fetch(PAGE_PATHS[page]);
        if (!response.ok) throw new Error(`Failed to load ${page} page`);
        const html = await response.text();
        mainContent.innerHTML = html;

    } catch (err) {
        mainContent.innerHTML = `<p>Error loading page: ${err.message}</p>`;
        console.error(err);
    }

    // Update active nav link
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
}

function loadPDF(clickedCard, pdfPath) {
    const iframe = document.getElementById('pdfViewer');
    iframe.src = pdfPath + '#navpanes=0';
    iframe.style.display = 'block';

    // Remove active styling from all cards
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.style.border = '0px solid #ccc';
    });

    // Apply active styling to clicked card
    clickedCard.style.border = '2px solid #333';
}
function loadPDF2(clickedCard, pdfPath) {
    const iframe2 = document.getElementById('pdfViewer2');
    iframe2.src = pdfPath + '#navpanes=0';
    iframe2.style.display = 'block';
    // Remove active styling from all cards
    const allCards2 = document.querySelectorAll('.card');
    allCards2.forEach(card => {
        card.style.border = '0px solid #ccc';
    });

    // Apply active styling to clicked card
    clickedCard.style.border = '2px solid #333';
}



