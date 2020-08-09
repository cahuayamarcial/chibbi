$(function () {
  $('.chat-launcher').on('click', function () {
      $('.chat-launcher').toggleClass('active');
      $('.chat-wrapper').toggleClass('is-open');
      $('.chat-wrapper').removeAttr('style');
  });



  // $('#clp').click(function(){
//   $('#clp').on('click', function () {
//   alert("Hola mudno");
// });

$(".conversation-container").on("click", "div", function(){
  // alert($(this).text());

  let msgUser = $('.mgsChibi').text();
  if($(this).text() == 'La Paz'){
    sendWhatsApp(59176569975, msgUser)
  }else if($(this).text() == 'El Alto'){
    sendWhatsApp(59176574941, msgUser)
  }else if($(this).text() == 'Cochabamba'){
    sendWhatsApp(59174160012, msgUser)
  }else{
    sendWhatsApp(59176214071, msgUser)
  }
});


});



function sendWhatsApp(num, msgUser){
  // let num = 00000000
  // alert("Esta herramienta aún se encuentra en desarrollo.")
  if (msgUser) {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      var sendWhatsapp = `https://api.whatsapp.com/send/?phone=${num}&text=${msgUser}`
      window.open(sendWhatsapp)
    } else {
      var sendWhatsapp = `https://web.whatsapp.com/send/?phone=${num}&text=${msgUser}`
      window.open(sendWhatsapp)
    }
    
  }
}


$("#returnMenu").click(function(e) {
  $("#sectionWhatsapp").hide();
  $("#sectionFaq").hide();
  $("#sectionList").show();
  $("#firstMessage").show();
  $("#returnMenu").hide();
  $("#sectionChibbiChat").hide();
  $('#sectionZoomM').hide();
});

$("#whatsapp").click(function(e) {
  $("#sectionWhatsapp").show();
  $("#sectionList").hide();
  $("#firstMessage").hide();
  $("#returnMenu").show();
});

$("#faqChibbi").click(function(e) {
  $("#sectionFaq").show();
  $("#sectionList").hide();
  $("#firstMessage").hide();
  $("#returnMenu").show();
})

$("#chatChibbi").click(function(e) {
  $("#sectionChibbiChat").show();
  $("#sectionList").hide();
  $("#firstMessage").hide();
  $("#returnMenu").show();
})

$("#zoomChibbi").click(function(e) {
  $("#sectionZoomM").show();
  $("#sectionList").hide();
  $("#firstMessage").hide();
  $("#returnMenu").show();
})



$("#lpMail").click(function(e) {
  window.location.href = "mailto:mailto:soportedocente-lp@unifranz.edu.bo";
})
$("#eaMail").click(function(e) {
  window.location.href = "mailto:mailto:soportedocente-ea@unifranz.edu.bo";
})
$("#cbMail").click(function(e) {
  window.location.href = "mailto:mailto:soportedocente-cb@unifranz.edu.bo";
})
$("#scMail").click(function(e) {
  window.location.href = "mailto:mailto:soportedocente-sc@unifranz.edu.bo";
})

var msg = [
'Hola, ¿cómo te puedo ayudar?',
// 'Hola, ¿Cómo te puedo ayudar?',
];

var random = document.querySelector('#random');

random.innerHTML = msg[Math.floor(Math.random() * msg.length)];

/* Time */

var deviceTime = document.querySelector('.status-bar .time');
var messageTime = document.querySelectorAll('.message-chibbi .time');

deviceTime.innerHTML = moment().format('h:mm');

setInterval(function() {
deviceTime.innerHTML = moment().format('h:mm');
}, 1000);

for (var i = 0; i < messageTime.length; i++) {
messageTime[i].innerHTML = moment().format('h:mm A');
}

/* Message */

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');

form.addEventListener('submit', newMessage);

function newMessage(e) {
e.preventDefault();

var input = e.target.input;

if (input.value) {
	const message = buildMessage(input.value);
	conversation.appendChild(message);
  animateMessage(message);

  var resp = buildMessageReceived(input.value);
  conversation.appendChild(resp);
  
  var branch = buildMessageReceivedBranch('La Paz', 'clp');
  conversation.appendChild(branch);
  
  var branch = buildMessageReceivedBranch('El Alto', 'cea');
  conversation.appendChild(branch);
  var branch = buildMessageReceivedBranch('Cochabamba', 'ccbba');
  conversation.appendChild(branch);
  var branch = buildMessageReceivedBranch('Santa Cruz', 'ccz');
	conversation.appendChild(branch);
  
}

input.value = '';
conversation.scrollTop = conversation.scrollHeight;

}

