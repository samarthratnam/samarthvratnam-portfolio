import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MoveController({ steps, onPlyChange, resetSignal, children }) {
  const stageRef = useRef(null);
  const contentRef = useRef(null);
  const triggerRef = useRef(null);
  const onPlyChangeRef = useRef(onPlyChange);
  const hasMountedRef = useRef(false);

  onPlyChangeRef.current = onPlyChange;

  useLayoutEffect(() => {
    if (!stageRef.current || !contentRef.current) {
      return undefined;
    }

    const context = gsap.context(() => {
      triggerRef.current = ScrollTrigger.create({
        trigger: stageRef.current,
        start: "top top",
        end: () => `+=${Math.max(steps, 1) * window.innerHeight * 0.9}`,
        pin: contentRef.current,
        scrub: 0.18,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // Every snapped progress slice represents exactly one ply.
        snap:
          steps > 0
            ? {
                snapTo: (progress) => Math.round(progress * steps) / steps,
                duration: { min: 0.12, max: 0.25 },
                ease: "power1.inOut",
              }
            : false,
        onUpdate: (self) => {
          const nextPly = Math.max(
            0,
            Math.min(steps, Math.round(self.progress * steps)),
          );

          onPlyChangeRef.current(nextPly);
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, stageRef);

    return () => {
      triggerRef.current?.kill();
      triggerRef.current = null;
      context.revert();
    };
  }, [steps]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (!stageRef.current) {
      return;
    }

    const top = stageRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
    onPlyChangeRef.current(0);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, [resetSignal]);

  return (
    <section className="scroll-stage" ref={stageRef}>
      <div className="scroll-shell" ref={contentRef}>
        {children}
      </div>
    </section>
  );
}

export default MoveController;
