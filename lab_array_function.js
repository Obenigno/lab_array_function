const tags = ["#vida", "#javascript", "#aula", "#js", "#café"];

const filtro = tags.filter( t => t.includes("js"));
console.log(filtro);

// Atividade 2: Formatador de Nomes de Usuário \\
const usuarios = ["aLeX", "mArIa", "jOãO", "bIa"];
 const minisculas = usuarios.map(u => u.toLowerCase());
 console.log(minisculas);
 
// Atividade 3: Sistema de Busca de Convidados \\ 
 const convidados = ["Ana", "Al", "Alberto", "Bia", "Amanda", "Ab"];

 const convidadosUnicos = 
convidados.filter(c => c.startsWith("A"))
.map(c =>
 c.startsWith("A") && c.length > 2)
 
console.log(convidados);
console.log("Tirando pessoas que comecam com B ....");
console.log("Verificando ....");
console.log(convidadosUnicos);


//  Uma loja de games quer dar um desconto de 10 reais em todos os jogos de uma lista. \\ 
 
 const precos = [50, 100, 150, 200];
 const precosComDesconto = precos.map(p => p -10 );
 console.log(precosComDesconto);
 