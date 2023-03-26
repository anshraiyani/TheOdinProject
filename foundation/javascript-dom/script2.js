const button = document.querySelector('#btn');
// button.onclick = () => {alert("clicked a button")};
button.addEventListener('click', function (e) {
        e.target.style.background='blue';
        e.target.style.color='white';
    });