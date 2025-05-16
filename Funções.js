function mostrarSecao(id) {
  // Esconde todas as seções
  document.querySelectorAll('main section').forEach(section => {
    section.style.display = 'none';
  });
  
  // Mostra a seção selecionada
  const secao = document.getElementById(id);
  if (secao) {
    secao.style.display = 'block';
  }
  
  // Impede o comportamento padrão do link
  return false;
}

// Mostra a primeira seção por padrão
window.onload = function() {
  mostrarSecao('sobre');
};
