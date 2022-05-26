const parser = new DOMParser();
const formulario = document.getElementById('formulario')
const btnSend = document.getElementById('btnSend')
const text = document.getElementById('text')
const url = "http://localhost:82/api-php/src/post.php"

btnSend.addEventListener('click', (e)=>{
    // e.preventDefault()
    const pdfFile = document.getElementById('pdfFile').files[0]

    const f = new FormData();
    f.append('file', pdfFile);

    console.log(f.get('file'))

    console.log('espere..')

    async function getText(){
        console.log(text.textContent)
        const data = await fetch(url, {method: "post", body: f}).then((res) => {return res.json()}).then(r => {text.innerHTML = r.text})
        console.log(data)
    }

    getText()

    //   fetch(url, {method: "post", body: f})
    //   .then((res) => {return res.json()}).then((response) => {console.log(response)})

    console.log('terminado.')
})