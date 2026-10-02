FROM nginx:1.19
COPY index.html styles.css script.js /usr/share/nginx/html/
EXPOSE 80