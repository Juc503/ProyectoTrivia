//variables y constantes 
const cat = document.querySelector('#cat')
const dif = document.querySelector('#dif')
const type = document.querySelector('#type')

const cat_movies = document.querySelector('#cat-movies')
const cat_gen= document.querySelector('#cat-gen')
const cat_books= document.querySelector('#cat-books')
const cat_videogames = document.querySelector('#cat-videogames')
const cat_pc = document.querySelector('#cat-pc')

const dif_easy = document.querySelector('#dif-easy')
const dif_medium = document.querySelector('#dif-medium')
const dif_hard = document.querySelector('#dif-hard')

const type_TF = document.querySelector('#type-trueFalse')
const type_multi = document.querySelector('#type-multi')

const boton = document.querySelector('.buttonNext')
let categoria = ""
let dificultad = ""
let tipo = ""
let url = ""

const actualizar = (texto, texto2, seleccion) => {
    if (seleccion === 1) {
        categoria = texto
        cat.textContent = texto2
    } else if (seleccion === 2) {
        dificultad = texto
        dif.textContent = texto2
    } else if (seleccion === 3) {
        tipo = texto
        type.textContent = texto2
    }
    console.log(categoria, dificultad, tipo);
}
const generarUrl = () => {
    if (categoria === "" || dificultad === "" || tipo === "") {
        alert("Verifique que haya seleccionado una categoria, dificultad y tipo.")
    } else {
        url = "https://opentdb.com/api.php?amount=10&" + categoria + "&" + dificultad + "&" + tipo
        sessionStorage.setItem("url", url);
        window.open("trivia.html","_self")
    }
}

cat_pc.addEventListener('click',() => actualizar("category=18","Computers",1) )
cat_movies.addEventListener('click', () => actualizar("category=11","Movies",1))
cat_books.addEventListener('click', () => actualizar("category=10","Books",1))
cat_gen.addEventListener('click', () => actualizar("category=9","General Knowledge",1))
cat_videogames.addEventListener('click', () => actualizar("category=15","VideoGames",1))

dif_easy.addEventListener('click', () => actualizar("difficulty=easy","Easy",2))
dif_medium.addEventListener('click', () => actualizar("difficulty=medium","Medium",2))
dif_hard.addEventListener('click', () => actualizar("difficulty=hard","Hard",2))

type_TF.addEventListener('click', () => actualizar("type=boolean","True/False",3))
type_multi.addEventListener('click', () => actualizar("type=multiple","Multiple Choice",3))
boton.addEventListener('click', () => generarUrl())
