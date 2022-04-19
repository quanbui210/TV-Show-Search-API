
const form = document.querySelector('#searchForm');

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // const config = {params: {q: searchTerm}}
    const searchTerm = form.elements.query.value
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    displayImage(response.data)
})  

const displayImage = function (shows) {
    for (let result of shows) {
        if(result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium
            document.body.append(img);
            img.classList.add("img-style")
           } 
        }
}

