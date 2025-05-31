import "./main.ts"
import { API_KEY } from "./APIKey.ts"
import { renderDogImages } from "./render.ts"

export type dog = 
{
    height: number
    id: string
    url: string
    width: number
}
let dogsData : any = null
export async function fetchDogImages() {

 const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&x-api-key=${API_KEY}`)
 const data = await response.json()
 dogsData = data;
 renderDogImages(data)
  
}


let lastNewDog = null;
export async function onAddDogClick() {
   try {
       const fileInput = document.getElementById('dogImageInput');
       const file = fileInput!.files[0] 
       
       if (!file) {
           throw new Error("Please select a file first.");
       }
       
       console.log(file);
       
       const formData = new FormData();
       formData.append('file', file);
       
       const response = await fetch('https://api.thedogapi.com/v1/images/upload', {
           method: "POST",
           headers: {
               "x-api-key": API_KEY
           },
           body: formData
       });
       
       if (!response.ok) {
           const errorData = await response.json();
           throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
       }
       
       const newDog = await response.json();
       lastNewDog = newDog;
       console.log("Image uploaded successfully:", newDog);
       
   } catch (error) {
       console.error("Error uploading image:", error);
   }
}

export async function deleteDog() {
    const dogToDelete = prompt("Enter 1-10 to delete a dog")
    console.log('beofre',dogsData)
    const updatesDogs = dogsData.filter((dogs: any )=> dogs.id !== dogsData [dogToDelete!].id );
    console.log('after',updatesDogs)
    renderDogImages(updatesDogs);
}