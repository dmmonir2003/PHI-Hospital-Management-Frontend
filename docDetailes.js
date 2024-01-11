const getParams=()=>{
    const param=new URLSearchParams(window.location.search).get('doctorId')
    console.log(param);
    fetch(`https://testing-8az5.onrender.com/doctor/list/${param}`)
    .then(res=>res.json())
    .then(data=>displayDetails(data))

    fetch(`https://testing-8az5.onrender.com/doctor/review/?doctor_id=${param}`)
    .then(res=>res.json())
    .then(data=>doctorReview(data))
}


const doctorReview=(reviews)=>{
    reviews?.forEach(review=>{
        const parent=document.getElementById('doctor-review-contaier')
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



const displayDetails=(doctor)=>{
    console.log(doctor);
    const parent=document.getElementById('doc-detailes')
    const div=document.createElement('div')
    div.classList.add('doc-detailes-container')
    div.innerHTML= `
    
    <div class="doc-detailes-img  mx-auto">
            <img src="${doctor.image}" alt="">
        </div>
        <div class="doc-info  ml-5 pt-5">
            <h3>${doctor.full_name}</h3>
            <h6>${doctor.designation[0]}</h6>

            ${
                doctor.specialization.map(item=>{
                    return `
                    <button class="btn btn-info rounded text-white mb-3">${item}</button>
                    `
                })

            }

            <p class="w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate aspernatur tempore,
                nihil dicta
                veritatis accusantium a facilis fugit sit!</p>
            <h3 class="">Fees: ${doctor.fee} BDT</h3>
            <button><a class="" href="#">Take Appointment</a></button>
        </div>
    
    `
    parent.appendChild(div)

}





getParams();