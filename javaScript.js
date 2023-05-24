
// Funciones OnClick de botones
    function BtnEncriptar(){
        Entrada = document.getElementById('txta_Entrada').value;
        Salida = ""
        verificador();
        
        if(flag == false){
            separarPalabras();
            encriptador();
            resultado();
        }

        //Esto solo sirve para comprobar por consola el mensaje y el array de palabrtas
            console.log(Palabras);
            console.log(Salida);
        
    }

    function BtnDesencriptar(){
        Entrada = document.getElementById('txta_Entrada').value;
        Salida = ""
        verificador();

        if(flag == false){
            desencriptador();
            resultado();
        }
    }

    function BtnCopiar(){
        let text = document.querySelector('#txta_Salida').value
        return text       
    }

    async function copy(){
        let txt = BtnCopiar();
        await navigator.clipboard.writeText(txt);
        alert("Se ha copaido en el portapapeles");
    }

//Funcion parta verificar que la Entrada cumpla los requisitos
    function verificador(){
        let cadena
        Salida = ""
        flag = true;
        resultado();

        cadena = /[^a-z | " " | "ñ"]/g
        flag = cadena.test(Entrada);
        if (flag == true){
            alert("El ecriptador no admite: \n    > Mayusculas \n    > Acentos \n    > Caracteres especiales \nPor favor eliminelos");
        }
    }   


// Funcion parar palabras del text area en un array
    function separarPalabras(){
        Palabras = Entrada.split(' ');
    }

// Funciones para Encriptar y Desencriptar texto
    function desencriptador(){
        Salida = Entrada;

        Salida = Salida.replace(/ai/g,"a") + " ";
        console.log(Salida);
        Salida = Salida.replace(/imes/g,"i") + " ";
        console.log(Salida);
        Salida = Salida.replace(/ufat/g,"u") + " ";
        console.log(Salida);
        Salida = Salida.replace(/enter/g,"e") + " ";
        console.log(Salida);
        Salida = Salida.replace(/ober/g,"o") + " ";
        console.log(Salida);
    }

    function encriptador(){
        
        for(var i=0; i<Palabras.length; i++){
            Letras = Palabras[i].split('')  
            for(var j=0; j<Letras.length; j++){
                switch (Letras[j]) {
                    case 'a':
                        Salida = Salida + "ai";
                        break;
                    case 'i' :
                        Salida = Salida + "imes";
                        break;
                    case 'u' :
                        Salida = Salida + "ufat";
                        break;
                    case 'e':
                        Salida = Salida + "enter";
                        break;
                    case 'o':
                        Salida = Salida + "ober"; 
                        break;
                    default:
                        Salida = Salida + Letras[j];
                        break;
                }
            }
            Salida = Salida + " ";
        }
    }

// Funcion para imprimir pantalla
    function resultado(){
        document.getElementById('txta_Salida').innerHTML = Salida;
    }



// Variables
    var Entrada
    var Salida
    var flag;
    var Palabras = Array();
    var Letras = Array();
    let btn = document.querySelector('#BtnCopiar');
    btn.addEventListener('click', copy);