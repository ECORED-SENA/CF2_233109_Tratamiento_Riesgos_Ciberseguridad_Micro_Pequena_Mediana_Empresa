export default {
  global: {
    componenteFormativo: 'Valoración del riesgo de ciberseguridad',
    descripcionCurso:
      'La valoración de riesgos en ciberseguridad en las organizaciones permite determinar el riesgo existente en los activos de información, para que a partir de un ejercicio evaluativo se determinen las salvaguardas necesarias para evitar que las amenazas se materialicen y conlleven a procesos críticos para la organización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-5.png'),
      },
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión del riesgo informático',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivo, características y beneficios',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Etapas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Controles de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Controles',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Declaración de aplicabilidad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Magerit',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Identificación de activos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Identificación de amenazas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Determinación del impacto potencial',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Determinación del riesgo potencial',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Establecimiento de salvaguardas',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Impacto residual',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Escorial Bonet, Á. Escalera Alcázar, J. & Simón Quintana, S. (2019). Guía para la aplicación de UNE-ISO 31000:2018. AENOR - Asociación Española de Normalización y Certificación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/118154 ',
    },
    {
      referencia:
        'ICONTEC (2018). NTC-ISO 31000:2018 - Gestión del Riesgo. Directrices.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=74790',
    },
    {
      referencia:
        'INCIBE (2017). Gestión de riesgos - Una guía de aproximación para el empresario.',
      link:
        'https://www.incibe.es/sites/default/files/contenidos/guias/doc/guia_ciberseguridad_gestion_riesgos_metad.pdf',
    },
    {
      referencia:
        'MINTIC. (2016). Seguridad y Privacidad de la Información - Guía de gestión de riesgos.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
    {
      referencia:
        'Tamayo Saborit, M. & González Capote, D. (2020). La gestión de riesgos: herramienta estratégica de gestión empresarial. Editorial Universo Sur.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/131885',
    },
  ],
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'Componente o funcionalidad de un sistema de información susceptible de ser atacado deliberada o accidentalmente con consecuencias para la organización. Incluye: información, datos, servicios, aplicaciones (software), equipos (hardware), comunicaciones, recursos administrativos, recursos físicos y recursos humanos (MAGERIT,2012).',
    },
    {
      termino: 'Autenticidad',
      significado:
        'Propiedad o característica consistente en que una entidad es quien dice ser o bien que garantiza la fuente de la que proceden los datos.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Que la información llegue solamente a las personas autorizadas.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'Disposición de los servicios a ser usados cuando sea necesario.',
    },
    {
      termino: 'Integridad',
      significado:
        'Mantenimiento de las características de completitud y corrección de los datos.',
    },
    {
      termino: 'PHVA',
      significado: 'Ciclo determinado por Planear, Hacer, Verificar y Actuar.',
    },
    {
      termino: 'Salvaguarda',
      significado:
        'Procedimientos o mecanismos tecnológicos que reducen el riesgo.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Aseguramiento de que en todo momento se podrá determinar quién hizo qué y en qué momento.',
    },
    {
      termino: 'Vulnerabilidad',
      significado: 'Toda debilidad que puede ser aprovechada por una amenaza.',
    },
  ],
  complementario: [
    {
      tema: '2. Controles de seguridad',
      referencia:
        'Fernández Rivero, P. P. Gómez Fernández, L. (2018). Cómo implantar un SGSI según UNE-EN ISO/IEC 27001 y su aplicación en el Esquema Nacional de Seguridad. AENOR - Asociación Española de Normalización y Certificación. (p. 36-57).',
      tipo: 'Libros digitales',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/53624?page=36',
    },
    {
      tema: '3. Magerit',
      referencia:
        'PAE, Portal Administración Electrónica. (2012). MAGERIT versión 3 (versión español): Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información. ',
      tipo: 'Libros digitales',
      link:
        'https://administracionelectronica.gob.es/pae_Home/pae_Documentacion/pae_Metodolog/pae_Magerit.html ',
    },
    {
      tema: '2. Controles de seguridad',
      referencia:
        'ICONTEC (2018). NTC-ISO 31000:2018 - Gestión del Riesgo. Directrices. ',
      tipo: 'Libros digitales',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=74790 ',
    },
    {
      tema: '2. Controles de seguridad',
      referencia:
        'ICONTEC (2018). NTC-ISO-IEC 27001:2013 – Tecnología de la información. Técnicas de seguridad. Sistemas de gestión de la seguridad de la información. Requisitos.',
      tipo: 'Libros digitales',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=6387',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo de Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto Temático',
        centro:
          'Centro de la Industria la Empresa y los Servicios - Norte de Santander',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Palito',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
