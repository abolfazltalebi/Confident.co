import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // مدت زمان انیمیشن
      lerp: 0.1,     // ضریب هموارسازی (0.0 تا 1.0)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // تابع easing
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
