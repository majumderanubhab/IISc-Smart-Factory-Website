document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Generate Circuit Nodes in Hero Section
    const heroBackground = document.getElementById('hero-background');
    if (heroBackground) {
        for (let i = 0; i < 8; i++) {
            const node = document.createElement('div');
            node.className = 'absolute w-2 h-2 bg-[#FDB813] rounded-full animate-node-pulse';

            // Random positioning
            node.style.left = Math.random() * 100 + '%';
            node.style.top = Math.random() * 100 + '%';

            // Random animation duration and delay
            const duration = 2 + Math.random() * 2;
            const delay = Math.random() * 2;

            node.style.animationDuration = `${duration}s`;
            node.style.animationDelay = `${delay}s`;

            heroBackground.appendChild(node);
        }
    }


    // --- Sticky Nav Logic ---
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-white', 'shadow-lg');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('bg-white', 'shadow-lg');
            nav.classList.add('bg-transparent');
        }
    });

    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuBtn.querySelector('i');
    let isMenuOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            // Simple animation
            mobileMenu.style.height = 'auto';
            mobileMenu.style.opacity = '1';
            mobileMenuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.style.height = '0';
            mobileMenu.style.opacity = '0';
            mobileMenuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            mobileMenuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // --- Scroll Progress Bar ---
    const progressBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollCurrent = window.scrollY;
        const scrollPercentage = (scrollCurrent / scrollTotal) * 100;
        progressBar.style.transform = `scaleX(${scrollPercentage / 100})`;
    });

    // --- Scroll Animations (IntersectionObserver) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-12'); // Equivalent to y-50 roughly
                fadeUpObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-700');
        fadeUpObserver.observe(el);
    });

    const fadeRightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-x-0');
                entry.target.classList.remove('opacity-0', '-translate-x-12');
                fadeRightObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-right').forEach(el => {
        el.classList.add('opacity-0', '-translate-x-12', 'transition-all', 'duration-700');
        fadeRightObserver.observe(el);
    });

    const fadeLeftObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-x-0');
                entry.target.classList.remove('opacity-0', 'translate-x-12');
                fadeLeftObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-left').forEach(el => {
        el.classList.add('opacity-0', 'translate-x-12', 'transition-all', 'duration-700');
        fadeLeftObserver.observe(el);
    });

    // --- Rules Accordion ---
    const ruleButtons = document.querySelectorAll('.rule-btn');
    ruleButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.chevron-icon');
            const numberBox = btn.querySelector('.number-box');

            // Toggle current
            const isHidden = content.classList.contains('hidden');

            // Close all others
            document.querySelectorAll('.rule-content').forEach(c => c.classList.add('hidden'));
            document.querySelectorAll('.rule-btn').forEach(b => {
                b.classList.remove('border-[#FDB813]', 'shadow-lg');
                b.classList.add('border-gray-200');
                b.querySelector('.chevron-icon').style.transform = 'rotate(0deg)';
                const nb = b.querySelector('.number-box');
                nb.classList.remove('bg-[#FDB813]');
                nb.classList.add('bg-[#1e3a5f]');
            });

            if (isHidden) {
                content.classList.remove('hidden');
                btn.classList.remove('border-gray-200');
                btn.classList.add('border-[#FDB813]', 'shadow-lg');
                icon.style.transform = 'rotate(180deg)';
                numberBox.classList.remove('bg-[#1e3a5f]');
                numberBox.classList.add('bg-[#FDB813]');
            }
        });
    });

    // --- Partners Section Logos ---
    // Simple fade in staggered not crucial, the IntersectionObserver handles the block fade in.
});
