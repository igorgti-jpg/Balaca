/**
 * Sistema de Agendamento - Barbearia
 * Lógica em JavaScript equivalente à função em Python horario_disponivel
 */

// Horários de funcionamento padrão da barbearia no dia
const HORARIOS_DIA = [
  "09:00", "10:00", "11:00", "12:00", 
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
];

// Lista inicial de horários ocupados (exatamente a da aula/especificação)
const HORARIOS_INICIAIS = ["10:00", "11:00", "14:00"];

// Estado atual dos horários ocupados
let horariosOcupados = [...HORARIOS_INICIAIS];

/**
 * Função Principal de Verificação
 * Equivalente direto em Python a:
 * def horario_disponivel(horario, horarios_ocupados):
 *     return horario not in horarios_ocupados
 */
function horarioDisponivel(horario, listaOcupados) {
  return !listaOcupados.includes(horario);
}

// Elementos do DOM
const inputHorario = document.getElementById("input-horario");
const btnVerificar = document.getElementById("btn-verificar");
const btnAgendar = document.getElementById("btn-agendar");
const btnReset = document.getElementById("btn-reset");
const slotsContainer = document.getElementById("slots-container");

const countOcupados = document.getElementById("count-ocupados");
const countDisponiveis = document.getElementById("count-disponiveis");
const countTotal = document.getElementById("count-total");

const resultadoBox = document.getElementById("resultado-box");
const resultIcon = document.getElementById("result-icon");
const resultStatus = document.getElementById("result-status");
const resultMsg = document.getElementById("result-msg");
const resultCodeExplain = document.getElementById("result-code-explain");

/**
 * Atualiza os contadores no topo da página
 */
function atualizarMetricas() {
  const total = HORARIOS_DIA.length;
  const ocupadosCount = HORARIOS_DIA.filter(h => !horarioDisponivel(h, horariosOcupados)).length;
  const livresCount = total - ocupadosCount;

  countOcupados.textContent = ocupadosCount;
  countDisponiveis.textContent = livresCount;
  countTotal.textContent = total;
}

/**
 * Renderiza os cartões de horários do dia
 */
function renderizarSlots() {
  slotsContainer.innerHTML = "";
  const horarioAtualInput = inputHorario.value.trim();

  HORARIOS_DIA.forEach(hora => {
    const disponivel = horarioDisponivel(hora, horariosOcupados);
    
    const slotCard = document.createElement("button");
    slotCard.type = "button";
    slotCard.className = `slot-card ${disponivel ? "slot-available" : "slot-occupied"} ${hora === horarioAtualInput ? "selected" : ""}`;
    slotCard.setAttribute("aria-label", `Horário ${hora} - ${disponivel ? "Disponível" : "Ocupado"}`);

    slotCard.innerHTML = `
      <span class="slot-time">${hora}</span>
      <span class="slot-status-badge">${disponivel ? "Livre" : "Ocupado"}</span>
    `;

    slotCard.addEventListener("click", () => {
      inputHorario.value = hora;
      verificarHorarioAtual();
      renderizarSlots();
    });

    slotsContainer.appendChild(slotCard);
  });

  atualizarMetricas();
}

/**
 * Executa a verificação com base no valor digitado no input
 */
function verificarHorarioAtual() {
  const horario = inputHorario.value.trim();

  if (!horario) {
    resultadoBox.className = "result-box result-danger";
    resultIcon.textContent = "⚠️";
    resultStatus.textContent = "Informe um horário";
    resultMsg.textContent = "Por favor, digite um horário válido no formato HH:MM (ex: 15:00).";
    resultCodeExplain.innerHTML = `<code>Aguardando valor...</code>`;
    return;
  }

  const disponivel = horarioDisponivel(horario, horariosOcupados);

  if (disponivel) {
    // Horário LIVRE (True)
    resultadoBox.className = "result-box result-success";
    resultIcon.textContent = "✅";
    resultStatus.textContent = "Horário Disponível!";
    resultMsg.innerHTML = `O horário <strong>${horario}</strong> está livre e pronto para receber agendamento.`;
    resultCodeExplain.innerHTML = `<code>horario_disponivel("${horario}", ocupados) == True</code>`;
  } else {
    // Horário OCUPADO (False)
    resultadoBox.className = "result-box result-danger";
    resultIcon.textContent = "❌";
    resultStatus.textContent = "Horário Ocupado!";
    resultMsg.innerHTML = `O horário <strong>${horario}</strong> já foi agendado. Escolha outro horário para evitar conflito.`;
    resultCodeExplain.innerHTML = `<code>horario_disponivel("${horario}", ocupados) == False</code>`;
  }
}

/**
 * Tenta agendar o horário atual
 */
function agendarHorarioAtual() {
  const horario = inputHorario.value.trim();

  if (!horario) {
    alert("Digite ou selecione um horário primeiro.");
    return;
  }

  // Regra de ouro: evitar dois agendamentos no mesmo horário
  if (!horarioDisponivel(horario, horariosOcupados)) {
    alert(`Atenção: O horário ${horario} já está ocupado! O sistema não permite agendamento duplicado.`);
    verificarHorarioAtual();
    return;
  }

  // Se livre, adiciona à lista de ocupados
  horariosOcupados.push(horario);
  verificarHorarioAtual();
  renderizarSlots();
}

/**
 * Restaura o estado original (["10:00", "11:00", "14:00"])
 */
function restaurarPadrao() {
  horariosOcupados = [...HORARIOS_INICIAIS];
  inputHorario.value = "15:00";
  verificarHorarioAtual();
  renderizarSlots();
}

// Event Listeners
btnVerificar.addEventListener("click", () => {
  verificarHorarioAtual();
  renderizarSlots();
});

inputHorario.addEventListener("input", () => {
  verificarHorarioAtual();
  renderizarSlots();
});

btnAgendar.addEventListener("click", agendarHorarioAtual);
btnReset.addEventListener("click", restaurarPadrao);

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  verificarHorarioAtual();
  renderizarSlots();
});
