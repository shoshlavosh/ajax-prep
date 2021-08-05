function submitProfile(evt) {
  evt.preventDefault();

  const formData = {
    name: $("#name-field").val(),
    age: $("#age-field").val(),
    occupation: $("#occupation-field").val(),
  };

  $.ajax({
    url: "/api/profile",
    method: "POST",
    data: JSON.stringify(formData),
    contentType: "application/json",
    success: (res) => {
      console.log(res);
      $("#profiles").append(`
        <li>${res.fullname} the ${res.occupation} is ${res.age}</li>
      `);
    },
  });
}

$("#profile-form").on("submit", submitProfile);
