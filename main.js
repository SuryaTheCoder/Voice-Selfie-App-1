let SpeechRecognition = window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

function start()
{
  document.getElementById("textbox").innerHTML = "";
  recognition.start();
}

recognition.onresult = function run (event)
{
  console.log(event);

  let Content = event.results[0][0].transcript;
  console.log(Content);

  document.getElementById("textbox").innerHTML = Content;
}