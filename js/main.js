function searchChar() {

    let $inputName = document.getElementById('charName')

    axios.get('https://rickandmortyapi.com/api/character/?name=' + $inputName.value)
        .then(response => showData(response.data))
        .catch()

    event.preventDefault();
}

function showData(name) {
    let $inputName = document.getElementById('charName')
    let $sectionName = document.querySelector('.resultsSection');
    let $listUl = document.querySelector('.charList');
    let $footer = document.querySelector('.footer');

    $inputName.value = '';
    $listUl.innerHTML = '';


    if (name.results.length > 1) {
        $footer.style.position = 'static';
    }



    for (var i = 0; i < name.results.length; i++) {
        let $charElement = document.createElement('li');
        $charElement.className = 'results'

        $charElement.innerHTML = `
            <p>Name: ${name.results[i].name}</p>
            <p>Status: ${name.results[i].status}</p>
            <p>Origin: ${name.results[i].origin.name}</p>
            <p>Species: ${name.results[i].species}</p>           
            <img src="${name.results[i].image}">

        `

        $listUl.appendChild($charElement)
    }

    $sectionName.appendChild($listUl)

}

