const API = "http://localhost:5000/api";

// Register
async function register() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API}/auth/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    });

    const data = await res.json();

    alert("Registration Successful");
}

// Login
async function login(){

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    const res=await fetch(`${API}/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    });

    const data=await res.json();

    localStorage.setItem("token",data.token);

    window.location="dashboard.html";
}

// Create Group
async function createGroup(){

    const groupName=document.getElementById("groupName").value;
    const village=document.getElementById("village").value;

    await fetch(`${API}/groups`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            groupName,
            village
        })
    });

    alert("Group Created");
}

// Loan Request
async function requestLoan(){

    const memberName=document.getElementById("memberName").value;
    const amount=document.getElementById("amount").value;

    await fetch(`${API}/loans`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            memberName,
            amount
        })
    });

    alert("Loan Requested");
}