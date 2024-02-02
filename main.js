const converterBtn = document.getElementById('converterBtn')
const resultado = document.getElementById('resultadoDiv')
const toFahrenheit = document.getElementById('opcao1')
const toCelsius = document.getElementById('opcao2')
const userTemperatura = document.getElementById('userInput')

let temperatura;

function converter() {
    if(toFahrenheit.checked) {
        temperatura = Number(userTemperatura.value);
        temperatura = temperatura * 9 / 5 + 32;
        resultado.innerHTML = `<p> ${temperatura.toFixed(1)}°C <p/>`;    
    } else if (toCelsius.checked) {
        temperatura = Number(userTemperatura.value);
        temperatura = (temperatura - 32) * (5 / 9);
        resultado.innerHTML = `<p> ${temperatura.toFixed(1)}°F <p/>`;    
    }
}