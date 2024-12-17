const URL = 'https://juanpink.github.io/movies-250.json';

function processMovie(data) {
    console.log(data);
}

doGetRequest(URL, processMovie);