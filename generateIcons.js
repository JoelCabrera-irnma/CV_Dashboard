// generateIcons.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configura __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define la carpeta donde están los íconos
const iconsDir = path.join(__dirname, 'src/assets/skills');

// Define la ruta para guardar el archivo JSON generado
const outputFilePath = path.join(__dirname, 'src/iconList.json');

// Lee los archivos en la carpeta y filtra solo los de imágenes
const iconFiles = fs.readdirSync(iconsDir).filter(file =>
  /\.(png|jpe?g|svg)$/.test(file)
);

// Escribe los nombres de los archivos en un archivo JSON
fs.writeFileSync(outputFilePath, JSON.stringify(iconFiles, null, 2));
console.log('Archivo iconList.json generado con éxito.');
