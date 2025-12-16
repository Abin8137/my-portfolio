import { useEffect, useRef } from "react";
import gsap from "gsap";
// import Flip from "gsap/Flip";
import Lenis from "@studio-freight/lenis";
import "./AnimatedGrid.css";

// gsap.registerPlugin(Flip);

const AnimatedGrid = () => {
  const bodyRef = useRef<HTMLBodyElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const enterRef = useRef<HTMLDivElement | null>(null);
  const fullviewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const body = document.body;
    const grid = gridRef.current!;
    const content = contentRef.current!;
    const enterButton = enterRef.current!;
    const fullview = fullviewRef.current!;
    const gridRows = grid.querySelectorAll<HTMLDivElement>(".row");

    let winsize = { width: window.innerWidth, height: window.innerHeight };
    let mousepos = { x: winsize.width / 2, y: winsize.height / 2 };

    const config = {
      translateX: true,
      skewX: false,
      contrast: true,
      scale: false,
      brightness: true
    };

    const numRows = gridRows.length;
    const middleRowIndex = Math.floor(numRows / 2);
    const middleRow = gridRows[middleRowIndex];
    const middleRowItems = middleRow.querySelectorAll(".row__item");
    const middleRowItemIndex = Math.floor(middleRowItems.length / 2);

    const middleRowItemInner = middleRowItems[
      middleRowItemIndex
    ].querySelector<HTMLDivElement>(".row__item-inner")!;

    const middleRowItemInnerImage =
      middleRowItemInner.querySelector<HTMLDivElement>(".row__item-img")!;

    middleRowItemInnerImage.classList.add("row__item-img--large");

    const baseAmt = 0.1;
    const minAmt = 0.05;
    const maxAmt = 0.1;

    const renderedStyles = Array.from({ length: numRows }, (_, index) => {
      const distance = Math.abs(index - middleRowIndex);
      const amt = Math.max(baseAmt - distance * 0.03, minAmt);
      const scaleAmt = Math.min(baseAmt + distance * 0.03, maxAmt);

      return {
        amt,
        scaleAmt,
        translateX: { previous: 0, current: 0 },
        contrast: { previous: 100, current: 100 },
        brightness: { previous: 100, current: 100 }
      };
    });

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const getMousePos = (e: MouseEvent | Touch) => ({
      x: "pageX" in e ? e.pageX : (e as Touch).clientX,
      y: "pageY" in e ? e.pageY : (e as Touch).clientY
    });

    const updateMouse = (e: MouseEvent | Touch) => {
      const pos = getMousePos(e);
      mousepos.x = pos.x;
      mousepos.y = pos.y;
    };

    const mapX = () =>
      (((mousepos.x / winsize.width) * 2 - 1) * 40 * winsize.width) / 100;

    const mapContrast = () => {
      const t = Math.abs((mousepos.x / winsize.width) * 2 - 1);
      return 100 - Math.pow(t, 2) * (100 - 330);
    };

    const mapBrightness = () => {
      const t = Math.abs((mousepos.x / winsize.width) * 2 - 1);
      return 100 - Math.pow(t, 2) * (100 - 15);
    };

    let rafId: number;

    const render = () => {
      gridRows.forEach((row, index) => {
        const style = renderedStyles[index];

        style.translateX.current = mapX();
        style.contrast.current = mapContrast();
        style.brightness.current = mapBrightness();

        style.translateX.previous = lerp(
          style.translateX.previous,
          style.translateX.current,
          style.amt
        );

        style.contrast.previous = lerp(
          style.contrast.previous,
          style.contrast.current,
          style.amt
        );

        style.brightness.previous = lerp(
          style.brightness.previous,
          style.brightness.current,
          style.amt
        );

        gsap.set(row, {
          x: style.translateX.previous,
          filter: `contrast(${style.contrast.previous}%) brightness(${style.brightness.previous}%)`
        });
      });

      rafId = requestAnimationFrame(render);
    };

    const enterFullview = () => {
      const flipstate = Flip.getState(middleRowItemInner);
      fullview.appendChild(middleRowItemInner);

      gsap
        .timeline()
        .add(
          Flip.from(flipstate, {
            duration: 0.9,
            ease: "power4",
            absolute: true,
            onComplete: () => cancelAnimationFrame(rafId)
          })
        )
        .to(grid, { opacity: 0.01, duration: 0.9 }, 0)
        .to(middleRowItemInnerImage, { scale: 1.2, duration: 3 }, "<-=0.4")
        .to(content, { y: "var(--trans-content)", duration: 0.9 });

      enterButton.classList.add("hidden");
      body.classList.remove("noscroll");
    };

    const lenis = new Lenis({ lerp: 0.15 });
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("touchmove", (e) => updateMouse(e.touches[0]));
    enterButton.addEventListener("click", enterFullview);

    render();

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("touchmove", () => {});
      enterButton.removeEventListener("click", enterFullview);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main>
      <section className="intro">
        <div className="grid" ref={gridRef}>
          {/* KEEP YOUR ROW STRUCTURE HERE */}
        </div>

        <div className="fullview" ref={fullviewRef}></div>
        <div className="enter" ref={enterRef}>
          <span>Explore</span>
        </div>
      </section>

      <section className="content" ref={contentRef}>
        {/* your content */}
      </section>
    </main>
  );
};

export default AnimatedGrid;
