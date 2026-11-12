# Lista de libros

TP del módulo 1 del curso "Desarrollo de páginas web con Angular".

Mi primera SPA es una lista de libros. Muestra un array de libros con `*ngFor`,
y se pueden agregar más desde un formulario usando variables de plantilla (`#`).

## Cómo correrlo

```bash
npm install
npm start
```

Abrir http://localhost:4200

## Dónde está cada cosa de la consigna

1. **Bootstrap instalado con npm** → `package.json` (`bootstrap` en dependencies)
2. **CSS de bootstrap en los estilos globales** → `src/styles.css` (`@import "bootstrap/dist/css/bootstrap.min.css"`)
3. **Componente con estilos de bootstrap** → `listado.component.html` (usa `list-group`, `form-control`, `btn`, `row`)
4. **Interpolación `{{ }}`** → `app.component.html` (`{{ nombre }}` y `{{ descripcion }}`)
5. **Componente contenedor con un array** → `listado.component.ts` (`libros`)
6. **UL con LI y ngFor** → `listado.component.html`
7. **@HostBinding** → `tarjeta.component.ts` (le pone `card` y `mb-3` al host)
8. **Formulario con variables de plantilla `#`** → `listado.component.html` (`#titulo`, `#autor`)
9. **Submit que llama a una funcion del componente** → `(submit)="agregar(titulo.value, autor.value)"`
10. **Funcion que agrega al array** → `listado.component.ts` (`agregar()` hace un `push`)

## Estructura

```
src/app/
  listado/    -> el componente con el array y el formulario
  tarjeta/    -> componente de tarjeta que usa @HostBinding
```
