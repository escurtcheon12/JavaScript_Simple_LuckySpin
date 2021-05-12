// declare variabel
const kotak = document.querySelectorAll('.kotak');
const button = document.querySelector('button');
const tampilanAngka = document.querySelectorAll('h2');
const winner = document.querySelector('h1');

// membuat fungsi untuk menampilkan angka random
function angkaRandom(angka,corresponding) {
	let menampilkan = angka.innerHTML = corresponding;
}

// membuat method click agar supaya di klik di kotak akan muncul angka random
button.addEventListener('click', event=> {

	// alasan kenapa variabel random disini supaya ketika di klik variabel random akan teracak
	// sebagaimana ketika di klik berkali kali
	let random1 = Math.floor((Math.random() * 6) + 1);
	let random2 = Math.floor((Math.random() * 6) + 1);
	let random3 = Math.floor((Math.random() * 6) + 1);

	// memanggil fungsi random agar tampilan angkanya muncul di kotak
	angkaRandom(tampilanAngka[0],random1);
	angkaRandom(tampilanAngka[1],random2);
	angkaRandom(tampilanAngka[2],random3);

	// kondisi jika lucky maka akan muncul warna,popup, dan text
	if(random1 == random2 && random2 == random3) {
		alert('Mau Coba lagi?');
		winner.innerHTML = 'Anda Lucky!!';
		kotak.forEach(item => { 
		item.classList.add('benar');
	 });
	}
});