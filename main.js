const url = 'https://api.github.com/users/synthl/repos'

async function getRepos() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        show(data)
    } catch (err) {
        console.error(err)
    }
}

getRepos()

function show(repositories) {
    let output = ''
    let circle = 'circle'
    
    for (repository of repositories) {
        let linkRepository = `https://github.com/synthl/${repository.name}`
        if (repository.description === null) {
            repository.description = "Este Repositório não possui descrição."
        }

        if (repository.language === 'HTML') {
            circle = 'circle-html'
        } else if (repository.language === 'JavaScript') {
            circle = 'circle-js'
        } else if (repository.language === 'CSS') {
            circle = 'circle-css'
        }

        // if (repository.language === 'HTML') {
        //     document.querySelector('#circle').setAttribute("class", "circle-html")
        // }
        output += `
            <div class="project">
                <div class="folder-title">
                <a href=${linkRepository} target="_blank">
                        <figure>
                            <img src="/assets/folder.svg" alt="folder">
                            <figcaption>${repository.name}</figcaption>
                        </figure>
                    </a>
                </div>

                <div class="description">
                    <p id="description">${repository.description}</p>
                </div>

                <div class="stars">
                <figure>
                <img src="/assets/star.svg" alt="star">
                        <figcaption>${repository.stargazers_count}</figcaption>
                    </figure>
                    </div>
            
                <div class="forks">
                <figure>
                        <img src="/assets/git-branch.svg" alt="git-branch">
                        <figcaption>${repository.forks}</figcaption>
                        </figure>
                </div>
            
                <div class="language">
                    <div class="${circle}"></div>
                    <div class="name-language">${repository.language}</div>
                </div>
            </div>`
    }
    document.querySelector('#result').innerHTML = output
}