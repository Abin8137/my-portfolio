import { useEffect } from "react";
import "./cursor.css";

const Cursor = () => {
  useEffect(() => {
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);

    const move = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      dot.remove();
    };
  }, []);

  return null;
};

export default Cursor;
