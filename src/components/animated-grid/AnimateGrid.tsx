import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";
import Lenis from "@studio-freight/lenis";
import "./AnimatedGrid.css";

gsap.registerPlugin(Flip);

// TEMP DATA (replace with logos later)
const ROWS = [
  Array(7).fill(0),
  Array(7).fill(0),
  Array(7).fill(0),
  Array(7).fill(0),
  Array(7).fill(0),
]
const AnimatedGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const enterRef = useRef<HTMLDivElement>(null);
  const fullviewRef = useRef<HTMLDivElement>(null);
  console.log("from aniamtonsssss ")

  useEffect(() => {
    const grid = gridRef.current;
    const content = contentRef.current;
    const enterButton = enterRef.current;
    const fullview = fullviewRef.current;

    if (!grid || !content || !enterButton || !fullview) return;

    const gridRows = grid.querySelectorAll<HTMLDivElement>(".row");
    if (!gridRows.length) return;

    let winsize = { width: window.innerWidth, height: window.innerHeight };
    let mousepos = { x: winsize.width / 2, y: winsize.height / 2 };

    window.addEventListener("resize", () => {
      winsize = { width: window.innerWidth, height: window.innerHeight };
    });

    const numRows = gridRows.length;
    const middleRowIndex = Math.floor(numRows / 2);
    const middleRow = gridRows[middleRowIndex];
    const middleRowItems = middleRow.querySelectorAll(".row__item");
    const middleRowItemIndex = Math.floor(middleRowItems.length / 2);

    const middleRowItemInner =
      middleRowItems[middleRowItemIndex].querySelector<HTMLDivElement>(
        ".row__item-inner"
      )!;

    const middleRowItemInnerImage =
      middleRowItemInner.querySelector<HTMLDivElement>(".row__item-img")!;

    middleRowItemInnerImage.classList.add("row__item-img--large");

    const renderedStyles = Array.from({ length: numRows }, (_, index) => {
      const dist = Math.abs(index - middleRowIndex);
      return {
        amt: Math.max(0.1 - dist * 0.03, 0.05),
        x: { prev: 0, curr: 0 },
        contrast: { prev: 100, curr: 100 },
        brightness: { prev: 100, curr: 100 },
      };
    });

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const mapX = () =>
      (((mousepos.x / winsize.width) * 2 - 1) * 40 * winsize.width) / 100;

    const mapContrast = () => {
      const t = Math.abs((mousepos.x / winsize.width) * 2 - 1);
      return 100 - t * t * (100 - 330);
    };

    const mapBrightness = () => {
      const t = Math.abs((mousepos.x / winsize.width) * 2 - 1);
      return 100 - t * t * (100 - 15);
    };

    const onMouseMove = (e: MouseEvent) => {
      mousepos.x = e.clientX;
      mousepos.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    let rafId: number;
    const render = () => {
      gridRows.forEach((row, i) => {
        const s = renderedStyles[i];
        s.x.curr = mapX();
        s.contrast.curr = mapContrast();
        s.brightness.curr = mapBrightness();

        s.x.prev = lerp(s.x.prev, s.x.curr, s.amt);
        s.contrast.prev = lerp(s.contrast.prev, s.contrast.curr, s.amt);
        s.brightness.prev = lerp(s.brightness.prev, s.brightness.curr, s.amt);

        gsap.set(row, {
          x: s.x.prev,
          filter: `contrast(${s.contrast.prev}%) brightness(${s.brightness.prev}%)`,
        });
      });

      rafId = requestAnimationFrame(render);
    };

    render();

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
            onComplete: () => cancelAnimationFrame(rafId),
          })
        )
        .to(grid, { opacity: 0.01, duration: 0.9 }, 0)
        .to(middleRowItemInnerImage, { scale: 1.2, duration: 3 }, "<-=0.4")
        .to(content, { y: "var(--trans-content)", duration: 0.9 });

      enterButton.classList.add("hidden");
      document.body.classList.remove("noscroll");
    };

    enterButton.addEventListener("click", enterFullview);

    const lenis = new Lenis({ lerp: 0.15 });
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      enterButton.removeEventListener("click", enterFullview);
    };
  }, []);

  const IMAGES = [
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/node.js/339933",
  "https://cdn.simpleicons.org/typescript/3178C6",
  "https://cdn.simpleicons.org/mongodb/47A248",
  "https://cdn.simpleicons.org/docker/2496ED",
  "https://cdn.simpleicons.org/amazonaws/FF9900",
  "https://cdn.simpleicons.org/redis/DC382D",
];


  return (
    <main>
      <section className="intro">
      <div className="grid" ref={gridRef}>
  {ROWS.map((row, rowIndex) => (
    <div className="row" key={rowIndex}>
      {row.map((_, itemIndex) => (
        <div className="row__item" key={itemIndex}>
          <div className="row__item-inner">
            <div
              className="row__item-img"
              style={{
                backgroundImage: `url(${IMAGES[itemIndex % IMAGES.length]})`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  ))}
</div>


        <div className="fullview" ref={fullviewRef}></div>

        <div className="enter" ref={enterRef}>
          <span>Explore</span>
        </div>
      </section>

      <section className="content" ref={contentRef}>
        {/* your existing content */}
      </section>
    </main>
  );
};

export default AnimatedGrid;
