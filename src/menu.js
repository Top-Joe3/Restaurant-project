import fufuImg from "./fufu.jpg"
import bankuImg from "./banku.jpg"
import kenkeyImg from "./kenkey.jpg"
import achekeImg from "./acheke.jpg"
import seaFoodImg from "./seafood.jpg"
export function menuModule(){
    const content = document.querySelector("#content");
    content.textContent = ""
    const fufuDiv = document.createElement("div")
    fufuDiv.classList = "menu"
    const fufuImage = document.createElement("img")
    fufuImage.src = fufuImg
    const fufu = document.createElement("span")
    fufu.textContent = "Fufu with goat light soup"
    fufuDiv.append(fufuImage, fufu)

    const bankuDiv = document.createElement("div")
    bankuDiv.classList = "menu"
    const bankuImage = document.createElement("img")
    bankuImage.src = bankuImg
    const banku = document.createElement("span")
    banku.textContent = "Banku with chicken okro soup"
    bankuDiv.append(bankuImage, banku)

    const kenkeyDiv = document.createElement("div")
    kenkeyDiv.classList = "menu"
    const kenkeyImage = document.createElement("img")
    kenkeyImage.src = kenkeyImg
    const kenkey = document.createElement("span")
    kenkey.textContent = "Kenkey with friend fish"
    kenkeyDiv.append(kenkeyImage, kenkey)

    const achekeDiv = document.createElement("div")
    achekeDiv.classList = "menu"
    const achekeImage = document.createElement("img")
    achekeImage.src = achekeImg
    const acheke = document.createElement("span")
    acheke.textContent = "Acheke with tilapia"
    achekeDiv.append(achekeImage, acheke)

    const seaFoodDiv = document.createElement("div")
    seaFoodDiv.classList = "menu"
    const seaFoodImage = document.createElement("img")
    seaFoodImage.src = seaFoodImg
    const seaFood = document.createElement("span")
    seaFood.textContent = "Sea food platter"
    seaFoodDiv.append(seaFoodImage, seaFood)

    content.append(fufuDiv, bankuDiv, kenkeyDiv, achekeDiv, seaFoodDiv)
}