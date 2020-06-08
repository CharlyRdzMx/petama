# petama
Proyecto ejemplo desarrollado con Nativescript + Angular (APP) y ExpressJs + MongoDB + Mongoose (API Backend) en IDe Visual Studio Code. 

La finalidad de este programa es la demostración del uso de frameworks como Nativescript y Angular como alternativas para el desarrollo de aplicaciones mobile, el uso de ExpressJs para el desarrollo de APIs y el uso de base de datos MongoDB para el almacenamiento de datos. 

El proyecto es una aplicación para administrar tareas, cuenta con las siguientes funciones:
- Alta de usuario.
- Creación y eliminación de tareas

# Requisitos previos

- NodeJs
- Nativescript CLi (instalación por medio de npm).
- MongoDB

# Descarga del programa.

El programa se compone de dos proyectos:

- PersonalTaskManager:
  Esta carpeta contiene el proyecto Nativescript + Angular para la parte del frontend el programa. Nativescript hace uso del marco de trabajo de Angular para facilitar el desarrollo de aplicaciones mobile, sin embargo, difiere en el uso de muchas librerías debido al tipo de ambiente final al que se está programando.
  
  El acceder por ejemplo, al localstorage difiere en una APP de IOS o Android o incluso el uso de window.location.href no aplica en este escenario. Por favor, dirígase a: https://docs.nativescript.org/angular/core-concepts/navigation para más información acerca de las librerías disponibles de Nativescript para Angular.
  
- PersonalTaskManagerAPI:
  Esta carpeta contiene el proyecto de la API desarrollada con ExpressJS para el backend del programa. ExpressJs es un framework en base a javascript para la creación de aplicaciones web y apis. Este mismo proyecto usa la base de datos MongoDB y para la persistencia entre el proyecto y la base de datos, se usa Mongoose ODM.
  
 
En ambos proyectos, no contendrán la carpeta "node_modules", para agregarlos, use la terminal ubicandose en la carpeta del proyecto y ejecute el comando npm install para iniciar la instalación de las librerías necesarias para el proyecto. Esto aplica tanto para el proyecto de Backend como el proyecto de Frontend.

# Pruebas del programa

Pruebas en el proyecto "PersonalTaskManager".

Puede hacer uso de los emuladores de IOS y Android. Para una instalación completa de Nativescript con emuladores IOs y/o Android, visite:
  http://docs.nativescript.org/angular/start/quick-setup
  
Otra alternativa, es la instalación de Genymotion, un emulador que incluye una versión de VirtualBox para emular Android. Para mas información, visite: https://www.genymotion.com/.
 
Como alternativa a los emuladores, use la app Nativescript Playground y Nativescript Preview en tu dispositivo móvil para visualizar el funcionamiento del programa, sin embargo, cuenta con las siguientes desventajas:
- No es posible depurar debido a que se carga la aplicación en tu dispositivo móvil.
- La API debe ser accesible desde el dispositivo móvil y no sólo desde la IDE. Se recomienda abrir los puertos que usa la API para ejecutarse y pueda ser accesible en una red privada.

Pruebas en el proyecto "PersonalTaskManagerAPI".

Para las pruebas de la api, se recomienda el uso del programa POSTMAN, del cual facilitará la depuración.


