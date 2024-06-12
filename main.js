const userItem = document.getElementById("user");

function getUser() {
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/cities')
    .then(res => res.json())
    .then(users => {
        let x = 0;
        console.log();
        users.data.map(item => {
            
            userItem.innerHTML += `
                <li>
                    <p class="counter"> ${++x}</p>
                    <p class="place-name">${item.name}</p>
                    <p class="text">${item.text}</p>
                    <img class="auto-img" src="https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item.image_src}" alt="">
                    
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>

                    
                </li>
            `;
        });
    });
    
}

getUser();
