
// const onFetchDogClick = async() => {
//     const data = await fetchDogImages()
//     renderDogImages(data)
// }


async function fetchDogImages() {

 const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&x-api-key=${API_KEY}`)
 const data = await response.json()
 console.log(data)
 renderDogImages(data)
  
}

const imageContainer = document.getElementById("image-container")

function renderDogImages(dogs) {
    console.log("dogs", dogs);
    
   
    imageContainer.innerHTML = '';
    
        dogs.forEach(dog => {
        const dogDiv = document.createElement('div');
        dogDiv.className = 'dog-item';
        
        dogDiv.innerHTML = `
            <img class="img-thumbnail" src="${dog.url}" alt="Dog image" style="width: 200px; height: 200px; object-fit: cover; margin: 10px;" />
          
            <h3>${dog.breeds && dog.breeds.length > 0 ? dog.breeds[0].name : 'Mixed Breed'}</h3>`
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
// create
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
       
        const fileResponse = await fetch('Week12API\boxer-pitbull-mix.jpg');
        if (!fileResponse.ok) {
            throw new Error("Failed to fetch the image file from the local server.");
        }

      
        const fileBlob = await fileResponse.blob();

       
        const formData = new FormData();
        formData.append('file', fileBlob, 'boxer-pitbull-mix.jpg');

        
        const response = await fetch('https://api.thedogapi.com/v1/images/upload', {
            method: "POST",
            headers: {
                "x-api-key": API_KEY             },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
        }

        const newDog = await response.json();
        lastNewDog = newDog;
        console.log(" Image uploaded successfully:", newDog);
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}
//delete
 
async function deleteDog() {
  if(lastNewDog === null) {
    console.log("No dog to delete")
    return
  }
fetch(`https://api.thedogapi.com/v1/images/:image_id&x-api-key=${API_KEY}` + newDog, {
  method: "DELETE",
  headers: { "Content-Type": "application/json"},
  headers: { "x-api-key" : API_KEY},
  body: JSON.stringify(lastNewDog)
})
}

