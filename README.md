Aquí tienes el README corregido y mejor estructurado:  

---

# 📌 Acuaterra Frontend  

Este proyecto es una aplicación frontend desarrollada con **React**, **Vite** y **Tailwind CSS**.  
Está diseñado para gestionar módulos y usuarios en un sistema acuapónico, siguiendo las directrices de un diseño en Figma.  

## 🚀 Características  

### 📌 Páginas principales  
- **Welcome:** Página de bienvenida con el logo y una vista de la aplicación en un teléfono.  
- **Auth:** Página de autenticación (login).  
- **Home:** Página principal o de inicio.  
- **Users:** Gestión y listado de usuarios con funcionalidades de registro, actualización y eliminación.  
- **Module:** Gestión y listado de módulos con funcionalidades de registro, actualización y eliminación.  
- **UserRegister & ModuleRegister:** Formularios para registrar nuevos usuarios y módulos (según el diseño de Figma).  
- **Report:** Página para visualizar reportes (actualmente solo visual).  

### 🎨 Estilos  
Se utiliza **Tailwind CSS** con una paleta de colores personalizada y la fuente **Roboto**.  

### 🌍 Enrutamiento  
Se usa **@tanstack/react-router** para manejar las rutas de la aplicación, con configuración para rutas no encontradas.  

### 📦 Componentes UI reutilizables  
- **Toast:** Notificaciones de éxito para informar al usuario sobre acciones completadas.  
- **Spinner:** Indicador de carga durante operaciones asíncronas.  
- **Focus States:** Estilos de foco para mejorar la accesibilidad.  

---

## 📥 Instalación  

1️⃣ Clona el repositorio:  
```bash
git clone <URL_del_repositorio>
cd <nombre_del_proyecto>
```  

2️⃣ Instala las dependencias:  
```bash
pnpm install
```  

3️⃣ Ejecuta el servidor de desarrollo:  
```bash
pnpm run dev
```  
La aplicación se levantará en `http://localhost:3001` (o la URL configurada en `vite.config.ts`).  

---

## 🎨 Configuración de Tailwind  

El archivo `tailwind.config.js` se encuentra en la raíz del proyecto y está configurado para:  
✅ Incluir los archivos de la carpeta `src/` y `index.html` para generar las clases.  
✅ Extender la configuración con una paleta de colores personalizada y la fuente **Roboto**.  

---

## 📂 Estructura del Proyecto  

```
📂 public/        → Archivos estáticos (favicon, imágenes, etc.)
📂 src/
 ├── 📂 assets/images/       → Imágenes, logos, íconos y fotos.
 ├── 📂 common/              → Tipos, utilidades y configuración de i18next.
 ├── 📂 components/          → Componentes UI reutilizables (botones, inputs, modales, Toast, Spinner, etc.).
 ├── 📂 hooks/               → Hooks personalizados para consumir APIs y gestionar estado.
 ├── 📂 pages/               → Páginas de la aplicación (Welcome, Auth, Home, Users, Module, etc.).
 ├── 📂 routes/              → Configuración de las rutas de la aplicación.
 ├── 📂 services/            → Funciones para consumir la API (moduleService, userService).
 ├── 📝 index.html           → Entry point de la aplicación (incluye la fuente Roboto y el favicon).
```

---

## 🛠️ Uso  

1️⃣ Navega a la URL raíz para ver la página de inicio.  
2️⃣ Usa el **sidebar** para acceder a las distintas secciones de la aplicación.  
3️⃣ Los formularios de registro y edición están diseñados para mostrar la parte visual. La integración con el backend se realizará en fases posteriores.  

---

## 🤝 Contribución  

Si deseas colaborar:  
✅ Crea un **fork** del repositorio.  
✅ Realiza tus cambios.  
✅ Envía un **pull request**.  
Asegúrate de seguir las directrices de estilo y de mantener la funcionalidad existente intacta.  

---

## 📜 Licencia  

Este proyecto se distribuye bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.  

---

## 🔍 Conclusión  

- **Estados de Carga y Error:** Se usan Spinner e íconos para notificar al usuario.  
- **Íconos en Botones:** Se incluyen íconos (`PencilIcon`, `TrashIcon`, etc.) en los botones de editar y eliminar.  
- **Focus States:** Se aplican clases Tailwind como `focus:outline-none`, `focus:ring-2`, etc., directamente en los elementos.  
- **Toast en Users.tsx:** Se implementa un componente Toast para notificar el registro exitoso.  
- **Favicon:** Se configura en `index.html` para usar `logo.png`.  
- **Código Completo:** Se han proporcionado ejemplos completos para `Users.tsx` y otros componentes.  
