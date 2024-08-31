const nav = document.querySelector(".box");
const header = document.querySelector("header");
const navTrigger = document.getElementById("navTrigger");
const mobilenavExpand = document.getElementById("mobilenavExpand");

let previousScroll = window.pageYOffset;
let originalHeight = mobilenavExpand ? mobilenavExpand.scrollHeight : 0; // Get the scrollHeight initially

// Update height when the page is resized (to handle dynamic content changes)
if (mobilenavExpand) {
  window.addEventListener("resize", () => {
    originalHeight = mobilenavExpand.scrollHeight;
  });

  // Initialize the height to 0 if h-0 class is present
  if (mobilenavExpand.classList.contains("h-0")) {
    mobilenavExpand.style.height = "0";
  }
}

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset;

  if (currentScroll < previousScroll) {
    // Scroll ke atas
    gsap.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  } else if (currentScroll > previousScroll && currentScroll > 500) {
    // Scroll ke bawah setelah offset 500px
    gsap.to(header, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.out",
    });
  }

  previousScroll = currentScroll;

  // Collapse the mobile navigation when scrolling down
  if (currentScroll > 50) {
    nav.classList.add("expanded");

    if (mobilenavExpand && !mobilenavExpand.classList.contains("h-0")) {
      gsap.to(mobilenavExpand, {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          mobilenavExpand.classList.add("h-0");
          mobilenavExpand.parentNode.classList.remove("bg-secondary-color");
        },
      });
    }
  } else {
    nav.classList.remove("expanded");
  }
});

if (navTrigger && mobilenavExpand) {
  navTrigger.addEventListener("click", () => {
    if (mobilenavExpand.classList.contains("h-0")) {
      // Expand
      mobilenavExpand.classList.remove("h-0");
      mobilenavExpand.parentNode.classList.add("bg-secondary-color");
      gsap.to(mobilenavExpand, {
        height: originalHeight,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // Collapse
      gsap.to(mobilenavExpand, {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          mobilenavExpand.classList.add("h-0");
          mobilenavExpand.parentNode.classList.remove("bg-secondary-color");
        },
      });
    }
  });
}

const mm = gsap.matchMedia();

mm.add(
  {
    isMobile: "(min-width: 360px) and (max-width: 501px)",
    isTablet: "(min-width: 501px) and (max-width: 1023px)",
    isLaptop: "(min-width: 1440px) and (max-width: 1580px)",
    isDesktop: "(min-width: 1440px) and (max-width: 1920px)",
  },
  (context) => {
    const { isDesktop, isLaptop, isTablet } = context.conditions;

    // Properly select the element based on the context
    const selector = isLaptop || isDesktop ? ".toppings-content" : isTablet ? ".toppings-content .right-content" : ".toppings-content .right-content";

    // Create a timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#toppings",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    // Add the first animation to the timeline
    tl.to(selector, {
      xPercent: isLaptop ? -72.5 : isDesktop ? -74.5 : isTablet ? -190 : -175,
      duration: 1,
      ease: "none",
    });

    tl.to(
      ".toppings-content .right-content .img-wrap",
      {
        skewY: 3,
        borderRadius: 40,
        scale: 0.9,
        duration: 1.5,
        ease: "none",
      },
      0
    );
  }
);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "top 80%",
      end: "top center",
      scrub: 1,
    },
  })
  .from(".wrapper-address .Wrap", {
    opacity: 0,
    y: 200,
    duration: 1.5,

    ease: "none",
  })
  .from(
    ".sosial-media",
    {
      opacity: 0,
      scale: 0,
      y: 200,
      duration: 1.5,
      ease: "none",
    },
    "-=1.5"
  ); // Adjust this overlap as needed

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#more-menu",
      start: "top bottom",
      end: "bottom 80%",
      scrub: 1,
      // toggleActions: "play none none reverse",
      // markers: true,
    },
  })
  .from(".headline-content h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".headline-content hr",
    {
      width: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .from(
    ".headline-content h6",
    {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .from(
    ".coffee img",
    {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
    },
    "-=0.5"
  )
  .from(
    ".coffee .desc-content",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .from(
    ".bubble .desc-content",
    {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .from(
    ".bubble img",
    {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
    },
    "-=0.5"
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#custom-order",
      start: "top 80%",
      end: "bottom 30%",
      scrub: 1,
    },
  })
  .from(".title h5", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
  });
