function mostrarSecao(secao) {
    // Oculta todas as seções
    document.querySelectorAll("section").forEach(function (element) {
      element.style.display = "none";
    });
  
    // Mostra a seção  que o  link  foi clicado
    document.getElementById(secao).style.display = "block";
  }