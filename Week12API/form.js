
// const onFetchDogClick = async() => {
//     const data = await fetchDogImages()
//     renderDogImages(data)
// }

let dogsData = null
async function fetchDogImages() {

 const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&x-api-key=${API_KEY}`)
 const data = await response.json()
 dogsData = data;
 renderDogImages(data)
}
  

const imageContainer = document.getElementById("image-container")

function renderDogImages(dogs) {

    
   
    imageContainer.innerHTML = '';
    
        dogs.forEach(dog => {
        const dogDiv = document.createElement('div');
        dogDiv.className = 'dog-item';
        
        dogDiv.innerHTML = `
            <img class="img-thumbnail" src="${dog.url}" alt="Dog image" style="width: 200px; height: 200px; object-fit: cover; margin: 10px;" />`
          
            // <h3>${dog.breeds && dog.breeds.length > 0 ? dog.breeds[0].name : 'Mixed Breed'}</h3>
        ;
        
        imageContainer.appendChild(dogDiv);
    });
}

// function renderDogImages(dog) {
//   console.log("dog", dog)
//     imageContainer.innerHTML = 
//     `
//     <div>
//       <img class="img-thumbnail" scr="${dog.map(dog => dog.url)}"/>

//     <h3>${dog.map(dog => dog.breeds)}</h3>
  
//     </div>
//     `
  
// }



// let lastNewDog = null
// FormData = new FormData()


// async function onAddDogClick() {
//   const testDog = { name: "George", breed: "Boxer-pit"}
//   const response = await fetch(`https://api.thedogapi.com/v1/images/upload/`,{
//     method: "POST",
//     headers: { "Content-Type": "multipart/form-data"},
//     headers: { "x-api-key" : API_KEY},
//     body: FormData.append('file' , "Week12API/boxer-pitbull-mix.jpg")
//   })
//   const newDog = await response.json()
//   lastNewDog = newDog

// }
// let lastNewDog = null
// FormData = new FormData()

// async function onAddDogClick(){
//     const testDog = { name: "George", breed: "Boxer-pit"}
//     const response = await fetch('https://api.thedogapi.com/v1/images/upload/', {
//         method: "POST",
//         headers: { "Content-Type": "multipart/form-data",
//                     "x-api-key": API_KEY},
//         body: FormData.append('file', 'Week12API\boxer-pitbull-mix.jpg')
//     })
    
//   const newDog = await response.json()
//     lastNewDog = newDog
// }

let lastNewDog = null;

async function onAddDogClick() {
   try {
       const fileInput = document.getElementById('dogImageInput');
       const file = fileInput.files[0];
       
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


//delete
 
async function deleteDog() {
    const dogToDelete = prompt("Enter 1-10 to delete a dog")
    console.log('beofre',dogsData)
    const updatesDogs = dogsData.filter((dogs)=> dogs.id !== dogsData [dogToDelete].id );
    console.log('after',updatesDogs)
    renderDogImages(updatesDogs);
//   if(lastNewDog === null) {
//     console.log("No dog to delete")
//     return
//   }

// fetch(`https://api.thedogapi.com/v1/images/:image_id&x-api-key=${API_KEY}` + dogsData[dogToDelete].id, {
//   method: "DELETE",
//   headers: { "Content-Type": "application/json"},
//   headers: { "x-api-key" : API_KEY},
//   body: JSON.stringify(dogToDelete)
// })
//fetchDogImages(dogsData[dogToDelete].id);

}

