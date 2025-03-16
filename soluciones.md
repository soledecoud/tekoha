# Como solucionar el problema de conexion a tekoha_backend
# Comandos:
- docker network inspect tekoha_backend // Verifica la conexion
# Soluciones:
- docker network connect tekoha_backend odoo-db
- docker network connect tekoha_backend fastapi
- docker network connect tekoha_backend nextjs
- docker network connect tekoha_backend nginx

# Inicializar el git
- git init
- git remote add origin https://github.com/tu-usuario/tekoha.git
- git add .
- git commit -m "Primer commit"
- git push -u origin master

# Actualizar el git
- git add .
- git commit -m "...."
- git push
