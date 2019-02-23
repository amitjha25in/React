(function() {
  const menu = document.querySelectorAll(".common");
  menu.forEach(item => {
    item.addEventListener("click", () => {
      const dataFilter = item.dataset.item;
      const filterItem = document.querySelectorAll(".items");

      filterItem.forEach(filter => {
        if (dataFilter === "all") {
          filter.style.display = "block";
        } else {
          if (filter.classList.contains(dataFilter)) {
            filter.style.display = "block";
          } else {
            filter.style.display = "none";
          }
        }
      });
      //add and remove class
      var current = document.querySelectorAll(".active");
      current.forEach(single => {
        single.classList.remove("active");
      });
      item.className += " active";
    });
  });
})();
