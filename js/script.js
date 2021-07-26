const formulario = document.getElementById('formulario');
let nome;
let telefone;
let email;
let endereco;
let cadastro;
let converteCadastro;
const formularioAranha = document.getElementById('formularioPrecoA');
let precoAranha;
let comprouAranha;
let naoAranha = false;
const formularioGroot = document.getElementById('formularioGrootA');
let precoGroot;
let comprouGroot;
const formularioHulk = document.getElementById('formularioHulkA');
let precoHulk;
let comprouHulk;
const formularioCaneca = document.getElementById('formularioCanecaA');
let precoCaneca;
let comprouCaneca;
const formularioCamisa = document.getElementById('formularioCamisaA');
let precoCamisa;
let comprouCamisa;
const formularioMiss = document.getElementById('formularioMissA');
let comprouMiss;
let qtdAranha =0;
let qtdGroot =0;
let qtdHulk =0;
let qtdCaneca = 0;
let qtdCamisa = 0;
let qtdMiss  = 0;
let totalCarrinho = 0;
let gastouComMiss = 0;
let gastouComCamisa = 0;
let gastouComCaneca = 0;
let gastouComHulk = 0;
let gastouComGroot = 0;
let gastouComAranha = 0;
let carrinho;




formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    nome = document.getElementById('nome').value;
    telefone = document.getElementById('telefone').value;
    email = document.getElementById('email').value;
    endereco = document.getElementById('endereco').value;
    cadastro = {nome, telefone, email, endereco,}
    converteCadastro = JSON.stringify(cadastro);
    localStorage.setItem('lead', converteCadastro);
    console.log(nome,email, cadastro);
    alert("Seja bem Vindo!.");
})

formularioAranha.addEventListener('submit', (e)=>{    
    e.preventDefault();
    precoAranha = 300.00;
    comprouAranha = document.getElementById('compraAranha').value;
    carrinho = {comprouAranha}
    converteCadastro = JSON.stringify(carrinho);
    console.log(carrinho);
    alert("Você comprou o action figure do Aranha de Ferro.");
    qtdAranha = qtdAranha +1;
    gastouComAranha = precoAranha * qtdAranha;
    carrinhoDeCompras ();    
    }
)

formularioGroot.addEventListener('submit', (e)=>{
    e.preventDefault();
    precoGroot = 200.00;
    comprouGroot = document.getElementById('compraGroot').value;
    carrinho = {comprouGroot}
    converteCadastro = JSON.stringify(carrinho);
    console.log(carrinho); 
    alert("Você comprou o action figure do Baby Groot.");
    qtdGroot = qtdGroot +1; 
    gastouComGroot = precoGroot * qtdGroot;
    carrinhoDeCompras ();      
})

formularioHulk.addEventListener('submit', (e)=>{
    e.preventDefault();
    precoHulk = 350.00;
    comprouHulk = document.getElementById('compraHulk').value;
    carrinho = {comprouHulk}
    converteCadastro = JSON.stringify(carrinho);
    console.log(carrinho);
    alert("Você comprou o action figure do Hulk.");
    qtdHulk = qtdHulk +1;
    gastouComHulk = precoHulk * qtdHulk;
    carrinhoDeCompras ();    
})

formularioCaneca.addEventListener('submit', (e)=>{
    e.preventDefault();
    precoCaneca = 50.00;
    comprouCaneca = document.getElementById('compraCaneca').value;
    carrinho = {comprouCaneca}
    converteCadastro = JSON.stringify(carrinho);
    console.log(carrinho);
    alert("Você comprou a Caneca da Capitã Marvel.");    
    qtdCaneca = qtdCaneca + 1;
    gastouComCaneca = precoCaneca * qtdCaneca;
    carrinhoDeCompras ();
})

formularioCamisa.addEventListener('submit', (e)=>{
    e.preventDefault();
    precoCamisa = 100.00;
    comprouCamisa = document.getElementById('compraCamisa').value;
    carrinho = {comprouCamisa}
    converteCadastro = JSON.stringify(carrinho);
    console.log(carrinho);
    alert("Você comprou a camisa da SheHulk.");
    qtdCamisa = qtdCamisa + 1;
    gastouComCamisa = precoCamisa * qtdCamisa;
    carrinhoDeCompras ();
})

formularioMiss.addEventListener('submit', (e)=>{
    e.preventDefault();  
    let precoMiss = 400.00;    
    comprouMiss = document.getElementById('compraMiss').value;
    carrinho = {comprouMiss}
    converteCadastro = JSON.stringify(carrinho);
    console.log(carrinho);
    alert("Você comprou a action figure da Miss Marvel.");
    qtdMiss = qtdMiss + 1;  
    gastouComMiss = precoMiss * qtdMiss;
    carrinhoDeCompras ();
})

function carrinhoDeCompras (){ 
    totalCarrinho = gastouComMiss + gastouComCamisa + gastouComCaneca + gastouComHulk + gastouComGroot + gastouComAranha;
    console.log(totalCarrinho);    
}
    

