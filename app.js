

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

const LoadDoctorAll=()=>{
    fetch('https://testing-8az5.onrender.com/doctor/list/')
    .then(res=>res.json())
    .then(data=>DisplayDoctor(data?.results))
}


const DisplayDoctor=(doctors)=>{
    doctors?.forEach(doctor=>{
        console.log(doctor);
        const parent=document.getElementById('doctor-parant')
        const div=document.createElement('div')
        div.classList.add('doctor-card')
        div.innerHTML=`
                   <img src="${doctor.image
                   }" alt="">
                        <h3 class="card-title">${doctor.full_name
                        }</h3>
                        <h5>${doctor.designation[0]}</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt sunt aliquid ex. Corrupti
                            minima nobis ipsa alias maxime possimus vitae, iusto doloribus? In 
                            non distinctio.</p>
                            ${
                                doctor.specialization.map(sName=>`<button class='rounded bg-warning'>${sName}</button>`)
                            }
                        <button class='mt-2'>View Details</button>
                          `

                          parent.appendChild(div)
    })
}






LoadServices();
LoadDoctorAll();