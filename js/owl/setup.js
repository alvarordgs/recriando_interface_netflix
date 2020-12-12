$('.owl-carousel').owlCarousel({ //função do jquery owl que faz acontecer o rolo de filmes e series
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) 