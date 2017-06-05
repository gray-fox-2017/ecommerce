$("#login-button").click(function(event) {
  let username = $("#username").val();
  let password = $("#password").val();

  if (username != "" && password != "") {
    event.preventDefault();
    axios.post('http://localhost:3000/customers/login', {username: username, password: password})
    .then ((res) => {
      if (res.data == '/') {
        alert('login failed, check your username and password');
        setTimeout(function() {
        window.location.href = './index.html';
        }, 1000);
      } else {
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function(){
        window.location.href = './main.html';
        },3000);
      }
    })
    .catch ((err) => {
      console.log('failed');
      console.log(err.message);
      window.location.href = './index.html';
    });
  }

});

$("#regis-button").click(function(event) {
  event.preventDefault();
  window.location.href = './register.html';
});
