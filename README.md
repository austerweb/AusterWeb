# AusterWeb Landing Page

Landing page moderna para AusterWeb | Web Design con efectos visuales impresionantes, fondo negro y efectos violetas.

## 🚀 Características

- ✨ **Diseño moderno** con fondo negro y efectos violetas
- 🎭 **Animaciones avanzadas** y efectos visuales
- 📱 **Completamente responsive** para todos los dispositivos
- ⚡ **Optimizado para rendimiento** con nginx
- 🔄 **Hot reload** para desarrollo
- 🐳 **Dockerizado** para fácil deployment

## 🛠️ Tecnologías

- HTML5, CSS3, JavaScript vanilla
- Nginx como servidor web
- Docker & Docker Compose
- Font Awesome para iconos
- Google Fonts (Poppins)

## 🏃‍♂️ Inicio Rápido

### Prerequisitos

- Docker
- Docker Compose

### Instalación y Ejecución

1. **Clonar o descargar los archivos**
   ```bash
   # Si tienes git
   git clone <repository-url>
   cd AusterWeb
   ```

2. **Construir y ejecutar con Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Acceder a la aplicación**
   ```
   http://localhost:3000
   ```

### Comandos útiles

```bash
# Ejecutar en background
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar los contenedores
docker-compose down

# Reconstruir contenedores
docker-compose up --build --force-recreate

# Acceder al contenedor
docker exec -it austerweb-landing sh
```

## 🔄 Hot Reload

El hot reload está habilitado automáticamente en desarrollo. Cualquier cambio en los archivos HTML, CSS o JavaScript se reflejará inmediatamente en el navegador.

### Archivos monitoreados:
- `index.html`
- `styles.css`
- `script.js`

## 📁 Estructura del Proyecto

```
AusterWeb/
├── index.html              # Página principal
├── styles.css              # Estilos CSS con animaciones
├── script.js               # JavaScript para interactividad
├── Dockerfile              # Configuración de Docker
├── docker-compose.yml      # Orquestación de contenedores
├── nginx.conf              # Configuración de nginx
├── docker-entrypoint.sh    # Script de entrada con hot reload
├── .dockerignore           # Archivos a ignorar en Docker
└── README.md               # Este archivo
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en CSS usando variables de gradientes:
- Violeta primario: `#8b45c4`
- Violeta secundario: `#c45cff`
- Fondo: `#0a0a0a`

### Animaciones
Las animaciones están implementadas en `script.js` y incluyen:
- Efectos de partículas
- Parallax scrolling
- Hover effects 3D
- Animaciones de entrada
- Mouse follower

### Contenido
Para modificar el contenido, edita directamente `index.html`. Los cambios se reflejarán automáticamente con hot reload.

## 🚀 Deployment a Producción

### Docker (Recomendado)

1. **Construir imagen de producción**
   ```bash
   docker build -t austerweb-landing .
   ```

2. **Ejecutar contenedor**
   ```bash
   docker run -d -p 80:80 --name austerweb-prod austerweb-landing
   ```

### Servidor tradicional

1. **Copiar archivos**
   ```bash
   # Copiar archivos principales
   cp index.html styles.css script.js /var/www/html/
   
   # Configurar nginx
   cp nginx.conf /etc/nginx/sites-available/austerweb
   ln -s /etc/nginx/sites-available/austerweb /etc/nginx/sites-enabled/
   
   # Recargar nginx
   nginx -s reload
   ```

## 📞 Contacto

- **WhatsApp**: +54 297-537-5923
- **Email**: austerweb.design@gmail.com
- **Sitio web**: https://austerweb.com

## 📄 Licencia

© 2024 AusterWeb Design | Agustín Feijoo. Todos los derechos reservados.
