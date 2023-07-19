<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Como hemos podido ver en el presente componente formativo, el ejercicio de evaluación de los riesgos que pueden afectar a los activos en las organizaciones requiere de análisis y valoraciones ajustadas a cada organización en particular, debido a que deben ser evaluados todos los aspectos y particularidades que permiten establecer la importancia y peso de sus activos, así mismo obedece a su sector económico y las condiciones en donde administre información crítica y/o confidencial.

    .cajon.color-secundario.p-4.mt-5.col-lg-10.m-auto(style="background-color:#D5CEF8;")
      p.mb-0(data-aos="fade-up") La importancia de adoptar metodologías y técnicas para estos procesos de evaluación del riesgo nos permite mantener una línea estándar para el desarrollo de las actividades y revisión de manera sistémica, así como la revisión periódica para su mejoramiento.

    p.mt-5(data-aos="fade-up") Así mismo, hemos visto cómo la identificación de las salvaguardas adecuadas para la gestión de estos riesgos, tomando como referentes normas internacionales, normas técnicas y buenas prácticas, permite mantener un nivel mínimo aceptable para afrontar los diferentes problemas que presentan las organizaciones.

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
