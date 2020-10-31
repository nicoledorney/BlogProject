function validateForm()
{
   // alert("VALIDATE");
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var phone = document.contactForm.mobile.value;
    var message = document.contactForm.message.value;

    //regex to validate email and phone input
    emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    phoneCheck = /^\d{10}$/;

    if(name == "" || email == "" || phone =="" || message == "")
    {
        alert("Please fill in all of your information");
    }
    else if(!(emailCheck.test(email)))
    {
        alert("Please enter a valid email");
    }
    else if(!(phoneCheck.test(phone)))
    {
        alert("Please enter a valid phone number.");
    }
    else
    {
      alert("Thanks for your message! We will get back to you as soon as possible!");  
    }
    
}
