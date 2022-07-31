let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
console.log('hello');
// const btn = document.getElementById('signup');

let submit = document.getElementById("submit")
submit.addEventListener('click', showValues)

 function showValues(){
  // window.stop();

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value
    let data = {
        "name": name,
        "email": email,
        "subject": subject,
        "message": message
    }
    console.log(data);
    
    userAction(data)
 }

 const userAction = async (data) => {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    const response = await fetch('https://portfolio-registration.herokuapp.com/register ', {
      method: 'POST',
      body:JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      }), // string or object
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log(response);
    if (response.status == 200) {
        alert("message send successfully");
        location.reload();
    }
  }