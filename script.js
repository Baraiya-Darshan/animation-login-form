
// label animation
const inputs = document.querySelectorAll('.form_control input');
const labels = document.querySelectorAll('.form_control label');

labels.forEach(label => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="
				transition-delay: ${idx * 40}ms
			">${letter}</span>`)
		.join('');
});


// password hide and show
let eyeIcon = document.getElementById("eye_icon");

eyeIcon.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        password.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
});



let eyeicon = document.getElementById("eyeicon");

eyeicon.addEventListener("click", () => {
    if (signpassword.type === "password") {
        signpassword.type = "text";
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");
    } else {
        signpassword.type = "password";
        eyeicon.classList.remove("fa-eye");
        eyeicon.classList.add("fa-eye-slash");
    }
});

let confirmEyeIcon = document.getElementById("confirmEyeIcon");

confirmEyeIcon.addEventListener("click", () => {
    if (confirmpassword.type === "password") {
        confirmpassword.type = "text";
        confirmEyeIcon.classList.remove("fa-eye-slash");
        confirmEyeIcon.classList.add("fa-eye");
    } else {
        confirmpassword.type = "password";
        confirmEyeIcon.classList.remove("fa-eye");
        confirmEyeIcon.classList.add("fa-eye-slash");
    }
});


let container = document.querySelector(".container")
let registerLink =  document.querySelector(".register_link a")
let loginLink =  document.querySelector(".login_link a")
// console.log(registerLink);

registerLink.addEventListener("click",()=>{
    container.classList.add("active")
})
loginLink.addEventListener("click",()=>{
    container.classList.remove("active")
})


// button shake
const buttons = document.querySelectorAll('#submitButton');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const email = document.getElementById('email').value.trim();
        const signpassword = document.getElementById('signpassword').value.trim();
        const confirmpassword = document.getElementById('confirmpassword').value.trim();

        if (username === '' || password === '' || email === '' || signpassword === '' || confirmpassword === '') {
             console.log(this);
            this.classList.add('shake-animation');
            setTimeout(() => {
               this.classList.remove('shake-animation')
            }, 2000);
          }
          if (username !== '' || password !== '' || email !== '' || signpassword  !== '' || confirmpassword !== '') {

                setTimeout(()=>{
                     button.innerHTML=" Success"
                },1200)
                
               this.classList.remove("shake-animation")
            }
    });
});

  

