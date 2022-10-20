import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: .5
});

export * from "gsap";
// export * from "gsap/Draggable";