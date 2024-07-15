module.exports.displayAllStudents = (studentRecords) => {
    let displayRecords = studentRecords.map((record, index) => {
        return (
            `<tr>
            <td>${record.name}</td>
             <td>${record.age}</td>
              <td>${record.marks[0]}</td>
              <td>${record.marks[1]}</td>
              <td>${record.marks[2]}</td>
              <td>${record.marks[3]}</td>
              <td>${record.marks[4]}</td>
            </tr>`
        )
    })
    const template = `<table>${displayRecords}</table>`;
    return template;
}
