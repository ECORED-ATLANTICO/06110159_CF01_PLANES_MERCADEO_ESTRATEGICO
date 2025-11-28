<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center.justify-content-center.mb-4(data-aos="fade-left")
        .col-12.col-sm-12.col-md-8.col-lg-5.mx-auto.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/intro/img01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-7.mb-4.mb-lg-0
          p El componente formativo Mercado potencial ofrece al aprendiz herramientas técnicas y prácticas para abordar el análisis de los mercados, la identificación de oportunidades y la definición de segmentos estratégicos. A partir del conocimiento de los tipos y variables del mercado, la investigación, las tendencias y la segmentación, se fortalecen las competencias analíticas y estratégicas para la formulación de planes de mercadeo coherentes con los objetivos organizacionales. 
          
          .row.align-items-center.round-1.bg-color-terciario-t20.p-3(data-aos="fade-left")
            .col-12.col-md-6.col-lg-2.mx-auto
              figure
                img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/intro/img02.svg', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-10
              p.mb-0 Este componente también enfatiza en la aplicación de métodos y herramientas de investigación que permiten comprender el comportamiento del consumidor y proyectar escenarios de demanda, con un enfoque en la toma de decisiones basadas en datos.
      
      .row.align-items-center.justify-content-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-10.col-xl-10.mb-4.mb-lg-0
          .row.align-items-center.justify-content-center
            .col-12.col-md-12.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/intro/img03.svg', alt='imagen decorativa')
            .col-12.col-lg-10
              p.mb-0 Además, promueve la construcción de perfiles de clientes y <em>buyer persona</em> como base para diseñar estrategias efectivas. Así, se contribuye a la formación de profesionales capaces de planificar acciones comerciales sostenibles y competitivas en diversos contextos empresariales. 


    // Video
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/TWUFslJmHUE?si=Jjn8dhT1mJViBb3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Fuente: SENA, 2025.

</template>

<script>
export default {
  name: 'Introduccion',
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