function buildMessage(text) {
var element = document.createElement('div');

element.classList.add('message-chibbi', 'sent');

element.innerHTML = '<span class="mgsChibi">'+text+'</span>' +
  '<span class="metadata">' +
    '<span class="time">' + moment().format('h:mm A') + '</span>' +
    '<span class="tick tick-animation">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
    '</span>' +
  '</span>';

return element;
}


function buildMessageReceived() {
  var element = document.createElement('div');
  
  element.classList.add('message-chibbi', 'received');
  
  element.innerHTML = 'Por favor, haz clic en la sede que <br>pertence: 👇' +
    '<span class="metadata">' +
      '<span class="time">' + moment().format('h:mm A') + '</span>' +
      '<span class="tick tick-animation">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
      '</span>' +
    '</span>';
  return element;
  }

function buildMessageReceivedBranch($branchName, $idName) { 
  var branch = document.createElement('div');
  
  branch.classList.add('message-chibbi-select');
  branch.setAttribute("id", $idName);
  branch.innerHTML = $branchName;
  
  return branch;
  }

function animateMessage(message) {
setTimeout(function() {
  var tick = message.querySelector('.tick');
  tick.classList.remove('tick-animation');
}, 500);
}


// $('#clp').click(function(){
//   alert("Hola mudno");
// });
// $('#clp').live('click', function(){
//   alert("asdsaasd");
// });

// var app = new Vue({
//     el: '#chibbi',
//     name: 'App',
//     data() {
//       return {
//         // open: false
//       }
//     },
//     // computed: {
//     //   playerWidth() {
//     //     return {
//     //       width: `calc(var(--card-width) / ${this.players}`
//     //     }
//     //   }
//     // },
//     mounted() {
//     },
//     methods: {
//     }
// })







