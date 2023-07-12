// Pascal casing => capitalize the first letter of every word
// JSX syntax => JavaScript XML
function Message () {
    const name = 'Jason';
    if (name)
      return <h1>Hello {name}!</h1>; // dynamically add data
    return <h1>Hello World!</h1>
}

export default Message; // export it to use this Message component