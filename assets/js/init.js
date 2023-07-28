
  document.addEventListener('DOMContentLoaded', function() {
    var elemsparallax = document.querySelectorAll('.parallax');
    var instancesparallax = M.Parallax.init(elemsparallax);
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {indicators:true});
    var elemssidenav = document.querySelectorAll('.sidenav');
    var instancessidenav = M.Sidenav.init(elemssidenav);
  });

  let contactForm = document.getElementById('contact-form');
  let nombreInput = document.getElementById('nombre');
  let emailInput = document.getElementById('email');
  let temaInput = document.getElementById('tema');
  let mensajeInput = document.getElementById('mensaje');

 
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Validar los campos del formulario
    if (!nombreInput.value) {
      alert('Por favor, ingresa tu nombre completo.');
      return;
    }

    if (!emailInput.value) {
      alert('Por favor, ingresa tu dirección de email.');
      return;
    }

    if (!temaInput.value) {
      alert('Por favor, ingresa el tema del mensaje.');
      return;
    }

    if (!mensajeInput.value) {
      alert('Por favor, ingresa tu mensaje.');
      return;
    }

    // Si todas las validaciones son exitosas, puedes enviar el formulario aquí
    alert('Mensaje enviado correctamente');
    contactForm.reset(); // Restablecer el formulario después del envío
  });