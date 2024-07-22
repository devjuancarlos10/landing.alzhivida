window.onload = function() {
    window.scrollTo(0, 0);
};

let background_nav = document.getElementsByClassName("background_nav");
let link_nav = document.getElementsByClassName("link_nav");

for(let i=0; i<background_nav.length; i++){
    link_nav[i].addEventListener("mouseover", ()=>{
        background_nav[i].classList.add("background_nav_a1");
        background_nav[i].classList.remove("background_nav_a2");
    })

    link_nav[i].addEventListener("mouseout", ()=>{
        background_nav[i].classList.add("background_nav_a2");
        background_nav[i].classList.remove("background_nav_a1");
    })
}



let currentSection = 0;
        const sections = document.querySelectorAll('.section');
        const totalSections = sections.length;

        window.addEventListener('wheel', function(event) {
            if (event.deltaY > 0) {
                // Scroll down
                currentSection = Math.min(currentSection + 1, totalSections - 1);
            } else {
                // Scroll up
                currentSection = Math.max(currentSection - 1, 0);
            }
            sections[currentSection].scrollIntoView({ behavior: 'smooth' });
        });


// Obtener el contenedor principal y todos los enlaces internos
const container = document.getElementById("html");
const internalLinks = document.querySelectorAll('a[href^="#"]');

// Desactivar scroll-snap cuando se hace clic en un enlace interno
internalLinks.forEach(link => {
  link.addEventListener('click', () => {
    container.style.scrollSnapType = 'none'; // Desactivar scroll-snap
    setTimeout(() => {
      container.style.scrollSnapType = 'y mandatory'; // Volver a activar scroll-snap después de un breve intervalo
    }, 1000); // Ajusta el tiempo de espera según sea necesario para asegurar que el desplazamiento se complete correctamente
  });
});


//INTERSECTION OBSERVER PARA LA BARRA DE NAVEGACIÓN 
// Seleccionamos el elemento que queremos observar
const nav = document.querySelector('.nav');
let section_1  = document.querySelector('.section__1');
let ancles_nav = document.querySelectorAll(".ancle_nav");
let icon_nav = document.querySelector(".icono_nav");
let btn_register = document.querySelector(".btn_register");
// Creamos una instancia de IntersectionObserver
const observer = new IntersectionObserver(entries => {
  // entries es un array que contiene cada entrada de los elementos observados
  entries.forEach(entry => {
    // Si el elemento está dentro del viewport
    if (entry.isIntersecting) {
      // Agregamos una clase al elemento para cambiar su estilo
        nav.style.backgroundColor = "#fff";
        ancles_nav.forEach(ancle_nav =>{
            ancle_nav.style.color = "#7926ff";
        })
        icon_nav.style.filter = "brightness(1)";
        btn_register.style.borderColor = "#7926ff";
        btn_register.style.color = "#7926ff";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.backgroundColor = "#7926ff";
            btn_register.style.color = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#7926ff";
            btn_register.style.backgroundColor = "#fff";
        })
      entry.target.classList.add('is-visible');
    } else {
      // Si el elemento ya no está dentro del viewport, removemos la clase
        nav.style.backgroundColor = "transparent";
        ancles_nav.forEach(ancle_nav =>{
        ancle_nav.style.color = "#fff";
        })
        icon_nav.style.filter = "brightness(10)";
        btn_register.style.borderColor = "#fff";
        btn_register.style.color = "#fff";
        btn_register.style.backgroundColor = "transparent";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.color = "#00000088";
            btn_register.style.backgroundColor = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#fff";
            btn_register.style.backgroundColor = "transparent";
        })
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  // Opciones para la instancia del IntersectionObserver
  threshold: 0.5 // Configuramos el punto de intersección en 0.5 (50%)
});

// Observamos el elemento
observer.observe(section_1);



//ESTILOS A LA PARTE DEL VIDEO DE LA APP
let box_video_app = document.querySelector(".box_video_app");
let btn_play_pause_video = document.querySelector(".btn_play_pause");
let btn_control_video = document.querySelectorAll(".btn_control_video");
let video = document.querySelector(".video")
let background_video = document.querySelector(".background_video");

btn_control_video[1].style.display = "none";

btn_play_pause_video.addEventListener("mouseover", ()=>{
    btn_play_pause_video.style.backgroundColor="#fff";
    for(let i=0; i<btn_control_video.length; i++){
        btn_control_video[i].style.filter = "brightness(0)";
    }
})

btn_play_pause_video.addEventListener("mouseout", ()=>{
    btn_play_pause_video.style.backgroundColor="transparent";
    for(let i=0; i<btn_control_video.length; i++){
        btn_control_video[i].style.filter = "brightness(1)";
    }
})

//reproduciendo video
let isPlay = false;
btn_play_pause_video.addEventListener("click", ()=>{
    if(isPlay){
        btn_control_video[0].style.display = "block";
        btn_control_video[1].style.display = "none";
        video.pause();
        isPlay = false;
    }else{
        btn_control_video[1].style.display = "block";
        btn_control_video[0].style.display = "none";
        background_video.style.display = "none";
        video.style.filter = "brightness(1)";
        video.play();
        isPlay = true;
    }
})

