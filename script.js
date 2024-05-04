function filtranum(numeros, resultado) {
  let count = 0

  if(numero <= 1) return 0
  for (let i = 0; i < numeros.length; i++) {
    const numStr = numeros[i].toString();
    if(numeros[i] <= 10) return 0
    if (numStr[0] === numStr[numStr.length - 1]) {
      resultado.push(numeros[i]);
      count++;
    }
  }
  return count;
}

function download(content, fileName, contentType) {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

function processFile() {
  const fileInput = document.getElementById('fileInput').files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const fileContent = event.target.result;
    const numeros = fileContent.trim().split(' ').map(Number);
    const resultado = [];

    numeros.shift() 

    const count = filtranum(numeros, resultado);

    if(count == 0) { 
      alert('El numero de elementos es igual o menor a 1 o cada elementos es menor o igual a 10');
    } else {
      const output = `${count}\r\n${resultado.join(' ')}`;

      download(output, 'output.txt', 'text/plain');
    }
  };

  reader.readAsText(fileInput);
}