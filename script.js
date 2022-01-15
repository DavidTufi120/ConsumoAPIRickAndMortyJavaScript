
    let container = document.querySelector('div.container');
    let content = '';

    let numeros_gerados = [];
    let limite = 3;

    let min = Math.ceil(1); // id minimo de personagem
    let max = Math.floor(671); // id maximo de personagem

    while (true) {
      let n = Math.floor(Math.random() * (max - min + 1)) + min;

      if (!numeros_gerados.includes(n)) {
        numeros_gerados.push(n);
      }

      if (numeros_gerados.length == limite) {
        break;
      }
    }

    var btn = document.querySelector("#refresh");

btn.addEventListener("click", function() {
    
    location.reload();

});

    numeros_gerados.forEach((number) => {
      fetch(`https://rickandmortyapi.com/api/character/${number}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          "Content-type": 'application/json'
        }
      }).then((Response) => Response.json()).then((data) => {
        content += '<div class="box">';
        content += `<img src="${data.image}" />`;
        content += `<p>Nome: <span>${data.name}</span></p>`;
        content += `<p>Espécie: <span>${data.species}</span></p>`;
        content += `<p>Vivo: <span>${data.status}</span></p>`;
        content += '</div>';

        container.innerHTML = content;
      });
    });