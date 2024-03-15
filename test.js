document.getElementById('generateBtn').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var useUppercase = document.getElementById('uppercase').checked;
    var useLowercase = document.getElementById('lowercase').checked;
    var useSpecial = document.getElementById('special').checked;

    var charset = '';
    var password = '';

    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useSpecial) charset += '!@#$%^&*()_+{}|:"<>?-=[]\\;\',./';

    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById('password').value = password;
});