$(document).ready(() => {


  /******************/
  /*** START CHAT ***/
  /******************/
  
  
  // set visitor name
  let $userName = "Tom";
  
  // start chatbox
  $("#form-start").on("submit", (event) => {
    event.preventDefault();
    $userName = $("#username").val();
    $("#landing").slideUp(300);
    setTimeout(() => {
      $("#start-chat").html("Continue chat")
    }, 300);
  });
  
  
  
  
  /*****************/
  /*** USER CHAT ***/
  /*****************/
  
  
  // Post a message to the board
  function $postMessage() {
    $("#message").find("br").remove();
    let $message = $("#message").html().trim(); // get text from text box
    $message = $message.replace(/<div>/, "<br>").replace(/<div>/g, "").replace(/<\/div>/g, "<br>").replace(/<br>/g, " ").trim();
    if ($message) { // if text is not empty
      const html = `<div class="post post-user">${$message + timeStamp()}</span></div>`; // convert post to html
      $("#message-board").append(html); // add post to board
      $scrollDown(); // stay at bottom of chat
      botReply($message);
    };
    $("#message").empty();
  };
  
  // Chat input
  $("#message").on("keyup", (event) => {
    if (event.which === 13) $postMessage(); // Use enter to send
  }).on("focus", () => {
    $("#message").addClass("focus");
  }).on("blur", () => {
    $("#message").removeClass("focus");
  });
  $("#send").on("click", $postMessage);
  
  
  
  
  /**********************/
  /*** AUTO REPLY BOT ***/
  /**********************/
  
  
  function botReply(userMessage) {
    const reply = generateReply(userMessage);
    if (typeof reply === "string") postBotReply(reply);
    else reply.forEach((str) => postBotReply(str));
  };
  
  function generateReply(userMessage) {
    // limpiamos cadena
    const message = getCleanedString(userMessage.toLowerCase());

    let reply = ""
    let defaultMessage = ['Ups, no he entendido a que te refieres.', '¿Podrías repetirlo, por favor?', '¿Disculpa?', '¿Decías?', '¿Cómo?', 'Lo siento, no logro entenderte 😔'];
  
    // Respuestas
    let intro = ["Hola!", "Hola 😊"];
    let love = ["Gracias! 😍", "Gracias, también te quiero", "Qué ternura", "😍"];
  
  
    // Generate some different replies
    if (/^hola$|^hola?a|^ola|^hey|^oli|^holas/.test(message)) reply = intro[Math.floor(Math.random() * intro.length)];
    else if (/test/.test(message)) reply = [`Ok`, `Feel free to test as much as you want`];
    else if (/help|sos|emergency|support/.test(message)) reply = [`I am here to help.`, `What seems to be the problem?`];
    else if (/class\=\"fa/.test(message)) reply = [`I see you've found the smileys`, `Cool! <span class="far fa-grin-beam fa-2x"></span>`, `Did you need something?`];
    else if (/how|what|why/.test(message)) reply = userMessage + " what?";
    else if (/^huh+|boring|lame|wtf|pff/.test(message)) reply = [`<span class="far fa-dizzy fa-2x"></span>`, `I'm sorry you feel that way`, `How can I make it better?`];
    else if (/como estas|ciao|adieu|salu/.test(message)) reply = [`Bien, gracias y tu?`];
    else if (/jeje|gg|jejeje|jajaja/.test(message)) reply = [`Es bueno sonreir`];
    else if (/bye|ciao|adieu|salu/.test(message)) reply = defaultMessage[Math.floor(Math.random() * intro.length)];
    else if (/te amo|te quiero/.test(message)) reply = love[Math.floor(Math.random() * intro.length)];
    else if (/oki|ok|oky|okay/.test(message)) reply = "Bueno, te puedo ayudar en algo más? 😃";
    else reply = defaultMessage[Math.floor(Math.random() * intro.length)];
  
    return reply;
  };
  
  function postBotReply(reply) {
    const html = `<div class="post post-bot">${reply + timeStamp()}</div>`;
    const timeTyping = 500 + Math.floor(Math.random() * 2000);
    $("#message-board").append(html);
    $scrollDown();
  };
  
  
  
  /******************/
  /*** TIMESTAMPS ***/
  /******************/
  
  
  function timeStamp() {
    // const timestamp = new Date();
    // const hours = timestamp.getHours();
    // let minutes = timestamp.getMinutes();
    // if (minutes < 10) minutes = "0" + minutes;
    // const html = `<span class="timestamp">${hours}:${minutes}</span>`;
    // return html;

    const timestamp = new Date();
    const hours = timestamp.getHours();
    let minutes = timestamp.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    const html = ``;
    return html;
  };
  
  
  
  
  /***************/
  /*** CHAT UI ***/
  /***************/
  
  
  // Back arrow button
  $("#back-button").on("click", () => {
    $("#landing").show();
  });
  
  
  // Menu - navigation
  $("#nav-icon").on("click", () => {
    $("#nav-container").show();
  });
  
  $("#nav-container").on("mouseleave", () => {
    $("#nav-container").hide();
  });
  
  $(".nav-link").on("click", () => {
    $("#nav-container").slideToggle(200);
  });
  
  // Clear history
  $("#clear-history").on("click", () => {
    $("#message-board").empty();
    $("#message").empty();
  });
  
  // Sign out
  $("#sign-out").on("click", () => {
    $("#message-board").empty();
    $("#message").empty();
    $("#landing").show();
    $("#username").val("");
    $("#start-chat").html("Start chat");
  });
  
  
  
  
  /*********************/
  /*** SCROLL TO END ***/
  /*********************/
  
  
  function $scrollDown() {
    const $container = $("#message-board");
    const $maxHeight = $container.height();
    const $scrollHeight = $container[0].scrollHeight;
    if ($scrollHeight > $maxHeight) $container.scrollTop($scrollHeight);
  }
  
  
  
  
  /***************/
  /*** EMOIJIS ***/
  /***************/
  
  
  // toggle emoijis
  $("#emoi").on("click", () => {
    $("#emoijis").slideToggle(300);
    $("#emoi").toggleClass("fa fa-grin far fa-chevron-down");
  });
  
  // add emoiji to message
  $(".smiley").on("click", (event) => {
    const $smiley = $(event.currentTarget).clone().contents().addClass("fa-lg");
    $("#message").append($smiley);
    $("#message").select(); // ==> BUG: message field not selected after adding smiley !! 
  });
  
// LIMPIAMOS CADENA

  function getCleanedString(cadena){
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
 
    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }   
 
    // Lo queremos devolver limpio en minusculas
    cadena = cadena.toLowerCase();
 
    // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
    cadena = cadena.replace(/ /g," ");
 
    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    cadena = cadena.replace(/á/gi,"a");
    cadena = cadena.replace(/é/gi,"e");
    cadena = cadena.replace(/í/gi,"i");
    cadena = cadena.replace(/ó/gi,"o");
    cadena = cadena.replace(/ú/gi,"u");
    cadena = cadena.replace(/ñ/gi,"n");
    return cadena;
 }
  
  
  
  
  });