
const PAGE_PATHS = {
    home: 'pages/home.html',
    hackathon: 'pages/hackathon.html',
    people: 'pages/people.html',
    facilities: 'pages/facilities.html',
    offerings: 'pages/offerings.html',
    past: 'pages/past.html',
    ongoing: 'pages/ongoing.html',
    contact: 'pages/contact.html',
    news: 'pages/news.html'
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
    mainContent.innerHTML = `
    <div class="loader-container">
        <i class="fas fa-spinner fa-spin fa-2x"></i>
    </div>
    `;
    // Optional loading indicator

    try {
        const response = await fetch(PAGE_PATHS[page]);
        if (!response.ok) throw new Error(`Failed to load ${page} page`);
        const html = await response.text();
        mainContent.innerHTML = html;

        // Load and filter recent events if on home
        const recentEventsDiv = document.getElementById('recentEventsContainer');
        if (recentEventsDiv) {
            const eventsHTML = await fetch('pages/events-list.html').then(res => res.text());
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = eventsHTML;

            const allEvents = tempDiv.querySelectorAll('.event');
            const recentEvents = Array.from(allEvents).slice(0, 5); // first 5

            recentEvents.forEach(event => {
                recentEventsDiv.appendChild(event);
            });
            // Add News Archive link
            const archiveLink = document.createElement('a');
            archiveLink.href = '#news';
            archiveLink.textContent = 'News Archive →';

            archiveLink.addEventListener('mouseover', () => archiveLink.style.textDecoration = 'underline');
            archiveLink.addEventListener('mouseout', () => archiveLink.style.textDecoration = 'none');

            recentEventsDiv.appendChild(archiveLink);
        }

        // Load full events list if on archive
        const eventsDiv = document.getElementById('eventsContainer');
        const paginationControls = document.getElementById('paginationControls');

        if (eventsDiv && paginationControls) {
            const fullEventsHTML = await fetch('pages/events-list.html').then(res => res.text());
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = fullEventsHTML;

            const allEvents = Array.from(tempDiv.querySelectorAll('.event'));
            const eventsPerPage = 3;
            let currentPage = 1;

            function scrollToTopSmooth() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            function renderPage(page) {
                eventsDiv.innerHTML = '';
                const startIndex = (page - 1) * eventsPerPage;
                const endIndex = startIndex + eventsPerPage;
                const eventsToShow = allEvents.slice(startIndex, endIndex);

                eventsToShow.forEach(event => {
                    eventsDiv.appendChild(event);
                    const moreDetails = event.querySelector('.more-details');
                    if (moreDetails) moreDetails.style.display = 'block';
                });

                renderPaginationControls(page);
                scrollToTopSmooth();
            }

            function renderPaginationControls(current) {
                paginationControls.innerHTML = '';
                const totalPages = Math.ceil(allEvents.length / eventsPerPage);

                function createPageLink(label, pageNumber, isActive = false, isDisabled = false) {
                    const a = document.createElement('a');
                    a.textContent = label;
                    a.href = "#";
                    if (isActive) a.classList.add("active");
                    if (isDisabled) a.style.pointerEvents = "none";
                    if (!isDisabled) {
                        a.addEventListener("click", (e) => {
                            e.preventDefault();
                            currentPage = pageNumber;
                            renderPage(currentPage);
                        });
                    }
                    paginationControls.appendChild(a);
                }

                // Prev button
                createPageLink("«", current - 1, false, current === 1);

                // Page numbers with ellipsis
                const visiblePages = 5;
                const half = Math.floor(visiblePages / 2);
                let start = Math.max(1, current - half);
                let end = Math.min(totalPages, current + half);

                if (start > 1) {
                    createPageLink("1", 1, current === 1);
                    if (start > 2) {
                        const dots = document.createElement('span');
                        dots.textContent = '...';
                        dots.style.padding = '8px 12px';
                        paginationControls.appendChild(dots);
                    }
                }

                for (let i = start; i <= end; i++) {
                    createPageLink(i, i, i === current);
                }

                if (end < totalPages) {
                    if (end < totalPages - 1) {
                        const dots = document.createElement('span');
                        dots.textContent = '...';
                        dots.style.padding = '8px 12px';
                        paginationControls.appendChild(dots);
                    }
                    createPageLink(totalPages, totalPages, current === totalPages);
                }

                // Next button
                createPageLink("»", current + 1, false, current === totalPages);
            }

            // Initial render
            renderPage(currentPage);
        }



    } catch (err) {
        mainContent.innerHTML = `<p>Error loading page: ${err.message}</p>`;
        console.error(err);
    }

    // Special handling for hackathon page - load in iframe
    if (page === 'hackathon') {
        mainContent.innerHTML = '<iframe src="web/hackathon.html" style="width: 100%; height: 100vh; border: none;" title="Hackathon Page"></iframe>';
        // Hide main navbar and footer for hackathon page
        const navbar = document.querySelector('.navbar');
        const footer = document.querySelector('footer');
        if (navbar) navbar.style.display = 'none';
        if (footer) footer.style.display = 'none';
    } else {
        // Show navbar and footer for other pages
        const navbar = document.querySelector('.navbar');
        const footer = document.querySelector('footer');
        if (navbar) navbar.style.display = '';
        if (footer) footer.style.display = '';
    }

    // Update active nav link
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');

    // Initialize Hackathon page if loaded
    if (page === 'hackathon' && typeof initHackathonPage === 'function') {
        initHackathonPage();
    }
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

window.addEventListener("hashchange", function () {
    const hash = window.location.hash.substring(1);

    if (hash && PAGE_PATHS[hash]) {
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${hash}`) {
                loadPage(hash, link);
            }
        });
    }
});
// Hackathon Page Initialization
function initHackathonPage() {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Generate Circuit Nodes in Hero Section
    const heroBackground = document.getElementById('hero-background');
    if (heroBackground) {
        for (let i = 0; i < 8; i++) {
            const node = document.createElement('div');
            node.className = 'absolute w-2 h-2 bg-[#FDB813] rounded-full animate-node-pulse';
            node.style.left = Math.random() * 100 + '%';
            node.style.top = Math.random() * 100 + '%';
            const duration = 2 + Math.random() * 2;
            const delay = Math.random() * 2;
            node.style.animationDuration = `${duration}s`;
            node.style.animationDelay = `${delay}s`;
            heroBackground.appendChild(node);
        }
    }

    // Sticky Nav Logic
    const hackathonNav = document.querySelector('.fixed.top-0.left-0.right-0.z-40');
    if (hackathonNav) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                hackathonNav.classList.add('bg-white', 'shadow-lg');
                hackathonNav.classList.remove('bg-transparent');
            } else {
                hackathonNav.classList.remove('bg-white', 'shadow-lg');
                hackathonNav.classList.add('bg-transparent');
            }
        };
        window.addEventListener('scroll', handleScroll);
    }

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        let isMenuOpen = false;
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            const icon = mobileMenuBtn.querySelector('i');
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.style.height = 'auto';
                mobileMenu.style.opacity = '1';
                if (icon) icon.setAttribute('data-lucide', 'x');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.height = '0';
                mobileMenu.style.opacity = '0';
                if (icon) icon.setAttribute('data-lucide', 'menu');
            }
            if (typeof lucide !== 'undefined') lucide.createIcons();
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a, button').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.setAttribute('data-lucide', 'menu');
                if (typeof lucide !== 'undefined') lucide.createIcons();
            });
        });
    }

    // Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        const handleProgress = () => {
            const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollCurrent = window.scrollY;
            const scrollPercentage = (scrollCurrent / scrollTotal) * 100;
            progressBar.style.transform = `scaleX(${scrollPercentage / 100})`;
        };
        window.addEventListener('scroll', handleProgress);
    }

    // Rules Accordion
    const ruleButtons = document.querySelectorAll('.rule-btn');
    ruleButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.chevron-icon');
            const numberBox = btn.querySelector('.number-box');
            const isHidden = content.classList.contains('hidden');

            // Close all others
            document.querySelectorAll('.rule-content').forEach(c => c.classList.add('hidden'));
            document.querySelectorAll('.rule-btn').forEach(b => {
                b.classList.remove('border-[#FDB813]', 'shadow-lg');
                b.classList.add('border-gray-200');
                const chevron = b.querySelector('.chevron-icon');
                if (chevron) chevron.style.transform = 'rotate(0deg)';
                const nb = b.querySelector('.number-box');
                if (nb) {
                    nb.classList.remove('bg-[#FDB813]');
                    nb.classList.add('bg-[#1e3a5f]');
                }
            });

            if (isHidden) {
                content.classList.remove('hidden');
                btn.classList.remove('border-gray-200');
                btn.classList.add('border-[#FDB813]', 'shadow-lg');
                if (icon) icon.style.transform = 'rotate(180deg)';
                if (numberBox) {
                    numberBox.classList.remove('bg-[#1e3a5f]');
                    numberBox.classList.add('bg-[#FDB813]');
                }
            }
        });
    });
}
