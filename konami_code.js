const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler)

  let index = 0;

  function onKeyDownHandler(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || e.which);

  if (key === code[index]){
    console.log(key)
    index++;


    if (index === code.length){
      alert("Good Shit!");
      index = 0;
    }
  }else{
    index = 0;
  }

}
}



// const alphabet = [65, 66, 67];
//
// let index = 0;
//
//
// function onKeyDownHandler(e) {
//   const key = parseInt(e.detail || e.which);
//
//   if (key === alphabet[index]) {
//     index++;
//
//     if (index === alphabet.length) {
//       alert("Hurray!");
//
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }
//
// document.body.addEventListener('keydown', onKeyDownHandler)
