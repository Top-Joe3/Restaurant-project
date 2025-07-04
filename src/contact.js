export function contactModule(){
    const content = document.querySelector("#content");
    content.textContent = ""
    const div = document.createElement("div")
    div.classList = "contactText";
    const paragraph = document.createElement("p");
    const btn = document.createElement("button")
    btn.textContent = "here"
    paragraph.append("Click", " ", btn, " ", "to book your spot or call us on +233273783676435 or text us on +2332014372846827. See you soon");
    div.appendChild(paragraph)
    content.appendChild(div)
}