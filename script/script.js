const t9 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sasfg',
        start:"-100px center",
        end:"bottom center",
        duration: 2,
        markers: true,
        }
    }).fromTo('.sasfg', {y:"20%", opacity:0}, {y:0,opacity:1})

const t1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.qwe',
        start:"-100px center",
        end:"bottom center",
        duration: 2,
        markers: true,
        }
    }).fromTo('.sasfg', {y:"20%", opacity:0}, {y:0,opacity:1})