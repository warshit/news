function checkLogin() {
  const pwd = document.getElementById('password').value;
  if (pwd === "admin123") {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('editorBox').style.display = 'block';
  } else {
    alert("Incorrect password.");
  }
}

function saveNews() {
  const news = document.getElementById('newsInput').value;
  localStorage.setItem('latestNews', news);
  alert("News updated!");
}
