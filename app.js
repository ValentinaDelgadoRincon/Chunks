import {encoding_for_model} from "tiktoken";
import fs from "fs";
async function contarTokens(){
//1. Seleccionar el modelo a utilizar
const    encoding = encoding_for_model('gpt-4');
//2. Ingresar el texto a convertir
const texto = fs.readFileSync("./libro.txt", "utf-8");
//3. Codificar el texto a tokens => Embebido
const generado= encoding.encode(texto);
console.log(generado);
//4. Imprimir la cantidad de tokens generados
console.log('CAntidad de Tokens Generados:' +generado.length);
//Calcular costos (Estimado) --> Tokens de entrada
const costoPorMilTokens=0.03;
const costoFinal = (generado.length*costoPorMilTokens)/1000;
console.log(`Costo estimado: ${costoFinal} USD`);
}
contarTokens();

