const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('#menu li');

openBtn.addEventListener('click', () => {
    menu.classList.add('show');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('show');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
});

menuItems.forEach(item => {
  item.addEventListener("click", e => {
    const target = document.querySelector(item.querySelector("a").getAttribute("href"));
    e.preventDefault();

    target.scrollIntoView({ behavior: "smooth" });

    // أغلق القائمة بعد 300ms (ثلث ثانية تقريبًا)
    setTimeout(() => {
      menu.classList.remove("show");
      closeBtn.style.display = "none";
      openBtn.style.display = "block";
    }, 300);
  });
});





const containers = document.querySelectorAll('.one');

containers.forEach(container => {
  let autoScroll;
  let userInteracting = false;

  function startAutoScroll() {
    stopAutoScroll();
    autoScroll = setInterval(() => {
      container.scrollBy({
        left: -container.clientWidth * .87,
        behavior: 'smooth'
      });
      if (container.scrollLeft <= 0) {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: 'smooth'
        });
      }
    }, 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  container.addEventListener('touchstart', () => {
    userInteracting = true;
    stopAutoScroll();
  });

  container.addEventListener('touchend', () => {
    userInteracting = false;
    setTimeout(() => {
      if (!userInteracting) startAutoScroll();
    }, 3000);
  });

  startAutoScroll();
});