box_video_app.addEventListener("mouseover", ()=>{
    if(isPlay){
        video.style.filter = "brightness(.7)";
        background_video.style.display = "flex";
    }
})

box_video_app.addEventListener("mouseout", ()=>{
    if(isPlay){
        video.style.filter = "brightness(1)";
        background_video.style.display = "none";
    }else{
        video.style.filter = "brightness(.7)";
    }
})


//INTERSECTION OBSERVER PARA LA BARRA DE NAVEGACIÓN 
// Seleccionamos el elemento que queremos observar
let section_6  = document.querySelector('.section__6');
// Creamos una instancia de IntersectionObserver
const observer4 = new IntersectionObserver(entries => {
  // entries es un array que contiene cada entrada de los elementos observados
  entries.forEach(entry => {
    // Si el elemento está dentro del viewport
    if (entry.isIntersecting) {
      // Agregamos una clase al elemento para cambiar su estilo
        nav.style.backgroundColor = "#fff";
        ancles_nav.forEach(ancle_nav =>{
            ancle_nav.style.color = "#7926ff";
        })
        icon_nav.style.filter = "brightness(1)";
        btn_register.style.borderColor = "#7926ff";
        btn_register.style.color = "#7926ff";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.backgroundColor = "#7926ff";
            btn_register.style.color = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#7926ff";
            btn_register.style.backgroundColor = "#fff";
        })
      entry.target.classList.add('is-visible');
    } else {
      // Si el elemento ya no está dentro del viewport, removemos la clase
        nav.style.backgroundColor = "transparent";
        ancles_nav.forEach(ancle_nav =>{
        ancle_nav.style.color = "#fff";
        })
        icon_nav.style.filter = "brightness(10)";
        btn_register.style.borderColor = "#fff";
        btn_register.style.color = "#fff";
        btn_register.style.backgroundColor = "transparent";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.color = "#00000088";
            btn_register.style.backgroundColor = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#fff";
            btn_register.style.backgroundColor = "transparent";
        })
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  // Opciones para la instancia del IntersectionObserver
  threshold: 0.5 // Configuramos el punto de intersección en 0.5 (50%)
});

// Observamos el elemento
observer.observe(section_6);

//INTERSECTION OBSERVER PARA LA BARRA DE NAVEGACIÓN 
// Seleccionamos el elemento que queremos observar
let section_7  = document.querySelector('.section__7');
// Creamos una instancia de IntersectionObserver
const observer5 = new IntersectionObserver(entries => {
  // entries es un array que contiene cada entrada de los elementos observados
  entries.forEach(entry => {
    // Si el elemento está dentro del viewport
    if (entry.isIntersecting) {
      // Agregamos una clase al elemento para cambiar su estilo
        nav.style.backgroundColor = "#fff";
        ancles_nav.forEach(ancle_nav =>{
            ancle_nav.style.color = "#7926ff";
        })
        icon_nav.style.filter = "brightness(1)";
        btn_register.style.borderColor = "#7926ff";
        btn_register.style.color = "#7926ff";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.backgroundColor = "#7926ff";
            btn_register.style.color = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#7926ff";
            btn_register.style.backgroundColor = "#fff";
        })
      entry.target.classList.add('is-visible');
    } else {
      // Si el elemento ya no está dentro del viewport, removemos la clase
        nav.style.backgroundColor = "transparent";
        ancles_nav.forEach(ancle_nav =>{
        ancle_nav.style.color = "#fff";
        })
        icon_nav.style.filter = "brightness(10)";
        btn_register.style.borderColor = "#fff";
        btn_register.style.color = "#fff";
        btn_register.style.backgroundColor = "transparent";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.color = "#00000088";
            btn_register.style.backgroundColor = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#fff";
            btn_register.style.backgroundColor = "transparent";
        })
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  // Opciones para la instancia del IntersectionObserver
  threshold: 0.5 // Configuramos el punto de intersección en 0.5 (50%)
});

// Observamos el elemento
observer.observe(section_7);


//INTERSECTION OBSERVER PARA LA BARRA DE NAVEGACIÓN 
// Seleccionamos el elemento que queremos observar
let section_8  = document.querySelector('.section__8');
// Creamos una instancia de IntersectionObserver
const observer6 = new IntersectionObserver(entries => {
  // entries es un array que contiene cada entrada de los elementos observados
  entries.forEach(entry => {
    // Si el elemento está dentro del viewport
    if (entry.isIntersecting) {
      // Agregamos una clase al elemento para cambiar su estilo
        nav.style.backgroundColor = "#fff";
        ancles_nav.forEach(ancle_nav =>{
            ancle_nav.style.color = "#7926ff";
        })
        icon_nav.style.filter = "brightness(1)";
        btn_register.style.borderColor = "#7926ff";
        btn_register.style.color = "#7926ff";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.backgroundColor = "#7926ff";
            btn_register.style.color = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#7926ff";
            btn_register.style.backgroundColor = "#fff";
        })
      entry.target.classList.add('is-visible');
    } else {
      // Si el elemento ya no está dentro del viewport, removemos la clase
        nav.style.backgroundColor = "transparent";
        ancles_nav.forEach(ancle_nav =>{
        ancle_nav.style.color = "#fff";
        })
        icon_nav.style.filter = "brightness(10)";
        btn_register.style.borderColor = "#fff";
        btn_register.style.color = "#fff";
        btn_register.style.backgroundColor = "transparent";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.color = "#00000088";
            btn_register.style.backgroundColor = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#fff";
            btn_register.style.backgroundColor = "transparent";
        })
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  // Opciones para la instancia del IntersectionObserver
  threshold: 0.5 // Configuramos el punto de intersección en 0.5 (50%)
});

