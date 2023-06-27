<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión del riesgo informático

    figure
      img(src="@/assets/curso/tema1/1.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") La gestión del riesgo informático se consolida como una práctica que busca a partir de metodologías, identificar oportunamente posibles vulnerabilidades que puedan ser aprovechadas mediante amenazas y evitar que se conviertan en un riesgo y mejor aún, que no se materialicen, evitando incidentes que conlleven a situaciones críticas; esta estrategia ayudar a determinar de manera preventiva cualquiera de estas situaciones y permite identificar los controles y salvaguardas necesarias para hacer frente y evitar que estas situaciones sucedan en las organizaciones.

    Separador.mt-5

    .cont_1_1.pt-5.pb-5.mt-5(style="position:relative;")
      .titulo-segundo(style="position:relative")
        h2#t_1_1 1.1  Objetivo, características y beneficios

      p(data-aos="fade-up" style="position:relative") La gestión del riesgo se consolida como un proceso que permite identificar, evaluar y proponer estrategias para enfrentar los riesgos que pueden presentarse ante un activo de información.
      p.mt-4(data-aos="fade-up" style="position:relative") Los objetivos, características y beneficios, son:

      .row.justify-content-center.mt-5.indicador__container(style="position:relative")
        .col-xl-4.col-lg-9.mb-5.mb-xl-0(style="position:relative")
          figure.container__tarjetas(data-aos="zoom-in-up" @mouseover="indicadorTarjetas = false" style="position:relative;overflow:hidden;")
            .indicador--hover(v-if="indicadorTarjetas")
            img(src="@/assets/curso/tema1/3.png")
            .contenido__tarjetas.pt-2.pb-2.ps-4.pe-4
              h5 #[i.fas.fa-angle-up.me-2(style="background-color:#fff;padding:.5rem .8rem;border-radius:100%;")] Objetivos
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  span Reconocer los tipos de riesgos que pueden afectar las operaciones   en una organización.
                li
                  i.lista-ul__vineta
                  span Evaluar y controlar los riesgos, a partir de la aplicación de salvaguardar.
        .col-xl-4.col-lg-9.mb-5.mb-xl-0
          figure.container__tarjetas(data-aos="zoom-in-up" @mouseover="indicadorTarjetas = false" style="position:relative;overflow:hidden;")
            img(src="@/assets/curso/tema1/4.png")
            .contenido__tarjetas.pt-2.pb-2.ps-4.pe-4
              h5 #[i.fas.fa-angle-up.me-2(style="background-color:#fff;padding:.5rem .8rem;border-radius:100%;")] Características
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  span La gestión del riesgo, debe ser un proceso continuo, nunca termina ni se interrumpe.
                li
                  i.lista-ul__vineta
                  span Aplica métodos para la atención de los riesgos identificados.
                li
                  i.lista-ul__vineta
                  span Debe ser incorporado dentro de la cultura organizacional.
        .col-xl-4.col-lg-9.mb-5.mb-xl-0
          figure.container__tarjetas(data-aos="zoom-in-up" @mouseover="indicadorTarjetas = false" style="position:relative;overflow:hidden;")
            img(src="@/assets/curso/tema1/5.png")
            .contenido__tarjetas.pt-2.pb-2.ps-4.pe-4
              h5 #[i.fas.fa-angle-up.me-2(style="background-color:#fff;padding:.5rem .8rem;border-radius:100%;")] Beneficios
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  span Optimización del proceso de toma de decisiones.
                li
                  i.lista-ul__vineta
                  span Ofrece una visión integrada del negocio.
                li
                  i.lista-ul__vineta
                  span Permite aprovechar los recursos.
                li
                  i.lista-ul__vineta
                  span Reduce los imprevistos causados por incidentes.
                li
                  i.lista-ul__vineta
                  span Permite fortalecer los sistemas de control.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2  Etapas

    p(data-aos="fade-up") La gestión del riesgo, de acuerdo a las normas específicas como son ISO 31000 o Magerit, establecen etapas que permiten abordar sus métodos para realizar una adecuada gestión del riesgo en las organizaciones a partir de 4 principales etapas. Estas etapas generales, permiten realizar un ejercicio dentro de las organizaciones, que buscan de manera sistemática y organizada, establecer la siguiente ruta:

    figure.mt-5.col-lg-10.m-auto.d-none.d-lg-block
      img(src="@/assets/curso/tema1/6a.svg" data-aos="zoom-in-up" alt="La imagen presenta las 4 etapas generales de la evaluación del riesgo, las cuales son identificar, evaluar, reaccionar y controlar.")

    .d-block.d-lg-none.mt-5
      figure.col-sm-8.col-10.m-auto
        img(src="@/assets/curso/tema1/6b.svg" data-aos="zoom-in-up" alt="La imagen presenta las 4 etapas generales de la evaluación del riesgo, las cuales son identificar, evaluar, reaccionar y controlar.")
      .row.mt-5(style="position:relative;z-index:2;")
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col-5.before1.ps-0.pt-3
          h4.mb-0.text-center(data-aos="fade-up") Identificar
          h1.mb-0(style="font-weight:400;font-size:6rem;" data-aos="fade-up") 01
      .p-4.pt-5(style="background-color:#EAE7FC;position:relative;top: -65px;z-index:0;")
        p.mt-3(data-aos="fade-up") Se deben  reconocer cada uno de los activos de información para el desarrollo de sus actividades, para que, a partir de estos, se pueda identificar las fuentes de riesgo de manera particular a cada uno de los activos, este reconocimiento debe ser riguroso y debe permitir caracterizar el grado de importancia para la misma organización.
      .row(style="position:relative;z-index:2;")
        .col
        .col-5.before2.pe-0.pt-3
          h4.mb-0.text-center(data-aos="fade-up") Evaluar
          h1.mb-0.text-end(style="font-weight:400;font-size:6rem;" data-aos="fade-up") 02
        .col-auto.ps-0
          figure
            img(src="@/assets/curso/tema1/13.svg" style="z-index:2;position:relative;")
      .p-4.pt-5(style="background-color:#D5CEF8;position:relative;top: -65px;z-index:0;")
        p.mt-3(data-aos="fade-up") Se deben  reconocer cada uno de los activos de información para el desarrollo de sus actividades, para que, a partir de estos, se pueda identificar las fuentes de riesgo de manera particular a cada uno de los activos, este reconocimiento debe ser riguroso y debe permitir caracterizar el grado de importancia para la misma organización.
      .row(style="position:relative;z-index:2;")
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/14.svg")
        .col-5.before1.ps-0.pt-3
          h4.mb-0.text-center(data-aos="fade-up") Reaccionar
          h1.mb-0(style="font-weight:400;font-size:6rem;" data-aos="fade-up") 03
      .p-4.pt-5(style="background-color:#EAE7FC;position:relative;top: -65px;z-index:0;")
        p.mt-3(data-aos="fade-up") En esta etapa, se establecerán las acciones necesarias, para controlar el riesgo identificado, esto se deberá de plantear mediante un plan de acción, con unos recursos y tiempos establecidos, los cuales deberán ser alcanzables y medibles por la organización.
      .row(style="position:relative;z-index:2;")
        .col
        .col-5.before2.pe-0.pt-3
          h4.mb-0.text-center(data-aos="fade-up") Controlar
          h1.mb-0.text-end(style="font-weight:400;font-size:6rem;" data-aos="fade-up") 04
        .col-auto.ps-0
          figure
            img(src="@/assets/curso/tema1/13.svg" style="z-index:2;position:relative;")
      .p-4.pt-5(style="background-color:#D5CEF8;position:relative;top: -65px;z-index:0;")
        p.mt-3(data-aos="fade-up") Esta etapa conlleva a realizar seguimiento y evaluación de los riesgos, de tal manera que permita identificar el nivel de control que se realiza sobre los mismos, a su vez, permitirá evaluar la efectividad de los controles propuestos con el fin de mejorar o reemplazar los controles establecidos.





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetas: true,
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
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema1/2.png)
  background-repeat: no-repeat
  background-size: cover
.contenido__tarjetas
  background-color: #C4FDDB
  position: absolute
  width: 100%
  bottom: 0
  transform: translateY(calc(100% - 50px))
  transition: all .4s ease-out
.container__tarjetas:hover .contenido__tarjetas
  transform: translateY(0)
.container__tarjetas:hover
  overflow: revert !important
.lista-ul__vineta:before
  content: '- ' !important
.before1 *,.before1,.before2 *,.before2
  position: relative
.before1:before
  content: ''
  position: absolute
  width: 100%
  height: 60%
  top: 0
  background-color: #BDEBF2
.before2:before
  content: ''
  position: absolute
  width: 100%
  height: 60%
  top: 0
  background-color: #BDEBF2
  z-index: 0
</style>
