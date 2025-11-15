# 🏥 Sistema de Registros Médicos

Aplicación web simple para la gestión de registros médicos de pacientes, desarrollada como parte del curso de Desarrollo de Aplicaciones Web.

## 📋 Descripción

Esta aplicación permite a los profesionales de la salud registrar y consultar información básica de sus pacientes de manera eficiente. Los datos se almacenan localmente en el navegador del usuario mediante localStorage.

## ✨ Características

- ✅ Registro de pacientes con información completa
- 📊 Visualización de registros en tabla dinámica
- 🔍 Cálculo automático de edad
- 💾 Almacenamiento local persistente
- 📱 Diseño responsive (móvil, tablet, desktop)
- 🎨 Interfaz moderna y amigable
- ✏️ Validación de formularios
- 🗑️ Eliminación individual o masiva de registros

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos y diseño responsive
- **JavaScript (Vanilla)**: Lógica de la aplicación y manipulación del DOM
- **LocalStorage API**: Persistencia de datos en el navegador

## 📁 Estructura del Proyecto

```
sistema-registros-medicos/
│
├── index.html          # Página principal
├── styles.css          # Estilos de la aplicación
├── app.js              # Lógica JavaScript
└── README.md           # Documentación
```

## 🚀 Instalación y Uso Local

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/sistema-registros-medicos.git
```

2. Navega al directorio del proyecto:
```bash
cd sistema-registros-medicos
```

3. Abre el archivo `index.html` en tu navegador web preferido.

¡Eso es todo! No se requieren dependencias adicionales ni servidor.

## 🌐 Despliegue en Netlify

### Opción 1: Desde GitHub (Recomendado)

1. **Sube tu código a GitHub**
   - Crea un nuevo repositorio en GitHub
   - Sube los archivos del proyecto

2. **Conecta con Netlify**
   - Inicia sesión en [Netlify](https://www.netlify.com)
   - Haz clic en "Add new site" > "Import an existing project"
   - Selecciona "Deploy with GitHub"
   - Autoriza a Netlify para acceder a tus repositorios
   - Selecciona el repositorio del proyecto

3. **Configura el despliegue**
   - Build command: (dejar vacío para sitio estático)
   - Publish directory: `/` (raíz del proyecto)
   - Haz clic en "Deploy site"

4. **Personaliza el dominio** (Opcional)
   - Ve a Site settings > Domain management
   - Haz clic en "Options" > "Edit site name"
   - Cambia el nombre a algo memorable

### Opción 2: Drag & Drop

1. Inicia sesión en Netlify
2. Arrastra la carpeta del proyecto a la zona de deploy
3. ¡Listo! Tu sitio está en línea

## 📝 Uso de la Aplicación

### Registrar un Paciente

1. Completa el formulario con los datos del paciente:
   - Nombre completo (requerido)
   - Cédula (requerido, solo números)
   - Fecha de nacimiento (requerida)
   - Tipo de sangre (requerido)
   - Alergias (opcional)
   - Observaciones (opcional)

2. Haz clic en "Registrar Paciente"

3. El paciente aparecerá automáticamente en la tabla de registros

### Consultar Registros

- Todos los pacientes registrados se muestran en la tabla
- La edad se calcula automáticamente
- Puedes ver toda la información de cada paciente

### Eliminar Registros

- **Individual**: Haz clic en el botón "Eliminar" junto a cada paciente
- **Masivo**: Usa el botón "Borrar Todos los Registros" (requiere confirmación doble)

## 🔒 Seguridad y Privacidad

⚠️ **IMPORTANTE**: Esta es una aplicación de demostración educativa. Los datos se almacenan localmente en el navegador del usuario y NO se envían a ningún servidor.

**Consideraciones**:
- Los datos persisten solo en el navegador donde se registraron
- Si se borra el caché del navegador, se pierden los datos
- No es adecuada para uso médico real sin implementar:
  - Base de datos en servidor
  - Autenticación de usuarios
  - Cifrado de datos sensibles
  - Cumplimiento con regulaciones (HIPAA, GDPR, etc.)

## 🎯 Próximas Mejoras

- [ ] Backend con base de datos
- [ ] Sistema de autenticación
- [ ] Exportación de datos a PDF
- [ ] Búsqueda y filtrado de pacientes
- [ ] Historial médico por paciente
- [ ] Gráficos y estadísticas

## 👨‍💻 Autor

**Camilo** - Estudiante de Desarrollo de Aplicaciones Web
- Universidad: UNIMINUTO
- Curso: Desarrollo de Aplicaciones Web

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 🙏 Agradecimientos

- UNIMINUTO por la formación en desarrollo web
- A los docentes del curso
- A la comunidad de desarrolladores web

---

Desarrollado con ❤️ para el aprendizaje de desarrollo web
