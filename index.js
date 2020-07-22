console.log('Hello world !!!')
console.log(process.env.TEST)

if (process.env.NODE_ENV === 'production') {
  console.log('Production version');

  const newScript = document.createElement("script");
  newScript.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
  document.body.appendChild(newScript);
} else {
  console.log('Development version');

  const newScript = document.createElement("script");
  newScript.src = "http://localhost:1900/main.js";
  document.body.appendChild(newScript);
}
