<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Perfil del mercado
  
    .row.justify-content-center.align-items-center.mb-5.bg04(data-aos="fade-left")
      .col-8.col-md-8.col-lg-3.mb-2
        figure
          img.mb-4.mb-lg-0.mx-auto.w-md-auto(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen Decorativa')
        
      .col-12.col-md-12.col-lg-9
        .row.align-items-center
          .col-12.col-md-12.col-lg-12.mx-auto
            p.p-1  Comprender al cliente es esencial para el éxito del 
              i marketing 
              | estratégico. El perfil de mercado permite identificar con precisión a quién se dirige una organización, qué necesidades debe satisfacer y cómo puede generar una conexión efectiva con su público objetivo.

          .col-12.col-md-12.col-lg-12.mx-auto
            .row.align-items-center.round-1.bg-color-terciario-t20.p-3(data-aos="fade-left")
              .col-8.col-md-6.col-lg-2.mb-3.mb-lg-0.mx-auto
                figure
                  img.mb-4.mb-lg-0.mx-auto.w-sm-auto(src='@/assets/curso/temas/tema3/img02.svg', alt='Imagen Decorativa')
              .col-12.col-md-12.col-lg-10
                p.mb-0 Incluye los elementos que definen el perfil ideal y el perfil real del consumidor, así como la identificación del segmento de mercado como unidad estratégica. También incorpora el uso del <em>buyer</em> persona, una herramienta que humaniza los datos y orienta las decisiones comerciales hacia soluciones más personalizadas y efectivas.
    separador
    .bg-full-width.bg01

      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_4_1 4.1 Elementos

      .row.align-items-center.mb-5(data-aos="fade-left")
        //- banner con tarjeta
        .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
          .col-lg-12.mb-2
            div.tarjeta-horz.mb-3
              img(src='@/assets/curso/temas/tema4/img02.png', alt='Imagen decorativa')
              div.texto-tarjeta.bg-white
                  p.mb-0 El perfil de mercado es una descripción detallada del grupo de consumidores que comparten características relevantes para una oferta comercial específica. 

        .col-12.col-md-12.col-lg-10.mx-auto.mb-3
          .bloque-texto-b.color-terciario
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.ps-3 Según Kotler y Keller (2016),  
              p.mb-0 este perfil se construye a partir de variables demográficas como edad, género e ingresos; geográficas como ubicación, clima y densidad poblacional; psicográficas como valores, intereses y estilo de vida; y conductuales como hábitos de compra, uso del producto y nivel de lealtad.
              i.fas.fa-quote-right

      //- Col8 y Col3
      .container.mb-5
        .row.align-items-center(data-aos="fade-left")
          .col-12.col-lg-10.bg07.justify-content-center.p-4.tarjeta.mx-auto.position-relative
            .row.align-items-center
              .col-12.col-md-12.col-lg-5.col-xl-4.mb-4.mb-lg-0.d-none.d-lg-block
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img04.png', alt='imagen decorativa').w-auto.img04

              .col-12.col-md-12.col-lg-7.col-xl-8.mb-4.mb-lg-0
                p.mb-0 Además, puede incorporar otras variables como nivel educativo, ocupación, frecuencia de compra o sensibilidad al precio, dependiendo del objetivo estratégico. Más que identificar quién compra, el perfil de mercado busca comprender por qué lo hace, cómo se comporta y qué factores influyen en sus decisiones de consumo.
    separador
    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_2 4.2 Perfil ideal
    
    .bg-full-width.bg10

      .row.align-items-center(data-aos="fade-left").mb-4
        .col-12.col-md-12.col-lg-4.mx-auto.mb-2
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img05.png', alt='Imagen Decorativa')
          
        .col-12.col-md-12.col-lg-8
          p.p-1  En la práctica del 
            i marketing, 
            | es común diferenciar entre el perfil ideal y el perfil real del consumidor. 

          .row.align-items-center.round-1.bg-color-terciario-t20.p-3(data-aos="fade-left")
            .col-8.col-md-6.col-lg-2.mx-auto
              figure
                img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema4/img06.svg', alt='Imagen Decorativa')
            .col-12.col-md-12.col-lg-10
              p.mb-0 El perfil ideal representa al cliente que la empresa aspira a atraer, basado en sus objetivos estratégicos, mientras que el perfil real se construye a partir de datos concretos de los clientes actuales, esta distinción permite ajustar las expectativas y mejorar la alineación entre la propuesta de valor y el comportamiento del mercado (Solomon, 2018).

      .row.align-items-center(data-aos="fade-left")
        .row.justify-content-center.mb-5
          .col-xl-6.col-lg-6.col-12.mb-4.mb-xl-0.col-md-8
            .crd_hover_txt(data-aos="flip-left").round-2
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema4/img07.png", alt="Imagen decorativa")
              .crd_hover_txt--body
                p.text-bold.mb-3.text-center Perfil  ideal
                p Representa al cliente que la empresa desea atraer según sus metas estratégicas. Se construye con base en aspiraciones de posicionamiento, rentabilidad y afinidad con los valores de marca.

          .col-xl-6.col-lg-6.col-12.mb-4.mb-xl-0.col-md-8
            .crd_hover_txt(data-aos="flip-left").round-2
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema4/img08.png", alt="Imagen decorativa")
              .crd_hover_txt--body
                p.text-bold.mb-3.text-center Perfil real
                p Corresponde a los consumidores actuales identificados mediante datos concretos y observables. Refleja el comportamiento real del mercado y permite ajustar la estrategia comercial.
      
      
      separador
      
      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_4_3 4.3 Segmento de mercado

    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-12.col-xl-10.bg07.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-4.col-xl-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img09.png', alt='imagen decorativa').w-auto.img17

            .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
               p.mb-0 Un segmento de mercado es un grupo de consumidores con características similares que responden de forma parecida a una oferta comercial, la segmentación permite dividir el mercado total en unidades más manejables, facilitando la personalización de estrategias. Según Lamb, Hair y McDaniel (2019), los segmentos deben ser medibles, accesibles, sustanciales y accionables para que sean útiles en la práctica.


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
