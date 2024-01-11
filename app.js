

const LoadServices=()=>{
    fetch('https://testing-8az5.onrender.com/services/')
    .then(res=>res.json())
    .then(data=>DisplayServies(data))
    .catch(error=>console.log(error))
}

const DisplayServies=(services)=>{
        services.forEach(service => {
            // console.log(service);
            const parant=document.getElementById('servies-container')
            const li=document.createElement('li')
            li.innerHTML=`
            <div class="card shadow h-100">
                    <div class="ratio ratio-16x9">
             <img src="${service.image}" class="card-img-top" loading="lazy" alt="...">
                        </div>
                        <div class="card-body p-3 p-xl-5">
                            <h3 class="card-title h5">${service.name}</h3>
            <p class="card-text">${service.description.slice(0,140)}</p>
                            <div><a href="#" class="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
            `

            parant.appendChild(li)
        });
}

const LoadDoctorAll=(searchValue)=>{
    document.getElementById('loader').style.display='block';
    console.log(searchValue);
    fetch(`https://testing-8az5.onrender.com/doctor/list/?search=${searchValue ? searchValue:''}`)
    .then(res=>res.json())
    .then(data=>DisplayDoctor(data?.results))
}


const DisplayDoctor=(doctors)=>{
    const parent=document.getElementById('doctor-parant')
    parent.innerHTML = '';
    if (!doctors || doctors.length===0){
        document.getElementById('nodata').style.display='block';
        document.getElementById('loader').style.display='none';
    }else{
        document.getElementById('nodata').style.display='none'
        document.getElementById('loader').style.display='none';
    }

    doctors?.forEach(doctor=>{
        // console.log(doctor);

        const div=document.createElement('div')
        div.classList.add('doctor-card')
        div.innerHTML=`
                   <img src="${doctor.image}" alt="">
            <h3 class="card-title">${doctor.full_name}</h3>
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


const loadDesignation=()=>{
    fetch('https://testing-8az5.onrender.com/doctor/designation/')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(designation=>{
            const parent=document.getElementById('designation-parent')
            const li =document.createElement('li')
            li.classList.add('dropdown-item')
            li.innerHTML=`
            
            <li onclick="LoadDoctorAll('${designation.name}')">${designation.name}</li>
            
            `

            parent.appendChild(li)
        })
    })
}
const loadSpecialization=()=>{
    fetch(`https://testing-8az5.onrender.com/doctor/specialization/`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(specialization=>{
            const parent=document.getElementById('specialization-parent')
            const li =document.createElement('li')
            li.classList.add('dropdown-item')
            li.innerHTML=`
            
            <li onclick="LoadDoctorAll('${specialization.name}')">${specialization.name}</li>
            
            `
            parent.appendChild(li)
        })
    })
}


const loadReviews=()=>{
    fetch('https://testing-8az5.onrender.com/doctor/review/')
    .then(res=>res.json())
    .then(data=>displayReview(data))
}

const displayReview=(reviews)=>{
    reviews?.forEach(review=>{
        const parent=document.getElementById('review-contaier')
        const div=document.createElement('div')
        div.classList.add('review-card')
        div.innerHTML=`
        <img src="./Images/girl.png" alt="">
                    <h2 class="card-title">${review.reviewer}</h2>
                    <h5 class="fond-semibold">${review.doctor}</h5>
                    <p>${review.body.slice(0,70)}</p>
                    <p>${review.rating}</p>
        
        `
        parent.appendChild(div)
    })
}

const handleSearch = () => {
    const searchInput = document.getElementById('search-doc');
    const value = searchInput.value;

    // Call your function to load doctors here (assuming it's asynchronous)
    LoadDoctorAll(value);

    // Clear the search input field
    searchInput.value = '';
}


LoadDoctorAll();
loadSpecialization();
loadDesignation();
LoadServices();
loadReviews();
