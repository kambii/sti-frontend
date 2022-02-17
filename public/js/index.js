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
    for(resultRow of data.tabell ){
        aTable.appendChild(resultRow)
    }
}

function createRow(resultRow ) {
    var aRow = document.createElement("tr")
    aRow.appendChild(createImageCell(resultRow.url))
    aRow.appendChild(createCell(resultRow.name))
    aRow.appendChild(createCell(resultRow.points))
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
        anImage.src=url;
        anImage.classList.add("tablelogo")
        aCell.appendChild(anImage)
        return aCell;
    }
}

age();

