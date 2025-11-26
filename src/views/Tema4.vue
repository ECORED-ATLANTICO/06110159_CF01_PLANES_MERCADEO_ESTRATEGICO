<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Perfil del mercado
 
  
    .row.justify-content-center.align-items-center.mb-4.bg04(data-aos="fade-left")
      .col-12.col-md-12.col-lg-3.mx-auto.mb-2
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen Decorativa')
        
      .col-12.col-md-12.col-lg-9
        .row.align-items-center
          .col-12.col-md-12.col-lg-12.mx-auto
            p.p-1  Comprender al cliente es esencial para el éxito del marketing estratégico. El perfil de mercado permite identificar con precisión a quién se dirige una organización, qué necesidades debe satisfacer y cómo puede generar una conexión efectiva con su público objetivo.

          .col-12.col-md-12.col-lg-12.mx-auto
            .row.align-items-center.round-1.bg-color-terciario-t20.p-2(data-aos="fade-left")
              .col-12.col-md-6.col-lg-2.mx-auto
                figure
                  img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen Decorativa')
              .col-12.col-md-12.col-lg-10
                p.mb-0 Incluye los elementos que definen el perfil ideal y el perfil real del consumidor, así como la identificación del segmento de mercado como unidad estratégica. También incorpora el uso del buyer persona, una herramienta que humaniza los datos y orienta las decisiones comerciales hacia soluciones más personalizadas y efectivas.
                  

</template>

<script>
export default {
  name: 'Tema4',
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
