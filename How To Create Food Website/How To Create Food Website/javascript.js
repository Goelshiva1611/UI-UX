function record() {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "hi-GB";
  recognition.onresult = function (event) {
    console.log(event);
    document.getElementById("speechtotext").value =
      event.results[0][0].transcript;
  };
  recognition.start();
}
