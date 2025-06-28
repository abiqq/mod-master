// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero-section h1", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
});
gsap.from(".hero-section p", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.4
});
gsap.from(".btn-primary", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.6
});

// Tutorial Section Animation
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".tutorial-section",
        start: "top 80%",
    },
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2
});
gsap.from(".alert", {
    scrollTrigger: {
        trigger: ".tutorial-section",
        start: "top 80%",
    },
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.4
});

// Sidebar Toggle
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
}
