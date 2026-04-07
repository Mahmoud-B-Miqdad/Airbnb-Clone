
let editLink = document.querySelector(".top a"); 
let profileName = document.querySelector(".l-div h3");  
 let nameSpan = document.querySelector(".side .Name");
 let char = document.querySelector(".l-div .char");
 let save = document.querySelector(".save-btn"); 
 

// editLink.addEventListener("click", (e) => {
//     e.preventDefault(); 
//     profileName.innerHTML = "Marwa";
//     nameSpan.innerHTML = "M";
//     char.innerHTML = "M";
    
// });
editLink.addEventListener("click", (e) => {
    e.preventDefault();
    let newName = prompt("Enter your new name:", profileName.innerText);
    if (newName && newName.trim() !== "") {
        profileName.innerText = newName;
        nameSpan.innerText = newName.charAt(0).toUpperCase();
        char.innerText = newName.charAt(0).toUpperCase();
    }
});


save.addEventListener("click", (e) => {
     e.preventDefault();
    alert("Profile saved successfully!");
});
