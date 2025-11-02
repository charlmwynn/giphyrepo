console.log("script.js loaded");

const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=o7aoVDEe4fLbYBSPfh2gRY1uxZtv0n7u&q=monkey&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

async function displayGif() {
  const response = await fetch(endpoint);
  const data = await response.json();
  const images = data.data;

  //console preview
  console.log(images);
  
  // Update the DOM with the gifs (and some monkeys)
  const output = document.getElementById("gif-container"); 
  output.innerHTML = "";
  output.innerHTML = '<div class="w-100 text-center mb-3" style="font-size:2rem;">🐒🐒🐒🐒🐒🐒🐒🐒🐒🐒</div>'

    images.forEach(gif => {
    const imgURL = gif.images.original.url;
    output.innerHTML += `<img src="${imgURL}" class="col-3 mb-3">`;
    });
}

const button = document.getElementById("fetch-gif-btn"); 

button.addEventListener("click", displayGif);