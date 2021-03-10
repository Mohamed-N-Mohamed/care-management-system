const updateUser = document.querySelector("#update_user");
const btn = document.querySelector(".update");
const form = document.querySelector(".new_user");

function alertMessage() {
  alert("stored in the database");
}

//update user
function update(e) {
  e.preventDefault();

  let data = objectifyForm(this);
  let url = `http://localhost:3000/api/clients/${data.id}`;

  const req = {
    url: url,
    method: "PUT",
    data: data,
  };

  $.ajax(req).done((response) => {
    alert("data added");
  });

  //can't use fetch for some reason / used a simple jquery code from stack overflow
  // fetch(`http://localhost:3000/api/clients/${data.id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Success:", data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  console.log(data);
}

function objectifyForm(formArray) {
  //serialize data function
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++) {
    returnArray[formArray[i]["name"]] = formArray[i]["value"];
  }
  return returnArray;
}

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    let id = $(this).attr("data-id");

    //make sure to test in postman 
    let request = {
      url: `http://localhost:3000/api/clients/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        //reload page
        location.reload();
      });
    }
  });
}

updateUser.addEventListener("submit", update);
