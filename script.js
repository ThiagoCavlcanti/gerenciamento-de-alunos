class Aluno {

    nome;
  
    matricula;
  
    nota1;
  
    nota2;
  
    nota3;
  
     constructor(nome, matricula, n1, n2, n3) {
  
       this.nome = nome;
  
       this.matricula = matricula;
  
       this.nota1 = n1;
  
       this.nota2 = n2;
  
       this.nota3 = n3;
  
    }
  
     exibeInfo() {
  
       return `Aluno: ${this.nome} - mat: ${this.matricula}
  
      Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
  
      Média:${this.calculaMedia()} 
  
      `;
  
    }

     
  
     calculaMedia() {
  
       return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
  
    }

    
    
  }

  let form = document.querySelector('form');
  
  form.onsubmit = function (evento) {
    evento.preventDefault();
    
    //capturando o valor dos inputs
    let nome = form.querySelector('#nome').value;
    
    let matricula = form.querySelector('#matricula').value;
    
    let nota1 = parseFloat(form.querySelector('#nota1').value);
    
    let nota2 = parseFloat(form.querySelector('#nota2').value);
    
    let nota3 = parseFloat(form.querySelector('#nota3').value);
    
    
    let aluno1 = new Aluno(nome, matricula, nota1, nota2, nota3);
    console.log(aluno1.exibeInfo())
    

    //exibindo alunos na tela

    let table = document.querySelector('table');

    let tr = document.createElement('tr');

    let td = document.createElement("td");
    td.textContent =  nome;
    
    let tdMatricula = document.createElement("td");
    tdMatricula.textContent = matricula;

    let tdNota1 = document.createElement("td");
    tdNota1.textContent = nota1;

    let tdNota2 = document.createElement("td");
    tdNota2.textContent =  nota2;

    let tdNota3 = document.createElement("td");
    tdNota3.textContent =  nota3;

    let tdMedia = document.createElement('td');
    tdMedia.textContent = ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);;

    
    let tdBotao = document.createElement('button');
    tdBotao.textContent = 'EXCLUIR';
    tdBotao.setAttribute('class', 'botao');

  

    table.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(tdMatricula);
    tr.appendChild(tdNota1);
    tr.appendChild(tdNota2);
    tr.appendChild(tdNota3);
    tr.appendChild(tdMedia);
    tr.appendChild(tdBotao);
    
    
    table.onclick = (evento) => {
      if (evento.target.classList.contains('botao')) {
          if (confirm('Deseja remover esse aluno?')) {
              evento.target.parentElement.remove();
          }
      }
  }
 
}

 
  
  
  
  
  
