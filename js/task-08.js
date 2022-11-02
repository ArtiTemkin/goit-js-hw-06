const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    // console.dir(event.currentTarget)
    
    const {
        elements: { email, password }, 
    } = event.currentTarget;


    if (email.value === "" || password.value === "") {
        alert('Заповніть усі поля!!!')
        console.log()
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        }
        console.log(formData)
        event.currentTarget.reset();
    }
    
}