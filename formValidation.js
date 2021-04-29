window.onload= function (){
    console.log("loaded");
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const SucessMsg = document.getElementById('SucessMsg');
    // document.getElementById("SucessMsg").style.visibility = "hidden";

    //Show input error messages
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    //show success colour
    function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
        // const small = formControl.querySelector('small');
        // const submit = document.getElementById('validate');
        // document.getElementById("validate").style.visibility = "hidden";
        // document.getElementById("email").style.visibility = "hidden";
        // document.getElementById("SucessMsg").style.display = "inline";
        // var node = document.createElement("P");                 
        // var textnode = document.createTextNode("Please email me at khrystynavoitovych@gmail.com and I will be happy to work with you!");         
        // node.appendChild(textnode);                              
        // formControl.appendChild(node);
    }

    //check email is valid
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())) {
            document.getElementById("validate").style.visibility = "hidden";
            document.getElementById("email").style.visibility = "hidden";
            document.getElementById("SucessMsg").style.display = "inline";
            showSucces(input)
        }else {
            showError(input,'Email is not invalid');
        }
    }


    //checkRequired fields
    function checkRequired(inputArr) {
        inputArr.forEach(function(input){
            if(input.value.trim() === ''){
                showError(input,`${getFieldName(input)} is required`)
            }else {
                showSucces(input);
            }
        });
    }


    //check input Length
    function checkLength(input, min ,max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        }else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} must be les than ${max} characters`);
        }else {
            showSucces(input);
        }
    }

    //get FieldName
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    // check passwords match
    function checkPasswordMatch(input1, input2) {
        if(input1.value !== input2.value) {
            showError(input2, 'Passwords do not match');
        }
    }

    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        console.log("baar aai");
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
    //Event Listeners
    document.getElementById("validate").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("reached");
        checkRequired([email]);
        checkEmail(email);
    });
}