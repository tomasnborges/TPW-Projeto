// ADICIONAR UM REALIZADOR A UM FILME
exports.addAuthorToMovie = function (title, directorName, movies = []) {
    
    if (!movies.some(movie => movie.title === title) || movies.length === 0) {
        return false
    }
    const obj = movies.find(movie => movie.title === title)
    const directors = obj.directors.map(director => director = director.toLowerCase())
    
    if (directors.includes(directorName.toLowerCase())) {
        throw Error("Autor existente")

    } else {

        const directors = [...obj.directors]

        directors.push(directorName)

        obj.directors = directors

        return obj
    }

}

// DEVOLVE NOMES DOS FILMES DE UM REALIZADOR PASSADO COMO PARÂMETRO
exports.getMoviesByDirector = function (directorName, movies = []) {
    movies.forEach(movie => {
        const directors = movie.directors.map(director => director = director.toLowerCase())
        movie.directors = directors
    })
    
    return movies.filter((movie) => movie.directors.includes(directorName.toLowerCase()))
    .map((movie) => movie.title)
    
}