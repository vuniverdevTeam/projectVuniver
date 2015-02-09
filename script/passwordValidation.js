/**
 * Created by Cheese on 09.02.2015.
 */
const ALL = 0;
const PRIMARY = 1;
const SECONDARY = 2;

function showAlert(message, field)
{
    switch (field)
    {
        case ALL:
        {
            document.getElementById('password1').style.borderColor = "red";
            document.getElementById('password2').style.borderColor = "red";
            document.getElementById('validationmessage').innerHTML = message;
            break;
        }
        case PRIMARY:
        {
            document.getElementById('password1').style.borderColor = "red";
            document.getElementById('validationmessage').innerHTML = message;
            break;
        }
        case SECONDARY:
        {
            document.getElementById('password2').style.borderColor = "red";
            document.getElementById('validationmessage').innerHTML = message;
            break;
        }
    }
    document.getElementById('button-register').style.visibility="hidden";
    return false;
}

function isPasswordsEqual()
{
    return (document.getElementById('password1').value != document.getElementById('password2').value);
}

function isPasswordsNotEqualZero()
{
    return (document.getElementById('password2').value.length!=0 || document.getElementById('password1').value.length!=0);
}

function validatePassword()
{
    document.getElementById('button-register').style.visibility = "visible";
    document.getElementById('password1').style.borderColor = "#48bbb4";
    document.getElementById('password2').style.borderColor = "#48bbb4";
    document.getElementById('validationmessage').innerHTML = "";
    if (document.getElementById('password2').value.length < 3 && document.getElementById('password2').value.length!=0) showAlert("Пароль має містити більше ніж 3 символи", SECONDARY);
    if (document.getElementById('password1').value.length < 3 && document.getElementById('password1').value.length!=0) showAlert("Пароль має містити більше ніж 3 символи", PRIMARY);
    if (document.getElementById('password2').value.length > 45 && document.getElementById('password2').value.length!=0) showAlert("Пароль має містити менше ніж 45 символи", SECONDARY);
    if (document.getElementById('password1').value.length > 45 && document.getElementById('password1').value.length!=0) showAlert("Пароль має містити менше ніж 45 символи", PRIMARY);
    if ( isPasswordsEqual() && isPasswordsNotEqualZero() ) showAlert("Паролі не співпадають", ALL);
    return false;
}
