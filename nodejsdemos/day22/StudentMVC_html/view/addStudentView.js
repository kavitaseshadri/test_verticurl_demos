module.exports.addStudentView = () => {
    const template = `<form method="post" class="flex_v">
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="Student Age" />
        <input type="text" placeholder="Marks1" />
        <input type="text" placeholder="Marks2" />
        <input type="text" placeholder="Marks3" />
        <input type="text" placeholder="Marks4" />
        <input type="text" placeholder="Marks5" />
        <button type="submit">Submit</button>
    </form>`

    // const template = `<h1>Student Data Form`;
    return template;
}