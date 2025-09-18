$(document).ready(function () {

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

  $(window).scroll(function () {
    var nav = $(".header-dinamico .container");
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
      nav.fadeIn();
    } else {
      nav.fadeOut();
    }
  });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

  lgpd = document.getElementById("lgpd");
  direitos = document.getElementById("direitos");
  digitais = document.getElementById("digitais");
  cidadao = document.getElementById("secaocidadao");
  empresa = document.getElementById("secaoempresa");
  protegidos = document.getElementById("protegidos");
  indevidamente = document.getElementById("indevidamente");
  reclamacao = document.getElementById("reclamacao");
  empresas = document.getElementById("empresas");
  clientes = document.getElementById("clientes");
  pessoais = document.getElementById("pessoais");
  

  document.getElementById("botaolgpd").onclick = function () {
    
    if (this.classList.contains("ativo")){
      return;
    } else {
      removeAtivo()
      this.classList.add('ativo');
      revela([lgpd])
      esconde([digitais,direitos]);
    }    
  }

  document.getElementById("botaodireitos").onclick = function () {
    if (this.classList.contains("ativo")){
      return;
    } else {
      removeAtivo()
      this.classList.add('ativo');
      revela([direitos])
      esconde([lgpd,digitais]);
    }    
  }

  document.getElementById("botaodigitais").onclick = function () {
    if (this.classList.contains("ativo")){
      return;
    } else {
      removeAtivo()
      this.classList.add('ativo');
      esconde([lgpd,direitos]);
      revela([digitais]);
    }    
  }

  document.getElementById("botaoprotegidos").onclick = function () {
    
    if (this.classList.contains("ativo")){
      return;
    } else {
      removeAtivo2()
      this.classList.add('ativo');
      revela([protegidos])
      esconde([indevidamente,reclamacao]);
    }    
  }

  document.getElementById("botaoindevidamente").onclick = function () {
    if (this.classList.contains("ativo")){
      return;
    } else {
      removeAtivo2()
      this.classList.add('ativo');
      revela([indevidamente])
      esconde([protegidos,reclamacao]);
    }    
  }

  document.getElementById("botaoreclamacao").onclick = function () {
    if (this.classList.contains("ativo")){
      return;
    } else {
      removeAtivo2()
      this.classList.add('ativo');
      esconde([indevidamente,protegidos]);
      revela([reclamacao]);
    }    
  }

  document.getElementById("botaoempresas").onclick = function () {
    
    if (this.classList.contains("ativo")){
      return;
    } else {
      removeAtivo3()
      this.classList.add('ativo');
      revela([empresas])
      esconde([clientes,pessoais]);
    }    
  }

  document.getElementById("botaoclientes").onclick = function () {
    if (this.classList.contains("ativo")){
      return;
    } else {
      removeAtivo3()
      this.classList.add('ativo');
      revela([clientes])
      esconde([empresas,pessoais]);
    }    
  }

  document.getElementById("botaopessoais").onclick = function () {
    if (this.classList.contains("ativo")){
      return;
    } else {
      removeAtivo3()
      this.classList.add('ativo');
      esconde([empresas,clientes]);
      revela([pessoais]);
    }    
  }


  function removeAtivo(){
    document.getElementById("botaolgpd").classList.remove('ativo');
    document.getElementById("botaodireitos").classList.remove('ativo');
    document.getElementById("botaodigitais").classList.remove('ativo');
  }

  function removeAtivo2(){
    document.getElementById("botaoprotegidos").classList.remove('ativo');
    document.getElementById("botaoindevidamente").classList.remove('ativo');
    document.getElementById("botaoreclamacao").classList.remove('ativo');
  }

  function removeAtivo3(){
    document.getElementById("botaoempresas").classList.remove('ativo');
    document.getElementById("botaoclientes").classList.remove('ativo');
    document.getElementById("botaopessoais").classList.remove('ativo');
  }

  function esconde(e){
    for (let i = 0; i < e.length; i++) {
      e[i].style.display = 'none';
    }
  }

  function revela(e){
    for (let i = 0; i < e.length; i++) {
      e[i].style.display = 'block';
    }
  }

  document.getElementById('botaocidadao').onclick = function () {
    empresa.style.display = 'none';
    cidadao.style.display = 'block';
  };

  document.getElementById('botaoempresa').onclick = function () {
    cidadao.style.display = 'none';
    empresa.style.display = 'block';

  };

  var z = document.getElementsByClassName('blocoquestao').length;

  for (let index = 0; index < z; index++) {
    document.getElementsByClassName('blocoquestao')[index].onclick = function () {
      if ($(this).hasClass('errado')) {
        this.classList.remove('blocoquestao');
        this.style.color = "white";
        this.classList.add('tremer')
      } else {
        this.classList.remove('blocoquestao');
      }
    }
    
  }

  $('.areaDropable').droppable({
    accept: '.arrastavel',
    drop: function(event, ui) {
      ui.draggable.css({
        backgroundColor: 'white',
        color: 'black'
      });
      let membroDropado = ui.draggable[0].dataset.membro;
      let membroCaixa = this.dataset.membro;
      if (membroDropado != membroCaixa) {
        ui.draggable.css({
          top: 0,
          left: 0
        });
      } else {
        this.classList.add('completo');
        this.innerHTML = ui.draggable[0].innerHTML;
        ui.draggable[0].classList.add('devolvido')
      }
    }
  })

  $('.arrastavel').draggable({
    revert: 'invalid'
  })



  for (let index = 0; index < document.querySelectorAll('#botaotroca').length; index++) {
    document.querySelectorAll('#botaotroca')[index].onclick = function () {
      empresa.style.display = 'none';
      cidadao.style.display = 'none';
    }
    
  }
  

});