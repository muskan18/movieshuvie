const APIKEY = "3796a08a4e1d064667052584dc413dae";

const requests = {
fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`,

}

export default requests;
