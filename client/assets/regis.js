$("#regis-button").click(function(event) {
  let username = $("#username").val();
  let password = $("#password").val();

  if (username != "" && password != "") {
    event.preventDefault();
    axios.post('http://localhost:3000/customers/', {username: username, password: password, memberid: "CUST001"})
    .then (() => {
      alert('Thank you for register, You will be redirect');
      setTimeout(function() {
      window.location.href = './index.html';
      }, 2000);
    })
    .catch ((err) => {
      console.log('failed');
      console.log(err.message);
      window.location.href = './register.html';
    });
  }

});
