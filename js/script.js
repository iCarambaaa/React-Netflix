let url1 = "https://striveschool-api.herokuapp.com/api/movies/sci-fi"
let url2 = "https://striveschool-api.herokuapp.com/api/movies/Action"
let url3 = "https://striveschool-api.herokuapp.com/api/movies/horror"
let myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')
myHeaders.append('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMzUyNjRiYjUzZDAwMTViMWEwMzQiLCJpYXQiOjE2MzIzMTg3NTgsImV4cCI6MTYzMzUyODM1OH0.-KaV6cAY0zF2Bo26q8xvwA0xYrtkSTfOKp8E2Ia43Hs")


let myInit = {
    method: "GET",
    headers: myHeaders
}

 function showSciFi() {

    fetch(url1, myInit)
    .then(response => response.json())
    .then(result => {
      
      let row = document.getElementById("SciFi")
      row.innerHTML = ""
          result.forEach(movie => {
            console.log(movie)
            
            row.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 px-1">
            <a href="./backoffice.html?id=${movie._id}"><img class="picture rounded" src="${movie.imageUrl}" alt="${movie.name}"></a>
          </div> 
            `
          }
          
          );})
    .catch(error => console.log('error', error))
 }


 function showAction() {

    fetch(url2, myInit)
    .then(response => response.json())
    .then(result => {
      
      let row = document.getElementById("action")
      row.innerHTML = ""
          result.forEach(movie => {
            console.log(movie)

            row.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 px-1">
            <a href="./backoffice.html?id=${movie._id}"><img class="picture rounded" src="${movie.imageUrl}" alt="${movie.name}"></a>
          </div> 
            `
          });})
    .catch(error => console.log('error', error))
 }


 function showHorror() {

    fetch(url3, myInit)
    .then(response => response.json())
    .then(result => {
      
      let row = document.getElementById("horror")
      row.innerHTML = ""
          result.forEach(movie => {
            console.log(movie)

            row.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 px-1">
            <a href="./backoffice.html?id=${movie._id}"><img class="picture rounded" src="${movie.imageUrl}" alt="${movie.name}"></a>
          </div> 
            `
          });})
    .catch(error => console.log('error', error))
 }




window.onload = () => {
    showAction()
    showHorror()
    showSciFi()
}