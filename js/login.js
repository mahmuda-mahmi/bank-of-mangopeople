document.getElementById('btn-submit').addEventListener('click', function () {
       const userEmail = document.getElementById('user-email');
       const email = userEmail.value;

       const userPassword = document.getElementById('user-password');
       const password = userPassword.value;

       if (email === 'something@mail.com' && password === 'something') {
              window.location.href = 'bank.html';
       } else {
              alert("Invalid Password!")
       }

})