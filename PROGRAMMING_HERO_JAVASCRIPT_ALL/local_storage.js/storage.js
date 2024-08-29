const localStorage1 = () => {
  const nameinput = document.getElementById("name");
  const name = nameinput.value;
  console.log(name);
  const valueinput = document.getElementById("value");
  const value = valueinput.value;
localStorage.setItem(name,value)
}
