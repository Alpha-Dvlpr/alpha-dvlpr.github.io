let materiales = {};

function mostrarModal(mensaje) {
    const modal = document.getElementById('modalOverlay');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = mensaje;
    modal.classList.add('active');
}

function cerrarModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
}

async function cargarMateriales() {
    try {
        const response = await fetch('materiales.json');
        const data = await response.json();
        materiales = data.materiales;

        const selectMaterial = document.getElementById('material');
        selectMaterial.innerHTML = '';

        for (const [nombre, precio] of Object.entries(materiales)) {
            const option = document.createElement('option');
            option.value = nombre;
            option.textContent = `${nombre} - ${precio} €/kg`;
            selectMaterial.appendChild(option);
        }
    } catch (error) {
        console.error('Error al cargar materiales:', error);
        mostrarModal('Error al cargar los materiales. Verifica que el archivo materiales.json existe.');
    }
}

function calcular() {
    const campos = ['material', 'peso', 'tiempo', 'consumo', 'precioElectricidad', 'mantenimiento', 'margen'];
    campos.forEach(campo => {
        document.getElementById(campo).classList.remove('error');
    });

    const material = document.getElementById("material").value;
    const peso = document.getElementById("peso").value;
    const tiempo = document.getElementById("tiempo").value;
    const consumo = document.getElementById("consumo").value;
    const precioElectricidad = document.getElementById("precioElectricidad").value;
    const mantenimiento = document.getElementById("mantenimiento").value;
    const margen = document.getElementById("margen").value;

    let camposConError = [];

    if (!material) {
        document.getElementById("material").classList.add('error');
        camposConError.push('Material');
    }

    if (!peso || peso === '') {
        document.getElementById("peso").classList.add('error');
        camposConError.push('Peso');
    }

    if (!tiempo || tiempo === '') {
        document.getElementById("tiempo").classList.add('error');
        camposConError.push('Tiempo de impresión');
    }

    if (!consumo || consumo === '') {
        document.getElementById("consumo").classList.add('error');
        camposConError.push('Consumo eléctrico');
    }

    if (!precioElectricidad || precioElectricidad === '') {
        document.getElementById("precioElectricidad").classList.add('error');
        camposConError.push('Precio de la electricidad');
    }

    if (!mantenimiento || mantenimiento === '') {
        document.getElementById("mantenimiento").classList.add('error');
        camposConError.push('Coste de mantenimiento');
    }

    if (!margen || margen === '') {
        document.getElementById("margen").classList.add('error');
        camposConError.push('Margen de beneficio');
    }

    if (camposConError.length > 0) {
        mostrarModal('Por favor, completa todos los campos requeridos');
        return;
    }

    if (!materiales[material]) {
        mostrarModal('Material no válido');
        return;
    }

    const precioFilamento = materiales[material];
    const pesoNum = parseFloat(peso);
    const tiempoNum = parseFloat(tiempo);
    const consumoNum = parseFloat(consumo);
    const precioElectricidadNum = parseFloat(precioElectricidad);
    const mantenimientoNum = parseFloat(mantenimiento);
    const margenNum = parseFloat(margen);

    const costoMaterial = (pesoNum / 1000) * precioFilamento;
    const costoElectricidad = (consumoNum / 1000) * tiempoNum * precioElectricidadNum;
    const costoMantenimiento = tiempoNum * mantenimientoNum;

    const subtotal = costoMaterial + costoElectricidad + costoMantenimiento;
    const total = subtotal * (1 + margenNum / 100);

    const resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    resultado.innerHTML = `
    <p>Material: <strong>${material}</strong></p>
    <p>Costo material: ${costoMaterial.toFixed(2)} €</p>
    <p>Electricidad + mantenimiento: ${(costoElectricidad + costoMantenimiento).toFixed(2)} €</p>
    <p>💶 <strong>Precio estimado: ${total.toFixed(2)} €</strong></p>
  `;
}

window.addEventListener('DOMContentLoaded', cargarMateriales);