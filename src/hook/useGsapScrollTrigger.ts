import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// useGsapScrollTrigger Hook
export const useGsapScrollTrigger = (
  targetRef: React.RefObject<HTMLElement>,
  animationType: "to" | "from" | "fromTo" | "timeline",
  animationOptions: gsap.TweenVars | gsap.TimelineVars,
  scrollTriggerOptions: ScrollTrigger.Vars = {}
) => {
  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    let animation: gsap.core.Tween | gsap.core.Timeline;

    const scrollTriggerConfig = {
      ...scrollTriggerOptions,
      onUpdate: (self: ScrollTrigger) => {
        scrollTriggerOptions.onUpdate?.(self);
      },
    };

    if (animationType === "to") {
      animation = gsap.to(element, {
        ...animationOptions,
        scrollTrigger: scrollTriggerConfig,
      });
    } else if (animationType === "from") {
      animation = gsap.from(element, {
        ...animationOptions,
        scrollTrigger: scrollTriggerConfig,
      });
    } else if (animationType === "fromTo") {
      const { fromVars, toVars } = animationOptions as {
        fromVars: gsap.TweenVars;
        toVars: gsap.TweenVars;
      };
      animation = gsap.fromTo(element, fromVars, {
        ...toVars,
        scrollTrigger: scrollTriggerConfig,
      });
    } else if (animationType === "timeline") {
      const timeline = gsap.timeline({
        scrollTrigger: scrollTriggerConfig,
      });
      (animationOptions as gsap.TimelineVars[]).forEach((step) =>
        timeline.to(element, step)
      );
      animation = timeline;
    }

    const trigger = ScrollTrigger.create(scrollTriggerConfig);

    return () => {
      animation.kill();
      trigger.kill();
    };
  }, [targetRef, animationOptions, scrollTriggerOptions, animationType]);
};
