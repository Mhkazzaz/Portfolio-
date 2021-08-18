let projects = 

    [
        {
            "key": "0",
            "title": "Calculator",
            "link": "https://mhkazzaz.github.io/calculator/",
            "src": "./pics/calculator.jpg"

        }, 

        {
            "key": "1",
            "title": "Drums & Piano",
            "link": "https://mhkazzaz.github.io/drum-machine/",
            "src": "./pics/drum-piano-kit.jpg"

        }, 

        {
            "key": "2",
            "title": "Flex Gallery",
            "link": "https://mhkazzaz.github.io/Flex-Gallery/",
            "src": "./pics/flex-gallery.jpg"

        }, 

        {
            "key": "3",
            "title": "Markdown",
            "link": "https://mhkazzaz.github.io/markdown/",
            "src": "./pics/markdown.jpg"

        }, 

        {
            "key": "4",
            "title": "Pomodoro",
            "link": "https://mhkazzaz.github.io/study-session/",
            "src": "./pics/pomodoro.jpg"

        }, 

        {
            "key": "5",
            "title": "Random Quote Generator",
            "link": "https://mhkazzaz.github.io/random-quote/",
            "src": "./pics/random-quote.jpg"

        }, 
    ]

projects.forEach(project => {
    let element = document.createElement("div")
    element.innerHTML = 
    `
    <a href="${project.link}">
        <div class="project-block">
            <img src="${project.src}">
            <div class="project-title">
                <span class="tag-effects"> < </span>
                <span class="project-name">${project.title}</span>
                <span class="tag-effects"> /> </span>
            </div>
        </div>
    </a>
    `
    document.getElementById("projects").appendChild(element)
})

