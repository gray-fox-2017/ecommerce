$("#login-button").click(function(event) {
  event.preventDefault();
  axios.post('http://localhost:3000/customers/login', {username: $("#username").val(), password: $("#password").val() })
  .then ((res) => {
    if (res == '/') {
      setTimeout(function() {
      //alert('login failed');
      window.location.href = './index.html';
      },3000);
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
});
