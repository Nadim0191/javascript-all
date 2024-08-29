
function apiClick() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => apiuser(data))
}

function apiuser(data) {
    // console.log(data)
    const postName = document.getElementById('user-show')
    for(singleData of data){
        console.log(singleData)
        const div = document.createElement('div')
        div.classList.add('bg-color')
        div.innerHTML = `
        <h5>${singleData.title}</h5>
        <h3>post title </h3>
        <p>our descriptison : ${singleData.body}</p>`
        postName.appendChild(div)
      

    }
    
apiuser();
    
}

// const nadim = n=>n*2;
// const shourov = nadim(12)
// console.log(shourov)