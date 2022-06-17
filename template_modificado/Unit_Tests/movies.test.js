const {addAuthorToMovie, getMoviesByDirector} = require('./movies')

const movies = [
    {
        title: "Madagascar1",
        directors: ["Tomas","Fabio"],
    },
    {
        title: "Madagascar2",
        directors: ["Tomas","Fabio"],
    },
    {
        title: "Madagascar3",
        directors: ["Tomas","Fabio"],
    }
]
//Função que adiciona um realizador
describe("Add a director", () => {

    test("Author already exists", () => {
        expect(()=>addAuthorToMovie("Madagascar1", "TOMAS" ,movies)).toThrow("Autor existente")
    })

    test("Author added successfully", () => {

        expect(addAuthorToMovie("Madagascar1", "JONI" ,movies)).toEqual({
            title: "Madagascar1",
            directors: ["Tomas","Fabio","JONI"],
        })
    })

    test("Title name invalid", () => {
        expect(addAuthorToMovie("Madagascar", "JONI" ,movies)).toBeFalsy();
    })

    test("Array not passed", () => {
        expect(addAuthorToMovie("Madagascar", "JONI")).toBeFalsy();
    })
})

// Função que devolve os filmes de um dado realizador
describe("Get movies directed by a specific person", () => {

    test("Author already exists", () => {
        expect(getMoviesByDirector("TOMAS" , movies)).toEqual(["Madagascar1","Madagascar2","Madagascar3"])
    })

    test("Author already exists", () => {
        expect(getMoviesByDirector("TOMAS" , movies)).not.toEqual(["ok"])
    })

    test("Array not passed", () => {
        expect(getMoviesByDirector("TOMAS" )).toEqual([])
    })

    test("Director name invalid", () => {
        expect(getMoviesByDirector("TOM")).toEqual([])
    })
})

