const form = document.querySelector('#searchForm');
let imgContainer = document.querySelector(".img-container");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // const config = {params: {q: searchTerm}}
    const searchTerm = form.elements.query.value
    const config = {params: {q: searchTerm}}
    const response = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    form.elements.query.value = "";
    displayImage(response.data)
})  

const displayImage = (shows) => {
    imgContainer.innerHTML = "";
    for (let result of shows) {
        if(result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium
            imgContainer.append(img);
            img.classList.add("img-style")
           } 
        }
}

