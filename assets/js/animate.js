gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 900px)": function () {
    let home = new gsap.timeline();

    home.from("header", {
      opacity: 0,
      ease: "Power1.easeOut",
    });

    let bottle = gsap.timeline({
      scrollTrigger: {
        trigger: ".present-sec",
        start: "-40%",
        end: "20%",
        scrub: true,
        duration: 3,
      },
    });

    bottle.from(".present-images .present-image-two", { y: 100, opacity: 0 });

    bottle.from(".ftv-branding-two", { x: 100, opacity: 0 });

    let hidetitle = gsap.timeline({
      scrollTrigger: {
        trigger: ".introduction-sec",
        start: "-10%",
        end: "40%",
        scrub: true,
        pin: true,
        duration: 3,
      },
    });

    hidetitle.from(".introduction-sec", { x: 100, opacity: 0 });

    let fvodka = gsap.timeline({
        scrollTrigger: {
          trigger: ".video-overlapping-section",
          start: "-10%",
          end: "40%",
          scrub: true,
          pin: true,
          duration: 3,
        },
      });
  
      fvodka.from(".text-overlap", { x: 100, opacity: 0 });
      let revealContainers = document.querySelectorAll(".reveal");

      revealContainers.forEach((container) => {
        let image = container.querySelector("video");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset",
          },
        });
  
        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
          xPercent: -100,
          ease: Power2.out,
        });
        tl.from(image, 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: Power2.out,
        });
      });

      let drink = gsap.timeline({
        scrollTrigger: {
          trigger: ".versatile-sec",
          start: "-10%",
          end: "40%",
          scrub: true,
          pin: true,
          stagger: 0.2,
        },
      });
  
      
      drink.from(".v-img-full-circle", { x: 100, opacity: 0 });
      drink.from(".v-img-bottle", { y: 100, opacity: 0 });
    },
});
