let frases = document.getElementById("frases");

const obtenerDatos = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    const result = await response.json();
    frases.innerHTML = result.value;
    return result;
  } catch (error) {
    alert("No se pudo obtener la información");
  }
};


obtenerDatos();


