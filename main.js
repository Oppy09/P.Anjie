const swiper = new Swiper('.swiper', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000
    },
    breakpoints: {
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 8,
        }
      }
  });

// window.addEventListener("resize",  () => {
//     mySlideShow.reload()
// })
// class SlideShow {
//     n = 1
//     constructor(el) {
//         this.el = el
//         this.sliders = this.el.querySelectorAll(".slider div")
//         console.log(this.sliders)
//         this.arr = this.el.querySelectorAll(".image")
//         this.maxN = this.arr.length
//         this.slider = this.sliders[0]//this.el.querySelector(".slider")
//         this.init()
//         console.log(this.width)
//         var slideI = setInterval(() => {
//             if (this.n < this.maxN + 1 - this.slidePerview) {
//                 this.setN(this.n + 1)
//             }
//             else {
//                 // this.setN(1)
//                 setTimeout(() => {
//                     clearInterval(slideI)
//                 }, 3000 * this.slidePerview)
//             }
//         }, 3000)
//     }
//     init() {
//         console.log(window.innerWidth)
//         this.slidePerview = (window.innerWidth > 600) ? 8 : 1
//         this.arr.forEach((i) => i.style.width = `${100/this.slidePerview}vw`)
//         this.width = this.slider.getBoundingClientRect().width
//     }
//     setN(newN) {
//         this.slider.style.transform = `translateX(-${(newN - 1) * 100/this.slidePerview}vw)`
//         this.n = newN
//     }
//     reload() {
//         this.init()
//     }

// }
// var mySlideShow = new SlideShow(document.querySelector(".slideshow-container"))