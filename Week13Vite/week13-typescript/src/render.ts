import "./main.ts"
import "./api.ts"
import type { dog } from "./api.ts";



const imageContainer = document.getElementById("image-container") as HTMLDivElement
 export function  renderDogImages(dogs: dog[] = []) {
    console.log("dogs", dogs);
    
   
    imageContainer.innerHTML = '';
    
        dogs.forEach(dog => {
        const dogDiv = document.createElement('div');
        dogDiv.className = 'dog-item';
        
        dogDiv.innerHTML = `
            <img class="img-thumbnail" src="${dog.url}" alt="Dog image" style="width: 200px; height: 200px; object-fit: cover; margin: 10px;" />
          `
        ;
        
        imageContainer.appendChild(dogDiv);
    });
}
