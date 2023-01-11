function updateEmployeeInformation() {
    // Get the value of the input field
    let name = document.getElementById("name").value;

    // Update the employee's name on the page
    document.getElementById("employeeName").innerHTML = name;
  }