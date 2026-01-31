document.getElementById('btn-calcular').addEventListener('click', function() {
  const edad = parseInt(document.getElementById('edad').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const sexo = document.getElementById('sexo').value;
  const actividad = parseFloat(document.getElementById('actividad').value);
  const objetivo = parseFloat(document.getElementById('objetivo').value);

  if (!edad || !peso || !altura) {
    alert("Introduce tus datos básicos.");
    return;
  }

  const imc = peso / ((altura/100) * (altura/100));
  let tmb = (10 * peso) + (6.25 * altura) - (5 * edad);
  tmb = (sexo === 'hombre') ? tmb + 5 : tmb - 161;
  const mantenimiento = tmb * actividad;
  const kcalFinal = mantenimiento + objetivo;
  const agua = (peso * 35) / 1000;

  document.getElementById('resultados').style.display = 'block';
  document.getElementById('val-imc').innerText = imc.toFixed(1);
  document.getElementById('val-tmb').innerText = Math.round(tmb);
  document.getElementById('val-kcal').innerText = Math.round(kcalFinal);
  document.getElementById('val-agua').innerText = agua.toFixed(1) + " Litros";

  let pos = 0;
  let estado = "";
  let consejo = "";

  if (imc < 18.5) { pos = 10; estado = "DELGADEZ"; consejo = "Enfócate en comer más carbohidratos complejos y proteína."; }
  else if (imc < 25) { pos = 35; estado = "NORMAL"; consejo = "¡Estás en forma! Mantén tu ritmo de entrenamiento."; }
  else if (imc < 30) { pos = 62; estado = "SOBREPESO"; consejo = "Prioriza el cardio y reduce azúcares procesados."; }
  else { pos = 90; estado = "OBESIDAD"; consejo = "Consulta a un profesional. Camina más y cuida las porciones."; }

  document.getElementById('marcador').style.left = pos + "%";
  document.getElementById('txt-estado').innerText = estado;
  document.getElementById('consejo-ia').innerText = consejo;
  document.getElementById('resultados').scrollIntoView({ behavior: 'smooth' });
});