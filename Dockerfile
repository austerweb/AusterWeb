# Usar Node.js Alpine como imagen base
FROM node:18-alpine

# Instalar http-server globalmente
RUN npm install -g http-server

# Crear directorio para la aplicación
WORKDIR /app

# Copiar archivos de la aplicación
COPY index.html .
COPY sistema-notarial.html .
COPY gestor-departamentos.html .
COPY agenda-odontologica.html .
COPY gv-austral.html .
COPY 679inn.html .
COPY nutrainer.html .
COPY proyectar-ideas.html .
COPY cemsa.html .
COPY favicon.svg .
COPY favicon-simple.svg .
COPY styles.css .
COPY trabajos.css .
COPY script.js .
COPY portfolio.js .
COPY LogosProyectos/ ./LogosProyectos/
COPY "LogosProyectos/Sistema-Notarial/" "./LogosProyectos/Sistema-Notarial/"
COPY "LogosProyectos/Gestor-de-Reservas/" "./LogosProyectos/Gestor-de-Reservas/"
COPY "LogosProyectos/Agenda-Odontologica/" "./LogosProyectos/Agenda-Odontologica/"

# Exponer puerto 3000
EXPOSE 3000

# Iniciar http-server
CMD ["http-server", "-p", "3000", "-c-1", "--cors"]
