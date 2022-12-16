<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Margerit

    .cont_3_1(style="position:relative")
      figure(style="position:relative")
        img(src="@/assets/curso/tema3/1.png" data-aos="zoom-in-up")
      p.mt-5(data-aos="fade-up" style="position:relative") Magerit, se presenta como una metodología para la gestión del riesgo, la cual está basada en la norma ISO 31000, precisamente en su apartado 4.4 denominado Implementar la Gestión del Riesgo, lo que la consolida como un marco para su gestión, como lo presenta la misma metodología en la figura No 19.

      .col-lg-10.m-auto.mt-5(style="position:relative")
        .titulo-sexto.color-acento-contenido.mb-0(style="position:relative")
          h5 Figura 19.
          span Marco de trabajo para la gestión de riesgos de acuerdo a ISO 31000.
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema3/3.svg" data-aos="zoom-in-up")
          img.d-block.d-lg-none(src="@/assets/curso/tema3/4.svg" data-aos="zoom-in-up")
        figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. adaptado de MAGERIT– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información

    p.mt-5(data-aos="fade-up") Las propuestas normativas buscan identificar el nivel de vulnerabilidad de los activos de información, siendo Magerit preferida por su sencillez y su objetividad en el momento de su aplicación para la evaluación del riesgo. A continuación se exponen los objetivos de MAGERIT.

    .row.mt-5.col-lg-10.m-auto(style="background-color:#D5CEF8;border-top-right-radius:140px;")
      .col-xl-4.col-lg-5.p-0
        figure(style="position:relative")
          img(src="@/assets/curso/tema3/5.svg" data-aos="fade-right")
      .col-xl-8.col-lg-7.row.m-0(style="place-self:center;")
        .col(style="place-self:center")
          p.mb-0(data-aos="fade-up") Objetivos de MAGERIT
          ul.lista-ul.mt-4
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Busca con su aplicación mejorar la concienciación de la existencia de riesgos. 
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Importancia de realizar una adecuada gestión.
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Ofrece un modelo su análisis. 
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Determinar las rutas para su gestión.
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Ayuda a las organizaciones con la evaluación de la seguridad en las mismas.
        .col-auto.pe-0
          figure(style="position:relative")
            img(src="@/assets/curso/tema3/6.svg" data-aos="fade-left")

    .col-lg-10.m-auto.mt-5
      p(data-aos="fade-up") A partir de las siguientes dimensiones de seguridad, se debe realizar la valoración en cada uno de los activos para proceder con el ejercicio de análisis de riesgo, así:

    .cont_3_2.mt-5(style="position:relative")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.mt-5.col-lg-10.m-auto
        .col-lg-8.mb-4.mb-lg-0(style="place-self:center;position:relative")
          p(data-aos="fade-up") El procedimiento de análisis de riesgos se puede desarrollar en cualquier tipo de organización que desarrolle sus funciones apoyado en sistemas de información y comunicaciones, independiente del sector bien sea público o privado, y se recomienda realizarlo con mayor razón cuando se manejan datos confidenciales.
          p.mt-4(data-aos="fade-up") Los pasos generales para desarrollar un análisis de riesgos, relacionados con la seguridad informática, son los siguientes:
        .col-lg-4(style="place-self:center;position:relative")
          figure(style="position:relative")
            img(src="@/assets/curso/tema3/8.png" data-aos="fade-left")
      figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1  Identificación de activos

    p(data-aos="fade-up") Se debe tener en cuenta que se deben identificar los activos relacionados con los procesos de negocio, que se deben proteger, teniendo en cuenta los elementos de un sistema de información.
    p.mt-4(data-aos="fade-up") La identificación permite clasificar los activos a los que se les debe brindar mayor protección, así:

    .col-lg-10.m-auto.mt-5
      figure
        img.d-none.d-lg-block(src="@/assets/curso/tema3/9.svg" data-aos="zoom-in-up")
        img.d-block.d-lg-none(src="@/assets/curso/tema3/10.svg" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") Se establecen las escalas de medición cualitativa y cuantitativa a continuación se exponen:

    .row.mt-5
      .col-lg-6.p-0
        .h-100.p-4.pb-5(style="background-color:#36257B;")
          .col-lg-10.m-auto
            .text-center
              figure(style="position:relative")
                img(src="@/assets/curso/tema3/11.png" data-aos="zoom-in-up" style="max-width:180px;display:inline;")
            p.text-white.mt-5(data-aos="fade-up") #[strong Valoración cualitativa:] es un proceso que permite analizar las características y problemas del fenómeno a evaluar permitiendo identificar rápidamente el peso de cada activo en comparación a los demás.
      .col-lg-6.p-0
        .h-100.p-4.pb-5(style="background-color:#583AE2;")
          .col-lg-10.m-auto
            .text-center
              figure(style="position:relative")
                img(src="@/assets/curso/tema3/12.png" data-aos="zoom-in-up" style="max-width:180px;display:inline;")
            p.text-white.mt-5(data-aos="fade-up") #[strong Valoración cuantitativa:] estas valoraciones, se presentan en escalas numéricas absolutas las cuales son algo complejas de identificar; pero permiten establecer operaciones matemáticas para sus evaluaciones.

    p.mt-5(data-aos="fade-up") Un último elemento a tener presente en la caracterización de los activos es valor de la interrupción del servicio, ya que esta valoración se diferencia de las anteriores porque afecta directamente la disponibilidad, y se requiere determinar el costo de tener por fuera de servicio por un determinado tiempo, esta valoración se debe establecer en una línea de tiempo que permita identificar claramente las consecuencias de no contar con un sistema de información disponible y su impacto para la organización, por lo general se presentan en gráficos como el que se presenta en la figura No. 20 a continuación:

    .col-lg-10.m-auto.mt-5(style="position:relative")
      .titulo-sexto.color-acento-contenido.mb-0(style="position:relative")
        h5 Figura 20.
        span Coste de interrupción de la disponibilidad.
      figure
        img.d-none.d-lg-block(src="@/assets/curso/tema3/13.svg" data-aos="zoom-in-up")
        img.d-block.d-lg-none(src="@/assets/curso/tema3/14.svg" data-aos="zoom-in-up")
      figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota. https://cutt.ly/KB7x2kX 

      p.mt-5(data-aos="fade-up") Los anteriores criterios son necesarios para identificar y caracterizar cada uno de los activos de la organización, para continuar con la identificación de amenazas para cada uno de estos.

    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2  Identificación de amenazas

    p(data-aos="fade-up") La  metodología Magerit, permite identificar las amenazas de cada uno de los activos de información en la organización, para lo cual, nos sugiere una serie de amenazas “típicas”, que mostramos a continuación:

    .tarjeta.p-5.mt-5.cont_slyder1
      SlyderA(tipo="b")
        .row
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
            h5(style="color:#36257B;") Natural
            p Todos los eventos que origina la naturaleza y puede afectar un activo de información, como desastres naturales, incendios accidentales, tormentas, temperaturas extremas, terremotos e inundaciones, y amenazas ocasionadas por el hombre.
          .col-lg-6(style="place-self:center")
            figure
              img(src='@/assets/curso/tema3/16.png')
        .row
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
            h5(style="color:#36257B;") Industrial
            p Generados por efectos resultantes o asociadas a eventos industriales; cualquier empresa con operaciones industriales digitalizadas es susceptible de ser atacada, las más afectadas son las proveedoras de electricidad, agua, petróleo y gas, las alimentarias y las farmacéuticas.   
          .col-lg-6(style="place-self:center")
            figure
              img(src='@/assets/curso/tema3/17.png')
        .row
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
            h5(style="color:#36257B;") Errores en las aplicaciones
            p Vulnerabilidades técnicas en programas, normalmente se presentan por errores de código, fallas en el diseño de #[em software], problemas en la implementación o malas prácticas de configuración de activos.   
          .col-lg-6(style="place-self:center")
            figure
              img(src='@/assets/curso/tema3/18.png')
        .row
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
            h5(style="color:#36257B;") Causados de forma accidental
            p Originados por personas generalmente por error o omisión, pueden ser errores sistemáticos y errores accidentales.
          .col-lg-6(style="place-self:center")
            figure
              img(src='@/assets/curso/tema3/19.png')
        .row
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
            h5(style="color:#36257B;") Causadas por las personas de forma deliberada
            p Según el Artículo 269D: Daño Informático. El que, sin estar facultado para ello, destruya, dañe, borre, deteriore, altere o suprima datos informáticos, o un sistema de tratamiento de información o sus partes o componentes lógicos causados por terceros, o por personas con intereses propios.
          .col-lg-6(style="place-self:center")
            figure
              img(src='@/assets/curso/tema3/20.png')
        .row
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
            h5(style="color:#36257B;") Identificación y tipificación de activos
            p Una vez se haya realizado la identificación de las amenazas, se procede a realizar la valoración de las mismas, y se requiere identificar cual sería el efecto de influencia sobre el activo. 
          .col-lg-6(style="place-self:center")
            figure
              img(src='@/assets/curso/tema3/21.png')
        .row
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
            h5(style="color:#36257B;") Degradación
            p La degradación mide el daño causado por un incidente en el supuesto de que ocurriera, y esta se suele caracterizar como una fracción del valor del activo y da origen a expresiones como “activo totalmente degradado” o “degradado” en una pequeña fracción.
          .col-lg-6(style="place-self:center")
            figure
              img(src='@/assets/curso/tema3/22.png')
        .row
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
            h5(style="color:#36257B;") Probabilidad
            p Que tan probable es que una amenaza sea aprovechada y se materializarse un riesgo.
          .col-lg-6(style="place-self:center")
            figure
              img(src='@/assets/curso/tema3/23.png')

    .col-lg-10.m-auto.mt-5
      p(data-aos="fade-up") La complejidad de ocurrencia es compleja de determinar y expresar, y se puede apoyar en escalas de tipo nominal, como se muestra en la siguiente tabla:

      .col-lg-8.m-auto.mt-5
        .titulo-sexto.color-acento-contenido(style="position:relative")
          h5 Tabla 2.
          span Ejemplo de escala de degradación del valor por probabilidad de ocurrencia.

        .tabla-a.color-acento-botones
          table(style="max-width:100%;min-width:100%;")
            caption(style="background-color:#F6F6F6;font-weight:400;") Nota. MAGERIT– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información https://www.ccn-cert.cni.es/documentos-publicos/1789-magerit-libro-i-metodo/file.html
            tbody
              tr(style="background-color:#D1F1F6;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") MA
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Muy alta
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Casi seguro
                td.p-4(style="border:0;") Fácil
              tr(style="background-color:#fff;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") A
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Alta
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Muy alto
                td.p-4(style="border:0;") Medio
              tr(style="background-color:#D1F1F6;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") M
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Media
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Posible
                td.p-4(style="border:0;") Difícil
              tr(style="background-color:#fff;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") B
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Baja
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Poco probable
                td.p-4(style="border:0;") Muy difícil
              tr(style="background-color:#D1F1F6;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") MB
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Muy baja
                td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Muy raro
                td.p-4(style="border:0;") Extremadamente difícil

    p.mt-5(data-aos="fade-up") Ahora bien, en término de periodo de tiempo, lo más recomendado es realizarlo en términos de 1 año para establecer una frecuencia, de tal manera se puede establecer una escala de probabilidad de ocurrencia como se muestra en la siguiente tabla:

    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(style="position:relative")
        h5 Tabla 3.
        span Escala de probabilidad de ocurrencia.

      .tabla-a.color-acento-botones
        table(style="max-width:100%;min-width:100%;")
          caption(style="background-color:#F6F6F6;font-weight:400;") Nota. MAGERIT– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información https://www.ccn-cert.cni.es/documentos-publicos/1789-magerit-libro-i-metodo/file.html
          tbody
            tr(style="background-color:#D5CEF8;")
              td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") MA
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 100
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Muy frecuente
              td.p-4(style="border:0;") A diario
            tr(style="background-color:#fff;")
              td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") A
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 10
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Frecuente
              td.p-4(style="border:0;") Mensualmente
            tr(style="background-color:#D5CEF8;")
              td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") M
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 1
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Normal
              td.p-4(style="border:0;") Una vez al año
            tr(style="background-color:#fff;")
              td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") B
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 1/10
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Poco frecuente
              td.p-4(style="border:0;") Cada varios años
            tr(style="background-color:#D5CEF8;")
              td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") MB
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 1/100
              td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Muy poco frecuente
              td.p-4(style="border:0;") Siglos

    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3  Determinación del impacto potencial

    p(data-aos="fade-up") El impacto potencial, se le llama a la medida del daño sobre un activo en particular, a partir de la materialización de una amenaza, este impacto se puede determinar una vez se haya establecido el valor de los activos y su degradación que causa dicha amenaza.
    p.mt-4(data-aos="fade-up") Teniendo en cuenta lo anterior sobre la medida del daño se establece el impacto de la siguiente manera:

    .row.mt-5.pt-5.pb-5.pe-5(style="background-color:#E3E5FB;")
      .col-xl-4.col-lg-5.ps-0.d-none.d-lg-block
        figure(style="position:relative")
          img(src="@/assets/curso/tema3/24.png" data-aos="fade-right")
      .col-xl-8.col-lg-7(style="place-self:center;")
        ul.lista-ul
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | Se calcula para cada activo, por cada amenaza y en cada dimensión de valoración.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | El impacto se incrementa, cuando mayor es el valor propio de un activo y mayor se degrade el activo de información, así como cuando el activo depende de otros sistemas o viceversa.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | El impacto es mayor de acuerdo a su dependencia del mismo.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | Este impacto, permitirá identificar las consecuencias que tendría una afectación y cómo afectaría a la organización directamente.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | El impacto potencial, se puede clasificar de la siguiente manera.
        .mt-4.bg-white.p-4
          p(data-aos="fade-up") #[strong Impacto acumulado:]
          ul.lista-ul--color.mt-3
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | Se tiene como referencia el valor acumulado.
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | Las amenazas a las que se puede enfrentar un activo.
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | Puede acumularse sobre activos que no sean dependientes entre sí, y no hereden valor de un activo superior. 
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | No se recomienda agregar el impacto acumulado sobre activos que no sean independientes, dado que supondría ponderar el impacto al incluir varias veces el valor acumulado de activos superiores.
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | Pueden concluir el impacto de otras amenazas sobre un mismo activo, aunque se recomienda considerar en qué medida las otras amenazas son independientes y pueden ser concurrentes.
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | El impacto de una amenaza se puede agregar en diferentes dimensiones.
          p.mt-4(data-aos="fade-up") #[strong Impacto repercutido:] Se puede aplicar sobre activos de diferente tipo y se determina sobre un activo partir de:
          ul.lista-ul--color.mt-3
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | La importancia para la organización.
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | Las amenazas a las que están expuestas los activos de los que depende.
            li.mb-0(data-aos="fade-up")
              i.lista-ul__vineta
              | El impacto de una amenaza se puede agregar en diferentes dimensiones.

    Separador.mt-5

    .cont_3_3.mt-5(style="position:relative")
      .titulo-segundo(style="position:relative")
        h2#t_3_4 3.4  Determinación del Riesgo Potencial
      p(data-aos="fade-up" style="position:relative") El riesgo potencial, se le llama a la medida del daño probable sobre un sistema, teniendo en cuenta el impacto de las amenazas de cada uno de los activos, este riesgo crece con el impacto y la probabilidad, estableciendo las zonas de riesgo como se determinan a continuación:

      .row.mt-5(style="position:relative")
        .col-lg-6
          .row.m-0.pt-4.pb-4.mb-4.mb-lg-0(style="border-top:1px #36257B solid;border-bottom:1px #36257B solid;")
            .col-auto(style="place-self:center")
              figure
                img(src="@/assets/curso/tema3/26.png" data-aos="fade-right")
            .col(style="place-self:center")
              h5(data-aos="fade-up") Zona 1
              p.mt-3.mb-0(data-aos="fade-up") Zona de riesgo muy probable, así como de alto impacto.
          .row.m-0.pt-4.pb-4.mb-4.mb-lg-0(style="border-bottom:1px #36257B solid;")
            .col-auto(style="place-self:center")
              figure
                img(src="@/assets/curso/tema3/27.png" data-aos="fade-right")
            .col(style="place-self:center")
              h5(data-aos="fade-up") Zona 2
              p.mt-3.mb-0(data-aos="fade-up") Franja amarilla: abarca un amplio espectro que representa desde las diferentes situaciones. improbables y de impacto medio, hasta situaciones muy probables, pero de impacto reducido.
        .col-lg-6
          .row.m-0.pt-4.pb-4.mb-4.mb-lg-0(style="border-top:1px #36257B solid;border-bottom:1px #36257B solid;")
            .col-auto(style="place-self:center")
              figure
                img(src="@/assets/curso/tema3/28.png" data-aos="fade-right")
            .col(style="place-self:center")
              h5(data-aos="fade-up") Zona 3
              p.mt-3.mb-0(data-aos="fade-up") Riesgos poco probables y de bajo impacto.
          .row.m-0.pt-5.pb-4.mb-4.mb-lg-0(style="border-bottom:1px #36257B solid;")
            .col-auto(style="place-self:center")
              figure
                img(src="@/assets/curso/tema3/29.png" data-aos="fade-right")
            .col(style="place-self:center")
              h5(data-aos="fade-up") Zona 4
              p.mt-3.mb-0(data-aos="fade-up") Riesgos improbables, de muy alto impacto.

      p.mt-5.text-center(data-aos="fade-up" style="position:relative") Estas zonas se pueden representar en un mapa de calor, como se muestra en la figura No. 21.

      .col-lg-10.m-auto.mt-5
        .titulo-sexto.color-acento-contenido.mb-0(style="position:relative")
          h5 Figura 21.
          span El riesgo en función del impacto y la probabilidad.
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema3/30.svg" data-aos="zoom-in-up")
          img.d-block.d-lg-none(src="@/assets/curso/tema3/31.svg" data-aos="zoom-in-up")
        figcaption(style="background-color:#F6F6F6;font-weight:400;position:relative") Nota: Recuperado de MAGERIT– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información.

    p.mt-5(data-aos="fade-up") A continuación se va a ampliar la información sobre la clasificación de los riesgos:

    .mt-5.row.mb-5(style="background-color:#40327B;border-top-right-radius:150px;border-bottom-right-radius:150px;max-width:300px;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h4.text-white.mb-0(data-aos="fade-up") Riesgo acumulado

    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center")
        p(data-aos="fade-up") Este riesgo se debe calcular en cada activo amenaza y dimensión de seguridad, convirtiéndose en una función del valor acumulado, la degradación causada y la probabilidad de ocurrencia de la amenaza.
        p.mt-4(data-aos="fade-up") Cuando se calcula sobre los activos base de la información, permite identificar las salvaguardas necesarias para aplicar en los entornos de trabajo: endurecimiento de equipos, #[em backup], etc.
      .col-lg-4(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/32.png" data-aos="fade-left")

    .mt-5.row.mb-5(style="background-color:#40327B;border-top-right-radius:150px;border-bottom-right-radius:150px;max-width:300px;")
      .col-auto.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h4.text-white.mb-0(data-aos="fade-up") Riesgo repercutido

    p(data-aos="fade-up") Este riesgo repercutido se obtiene para activo, amenaza y dimensión de valoración, convirtiéndose en una función del valor propio, la degradación causada y la probabilidad de la amenaza.
    p.mt-4(data-aos="fade-up") Este riesgo, permite determinar las consecuencias de las incidencias técnicas sobre la finalidad del sistema de información. Ya que se consolida como un recurso gerencial que permite la toma de decisiones críticas de un análisis de riesgos.

    .row.mt-5.pt-0.pb-4.pe-5.col-xl-10.m-auto(style="background-color:#D5CEF8;border-radius:30px;")
      .col-xl-4.col-lg-5.ps-0.col-sm-6.col-10.mb-4.mb-lg-0
        figure(style="position:relative")
          img(src="@/assets/curso/tema3/33.png" data-aos="fade-right")
      .col-xl-8.col-lg-7(style="place-self:center;")
        p(data-aos="fade-up") Agregación de riesgos: bajo las siguientes condiciones, se permite la agrupación de los riesgos:
        ul.lista-ul
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | Se puede agregar el riesgo repercutido a diferentes activos,
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | Se puede agregar el impacto acumulado sobre activos que no sean dependientes entre sí, y no hereden valor de un activo superior común.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | No debe agregarse el riesgo acumulado sobre activos que no sean independientes, pues ello supondría sobre ponderar el riesgo al incluir varias veces el valor acumulado de activos superiores.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | Puede agregarse el riesgo de diferentes amenazas sobre un mismo activo, aunque conviene considerar en qué medida las diferentes amenazas son independientes y pueden ser concurrentes.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | Se puede agregar el riesgo de una amenaza en diferentes dimensiones.

    Separador.mt-5

    .titulo-segundo
      h2#t_3_5 3.5 Establecimiento de salvaguardas

    p(data-aos="fade-up") A partir de este punto se procede a determinar los controles que serán necesarios para reducir el riesgo, las amenazas, algunas amenazas pueden ser controladas a partir de cambios y acciones de gestión sobre algún activo, pero en otras ocasiones, estas deberán de intervenir a partir de controles técnicos tecnológicos o procedimentales.
    p.mt-4(data-aos="fade-up") Describimos las acciones que se deben aplicar para reducir el riesgo informático:

    figure
      img.d-none.d-lg-block(src="@/assets/curso/tema3/34.svg" data-aos="zoom-in-up")
      img.d-block.d-lg-none(src="@/assets/curso/tema3/35.svg" data-aos="zoom-in-up")

    .cont_3_4.mt-5(style="position:relative")
      .col-lg-10.m-auto
        p(data-aos="fade-up" style="position:relative") #[strong Tipo de protección:] la determinación del tipo de protección es fundamental para identificar el tipo de protección, a continuación, en la tabla No. 4 vamos a reconocer los tipos sugeridos por la metodología Magerit.
        .titulo-sexto.color-acento-contenido.mt-5(style="position:relative")
          h5 Tabla 4.
          span Tipos de protección sugeridos por Magerit.

        .tabla-a.color-acento-botones.mt-5(style="position:relative")
          table
            caption(style="background-color:#F6F6F6;font-weight:400;") Nota. Recuperado de MAGERIT– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información https://www.ccn-cert.cni.es/documentos-publicos/1789-magerit-libro-i-metodo/file.html
            thead(style="border:0;")
              tr(style="background-color:#36257B;")
                th.p-4.text-white.text-center(style="border:0;font-size:17px;") Tipo Protección
                th.p-4.text-white.text-center(style="border:0;font-size:17px;") Descripción
            tbody
              tr(style="background-color:#fff;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [PR] Prevención
                td.p-4(style="border:0") 
                  p Salvaguardas preventivas que reducen las oportunidades de que un incidente ocurra. Si la salvaguarda falla y el incidente llega a ocurrir, los daños son los mismos.
                  p.mt-4 Ejemplos: autorización previa de los usuarios, gestión de privilegios, planificación de capacidades, metodología segura de desarrollo de #[em software], pruebas en preproducción, segregación de tareas
              tr(style="background-color:#D1F1F6;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [DR] Disuasión
                td.p-4(style="border:0;")
                  p Salvaguarda disuasoria, tiene efecto sobre los atacantes, reduciendo la intención de que estos se atrevan a atacar un activo.
                  p.mt-4 Ejemplos: vallas elevadas, guardias de seguridad, avisos sobre la persecución del delito o persecución del delincuente.
              tr(style="background-color:#fff;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [EL] Eliminación
                td.p-4(style="border:0") 
                  p Son salvaguardas que eliminan un incidente, impidiendo que éste tenga lugar. Actúan antes de que el incidente se haya producido. No reducen los daños caso de que la salvaguarda no sea perfecta y el incidente llegue a ocurrir.
                  p.mt-4 Ejemplos: eliminación de cuentas estándar, de cuentas sin contraseña, de servicios innecesarios, … ; en general, todo lo que tenga que ver con la fortificación o bastionado, ..., cifrado de la información, ..., armarios ignífugos, …
              tr(style="background-color:#D1F1F6;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [IM] Minimización del impacto / limitación del impacto
                td.p-4(style="border:0;")
                  p Salvaguarda que minimiza o limita el impacto acotando las consecuencias de un incidente.
                  p.mt-4 Ejemplos: desconexión de redes o equipos en caso de ataque, detención de servicios en caso de ataque, seguros de cobertura, cumplimiento de la legislación vigente
              tr(style="background-color:#fff;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [CR] Corrección
                td.p-4(style="border:0") 
                  p Salvaguarda que actúa después de un incidente, ejerciendo una reparación al activo. 
                  p.mt-4 Ejemplos: gestión de incidentes, líneas de comunicación alternativas, fuentes de alimentación redundantes, ...
              tr(style="background-color:#D1F1F6;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [RC] Recuperación
                td.p-4(style="border:0;")
                  p Salvaguarda que ofrece recuperación a un activo que ha sufrido una alteración, regresando al estado útil y viable, 
                  p.mt-4 Ejemplos: copias de seguridad (back-up)
              tr(style="background-color:#fff;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [MN] Monitorización
                td.p-4(style="border:0") 
                  p Salvaguardas enfocadas en la vigilancia y monitoreo de activos para identificar posibles cambios o alteraciones en el normal comportamiento de un activo de información.
                  p.mt-4 Ejemplos: registros de actividad, registro de descargas de web, ...
              tr(style="background-color:#D1F1F6;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [DC] detección
                td.p-4(style="border:0;")
                  p Salvaguarda que detecta un ataque, determinando lo que está sucediendo. No necesariamente debe detener la acción, pero sí permite establecer las medidas mínimas necesarias para su protección.
                  p.mt-4 Ejemplos: antivirus, IDS, detectores de incendio, ...
              tr(style="background-color:#fff;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [AW] Concienciación
                td.p-4(style="border:0") 
                  p Actividades relacionadas con la transferencia del conocimiento para la seguridad de todos los actores involucrados en la organización y que dependen de los activos de información.
                  p.mt-4 Ejemplos: cursos de concienciación, cursos de formación, ...
              tr(style="background-color:#D1F1F6;")
                td.p-4(style="border:0;font-weight:bold;border-right:1px #AFAFAF solid;") [AD] Administración
                td.p-4(style="border:0;")
                  p Salvaguardas relacionadas con los componentes de seguridad del sistema.
                  p.mt-4 Ejemplos: inventario de activos, análisis de riesgos, plan de continuidad.

        p.mt-5(data-aos="fade-up") De acuerdo al modelo anterior, Podremos determinar y agrupas las salvaguardas de acuerdo a su efecto sobre una amenaza, como se puede identificar en la tabla No 5.

        .titulo-sexto.color-acento-contenido.mt-5(style="position:relative")
          h5 Tabla 5.
          span Tipos de salvaguardas sugeridos por Magerit.

        .tabla-a.color-acento-botones.mt-5(style="position:relative")
          table
            caption(style="background-color:#F6F6F6;font-weight:400;") Nota. https://cutt.ly/DB7caei
            thead(style="border:0;")
              tr(style="background-color:#36257B;")
                th.p-4.text-white.text-center(style="border:0;font-size:17px;") Efecto
                th.p-4.text-white.text-center(style="border:0;font-size:17px;") A diario
            tbody
              tr(style="background-color:#D1F1F6;")
                td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Preventivas: reducen la probabilidad
                td.p-4.text-center(style="border:0") [PR] preventivas #[br] [DR] disuasorias #[br] [EL] eliminatorias
              tr(style="background-color:#fff;")
                td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Acotan la degradación
                td.p-4.text-center(style="border:0;") [IM] minimizadoras #[br] [CR] correctivas #[br] [RC] recuperativas
              tr(style="background-color:#D1F1F6;")
                td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Consolidan el efecto de las demás
                td.p-4.text-center(style="border:0") MN] de monitorización #[br] [DC] de detección #[br] [AW] de concienciación #[br] [AD] administrativas

    .col-lg-10.m-auto.mt-5
      p(data-aos="fade-up") Las salvaguardas también por la eficacia en el momento de actuar frente al riesgo para el cual fueron consideradas, una salvaguarda adecuada en 100% eficaz si combina los siguientes factores:
      .row.mt-4.pt-4.pb-0.pe-5(style="background-color:#D5CEF8;border-radius:30px;")
        .col-xl-5.col-lg-6.ps-0
          figure(style="position:relative")
            img(src="@/assets/curso/tema3/37.png" data-aos="fade-right")
        .col-xl-7.col-lg-6.p-5.p-md-0(style="place-self:center;")
          p(data-aos="fade-up") #[strong Desde el punto de vista técnico.]
          ul.lista-ul.mt-2
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Técnicamente adecuada para enfrentarse al riesgo que protege.
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Aplicación permanente.
          p.mt-3(data-aos="fade-up") #[strong Desde el punto de vista de operación de la salvaguarda.]
          ul.lista-ul.mt-2
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Perfectamente desplegada, configurada y mantenida.
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Existen procedimientos claros de uso normal y en caso de incidencias.
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Los usuarios están formados y concienciados.
            li.mb-0(data-aos="fade-up")
              i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
              | Existen controles que avisan de posibles fallos.

      p.mt-5(data-aos="fade-up") Entre una eficacia del 0% para aquellas que faltan y el 100% para aquellas que son idóneas y que están perfectamente implantadas, se estimará un grado de eficacia real en cada caso concreto. Para medir los aspectos organizativos, se puede emplear una escala de madurez que recoja en forma de factor corrector la confianza que merece el proceso de gestión de la salvaguarda:

    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(style="position:relative")
        h5 Tabla 6.
        span Eficacia y madurez de las salvaguardas.

      .tabla-a.color-acento-botones.mt-5(style="position:relative")
        table
          caption(style="background-color:#F6F6F6;font-weight:400;") Nota. https://cutt.ly/DB7caei
          thead(style="border:0;")
            tr(style="background-color:#36257B;")
              th.p-4.text-white.text-center(style="border:0;font-size:17px;") Factor
              th.p-4.text-white.text-center(style="border:0;font-size:17px;") Nivel
              th.p-4.text-white.text-center(style="border:0;font-size:17px;") Significado
          tbody
            tr(style="background-color:#D1F1F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") 0%
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") L0
              td.p-4.text-center(style="border:0") Inexistente
            tr(style="background-color:#fff;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") 
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") L1
              td.p-4.text-center(style="border:0;") Inicial / ad hoc
            tr(style="background-color:#D1F1F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") 
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") L2
              td.p-4.text-center(style="border:0") Reproducible, pero intuitivo
            tr(style="background-color:#fff;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") 
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") L3
              td.p-4.text-center(style="border:0;") Proceso definido
            tr(style="background-color:#D1F1F6;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") 
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") L4
              td.p-4.text-center(style="border:0") Gestionado y medible
            tr(style="background-color:#fff;")
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") 100%
              td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") L5
              td.p-4.text-center(style="border:0;") Optimizado

    Separador.mt-5

    .titulo-segundo
      h2#t_3_5 3.5 Impacto residual

    p(data-aos="fade-up") De acuerdo al conjunto de salvaguardas determinadas y desplegadas y una medida de la madurez de su proceso de gestión, el sistema queda en una situación de posible impacto que debe ser mínimo, al cual se le denomina residual. Y se consolida una vez hayamos modificado el impacto, desde un valor potencial a un valor residual.

    .row.mt-5.col-lg-10.m-auto.p-3.pe-0(style="background-color:#D1F1F6;border-radius:20px;")
      .col-lg-10.col-md-8.mb-4.mb-md-0(style="place-self:center")
        p.mb-0(data-aos="fade-up") Su cálculo es determinado a partir de la premisa de que un activo no ha sufrido cambio ni degradación, y que las salvaguardas implementadas han actuado de manera positiva evitando la consolidación de algún tipo de incidente.
      .col-lg-2.col-md-4.pe-0(style="place-self:center")
        figure.figura_3_1
          img(src="@/assets/curso/tema3/38.svg" data-aos="fade-left" style="position:relative;right:-50%;max-width:100px;")

    p.mt-5.text-center(data-aos="fade-up") El impacto residual puede calcularse a partir de los activos inferiores, o repercutido sobre los activos superiores.

    .row.mt-4.pt-4.pb-0.pe-5(style="background-color:#EAE6FB;")
      .col-xl-4.col-lg-5.ps-0.col-sm-7.col-8
        figure(style="position:relative")
          img(src="@/assets/curso/tema3/39.png" data-aos="fade-right")
      .col-xl-8.col-lg-7(style="place-self:center;")
        p(data-aos="fade-up") #[strong Riesgo residual]
        p.mt-4(data-aos="fade-up") Este riesgo residual, es calculado a partir del conjunto de salvaguardas implementadas y que conllevan a que un activo no esté sujeto a una potencial alteración en su calidad por ende no ha sido degradado.
        p.mt-4(data-aos="fade-up") El cálculo del riesgo residual se determina de la siguiente manera. 
        ul.lista-ul.mt-4
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | Tomando como referente que los activos no han cambiado, ni sus dependencias, sino solamente la magnitud de la degradación y la probabilidad de las amenazas, se repiten los cálculos de riesgo usando el impacto residual y la probabilidad residual de ocurrencia.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | La magnitud de la degradación se toma en consideración en el cálculo del impacto residual.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | La magnitud de la probabilidad residual tomando en cuenta la eficacia de las salvaguardas, es la proporción que resta entre la eficacia perfecta y la eficacia real.
          li.mb-0(data-aos="fade-up")
            i.fas.fa-circle(style="color:#1DBBD2;font-size:6px;")
            | El riesgo residual puede calcularse acumulado sobre los activos inferiores, o repercutido sobre los activos superiores.

    .col-lg-10.m-auto.mt-5
      p(data-aos="fade-up") Es así como a partir del establecimiento de las estimaciones y cálculos sugeridos, se permite evaluar y gestionar los riesgos sobre los activos de información en la organización, estos cálculos se pueden implementar en herramientas de gestión o a través de soluciones de hojas de cálculo que permitan realizar un ejercicio práctico y rápido por parte de las organizaciones.






   

</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1:before
  content: ''
  position: absolute
  width: 100%
  height: 100%
  right: -10%
  top: -18%
  background: url(../assets/curso/tema3/2.png)
  background-repeat: no-repeat
  background-size: 480px
  background-position: right
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema3/7.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.cont_slyder1
  background: url(../assets/curso/tema3/15.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: right
.slyder-a__bullets__item--active
  background-color: #40327B !important
  border-color: #40327B !important
.slyder-a__bullets__item
  background-color: #A097CC
  border: 0px !important
.lista-ul__vineta:before
  content: '- ' !important
.cont_3_3:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema3/25.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.cont_3_4:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema3/36.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
@media screen and (max-width: 720px)
  .figura_3_1
    margin: 0 auto
    text-align: center
  .figura_3_1 img
    right: 0% !important
    display: inline
</style>
