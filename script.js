const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const contenidoOriginal = contenido.innerHTML;

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    contenido.innerHTML = "";
    btnCopiar.style.visibility = "inherit";
    
}

function encriptar(stringEncriptada) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    btnCopiar.style.visibility = "inherit";
}

function desencriptar(stringDesencriptada) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            mensaje.value = "";
            contenido.style.display = "block"; 
            btnCopiar.style.visibility = "hidden";
            contenido.innerHTML = contenidoOriginal;
           
 })
       
}
