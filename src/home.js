export function homeModule(){
    const content = document.querySelector("#content");
    content.textContent = ""
    const topDiv = document.createElement("div")
    topDiv.classList = "home"
    const topHeading = document.createElement("h3")
    topHeading.textContent = "What we do"
    const p1 = document.createElement("p");
    p1.textContent = "Here at GuudBites we offer buffet services on the weekends. You pay GHS 400.00 and get to enjoy a variety of local dishes"
    topDiv.append(topHeading, p1);

    const middleDiv = document.createElement("div")
    middleDiv.classList = "home"
    const midHeading = document.createElement("h3")
    midHeading.textContent = "Location"
    const p2 = document.createElement("p");
    p2.textContent = "We're located in Akosombo Ghana opposite the TotalEnergies fuel station"
    middleDiv.append(midHeading, p2);

    const bottomDiv = document.createElement("div");
    bottomDiv.classList = "home"
    const bottomHeading = document.createElement("h3");
    bottomHeading.textContent = "Working Hours"
    const p3 = document.createElement("p");
    p3.innerHTML = "Saturdays: 4pm to 9pm <br> Sundays: 4pm to 9pm";
    bottomDiv.append(bottomHeading, p3);

    content.append(topDiv, middleDiv, bottomDiv);
}