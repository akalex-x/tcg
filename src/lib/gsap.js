import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger,MorphSVGPlugin);

gsap.defaults({
  duration: .5
});

export * from "gsap";
// export * from "gsap/Draggable";