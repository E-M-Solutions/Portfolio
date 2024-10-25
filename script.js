//     var sidenav = document.getElementById("mySidenav");
//     var openBtn = document.getElementById("openBtn");
//     var closeBtn = document.getElementById("closeBtn");


//     console.log(sidenav);
//     console.log(openBtn);
//     console.log(closeBtn);

//     openBtn.addEventListener("mouseenter", openNav);
//     openBtn.addEventListener("mouseleave", closeNav);


//     /* Set the width of the side navigation to 250px */
// function openNav() {
//     sidenav.classList.add("active");
    
//   }
  
//   /* Set the width of the side navigation to 0 */
//   function closeNav() {
//     sidenav.classList.remove("active");
//   }
  

// JavaScript to add active class to clicked menu item
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function() {
      document.querySelector('nav ul li a.active').classList.remove('active');
      this.classList.add('active');
  });
});


