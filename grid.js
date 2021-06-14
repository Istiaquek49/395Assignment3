let numRows = 1;
let numCols = 1;
let colorSelected;

function AddRow() 
{
    let thisGrid = document.getElementById("grid")//sets up the grid in the dom
    let addRow = document.createElement("tr")
    if (numCols === 0)//if its equal to 0 creates a box
    { 
        let box = document.createElement("td");
        box.onclick = function ()
        {
            this.style.backgroundColor = document.getElementById("colorchooser").value;
        };
        addRow.appendChild(box);
        numCols++;
    } else { 
        for (let i = 0; i < numCols; i++)//adds the column to the rows
        {
            let box = document.createElement("td");
            box.onclick = function ()
            {
                this.style.backgroundColor = document.getElementById("colorchooser").value;
            };
            addRow.appendChild(box);
        }
    }
    thisGrid.appendChild(addRow);//appends and increases
    numRows++;
}

function addC() 
{
    let thisGrid = document.getElementById("grid");//sets up the grid in the dom
    let allRows = document.querySelectorAll("tr");
    let numberRows = 0;
    for(let i = 0; i < numRows; i++) 
    {
        let box = document.createElement("td");
        box.onclick = function ()
        {
            this.style.backgroundColor = document.getElementById("colorchooser").value;
        };
        allRows[numberRows].appendChild(box);
        numberRows++;
    }
    numCols++;
}