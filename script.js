const form = document.querySelector('#form')
const memeInput = document.querySelector('.meme-input')
const topCaption = document.querySelector('.top-caption-input')
const bottomCaption = document.querySelector('.bottom-caption-input')
const submitBtn = document.querySelector('.submit')


form.addEventListener('click', function(event){
    event.preventDefault()
})

submitBtn.addEventListener('click', function(event){
    const img = document.createElement('img')
    const imgDiv = document.createElement('div')
    imgDiv.classList.add('meme-container')
    img.src = memeInput.value;
    document.body.append(imgDiv)
    imgDiv.append(img)
    

    const topDescription = document.createElement('h1')
    topDescription.innerText = topCaption.value
    topDescription.classList.add('top-caption')
    imgDiv.prepend(topDescription)

    const bottomDescription = document.createElement('h1')
    bottomDescription.innerText = bottomCaption.value
    bottomDescription.classList.add('bottom-caption')
    imgDiv.append(bottomDescription)

    img.addEventListener('click', function(event){
        imgDiv.remove()
        img.remove()
        topDescription.remove()
        bottomDescription.remove()
    })

    form.reset()
})