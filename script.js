// Function to add a new row to the table
function addNewRow() {
    // Get the values from the input fields
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;

    // Check if any field is empty
    if (firstname == "" || lastname == "") {
        alert('Please fill out all fields');
    } else {
        // Create new table row and table data elements
        let parent = document.createElement('tr');
        let col1 = document.createElement('td');
        let col2 = document.createElement('td');
        
        // Create text nodes for first name and last name
        let text1 = document.createTextNode(firstname);
        let text2 = document.createTextNode(lastname);
        
        // Append text nodes to table data elements
        col1.appendChild(text1);
        col2.appendChild(text2);
        
        // Append table data elements to table row
        parent.appendChild(col1);
        parent.appendChild(col2);

        // Append table row to table
        document.getElementById('result').appendChild(parent);

        // Clear input fields
        document.getElementById('firstname').value = "";
        document.getElementById('lastname').value = "";

        // Add the print button
        addPrintButton();
    }
}

// Function to add the print button
function addPrintButton() {
    // Check if the print button already exists
    if (!document.getElementById('printButton')) {
        // Create a print button
        let printBtn = document.createElement('button');
        printBtn.id = 'printButton';
        printBtn.textContent = 'Print Table';
        
        // Add an event listener to print the table
        printBtn.addEventListener('click', function() {
            printTable();
        });
        
        // Append the print button to the page
        document.body.appendChild(printBtn);
    }
}

// Function to print the table
function printTable() {
    // Create a new window for printing
    let printWindow = window.open('', '_blank');
    
    // Create a table with the headers
    let tableContent = '<table border="1"><tr><th>First Name</th><th>Last Name</th></tr>';
    
    // Loop through each row in the table
    let tableRows = document.getElementById('result').getElementsByTagName('tr');
    for (let i = 0; i < tableRows.length; i++) {
        // Get the first name and last name from the current row
        let firstName = tableRows[i].getElementsByTagName('td')[0].textContent;
        let lastName = tableRows[i].getElementsByTagName('td')[1].textContent;
        
        // Add a row to the table content
        tableContent += '<tr><td>' + firstName + '</td><td>' + lastName + '</td></tr>';
    }
    
    // Close the table tag
    tableContent += '</table>';
    
    // Write the table content to the print window
    printWindow.document.write(tableContent);
    
    // Print the window
    printWindow.print();
}
