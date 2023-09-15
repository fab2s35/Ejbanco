document.getElementById('calcular').addEventListener('click', function () {

    const cantidadRetiro = parseInt(document.getElementById('cantidadRetiro').value);

    if (cantidadRetiro < 0) {
        alert('Ingrese una cantidad valida.');
        return; 
    }

    const nombreUsuario = document.getElementById('nombreUsuario').value;
    
    document.getElementById("mensajeSaludo").textContent = `Usuario ${nombreUsuario}, el retiro se ha realizado así:`
    
    const billetes100 = Math.floor(cantidadRetiro / 100);
    const billetes50 = Math.floor((cantidadRetiro % 100) / 50);
    const billetes20 = Math.floor(((cantidadRetiro % 100) % 50) / 20);
    const billetes10 = Math.floor((((cantidadRetiro % 100) % 50) % 20) / 10);
    const billetes5 = Math.floor(((((cantidadRetiro % 100) % 50) % 20) % 10) / 5);
    const billetes1 = (((cantidadRetiro % 100) % 50) % 20) % 10 % 5;

    document.getElementById('billete100').textContent = billetes100;
    document.getElementById('billete50').textContent = billetes50;
    document.getElementById('billete20').textContent = billetes20;
    document.getElementById('billete10').textContent = billetes10;
    document.getElementById('billete5').textContent = billetes5;
    document.getElementById('billete1').textContent = billetes1;   
});