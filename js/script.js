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
    alert("Seja bem Vindo! Você receberá nossas promoções em breve.");

    

})