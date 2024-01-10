

const LoadServices=()=>{
    fetch('https://testing-8az5.onrender.com/services/')
    .then(res=>res.json())
    .then(data=>DisplayServies(data))
    .catch(error=>console.log(error))
}

const DisplayServies=(services)=>{
        services.forEach(service => {
            console.log(service);
            const parant=document.getElementById('servies-container')
            const li=document.createElement('li')
            li.innerHTML=`
            <div class="card shadow h-100">
                        <div class="ratio ratio-16x9">
                            <img src="${service.image
                            }" class="card-img-top" loading="lazy" alt="...">
                        </div>
                        <div class="card-body p-3 p-xl-5">
                            <h3 class="card-title h5">${service.name}</h3>
                            <p class="card-text">${service.description.slice(0,140)
                            }</p>
                            <div><a href="#" class="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
            `

            parant.appendChild(li)
        });
}


LoadServices();