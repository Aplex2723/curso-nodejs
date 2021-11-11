import { execOnce } from './functions.js';

gsap.from('#logo', {
    duration: 2.5,
    ease: 'expo.out',
    x: -300
})

gsap.from('.nav-item', {
    duration: 1,
    ease: 'back',
    y: -200,
    stagger: 0.1,
    opacity: 0

})
