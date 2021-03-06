// * Cara untuk membuat object pada javascript
// TODO 1. Object Literal
// ! Problem 1 : Tidak efektif untuk objek yang banyak

// let mahasiswa1 = {
//   nama: "Abu Abdirohman",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Azati Hanani",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// TODO 2. Function Declaration
// !

// function Mahasiwa(nama, energi) {
//   // ? Huruf besat sebagai penanda objek
//   let mahasiswa = {}; // ? Variabel dengan bentuk objek
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };

//   return mahasiswa;
// }

// let abu = Mahasiwa("Abu Abdirohman", 10);
// let hanan = Mahasiwa("Azati Hanani", 10);

// // * Penyelesaian Problem 1
// const methodMahasiwa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   // * Penggunaan Object.create agar tidak perlu membuat deklarasi berulang2
//   let mahasiswa = Object.create(methodMahasiwa);

//   //   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   //   mahasiswa.makan = methodMahasiwa.makan;
//   //   mahasiswa.main = methodMahasiwa.main;
//   //   mahasiswa.tidur = methodMahasiwa.tidur;

//   return mahasiswa;
// }

// let abu = Mahasiswa("Abu Abdirohman", 10);
// let hanan = Mahasiswa("Azati Hanani", 10);

// TODO 3. Constructor Function
// ? Menggunakan keyword new

// function Mahasiwa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };
// }

// let hanan = new Mahasiwa("Azati Hanani", 10);

// TODO 4. Object.create
// // * Materi 1.3. Prototype

// function Mahasiswa(nama, energi) {
//   //   let this = {Object.create(Mahasiswa.prototype)}; // ? Sebenarnya isinya ada ini
//   this.nama = nama;
//   this.energi = energi;
//   //   return this; // ? Dan ada ini juga

//   Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   };

//   Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main!`;
//   };

//   Mahasiswa.prototype.main = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
//   };
// }

// let hanan = new Mahasiswa("Azati Hanani", 10);

// * Versi Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat main!`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

let abu = new Mahasiswa("Abu Abdirohman", 10);
let hanan = new Mahasiswa("Azati Hanani", 10);

abu;
hanan;
