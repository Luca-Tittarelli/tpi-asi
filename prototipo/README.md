# Prototipo ASI - Gestión de Retiros (Grupo 14)

Prototipo de interfaz de usuario interactivo para los Casos de Uso:
1. **Registrar un nuevo retiro** (CU 1)
2. **Registrar actividades de un retiro** (CU 2)
3. **Consulta de todos los datos de un retiro** (CU 3)

---

## 🚀 Cómo Iniciar el Prototipo

Solo debes ejecutar en la terminal de este proyecto:

```bash
npm run dev
```

El servidor abrirá automáticamente el prototipo en tu navegador en:
`http://localhost:5173/`

---

## 📱 Características del Prototipo
- **Vista Mobile Unitaria:** Se visualiza una sola pantalla a la vez, centrada en formato de dispositivo móvil (~390px - 420px).
- **100% Interfaz Frontend:** Sin backend ni configuraciones complejas.
- **Navegación Intuitiva:** 
  - Barra inferior para alternar entre **Detalle del Retiro** y **Registrar Retiro**.
  - En la vista de Detalle, el botón **+ Nueva Actividad** abre el modal/bottom sheet para registrar actividades.
  - En el formulario de registro, puedes asociar actividades preexistentes, pulsar **+ Registrar Nueva Actividad**, agregar acompañantes con el modal correspondiente o marcar **Sin acompañante**.
