// 1. click handler button added with submit button    
document.getElementById('btn-submit').addEventListener('click', function() {
    // 2. get the email address inside the email input field
    // have remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // 3. get a password
    // 3.(a): set an id on the html element 
    // 3.(b): get the element
    // 3.(c): get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    // Danger: do not varify email password in this way all the time (ideal way would be taught later)
    // 4. varify email and password and check about valid user and invalid user 
    if (email === 'shijawa@gmail.com' && password === 'secretSuperstar') {
      window.location.href = 'bank-inside.html'
    }
    else{
        console.log('you are being watched!');
    }
})