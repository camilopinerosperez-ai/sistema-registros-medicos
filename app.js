const STORAGE_KEY = 'registrosMedicos';

function cargarPacientes() {
    const datos = localStorage.getItem(STORAGE_KEY);
    return datos ? JSON.parse(datos) : [];
}

function guardarPacientes(pacientes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pacientes));
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}

function formatearFecha(fecha) {
    const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(fecha + 'T00:00:00').toLocaleDateString('es-CO', opciones);
}

function mostrarMensaje(mensaje, tipo = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${tipo}`;
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${tipo === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
    `;
    
    alertDiv.textContent = mensaje;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
}

function renderizarTabla() {
    const pacientes = cargarPacientes();
    const tbody = document.getElementById('patientsTableBody');
    const noRecords = document.getElementById('noRecords');
    const tableContainer = document.getElementById('tableContainer');
    const tableActions = document.getElementById('tableActions');
    const totalPacientes = document.getElementById('totalPacientes');
    
    totalPacientes.textContent = `Total: ${pacientes.length} paciente${pacientes.length !== 1 ? 's' : ''}`;
    
    if (pacientes.length === 0) {
        noRecords.style.display = 'block';
        tableContainer.style.display = 'none';
        tableActions.style.display = 'none';
        return;
    }
    
    noRecords.style.display = 'none';
    tableContainer.style.display = 'block';
    tableActions.style.display = 'block';
    
    tbody.innerHTML = pacientes.map((paciente, index) => `
        <tr>
            <td><strong>${paciente.nombre}</strong></td>
            <td>${paciente.cedula}</td>
            <td>${formatearFecha(paciente.fechaNacimiento)}</td>
            <td>${calcularEdad(paciente.fechaNacimiento)} años</td>
            <td><span style="background: #007bff; color: white; padding: 4px 8px; border-radius: 4px; font-weight: 600;">${paciente.tipoSangre}</span></td>
            <td>${paciente.alergias || '<em style="color: #6c757d;">Ninguna</em>'}</td>
            <td>${paciente.observaciones || '<em style="color: #6c757d;">N/A</em>'}</td>
            <td>
                <button class="btn btn-delete" onclick="eliminarPaciente(${index})">
                    🗑️ Eliminar
                </button>
            </td>
        </tr>
    `).join('');
}

function registrarPaciente(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const paciente = {
        nombre: formData.get('nombre').trim(),
        cedula: formData.get('cedula').trim(),
        fechaNacimiento: formData.get('fechaNacimiento'),
        tipoSangre: formData.get('tipoSangre'),
        alergias: formData.get('alergias').trim(),
        observaciones: formData.get('observaciones').trim(),
        fechaRegistro: new Date().toISOString()
    };
    
    const pacientes = cargarPacientes();
    
    const cedulaExiste = pacientes.some(p => p.cedula === paciente.cedula);
    if (cedulaExiste) {
        mostrarMensaje('⚠️ Ya existe un paciente con esta cédula', 'error');
        return;
    }
    
    pacientes.push(paciente);
    guardarPacientes(pacientes);
    
    mostrarMensaje(`✅ Paciente ${paciente.nombre} registrado exitosamente`);
    
    e.target.reset();
    renderizarTabla();
}

function eliminarPaciente(index) {
    const pacientes = cargarPacientes();
    const paciente = pacientes[index];
    
    if (confirm(`¿Está seguro de eliminar el registro de ${paciente.nombre}?`)) {
        pacientes.splice(index, 1);
        guardarPacientes(pacientes);
        mostrarMensaje(`🗑️ Registro de ${paciente.nombre} eliminado`);
        renderizarTabla();
    }
}

function confirmarBorrarTodo() {
    const pacientes = cargarPacientes();
    
    if (pacientes.length === 0) {
        mostrarMensaje('ℹ️ No hay registros para eliminar', 'error');
        return;
    }
    
    if (confirm(`⚠️ ¿Está seguro de eliminar TODOS los ${pacientes.length} registros?\n\nEsta acción no se puede deshacer.`)) {
        if (confirm('⚠️ CONFIRMACIÓN FINAL: Se eliminarán todos los datos permanentemente.')) {
            localStorage.removeItem(STORAGE_KEY);
            mostrarMensaje('🗑️ Todos los registros han sido eliminados');
            renderizarTabla();
        }
    }
}

function limpiarFormulario() {
    document.getElementById('patientForm').reset();
    mostrarMensaje('🔄 Formulario limpiado');
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarTabla();
    
    const form = document.getElementById('patientForm');
    form.addEventListener('submit', registrarPaciente);
    
    const fechaInput = document.getElementById('fechaNacimiento');
    const hoy = new Date().toISOString().split('T')[0];
    fechaInput.setAttribute('max', hoy);
    
    const cedulaInput = document.getElementById('cedula');
    cedulaInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
