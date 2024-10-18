import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import Page1 from "./components/Page1";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const frameCount = 118;
  const images = [];
  const imageSeq = { frame: 1 };

  function files(index) {
    const data = `
    https://zelt.app/assets/img/home/hero/sequence/1.webp
https://zelt.app/assets/img/home/hero/sequence/2.webp
https://zelt.app/assets/img/home/hero/sequence/3.webp
https://zelt.app/assets/img/home/hero/sequence/4.webp
https://zelt.app/assets/img/home/hero/sequence/5.webp
https://zelt.app/assets/img/home/hero/sequence/6.webp
https://zelt.app/assets/img/home/hero/sequence/7.webp
https://zelt.app/assets/img/home/hero/sequence/8.webp
https://zelt.app/assets/img/home/hero/sequence/9.webp
https://zelt.app/assets/img/home/hero/sequence/10.webp
https://zelt.app/assets/img/home/hero/sequence/11.webp
https://zelt.app/assets/img/home/hero/sequence/12.webp
https://zelt.app/assets/img/home/hero/sequence/13.webp
https://zelt.app/assets/img/home/hero/sequence/14.webp
https://zelt.app/assets/img/home/hero/sequence/15.webp
https://zelt.app/assets/img/home/hero/sequence/16.webp
https://zelt.app/assets/img/home/hero/sequence/17.webp
https://zelt.app/assets/img/home/hero/sequence/18.webp
https://zelt.app/assets/img/home/hero/sequence/19.webp
https://zelt.app/assets/img/home/hero/sequence/20.webp
https://zelt.app/assets/img/home/hero/sequence/21.webp
https://zelt.app/assets/img/home/hero/sequence/22.webp
https://zelt.app/assets/img/home/hero/sequence/23.webp
https://zelt.app/assets/img/home/hero/sequence/24.webp
https://zelt.app/assets/img/home/hero/sequence/25.webp
https://zelt.app/assets/img/home/hero/sequence/26.webp
https://zelt.app/assets/img/home/hero/sequence/27.webp
https://zelt.app/assets/img/home/hero/sequence/28.webp
https://zelt.app/assets/img/home/hero/sequence/29.webp
https://zelt.app/assets/img/home/hero/sequence/30.webp
https://zelt.app/assets/img/home/hero/sequence/31.webp
https://zelt.app/assets/img/home/hero/sequence/32.webp
https://zelt.app/assets/img/home/hero/sequence/33.webp
https://zelt.app/assets/img/home/hero/sequence/34.webp
https://zelt.app/assets/img/home/hero/sequence/35.webp
https://zelt.app/assets/img/home/hero/sequence/36.webp
https://zelt.app/assets/img/home/hero/sequence/37.webp
https://zelt.app/assets/img/home/hero/sequence/38.webp
https://zelt.app/assets/img/home/hero/sequence/39.webp
https://zelt.app/assets/img/home/hero/sequence/40.webp
https://zelt.app/assets/img/home/hero/sequence/41.webp
https://zelt.app/assets/img/home/hero/sequence/42.webp
https://zelt.app/assets/img/home/hero/sequence/43.webp
https://zelt.app/assets/img/home/hero/sequence/44.webp
https://zelt.app/assets/img/home/hero/sequence/45.webp
https://zelt.app/assets/img/home/hero/sequence/46.webp
https://zelt.app/assets/img/home/hero/sequence/47.webp
https://zelt.app/assets/img/home/hero/sequence/48.webp
https://zelt.app/assets/img/home/hero/sequence/49.webp
https://zelt.app/assets/img/home/hero/sequence/50.webp
https://zelt.app/assets/img/home/hero/sequence/51.webp
https://zelt.app/assets/img/home/hero/sequence/52.webp
https://zelt.app/assets/img/home/hero/sequence/53.webp
https://zelt.app/assets/img/home/hero/sequence/54.webp
https://zelt.app/assets/img/home/hero/sequence/55.webp
https://zelt.app/assets/img/home/hero/sequence/56.webp
https://zelt.app/assets/img/home/hero/sequence/57.webp
https://zelt.app/assets/img/home/hero/sequence/58.webp
https://zelt.app/assets/img/home/hero/sequence/59.webp
https://zelt.app/assets/img/home/hero/sequence/60.webp
https://zelt.app/assets/img/home/hero/sequence/61.webp
https://zelt.app/assets/img/home/hero/sequence/62.webp
https://zelt.app/assets/img/home/hero/sequence/63.webp
https://zelt.app/assets/img/home/hero/sequence/64.webp
https://zelt.app/assets/img/home/hero/sequence/65.webp
https://zelt.app/assets/img/home/hero/sequence/66.webp
https://zelt.app/assets/img/home/hero/sequence/67.webp
https://zelt.app/assets/img/home/hero/sequence/68.webp
https://zelt.app/assets/img/home/hero/sequence/69.webp
https://zelt.app/assets/img/home/hero/sequence/70.webp
https://zelt.app/assets/img/home/hero/sequence/71.webp
https://zelt.app/assets/img/home/hero/sequence/72.webp
https://zelt.app/assets/img/home/hero/sequence/73.webp
https://zelt.app/assets/img/home/hero/sequence/74.webp
https://zelt.app/assets/img/home/hero/sequence/75.webp
https://zelt.app/assets/img/home/hero/sequence/76.webp
https://zelt.app/assets/img/home/hero/sequence/77.webp
https://zelt.app/assets/img/home/hero/sequence/78.webp
https://zelt.app/assets/img/home/hero/sequence/79.webp
https://zelt.app/assets/img/home/hero/sequence/80.webp
https://zelt.app/assets/img/home/hero/sequence/81.webp
https://zelt.app/assets/img/home/hero/sequence/82.webp
https://zelt.app/assets/img/home/hero/sequence/83.webp
https://zelt.app/assets/img/home/hero/sequence/84.webp
https://zelt.app/assets/img/home/hero/sequence/85.webp
https://zelt.app/assets/img/home/hero/sequence/86.webp
https://zelt.app/assets/img/home/hero/sequence/87.webp
https://zelt.app/assets/img/home/hero/sequence/88.webp
https://zelt.app/assets/img/home/hero/sequence/89.webp
https://zelt.app/assets/img/home/hero/sequence/90.webp
https://zelt.app/assets/img/home/hero/sequence/91.webp
https://zelt.app/assets/img/home/hero/sequence/92.webp
https://zelt.app/assets/img/home/hero/sequence/93.webp
https://zelt.app/assets/img/home/hero/sequence/94.webp
https://zelt.app/assets/img/home/hero/sequence/95.webp
https://zelt.app/assets/img/home/hero/sequence/96.webp
https://zelt.app/assets/img/home/hero/sequence/97.webp
https://zelt.app/assets/img/home/hero/sequence/98.webp
https://zelt.app/assets/img/home/hero/sequence/99.webp
https://zelt.app/assets/img/home/hero/sequence/100.webp
https://zelt.app/assets/img/home/hero/sequence/101.webp
https://zelt.app/assets/img/home/hero/sequence/102.webp
https://zelt.app/assets/img/home/hero/sequence/103.webp
https://zelt.app/assets/img/home/hero/sequence/104.webp
https://zelt.app/assets/img/home/hero/sequence/105.webp
https://zelt.app/assets/img/home/hero/sequence/106.webp
https://zelt.app/assets/img/home/hero/sequence/107.webp
https://zelt.app/assets/img/home/hero/sequence/108.webp
https://zelt.app/assets/img/home/hero/sequence/109.webp
https://zelt.app/assets/img/home/hero/sequence/110.webp
https://zelt.app/assets/img/home/hero/sequence/111.webp
https://zelt.app/assets/img/home/hero/sequence/112.webp
https://zelt.app/assets/img/home/hero/sequence/113.webp
https://zelt.app/assets/img/home/hero/sequence/114.webp
https://zelt.app/assets/img/home/hero/sequence/115.webp
https://zelt.app/assets/img/home/hero/sequence/116.webp
https://zelt.app/assets/img/home/hero/sequence/117.webp
https://zelt.app/assets/img/home/hero/sequence/118.webp
    `;
    return data.split("\n")[index];
  }

  const render = () => {
    const context = canvasRef.current.getContext("2d");
    scaleImage(images[imageSeq.frame], context);
  };

  const scaleImage = (img, ctx) => {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useEffect(() => {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    // ScrollTrigger proxy setup for Locomotive
    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollContainerRef.current.style.transform
        ? "transform"
        : "fixed",
    });

    // GSAP and ScrollTrigger animation for images
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.15,
        trigger: canvasRef.current,
        start: "top top",
        end: "300% top",
        scroller: scrollContainerRef.current,
      },
      onUpdate: render,
    });

    // Load images for animation
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    // Call the render function when the first image is loaded
    images[1].onload = render;

    // ScrollTrigger pinning
    ScrollTrigger.create({
      trigger: canvasRef.current,
      pin: true,
      scroller: scrollContainerRef.current,
      start: "top top",
      end: "300% top",
    });

    // Refresh ScrollTrigger and Locomotive Scroll
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Clean up on unmount
    return () => {
      locoScroll.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Resize event for canvas
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", resizeCanvas);

    // Initial canvas sizing
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images]);

  return (
    <div>
      <Toaster position="top-center" richColors duration={3000} />
      <Navbar />
      <div
        id="main"
        className="relative overflow-hidden"
        ref={scrollContainerRef}>
        <div id="page" className="relative w-screen h-screen">
          <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl font-medium font-playfair text-center z-10">
            <Page1 />
          </div>

          <canvas ref={canvasRef}></canvas>
        </div>
        <div
          id="page2"
          className="relative w-screen h-screen bg-transparent"></div>

        <div
          id="page1"
          className="relative w-screen h-screen bg-transparent flex flex-col items-center justify-center">
          <h1 className="w-max text-center text-5xl md:text-7xl font-medium z-10 font-playfair">
            Crafting Digital <br /> Experiences
          </h1>
          <h4 className="w-[80%] md:w-[40%] text-center text-lg md:text-xl font-light z-10 mt-2">
            I build responsive web applications using modern technologies to
            deliver dynamic solutions.
          </h4>
        </div>
        <div
          id="page3"
          className="relative w-screen h-screen bg-transparent z-10"></div>
        <div id="about" className="relative text-center bg-[#FFFFFF]">
          <About />
        </div>
        <div id="skills" className="relative text-center bg-[#FFFFFF] ">
          <Skills />
        </div>
        <div id="portfolio" className="relative text-center bg-[#FFFFFF] ">
          <Portfolio />
        </div>
        <div id="testimonials" className="relative text-center bg-[#FFFFFF] ">
          <Testimonials />
        </div>
        <div id="contact" className="relative text-center bg-[#FFFFFF] ">
          <ContactForm />
        </div>
        <div id="footer" className="relative text-center bg-[#FFFFFF] ">
          <Footer />
        </div>
        {/* <div id="about" className="relative text-center bg-[#E3DDD8] ">
          <About />
        </div>
        <div id="skills" className="relative text-center bg-[#E3DDD8] ">
          <Skills />
        </div>
        <div id="portfolio" className="relative text-center bg-[#E3DDD8] ">
          <Portfolio />
        </div>
        <div id="testimonials" className="relative text-center bg-[#E3DDD8] ">
          <Testimonials />
        </div>
        <div id="contact" className="relative text-center bg-[#E3DDD8] ">
          <ContactForm />
        </div>
        <div id="footer" className="relative text-center bg-[#E3DDD8] ">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default App;
