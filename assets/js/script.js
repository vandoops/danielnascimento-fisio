/* ========== FORMULÁRIO DE AGENDAMENTO WHATSAPP ========== */
/* Descrição: Captura dados do formulário e envia mensagem via WhatsApp */
document.getElementById("form-whatsapp").addEventListener("submit", function(e){
  e.preventDefault();

  // Captura os valores do formulário
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const problema = document.getElementById("problema").value;

  // Monta a mensagem personalizada
  const mensagem = `Olá, me chamo ${nome}. Meu problema é: ${problema}. Meu WhatsApp é ${telefone}.`;

  // Número da clínica (MODIFICAR CONFORME NECESSÁRIO)
  const numeroClinica = "551899999999"; // trocar
  const url = `https://wa.me/${numeroClinica}?text=${encodeURIComponent(mensagem)}`;

  // Abre o WhatsApp em uma nova aba
  window.open(url, "_blank");
});
/* ========== FIM DO FORMULÁRIO WHATSAPP ========== */
