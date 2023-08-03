// Inisialisasi variabel untuk nilai awal dan akhir
const startNumber = 3800;
const endNumber = 26137;

// Inisialisasi variabel untuk penambahan setiap iterasi (antara 20 hingga 30)
const minIncrement = 20;
const maxIncrement = 30;

// Inisialisasi variabel untuk menyimpan angka-angka hasil looping
let numbers = [];

// Fungsi untuk melakukan looping angka dan menyimpan dalam variabel 'numbers'
function loopNumbers() {
  for (let number = startNumber; number <= endNumber; ) {
    // Menyimpan angka dalam variabel 'numbers'
    numbers.push(number);

    // Generate penambahan acak antara 20 hingga 30
    const increment = Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) + minIncrement;

    // Update nilai untuk iterasi selanjutnya
    number += increment;
  }
}

// Fungsi untuk menampilkan angka satu per satu dengan selang waktu 30 detik pada elemen HTML
function displayNumbersOneByOne() {
  let currentIndex = 0;
  const trxHarian = document.getElementById("trxHarian");

  function displayNextNumber() {
    if (currentIndex < numbers.length) {
        var trxToday = numbers[currentIndex];
        trxHarian.textContent = Number(trxToday).toLocaleString();
      currentIndex++;
    } else {
      clearInterval(interval);
    }
  }

  // Tampilkan angka pertama kali saat fungsi pertama kali dipanggil
  displayNextNumber();

  // Setelah itu, tampilkan angka satu per satu setiap 30 detik menggunakan setInterval
  const interval = setInterval(displayNextNumber, 30000); // 30000 milidetik = 30 detik
}

// Jalankan fungsi untuk melakukan looping angka dan menyimpan dalam variabel
loopNumbers();

// Jalankan fungsi untuk menampilkan angka satu per satu dengan selang waktu 30 detik pada elemen HTML
displayNumbersOneByOne();

//fungsi loop jenis kendaraan
(function () {
    var jenis = ["motor B 3487 SIU","motor B 6728 SEF","motor B 4912 UAT","motor B 9825 BUI","motor B 7261 UYA","motor B 8172 TIU" ],
    i = 0;
    setInterval(function(){ $('#jenis').fadeOut(function(){
        $(this).html(jenis[(i = (i + 1) % jenis.length)]).fadeIn();
      }); }, 24000)
  })();
  //fungsi loop tarif kendaraan
  (function () {
    var rp = ["5000","7000","2000","3000","10000" ],
    i = 0;
    setInterval(function(){ $('#rp').fadeOut(function(){
        $(this).html(rp[(i = (i + 1) % rp.length)]).fadeIn();
      }); }, 24000)
  })();
  //loop pendapatan harian
  (function () {
    var pendHarian = 
    [],
    i = 0;
    setInterval(function(){ $('#pendHarian').fadeOut(function(){
        $(this).html(pendHarian[(i = (i + 1) % pendHarian.length)]).fadeIn();
      }); }, 24000)
  })();
  
