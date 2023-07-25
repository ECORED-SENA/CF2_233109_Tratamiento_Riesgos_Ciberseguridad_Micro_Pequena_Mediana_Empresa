<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Controles de seguridad

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.col-lg-10.m-auto
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La norma ISO/IEC 27001:2013, como norma fundamental para la implementación de sistemas de gestión de la seguridad de la información, nos propone en su Anexo A, una propuesta de controles bajo un esquema basada en dominios, los cuales tienen enfoque desde lo operativo, lógico, físico y legal, que a partir de su implementación, permiten controlar las posibles vulnerabilidades que se presentan en las organizaciones.

    p.mt-5(data-aos="fade-up") Los controles de seguridad se recomiendan sean implementados a partir del análisis de riesgos, esto permitirá hacer frente de manera asertiva a las necesidades identificadas en cada uno de los activos de información.


    .mt-5.row.mb-5(style="background-color:#40327B;border-top-right-radius:150px;border-bottom-right-radius:150px;max-width:300px;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h4.text-white.mb-0(data-aos="fade-up") Dominios

    p(data-aos="fade-up") Los controles que nos propone la norma ISO/IEC 27001:2013 en su anexo A, corresponden a las categorías y/o aspectos que deben ser abordados desde la estrategia de seguridad propuesta para contar con un nivel mínimo de resistencia ante cualquier riesgo, como se muestra en la siguiente figura.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 1.
      span Dominios de seguridad de la norma ISO/IEC 27001:2013.

    figure.mt-5
      img(src="@/assets/curso/tema2/3b.svg" data-aos="zoom-in-up" alt="La imagen presenta los dominios de la Norma ISO/IEC 270001:2013, que van de la A5 a la A18, los cuales representan la seguridad operativa, la seguridad lógica, la seguridad física y la seguridad legal.")
    figcaption.mt-1(style="background-color:#F6F6F6;font-weight:400;") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    .row.justify-content-center.mt-5
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/ISO_IEC_27001_2013.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo.] Dominios de seguridad de la norma ISO/IEC 27001:2013.


    p.mt-5(data-aos="fade-up") Estas categorías están clasificadas desde la A5 hasta el A18, que corresponden a 14 dominios que representan los niveles de seguridad como son: operativos, lógicos, físicos y legales; los cuales se pueden identificar desde el ámbito estratégico al igual que operativo. Lo anterior se puede observar en la figura No. 2

    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mb-0
        h5 Figura 2.
        span Ejemplo de dominio de la norma ISO/IEC 27001:2013

      figure
        img.d-none.d-lg-block(src="@/assets/curso/tema2/5b2.svg" data-aos="zoom-in-up" alt="La imagen presenta un ejemplo del dominio de la Norma ISO/IEC 27001-2013.")
        img.d-block.d-lg-none(src="@/assets/curso/tema2/6b2.svg" data-aos="zoom-in-up" alt="La imagen presenta un ejemplo del dominio de la Norma ISO/IEC 27001-2013.")
      figcaption(style="background-color:#F6F6F6;font-weight:400;") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    .cajon.color-acento-contenido.p-4.mt-5.col-lg-10.m-auto
      p.mb-0(data-aos="fade-up") Estos dominios permiten reconocer cada uno de los ámbitos de aplicación y administración, los cuales necesariamente deben ser tenidos en cuenta, estos 4 ámbitos son abordados desde la óptica de la organización y de acuerdo a sus necesidades, activos de información, relación con terceros y desde el análisis de riesgo que se debe realizar.

    .mt-5.row.mb-5(style="background-color:#40327B;border-top-right-radius:150px;border-bottom-right-radius:150px;max-width:300px;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h4.text-white.mb-0(data-aos="fade-up") Objetivos de control

    p.mt-5(data-aos="fade-up") Cada uno de los dominios de seguridad que nos presenta la norma ISO/IEC 27001:2013 descritos anteriormente, se encuentra divididos en categorías denominadas Objetivos de control el cual nos brinda las políticas principales de los controles de seguridad que se implementarán, revise la siguiente figura que muestra información al respecto.

    .col-xl-10.offset-xl-2.mt-5.row
      .titulo-sexto.color-acento-contenido.mb-0
        h5 Figura 3.
        span Objetivo de control de la norma ISO/IEC 27001:2013.
      .col-auto
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema2/7b.svg" data-aos="zoom-in-up" alt="La imagen presenta un ejemplo de los objetivos de control de la Norma ISO/IEC 27001-2013.")
          img.d-block.d-lg-none(src="@/assets/curso/tema2/9b.svg" data-aos="zoom-in-up" alt="La imagen presenta un ejemplo de los objetivos de control de la Norma ISO/IEC 27001-2013.")
        figcaption(style="background-color:#F6F6F6;font-weight:400;") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A
      .col.d-none.d-xl-block
        figure
          img(src="@/assets/curso/tema2/8.svg" data-aos="zoom-in-up")

    .cajon.color-secundario.p-4.mt-5.col-lg-10.m-auto(style="background-color:#D5CEF8;")
      p.mb-0(data-aos="fade-up") Estos objetivos de control como su nombre lo indica, representa aquello que se busca obtener con la aplicación de los controles de seguridad, de tal manera que, en un ejercicio de aplicación, su adopción corresponde a las necesidades y problemas que la organización quiere abordar.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1  Controles

    p(data-aos="fade-up") Los controles, se presentan como las propuestas y directrices para la implementación de una estrategia de seguridad, que puede ir desde el endurecimiento de la infraestructura hasta la consolidación de un sistema de gestión de la seguridad SGSI, con los cuales se busca garantizar los objetivos de seguridad de la organización.
    p.mt-4(data-aos="fade-up") En este orden de ideas, la estructura de los objetivos de control se presenta de acuerdo a la figura 4, en donde encontramos la idea principal, plasmada de manera general, acompañada de una descripción de la utilidad del mismo.

    .row.mt-5
      .col-lg-2.d-none.d-lg-block(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/10.svg" data-aos="zoom-in-up")
      .col-lg-8(style="place-self:center")
        .titulo-sexto.color-acento-contenido.mb-0
          h5 Figura 4.
          span Ejemplo de controles de la norma ISO/IEC 27001:2013.

        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema2/11b.svg" data-aos="zoom-in-up" alt="La imagen presenta un ejemplo de los controles de la Norma ISO/IEC 27001-2013.")
          img.d-block.d-lg-none(src="@/assets/curso/tema2/12b.svg" data-aos="zoom-in-up" alt="La imagen presenta un ejemplo de los controles de la Norma ISO/IEC 27001-2013.")
        figcaption(style="background-color:#F6F6F6;font-weight:400;") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    p.mt-5(data-aos="fade-up") Los dominios de seguridad que propone esta norma se encuentran estructurados de acuerdo a los componentes y elementos más relevantes para el mejoramiento de los activos de información y estos proponen los siguientes objetivos de control:

    .mt-5.cont_2_1(style="position:relative;")
      .cajon.color-acento-contenido.p-4
        p.mb-0(data-aos="fade-up") En una organización se deben de gestionar los activos de información de manera segura y responsable, por ello la norma nos recomienda que se cuente con políticas claras que apoyen el ejercicio de identificación y aseguramiento de los activos de la información. En la siguiente figura, podremos encontrar los #[strong objetivos] de control para la determinación de estas políticas.

      .col-lg-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido.mb-0(style="position:relative")
          h5 Figura 5.
          span A.5 Política para la seguridad de la información.
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema2/14b.svg" data-aos="zoom-in-up" alt="La imagen presenta la Política para la seguridad de la información, la cual se compone de la orientación de la dirección para la gestión de la seguridad de la información y esta a su vez de la política para la seguridad de la información y la revisión de las políticas para la seguridad de la información.")
          img.d-block.d-lg-none(src="@/assets/curso/tema2/15b.svg" data-aos="zoom-in-up" alt="La imagen presenta la Política para la seguridad de la información, la cual se compone de la orientación de la dirección para la gestión de la seguridad de la información y esta a su vez de la política para la seguridad de la información y la revisión de las políticas para la seguridad de la información.")
        figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

        p.mt-5(data-aos="fade-up" style="position:relative") Uno de los factores importantes en una organización es brindar las directrices para identificar y mantener seguros los activos de información, en la figura No. 6, podremos consultar los objetivos de control para la #[strong organización de la seguridad de la información.]

        .titulo-sexto.color-acento-contenido.mb-0.mt-5(style="position:relative")
          h5 Figura 6.
          span A.6 Organización de la seguridad de la información.
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema2/16b.svg" data-aos="zoom-in-up" alt="La imagen presenta la organización de la seguridad d ela información, la cual está compuesta por la organización interna y los dispositivos móviles y teletrabajo.")
          img.d-block.d-lg-none(src="@/assets/curso/tema2/17b.svg" data-aos="zoom-in-up" alt="La imagen presenta la organización de la seguridad d ela información, la cual está compuesta por la organización interna y los dispositivos móviles y teletrabajo.")
        figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota: Adaptada de ISO/IEC 27001:2013 – Anexo A

    .row.mt-5
      .col-auto(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/18.svg" data-aos="fade-right")
      .col(style="place-self:center")
        p.mb-0(data-aos="fade-up") Uno de los factores más débiles en seguridad será el factor humano, de acuerdo al instituto internacional de estudios en seguridad global “El error humano es la principal causa de infracciones de datos y no los ciberdelincuentes. Es aquí donde las compañías deben revisar sus protocolos” (INISEG, 2020). Para abordar estos factores humanos, la norma nos presenta en la figura No. 7 los siguientes objetivos de control.

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mb-0(style="position:relative")
        h5 Figura 7.
        span A.7 Seguridad de los recursos humanos.
      figure
        img.d-none.d-lg-block(src="@/assets/curso/tema2/19a2.svg" data-aos="zoom-in-up" alt="La imagen presenta la seguridad de los recursos humanos, la cual comprende: antes de asumir el empleo, durante la vigencia del empleo, y la terminación o cambio de empleo.")
        img.d-block.d-lg-none(src="@/assets/curso/tema2/19b2.svg" data-aos="zoom-in-up" alt="La imagen presenta la seguridad de los recursos humanos, la cual comprende: antes de asumir el empleo, durante la vigencia del empleo, y la terminación o cambio de empleo.")
      figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    .cajon.color-secundario.p-4.mt-5.col-lg-10.m-auto(style="background-color:#D5CEF8;")
      p.mb-0(data-aos="fade-up") La gestión de activos de información cobra vital importancia dado que estos deben mantenerse identificados, clasificados y salvaguardados; en la figura No. 8 encontramos los objetivos de control que establecen los #[strong controles necesarios para gestionar estos activos.]

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mb-0(style="position:relative")
        h5 Figura 8.
        span A.8 Gestión de activos.
      figure(style="position:relative")
        img.d-none.d-lg-block(src="@/assets/curso/tema2/21b.svg" data-aos="zoom-in-up" alt="La imagen presenta la gestión de activos, los cuales están compuestos por la responsabilidad por los activos, la clasificación de la información y el manejo de los medios.")
        img.d-block.d-lg-none(src="@/assets/curso/tema2/22b.svg" data-aos="zoom-in-up" alt="La imagen presenta la gestión de activos, los cuales están compuestos por la responsabilidad por los activos, la clasificación de la información y el manejo de los medios.")
      figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    .mt-5.cont_2_2(style="position:relative;")

      p(data-aos="fade-up" style="position:relative") #[br] Otro factor importante es la restricción al acceso a los activos de información, a continuación, en la figura No. 9 podremos encontrar los controles para gestionar estos accesos, prevaleciendo siempre la confidencialidad, privacidad y disponibilidad del activo de información.

      .col-lg-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido.mb-0(style="position:relative")
          h5 Figura 9.
          span A.9 Control de acceso.
        figure(style="position:relative")
          img.d-none.d-lg-block(src="@/assets/curso/tema2/24b.svg" data-aos="zoom-in-up" alt="La imagen presenta el control de acceso, el cual está compuesto por el requisito del negocio para el control del acceso, la gestión de acceso de usuarios, las responsabilidades de los usuarios y el control de acceso a sistemas y aplicaciones.")
          img.d-block.d-lg-none(src="@/assets/curso/tema2/25b.svg" data-aos="zoom-in-up" alt="La imagen presenta el control de acceso, el cual está compuesto por el requisito del negocio para el control del acceso, la gestión de acceso de usuarios, las responsabilidades de los usuarios y el control de acceso a sistemas y aplicaciones.")
        figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota: Adaptada de ISO/IEC 27001:2013 – Anexo A

    .row.mt-5
      .col-auto(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/26.svg" data-aos="fade-right")
      .col(style="place-self:center")
        p.mb-0(data-aos="fade-up") Para proteger la información de ser accedida por personas o sistemas no autorizados, se recomienda el uso de #[strong sistemas y técnicas de criptografía] con el fin de garantizar la confidencialidad e integridad de los mismos, en la figura No. 10 podremos encontrar los controles sugeridos por la norma.

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mb-0(style="position:relative")
        h5 Figura 10.
        span A.10 Criptografía.
      figure(style="position:relative")
        img.d-none.d-lg-block(src="@/assets/curso/tema2/27b.svg" data-aos="zoom-in-up" alt="La imagen presenta el control de acceso, el cual está compuesto por el requisito del negocio para el control del acceso, la gestión de acceso de usuarios, las responsabilidades de los usuarios y el control de acceso a sistemas y aplicaciones.")
        img.d-block.d-lg-none(src="@/assets/curso/tema2/28b.svg" data-aos="zoom-in-up" alt="La imagen presenta el control de acceso, el cual está compuesto por el requisito del negocio para el control del acceso, la gestión de acceso de usuarios, las responsabilidades de los usuarios y el control de acceso a sistemas y aplicaciones.")
      figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    .mt-5.cont_2_3(style="position:relative;")
      .col-lg-10.m-auto.mt-5
        .cajon.color-acento-contenido.p-4
          p.mb-0(data-aos="fade-up") Como buenas prácticas de seguridad, se recomienda reducir los riesgos asociados por daños directos o factores que puedan afectar los activos de información o el desarrollo de las operaciones en la organización, a continuación, en la figura No. 11, podremos encontrar los controles sugeridos para el aseguramiento físico como del entorno en donde se encuentran ubicados dichos activos.

        .titulo-sexto.color-acento-contenido.mb-0.mt-5(style="position:relative")
          h5 Figura 11.
          span A.11 Seguridad física y del entorno.
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema2/30.svg" data-aos="zoom-in-up" alt="La imagen presenta la seguridad física y del entorno, la cual la componen las áreas seguras y los equipos.")
          img.d-block.d-lg-none(src="@/assets/curso/tema2/31.svg" data-aos="zoom-in-up" alt="La imagen presenta la seguridad física y del entorno, la cual la componen las áreas seguras y los equipos.")
        figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    p.mt-5(data-aos="fade-up") El riesgo de que una organización sea afectada por un incidente es permanente, cada día se presentan nuevas amenazas que pueden interrumpir o dañar los activos de información de la organización, por ello, en la figura No. 12 se presentan algunos controles sugeridos para reducir este tipo de riesgos.

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mb-0.mt-5(style="position:relative")
        h5 Figura 12.
        span A.12 Seguridad de las operaciones.
      figure
        img.d-none.d-lg-block(src="@/assets/curso/tema2/32b2.svg" data-aos="zoom-in-up" alt="La imagen presenta la seguridad de las operaciones, la cual está compuesta por los procedimientos operacionales y responsabilidades, la protección contra códigos maliciosos, las copias de respaldo, el registro y seguimiento, el control de software operacional, la gestión de la vulnerabilidad técnica y las consideraciones sobre auditorías de sistemas de información.")
        img.d-block.d-lg-none(src="@/assets/curso/tema2/33b2.svg" data-aos="zoom-in-up" alt="La imagen presenta la seguridad de las operaciones, la cual está compuesta por los procedimientos operacionales y responsabilidades, la protección contra códigos maliciosos, las copias de respaldo, el registro y seguimiento, el control de software operacional, la gestión de la vulnerabilidad técnica y las consideraciones sobre auditorías de sistemas de información.")
      figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    .cajon.color-secundario.p-4.mt-5.col-lg-10.m-auto(style="background-color:#D5CEF8;")
      p.mb-0(data-aos="fade-up") Otro factor importante hoy en día, es la transmisión e intercambio de información, por ello en la figura No. 13, se presentan algunos controles que nos permiten gestionar la seguridad en las redes, así como en el proceso de transferencia e intercambio de información.

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mb-0.mt-5(style="position:relative")
        h5 Figura 13.
        span A.13 Seguridad de las comunicaciones.
      figure
        img.d-none.d-lg-block(src="@/assets/curso/tema2/34b.svg" data-aos="zoom-in-up" alt="La imagen presenta la seguridad de las comunicaciones, la cual está compuesta por la gestión de la seguridad de las redes y la transferencia de la información.")
        img.d-block.d-lg-none(src="@/assets/curso/tema2/35b.svg" data-aos="zoom-in-up" alt="La imagen presenta la seguridad de las comunicaciones, la cual está compuesta por la gestión de la seguridad de las redes y la transferencia de la información.")
      figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A


    .mt-5.cont_2_4(style="position:relative;")
      .row.mt-5(style="position:relative")
        .col-auto(style="place-self:center")
          figure
            img(src="@/assets/curso/tema2/36.svg" data-aos="fade-right")
        .col(style="place-self:center")
          p.mb-0(data-aos="fade-up") Actualmente, las organizaciones cuentan con departamentos o grupos encargados de desarrollar y mantener sus propias soluciones, en la figura No. 14, podemos encontrar controles que deben ser tenidos en cuenta en este tipo de actividades.
      .col-lg-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido.mb-0.mt-5(style="position:relative")
          h5 Figura 14.
          span A.14 Adquisición, desarrollo y manteniendo de sistemas.
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema2/38b3.svg" data-aos="zoom-in-up" alt="La imagen presenta la adquisición, desarrollo y mantenimiento de sistemas, el cual está compuesto por los requisitos de seguridad de los sistemas de información, seguridad en los procesos de desarrollo y soporte y datos de prueba.")
          img.d-block.d-lg-none(src="@/assets/curso/tema2/39b2.svg" data-aos="zoom-in-up" alt="La imagen presenta la adquisición, desarrollo y mantenimiento de sistemas, el cual está compuesto por los requisitos de seguridad de los sistemas de información, seguridad en los procesos de desarrollo y soporte y datos de prueba.")
        figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    p.mt-5(data-aos="fade-up") La relación con los proveedores de productos o servicios en la organización, debe estar alineada con las políticas de seguridad, y para este caso, en la figura No. 15 encontramos algunos controles sugeridos para asegurar un apropiado intercambio de información con sus proveedores.

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido.mb-0.mt-5(style="position:relative")
        h5 Figura 15.
        span A.15 Relaciones con los proveedores.
      figure
        img.d-none.d-lg-block(src="@/assets/curso/tema2/40b.svg" data-aos="zoom-in-up" alt="La imagen presenta las relaciones con los proveedores, donde se encuentra la seguridad de la información en las relaciones con los proveedores y la gestión de la prestación de servicios de proveedores.")
        img.d-block.d-lg-none(src="@/assets/curso/tema2/41b.svg" data-aos="zoom-in-up" alt="La imagen presenta las relaciones con los proveedores, donde se encuentra la seguridad de la información en las relaciones con los proveedores y la gestión de la prestación de servicios de proveedores.")
      figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    .col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4
        p.mb-0(data-aos="fade-up") Cualquier organización está sujeta a sufrir algún incidente de seguridad que afecte el desarrollo de sus funciones, a continuación, en la figura No. 16 encontramos algunos controles sugeridos para gestionar este tipo de incidentes y recuperarse lo más rápido posible.

      .titulo-sexto.color-acento-contenido.mb-0.mt-5(style="position:relative")
        h5 Figura 16.
        span A.16 Gestión de incidentes de seguridad de la información.
      figure
        img.d-none.d-lg-block(src="@/assets/curso/tema2/42b.svg" data-aos="zoom-in-up" alt="La imagen presenta la gestión de incidentes de seguridad de la información, el cual se compone de la gestión de incidentes y mejoras en la seguridad de la información.")
        img.d-block.d-lg-none(src="@/assets/curso/tema2/43b.svg" data-aos="zoom-in-up" alt="La imagen presenta la gestión de incidentes de seguridad de la información, el cual se compone de la gestión de incidentes y mejoras en la seguridad de la información.")
      figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 - Anexo A

    .mt-5.cont_2_5(style="position:relative;")
      p(data-aos="fade-up" style="position:relative") Garantizar la continuidad del negocio es un factor importante tras sufrir un incidente, por ello se presentan en la figura No. 17, los controles que garanticen que la organización podrá recuperarse en un mínimo tiempo, con una mínima pérdida de información.
      .col-lg-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido.mb-0.mt-5(style="position:relative")
          h5 Figura 17.
          span A.17 Aspectos de seguridad de la información de la gestión de continuidad de negocio.
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema2/45b.svg" data-aos="zoom-in-up" alt="La imagen presenta los aspectos de la seguridad de la información de la gestión de continuidad de negocio, comprendiendo la continuidad de seguridad de la información y las redundancias.")
          img.d-block.d-lg-none(src="@/assets/curso/tema2/46b.svg" data-aos="zoom-in-up" alt="La imagen presenta los aspectos de la seguridad de la información de la gestión de continuidad de negocio, comprendiendo la continuidad de seguridad de la información y las redundancias.")
        figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 - Anexo A
      .row.mt-5(style="position:relative")
        .col-auto(style="place-self:center")
          figure
            img(src="@/assets/curso/tema2/47.svg" data-aos="fade-right")
        .col(style="place-self:center")
          p.mb-0(data-aos="fade-up") Finalmente, el cumplimiento de los requisitos legales garantiza el actuar de la organización, y evitan incurrir en alguna falta que afecte en un futuro la organización, por ello, en la figura No. 18 se presentan los controles de cumplimiento que buscan reducir los riesgos al incurrir en una falta relacionada.
      .col-lg-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido.mb-0.mt-5(style="position:relative")
          h5 Figura 18.
          span A.18 Cumplimiento.
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema2/48c.svg" data-aos="zoom-in-up" alt="La imagen presenta el cumplimiento, el cual está compuesto por el cumplimiento de los requisitos legales y contractuales y las revisiones de seguridad de la información.")
          img.d-block.d-lg-none(src="@/assets/curso/tema2/48d.svg" data-aos="zoom-in-up" alt="La imagen presenta el cumplimiento, el cual está compuesto por el cumplimiento de los requisitos legales y contractuales y las revisiones de seguridad de la información.")
        figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. Adaptada de ISO/IEC 27001:2013 – Anexo A

    p.mt-5(data-aos="fade-up") Estos objetivos de control en profundidad pueden ser consultados en la Norma ISO/IEC 27001:2013 – Anexo A para identificar aspectos más en profundidad sobre los controles de seguridad.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2  Declaración de aplicabilidad

    p(data-aos="fade-up") Esta Declaración de Aplicabilidad o también conocido como Statement of Applicability (SoA), es un instrumento que consolida la relación completa de controles sugeridos por la Norma ISO/IEC 27001:2013, para la implementación de estrategias de seguridad, y sirve para presentar el detalle de aquellos controles que serán adoptados por la organización.

    .row.mt-5.pe-4.p-4.p-md-0(style="background-color:#D5CEF8")
      .col-lg-4.col-xl-3.col-md-6.mb-4.mb-md-0.p-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/50.svg" data-aos="fade-right")
      .col-xl-9.col-lg-8.col-md-6(style="place-self:center")
        p(data-aos="fade-up").pt-lg-3.pt-md-4 Este documento es construido desde el ejercicio de análisis de riesgos, por lo que se considera un documento de referencia tanto para la implementación de controles, así como para la evaluación de la eficacia de los mismos a futuro.
        p.mt-4.pb-lg-3.pb-md-4mb-0(data-aos="fade-up") En la tabla 1, podemos observar un ejemplo de documento de Declaración de Aplicabilidad, en donde se establecen los controles, su aplicación, su justificación, responsable, así como el plan de acción a realizar para su implementación.

    .titulo-sexto.color-acento-contenido.mt-5(style="position:relative")
      h5 Tabla 1.
      span Ejemplo de documento de Declaración de Aplicabilidad SoA.

    .tabla-a.color-acento-botones.mt-5
      table
        caption(style="background-color:#F6F6F6;font-weight:400;") Nota. https://cutt.ly/GB7xJM9
        thead(style="border:0;")
          tr(style="background-color:#36257B;")
            th.p-2.text-white(style="border:0;font-size:17px;") N°
            th.p-2.text-white(style="border:0;font-size:17px;") Dominio – Control general
            th.p-2.text-white(style="border:0;font-size:17px;") Descripción del control (consulta la norma de declaración de aplicabilidad Anexo A ISO 270012013)
            th.p-2.text-white(style="border:0;font-size:17px;") Aplica (Si/No)
            th.p-2.text-white(style="border:0;font-size:17px;") Justificación
            th.p-2.text-white(style="border:0;font-size:17px;") Responsabilidad
            th.p-2.text-white(style="border:0;font-size:17px;") Plan de acción
        tbody
          tr(style="background-color:#D1F1F6;")
            td.p-5(style="border:0;font-weight:bold;") A.5.1
            td.p-5.ps-0(style="border:0" colspan="6") #[strong Orientación de la Dirección para la Gestión de la Seguridad de la información:] brindar orientación y soporte, por parte de la Dirección, para la seguridad de la información de acuerdo con los requisitos del negocio y con las leyes y reglamentos pertinentes.
          tr(style="background-color:#fff;")
            td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") A.5.1.1
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Política para la seguridad de la información.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") La dirección debe aprobar, publicar y comunicar a todos los empleados y partes externas pertinentes, un documento de política de seguridad de la información.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Sí
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") El contar con la política de seguridad de la información de un punto de partida para la implementación en la organización.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Alta gerencia
            td.p-4(style="border:0;") La alta dirección de la Superintendencia de Sociedades aprobó la política de gestión integral y se ha comunicado a todos los funcionarios y las partes externas pertinentes a través de correo electrónico, intranet e internet.
          tr(style="background-color:#D1F1F6;")
            td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") A.5.1.2
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Revisión de las políticas para la seguridad de la información.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Se debe revisar la política de seguridad de la información a intervalos planificados, o si ocurren cambios significativos, para asegurar su conveniencia, suficiencia y eficacia continuas.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Sí
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") De acuerdo al ciclo PHVA se debe programar periodos de evaluación de la política de seguridad de la información la cual permite implementar mejoras permanentes.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Alta gerencia
            td.p-4(style="border:0;") La alta dirección de la Superintendencia de Sociedades realiza a intervalos planificados la revisión al sistema de gestión integrado en el proceso de gestión estratégica donde las salidas reflejan cambios a la política de gestión integral.

    .col-lg-10.m-auto.mt-5
      p.mb-0(data-aos="fade-up") Para el establecimiento de la declaración de aplicabilidad en una organización, esta debe ser diligenciada en su totalidad, realizando el registro de todos y cada uno de los controles establecidos por la norma, indicando cuáles serán aplicables en la organización, cuáles no y su razón de no aplicabilidad, así como la forma en que será aplicable hacia los activos de información, de esta manera permitirá a las partes interesadas identificar los controles que serán aplicados y evaluados.






</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/13.png)
  background-repeat: no-repeat
  background-size: cover
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/23.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.cont_2_3:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/29.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: top
.cont_2_4:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/37.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: top
.cont_2_5:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/44.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.tabla-a table
  min-width: 1000px
</style>
