
let textArea=document.querySelector("textarea");
let listen=document.querySelector("#listen");

let speech= new SpeechSynthesisUtterance();
listen.addEventListener("click",()=>{
    speech.text=textArea.value;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  
});
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Set default voice

    voiceSelect.innerHTML = ""; // Clear previous options

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i); // Correct: 'Option' with capital O
        voiceSelect.appendChild(option);
    });
};

// Optional: If you want to change the voice when selecting
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// let voices=[];
// let voiceSelect=document.querySelector("select");
// window.speechSynthesis.onvoiceschanged=()=>{
//     voices=window.speechSynthesis.getVoices();
//     speech.voice=voices[0];
//     voiceSelect.innerHTML = "";
//     voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option (voice.name,i)));
// }

let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
   textArea.value="";

});