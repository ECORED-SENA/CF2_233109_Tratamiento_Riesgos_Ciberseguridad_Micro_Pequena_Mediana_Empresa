<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") El proceso de valoración del riesgo en los activos de la organización permite determinar el grado de criticidad de estos, frente a una posible amenaza y que a partir de un ejercicio de evaluación aplicando metodologías como la que indica la ISO 31000 o Magerit, se pueden establecer acciones básicas y necesarias para que estas amenazas no se materialicen y afecten el desarrollo de las operaciones de la organización.

    .cajon.color-acento-contenido.p-4.mt-5.col-lg-10.m-auto
      p.mb-0(data-aos="fade-up") A continuación, vamos a revisar algunos temas específicos relacionados con la valoración del riesgo y cómo la podemos aplicar a cualquier organización independientemente de su naturaleza, tamaño o sector económico.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/L9NilXPEvUE" title="Valoración del riesgo de ciberseguridad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Valoración del riesgo de ciberseguridad

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
