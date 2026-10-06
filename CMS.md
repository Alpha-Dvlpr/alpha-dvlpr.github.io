# Edición del contenido

El CV se edita desde Pages CMS; sus datos viven en `_data/cv.json` y las imágenes que subas se guardan en el repositorio.

1. Publica estos cambios en la rama `main` y comprueba que GitHub Pages está configurado para desplegar esa rama desde la raíz.
2. Abre [app.pagescms.org](https://app.pagescms.org/) e inicia sesión con GitHub.
3. Autoriza Pages CMS para acceder al repositorio `Alpha-Dvlpr/alpha-dvlpr.github.io`.
4. Edita la sección **CV**. Las fotos se cargan en `img/`.
5. Guarda desde Pages CMS. El panel escribe los cambios en GitHub y crea commits automáticamente; GitHub Pages vuelve a publicar el sitio.

Las rutas de imagen se guardan desde la raíz del sitio (por ejemplo, `/img/nueva-foto.jpg`), no con `../`. Jekyll las convierte con `relative_url`, así que funcionan también desde las páginas anidadas.

El sitio no necesita una base de datos ni un servidor propio. Pages CMS edita el contenido versionado en GitHub; solo las personas con permiso de escritura en el repositorio pueden guardarlo.