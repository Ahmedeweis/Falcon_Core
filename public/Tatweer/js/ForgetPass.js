  const mainContent = document.querySelector('.main-content');
  const emailInput = document.querySelector('.email');
  const codeBox = document.querySelector('.code-box');
  const codeInput = document.querySelector('.code');
  const newPasswordBox = document.querySelector('.new-password-box');
  const newPasswordInput = document.querySelector('.new-password');
  const confirmPasswordInput = document.querySelector('.confirm-password');
  const resendButton = document.querySelector('.resend-btn');
  const statusMessage = document.querySelector('.status-message');

  let codeSent = false;
  let resendTimer = null;

  function sendCode() {
    const email = emailInput.value;
    // Here you would send the code to the user's email using a backend service (not implemented here).
    // For demonstration purposes, we'll just simulate the code sending process.
    console.log(`Sending code to ${email}...`);
    codeSent = true;

    // Show the code input box
    codeBox.style.display = 'block';
    statusMessage.innerText = 'Code sent! Check your email.';
    startResendTimer();
  }

  function startResendTimer() {
    let seconds = 3;
    resendButton.disabled = true;
    resendTimer = setInterval(() => {
      seconds--;
      if (seconds === 0) {
        clearInterval(resendTimer);
        resendButton.disabled = false;
      }
      const remainingTime = `${seconds}s`;
      resendButton.innerText = `Resend Code (${remainingTime})`;
    }, 1000);
  }

  function resendCode() {
    if (!codeSent) return;
    // Here you would resend the code using a backend service (not implemented here).
    // For demonstration purposes, we'll just simulate the code resending process.
    console.log('Resending code...');
    statusMessage.innerText = 'Code resent! Check your email.';
    startResendTimer();
  }


  function verifyCode() {
    // Here you would verify the code entered by the user using a backend service (not implemented here).
    // For demonstration purposes, we'll just simulate the code verification process.
    const enteredCode = codeInput.value;
    if (enteredCode.length === 6) {
      codeBox.style.display = 'none';
      newPasswordBox.style.display = 'block';
      statusMessage.innerText = 'Code verified!';
    } else {
      statusMessage.innerText = 'Invalid code. Please enter a 6-digit code.';
    }
  }


  function savePassword() {
    // Here you would save the new password using a backend service (not implemented here).
    // For demonstration purposes, we'll just simulate the password saving process.
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (newPassword === confirmPassword) {
      // Passwords match, and the new password can be saved.
      newPasswordBox.style.display = 'none';
      statusMessage.innerText = 'Password saved successfully!';
    } else {
      statusMessage.innerText = 'Passwords do not match. Please try again.';
    }
  }