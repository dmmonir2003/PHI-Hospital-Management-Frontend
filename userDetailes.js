const loadUserDetailes=()=>{
    
    const user_id=localStorage.getItem('user_id')
    fetch(`https://testing-8az5.onrender.com/users/${user_id}`)
    .then(res=>res.json())
    .then(data=>{
       
        const parent=document.getElementById('user-detailes-container')
        const div=document.createElement('div')
        div.classList.add('user-detailes-container');
        div.innerHTML= `
        <div class="user-detailes-container-img  ">
                <img src="./Images/man-1.jpg" alt="">
            </div>
            <div class="doc-info  ml-5 ">
                <h3>${data.username}</h3>
                <h6>${data.first_name + data.last_name}</h6>
                <h6>${data.email}</h6>

            </div>
        
        `
        parent.appendChild(div)


    })
}

loadUserDetailes()