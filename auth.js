 const handleRegitration =(event)=>{
    event.preventDefault()
    username=getValue('username')
    first_name=getValue('first_name')
    last_name=getValue('last_name')
    email=getValue('email')
    password=getValue('password1')
    confirm_password=getValue('password2')
   const info={
    username,
    first_name,
    last_name,
    email,
    password,
    confirm_password,
    }


   if (password===confirm_password){
         document.getElementById('castom-error').innerText='';
        if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
            fetch('https://testing-8az5.onrender.com/patient/register/',{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(info),
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
          }
          
        else{
            document.getElementById('castom-error').innerText='password contain Minimum eight characters, at least one letter, one number and one special character'
            alert('password contain Minimum eight characters, at least one letter, one number and one special character')

            }
       }
     
     else{

      document.getElementById('castom-error').innerText='password confirm do not match'
       alert('password confirm do not match')

      }
}

const getValue=(id)=>{
const value=document.getElementById(id).value;
return value;
}


const handleLogin=(event)=>{
    event.preventDefault()
    const username=getValue('login_username')
    const password=getValue('login_password')
    if(username,password){
        fetch('https://testing-8az5.onrender.com/patient/login/',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({username,password})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.user_id && data.token){
                localStorage.setItem("token",data.token);
                localStorage.setItem("user_id",data.user_id);
                window.location.href='index.html'
            }
        })
    }

}


// password:123456monir@
// username:shuvo