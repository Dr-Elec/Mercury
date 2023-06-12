//asd
fetch("style/styles.json")
    .then((response) => response.json())
    .then((data) => data.forEach((cur)=> {
            document.head.innerHTML += `<link rel="stylesheet" href="${cur}">`
        }))

window.onload = () => {
    document.querySelectorAll("fetch").forEach((elem) => {
        fetch(elem.getAttribute("src"))
            .then((response) => response.text())
            .then((txt) => elem.parentElement.innerHTML += txt)
        
    })
}