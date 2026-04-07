export interface ManualCatalogOverride {
  folderKey: string;
  categoria?: string;
  nombre?: string;
  precio?: number;
  precioViejo?: number;
  descripcion?: string;
  detalle?: string;
}

const manualCatalogOverrides: ManualCatalogOverride[] = [
  {
    folderKey: "_Tecnologia/Audifonos/AKG Cable Tipo C",
    categoria: "Tecnologia",
    nombre: "Audifonos Originales In Ear AKG Cable Tipo C Samsung",
    precio: 20,
    precioViejo: 35.0,
    descripcion:
      "Descubre Audifonos Akg Cable Tipo C Samsungdentro de la categoría Tecnologia.",
    detalle: "",
  },
  {
    folderKey: "_Tecnologia/Audifonos/DeWalt Banda de Cuello",
    categoria: "Tecnologia",
    nombre: "Audifono Dewalt Banda De Cuello - Deportivo - Reesistente  9.5/10",
    precio: 180,
    precioViejo: 220,
    descripcion: `🔊 AUDÍFONOS DEWALT JOBSITE PRO 🔥

💪 Diseñados para trabajo duro, deporte y uso diario

━━━━━━━━━━━━━━━━━━━

🔋 Batería
☑️ Hasta 15 - 30 horas de uso
☑️ Ideal para todo el día sin cargar

━━━━━━━━━━━━━━━━━━━     

💦 Resistencia
☑️ Certificación IPX6 (resistente a sudor y lluvia)
☑️ Perfectos para gym, obra o exteriores

━━━━━━━━━━━━━━━━━━━

📡 Conectividad
☑️ Bluetooth 5.0
☑️ Conexión rápida y estable

━━━━━━━━━━━━━━━━━━━

🎧 Comodidad
☑️ Diseño de cuello (neckband)
☑️ No se caen fácilmente
☑️ Ajuste cómodo

━━━━━━━━━━━━━━━━━━━

🎤 Funciones
☑️ Micrófono integrado
☑️ Controles físicos

━━━━━━━━━━━━━━━━━━━

🧲 Extras
☑️ Audífonos magnéticos
☑️ Carga USB-C

━━━━━━━━━━━━━━━━━━━

⚠️ DETALLE:`,
    detalle: "Se entrega aolo los audifonos.",
  },
  {
    folderKey: "_Tecnologia/Audifonos/Sony WF-1000XM4",
    categoria: "Tecnologia",
    nombre: "Audifono Sony Wf 1000xm4",
    precio: 25,
    precioViejo: 194.7,
    descripcion: "Solo funciona uno de los auriculares.",
    detalle: "Solo funciona uno de los auriculares.",
  },
  {
    folderKey: "_Accesorios/Billeteras/Billetera Azul Pull & Bear",
    categoria: "Accesorios",
    nombre: "Billetera Pull & Bear Azul",
    precio: 8.0,
    precioViejo: 25.0,
    descripcion:
      "Descubre Billetera Pull & Bear Azul dentro de la categoría Accesorios.",
    detalle: "Desgastado en el interior como se ve en las fotos",
  },
  {
    folderKey: "_Accesorios/Billeteras/Billetera Blanco y Negro FLY",
    categoria: "Accesorios",
    nombre: "Billetera Fly Blanco Y Negro",
    precio: 8.0,
    precioViejo: 15.0,
    descripcion:
      "Descubre Billetera Blanco Y Negro Fly dentro de la categoría Accesorios.",
    detalle: "",
  },
  {
    folderKey: "_Accesorios/Billeteras/Billetera Marron Rally",
    categoria: "Accesorios",
    nombre: "Billetera Rally Marron",
    precio: 10,
    precioViejo: 28,
    descripcion:
      "Descubre Billetera Rally Marron dentro de la categoría Accesorios.",
    detalle: "No cuenta con el cierre interior.",
  },
  {
    folderKey: "_Tecnologia/Brazaletes Led/Modelo 1",
    categoria: "Tecnologia",
    nombre: "Brazaletes Led Modelo 1",
    precio: 25,
    precioViejo: 35,
    descripcion:
      "Descubre Brazaletes Led Modelo 1 dentro de la categoría Tecnologia.",
    detalle: "",
  },
  {
    folderKey: "_Tecnologia/Brazaletes Led/Modelo 2",
    categoria: "Tecnologia",
    nombre: "Brazaletes Led Modelo 2",
    precio: 25,
    precioViejo: 35,
    descripcion:
      "Descubre Brazaletes Led Modelo 2 dentro de la categoría Tecnologia.",
    detalle: "",
  },
  {// TODO - Ver todos los cables Apple y contrastar con los de las fotos || PopSocket || Lentes Plegables
    folderKey: "_Tecnologia/Cables/Apple",
    categoria: "Tecnologia",
    nombre: "Cable Apple",
    precio: 121,
    precioViejo: 142.78,
    descripcion: "Descubre Cable Apple dentro de la categoría Tecnologia.",
    detalle: "",
  },
  {
    folderKey: "_Tecnologia/Cables/HDMI",
    categoria: "Tecnologia",
    nombre: "Cable Hdmi",
    precio: 22,
    precioViejo: 35,
    descripcion: "Descubre Cable Hdmi dentro de la categoría Tecnologia.",
    detalle: "",
  },
  {
    folderKey: "_Tecnologia/Cargadores/Samsung",
    categoria: "Tecnologia",
    nombre: "Cargador Samsung",
    precio: 25,
    descripcion:
      "Descubre Cargador Samsung dentro de la categoría Tecnologia.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Casacas/Adidas Azul",
    categoria: "Ropa",
    nombre: "Casaca Adidas Azul",
    precio: 15,
    precioViejo: 45,
    descripcion: "Descubre Casaca Adidas Azul dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Casacas/Adidas Blanco",
    categoria: "Ropa",
    nombre: "Casaca Adidas Blanco",
    precio: 10,
    precioViejo: 59,
    descripcion: "Descubre Casaca Adidas Blanco dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Deportes/Cascos/Giro",
    categoria: "Deportes",
    nombre: "Casco Giro Tor Mips Ski, Snowboard, Ciclismo, Skateboard",
    precio: 499.9,
    precioViejo: 604,
    descripcion: "Descubre Casco Giro dentro de la categoría Deportes.",
    detalle: "Solo detalles esteticos, no afecta su funcionalidad.",
  },
  {
    folderKey: "_Accesorios/Correas/Par Genericas Bicolor",
    categoria: "Accesorios",
    nombre: "Correa Par Genericas Bicolor",
    precio: 9.0,
    precioViejo: 18.0,
    descripcion:
      "Descubre Par de Correas Genéricas Bicolor dentro de la categoría Accesorios.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Cuellera/Blackstar",
    categoria: "Ropa",
    nombre:
      "Cuello Térmico BlackStrap - Balaclava / Neck Gaiter para Snowboard y Ski",
    precio: 89,
    precioViejo: 115,
    descripcion: `❄️ BLACKSTRAP NECK GAITER - PROTECCIÓN PROFESIONAL
Mantente protegido en la montaña con este cuello térmico de alto rendimiento. Diseñado para ofrecer calor sin sacrificar la respirabilidad.

━━━━━━━━━━━━━━━━━━━

⛷️ TECNOLOGÍA Y RENDIMIENTO
☑️ Tejido de Doble Capa: Cuenta con un forro interior microperforado (foto 3) que gestiona la humedad y te mantiene seco.
☑️ Protección 360°: Cubre cuello, cara y orejas del viento gélido y las quemaduras solares (protección UPF 50+).
☑️ Respirable: Su diseño permite respirar cómodamente a través de la tela sin empañar tus antiparras.

━━━━━━━━━━━━━━━━━━━

💪 DURABILIDAD Y AJUSTE
☑️ Elasticidad 4-Way Stretch: Se ajusta perfectamente a cualquier tamaño de cabeza y recupera su forma original siempre.
☑️ Compatible con Casco: Su perfil delgado permite usarlo cómodamente debajo del casco.
☑️ Resistente a la Nieve: Tela de secado rápido que no se apelmaza con la humedad.

━━━━━━━━━━━━━━━━━━━`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Cuellera/Coal",
    categoria: "Ropa",
    nombre:
      "Cuello Tejido Coal Headwear - Térmico / Urbano (Snowboard & Style)",
    precio: 35,
    precioViejo: 95,
    descripcion: `🧤 CUELLO TEJIDO COAL - CALIDEZ Y ESTILO
Complemento perfecto para protegerte del frío con un diseño clásico y elegante. La marca Coal es garantía de durabilidad y tejidos de alta calidad.

━━━━━━━━━━━━━━━━━━━

❄️ PROTECCIÓN TÉRMICA
☑️ Tejido de Punto Grueso: Retiene el calor corporal de manera eficiente.
☑️ Textura Suave: No pica y es muy cómodo para usar todo el día.
☑️ Diseño Versátil: Ideal tanto para la montaña como para un look urbano en la ciudad.

━━━━━━━━━━━━━━━━━━━

💪 DETALLES DE CALIDAD
☑️ Marca Original: Cuenta con la etiqueta interna de la marca Coal.
☑️ Elasticidad: Se ajusta cómodamente al cuello sin apretar demasiado, manteniendo siempre su forma.
☑️ Color: Negro sólido, fácil de combinar con cualquier chaqueta o prenda.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Cuellera/Generica",
    categoria: "Ropa",
    nombre: "Cuellera Generica",
    precio: 19,
    precioViejo: 29,
    descripcion: "Descubre Cuellera Generica dentro de la categoría Ropa.",
    detalle: "Sufre desgaste (foto 1)",
  },
  {
    folderKey: "_Ropa/Cuellera/TurtleFur_1",
    categoria: "Ropa",
    nombre: "Cuellera Turtle Fur talla S - Térmica / Ultra Suave",
    precio: 45,
    precioViejo: 86,
    descripcion: `❄️ CUELLERA TURTLE FUR - MÁXIMO CONFORT La cuellera de la marca líder Turtle Fur, famosa por ofrecer el fleece más suave y cálido del mercado. Ideal para cubrir cabeza, cara y cuello en climas de frío extremo.

━━━━━━━━━━━━━━━━━━━

⛷️ CALIDEZ SUPERIOR

Tejido Original Turtle Fur: Textura tipo "peluche" de pelo largo que atrapa el calor de forma excepcional.

Ultra Suave: No pica ni irrita la piel, siendo extremadamente agradable al contacto.

Protección Integral: Diseño completo que protege cabeza, orejas y cuello en una sola pieza.

━━━━━━━━━━━━━━━━━━━

💪 DISEÑO Y AJUSTE

Talla S: Ajuste ideal para niños grandes, adolescentes o adultos de contextura pequeña.

Ligera y Respirable: Mantiene el calor pero permite que la piel respire durante la actividad física.

Duradera: Material de alta calidad que mantiene su suavidad original tras los lavados.

━━━━━━━━━━━━━━━━━━━

✅ ESTADO:

Marca: Turtle Fur (Original con etiqueta de tortuga).

Condición: Excelente estado, tejido esponjoso y muy bien conservado.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Cuellera/TurtleFur_2",
    categoria: "Ropa",
    nombre:
      "Cuellera Turtle Fur - Adulto - Térmica y Ecológica (100% Reciclado)",
    precio: 380,
    precioViejo: 448.4,
    descripcion: `⛷️ TECNOLOGÍA TÉRMICA


Original Turtle Fur Fleece: Tejido de pelo corto ultra denso que bloquea el viento y retiene el calor corporal de manera eficiente. 

Sostenibilidad: Fabricada con 100% Poliéster Reciclado, manteniendo la misma suavidad premium de la marca.

Transpirable: Ideal para actividades intensas en la nieve o climas fríos, ya que gestiona muy bien la humedad.

━━━━━━━━━━━━━━━━━━━

💪 DISEÑO Y AJUSTE

Talla Adulto: Medida estándar que ofrece una cobertura amplia y cómoda.

Versatilidad: Se puede usar como calentador de cuello, media máscara o incluso como banda para la cabeza.

Cuidado Sencillo: Material resistente que permite lavado frecuente sin perder su textura original.

━━━━━━━━━━━━━━━━━━━

✅ ESTADO:


Marca: Turtle Fur (Original con logo bordado). 


Condición: Excelente estado, color negro intenso y tejido muy bien conservado.`,
    detalle: "",
  },
  {
    folderKey: "_Accesorios/Encendedores/Pistola",
    categoria: "Accesorios",
    nombre: "Encendedor Pistola",
    precio: 10.0,
    precioViejo: 25.0,
    descripcion:
      "Descubre Encendedore Pistola dentro de la categoría Accesorios.",
    detalle: "No viene con gas",
  },
  {
    folderKey: "_Objetos_Varios/Focos/Termico de Ceramica",
    categoria: "Objetos Varios",
    nombre:
      "Foco Lámpara de Calor Cerámica Fuxin 100W - Para Terrarios y Crianza",
    precio: 328,
    precioViejo: 387.04,
    descripcion: `🐢 EMISOR TÉRMICO DE CERÁMICA PROFESIONAL
La solución ideal para mantener la temperatura perfecta en hábitats de reptiles o áreas de crianza sin alterar los ciclos de luz naturales de tus animales.

━━━━━━━━━━━━━━━━━━━

🔥 RENDIMIENTO TÉRMICO

Calor Infrarrojo: Genera una fuente de calor constante y eficiente que penetra en los tejidos de los animales, mejorando su metabolismo.

Sin Emisión de Luz: Al no emitir luz, es perfecta para uso nocturno o 24/7, permitiendo que tus mascotas descansen sin interrupciones en su fotoperiodo.

Potencia Real: 100W de potencia para un calentamiento rápido y efectivo.

━━━━━━━━━━━━━━━━━━━

🛠️ ESPECIFICACIONES TÉCNICAS

Marca: Fuxin.

Potencia: 100W.

Voltaje: 220V - 230V (compatible con corriente estándar en Perú).

Socket: Rosca estándar E27 (la común de casa).

Material: Cerámica sólida de alta resistencia térmica.

━━━━━━━━━━━━━━━━━━━

🐾 USOS RECOMENDADOS

Reptiles: Tortugas, iguanas, dragones barbudos, serpientes y geckos.

Crianza: Ideal para nacedoras de pollitos, aves o cachorros que necesiten calor constante.

Anfibios e Invertebrados: Terrarios que requieran control climático preciso.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Gorros/Gorro_ContraSol",
    categoria: "Ropa",
    nombre: "Gorro Legionario con Protección Solar UPF 50+ (Desmontable)",
    precio: 25,
    precioViejo: 45,
    descripcion: `☀️ GORRO TÉCNICO DE MÁXIMA PROTECCIÓN
El accesorio definitivo para quienes pasan largas horas bajo el sol. Diseñado para ofrecer una cobertura completa de 360° en cabeza, rostro y cuello.

━━━━━━━━━━━━━━━━━━━

🛡️ PROTECCIÓN SOLAR AVANZADA

Certificación UPF 50+: Bloquea los rayos UV dañinos, protegiendo la piel de quemaduras solares.

Cobertura Total: Incluye una solapa trasera para el cuello y una máscara frontal para el rostro (protegiendo nariz y boca).

━━━━━━━━━━━━━━━━━━━

⚙️ DISEÑO MODULAR Y VERSÁTIL

Piezas Desmontables: Gracias a su sistema de broches a presión, puedes usarlo como un gorro común o añadir las protecciones según la intensidad del sol.

Máscara Respirable: La pieza frontal cuenta con una zona de malla (mesh) que facilita la respiración y evita que se empañen tus lentes.

━━━━━━━━━━━━━━━━━━━

💪 MATERIAL Y COMODIDAD

Secado Rápido: Fabricado en tela ligera de nylon/poliéster que expulsa la humedad rápidamente.

Ajuste Perfecto: Correa regulable en la parte trasera para adaptarse a diferentes tamaños de cabeza.

Compacto: Se puede doblar y guardar fácilmente en cualquier mochila sin perder su forma.

━━━━━━━━━━━━━━━━━━━`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Gorros/Nyon",
    categoria: "Ropa",
    nombre: 'Gorro Beanie NYON x New York Yankees - Original "Smiley" Béisbol',
    precio: 90,
    precioViejo: 120,
    descripcion: `🌟 EXCLUSIVO Y ORIGINAL *Traído de EE. UU.*

Parche Frontal: Diseño "Smiley" con estética de béisbol y las iniciales NY bordadas.

Etiqueta Trasera: Cuenta con el parche clásico de los Yankees y el lema "New York or Nowhere".

Color: Azul marino (Navy) oficial de los Yankees.

━━━━━━━━━━━━━━━━━━━

💪 Producto Original: Incluye la etiqueta interna de autenticidad de la marca NYON.

Tejido de Punto: Material suave y elástico que garantiza comodidad y durabilidad.

Corte Moderno: Estilo Beanie con doblez ajustable para un calce perfecto.

━━━━━━━━━━━━━━━━━━━`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Gorros/Yumo_Wait",
    categoria: "Ropa",
    nombre: "Gorro Beanie Yumo Wait Original - Con Lana (Traído de EE. UU.)",
    precio: 59,
    precioViejo: 85,
    descripcion: `🌟 CALIDAD Y MATERIALES PREMIUM

Composición de Lujo: Contiene un 9% de lana, lo que garantiza una retención de calor mucho mayor que los gorros 100% sintéticos.

Mezcla Inteligente: Fabricado con acrílico (80%), nylon (10%) y un toque de spandex (1%) para que mantenga su forma y no se estire con el uso.

Textura Suave: Punto grueso y esponjoso que se siente muy cómodo y no pica.

━━━━━━━━━━━━━━━━━━━

⚙️ DISEÑO Y AJUSTE

Producto Original: Traído directamente de Estados Unidos, fabricado bajo los estándares de calidad de Yumo Wait.

Talla Única (One Size): Elástico y versátil, se adapta perfectamente a cualquier tamaño de cabeza.

Estilo Atemporal: Color gris oscuro/carbono, ideal para combinar con cualquier outfit de invierno.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Guantes/Burton",
    categoria: "Ropa",
    nombre: "Guantes Mitones Burton Gore-Tex - Originales (Traídos de EE. UU.)",
    precio: 249,
    precioViejo: 307,
    descripcion: `❄️ MITONES BURTON GORE-TEX - MÁXIMA PROTECCIÓN TÉRMICA
Los mitones definitivos para snowboard o ski. Burton combina su diseño ergonómico con la tecnología Gore-Tex para garantizar manos secas y calientes durante todo el día en la montaña.

━━━━━━━━━━━━━━━━━━━

🛡️ TECNOLOGÍA DE ÉLITE

Membrana GORE-TEX®: Garantía "Guaranteed to Keep You Dry". Impermeabilidad total y máxima transpirabilidad.

Gore plus warm: Tecnología adicional optimizada para mantener el calor por mucho más tiempo incluso en climas bajo cero.


Palma Screen Grab®: Material sintético de alta calidad que permite usar tu celular sin quitarte los guantes.

━━━━━━━━━━━━━━━━━━━

⚙️ CARACTERÍSTICAS TÉCNICAS


Bolsillo para Calentador: Cierre superior (Vent/Heat Pocket) que sirve para ventilar o para insertar parches de calor químico.


Limpiador de Antiparras: Panel de gamuza en el pulgar para limpiar la nieve de tus lentes sin rayarlos.


Ajuste Seguro: Correas de muñeca y cordones elásticos en los puños para evitar que entre nieve.

Clips de Sujeción: Incluye gancho para mantener el par unido cuando no los usas.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Guantes/Carhartt",
    categoria: "Ropa",
    nombre: "Guantes Carhartt Originales - Talla L",
    precio: 95,
    precioViejo: 165,
    descripcion: `¡Disponible este par de guantes técnicos Carhartt! Son el modelo A511, reconocidos por su alta resistencia al frío y durabilidad. Son ORIGINALES, traídos de EE. UU., ideales para quienes buscan protección real en climas exigentes o trabajos exteriores.

CARACTERÍSTICAS TÉCNICAS:
✅ Marca: Carhartt (Garantía de calidad americana).
✅ Modelo: A511 / Color Negro (BLK).
✅ Talla: L (Large).
✅ Material: Exterior de nylon de alta densidad con palma reforzada para mejor agarre.
✅ Aislamiento: Interior forrado en microfibra polar (fleece) que mantiene el calor eficientemente.
✅ Ajustes: Correa de seguridad en muñeca con hebilla y puños elásticos. Incluye clip de unión para que no se pierdan.

DETALLE:
🔎 El guante derecho presenta un pequeño roce en la punta del dedo índice (ver última foto). Es un detalle mínimo que no afecta el uso general ni la calidez del guante. Por lo demás, tanto los elásticos como los broches están operativos al 100%.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Guantes/Dakine__FALTA-GUANTES-BLANCOS",
    categoria: "Ropa",
    nombre: "Guantes Dakine Falta Guantes Blancos",
    precio: 129,
    precioViejo: 152.22,
    descripcion:
      "Descubre Guante Dakine Falta Guantes Blancos dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Guantes/Nike",
    categoria: "Ropa",
    nombre: "GUANTES NIKE TOUCHSCREEN - ORIGINALES (Traídos de EE. UU.)",
    precio: 65,
    precioViejo: 95,
    descripcion: `DESCRIPCIÓN GENERAL:
Guantes Nike originales importados de EE. UU. Combinan un estilo deportivo con la protección necesaria para el día a día. Son ligeros, elásticos y mantienen el calor sin quitarte movilidad.

LO MEJOR:
📱 Full Touch: No necesitas quitártelos para usar el celular; la pantalla reconoce los toques al instante.
🧤 Agarre Seguro: Palma con diseño de silicona para que el teléfono no se resbale.
❄️ Protección Versátil: Tejido de punto de alta densidad que ofrece un abrigo eficaz y cómodo para diversas condiciones climáticas.

DETALLES TÉCNICOS:
✅ Marca: Nike (Swoosh bordado).
✅ Talla: L/XL (Ajuste elástico perfecto).
✅ Estado: Muy bien conservados, elásticos firmes y tecnología táctil 100% operativa.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Guantes/NorthFace",
    categoria: "Ropa",
    nombre: "GUANTES THE NORTH FACE - DRYVENT ORIGINALES (Traídos de EE. UU.)",
    precio: 199,
    precioViejo: 245,
    descripcion: `DESCRIPCIÓN GENERAL:
Guantes técnicos de alta montaña The North Face, ideales para nieve (ski/snowboard) o inviernos extremos. Gracias a su tecnología DryVent, son totalmente impermeables y transpirables, manteniendo tus manos secas y calientes incluso en las condiciones más duras. Originales, traídos de EE. UU.

PUNTOS CLAVE:
❄️ Máxima Protección: Membrana DryVent que bloquea el agua y el viento por completo.
🧤 Diseño Funcional: Palma reforzada de alta durabilidad para un agarre firme y seguro.
🔒 Ajuste Perfecto: Sistema de doble ajuste con correa en la muñeca y cordón elástico (tanka roja) en el puño para sellar la entrada de nieve.
🔗 Extras: Incluyen correas de seguridad para la muñeca (leash) para que no se caigan al quitártelos y clip de unión.

DETALLES TÉCNICOS:
✅ Marca: The North Face (Original).
✅ Talla: M (Hombre) / L (Mujer).
✅ Estado: Impecables. Sin detalles, listos para usar en la montaña o ciudad.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Guantes/Outback",
    categoria: "Ropa",
    nombre: "GUANTES TÉRMICOS OUTBACK - ORIGINALES (Traídos de EE. UU.)",
    precio: 157,
    precioViejo: 185.26,
    descripcion: `Guantes de alta protección térmica marca Outback, diseñados para enfrentar climas de frío riguroso. Son robustos, resistentes y están construidos para durar. Originales, traídos de EE. UU.

LO MEJOR DE ESTE MODELO:
🔥 Máximo Abrigo: Interior forrado completamente en fleece (polar) grueso que mantiene la temperatura de las manos al instante.
🛡️ Construcción Resistente: Exterior de poliéster de alta densidad con palmas reforzadas para un mejor agarre y resistencia al desgaste.
🔒 Ajuste Doble: Cuenta con muñeca elástica y una correa de velcro ajustable para bloquear la entrada de aire frío o nieve.
🔗 Prácticos: Incluyen clip de seguridad para mantenerlos juntos y evitar que se pierdan.

DETALLES TÉCNICOS:
✅ Marca: Outback (K-Outback Cuff Glove).
✅ Material: 100% Poliéster con inserto aislante.
✅ Estado: Muy bien conservados. El forro interno está limpio y las costuras están perfectas.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Guantes/RBX",
    categoria: "Ropa",
    nombre: "GUANTES DEPORTIVOS RBX - ORIGINALES",
    precio: 45,
    precioViejo: 65,
    descripcion: `Guantes RBX originales, importados de EE. UU. Son ligeros, elásticos y con un ajuste anatómico que se siente como una segunda piel. Ideales para running, ciclismo, gimnasio o simplemente para mantener las manos protegidas con total movilidad.

LO MEJOR:
✅ Grip Antideslizante: Toda la palma tiene un patrón de silicona de alto agarre (foto #5), perfecto para sostener el celular, el timón de la bici o pesas sin que se deslicen.
✅ Tecnología Touch: Compatibles con pantallas táctiles para que no tengas que quitártelos al usar el móvil.
✅ Comodidad Total: Tejido transpirable que evita el exceso de sudoración y broche de seguridad para mantener el par siempre unido.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Guantes/Yacht&Smith",
    categoria: "Ropa",
    nombre: "Guantes Yacht&smith",
    precio: 216,
    precioViejo: 254.88,
    descripcion: "Descubre Guante Yacht&smith dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Masks/Seirus",
    categoria: "Ropa",
    nombre:
      "PASAMONTAÑAS TÉCNICO SEIRUS - NEOFLEECE ORIGINAL (Traído de EE. UU.)",
    precio: 298,
    precioViejo: 351.64,
    descripcion: `Máscara térmica integral de la prestigiosa marca Seirus. Este modelo combina un pasamontañas de polar suave con una máscara facial de Neofleece (neopreno técnico) que protege nariz y boca del viento helado y la humedad. Original, traída de EE. UU.

PUNTOS CLAVE:
🌬️ Protección Total: Diseñada para bloquear el viento y mantener el calor en la cara, cabeza y cuello.
👃 Respiración Fácil: La máscara frontal tiene orificios de ventilación cortados con láser para permitir la respiración sin que se empañen los lentes o el casco.
💪 Material Técnico: Combinación de poliéster, spandex y neopreno para un ajuste elástico y cómodo.
🏍️ Versatilidad: Diseño de perfil bajo que permite usarla cómodamente debajo de cualquier casco (moto, bici o ski).

DETALLES TÉCNICOS:
✅ Marca: Seirus Innovation.
✅ Modelo: Neofleece Balaclava.
✅ Material: 88% Poliéster, 12% Spandex / Cara: 70% Neopreno.
✅ Estado: Excelente estado. Tela impecable, sin estiramientos ni desgaste en el neopreno.`,
    detalle: "",
  },
  {
    folderKey: "_Deportes/Mochilas/Boombah",
    categoria: "Deportes",
    nombre: "Mochila Deportiva Boombah Superpack - Béisbol / Softball",
    precio: 169.9,
    precioViejo: 325,
    descripcion: `
  🎒 MOCHILA BOOMBAH SUPERPACK (Camo Azul/Negro) Ideal para béisbol, softball o uso deportivo de alto rendimiento. Diseñada para cargar equipo pesado con comodidad.

━━━━━━━━━━━━━━━━━━━

📏 MEDIDAS EXACTAS ☑️ Alto: 58 cm

☑️ Ancho: 33 cm

☑️ Profundidad: 25 cm

(Espaciosa, no te quedarás corto de espacio)

━━━━━━━━━━━━━━━━━━━

⚾ CAPACIDAD TÉCNICA ☑️ Compartimentos laterales para 2 bates (con sujeción de velcro).

☑️ Compartimento separado inferior para calzado/cleats (evita ensuciar el resto).

☑️ Ganchos tipo "J" reforzados para colgar en la malla del dugout.

━━━━━━━━━━━━━━━━━━━

💪 RESISTENCIA Y DISEÑO ☑️ Tela de alta durabilidad (Hexagon Canvas).

☑️ Correas acolchadas con ajuste de pecho para distribuir el peso.

☑️ Espaldar con malla transpirable.

━━━━━━━━━━━━━━━━━━━

⚠️ ESTADO Y DETALLES: * Uso: Producto usado con marcas normales de juego.

Bordado: Tiene el nombre "Dutchess Debs #27" en el bolsillo frontal.

Detalle: Pequeño desgaste en la malla lateral (ver fotos), pero los cierres y la estructura están al 100%.`,
    detalle: "Agujero visible en la foto 10",
  },
  {
    folderKey: "_Deportes/Mochilas/PowerLand",
    categoria: "Deportes",
    nombre:
      "Mochila Powerland Ejecutiva / Viaje - Con Compartimento para Calzado",
    precio: 115,
    precioViejo: 125.54,
    descripcion: `🎒 MOCHILA POWERLAND MULTIFUNCIONAL Diseño híbrido de alta resistencia, ideal para viajes, oficina o gimnasio. Muy completa y segura.

━━━━━━━━━━━━━━━━━━━

📏 MEDIDAS EXACTAS
☑️ Alto: 54 cm

☑️ Ancho: 33 cm

☑️ Profundidad: 21 cm

(Tienes espacio para todo lo que necesitas)

━━━━━━━━━━━━━━━━━━━

💼 DISEÑO Y COMODIDAD
☑️ Acolchado Premium: Respaldo y correas diseñados para proteger tu espalda y hombros.
☑️ Sistema de Sujeción: Cuenta con varias correas de ajuste que aseguran las asas para que el peso no se mueva.
☑️ Versatilidad: Asa lateral reforzada para llevarla como maletín de mano.

━━━━━━━━━━━━━━━━━━━

👟 COMPARTIMENTO ESPECIAL
☑️ Zapatera integrada: Espacio independiente en la parte inferior para llevar calzado sin ensuciar la ropa del compartimento principal.

━━━━━━━━━━━━━━━━━━━

🔒 SEGURIDAD Y ACCESO RÁPIDO
☑️ Bolsillo Antirrobo: Compartimento oculto en la parte que va pegada a la espalda (ideal para celular o pasaporte).
☑️ Cinturón Abdominal: Abrazadera con bolsillos integrados en los cierres para guardar monedas, llaves o sencillo sin quitarte la mochila.

━━━━━━━━━━━━━━━━━━━

🔋 EXTRAS
☑️ Puerto USB Externo: Para cargar tu celular conectando un powerbank interno.
☑️ Material: Tela resistente a salpicaduras y cierres reforzados con logo de la marca.

━━━━━━━━━━━━━━━━━━━

✅ ESTADO:

Condición: Excelente estado, lista para usar.

Estética: Color gris profesional con detalles en rojo.`,
    detalle: "",
  },
  {
    folderKey: "_Deportes/Mochilas/VOL",
    categoria: "Deportes",
    nombre:
      "Mochila VOL Voltage - Expandible (Gimnasio / Viaje / Laptop)",
    precio: 99,
    precioViejo: 110,
    descripcion: `🎒 Mochila VOL Azul: ¡Expansión Inteligente para tus Aventuras! 🔥
¿Necesitas una mochila que se adapte a tus necesidades cambiantes? ¡La mochila VOL azul es tu aliada perfecta! Con su diseño innovador y materiales resistentes, está lista para acompañarte al gimnasio 🏋️‍♂️, a la oficina 🏢 o a tu próxima escapada de fin de semana.

¿Por qué te va a encantar? 🤔

📏 Expansión Inteligente: ¡Lo mejor es que esta mochila se puede expandir hacia abajo! Con unas medidas originales de 50 x 40 x 18 cm, puedes aumentar su capacidad a 57 cm de altura con solo deslizar un cierre. ¡Así tendrás espacio para todo lo que necesitas!

💪 Robusta y Resistente: Construida para durar y resistir el uso intenso.

Organización Total: Cuenta con un gran compartimento principal, compartimentos secundarios para tu laptop 💻, y prácticos bolsillos laterales de malla.

Comodidad Superior: Panel trasero acolchado y correas ajustables para una comodidad duradera.

Marca VOL: Calidad y estilo en cada detalle.`,
    detalle: "",
  },
  {
    folderKey: "_Accesorios/Monederos/Generico",
    categoria: "Accesorios",
    nombre: "Monedero Generico",
    precio: 5.0,
    precioViejo: 10.0,
    descripcion:
      "Descubre Monedero Generico dentro de la categoría Accesorios.",
    detalle: "Desgaste en el interior como se ve en las fotos",
  },
  {
    folderKey: "_Accesorios/Morral Azul/Generico Azul",
    categoria: "Accesorios",
    nombre: "Morral Azul Generico Azul",
    precio: 25.0,
    precioViejo: 35.0,
    descripcion: "Como nuevo.",
    detalle: "Como nuevo.",
  },
  {
    folderKey: "_Deportes/Munequeras/Dinam",
    categoria: "Deportes",
    nombre: "Par de Muñequeras Dinam",
    precio: 45,
    precioViejo: 60,
    descripcion: `✅ Soporte de Alta Compresión: Tejido elástico reforzado que permite un ajuste personalizado según la presión que necesites.
✅ Diseño Ergonómico: Incluye lazo para el pulgar, facilitando la colocación y asegurando que no se muevan durante el entrenamiento.
✅ Cierre Seguro: Sistema de velcro de alta resistencia para un ajuste que no se suelta bajo tensión.

MEDIDAS EXACTAS:
📏 Largo: 59 cm.
📏 Ancho: 8 cm.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Elegante Gardel",
    categoria: "Ropa",
    nombre: "Pantalon Elegante Gardel Talla 28",
    precio: 25,
    precioViejo: 45,
    descripcion:
      "Descubre Pantalon Elegante Gardel dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Elegante Lamdier's",
    categoria: "Ropa",
    nombre: "Pantalon Elegante Lamdier's Talla 32",
    precio: 55,
    precioViejo: 25,
    descripcion:
      "Descubre Pantalon Elegante Lamdier's dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Jogger Generico",
    categoria: "Ropa",
    nombre: "Pantalon Jogger",
    precio: 29,
    precioViejo: 61,
    descripcion: "Descubre Pantalon Jogger dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Jogger RG",
    categoria: "Ropa",
    nombre: "Pantalon Jogger Rg",
    precio: 29,
    precioViejo: 55,
    descripcion: "Descubre Pantalon Jogger Rg dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Pitillo Element",
    categoria: "Ropa",
    nombre: "Pantalon Pitillo ELEMENT ORIGINAL - Talla 32",
    precio: 45,
    precioViejo: 145,
    descripcion:
      "Descubre Pantalon Pitillo Element dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Recto Ohio",
    categoria: "Ropa",
    nombre: "Pantalon Recto Ohio - Talla 30",
    precio: 29,
    precioViejo: 58,
    descripcion: "Descubre Pantalon Recto Ohio dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo Basement",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo BASEMENT ORIGINAL - Talla 30",
    precio: 45,
    precioViejo: 129,
    descripcion:
      "Descubre Pantalon Semipitillo Basement dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo Bearcliff",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo BEARCLIFF ORIGINAL - Talla 30",
    precio: 45,
    precioViejo: 99,
    descripcion:
      "Descubre Pantalon Semipitillo Bearcliff dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo ConttonsJeans",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo Korvin Jeans - Talla 32",
    precio: 29,
    precioViejo: 55,
    descripcion:
      "Descubre Pantalon Semipitillo Conttonsjeans dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo DenimLab AzulMasOscuro",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo DENIMLAB Original Azul Oscuro - Talla 30",
    precio: 45,
    precioViejo: 115,
    descripcion:
      "Descubre Pantalon Semipitillo DENIMLAB dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo DenimLab Azul",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo DENIMLAB Original Azul- Talla 30",
    precio: 45,
    precioViejo: 89.9,
    descripcion:
      "Descubre Pantalon Semipitillo DENIMLAB dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo DenimLab Marron",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo DENIMLAB Original Marron- Talla 30",
    precio: 45,
    precioViejo: 119,
    descripcion:
      "Descubre Pantalon Semipitillo Denimlab dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo Index",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo INDEX Original - Talla 30",
    precio: 35,
    precioViejo: 99,
    descripcion:
      "Descubre Pantalon Semipitillo Index dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo Kayraman",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo KAYRAMAN Original - Talla 34",
    precio: 45,
    precioViejo: 99,
    descripcion:
      "Descubre Pantalon Semipitillo Kayraman dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo Navigata",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo NAVIGATA Original - Talla 30",
    precio: 45,
    precioViejo: 110,
    descripcion:
      "Descubre Pantalon Semipitillo Navigata dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo Ordan",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo Ordan - Talla 32",
    precio: 29,
    precioViejo: 55,
    descripcion:
      "Descubre Pantalon Semipitillo Ordan dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo Pioner",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo PIONER Original - Talla 30",
    precio: 55,
    precioViejo: 159,
    descripcion:
      "Descubre Pantalon Semipitillo Pioner dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pantalones/Semipitillo RG",
    categoria: "Ropa",
    nombre: "Pantalon Semipitillo Rg",
    precio: 28,
    precioViejo: 45,
    descripcion:
      "Descubre Pantalon Semipitillo Rg dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pasamontanas/100 Poliester 1",
    categoria: "Ropa",
    nombre: "PASAMONTAÑAS DE MICROFIBRA - MULTIPROPÓSITO",
    precio: 25,
    precioViejo: 30,
    descripcion: `DESCRIPCIÓN GENERAL:
Pasamontañas ligero de alto rendimiento, ideal para protegerte del viento, polvo y sol sin sofocarte. Por su diseño de perfil delgado, es la opción favorita de motociclistas y ciclistas para usar debajo del casco, ya que no genera bulto y absorbe la humedad.

PUNTOS CLAVE:
🌬️ Tejido Respirable: Fabricado en microfibra de poliéster que permite el flujo de aire y seca rápidamente el sudor.
🔄 Diseño Articulado: Puedes usarlo de varias formas: cubriendo toda la cara, como cuello (cuellera) o como máscara media bajando la parte superior.
🧤 Confort Total: Costuras planas reforzadas que evitan irritaciones en la piel tras horas de uso.
🛡️ Protección: Ideal para rutas largas en moto, paseos en bici o trabajos al aire libre.

DETALLES TÉCNICOS:
✅ Material: 100% Poliéster (Microfibra elástica).
✅ Talla: Estándar (se adapta a cualquier tamaño de cabeza).
✅ Color: Negro mate.
✅ Estado: Nuevo / Excelente estado. Tela impecable y elásticos firmes.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pasamontanas/100 Poliester 2",
    categoria: "Ropa",
    nombre: "PASAMONTAÑAS URBANO - MICROFIBRA ELÁSTICA",
    precio: 15,
    precioViejo: 30,
    descripcion: `DESCRIPCIÓN GENERAL:
Pasamontañas ligero y respirable, diseñado para ofrecer protección contra el viento y el polvo sin generar calor excesivo. Es la prenda ideal para motociclistas o ciclistas que buscan comodidad absoluta debajo del casco gracias a su tejido delgado y de secado rápido.

PUNTOS CLAVE:
🌬️ Tejido de Microfibra: Material suave al tacto que absorbe la humedad y permite una respiración fluida.
🔄 Uso Versátil: Su diseño elástico permite usarlo como máscara completa, cuellera o estilo "ninja" según la necesidad.
🧤 Ajuste Anatómico: Se adapta perfectamente a la forma de la cabeza sin apretar, ideal para uso prolongado en rutas o trabajo.

DETALLE:
🔎 Presenta un pequeño enganche o roce mínimo en la tela (puedes verlo a detalle en la foto #3). Es un tema puramente estético que no afecta en nada la elasticidad ni la función de protección de la prenda.

DETALLES TÉCNICOS:
✅ Material: 100% Poliéster.
✅ Talla: Estándar (Adulto).
✅ Color: Negro.
✅ Estado: Operativo al 100%.`,
    detalle: "Detalle Estético (foto 3)",
  },
  {
    folderKey: "_Ropa/Pasamontanas/Generico Rojo",
    categoria: "Ropa",
    nombre: "Pasamontañas Térmica Tipo Capucha - Reforzado Rojo",
    precio: 29,
    precioViejo: 57,
    descripcion: `DESCRIPCIÓN GENERAL:
Máxima protección contra el frío extremo. Este pasamontañas tipo capucha está diseñado para mantener el calor en cabeza, rostro y cuello simultáneamente. Es perfecto para viajes a zonas de altura, motociclistas en invierno o deportes de nieve.

LO MEJOR DE ESTA PRENDA:
🔥 Doble Capa Térmica: Exterior de polar denso e interior reforzado con forro tipo peluche (sherpa) de color gris, extremadamente suave y cálido.
🛡️ Protección 3 en 1: Funciona como capucha, máscara facial y cuellera al mismo tiempo.
🔒 Ajuste Personalizado: Incluye cordones laterales con reguladores (tankas) para ajustar la apertura al rostro y sellar la entrada de aire frío.
🧶 Material Premium: Tela 100% poliéster de alta densidad que no pica y es muy cómoda para uso prolongado.

DETALLES TÉCNICOS:
✅ Color: Rojo Intenso.
✅ Talla: Estándar (Adulto).
✅ Estado: Impecable. El forro interno está limpio y los reguladores funcionan perfectamente.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pasamontanas/Gxcror",
    categoria: "Ropa",
    nombre: "Pasamontañas Térmica GXCROR ORIGINAL - MICRO-POLAR",
    precio: 31,
    precioViejo: 59,
    descripcion: `DESCRIPCIÓN GENERAL:
Pasamontañas técnico de la marca GXCROR, diseñado para ofrecer un abrigo superior en climas fríos. Está confeccionado en un tejido de micro-polar ligero pero de alta densidad que retiene el calor corporal mientras permite que la piel respire. Es Original, importado de EE. UU.

LO MEJOR DE ESTE MODELO:
🔥 Tejido Ultra-Suave: El micro-polar (fleece) es súper cómodo, no pica y ofrece una sensación térmica inmediata.
⛷️ Ajuste Ergonómico: Gracias a su 5% de spandex, se estira para adaptarse perfectamente a la forma de la cabeza y el cuello sin perder su forma original.
⚡ Perfil Bajo: Es lo suficientemente delgado para usarse debajo de cascos de moto o ski, pero lo suficientemente grueso para usarse solo y protegerte del viento fuerte.
🧵 Costuras de Calidad: Acabados reforzados que garantizan durabilidad tras el uso diario y los lavados.

DETALLES TÉCNICOS:
✅ Marca: GXCROR (Original).
✅ Material: 95% Poliéster / 5% Spandex (Micro-polar elástico).
✅ Color: Negro Carbón.
✅ Estado: Excelente estado, como nuevo. Sin motas ni desgaste en el tejido.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pasamontanas/Rockbros",
    categoria: "Ropa",
    nombre: "Pasamontañas Técnico ROCKBROS ORIGINAL- PROTECCIÓN TOTAL",
    precio: 65,
    precioViejo: 75,
    descripcion: `DESCRIPCIÓN GENERAL:
Equipo profesional de la marca Rockbros. Este pasamontañas integral está diseñado con un sistema de doble protección: una capucha de polar grueso para el frío extremo y una máscara técnica interna transpirable. Ideal para ciclismo, motos o alta montaña.

LO QUE LO HACE PREMIUM:
❄️ Diseño de Doble Capa: Combina una capucha de polar (fleece) externa con un pasamontañas interno elástico que se ajusta perfectamente al rostro.
🌬️ Protección de Cuello Extendida: La base es mucho más amplia que la de un pasamontañas común, cubriendo pecho y hombros para evitar filtraciones de aire.
👃 Respiración Optimizada: La zona de la boca y nariz cuenta con un panel de malla técnica (mesh) negra que permite respirar con facilidad y evita que los lentes se empañen.
🔒 Ajuste Personalizado: Cordones de alta resistencia con puntas engomadas en colores neón para ajustar la capucha al contorno de la cara.

DETALLES TÉCNICOS:
✅ Marca: Rockbros (Original).
✅ Color: Gris Acero con detalles en neón.
✅ Material: Polar térmico de alta densidad y licra técnica transpirable.
✅ Estado: Impecable. Los logos y acabados están como nuevos.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pasamontanas/Seirus",
    categoria: "Ropa",
    nombre: "Pasamontañas Capucha SEIRUS ORIGINAL - PERFORMANCE FLEECE",
    precio: 40,
    precioViejo: 50,
    descripcion: `DESCRIPCIÓN GENERAL:
Protección profesional contra el frío extremo de la marca Seirus Innovation. Este pasamontañas tipo capucha es mucho más que una prenda de polar simple; utiliza tecnología de control climático para mantener el calor sin acumular humedad. Original, traído de EE. UU.

VALOR AGREGADO:
🔥 Performance Fleece: Tejido técnico de alta densidad, ultra suave y diseñado para durar años sin perder su capacidad térmica.
🔒 Ajuste de Precisión: Incluye reguladores laterales (tankas) que permiten ajustar la apertura de la cara de forma independiente, ideal para sellar el paso del viento.
⛷️ Diseño Ergonómico: El corte de la base está diseñado para integrarse perfectamente debajo de casacas o dentro de un casco sin bultos incómodos.
🌬️ Escudo Total: Cubre cabeza, orejas y cuello completamente.

DETALLES TÉCNICOS:
✅ Marca: Seirus Innovation (The Climate Control Fabric).
✅ Procedencia: Made in Taiwan (Calidad de exportación original).
✅ Color: Negro Mate.
✅ Estado: Excelente. El polar se mantiene denso, sin motas y los elásticos están firmes.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pasamontanas/Supreme",
    categoria: "Ropa",
    nombre: "CUELLERA SUPREME ORIGINAL - WINDSTOPPER® GORE-TEX",
    precio: 395,
    precioViejo: 582.27,
    descripcion: `DESCRIPCIÓN GENERAL:
¡Exclusiva cuellera Supreme original! No es solo una prenda de marca, es equipo técnico de alto nivel. Utiliza la membrana WINDSTOPPER® de Gore-Tex Labs, lo que la hace 100% resistente al viento y altamente transpirable. Ideal para quienes buscan estilo hypebeast sin sacrificar protección real contra el frío extremo.

PUNTOS CLAVE:
🚀 Supreme Original: Etiqueta roja de autenticidad (Made in Vietnam) y logos en perfecto estado.
💨 Tecnología WINDSTOPPER®: Bloquea el viento por completo. Es la tecnología de Gore-Tex diseñada para mantener el calor corporal en condiciones de ráfagas fuertes.
🔥 Interior Térmico: Forro de micro-polar con textura cuadriculada que retiene el calor y es ultra suave al tacto.
🔒 Ajuste Personalizado: Cordón elástico con tanca (ajustador) en la parte posterior para un sello perfecto alrededor del rostro o cuello.

DETALLES TÉCNICOS:
✅ Marca: Supreme (New York).
✅ Tecnología: WINDSTOPPER® by Gore-Tex Labs.
✅ Color: Negro (Black).
✅ Estado: Impecable. Los logos impresos están nítidos, sin grietas, y el ajustador funciona al 100%.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Pasamontanas/TurtleFur",
    categoria: "Ropa",
    nombre: "Cuellera con Capucha TURTLEFUR ORIGINAL",
    precio: 65,
    precioViejo: 120,
    descripcion: `DESCRIPCIÓN GENERAL:
¡Lo mejor de dos mundos! Esta prenda de la prestigiosa marca Turtle Fur combina una cuellera de polar de alto grosor con una capucha técnica integrada. Es la solución definitiva para quienes odian que se les filtre el aire frío entre la casaca y la cabeza. Original, importada de EE. UU.

PUNTOS CLAVE:
🐢 Calidad Turtle Fur: Famosos por tener el polar (fleece) más suave y duradero del mercado. No pica, no genera motas y calienta al instante.
🌬️ Diseño Cortavientos: La capucha es de un material más delgado y elástico para que encaje perfecto debajo de cualquier casco (moto, ski, bici) sin abultar, mientras que el cuello es grueso para máxima protección.
🔗 Protección Continua: Al ser una sola pieza, elimina cualquier "hueco" por donde pueda entrar el frío, protegiendo nuca, garganta y cabeza simultáneamente.
⚖️ Ligero y Funcional: Puedes bajar la capucha y usarla solo como cuellera cuando el frío no sea tan intenso.

DETALLES TÉCNICOS:
✅ Marca: Turtle Fur (Logo de la tortuga original en la etiqueta).
✅ Color: Negro Carbón.
✅ Talla: Estándar (Adulto).
✅ Estado: Excelente. El polar se nota denso y muy bien cuidado.`,
    detalle: "",
  },
  {
    folderKey: "_Accesorios/Pechera/Generica Negra",
    categoria: "Accesorios",
    nombre: "Pechera Tàctica Brothers Porta Celular - ESTILO URBAN",
    precio: 25,
    precioViejo: 35,
    descripcion: `CARACTERÍSTICAS TÉCNICAS:
✅ Marca: Brothers (Industria Peruana).
✅ Diseño: 2 compartimentos principales con cierre y bolsillos frontales.
✅ Sistema MOLLE: Tiras frontales para enganchar mosquetones o estuches adicionales.
✅ Ajuste: Correas de nylon regulables con broches de presión (tipo mochila) para adaptarse a cualquier contextura.
✅ Seguridad: Espaldar acolchado y malla frontal para mayor transpirabilidad.

DETALLE:
🔎 El producto está operativo al 100%. Presenta un detalle sutil en una de las costuras del sistema MOLLE frontal (se puede ver en la foto #4), donde el hilo se ha soltado un poco. Es algo puramente estético que se puede reforzar fácilmente y no afecta la estructura principal de la pechera.`,
    detalle: "Una de las tiras del sistema MOLLE esta algo descocida (foto 4).",
  },
  {
    folderKey: "_Ropa/Poleras/Volcom",
    categoria: "Ropa",
    nombre: "Polera VOLCOM ORIGINAL - Talla M - CLASSIC FIT",
    precio: 45,
    precioViejo: 90,
    descripcion: `DESCRIPCIÓN GENERAL:
Polera con capucha (Hoodie) de la reconocida marca Volcom. Diseño clásico con mangas combinadas en azul marino y torso gris jaspeado. Es una prenda súper cómoda, ideal para el uso diario o para un estilo casual relajado. Comprada originalmente en tienda oficial de Perú.

PUNTOS CLAVE:
💎 Volcom Original: Cuenta con el logo circular bordado en el pecho y el icónico "Stone" bordado en la manga izquierda (detalle de calidad).
👕 Corte Classic Fit: Ajuste estándar, cómodo y versátil.
🧶 Manga Ranglán: Estilo deportivo que permite mayor libertad de movimiento en los hombros.
🎒 Funcional: Incluye bolsillo tipo canguro frontal y capucha con ojales metálicos.
✅ Marca: Volcom.
✅ Talla: M (Classic Fit).
✅ Color: Gris / Azul Marino.
✅ Material: Algodón/Poliéster (suave al tacto).`,
    detalle: "",
  },
  {
    folderKey: "_Deportes/Protectores Genitales/Adidas de Genitales y Coxis",
    categoria: "Deportes",
    nombre:
      "Short de Compresión Adidas ORIGINAL Techfit - Con Protecciones (Impacto)",
    precio: 95,
    precioViejo: 150,
    descripcion: `🩳 SHORT ADIDAS TECHFIT PROTECTION Prenda de alto rendimiento diseñada para proteger las zonas críticas durante la práctica de deportes de contacto (fútbol americano, rugby, fútbol, etc.) o entrenamientos de alta intensidad.

━━━━━━━━━━━━━━━━━━━

🛡️ PROTECCIÓN ESTRATÉGICA
☑️ Paneles Acolchados: Cuenta con protecciones de espuma EVA integradas en las caderas, muslos y coxis (foto 2 y 6).
☑️ Diseño Ergonómico: Las almohadillas tienen cortes geométricos que permiten que la protección se doble y se adapte al movimiento de tu cuerpo sin restarte agilidad.

━━━━━━━━━━━━━━━━━━━

🧪 TECNOLOGÍA ADIDAS
☑️ Techfit: Ajuste de compresión que ayuda a la recuperación muscular y reduce la vibración durante el ejercicio.
☑️ Climalite (foto 4): Tejido técnico que expulsa el sudor de la piel para mantenerte seco y fresco incluso bajo el uniforme.

━━━━━━━━━━━━━━━━━━━

👕 DETALLES Y COMODIDAD
☑️ Banda Elástica Superior: Cintura ancha con logo Techfit que asegura que el short no se deslice.
☑️ Costuras Planas: Diseñadas para evitar rozaduras e irritaciones en la piel durante el uso prolongado.

━━━━━━━━━━━━━━━━━━━

📏 TALLA Y ORIGEN (Foto 7):

Talla: L (Junior / Jóvenes de 13-14 años / 164 cm). También puede servir para adultos de contextura delgada (talla S).

Origen: Hecho en Vietnam.

━━━━━━━━━━━━━━━━━━━

✅ ESTADO:

Condición: Excelente estado, las protecciones están íntegras y el elástico mantiene su firmeza original.`,
    detalle: "",
  },
  {
    folderKey: "_Accesorios/Relojes/Reloj Dorado GreatLand",
    categoria: "Accesorios",
    nombre: "Reloj Dorado Greatland",
    precio: 15,
    precioViejo: 30,
    descripcion:
      "Descubre Reloj Dorado Greatland dentro de la categoría Accesorios.",
    detalle: "No incluye batería",
  },
  {
    folderKey: "_Accesorios/Relojes/Reloj Verde y Negro QUARTZ",
    categoria: "Accesorios",
    nombre: "Reloj Verde Y Negro Quartz",
    precio: 15,
    precioViejo: 25,
    descripcion:
      "Descubre Reloj Verde Y Negro Quartz dentro de la categoría Accesorios.",
    detalle: "No incluye batería",
  },
  {
    folderKey: "_Accesorios/Relojes/Reloj X-Sports",
    categoria: "Accesorios",
    nombre: "Reloj X Sports Retroiluminado",
    precio: 25,
    precioViejo: 32,
    descripcion: "Retroiluminado Reloj X-Sports Deportivo moderno",
    detalle: "Falta el sujetador de la correa (foto 3)",
  },
  {
    folderKey: "_Tecnologia/Speakers/Aomais",
    categoria: "Tecnologia",
    nombre: "Speaker Parlante Bluetooth AOMAIS SPORT II - WATERPROOF IPX7",
    precio: 264,
    precioViejo: 311.52,
    descripcion: `DESCRIPCIÓN GENERAL:
Parlante portátil AOMAIS Sport II de 20W. Es un equipo diseñado para uso en exteriores, resistente a impactos y con certificación de impermeabilidad. Se entrega Original, importado de EE. UU.

VALORES DESTACADOS:
🔊 Audio: Doble driver de alta fidelidad con 20W de potencia total.
🛡️ Construcción: Carcasa reforzada con recubrimiento de goma para protección contra caídas.
🔋 Autonomía: La batería rinde aproximadamente 3 horas de uso continuo.
📲 Conectividad: Conexión vía Bluetooth y entrada auxiliar (AUX) operativa.

ESTADO:
✅ Funcionamiento: 100% operativo.
✅ Botones: Panel de control totalmente operativo y con respuesta inmediata.
✅ Físico: Presenta marcas de uso y desgaste estético visibles en las fotos que no afectan el desempeño del audio.`,
    detalle: "",
  },
  {
    folderKey: "_Tecnologia/SportCams/Eken",
    categoria: "Tecnologia",
    nombre: "Càmara de Acciòn Deportiva EKEN H9R + Kit - 4K ULTRA HD",
    precio: 59,
    precioViejo: 129,
    descripcion: `DESCRIPCIÓN GENERAL:
Cámara deportiva de alto rendimiento marca EKEN, modelo H9R. Es la alternativa ideal para capturar tus aventuras en alta resolución. Compacta, versátil y perfecta para deportes extremos, viajes o como cámara de seguridad en casco. Original, importada de EE. UU.

CARACTERÍSTICAS TÉCNICAS:
✅ Resolución de Video: 4K a 30fps / 2.7K a 30fps / 1080p a 60fps (Video fluido y nítido).
✅ Lente: Gran angular de 170° (Ojo de pez) para capturar toda la escena.
✅ Pantalla trasera: LCD de 2 pulgadas para encuadre y reproducción inmediata.
✅ Conectividad: Wi-Fi integrado para control remoto y transferencia de archivos al celular mediante App (Ez iCam).
✅ Salida: Puerto HDMI para conexión directa a TV o monitor.
✅ Almacenamiento: Soporta memorias MicroSD de hasta 32GB/64GB (Clase 10 recomendada).

ESTADO DEL PRODUCTO:
🔎 Funcionamiento: 100% operativa. Lente impecable sin rayaduras y botones con respuesta táctil perfecta.`,
    detalle: "Algo despintada, pero 100% Operativa",
  },
  {
    folderKey: "_Tecnologia/SportCams/UHD_Pro",
    categoria: "Tecnologia",
    nombre: "Càmara Deportiva Uhd Pro (Solo Càmara) - 4K ULTRA HD Espìa",
    precio: 150,
    precioViejo: 89.90,
    descripcion: `📷 Cámara de bolsillo compacta y discreta, diseñada para grabaciones en movimiento. Es la herramienta ideal para registro de seguridad personal, ciclistas o creadores de contenido que buscan un ángulo de visión natural. Dispositivo ligero, fácil de ocultar y con operación simplificada de un solo botón.

CARACTERÍSTICAS TÉCNICAS:
✅ Resolución de Video: UHD / 1080p para imágenes claras y definidas.
✅ Autonomía: Batería con duración aproximada de 3 horas de grabación continua.
✅ Almacenamiento: Ranura para tarjeta Micro SD (soporta hasta 128GB).
✅ Diseño: Sistema Clip-On para enganche rápido en camisas, mochilas o correas.
✅ Interfaz: Puerto Micro USB para carga y transferencia inmediata de datos.

🔴 Estado:
100% operativo. El lente se encuentra limpio y sin rayones que afecten la imagen.
`,
    detalle: "",
  },
  {
    folderKey: "_Tomatodos/UPC/Termo",
    categoria: "Tomatodos",
    nombre: "Upc Termo",
    precio: 20,
    precioViejo: 25,
    descripcion: `Descubre Upc Termo dentro de la categoría Tomatodos. Este termo de acero inoxidable es perfecto para mantener tus bebidas calientes o frías durante horas. Con una capacidad ideal para el día a día, es resistente, fácil de transportar y tiene un diseño moderno que se adapta a cualquier estilo.`,
    detalle: "",
  },
  {
    folderKey: "_Tomatodos/UPC/Vaso",
    categoria: "Tomatodos",
    nombre: "Upc Vaso Tomatodo",
    precio: 15.0,
    precioViejo: 20.0,
    descripcion: "Descubre Upc Vaso dentro de la categoría Tomatodos.",
    detalle: "",
  },
  {
    folderKey: "_Tomatodos/UPC/VidaUniversitaria",
    categoria: "Tomatodos",
    nombre: "Upc Vidauniversitaria",
    precio: 15,
    precioViejo: 28,
    descripcion:
      "Descubre Upc Vidauniversitaria dentro de la categoría Tomatodos.",
    detalle: "",
  },
  {
    folderKey: "_Tecnologia/WebCams/Halion",
    categoria: "Tecnologia",
    nombre: "Webcams Halion",
    precio: 15,
    precioViejo: 30,
    descripcion: `📷 Webcam HALION – Conexión Dual para Video y Audio 💻
Esta webcam de la marca Halion es una solución práctica y directa para tus videollamadas, clases virtuales o conferencias. Su diseño compacto y sistema de ajuste manual la hacen muy versátil para cualquier monitor o escritorio.

Características principales: 🤔

🔌 Conectividad Dual: Cuenta con dos conectores independientes: un puerto USB para la transmisión de video y energía, y un conector de 3.5mm (Plug) para el audio.

💡 Iluminación Integrada (1 Flash LED): El frontal de la cámara incluye un punto de luz LED activo que ayuda a mejorar la iluminación de tu rostro en ambientes oscuros. (El segundo orificio frontal es un elemento de diseño decorativo).

🎯 Enfoque Manual: Posee un anillo estriado alrededor del lente que permite ajustar el enfoque manualmente para obtener la mayor nitidez según la distancia.

🎤 Micrófono Incorporado: Se observa un pequeño orificio en la parte frontal inferior, diseñado para capturar la voz sin necesidad de micrófonos externos adicionales.

📐 Base Ajustable: La cámara está montada sobre una base con la marca HALION que funciona como clip para sujetarla a la parte superior de pantallas de laptops o monitores, y también permite apoyarla sobre superficies planas.

🔄 Cabezal Articulado: El diseño permite girar e inclinar la cámara para encontrar el ángulo perfecto de visión.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Zapatillas/AmarilloNegro",
    categoria: "Ropa",
    nombre: "Zapatillas Amarillas con Negro Tipo Adidas - Talla 40",
    precio: 19,
    precioViejo: 35,
    descripcion:
      "Descubre Zapatilla Amarillonegro dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Zapatillas/Marrones",
    categoria: "Ropa",
    nombre: "Nike SB Charge Canvas - Estilo Urbano - Originales - Talla 39 - Como Nuevas",
    precio: 125,
    precioViejo: 215,
    descripcion: `DESCRIPCIÓN GENERAL:
Zapatillas Nike originales de la línea SB (Skateboarding), modelo Charge Canvas. Presentan un diseño minimalista en lona resistente, ideales para un look casual o urbano. Su suela vulcanizada ofrece gran flexibilidad y una pisada cómoda para el día a día.

CARACTERÍSTICAS TÉCNICAS:
✅ Material Exterior: Lona (Canvas) de alta resistencia.
✅ Suela: Goma vulcanizada para mayor agarre y durabilidad.
✅ Plantilla: Tecnología Solarsoft que proporciona amortiguación y soporte.
✅ Color: Verde militar con detalles en amarillo (Swoosh).
✅ Ajuste: Cordones reforzados para un entalle seguro.

ESTADO DEL PRODUCTO:
🔎 Funcionamiento: 100% operativo. Estructura íntegra, suelas con todo el relieve original y sin desgaste excesivo en el talón.
🔎 Estética: Estado conservado. La lona mantiene su color firme y las costuras están perfectas. Las suelas blancas presentan el oscurecimiento natural por el uso, pero nada que afecte su tiempo de vida.`,
    detalle: "",
  },
  {
    folderKey: "_Ropa/Zapatillas/Naranjas",
    categoria: "Ropa",
    nombre: "Reebok Naranjas con Azul Originales - Running & Training - Originales - Talla 40 - 9/10",
    precio: 60,
    precioViejo: 120,
    descripcion: "Descubre Zapatilla Naranjas dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Zapatillas/Negras",
    categoria: "Ropa",
    nombre: "Zapatillas Negras",
    precio: 25,
    precioViejo: 65,
    descripcion: "Descubre Zapatillas Negras dentro de la categoría Ropa.",
    detalle: "",
  },
  {
    folderKey: "_Ropa/Zapatillas/Verdes",
    categoria: "Ropa",
    nombre: "Zapatillas Verdes Fila Energized - Estilo Deportivo - Originales - Talla 40",
    precio: 38,
    precioViejo: 110,
    descripcion: `CARACTERÍSTICAS TÉCNICAS:
✅ Amortiguación Energized: Cápsulas de soporte en la entresuela para un caminar suave.
✅ Capellada Sintética: Material duradero y fácil de limpiar que mantiene la forma del pie.
✅ Suela con Tracción: Diseño de ranuras que permiten flexibilidad y agarre en superficies urbanas.
✅ Interior Acolchado: Cuello y lengüeta suaves para evitar molestias en el tobillo.
✅ Estética Moderna: Acabado en gris mate con degradado neón en la parte posterior.`,
    detalle: "",
  },
];

export default manualCatalogOverrides;