// Observamos el elemento
observer.observe(section_8);


//INTERSECTION OBSERVER PARA LA BARRA DE NAVEGACIÓN 
// Seleccionamos el elemento que queremos observar
let section_9  = document.querySelector('.section__9');
// Creamos una instancia de IntersectionObserver
const observer7 = new IntersectionObserver(entries => {
  // entries es un array que contiene cada entrada de los elementos observados
  entries.forEach(entry => {
    // Si el elemento está dentro del viewport
    if (entry.isIntersecting) {
      // Agregamos una clase al elemento para cambiar su estilo
        nav.style.backgroundColor = "#fff";
        ancles_nav.forEach(ancle_nav =>{
            ancle_nav.style.color = "#7926ff";
        })
        icon_nav.style.filter = "brightness(1)";
        btn_register.style.borderColor = "#7926ff";
        btn_register.style.color = "#7926ff";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.backgroundColor = "#7926ff";
            btn_register.style.color = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#7926ff";
            btn_register.style.backgroundColor = "#fff";
        })
      entry.target.classList.add('is-visible');
    } else {
      // Si el elemento ya no está dentro del viewport, removemos la clase
        nav.style.backgroundColor = "transparent";
        ancles_nav.forEach(ancle_nav =>{
        ancle_nav.style.color = "#fff";
        })
        icon_nav.style.filter = "brightness(10)";
        btn_register.style.borderColor = "#fff";
        btn_register.style.color = "#fff";
        btn_register.style.backgroundColor = "transparent";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.color = "#00000088";
            btn_register.style.backgroundColor = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#fff";
            btn_register.style.backgroundColor = "transparent";
        })
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  // Opciones para la instancia del IntersectionObserver
  threshold: 0.5 // Configuramos el punto de intersección en 0.5 (50%)
});

// Observamos el elemento
observer.observe(section_9);


//INTERSECTION OBSERVER PARA LA BARRA DE NAVEGACIÓN 
// Seleccionamos el elemento que queremos observar
let footer  = document.querySelector('.footer');
// Creamos una instancia de IntersectionObserver
const observer8 = new IntersectionObserver(entries => {
  // entries es un array que contiene cada entrada de los elementos observados
  entries.forEach(entry => {
    // Si el elemento está dentro del viewport
    if (entry.isIntersecting) {
      // Agregamos una clase al elemento para cambiar su estilo
        nav.style.backgroundColor = "#fff";
        ancles_nav.forEach(ancle_nav =>{
            ancle_nav.style.color = "#7926ff";
        })
        icon_nav.style.filter = "brightness(1)";
        btn_register.style.borderColor = "#7926ff";
        btn_register.style.color = "#7926ff";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.backgroundColor = "#7926ff";
            btn_register.style.color = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#7926ff";
            btn_register.style.backgroundColor = "#fff";
        })
      entry.target.classList.add('is-visible');
    } else {
      // Si el elemento ya no está dentro del viewport, removemos la clase
        nav.style.backgroundColor = "transparent";
        ancles_nav.forEach(ancle_nav =>{
        ancle_nav.style.color = "#fff";
        })
        icon_nav.style.filter = "brightness(10)";
        btn_register.style.borderColor = "#fff";
        btn_register.style.color = "#fff";
        btn_register.style.backgroundColor = "transparent";
        btn_register.addEventListener("mouseover", ()=>{
            btn_register.style.color = "#00000088";
            btn_register.style.backgroundColor = "#fff";
        })
        btn_register.addEventListener("mouseout", ()=>{
            btn_register.style.color = "#fff";
            btn_register.style.backgroundColor = "transparent";
        })
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  // Opciones para la instancia del IntersectionObserver
  threshold: 0.1 // Configuramos el punto de intersección en 0.5 (50%)
});

// Observamos el elemento
observer.observe(footer);


//register_preview
let box_preview = document.querySelector(".box_register_preview")
let close_register = document.querySelector(".close_register")
let box_preview_active = false;
btn_register.addEventListener("click", ()=>{
  if(box_preview_active == false){
    box_preview.style.display = "flex";
  }else{
    box_preview.style.display = "none";
  }
})

close_register.addEventListener("click", ()=>{
  if(box_preview_active == false){
    box_preview.style.display = "none";
  }else{
    box_preview.style.display = "flex";
  }
})