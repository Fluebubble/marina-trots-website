import axios from 'axios';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'center-center',
  timeout: 5000,
});

const TOKEN = '6252504703:AAH5Egw_EGGCSIpWAkl9Bef4HfbFJLUJxHM';
const CHAT_ID = '-1001872143899';
const URI_ID = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const forms = document.getElementsByTagName('form');
forms[0].number.value = '123';
// console.log(forms[0].number.value.length);
// console.log(forms[1]);

// document.getElementById('form').addEventListener('submit', function (e) {
for (const form of forms) {
  console.log();
  // console.log(form.number.value.length);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(this.name.value.length);
    if (form.hasOwnProperty('name')) {
      if (this.name.value.length === 0 || this.number.value.length === 0) {
        Notiflix.Notify.failure('Введите данные правильно');
        return;
      }
    } else if (this.number.value.length === 0) {
      Notiflix.Notify.failure('Введите данные правильно');
      return;
    }

    let message = `<b>Заявка</b>\n`;
    message += `<b>Имя:</b> ${this.name.value}\n`;
    message += `<b>Телефон:</b> <a href="tel:${this.number.value}">${this.number.value}</a>\n`;

    console.log(message);

    axios
      .post(URI_ID, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'html',
      })
      .then(response => {
        console.log('good', response);
        Notiflix.Notify.success('Заявка отправлена!');
        this.name.value = '';
        this.number.value = '';

        const formButton = document.querySelector('.form-button');
        console.log(formButton);
        formButton.style.backgroundColor = '#387b54';
        //   console.log(formButton.value);
        formButton.textContent = 'Заявка оставлена!';
      })
      .catch(error => {
        console.log('oshibka', error);
      })
      .finally(() => {
        console.log('itogo');
      });
  });
}
