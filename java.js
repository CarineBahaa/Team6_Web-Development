document.addEventListener("DOMContentLoaded", () => {
  let els = document.querySelectorAll("img,video");

  els.forEach((el, i) => {
    if (i >= 1) {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = "all 0.8s ease";
    }
  });

  window.addEventListener("scroll", () => {
    els.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  });
});

//Animation for table elements
let tables = document.querySelectorAll("table");
tables.forEach(table => {
  table.addEventListener("click", () => {
    table.classList.toggle("table_a");
  });
});

//Animation + Alert for form
function btn() {
  let Name = document.getElementById("name").value;
  if (Name == "") {
    let frm = document.querySelector("form").classList.toggle("button_a");
  } else {
    alert("Thank you " + Name + " for finding our animal!! :)");
  }
}

//Popup in index page
function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

//joke api
document.getElementById("btn").addEventListener("click", () => {
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
          document.getElementById("joke").innerText =
            data.setup + " - " + data.punchline;
        })
        .catch(error => {
          document.getElementById("joke").innerText = "Error fetching joke!";
          console.error(error);
        });
    });
