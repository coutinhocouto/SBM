// JavaScript Document
$(document).ready(function(){

    var totalWords = Cookies.get('nome');
    firstWord = totalWords.replace(/ .*/,'');

    $('#app').prepend('<div id="mySidenav" class="sidenav"><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><a href="minha-conta.html"><span><img src="img/icon/user.png" alt="" /></span> Minha conta</a><a href="eventos.html"><span><img src="img/icon/calendar.png" alt="" /></span> Eventos</a><a href="ferramentas.html"><span><img src="img/icon/tool.png" alt="" /></span> Ferramentas</a><a href="videos.html"><span><img src="img/icon/vid.png" alt="" /></span> Vídeos</a><a href="publicacoes.html"><span><img src="img/icon/book.png" alt="" /></span> Publicações</a><a href="forum.html"><span><img src="img/icon/chat.png" alt="" /></span> Fórum</a><a href="mailto:contato@scmastologia.com.br"><span><img src="img/icon/envelope.png" alt="" /></span> Contato</a><a href="canais.html"><span><img src="img/icon/share.png" alt="" /></span> Nossos canais</a><a href="sobre.html"><span><img src="img/icon/light.png" alt="" /></span> Sobre o app</a><a href="mailto:contato@scmastologia.com.br?subject=Sugestões e melhorias para o APP SBM"><span><img src="img/icon/ballon.png" alt="" /></span> Envie sua sugestão</a><a href="#" id="logout"><span><img src="img/icon/logout.png" alt=""></span> Sair</a></div>');

    $('#main').prepend('<header><div class="p1"><i class="fas fa-bars" onclick="openNav()"></i>Olá, <strong>' + firstWord + '</strong></div><div class="p2"><img src="img/logo-branca.png" alt="" /></div></header>');
    $('#main').append('<footer><div class="container"><div class="row"><div class="col-3"></div><div class="col-3"><a href="canais.html"><i class="fas fa-share-alt"></i></a></div><div class="col-3"><a href="mailto:contato@scmastologia.com.br?subject=Nova mensagem de contato - APP SBM"><i class="fas fa-envelope-open"></i></a></div><div class="col-3"></div></div></div></footer>');

    $("header").sticky({topSpacing:0});

    $('#logout').click(function(){
        Cookies.remove('nome');
        Cookies.remove('cpf');
        Cookies.remove('id');
        Cookies.remove('email');
        window.location.replace("index.html");
    })

});

$( document ).ajaxStart(function() {   "use strict";  $( "#loader" ).show(); $( "#loader" ).css('display', 'block'); $( "#loader" ).css('margin', '0 auto');});

$( document ).ajaxStop(function() {	"use strict";  $( "#loader" ).hide(); 	
	

});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.addEventListener('load', function () {    
    $(document).on('click', 'a[target="_system"],a[target="_blank"]', function (e) {
            e.preventDefault();
            var url = this.href;
            window.open(url,"_system");                    
    });
    //}
}, false);

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "330px";
	document.getElementById("main").style.marginLeft = "330px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
} 

function cutString(s, n){
    var cut= s.indexOf(' ', n);
    if(cut== -1) return s;
    return s.substring(0, cut)
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(
window,document,'script','https://www.google-analytics.com/analytics.js','gaU');
gaU('create','UA-167304712-1',{'storage':'none','clientId':Cookies.get('player')});
gaU('set','checkProtocolTask',null);
gaU('set','anonymizeIp',true);
gaU('set','forceSSL',true);

//gaU('send','event',{'eventCategory':'My_Category','eventAction':'My_Action','eventLabel':'Event_Label','eventValue':11});

