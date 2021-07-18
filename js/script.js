const formulario = document.getElementById('formulario');
let nome;
let email;
let cadastro;
let converteCadastro;

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    cadastro = {nome, email,}
    converteCadastro = JSON.stringify(cadastro);

    localStorage.setItem('lead', converteCadastro);

    console.log(nome,email, cadastro);
<<<<<<< HEAD
    alert("Seja bem Vindo! Você receberá nossas promoções em breve.");    
=======
    alert("Seja bem Vindo! Você receberá nossas promoções em breve.");

    
>>>>>>> 3d327d5c81ba0b5ff0e3325cfd363cda45a7e157

})
