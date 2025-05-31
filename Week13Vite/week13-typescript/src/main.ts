
import "./mystyle.css"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./boxer-pitbull-mix.jpg"
import { fetchDogImages } from "./api"
import { onAddDogClick } from "./api"
import { deleteDog } from "./api"


document.getElementById("fetch-dogs")!.addEventListener("click", fetchDogImages )


document.getElementById("add-dog")!.addEventListener("click", onAddDogClick )

document.getElementById("delete-dog")!.addEventListener("click", deleteDog )

