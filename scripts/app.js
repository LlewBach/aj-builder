// function splitScroll() {
//   const controller = new ScrollMagic.Controller();

//   new ScrollMagic.Scene({
//     duration: '200%',
//     triggerElement: '.about-title',
//     triggerHook: 0
//   })
//     .setPin('.about-title')
//     .addIndicators()
//     .addTo(controller)
// }

// splitScroll();

const controller = new ScrollMagic.Controller();

const firstScene = new ScrollMagic.Scene({
  triggerElement: 'h2',
  triggerHook: 0.5,
  duration: '90%'
})
  .setPin('h2')
  .addIndicators({
    name: 'first'
  })
  .addTo(controller);

// const controller = new ScrollMagic.Controller();

// const otherScene = new ScrollMagic.Scene({
//   triggerElement: '.about-title',
//   triggerHook: 0.4,
//   duration: '30%'
// })
//   .setPin('.about-title')
//   .addIndicators({
//     name: 'other scene',
//     colorTrigger: 'purple'
//   })
//   .addTo(controller);

// const ourScene = new ScrollMagic.Scene({
//   triggerElement: '#description1',
//   triggerHook: 0.5
// })
//   .setClassToggle('#description1', 'fade-in')
//   .addIndicators({
//     name: 'fade scene',
//     colorTrigger: 'black',
//     colorStart: '#75C695',
//     colorEnd: 'pink'
//   })
//   .addTo(controller);