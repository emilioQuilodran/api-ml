# MercadoLibre API

Esta es una API REST construida con Node.js y Express que interactúa con la API de Mercado Libre, permitiendo realizar búsquedas de ítems y obtener detalles específicos de cada uno.

## Arquitectura MVCS

La aplicación está diseñada utilizando una **arquitectura MVCS** (Modelo, Vista, Controlador, Servicio), que organiza la lógica de la aplicación en componentes bien definidos:

- **Modelo**: En este caso, no hay un modelo explícito, ya que se trabaja directamente con las respuestas de la API de Mercado Libre.
- **Vista**: Aunque esta API no tiene una interfaz de usuario, las respuestas JSON devueltas pueden considerarse como la "vista" que consume el cliente.

- **Controlador**: Maneja las solicitudes HTTP y es responsable de recibir las entradas, interactuar con los servicios y devolver las respuestas adecuadas.

- **Servicio**: Encapsula la lógica de negocio y las interacciones con APIs externas, permitiendo que los controladores se mantengan enfocados en la gestión de las solicitudes y respuestas.

### Escalabilidad y el Mantenimiento

1. **Separación de Responsabilidades**: Cada componente tiene una responsabilidad clara, lo que facilita la comprensión del código y su mantenimiento. Esto permite que los desarrolladores trabajen en diferentes partes de la aplicación sin interferir entre sí.

2. **Facilidad para Agregar Nuevas Funcionalidades**: La arquitectura permite que nuevas rutas o servicios sean añadidos sin necesidad de reestructurar el código existente, lo que reduce el riesgo de introducir errores en funcionalidades ya implementadas.

3. **Mantenibilidad**: La organización clara del código facilita la identificación de problemas y la implementación de mejoras. Las pruebas unitarias pueden ser escritas para cada servicio de manera independiente, asegurando que cada parte del sistema funcione correctamente.

4. **Escalabilidad Horizontal**: Al encapsular la lógica en servicios, es posible escalar diferentes partes de la aplicación de forma independiente, lo que es especialmente útil en entornos de microservicios. Esto significa que si un servicio necesita más recursos, puede ser escalado sin afectar a los demás.

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd mercadolibre-api
   ```

# Ejecución

Para iniciar el servidor, ejecuta:
node src/index.js

# Endpoints

Buscar ítems: GET /api/items?q=tuConsulta
Obtener detalles de un ítem: GET /api/items/:id
