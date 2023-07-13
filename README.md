## La Camiseta No Se Mancha

Aplicación web destinada a la venta de camisetas de fútbol.

- LINK: https://lacamisetanosemancha-genaro08.vercel.app/

### Características

#### React y Next.js
Se utilizó React para el desarrollo y Next.js para la creación del template utilizado al comenzar el proyecto.

#### Comunicación con servidor
Toda la información mostrada en la aplicación web es traida desde el [servidor](https://garcia-sanchez-laravel-genaro08.vercel.app/). Luego, a través de la acción del usuario, otros datos son enviados al mismo.

#### Visualización de camisetas
Se pueden visualizar la totalidad de las camisetas a la venta, asi como también pueden filtrarse por liga y equipo.

#### Carrito
Se implementó un carrito de productos, en el cual se muestran las camisetas pedidas, así como su talle y precio. Además, permite eliminar camisetas específicas y vaciar totalmente el carrito.

#### Autenticación de usuarios
Los usuarios que deseen comprar camisetas deberán loguearse en la aplicación web. Además, podrán recuperar sus pedidos realizados.

Para la implementación del login/register validamos las credenciales del usuario con el servidor. Si éstas son válidas, el servidor provee un token que identifica la sesión activa del usuario. Luego, cuando éste realiza un pedido o recupera sus pedidos, se le debe proporcionar un token al servidor, que chequea que esté asociado al usuario. De esta forma, solo los usuarios autenticados pueden realizar dichas acciones. Además, permite que un mismo usuario pueda tener varias sesiones activas en diferentes dispositivos.

#### Uso de localStorage
Se utilizó localStorage para permitir que al recargar la página se mantenga la sesión del usuario y el carrito de productos.

#### Mercado Pago
Los usuarios pueden abonar los pagos de sus pedidos a través de Mercado Pago.
Para esto integramos [Checkout Bricks - Card Payment Brick](https://www.mercadopago.com.ar/developers/es/docs/checkout-bricks/card-payment-brick/introduction).

#### Administración de archivos
Las imágenes de las camisetas en venta son almacenadas en la base de datos del servidor.

Para realizarlo utilizamos el esquema de codificación Base64.

#### ChatGPT
Decidimos consumir la API de ChatGPT para mostrarles a los usuarios información sobre las ligas y equipos, a medida que van realizando los filtros sobre las camisetas.

#### Accesibilidad
La página web cumple con al menos estas guías de accesibilidad de la W3C:
- Colores con buen contraste
- Disposición y diseños claros
- Contenido comprensible
- Texto a voz

#### PWA
COMPLETAR
