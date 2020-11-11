
const API_KEY = '50be2f92df13cf8c9b0607ecf5db2ae8';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


const url = 'https://api.themoviedb.org/3/search/movie?api_key=50be2f92df13cf8c9b0607ecf5db2ae8';


//selecting elements from  the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputvalue');
const movieSearchable = document.querySelector('#movies-searchable');



function moviesSection(movies){
    return movies.map((movie) => {
        return `
        <img src=${IMAGE_URL + movie.poster_path}vdata-movie-id=${movie.id}/> 
        `;
    })
}

function createMovieContainer(movies){
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class','movie');

    const movieTemplate = `
    <section class="section">
        ${moviesSection(movies)}
    </section>
    <div class="content">
        <p id="content-close">X</p>
    </div>
    `;
    movieElement.innerHTML = movieTemplate;
    return movieElement;

}



buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
      .then((res) => res.json() )
      .then((data)=> {
          const movies = data.results;
          const movieBlock = createMovieContainer(movies);
          movieSearchable.appendChild(movieBlock);
          console.log('Data:', data);
      })
      .catch((error) => {
          console.log('Error:',error);
      });
      console.log('Value:',value);

}