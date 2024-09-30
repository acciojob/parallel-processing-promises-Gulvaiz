//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImg(imagesURL){
	 return new Promies((resolve, reject) => {
		    if(imagesURL){
				resolve output
			}
		 else {
			  reject (e)
		 }
	 })
}

btn.addEventListener("click", () => {
	 loadImg(images)
	.then( (output) => {
		output.innerHTML = `<img src="images"></img>`
	})
	.catch( (error) => output.innerText = `Failed to load image's URL: ${image.url}`)
		
	}
})
