// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
            trigger: card,
            start: "top 5%",
            // end: "bottom %",
            scrub: true,
            // markers: true, // Uncomment for debugging
        },
    });
});
