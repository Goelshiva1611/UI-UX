const searchform = document.getElementById('search-form');
const searchtext = document.getElementById('search-text');
const searchbutton = document.getElementById('search-button');
const searchresult = document.getElementById('search-result');
const showmore = document.getElementById('search-more-button');
let page = 1;
let key = "";

async function searchimages() {
    key = searchtext.value;
    if (key === "") {
        alert("Write Something !")
    }
    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${key}&client_id=XPW_br8Jw66gPmNKBP-mUi9CU_vDg3jRT_8oJ1PcIME
&per_page=20`);
    const data = await response.json();
    const result = data.results;

    if (page === 1) {
        searchresult.innerHTML = '';
    }
    result.map((imageData) => {
        let image = document.createElement('img');
        image.src = imageData.urls.small;
        searchresult.appendChild(image);
    });
    showmore.style.display = "block";
    savedata();
}

searchbutton.addEventListener('click', (e) => {
    e.preventDefault();
    page = 1;
    searchimages();
});
showmore.addEventListener('click', (e) => {
    e.preventDefault()
    page += 1
    searchimages()
})

function savedata() {
    localStorage.setItem("data", searchresult.innerHTML)
}
function showsavedimages() {
    searchresult.innerHTML = localStorage.getItem("data");
}
showsavedimages();
