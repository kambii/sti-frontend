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
            createTable(data)
        }

    xhr.send()
}
function createTable(data){
    var appElement = document.getElementById("app")
    var aHeader = document.createElement("h1")
    aHeader.innerHTML = data.title
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    for(resultRow of data.table){
        aTable.appendChild(createRow(resultRow))
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

