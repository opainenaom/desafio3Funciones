const keyDiv = document.getElementById('key');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        keyDiv.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        keyDiv.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        keyDiv.style.backgroundColor = 'lightblue';
    } else if (event.key === 'q') {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.backgroundColor = 'purple';
        document.body.appendChild(newDiv);
    } else if (event.key === 'w') {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.backgroundColor = 'gray';
        document.body.appendChild(newDiv);
    } else if (event.key === 'e') {
        const newDiv = document.createElement('div');
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.backgroundColor = 'brown';
        document.body.appendChild(newDiv);
    }
});
