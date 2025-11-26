export default {
  global: {
    Name: 'Mercado potencial',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos del mercado potencial y su análisis estratégico. Explora tipos de mercado, segmentación, investigación y perfil de clientes. Permite al aprendiz identificar oportunidades comerciales, definir segmentos estratégicos y construir <em>buyer</em> persona para optimizar decisiones de mercadeo y planificación de planes efectivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mercado potencial',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Tipos', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Variables', hash: 't_1_2' },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Investigación de mercado',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Tipos', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Métodos', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Fuentes de información', hash: 't_2_3' },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de tendencias',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Tipos', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Herramientas', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Aplicación', hash: 't_3_3' },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Perfil de mercado',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Elementos', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Perfil ideal', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Segmento de mercado', hash: 't_4_3' },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Buyer persona',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Características', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Factores de motivación', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Creación', hash: 't_5_3' },
        ],
      },

      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Objetivos', hash: 't_6_1' },
          { numero: '6.2', titulo: 'Tipos', hash: 't_6_2' },
          { numero: '6.3', titulo: 'Criterios', hash: 't_6_3' },
          { numero: '6.4', titulo: 'Estándares', hash: 't_6_4' },
          { numero: '6.5', titulo: 'Buenas prácticas', hash: 't_6_5' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Investigación de mercado',
      referencia:
        'Mita Arancibia, E. G. (s.f.). Investigación de mercados. Universidad Mayor de San Andrés.',
      tipo: 'Documento académico',
      link:
        'https://usfx.bo/Documentos/RepositorioLibros/Investigacion_de_mercados.pdf',
    },
    {
      tema: 'Buyer persona',
      referencia:
        'HubSpot. (2024). Qué es un buyer persona y cómo crearlo (con plantillas gratis). Blog HubSpot.',
      tipo: 'Artículo web',
      link: 'https://blog.hubspot.es/marketing/que-son-buyer-personas',
    },
  ],
  glosario: [
    {
      termino: 'Benchmarking',
      significado:
        'Técnica de investigación que consiste en comparar procesos, productos o estrategias con los líderes del sector para identificar buenas prácticas y oportunidades de mejora.',
    },
    {
      termino: 'Buyer persona',
      significado:
        'Representación semificticia de la cliente ideal basada en datos reales, que incluye características, motivaciones, frustraciones y comportamientos de compra.',
    },
    {
      termino: 'Fuente secundaria',
      significado:
        'Información obtenida de registros ya existentes, como estudios previos, bases de datos, informes o publicaciones, utilizada en investigaciones de mercado.',
    },
    {
      termino: 'Investigación cualitativa',
      significado:
        'Método de investigación que busca comprender percepciones, emociones y comportamientos a través de técnicas como entrevistas, grupos focales y observación.',
    },
    {
      termino: 'Investigación cuantitativa',
      significado:
        'Método de investigación que recolecta datos numéricos y estadísticos para medir variables y establecer patrones mediante encuestas o experimentos.',
    },
    {
      termino: 'Macrotendencia',
      significado:
        'Cambio estructural y sostenido en el tiempo que afecta múltiples sectores y regiones, como la digitalización o el envejecimiento poblacional.',
    },
    {
      termino: 'Mercado potencial',
      significado:
        'Conjunto de consumidores que podrían estar interesados en un producto o servicio, aunque aún no lo hayan adquirido.',
    },
    {
      termino: 'Perfil de mercado',
      significado:
        'Descripción detallada del grupo objetivo, que incluye variables demográficas, psicográficas, geográficas y conductuales relevantes para la estrategia comercial.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'Proceso de dividir el mercado total en grupos más pequeños y homogéneos con características y necesidades similares.',
    },
    {
      termino: 'Tendencia emergente',
      significado:
        'Señal débil o incipiente que podría convertirse en una tendencia consolidada, observada en cambios de comportamiento o nuevas tecnologías.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Sigüenza, J. F. (2024). Los segmentos del marketing: análisis, definición y tipos. RAE-IC, Revista de la Asociación Española de Investigación de la Comunicación, 11(21).',
      link:
        'https://rodin.uca.es/bitstream/handle/10498/31668/Segmentacio_n%20de%20mercado.pdf?sequence=4',
    },
    {
      referencia:
        'Pérez Ruiz, A. (s.f.). Segmentación y posicionamiento. Universidad de Cantabria.',
      link:
        'https://ocw.unican.es/pluginfile.php/1601/course/section/1059/Tema%203%20-%20Segmentacion%20y%20posicionamiento.pdf',
    },
    {
      referencia:
        'YouScan. (2025). Las mejores herramientas de análisis de tendencias en 2025. Blog YouScan.',
      link:
        'https://youscan.io/es/blog/las-mejores-herramientas-de-analisis-de-tendencias/',
    },
    {
      referencia:
        'Camarás, N. (2020). Buyer persona: qué es, cómo hacerlo y ejemplos. Blog Nuria Camarás.',
      link: 'https://nuriacamaras.com/buyer-persona/',
    },
    {
      referencia:
        'Universidad de Valencia. (s.f.). La segmentación de mercados. Dirección de Comunicación.',
      link: 'https://www.uv.es/frasquem/dci/DirCom1TEMA_8.pdf',
    },
    {
      referencia:
        'HubSpot. (2023). Qué es un mercado potencial y cómo analizarlo (con ejemplo). Blog HubSpot.',
      link: 'https://blog.hubspot.es/marketing/mercado-potencial',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
