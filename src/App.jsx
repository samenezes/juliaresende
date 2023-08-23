import 'fetch'
import './App.css'

function App() {

  const pergunta = document.querySelector('#pergunta');
  const resposta_certa = document.querySelector('#resposta');

  const resultado = pergunta && resposta_certa;

  resultado = [];
  fetch("https://opentdb.com/api.php?amount=30&category=15")
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      for (var i = 0; i < result.length; i++){
        resultado.push(result[i]);
      }

      console.log(resultado)
      renderizar();
    })

  function renderizar() {
    `<tr>
      <td> ${resultado.question}</td>
      <td> ${resultado.correct_answer}</td>
    </tr>`;
  }



  return (
    <body>

    <div class="cabecalho">
      <h5>Essa é minha prova:</h5>
    </div>

    <div class="pergunta_resposta">
      <h3>PERGUNTA: (<span id="pergunta"></span>)</h3>
      <h3>RESPOSTA CERTA: (<span id="resposta"></span>)</h3>
    </div>

    <div class="rodape">
    <h1>Julia Resende </h1>
    </div>

    </body>
    
  )
}

export default App
