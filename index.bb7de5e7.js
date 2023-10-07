const e=document.forms.form;e.addEventListener("submit",(o=>{o.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbxxBiH36WxGDlq6xYj10qYS-ddVKRxlP84ztelPhc4ryf1oe07nf_IoJ8-11_dzDEyewA/exec",{method:"POST",body:new FormData(e)}).then((e=>console.log("Success!",e))).catch((e=>console.error("Error!",e.message)))}));
//# sourceMappingURL=index.bb7de5e7.js.map
