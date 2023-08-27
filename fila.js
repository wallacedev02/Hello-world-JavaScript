const fila = [];
let opcao;

do {
  let paciente = "";
  for (let i = 0; i < fila.length; i++) {
    paciente += i + 1 + " - " + fila[i] + "\n";
  }
  opcao = prompt(
    "Lista de espera: " +
      paciente +
      "\n 1 - Novo paciente " +
      "\n 2 - Consultar paciente" +
      "\n 3 - Sair"
  );
  if (opcao == "1") {
    const novoPaciente = fila.push(prompt("Digite o nome do paciente: "));
    paciente += novoPaciente;
  } else if (opcao == "2") {
    const retirarPaciente = fila.shift();
    if (!retirarPaciente) {
      alert("Não há pacientes na fila");
    } else {
      alert(retirarPaciente + " consultado!");
    }
  } else if (opcao == "3") {
    alert("Encerrando...");
  }
} while (opcao !== "3");
