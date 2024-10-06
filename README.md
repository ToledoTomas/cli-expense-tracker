# Cli Expense Tracker
## Descripción
_Este es un proyecto de Cli para gestionar gastos personales, construido con Node.js, Commander.js y MongoDB. A través de este CLI, puedes añadir, listar, buscar, eliminar y resumir tus gastos._
## Requisitos
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) (instalado y corriendo localmente)
- Conexión a la base de datos MongoDB corriendo en `localhost:27017`
## Instalación
1. Clona el repositorio:
```bash
git clone https://github.com/ToledoTomas/cli-expense-tracker
```
2. Ve a la carpeta del proyecto: 
```bash
cd practica-expense-tracker
```
3. Instala las dependencias:
```bash
npm install
```
4. Enlaza el proyecto como un paquete global (para usar el comando expense-tracker desde cualquier lugar):
```bash
npm link
```
Para deshacer este enlace simbólico puedes ejecutar ``npm unlink`` en cualquier momento.

## Uso del Cli
_El comando principal para ejecutar la CLI es "expense-tracker". A continuación, se describen las funcionalidades disponibles y ejemplos de uso._

#### Añadir un gasto:

Este comando te permite agregar un nuevo gasto a la base de datos. Se te pedirá que ingreses el título, descripción y monto del gasto.

Comando:
```bash
expense-tracker add
```
Ejemplo de interacción:
```bash
$ expense-tracker add

? Expense title: Comida
? Expense description: Almuerzo en restaurante
? Expense amount: 250

Expense added successfully
```
#### Listar todos los gastos: 

Muestra todos los gastos registrados en la base de datos.

Comando:
```bash
expense-tracker list
```
Ejemplo de interacción
```bash
$ expense-tracker list

{
id: '66fb35b96c6d063fd6bebc7c',
title: 'Almuerzo',
description: 'Milanesa con puré',
amount: '$30',
date: '2024-09-30' 
},
{
id: '66fb37046e9c61b73649da60',
title: 'Gimnasio',
description: 'Cuota mensual',
amount: '$150',
date: '2024-09-30' 
}
```

#### Resumir gastos

Genera un resumen de los gastos, mostrando el total de la cantidad gastada.

Comando: 

```bash
expense-tracker summary
```
Ejemplo de interacción:
```bash
$ expense-tracker summary 

total: $45
```

4. Buscar un gasto: 

Puedes buscar un gasto por texto relacionado con el título o la descripción.

Comando: 

```bash
expense-tracker find <text>
```
Ejemplo de interacción: 
```bash
$ expense-tracker find Almuerzo

{
id: '66fb35b96c6d063fd6bebc7c',
title: 'Almuerzo',
description: 'Milanesa con puré',
amount: '$30',
date: '2024-09-30' 
}
```

5. Elminar un gasto.

Elimina un gasto específico mediante su ID

Comando:

```bash
expense-tracker delete <id>
```
Ejemplo de interacción: 
```bash
$ expense-tracker delete 66fb35b96c6d063fd6bebc7c

Expense deleted successfully
```