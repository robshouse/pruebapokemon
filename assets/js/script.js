

function consultarPokemon() {

  const nombrePokemon = document.getElementById("pokemon1").value;


  return fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

    .then(function (response) {

      response.json()
        .then(function (pokemon) {

          console.log(pokemon.name);
          console.log(pokemon);

          if (nombrePokemon !== undefined) {
            mostrarPokemon(pokemon);
            return false;
          }
        });
    });

};

function mostrarPokemon(pokemon) {
  let datosPokemon = document.getElementById("datos-pokemon");
  
  let imagenPokemon1 = datosPokemon.querySelector("#imagen-pokemon-1");
  imagenPokemon1.setAttribute("src", pokemon.sprites.front_default)

  let imagenPokemon2 = datosPokemon.querySelector("#imagen-pokemon-2");
  imagenPokemon2.setAttribute("src", pokemon.sprites.back_default)

  let imagenPokemon3 = datosPokemon.querySelector("#imagen-pokemon-3");
  imagenPokemon3.setAttribute("src", pokemon.sprites.front_female)

  let imagenPokemon4 = datosPokemon.querySelector("#imagen-pokemon-4");
  imagenPokemon4.setAttribute("src", pokemon.sprites.back_female)

  let imagenPokemon5 = datosPokemon.querySelector("#imagen-pokemon-5");
  imagenPokemon5.setAttribute("src", pokemon.sprites.front_shiny)

  nombrePokemonPrincipal = pokemon.name.toUpperCase();

  console.log(nombrePokemonPrincipal);

  
  document.getElementById("nombre-pokemon").innerHTML = nombrePokemonPrincipal;

  atributosPokemon = pokemon.stats;
  console.log(atributosPokemon);





  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,

    title: {
      text: "Datos del Pokemon"
    },
    axisX: {
      interval: 1
    },
    axisY2: {
      interlacedColor: "rgba(1,77,101,.2)",
      gridColor: "#FCFF33",
      title: "Atributos Stats"
    },
    data: [{
      type: "bar",
      name: "atributos",
      axisYType: "secondary",
      color: "#33CEFF",
      dataPoints: [
        
        { y: pokemon.stats[0].base_stat, label: pokemon.stats[0].stat.name },
        { y: pokemon.stats[1].base_stat, label: pokemon.stats[1].stat.name },
        { y: pokemon.stats[2].base_stat, label: pokemon.stats[2].stat.name },
        { y: pokemon.stats[3].base_stat, label: pokemon.stats[3].stat.name },
        { y: pokemon.stats[4].base_stat, label: pokemon.stats[4].stat.name },
        { y: pokemon.stats[5].base_stat, label: pokemon.stats[5].stat.name },
      ]
    }]
  });
  chart.render();
  return false;
};






