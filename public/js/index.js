function clickMe(){
    /*
    var createElement = document.createElement("H1")
    createElement.innerHTML = "hello world";
    document.body.appendChild(createElement)
    */
   age()
}

    function age(){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "/js/data.json")
        xhr.onload = function(){
            var data = JSON.parse(this.response)
            console.log(data.rubrik)
            createTable(data.tabell)
        }

    xhr.send()
}
function createTable(data){
    var appElement = document.getElementById("app")
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    
    aTable.appendChild(createRow(data[0].name, data[0].points, data[0].logo))
    aTable.appendChild(createRow(data[1].name, data[1].points, data[1].logo))
    aTable.appendChild(createRow(data[2].name, data[2].points, data[2].logo))
    aTable.appendChild(createRow(data[3].name, data[3].points, data[3].logo))
    aTable.appendChild(createRow(data[4].name, data[4].points, data[4].logo))
    aTable.appendChild(createRow(data[5].name, data[5].points, data[5].logo))
    aTable.appendChild(createRow(data[6].name, data[6].points, data[6].logo))
    aTable.appendChild(createRow(data[7].name, data[7].points, data[7].logo))

}

function createRow(name, points, url ) {
    var aRow = document.createElement("tr")
    aRow.appendChild(createImageCell(url))
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
    return aRow


}

function createCell(content){
    var aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell;
}
{
    function createImageCell(url){
        var aCell = document.createElement("td")
        var anImage = document.createElement("img")
        anImage.src=url
        anImage.classList.add("tablelogo")
        aCell.appendChild(anImage)
        return aCell;
    }
}

age();

