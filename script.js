const menutoggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const beranda = document.querySelector(".beranda");
const processor = document.querySelector(".processor");
const motherboard = document.querySelector(".motherboard");
const ram = document.querySelector(".ram");
const storage = document.querySelector(".storage");
const contact = document.querySelector(".contact");
const pesan = document.querySelector(".cart");
const email = document.getElementById("email");
const nama = document.getElementById("nama");
const txtarea = document.getElementById("txtarea");

function cek() {
  var cb = document.getElementById("cek");
  cb.checked = false;
}

function kosongkandata() {
  email.value = "";
  nama.value = "";
  txtarea.value = "";
}

function kirim() {
  if (email.value === "" || nama.value === "" || txtarea.value === "") {
    alert("Silahkan lengkapi form terlebih dahulu !");
  } else {
    alert("Berhasil dikirim");
    kosongkandata();
  }
}

function add() {
  alert("Berhasil ditambahkan kekeranjang");
}

menutoggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

beranda.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

processor.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

motherboard.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

ram.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

storage.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});

contact.addEventListener("click", function () {
  nav.classList.remove("slide");
  cek();
});
