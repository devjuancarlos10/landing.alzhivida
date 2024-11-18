<!DOCTYPE html>
<html lang="ES" id="html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alzhivida | Recordando la enfermedad de los ovlidados</title>
    <!--Enlace a los estilos-->
    <link rel="stylesheet" href="./CSS/style.css">
    <link rel="shortcut icon" href="./ICONS/1.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>
<body>
    <img src="./ICONS/2.png" class="icon_main_res" alt="" srcset="">
    <div class="lines_btn_nav">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <nav class="nav_responsive">
        <span class="btn_close_nav">
            +
        </span>
        <ul class="list_links_nav_res">
            <a href="#"><li class="link_nav_res">Inicio</li></a>
            <a href="#aplication"><li class="link_nav_res">Aplicación</li></a>
            <a href="#"><li class="link_nav_res">Blog</li></a>
            <a href="#us"><li class="link_nav_res">Nosotros</li></a>
            <a href="#contact"><li class="link_nav_res">Contáctanos</li></a>
            <a href="#"><li class="link_nav_res">Pre-regístrate</li></a>
        </ul>
    </nav>
    <div class="box_register_preview">
        <span class="close_register">+</span>
        <form action="register_preview.php" method="post" id="form_preview">
            <h3 class="title_form_register">
                Pre - Registro
            </h3>
            <input type="text" required placeholder="Nombre:" class="input_register" name="name_register">
            <input type="text" required placeholder="Apellidos: " class="input_register" name="lastname_register">
            <input type="email" required placeholder="Correo electrónico: " class="input_register" name="email_register">
            <div class="check_register">
                <input type="checkbox" name="accept_terms" id="accept_terms">
                Politicas de seguridad y beneficios
            </div>
            <input type="submit" value="Continuar" class="btn_register_preview">
        </form>
    </div>
    <div class="box__clouds">   
        <div class="box_cloud">
            <img src="./IMGS/cloud1.png" class="cloud" alt="" srcset="">
        </div>
        <div class="box_cloud">
            <img src="./IMGS/cloud2.svg" class="cloud" alt="" srcset="">
        </div>
        <div class="box_cloud">
            <img src="./IMGS/cloud3.svg" class="cloud" alt="" srcset="">
        </div>
    </div>
    <header class="section header">
        <nav class="nav">
            <picture class="icon__1">
                <a href="#"><img src="./ICONS/2.png" alt="" srcset="" class="icono_nav"></a>
            </picture>
            <ul>
                <li class="link_nav link_nav_1"><a href="#" class="ancle_nav">Inicio</a><div class="background_nav"></div></li>
                <li class="link_nav link_nav_2"><a href="#aplication" class="ancle_nav">Aplicación</a><div class="background_nav"></div></li>
                <li class="link_nav link_nav_3"><a href="#" class="ancle_nav">Blog</a><div class="background_nav"></div></li>
                <li class="link_nav link_nav_4"><a href="#us" class="ancle_nav">Nosotros</a><div class="background_nav"></div></li>
                <li class="link_nav link_nav_5"><a href="#contact" class="ancle_nav">Contáctanos</a><div class="background_nav"></div></li>
                <li class="link_nav link_nav_6"><button class="btn_register">Pre-regístrate</button></li>
            </ul>
        </nav>
        <picture class="picture__1" data-aos="fade-up">
            <img src="./IMGS/1.png" class="img__1" alt="">
        </picture>
        <div class="box__titles">
            <h1 class="h1">Alzhi<span>Vida</span></h1>
            <h4 class="slogan_text">Recordando la enfermedad de los olvidados</h4>
            <p class="main_description">
            <span class="strong_name">AlzhiVida</span> es una Start-Up y voluntariado de jóvenes interesados por el
            desarrollo sostenible enfocados en ayudar en la asistencia a los cuidadores de
            pacientes con la enfermedad de Alzheimer.
            </p>
        </div>
    </header>
    <section id="aplication" class="section__1 section">
        <h5 class="title_demo">
            <hr class="hr_section"><span>Demo</span>&nbsp;App<hr class="hr_section">
        </h5>
        <div class="box_video_app">
            <video src="./VIDEOS/video1.mp4" class="video"></video>
            <div class="background_video">
                <button class="btn_play_pause" title="Reproducir video">
                    <img src="./ICONS/btn_play.svg" class="btn_control_video" alt="" srcset="">
                    <img src="./ICONS/btn_pause.svg" class="btn_control_video" alt="" srcset="">
                </button>
            </div>
        </div>
    </section>
    <section class="section__2 section">
        <div class="box_phone">
            <img src="./IMGS/iphone1.png" class="img_sections" alt="" srcset="">
        </div>
        <div class="box_description_section">
            <h5 class="title_section">
                CONVERSA
            </h5>
        </div>
    </section>
    <section class="section__3 section">
        <div class="box_description_section">
            <h5 class="title_section">
                CONOCE Y CONECTA
            </h5>
        </div>
        <div class="box_phone">
            <img src="./IMGS/iphone2.png" class="img_sections" alt="" srcset="">
        </div>
    </section>
    <section class="section__4 section">
        <div class="box_phone">
            <img src="./IMGS/iphone3.png" class="img_sections" alt="" srcset="">
        </div>
        <div class="box_description_section">
            <h5 class="title_section">
                INTERACTUA
            </h5>
        </div>
    </section>
    <section class="section__5 section">
        <div class="box_description_section">
            <h5 class="title_section">
                CUIDA
            </h5>
        </div>
        <div class="box_phone phone_4">
            <img src="./IMGS/iphone4.png" class="img_sections" alt="" srcset="">
        </div>
    </section>
    <section class="section__6 section" id="us">
        <div class="box_socios">
            <h3 class="title_us">¿Quiénes somos?</h3><br>
            <div class="box_s_socios">
                <div class="socio_b">
                    <div class="socio">
                        <div class="picture_socio">
                            <img src="./IMGS/favio.png" class="avatar_socio" alt="" srcset="">
                        </div>
                        <p class="name_socio">
                            Richard Favio Asturimac Medina
                        </p>
                        <p class="description_socio">
                            Socio - Fundador
                        </p>
                        <div class="networks">
                            <a href="#"><img src="./ICONS/linkedin_icon.svg" class="network" alt="" srcset=""></a>
                        </div>
                    </div>
                </div>  
                <div class="socio_b">
                    <div class="socio">
                        <div class="picture_socio">
                            <img src="./IMGS/juan.png" class="avatar_socio" alt="" srcset="">
                        </div>
                        <p class="name_socio">
                            Juan Carlos Chahuayo Martinez
                        </p>
                        <p class="description_socio">
                            Socio - Fundador
                        </p>
                        <div class="networks">
                            <a href="#"><img src="./ICONS/linkedin_icon.svg" class="network" alt="" srcset=""></a>
                        </div>
                    </div>
                </div>
                <div class="socio_b">
                    <div class="socio">
                        <div class="picture_socio">
                            <img src="./IMGS/jhon.png" class="avatar_socio" alt="" srcset="">
                        </div>
                        <p class="name_socio">
                            Jhon Edison Aroni Salazar
                        </p>
                        <p class="description_socio">
                            Socio - Fundador
                        </p>
                        <div class="networks">
                            <a href="#"><img src="./ICONS/linkedin_icon.svg" class="network" alt="" srcset=""></a>
                        </div>
                    </div>
                </div>  
                <div class="socio_b">
                    <div class="socio">
                        <div class="picture_socio">
                            <img src="./IMGS/brittany.png" class="avatar_socio" alt="" srcset="">
                        </div>
                        <p class="name_socio">
                            Brittany Gonzales Quiñones
                        </p>
                        <p class="description_socio">
                            Socio - Fundador
                        </p>
                        <div class="networks">
                            <a href="#"><img src="./ICONS/linkedin_icon.svg" class="network" alt="" srcset=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section__7 section">
        <div class="box_reconocimientos">
            <h3 class="title_reconocimientos">
                RECONOCIMIENTOS
            </h3>
            <div class="reconocimientos">
                <picture>
                    <img src="./IMGS/LOGO-DIRECCION-DE-INCUBADORA-DE-EMPRESAS.png" class="reconocimiento" alt="" srcset="">
                </picture>
                <picture>
                    <img src="./IMGS/HarvardChan_logo_hrz_alt_cmyk_SUPERLARGE.webp" class="reconocimiento" alt="" srcset="">
                </picture>
                <picture>
                    <img src="./IMGS/61690094315b33073b5d7f1b_1-01.jpg" class="reconocimiento" alt="" srcset="">
                </picture>
            </div>
        </div><br>
        <div class="box_networks">
            <h3 class="title_networks">
                REDES SOCIALES
            </h3>
            <div class="networks_alzhi">
                <picture>
                    <img src="./ICONS/instagram.svg" class="network_alzhi" alt="" srcset="">
                </picture>
                <picture>
                    <img src="./ICONS/Facebook.svg" class="network_alzhi" alt="" srcset="">
                </picture>
                <picture>
                    <img src="./ICONS/linkedin_icon.svg" class="network_alzhi" alt="" srcset="">
                </picture>
                <picture>
                    <img src="./ICONS//Tiktok.svg" class="network_alzhi" alt="" srcset="">
                </picture>
            </div>
        </div>
    </section>
    <section class="section__8 section" id="contact">
        <form id="form_contact" action="contacto.php" method="post">
            <h3 class="title_form_contact">
                CONTACTA CON NOSOTROS
            </h3>
            <div class="box_blocks_form">
                <div class="block_form">
                    <input type="text" required placeholder="Nombres y Apellidos" class="input_form_contact" id="name_form_contact" name="name_form_contact">
                    <input type="email" required placeholder="Correo electrónico" class="input_form_contact" id="email_form_contact" name="email_form_contact">
                    <input type="phone" required placeholder="Telefono" class="input_form_contact" id="phone_form_contact" name="phone_form_contact">
                </div>
                <div class="block_form">
                    <input type="text" required placeholder="Asunto" class="input_form_contact" id="case_form_contact" name="case_form_contact">
                </div>
                <div class="block_form">
                    <textarea name="message_form_contact" required id="message_form_contact" placeholder="Mensaje"></textarea>
                </div>
            </div>
            <input type="submit" id="btn_submit_form">
        </form>
    </section>
    <section class="section__9 section">
        <div class="box_comments">
            <h3 class="title_comments">
                RESEÑAS
            </h3>
            <div class="comments">
                <div class="comment">
                    <div class="box_avatar_comment">
                        <img src="./IMGS/avatar_3_comment.png" class="avatar_comment" alt="" srcset="">
                    </div>
                    <p class="name_comment">
                        <strong>Aguilar Flores Angelina</strong>
                    </p>
                    <p class="comment_text">
                    La aplicación es muy fácil de usar y me ha servido demasiado para encontrar una buena terapeuta, aún lo sigo usando como asistente de cuidado
                    </p>
                </div>
                <div class="comment">
                    <div class="box_avatar_comment">
                        <img src="./IMGS/avatar_2_comment.png" class="avatar_comment" alt="" srcset="">
                    </div>
                    <p class="name_comment">
                        <strong>Ramirez Leyva Paola</strong>
                    </p>
                    <p class="comment_text">
                        Excelente aplicación para que cuidadores familiares puedan encontrar cuidadores profesionales como yo y les podamos brindar tutorías extras
                    </p>
                </div>
                <div class="comment">
                    <div class="box_avatar_comment">
                        <img src="./IMGS/avatar_1_comment.png" class="avatar_comment" alt="" srcset="">
                    </div>
                    <p class="name_comment">
                        <strong>Santana Hilar Micaela</strong>
                    </p>
                    <p class="comment_text">
                        Una aplicación sencilla, mucha comunidad activa, con cuidadores y profesionales con experiencia aconsejando a nuevos cuidadores
                    </p>
                </div>
                <div class="comment">
                    <div class="box_avatar_comment">
                        <img src="./ICONS/avatar1comment.png" class="avatar_comment" alt="" srcset="">
                    </div>
                    <p class="name_comment">
                        <strong>Avelino Domez Susana</strong>
                    </p>
                    <p class="comment_text">
                        Muy útil, como cuidadora ya experimentada me fascina compartir consejos a personas que recién inician, además de poder organizarme
                    </p>
                </div>
            </div>
        </div>
    </section>
    <footer class="section footer">
        <div class="part-foot part1-f">
            <ul class="list-foot">
                <li><a href="#">Términos y condiciones</a></li>
                <li><a href="#">Políticas de privacidad</a></li>
            </ul>
        </div>
        <div class="part-foot part2-f">
            <p class="title-form-foot">Suscribete para recibir notificaciones</p>
            <form action="suscribed.php" method="post" class="form-foot">
                <input type="email" placeholder="Email:" class="input-email-foot">
                <input type="submit" class="submit-foot">
            </form>
            
        </div>
        <div class="part-foot part3-f">
            <a href="#">
                <img src="./ICONS/2.png" class="icon-foot" alt="" srcset="">
            </a>
            <p class="copyright">Copyright @ 2024 Alzhivida. Todos los derechos reservados.</p>
        </div>
    </footer>
    <script src="./JS/main.js"></script>
    <script src="./JS/animations_main.js"></script>
</body>
</html>
