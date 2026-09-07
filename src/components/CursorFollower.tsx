import { useEffect, useRef } from "react";

function randOffset() {
  return (Math.random() - 0.5) * 28;
}

export default function CursorFollower() {
  const elRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const vel = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: -100, y: -100 });
  const drift = useRef({ x: randOffset(), y: randOffset() });
  const driftTarget = useRef({ x: randOffset(), y: randOffset() });
  const rafRef = useRef<number>(0);
  const lastDriftTime = useRef(0);
  const isClickable = useRef(false);

  useEffect(() => {
    const CLICKABLE = new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]);

    function checkClickable(x: number, y: number) {
      let el = document.elementFromPoint(x, y) as Element | null;
      while (el && el !== document.body) {
        if (
          CLICKABLE.has(el.tagName) ||
          el.getAttribute("role") === "button" ||
          (el as HTMLElement).style?.cursor === "pointer" ||
          window.getComputedStyle(el).cursor === "pointer"
        ) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      isClickable.current = checkClickable(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", onMove);

    const STIFFNESS = 0.028;
    const DAMPING = 0.82;
    const MAX_SPEED = 10;
    const DRIFT_LERP = 0.012;
    const DRIFT_INTERVAL = 1800;

    const tick = (now: number) => {
      // Refresh drift target periodically
      if (now - lastDriftTime.current > DRIFT_INTERVAL) {
        driftTarget.current = { x: randOffset(), y: randOffset() };
        lastDriftTime.current = now;
      }

      // Smoothly interpolate drift toward target
      drift.current.x += (driftTarget.current.x - drift.current.x) * DRIFT_LERP;
      drift.current.y += (driftTarget.current.y - drift.current.y) * DRIFT_LERP;

      const targetX = mouse.current.x + drift.current.x;
      const targetY = mouse.current.y + drift.current.y;

      const dx = targetX - pos.current.x;
      const dy = targetY - pos.current.y;

      // Apply spring force (acceleration)
      vel.current.x += dx * STIFFNESS;
      vel.current.y += dy * STIFFNESS;

      // Damping (momentum friction)
      vel.current.x *= DAMPING;
      vel.current.y *= DAMPING;

      // Cap speed
      const speed = Math.hypot(vel.current.x, vel.current.y);
      if (speed > MAX_SPEED) {
        vel.current.x = (vel.current.x / speed) * MAX_SPEED;
        vel.current.y = (vel.current.y / speed) * MAX_SPEED;
      }

      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      if (elRef.current) {
        elRef.current.style.transform = `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`;
        elRef.current.style.backgroundColor = isClickable.current ? "#0a0a0a" : "#1a5cff";
        elRef.current.style.transition = "background-color 0.35s ease";
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={elRef}
      className="fixed top-0 left-0 w-3 h-3 bg-[#1a5cff] pointer-events-none z-[9999]"
      style={{ willChange: "transform" }}
    />
  );
}
