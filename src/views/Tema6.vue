<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Segmentación de mercados
  
    .row.justify-content-center.align-items-center.mb-4.bg11.p-3(data-aos="fade-left")
      .col-12.col-md-8.col-lg-3.mb-2
        figure
          img.mb-4.mb-lg-0.mx-auto.w-md-auto(src='@/assets/curso/temas/tema6/img01.png', alt='Imagen Decorativa')
        
      .col-12.col-md-12.col-lg-9
        .row.align-items-center
          .col-12.col-md-12.col-lg-12.mx-auto
            p.p-1  En el contexto de la planeación de contenidos digitales, la segmentación de mercados es un recurso estratégico indispensable para diseñar narrativas que resuenen con cada audiencia. A través de este proceso, las marcas pueden dividir su público en grupos con características comunes y necesidades específicas, lo que permite adaptar historias que conecten emocionalmente y generen resultados.

          .col-12.col-md-12.col-lg-10.mx-auto.mb-3
            .bloque-texto-b.color-terciario
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0 Tal como señalan <b>Kotler y Keller (2016)</b>, segmentar no es únicamente clasificar: es entender profundamente a quién se le habla y cómo se le debe contar una historia.
                i.fas.fa-quote-right
    
    .bg-full-width.bg01

      separador

      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_6_1 6.1 Objetivos

      .row.align-items-center.mb-5(data-aos="fade-left")
        //- banner con tarjeta
        .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
          .col-lg-12.mb-2
            div.tarjeta-horz.mb-3
              img(src='@/assets/curso/temas/tema6/img02.png', alt='Imagen decorativa')
              div.texto-tarjeta.bg-white
                  p.mb-0 La segmentación de mercados es una estrategia esencial para construir mensajes que generen conexión y significado. Al reconocer los rasgos, motivaciones y expectativas de cada segmento, las marcas pueden diseñar narrativas más precisas y emocionalmente resonantes. En el storytelling digital, segmentar significa comprender a quién se le cuenta la historia, cómo desea escucharla y por qué esa historia tiene valor para él. Este enfoque favorece la empatía, la personalización y la eficacia comunicativa, convirtiendo cada mensaje en una experiencia relevante para su audiencia.

        .row.mb-md-2(data-aos="fade-left")
          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta.shadow.p-4.bg-white.h-100
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema6/img03.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
              .text-center
                H5.bg-color-secundario.py-1 Mejorar la efectividad del mensaje
                p Permite adaptar el tono, estilo y narrativa a las características específicas de cada segmento.

          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta.shadow.p-4.bg-white.h-100
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema6/img04.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
              .text-center
                H5.bg-color-secundario.py-1 Optimizar recursos
                p Dirige los esfuerzos hacia los canales y formatos más utilizados por cada público objetivo.

          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta.shadow.p-4.bg-white.h-100
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema6/img05.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
              .text-center
                H5.bg-color-secundario.py-1 Identificar oportunidades
                p Facilita el descubrimiento de nichos temáticos o necesidades poco atendidas en el mercado.

          .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta.shadow.p-4.bg-white.h-100
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema6/img06.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-120.mb-2
              .text-center
                H5.bg-color-secundario.py-1 Fortalecer la fidelidad del público
                p Fomenta la conexión emocional mediante historias coherentes con los valores y aspiraciones del segmento.

      separador
    
    .row.align-items-center.justify-content-center.mb-0(data-aos="fade-right")
      .col-12.col-md-12.col-lg-10

        //- Titulo
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2#t_6_2 6.2 Tipos
        
        .bg-full-width.bg01
          .row.justify-content-center.mb-3
            .col-12.col-md-8.col-lg-2.mb-md-3.mb-lg-4
              figure
                img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema6/img07.png', alt='Imagen Decorativa')
            
            .col-12.col-md-12.col-lg-10
              p.mb-0 Los tipos de segmentación representan las distintas formas en que puede dividirse un mercado, dependiendo de los atributos o comportamientos que se deseen analizar. En esencia, determinan cómo se clasifica para los consumidores según variables que influyen en sus decisiones de compra. Comprender estos enfoques permite a las organizaciones personalizar sus estrategias y mensajes, logrando una comunicación más efectiva y orientada a resultados. De acuerdo con Zendesk (2023), los principales tipos de segmentación son los siguientes:

          .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
            .col-12.col-md-12.col-lg-12.mx-auto(data-aos="fade-left")
              .col-12.col-md-12.col-lg-12.mb-4
                //- Acordion
                AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                  .row(titulo="Demográfica").justify-content-center.align-items-center.p-2
                    .col-12.col-md-12.col-lg-12
                      p.mb-0 Agrupa a los consumidores según características medibles como edad, género, nivel educativo, ocupación o ingresos.

                  .row(titulo="Geográfica").justify-content-center.align-items-center.p-2
                    .col-12.col-md-12.col-lg-12
                      p.mb-0 Clasifica al público según su ubicación (país, región, clima, densidad urbana o rural), lo que permite adaptar estrategias a contextos locales.

                  .row(titulo="Psicográfica").justify-content-center.align-items-center.p-2
                    .col-12.col-md-12.col-lg-12
                      p.mb-0 Considera factores como valores, intereses, estilo de vida y personalidad, útiles para construir mensajes más emocionales y diferenciados.

                  .row(titulo="Conductual").justify-content-center.align-items-center.p-2
                    .col-12.col-md-12.col-lg-12
                      p.mb-0 Analiza comportamientos de compra, frecuencia de uso, lealtad a la marca o beneficios buscados en el producto o servicio.

                  .row(titulo="Tecnográfica").justify-content-center.align-items-center.p-2
                    .col-12.col-md-12.col-lg-12
                      p.mb-0 Se enfoca en el uso y afinidad del consumidor hacia la tecnología, dispositivos y plataformas digitales.

    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_6_3 6.3 Segmento de mercado

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-12.col-md-8.col-lg-5.mb-2
        figure
          img.mb-4.mb-lg-0.mx-auto.w-md-auto(src='@/assets/curso/temas/tema6/img08.png', alt='Imagen Decorativa')
        
      .col-12.col-md-12.col-lg-7
        .row.align-items-center.justify-content-center
          .col-12.col-md-12.col-lg-12.mx-auto
            p Comprender los criterios de segmentación es fundamental para crear narrativas que conecten auténticamente con públicos diversos. Más que dividir audiencias, se busca descubrir patrones significativos que permitan contar historias personalizadas y emocionalmente relevantes.

          .col-12.col-md-12.col-lg-12.mx-auto
            .row.align-items-center.round-1.bg-color-terciario-t20.p-2(data-aos="fade-left")
              .col-12.col-md-6.col-lg-2.mx-auto
                figure
                  img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema6/img09.svg', alt='Imagen Decorativa')
              .col-12.col-md-12.col-lg-10
                p.mb-0 Los criterios de segmentación corresponden a las variables específicas que se emplean para dividir el mercado en grupos homogéneos. Estas pueden incluir factores como edad, ubicación geográfica, intereses, comportamiento de compra, estilo de vida o valores, entre otros. Son los atributos que orientan la estrategia de comunicación y facilitan el diseño de mensajes más precisos y efectivos.
    
    separador
    
    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_6_4 6.4 Estándares

    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg07.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema6/img10.png', alt='imagen decorativa').w-auto.img17

            .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
              p.mb-0 Los estándares de segmentación son principios estratégicos que garantizan que los criterios utilizados para dividir el mercado sean realmente efectivos. Según Rock Content (2021), un segmento debe cumplir ciertas condiciones que permitan su correcta medición, acceso y diferenciación dentro del mercado. Estos estándares aseguran que la segmentación no solo sea precisa, sino también útil para la toma de decisiones comerciales y de comunicación.
      
    //- Col9 (Slider) y Col3
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-12.col-xl-9.mb-4.mb-lg-0
        TabsA.color-terciario
          .tarjeta.p-3.px-4(titulo="Medible").bg-color-adicional-1.d-flex.align-items-center
            .row.justify-content-center.mr-3
              .col-6.col-lg-12.mb-3
                img(src='@/assets/curso/temas/tema6/img11.png' alt='Icono Decorativo')
              .col-6.col-lg-12
                p.mb-0.p-1 El segmento debe poder cuantificarse en términos de tamaño, poder adquisitivo y características relevantes.

          .tarjeta.p-3.px-4(titulo="Accesible").bg-color-adicional-1.d-flex.align-items-center
            .row.justify-content-center.mr-3
              .col-6.col-lg-12.mb-3
                img(src='@/assets/curso/temas/tema6/img12.png' alt='Icono Decorativo')
              .col-6.col-lg-12
                p.mb-0.p-1 La empresa debe poder llegar al segmento mediante canales de distribución y comunicación adecuados.

          .tarjeta.p-3.px-4(titulo="Sustancial").bg-color-adicional-1.d-flex.align-items-center
            .row.justify-content-center.mr-3
              .col-6.col-lg-12.mb-3
                img(src='@/assets/curso/temas/tema6/img13.png' alt='Icono Decorativo')
              .col-6.col-lg-12
                p.mb-0.p-1 El segmento debe tener una dimensión y rentabilidad suficientes para justificar una estrategia específica.

          .tarjeta.p-3.px-4(titulo="Diferenciable").bg-color-adicional-1.d-flex.align-items-center
            .row.justify-content-center.mr-3
              .col-6.col-lg-12.mb-3
                img(src='@/assets/curso/temas/tema6/img14.png' alt='Icono Decorativo')
              .col-6.col-lg-12
                p.mb-0.p-1 Cada segmento debe mostrar respuestas distintas ante diferentes propuestas de marketing.

          .tarjeta.p-3.px-4(titulo="Estable").bg-color-adicional-1.d-flex.align-items-center
            .row.justify-content-center.mr-3
              .col-6.col-lg-12.mb-3
                img(src='@/assets/curso/temas/tema6/img15.png' alt='Icono Decorativo')
              .col-6.col-lg-12
                p.mb-0.p-1 Las características del segmento deben mantenerse relativamente constantes en el tiempo para permitir una planificación efectiva.

      .col-12.col-lg-3.mb-4.mb-lg-0.d-xl-block.d-none(data-aos="fade-left")
        figure
          img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema6/img16.png', alt='Imagen Decorativa')

    separador
    
    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_6_5 6.5 Buenas prácticas

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-12.col-md-8.col-lg-3.mb-2
        figure
          img.mb-4.mb-lg-0.mx-auto.w-md-auto(src='@/assets/curso/temas/tema6/img17.png', alt='Imagen Decorativa')
        
      .col-12.col-md-12.col-lg-9
        .row.align-items-center
          .col-12.col-md-12.col-lg-12.mx-auto
            p Aplicar buenas prácticas en la segmentación con enfoque narrativo implica ir más allá de dividir audiencias: se trata de comprenderlas con empatía, análisis y creatividad. Una segmentación efectiva no solo define a quién se dirige el mensaje, sino que permite construir historias que conectan con las emociones, valores y realidades de cada grupo.

          .col-12.col-md-12.col-lg-12.mx-auto
            .row.align-items-center.round-1.bg-color-terciario-t20.p-2(data-aos="fade-left")
              .col-12.col-md-6.col-lg-2.mx-auto
                figure
                  img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema6/img18.svg', alt='Imagen Decorativa')
              .col-12.col-md-12.col-lg-10
                p.mb-0 Para lograrlo, es fundamental combinar datos actualizados con sensibilidad narrativa, experimentar con distintos formatos según el canal y ajustar el tono del mensaje a las particularidades de cada segmento. Asimismo, el seguimiento constante de los resultados permite optimizar las estrategias y mantener la relevancia del contenido en el tiempo.

</template>

<script>
export default {
  name: 'Tema6',
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
