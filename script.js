const resultScreen = document.querySelector('.result-screen');
const buttons = document.getElementsByTagName('button');
const operators = ['+', '-', '*', '/'];

// Telusuri semua tombol
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    // Ketika tombol clear diklik
    if (buttons[i].classList.contains('clear')) {
      resultScreen.value = '';
    }
    // Ketika tombol operator diklik
    else if (buttons[i].classList.contains('operator')) {
      // Mencegah tombol operator diklik berturut-turut
      for (let j = 0; j < operators.length; j++) {
        if (resultScreen.value.charAt(resultScreen.value.length - 1) == operators[j]) {
          return false;
        }
      }
      resultScreen.value += buttons[i].innerHTML;
    }
    // Ketika tombol hasil (result) diklik
    else if (buttons[i].classList.contains('result')) {
      // Mencegah karakter terakhir berupa operator
      for (let j = 0; j < operators.length; j++) {
        if (resultScreen.value.charAt(resultScreen.value.length - 1) == operators[j]) {
          return false;
        }
      }
      // Menghitung hasilnya dan menampilkannya
      const result = eval(resultScreen.value);
      resultScreen.value = result;
    }
    // Jika tombol biasa(angka) diklik
    else {
      resultScreen.value += buttons[i].innerHTML;
    }
  });
}
