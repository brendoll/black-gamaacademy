const form = document.getElementById('formRegister');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data = {name, email};
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
    alert(`Olá ${name} seu interesse foi registrado`);
    form.name.value = '';
    form.email.value = '';
})