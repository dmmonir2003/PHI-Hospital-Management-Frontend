

const LoadServices=()=>{
    fetch('https://testing-8az5.onrender.com/services/')
    .then(res=>res.json())
    .then(data=>DisplayServies(data))
    .catch(error=>console.log(error))
}

const DisplayServies=(services)=>{
        services.forEach(service => {
            console.log(service);
        });
}


LoadServices();