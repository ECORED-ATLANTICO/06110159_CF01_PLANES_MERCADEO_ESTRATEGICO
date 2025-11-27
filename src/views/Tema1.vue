<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mercado potencial
    
    .row.justify-content-center.align-items-center.mb-3.bg04(data-aos="fade-left")
      .col-12.col-md-8.col-lg-3.mb-2
        figure
          img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen Decorativa')
        
      .col-12.col-md-12.col-lg-9
        .row.align-items-center

          .col-12.col-md-12.col-lg-12.mx-auto
            p  El mercado potencial se refiere al conjunto total de consumidores que podrían estar interesados en adquirir un producto o servicio, siempre que se cumplan ciertas condiciones como disponibilidad, accesibilidad y capacidad de compra; es una estimación teórica que permite a las empresas proyectar el alcance máximo de sus ofertas en un entorno determinado. 

          .col-12.col-md-12.col-lg-12.mx-auto
            .bloque-texto-b.color-terciario
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 Según Kotler y Keller (2016),  
                p.mb-0 el mercado potencial incluye a todos los individuos que presentan un nivel de interés, ingresos y acceso al producto, aunque no necesariamente lo hayan adquirido aún; esta noción es clave en la planificación estratégica, ya que permite dimensionar oportunidades de crecimiento y orientar los esfuerzos de marketing hacia segmentos con mayor probabilidad de conversión.
                i.fas.fa-quote-right
            
    .bg-full-width.bg01
      separador

      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_1_1 1.1 Tipos

      //- Col4 y Col8
      .row.align-items-center.mb-5(data-aos="fade-left")

        p.mb-4 El concepto de mercado puede desglosarse en varios tipos, cada uno con características específicas que permiten una mejor segmentación y análisis estratégico; a continuación se presentan los principales tipos: 

        .row.mb-5(data-aos="fade-left")
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta.shadow.p-4.bg-white.h-100
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema1/img2.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
              .text-center
                H5.bg-color-secundario.py-1 Mercado real
                p Está compuesto por los consumidores que actualmente compran el producto o servicio.
          
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta.shadow.p-4.bg-white.h-100
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema1/img03.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
              .text-center
                H5.bg-color-secundario.py-1 Mercado disponible
                p Incluye a quienes tienen interés, ingresos y acceso al producto, pero aún no lo han adquirido.
          
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta.shadow.p-4.bg-white.h-100
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema1/img04.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
              .text-center
                H5.bg-color-secundario.py-1 Mercado objetivo
                p Segmento específico al que la empresa decide dirigir sus esfuerzos de marketing.
          
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta.shadow.p-4.bg-white.h-100
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema1/img05.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
              .text-center
                H5.bg-color-secundario.py-1 Mercado latente
                p Total de personas que podrían convertirse en clientes bajo condiciones favorables.
            
      //- Col8 y Col3
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg07.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img06.png', alt='imagen decorativa').w-auto.img01

            .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
              p.mb-0 Cada tipo de mercado cumple una función distinta en la planificación comercial. El mercado real permite evaluar el rendimiento actual, mientras que el mercado disponible y el potencial ayudan a identificar oportunidades de expansión. El mercado objetivo, por su parte, es el foco de las estrategias de posicionamiento y comunicación.  

    separador
    .bg-full-width.bg02
      
      .col-12.col-md-12.col-lg-10.mx-auto(data-aos="fade-left")
        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_1_2 1.2 Variables

        //- Col3 y Col9
        .row.align-items-center(data-aos="fade-left")

          p El tamaño y características del mercado potencial dependen de múltiples variables que deben ser analizadas con rigor; entre las más relevantes se encuentran: 

          //- Col9 (Slider) y Col3
          .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
            .col-12.col-lg-4.mb-4.mb-lg-0.d-xl-block.d-none(data-aos="fade-left")
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img08.png', alt='Imagen Decorativa')
            .col-12.col-xl-8.mb-4.mb-lg-0
              TabsA.color-terciario
                .tarjeta.p-3.px-4(titulo="Demográficas").bg-color-adicional-1.d-flex.align-items-center
                  .row.justify-content-center.mr-3
                    .col-6.col-lg-12.mb-3
                      img(src='@/assets/curso/temas/tema1/img09.png' alt='Icono Decorativo')
                    .col-6.col-lg-12
                      p.p-3.mb-0 Incluyen aspectos como la edad, el género, el nivel educativo y la ocupación, los cuales permiten identificar grupos poblacionales con características comunes.

                .tarjeta.p-3.px-4(titulo="Geográficas").bg-color-adicional-1.d-flex.align-items-center
                  .row.justify-content-center.mr-3
                    .col-6.col-lg-12.mb-3
                      img(src='@/assets/curso/temas/tema1/img10.png' alt='Icono Decorativo')
                    .col-6.col-lg-12
                      p.p-3.mb-0 Consideran la ubicación, el clima y la infraestructura local, factores que influyen en la distribución y el acceso a los productos o servicios.

                .tarjeta.p-3.px-4(titulo="Psicográficas").bg-color-adicional-1.d-flex.align-items-center
                  .row.justify-content-center.mr-3
                    .col-6.col-lg-12.mb-3
                      img(src='@/assets/curso/temas/tema1/img11.png' alt='Icono Decorativo')
                    .col-6.col-lg-12
                      p.p-3.mb-0 Se relacionan con los estilos de vida, valores e intereses, proporcionando información sobre las motivaciones y preferencias del consumidor.

                .tarjeta.p-3.px-4(titulo="Económicas").bg-color-adicional-1.d-flex.align-items-center
                  .row.justify-content-center.mr-3
                    .col-6.col-lg-12.mb-3
                      img(src='@/assets/curso/temas/tema1/img12.png' alt='Icono Decorativo')
                    .col-6.col-lg-12
                      p.p-3.mb-0 Comprenden el nivel de ingresos, la capacidad de gasto y el acceso a crédito, determinando el poder adquisitivo y las posibilidades de compra.

                .tarjeta.p-3.px-4(titulo="Tecnológicas").bg-color-adicional-1.d-flex.align-items-center
                  .row.justify-content-center.mr-3
                    .col-6.col-lg-12.mb-3
                      img(src='@/assets/curso/temas/tema1/img13.png' alt='Icono Decorativo')
                    .col-6.col-lg-12
                      p.p-3.mb-0 Evalúan la penetración digital, el uso de dispositivos y la conectividad, variables esenciales en entornos de consumo cada vez más digitales.

    .row.align-items-center.justify-content-center.bg05.p-3(data-aos="fade-left")
      .col-12.col-md-12.col-lg-10.order-2.order-lg-1
        p.mb-0 Estas variables permiten construir perfiles más precisos y segmentar el mercado potencial en grupos con necesidades y comportamientos similares. Por ejemplo, una empresa de software educativo puede identificar como mercado potencial a docentes de primaria en zonas rurales con acceso a internet, que buscan herramientas para mejorar el aprendizaje remoto. La combinación de variables demográficas y tecnológicas permite afinar la propuesta de valor y diseñar estrategias más efectivas.
      .col-12.col-md-6.col-lg-2.mb-3.order-1.order-lg-2
        figure
          img.mb-lg-0.w-75.mx-auto(src='@/assets/curso/temas/tema1/img14.svg', alt='Imagen Decorativa')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
