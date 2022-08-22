// window.alert("loaded")

let fname=document.getElementById('fname');
let lname=document.getElementById('lname');
let email=document.getElementById('email');
let dob=document.getElementById('dob');
let gender=document.getElementById('gender')
let photo=document.getElementById('file')

function validate(){
    
    // gender need not be checked as a gender will always be selected due to mentioned checked attribute.

    //now check for name validity 🔽
    if(!(/^[A-Za-z]+$/.test(fname.value.trim()))){
        window.alert("Enter valid fname.")
        return false;
    }
    if(!(/^[A-Za-z]+$/.test(lname.value.trim()))){
        window.alert("Enter valid lname.")
        return false;
    }

    //to check if dob is mentioned 🔽
    if(dob.value==""){
        window.alert("Enter valid Date of Birth.")
        return false;
    }

    // to check if email is correctly mentioned 🔽
    if(email.value=="" || !(/[A-Za-z0-9]@[a-z].[a-z]/.test(email.value))){
        window.alert("Please enter valid email.")
        return false;
    }

    //to check if a photo is uploaded 🔽
    if(photo.value===""){
        window.alert("Please attach an image.")
        return false;
    }

    return true;

}

function add(){
    if(!validate()){return}
    let newRow = document.createElement('tr');
    let newImg = document.createElement('td');
    let newName = document.createElement('td');
    let newGender = document.createElement('td');
    let newEmail = document.createElement('td');
    let newDOB = document.createElement('td');

    //now setting the details
    newName.textContent = fname.value +" "+ lname.value;
    newImg.innerHTML="<img src="+URL.createObjectURL(photo.files[0])+">";
    newGender.textContent = gender.querySelector('input:checked').value
    newDOB.textContent=dob.value;
    newEmail.textContent=email.value;

    newRow.append(newImg);
    newRow.append(newName);
    newRow.append(newDOB);
    newRow.append(newEmail);
    newRow.append(newGender);
    document.getElementById('display-table').append(newRow);
    window.alert("Student added.")
}

document.getElementById('submit').addEventListener('click',add);