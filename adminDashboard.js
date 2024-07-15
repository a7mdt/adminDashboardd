document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.show').forEach(function (showElement) {
    showElement.addEventListener('click', function () {
        const detailRow = showElement.closest('tr').nextElementSibling;
        detailRow.classList.toggle('hide');
        
        const arrow = showElement.querySelector('span');
        if (detailRow.classList.contains('hide')) {
            arrow.innerHTML = '&#x25BC;'; // Down arrow
        } else {
            arrow.innerHTML = '&#x25B2;'; // Up arrow
        }
    });
});

document.querySelectorAll('.showOpinion').forEach(function (showOpinionElement) {
    showOpinionElement.addEventListener('click', function () {
        const opinionRow = showOpinionElement.closest('tr').nextElementSibling.nextElementSibling;
        opinionRow.classList.toggle('hideO');
        
        const arrow = showOpinionElement.querySelector('span');
        if (opinionRow.classList.contains('hideO')) {
            arrow.innerHTML = '&#x25BC;'; // Down arrow
        } else {
            arrow.innerHTML = '&#x25B2;'; // Up arrow
        }
    });
});
  
    document.querySelectorAll("select").forEach(function (selectElement) {
      selectElement.addEventListener("change", function () {
        const selectedValue = this.value;
  
        if (selectedValue !== "point") {
          if (confirm("دخول الحمام مش زي خروجه ها .. من الاخر يعني انت متأكد ؟")) {
            this.classList.add("green-border");
            this.style.color = "#006400";
          } else {
            this.value = "point";
            this.classList.remove("green-border");
            this.style.color = "";
          }
        } else {
          this.classList.remove("green-border");
          this.style.color = "";
        }
      });
    });
  });