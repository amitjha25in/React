(function() {
  const navlink = document.querySelectorAll(".navlink");
  const headerHeight = document.querySelector("header").offsetHeight;
  const heroSlider = document.querySelector(".heroSlider ").offsetHeight;
  //let windowHeight = window.innerHeight;
  const usp = document.querySelector(".usp  ").offsetHeight;
  const header_height = headerHeight + heroSlider + usp;
  navlink.forEach(menu => {
    menu.addEventListener("click", () => {
      const menuData = menu.dataset.scroll;
      const category = document.querySelectorAll(".category");
      category.forEach((item, i) => {
        const itemHeight = item.offsetTop;
        console.log(itemHeight);
        if (item.classList.contains(menuData)) {
          window.scroll({
            top: itemHeight + header_height,
            behavior: "smooth"
          });
        }
      });
      //add and remove class
      // var current = document.querySelectorAll(".active");
      // current.forEach(single => {
      //   single.classList.remove("active");
      // });
      // menu.className += " active";
    });
  });
})();
//window scroll function
(function() {
  //for removing active class from left menu
  let li = document.querySelectorAll(".leftNav li");
  const removeLi = function() {
    li.forEach(function(li) {
      li.classList.remove("active");
    });
  };
  //for claculating top height of header, crausel and usp
  const headerHeight = document.querySelector("header").offsetHeight;
  const heroSlider = document.querySelector(".heroSlider ").offsetHeight;
  const usp = document.querySelector(".usp  ").offsetHeight;
  const header_height = headerHeight + heroSlider + usp;

  let fixedNav = document.querySelector(".leftNav ul");
  let windowHeight = window.innerHeight;
  const navlink = document.querySelectorAll(".navlink");
  const category = document.querySelectorAll(".category");

  window.addEventListener("scroll", function() {
    //calculating window and scroll height = bottom of window
    let scrollY = window.scrollY;
    var screenBottom = scrollY + windowHeight;

    category.forEach((item, i) => {
      const itemTop = item.offsetTop;
      const itemHeight = item.offsetHeight;

      if (screenBottom >= itemHeight + itemTop + header_height) {
        navlink.forEach((menu, i) => {
          const menuData = menu.dataset.scroll;
          if (item.classList.contains(menuData)) {
            removeLi();
            fixedNav.children[i].classList.add("active");
            //menu.classList.add("active");
          }
        });
      }
    });
  });
})();
