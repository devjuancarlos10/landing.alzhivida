// Seleccionamos el elemento que queremos observar
let h1 = document.querySelector(".h1");
let header = document.querySelector(".header");
let slogan_text = document.querySelector(".slogan_text");
let main_description = document.querySelector(".main_description");
let picture__1 = document.querySelector(".picture__1")
const LINKS_NAV = document.querySelectorAll(".link_nav");
// Creamos una instancia de IntersectionObserver
const observer2 = new IntersectionObserver(entries => {
  // entries es un array que contiene cada entrada de los elementos observados
  entries.forEach(entry => {
    // Si el elemento está dentro del viewport
    if (entry.isIntersecting) {
      // Agregamos una clase al elemento para cambiar su estilo
      h1.style.transform = "translateX(0)";
      slogan_text.style.transform = "translateX(0)";
      main_description.style.transform = "translateX(0)";
      picture__1.style.bottom = "0";
      entry.target.classList.add('is-visible');
      icon_nav.style.transform = "translateX(0)";
      LINKS_NAV.forEach(link_nav =>{
        link_nav.style.transform = "translateY(0)"
      })
    } else {
      // Si el elemento ya no está dentro del viewport, removemos la clase
      h1.style.transform = "translateX(100%)";
      slogan_text.style.transform = "translateX(100%)";
      main_description.style.transform = "translateX(100%)";
      picture__1.style.bottom = "-100%";
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  // Opciones para la instancia del IntersectionObserver
  threshold: .5 // Configuramos el punto de intersección en 0.5 (50%)
});

// Observamos el elemento
observer2.observe(header);



let title_demo  =document.querySelector(".title_demo");
const observer3 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            title_demo.style.transform = "translate(0)";
            box_video_app.style.transform = "translate(0)";
            entry.target.classList.add('is-visible');
        }else{
            title_demo.style.transform = "translate(-100%)";
            entry.target.classList.remove('is-visible');
            box_video_app.style.transform = "translate(100%)";
        }
    });
}, {
    threshold: .3
})

observer3.observe(section_1)



//animación para los socios-fundadores
let socios = document.getElementsByClassName("socio");

for(let i=0; i<socios.length; i++){
  socios[i].addEventListener("mouseover", ()=>{
    socios[i].style.height = "300px";
  })

  socios[i].addEventListener("mouseout", ()=>{
    socios[i].style.height = "220px"
  })
}