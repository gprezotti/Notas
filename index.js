document.getElementById('inputForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Captura o valor do input NOME
  const inputValueName = document.getElementById('nome').value;
  
  // Captura o valor do input EMAIL
  const inputValueEmail = document.getElementById('email').value;
  
  // Captura o valor do input NOTA
  const inputValueGrade = document.getElementById('nota').value;

  // Cria uma nova linha na tabela
  const newRow = document.createElement('tr');

  // Adiciona a nova linha ao corpo da tabela
  document.querySelector('#dataTable tbody').appendChild(newRow);

  // Cria uma nova célula e adiciona o valor do input NOME
  const newCellName = document.createElement('td');
  newCellName.textContent = inputValueName;
  newRow.appendChild(newCellName);
  
  // Cria uma nova célula e adiciona o valor do input EMAIL
  const newCellEmail = document.createElement('td');
  newCellEmail.textContent = inputValueEmail;
  newRow.appendChild(newCellEmail);
  
  // Cria uma nova célula e adiciona o valor do input NOTA
  const newCellGrade = document.createElement('td');
  newCellGrade.textContent = inputValueGrade;
  newRow.appendChild(newCellGrade);

  // Cria uma nova célula e adiciono um valor para o STATUS
  const newCellStatus = document.createElement('td');
  if (inputValueGrade < 3)
    {
      newCellStatus.textContent = 'Reprovado'
      newCellStatus.style.backgroundColor = 'red'
    }
    else if (inputValueGrade >= 3 && inputValueGrade < 7)
      {
        newCellStatus.textContent = 'Recuperação'
        newCellStatus.style.backgroundColor = 'yellow'
      }
    else if (inputValueGrade >= 7)
      {
        newCellStatus.textContent = 'Aprovado'
        newCellStatus.style.backgroundColor = 'green'
      }
  newRow.appendChild(newCellStatus);

  // Limpa o input NOME
  document.getElementById('nome').value = '';
  
  // Limpa o input EMAIL
  document.getElementById('email').value = '';
  
  // Limpa o input NOTA
  document.getElementById('nota').value = '';
});
