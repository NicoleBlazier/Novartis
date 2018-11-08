
console.log("hello");

const addButton = document.getElementById("addButton");

    // Select input values from the row
        // grab the elements and assign, return variables
        // 
    // Add a row to the table 

const handleAddClick = event => {
    const newEntryData = getEntryData(); 
    console.log(newEntryData);
    addRowTable(newEntryData); 
}

const getEntryData = () => {
    const year = document.getElementById("year");
    const month = document.getElementById("month");
    const medicine = document.getElementById("medicine");
    const units = document.getElementById("units");
    const salesrep = document.getElementById("salesrep");
    const newRow = {
        year: parseInt(year.innerText) === NaN ? undefined : parseInt(year.innerText), 
        month: month.value,
        medicine: medicine.value,        
        units: parseInt(units.value) === NaN ? undefined : parseInt(units.value), 
        salesrep: salesrep.value,
       }

       const validated = validate(newRow);

       if (validated) return newRow;
       throw new Error('Invalid Input Data!')
} 

const validate = row => {    
    const schema = {
        year: "number",
        month: "string",
        medicine: "string",
        units: "number",
        salesrep: "string",
    }

    for (const key in schema) {
        if (typeof row[key] !== schema[key] || (schema[key] === 'number' && isNaN(row[key]))) {
            return
        }
    }
    return true
}

const addRowTable = (data) => {
    // Create a new TR
    // Create a TD and add to TR for each column
    // Append TR to the table

    const table = document.getElementById("records");
    console.log(table);
    // make a new TR .insertRow()
    // make new cells .insertCell()

    const newRow = table.insertRow(-1);
    newRow.insertCell(-1).innerText = data.medicine;
    newRow.insertCell(-1).innerText = data.units;
    newRow.insertCell(-1).innerText = data.month;
    newRow.insertCell(-1).innerText = data.year;
    newRow.insertCell(-1).innerText = data.salesrep;
  
}

addButton.addEventListener('click', handleAddClick) 
