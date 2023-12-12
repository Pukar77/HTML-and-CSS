let search = document.querySelector(".search");
let searchbox = document.querySelector(".word");
let showmore = document.querySelector(".show-more");
let searchForm = document.getElementById("search-box");
let searchResult = document.getElementById("searchresult");

let keyword = "";
let page = 1;


const accesskey = "Hpa8jc-sUdz63K1HosrbD4rYYF02llQOO8ZqrwcDbhM";


//async function ensures that the function returns the promises and wraps no promise in it



async function showimage(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

  
}

//submit event listener is specially used in forms
searchForm.addEventListener("submit", (p)=> {
    p.preventDefault();
    page = 1;
    showimage();

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image)
        searchResult.appendChild(imagelink);
        


    })
})

