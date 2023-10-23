


var numeroAlunos = parseInt(window.prompt("Insira a quantidade de alunos da sua turma: "));
var nomeAlunos = [numeroAlunos];
var nota1 = [nomeAlunos.length];
var nota2 = [nomeAlunos.length];
var mediaAlunos = [nomeAlunos.length];


for (var i = 0; i < numeroAlunos; i++) {
  nomeAlunos[i] = window.prompt("Insira o nome do " + (i + 1) + "° aluno: ");
  nota1[i] = parseInt(window.prompt("Insira a primeira nota do " + (i + 1) + "° aluno: "));
  nota2[i] = parseInt(window.prompt("Insira a segunda nota do " + (i + 1) + "° aluno: "));
}
for (var i = 0; i < nomeAlunos.length; i++) {
  nota1Arredondada= Math.ceil(nota1[i]);
  nota2Arredondada= Math.ceil(nota2[i]);
  mediaAlunos[i]= (nota1Arredondada + nota2Arredondada) / 2;
}

for (var i = 0; i < nomeAlunos.length; i++) {
if (mediaAlunos[i] >= 7) {
  window.alert("O aluno " + nomeAlunos[i] + " obteve média de " + mediaAlunos[i] + " e foi aprovado.");
} else if(5<=mediaAlunos[i] < 7) {
  window.alert("O aluno " + nomeAlunos[i] + " tirou " + mediaAlunos[i] + " e está de recuperação.");
} else {
  window.alert("O aluno " + nomeAlunos[i] + " tirou " + mediaAlunos[i] + " e foi reprovado.");
}
}


document.write("<table border='1'>");
document.write("<tr><th>Nome</th><th>Nota 1</th><th>Nota 2</th><th>Média</th></tr>");
for (var i = 0; i < nomeAlunos.length; i++) {
  document.write("<tr><td>" + nomeAlunos[i] + "</td><td>" + nota1[i] + "</td><td>" + nota2[i] + "</td><td>" + mediaAlunos[i] + "</td></tr>");
}