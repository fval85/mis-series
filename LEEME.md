# Mis Series: guía rápida (v1.5)

App web instalable (PWA) para llevar el registro de tus series. Todo se guarda en tu teléfono. No usa Google Sheets ni ningún servidor.

## 1. Subirla a GitHub Pages
1. En github.com crea un repositorio nuevo, por ejemplo `mis-series`. Puede ser público.
2. Toca **Add file → Upload files** y sube **todos los archivos de esta carpeta**, menos este LEEME si no lo quieres. `index.html` debe quedar en la raíz.
3. Ve a **Settings → Pages**. En «Build and deployment» elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
4. En uno o dos minutos la app queda en `https://TU-USUARIO.github.io/mis-series/`

## 2. Instalarla en el teléfono
- **Android (Chrome):** abre el enlace → menú ⋮ → **Instalar app** o **Agregar a pantalla principal**.
- **iPhone (Safari):** abre el enlace → botón Compartir → **Agregar a inicio**.

Usa siempre la app instalada. En iPhone, Safari y la app instalada guardan datos por separado.

## 3. Clave de TMDB (sinopsis en español, temporadas nuevas y Descubrir)
1. Crea una cuenta gratis en themoviedb.org.
2. Ve a Ajustes → API y solicita una clave de uso personal.
3. En la app ve a **Ajustes**, pega la «Clave de la API» y toca **Guardar y probar**.

Sin clave la app funciona igual, pero usa TVmaze, que da las sinopsis en inglés, encuentra menos series con nombre en español, no avisa de temporadas nuevas y deja vacía la pestaña Descubrir.

## 4. Importar tu historial de Netflix
1. En netflix.com ve a Cuenta → Perfiles → tu perfil → **Actividad de visualización** → **Descargar todo**.
2. En la app ve a **Agregar → 📥 Importar historial**, elige el CSV, revisa la lista y toca **Importar**. (Desde la v1.4, Importar está dentro de Agregar.)
3. La app busca la foto y la sinopsis de cada serie. Con unas 400 series tarda unos minutos. Puedes pausar la búsqueda y retomarla después.
4. Las series marcadas con ⚠ quedan en el filtro **Por revisar**. Ábrelas y confirma o cambia la coincidencia.

Si vuelves a importar más adelante, la app actualiza los episodios y las fechas sin borrar tus notas ni tus calificaciones.

**Otras apps (v1.5):** en **Agregar → Importar → Otro archivo CSV** puedes subir el archivo que mandan Amazon, Max u otra app. La app adivina qué columna es el nombre y cuál la fecha, muestra cómo lo va a leer y te deja corregirlo antes de importar.

## 5. Seguir viendo y temporadas nuevas (v1.3)
- Arriba de **Mi lista** aparecen las series en **Viendo**. Toca **+1 ep** cada vez que veas un capítulo. Al llegar al último episodio, la serie pasa sola a **Terminada**.
- Con la clave de TMDB, la app revisa cada dos días las series en Viendo y Terminada. Si salió una temporada en los últimos 4 meses y no la has visto, el póster muestra **★ NUEVA T3** y aparece el filtro **★ Temporada nueva**.
- El aviso se quita solo al sumar un episodio. También se puede quitar desde la ficha de la serie con **Quitar aviso**.

## 6. Descubrir: K-dramas y estrenos (v1.4)
- La pestaña **Descubrir** muestra series disponibles en Costa Rica en tus apps (Netflix, Disney+, Prime Video, Max, Apple TV+ y Paramount+).
- Arriba eliges **🇰🇷 K-dramas** o **Todas las series**, la app y el orden: **Recién estrenadas** (estrenaron en el último año) o **Mejor valoradas** (nota de TMDB, de 1 a 10).
- Cada tarjeta trae la valoración, el año, la app y el inicio de la sinopsis. **＋ Quiero verla** la guarda en tu lista como **Pendiente**. Si ya la tienes, dice **✓ En tu lista**.
- Toca la tarjeta para ver la ficha completa: episodios, géneros, en qué app está y la sinopsis entera.
- Limitaciones: TMDB no dice cuándo llegó una serie a cada app, y algunas sinopsis solo existen en inglés (llevan la etiqueta **EN INGLÉS**).

## 7. Novedades de la v1.5
- **Tu año en series:** en **Ajustes → Tu 2026 en series** (y en diciembre y enero también con un aviso en Mi lista). Son pantallas que se pasan tocando: series y episodios del año, app favorita, mes más maratonero, K-dramas y top 5. La última crea una imagen para compartir.
  - Desde la v1.5 la app anota en qué mes viste cada episodio (con **+1 ep** y al importar). **En diciembre vuelve a importar el CSV de Netflix** para que el resumen tenga el año completo.
- **Pendientes con dónde verla:** con el filtro **Pendientes** cada serie dice en qué apps está en Costa Rica («▶ Ver en Netflix») o si no está en tus apps. Se puede ordenar con las disponibles primero.
- **Si te gustó esta…:** en las series con 4 o 5 estrellas aparecen recomendaciones de TMDB. El **+** las manda a Pendientes.
- **Títulos en coreano:** si TMDB no tiene el nombre en español de México, se usa el de España o el de inglés.

## 8. Respaldo (cambio de teléfono)
- **Ajustes → Descargar respaldo** guarda un archivo `.json` con tu lista, notas, calificaciones, la clave de TMDB y tus colores. No guarda el PIN.
- En el teléfono nuevo instala la app y ve a **Ajustes → Restaurar respaldo**.
- Haz un respaldo de vez en cuando. Si borras los datos del navegador o desinstalas la app, la lista se pierde.

## 9. Actualizar la app
1. Sube los archivos nuevos al repositorio, reemplazando los anteriores. Tus datos no se tocan porque viven en el teléfono.
2. **Importante:** cada versión trae un `sw.js` con un número distinto (por ejemplo `misseries-v1.5.0`). Ese cambio es lo que hace que en el teléfono aparezca el aviso **«✨ Hay una versión nueva · Actualizar»**. Si alguna vez cambias solo el `index.html` a mano, cambia también ese número en `sw.js`.
3. En el teléfono, la app busca actualizaciones al abrirla, al deslizar hacia abajo en **Mi lista** y con el botón **Ajustes → Buscar actualizaciones** (al pie, junto a la versión). Al tocar **Actualizar** se recarga y muestra las novedades.
