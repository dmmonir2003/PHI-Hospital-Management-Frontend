const getParams=()=>{
    const param=new URLSearchParams(window.location.search).get('doctorId')
    // console.log(param);
    loadTime(param);
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

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Take Appointment
  </button>
            
        </div>
    
    `
    parent.appendChild(div)

}


const loadTime=(id)=>{
   fetch(`https://testing-8az5.onrender.com/doctor/availabletime/?doctor_id=${id}`)
   .then(res=>res.json())
   .then(data=>{
        data.forEach(item=>{
            const parent=document.getElementById('time-container')
            const option=document.createElement('option')
            option.value=item.id;
            option.innerText=item.name;
            parent.appendChild(option)
            
        })
   })
}



const handleAppointment=()=>{
    const param=new URLSearchParams(window.location.search).get('doctorId')
    const status=document.getElementsByName('status')
    const selected=Array.from(status).find((button)=>button.checked)
    const symptom=document.getElementById('symptom').value;
    const time=document.getElementById('time-container')
    const selectedTime=time.options[time.selectedIndex]
    // console.log(selected,symptom,selectedTime);

    const patient_id=localStorage.getItem('patient_id')

    const info={
        appointment_type: selected.value,
        appointment_status: "Pending",
        time: selectedTime.value,
        symptom: symptom,
        cancel: false,
        patient: patient_id,
        doctor: param,
    }


    fetch("https://testing-8az5.onrender.com/appointment/",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(info),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}


const getPatientId=()=>{
    const user_id=localStorage.getItem('user_id')
    fetch(`https://testing-8az5.onrender.com/patient/list/?user_id=${user_id}`)
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem('patient_id',data[0].id)
    })
}


getParams();