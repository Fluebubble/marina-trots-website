// console.log(document.forms);
/* <script> */

const scriptURL =
  'https://script.google.com/macros/s/AKfycbxxBiH36WxGDlq6xYj10qYS-ddVKRxlP84ztelPhc4ryf1oe07nf_IoJ8-11_dzDEyewA/exec';
const form = document.forms['form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});
// </script>
