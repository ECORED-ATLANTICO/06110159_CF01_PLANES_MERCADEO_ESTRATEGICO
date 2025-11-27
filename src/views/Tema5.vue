<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .bg-full-width.bg06
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Buyer persona
    
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-12.col-md-8.col-lg-3.mb-2
          figure
            img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema5/img01.png', alt='Imagen Decorativa')
          
        .col-12.col-md-12.col-lg-9
          .row.align-items-center
            .col-12.col-md-12.col-lg-12.mx-auto
              p.p-1  Comprender al cliente es esencial para el éxito del marketing estratégico. El perfil de mercado permite identificar con precisión a quién se dirige una organización, qué necesidades debe satisfacer y cómo puede generar una conexión efectiva con su público objetivo.
                
            .col-12.col-md-12.col-lg-12.mx-auto.mb-3
              .bloque-texto-b.color-terciario
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  h4.mb-0.ps-3 Según Kotler y Keller (2016),  
                  p.mb-0 este perfil se construye a partir de variables demográficas como edad, género e ingresos; geográficas como ubicación, clima y densidad poblacional; psicográficas como valores, intereses y estilo de vida; y conductuales como hábitos de compra, uso del producto y nivel de lealtad.
                  i.fas.fa-quote-right
      
      separador

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-12.col-md-12.col-lg-10.mx-auto(data-aos="fade-left")
          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_5_1 5.1 Caracteristicas

          //- Col3 y Col9
          .row.align-items-center.justify-content-center.mb-4(data-aos="fade-left")
            .col-12.col-md-8.col-lg-2.mb-4.mb-lg-0
              figure
                img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema5/img02.png', alt='Imagen Decorativa')
            
            .col-12.col-lg-10
              p.mb-0 El buyer persona se construye a partir de un conjunto de características que permiten representar de forma semificticia al cliente ideal. Este perfil combina información demográfica, conductual y emocional para comprender qué impulsa sus decisiones de compra. Identificar estas características ayuda a las organizaciones a diseñar mensajes, productos y experiencias más alineadas con las verdaderas necesidades y expectativas del público objetivo.

          //- Col9 (Slider) y Col3
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-12.col-xl-8.mb-4.mb-lg-0
              TabsA.color-terciario
                .tarjeta.p-3.px-4(titulo="Perfil demográfico").bg-color-adicional-1.d-flex.align-items-center
                  .row.justify-content-center.mr-3
                    .col-6.col-lg-12.mb-3
                      img(src='@/assets/curso/temas/tema5/img03.png' alt='Icono Decorativo')
                    .col-6.col-lg-12
                      p.mb-0.p-1 Incluye edad, ubicación, nivel socioeconómico y ocupación, que permiten definir su contexto básico y capacidad adquisitiva.

                .tarjeta.p-3.px-4(titulo="Intereses y preferencias").bg-color-adicional-1.d-flex.align-items-center
                  .row.justify-content-center.mr-3
                    .col-6.col-lg-12.mb-3
                      img(src='@/assets/curso/temas/tema5/img04.png' alt='Icono Decorativo')
                    .col-6.col-lg-12
                      p.mb-0.p-1 Abarca gustos, hábitos de consumo, preocupaciones y motivaciones que influyen en sus decisiones de compra.

                .tarjeta.p-3.px-4(titulo="Comportamiento digital").bg-color-adicional-1.d-flex.align-items-center
                  .row.justify-content-center.mr-3
                    .col-6.col-lg-12.mb-3
                      img(src='@/assets/curso/temas/tema5/img05.png' alt='Icono Decorativo')
                    .col-6.col-lg-12
                      p.mb-0.p-1 Describe las plataformas que utiliza, el tipo de contenido que consume y cómo interactúa con las marcas en línea.

                .tarjeta.p-3.px-4(titulo="Objetivos y desafíos").bg-color-adicional-1.d-flex.align-items-center
                  .row.justify-content-center.mr-3
                    .col-6.col-lg-12.mb-3
                      img(src='@/assets/curso/temas/tema5/img06.png' alt='Icono Decorativo')
                    .col-6.col-lg-12
                      p.mb-0.p-1 Representa las metas personales o profesionales del cliente y los problemas que busca resolver mediante un producto o servicio.

            .col-12.col-lg-4.mb-4.mb-lg-0.d-xl-block.d-none(data-aos="fade-left")
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img07.png', alt='Imagen Decorativa')

    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_5_2 5.2 Factores de motivación

    .bg-full-width.bg06

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-12.col-md-8.col-lg-3.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema5/img08.png', alt='Imagen Decorativa')
          
        .col-12.col-lg-9.p-2
          p.mb-3 El buyer persona no solo actúa por necesidades racionales, sino también por motivaciones emocionales y sociales que influyen directamente en su decisión de compra. Comprender estos factores permite crear estrategias de comunicación y valor más coherentes con sus expectativas, impulsando una conexión genuina entre la marca y el consumidor.
          
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-12.col-lg-12.mb-4.mb-lg-0
              .custom-slider
                SlyderF(columnas="col-lg-6 col-xl-6 col-md-6 col-sm-12").px-4
                  .tarjeta.shadow.p-3.bg-white
                    .row.justify-content-center
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema5/img09.png' alt='Imagen Decorativa').w-auto.mx-auto.h-icons.mb-2
                    .text-center.px-3.mb-0
                      H5.bg-color-acento-botones.py-1 Necesidades y problemas por resolver
                      p.mb-0 Busca soluciones eficaces que satisfagan carencias o resuelvan situaciones específicas.

                  .tarjeta.shadow.p-3.bg-white
                    .row.justify-content-center
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema5/img10.png' alt='Imagen Decorativa').w-auto.mx-auto.h-icons.mb-2
                    .text-center.px-3.mb-0
                      H5.bg-color-acento-botones.py-1 Aspiraciones y metas personales
                      p.mb-0 Se orienta al logro de bienestar, reconocimiento o desarrollo profesional.

                  .tarjeta.shadow.p-3.bg-white
                    .row.justify-content-center
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema5/img11.png' alt='Imagen Decorativa').w-auto.mx-auto.h-icons.mb-2
                    .text-center.px-3.mb-0
                      H5.bg-color-acento-botones.py-1 Influencias sociales y culturales
                      p.mb-0 Las opiniones de su entorno y las tendencias sociales influyen en sus decisiones.

                  .tarjeta.shadow.p-3.bg-white
                    .row.justify-content-center
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema5/img12.png' alt='Imagen Decorativa').w-auto.mx-auto.h-icons.mb-2
                    .text-center.px-3.mb-0
                      H5.bg-color-acento-botones.py-1 Experiencia y confianza en la marca
                      p.mb-0 La credibilidad, coherencia y transparencia fortalecen su preferencia de compra.

                  .tarjeta.shadow.p-3.bg-white
                    .row.justify-content-center
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema5/img13.png' alt='Imagen Decorativa').w-auto.mx-auto.h-icons.mb-2
                    .text-center.px-3.mb-0
                      H5.bg-color-acento-botones.py-1 Precio y valor percibido
                      p.mb-0 Evalúa el equilibrio entre costo y beneficios antes de decidir.

                  .tarjeta.shadow.p-3.bg-white
                    .row.justify-content-center
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema5/img14.png' alt='Imagen Decorativa').w-auto.mx-auto.h-icons.mb-2
                    .text-center.px-3.mb-0
                      H5.bg-color-acento-botones.py-1 Emoción y conexión personal
                      p.mb-0 Factores como la empatía, la felicidad o la nostalgia generan afinidad con la marca.

      separador

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-12.col-md-12.col-lg-10.mx-auto(data-aos="fade-left")

          //- Titulo
          .titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2#t_5_3 5.3 Creación

          .row.align-items-center.justify-content-center
            .col-12.col-md-8.col-lg-2.mb-md-3.mb-lg-4.mb-lg-0
              figure
                img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema5/img15.png', alt='Imagen Decorativa')
            
            .col-12.col-lg-10
              p.mb-0 La creación del buyer persona implica un proceso analítico que combina investigación de mercado, observación del comportamiento del consumidor y segmentación estratégica. Este proceso busca identificar patrones y características comunes que permitan construir perfiles representativos y útiles para orientar las acciones de comunicación y marketing. A continuación, se presentan los pasos esenciales para su elaboración:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-12.col-md-12.col-lg-10.mx-auto(data-aos="fade-left")
        .col-12.col-md-12.col-lg-12.mb-4
          //- Acordion
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Investigación de mercado y recopilación de datos").justify-content-center.align-items-center.p-2.pl-lg-3
              .col-12.col-md-12.col-lg-12
                p.mb-0 Se obtiene información detallada sobre el público objetivo mediante encuestas, entrevistas, análisis de redes sociales y estudios de mercado. Es clave recopilar datos demográficos, intereses, hábitos de consumo y desafíos del cliente ideal.

            .row(titulo="Identificación de patrones y segmentación").justify-content-center.align-items-center.p-2
              .col-12.col-md-12.col-lg-12
                p.mb-0 Con la información recolectada, se analizan los datos para identificar patrones de comportamiento y segmentar a los consumidores en grupos con características similares, lo que permite definir perfiles más precisos y estrategias efectivas.

            .row(titulo="Creación del perfil del buyer persona").justify-content-center.align-items-center.p-2
              .col-12.col-md-12.col-lg-12
                p.mb-0 A partir de los datos organizados, se construye el perfil del buyer persona definiendo edad, género, ocupación, intereses, motivaciones y puntos de dolor. Se recomienda asignarle un nombre y una historia representativa.

            .row(titulo="Validación y ajuste del buyer persona").justify-content-center.align-items-center.p-2
              .col-12.col-md-12.col-lg-12
                p.mb-0 El perfil se valida con datos reales a través de pruebas piloto o encuestas, asegurando que refleje al público objetivo. De ser necesario, se realizan ajustes para mejorar su exactitud.

            .row(titulo="Aplicación en estrategias de contenido").justify-content-center.align-items-center.p-2
              .col-12.col-md-12.col-lg-12
                p.mb-0 El buyer persona validado se integra en la planificación de contenidos, orientando la personalización de mensajes, formatos y campañas que generen conexión y mayor impacto en la audiencia.

        .row.align-items-center.justify-content-center(data-aos="fade-left")
          .col-12.col-md-12.col-lg-12
            //- Figura
            .mb-5(data-aos="zoom-in-down")
              .titulo-sexto.mb-4
                h5 Figura 1. 
                  span Pasos para la creación del buyer persona 
              figure.mb-4
                img(src='@/assets/curso/temas/tema5/img16.svg', alt='La figura describe las herramientas de diagnóstico para la sostenibilidad, DOFA verde, benchmarking sostenible, Análisis de Ciclo de Vida, huella de carbono y balanced scorecard verde, destacando su función en la identificación de oportunidades de mejora y en la toma de decisiones.').mx-auto.d-none.d-md-block

              //- Version movil de la figura
              figure.d-block.d-md-none.d-lg-none
                img(src='@/assets/curso/temas/tema5/img16_1.svg', alt='La figura relaciona cuatro técnicas de seguimiento comercial. La primera es la llamada telefónica; la segunda es el correo personalizado, la tercera es la reunión de seguimiento y finalmente el contenido adicional.')

              figcaption 
                b Fuente: 
                | SENA, 2025.

</template>

<script>
export default {
  name: 'Tema5',
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
