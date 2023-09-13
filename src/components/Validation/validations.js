const input = document.getElementById('name')
const form = document.getElementById('formCard')
const elem = document.createElement('div')

elem.id = 'notify';
elem.style.display = 'none'; 

form.appendChild(elem);

input.addEventListener('invalid', function(e){
    e.preventDefault();
    if (!e.target.validity.valid) {
        input.className = 'invalid animated shake';
        elem.textContent = 'Solo letras y no mayor a 30 caracteres';
        elem.className = 'error';
        elem.style.display = 'block';        
    }
})