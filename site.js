document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.forms[0];
    let button = form["submit"];

    button.addEventListener("click", (event)=>{
        let formdata = new FormData(form);
        console.log(formdata.get("Name"))
        console.log(formdata.get("Number"))
        console.log(formdata.get("Email"))
        console.log(formdata.get("Selected"))
        console.log(formdata.get("Area"))

        if (formdata.get("Name") == '' || formdata.get("Number") == '' || formdata.get("Email") == '' || formdata.get("Selected") == '')
        {
            Swal.fire({
                icon: 'error',
                title: 'Не все поля заполнены!',
                text: 'Пожалуйста заполнине все поля'
              })
        }
        else
        {
            Swal.fire({
                icon: 'success',
                title: 'Заявка отправлена успешно!',
                text: 'В ближайшее время с вами свяжутся'
            })
        }
        event.preventDefault()
    })
})

