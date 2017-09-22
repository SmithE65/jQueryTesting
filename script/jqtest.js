// JavaScript source code
$().ready(function() {
    console.log("Page loaded.");

    $("button").click(function () {
        console.log("A button was clicked.");
        $("#btnIn").val($("#btnOut").val());
    });

    populateStudentTable();
});

// Pull some students from a hat
function getStudents()
{
    console.log("Inventing students...");
    var students = [{ firstName: "Sue Ann", lastName: "Prewitt", address: "4900 Parkway Dr.", csz: "Mason, OH 45040", SAT: 1200, GPA: 3.2 },
        { firstName: "Eric", lastName: "Bambach", address: "4900 Parkway Dr.", csz: "Mason, OH 45040", SAT: 1200, GPA: 3.2 },
        { firstName: "Greg", lastName: "Olsen", address: "4900 Parkway Dr.", csz: "Mason, OH 45040", SAT: 1200, GPA: 3.2 },
        { firstName: "Eric", lastName: "Smith", address: "4900 Parkway Dr.", csz: "Mason, OH 45040", SAT: 1200, GPA: 3.2 },
        { firstName: "Bob", lastName: "Evans", address: "4900 Parkway Dr.", csz: "Mason, OH 45040", SAT: 1200, GPA: 3.2 }];
    return students;
}

// put some students in the table
function populateStudentTable()
{
    console.log("Populating table...");
    $("#student-body").empty();         // empty the table body of any/all contents

    var students = getStudents();   // get some students to put in the table
    for (var i = 0; i < students.length; i++)
    {
        $("#student-body").append("<tr>" +                                          // start new row
            "<td>" + students[i].firstName + " " + students[i].lastName + "</td>" + // name
            "<td>" + students[i].address + "</td>" +                                // address
            "<td>" + students[i].csz + "</td>" +                                    // City/State/Zip
            "<td>" + students[i].SAT + "</td>" +                                    // SAT score
            "<td>" + students[i].GPA + "</td>" +                                    // GPA
            "</tr>");                                                               // end row
    }
}
