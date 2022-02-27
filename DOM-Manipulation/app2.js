
 showdetails();

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function (e) {
    // console.log("submit button is clicked")
    const naame = document.getElementById("naame").value;
    const role = document.getElementById("role").value;
    const city = document.getElementById("city").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    smallDetails=[]
    // console.log(naame,role,city,email,number);
    let details = localStorage.getItem("details");
    if (details == null) {
        detailsObj = [];
    } else {
        detailsObj = JSON.parse(details);
    }
    smallDetails.push(naame);
    smallDetails.push(role);
    smallDetails.push(city);
    smallDetails.push(number);
    smallDetails.push(email);
    detailsObj.push(smallDetails);
    localStorage.setItem("details", JSON.stringify(detailsObj));
   naame.value="";
   city.value="";
   role.value="";
   email.value="";
   number.value="";

    //  console.log(detailsObj);
     e.preventDefault();
    showdetails();
});

// Function to show elements from localStorage
function showdetails() {
    console.log("showDetails is running")
    let details = localStorage.getItem("details");
    if (details == null) {
        detailsObj = [];
    } else {
        detailsObj = JSON.parse(details);
    }
    let html = "";
    detailsObj.forEach(function (element, index) {
        // console.log(element[2])
        html += `
        <tr>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td>${element[3]}</td>
        <td>${element[4]}</td>
        <td><button id="deleteBtn" class="${index}" onclick="deleteNote(this.class)" > Delete</button></td>
        ` ;
    // console.log(html);
    });
    let detailsElm = document.getElementById("table");
    if (detailsObj.length != 0) {
        detailsElm.innerHTML = html;
    } else {
        detailsElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add details.`;
    };
    naame.value="";
   city.value="";
   role.value="";
   email.value="";
   number.value="";
}

// Function to delete a note
function deleteNote(index) {
    console.log(index);

    let details = localStorage.getItem("details");
    if (details == null) {
        detailsObj = [];
    } else {
        detailsObj = JSON.parse(details);
    }

    detailsObj.splice(index, 1);
    localStorage.setItem("details", JSON.stringify(detailsObj));
    showdetails();
}




// let deleteBtn=document.getElementById("deleteBtn");
// deleteBtn.addEventListener("click",function(){
//     console.log("delete button is fired");
// })