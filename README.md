# APP TODO + Tailwind 

# Ejecutar el proyecto
 Clonar el proyecto o descargarlo
    -Abrir la carpeta del proyecto en la terminal
    -Ejecutar el comando npm install or yarn install para instalar las dependencias
    -Ejecutar el comando npm run dev or yarn dev para ejecutar el proyecto

# Instalar y configurar Tailwind

## Referencias: https://tailwindcss.com/docs/guides/vite

1. Create your project
Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

```bash	
npm create vite@latest my-project -- --template react
cd my-project
```

2. Install Tailwind
Install Tailwind as a dev dependency:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

3. Initialize Tailwind
Generate your Tailwind config file and base CSS styles:

```bash
npx tailwindcss init -p
```

4. Configure Tailwind
Open your project’s tailwind.config.js file and update the purge option to include all of your components, screens, utilities, and any custom CSS files you might have:

```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

5. Add Tailwind to your CSS
Open your project’s src/index.css file and replace its contents with the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Ejecutar el proyecto
Ejecutar el comando npm run dev or yarn dev para ejecutar el proyecto


## Ordenar las clases de Tailwind automáticamente

### Referencias: https://github.com/tailwindlabs/prettier-plugin-tailwindcss

1. Instalar el plugin
```bash
npm install -D prettier prettier-plugin-tailwindcss
```

** Si usas pnpm o yarn, el plugin no se añadira como un plugin por lo que deberas de añadirlo manualmente en el archivo de configuración **
``` js
// prettier.config.js
plugins: [require('prettier-plugin-tailwindcss')],
```

## Extensiones de VSCode recomendadas

- Tailwind CSS IntelliSense
