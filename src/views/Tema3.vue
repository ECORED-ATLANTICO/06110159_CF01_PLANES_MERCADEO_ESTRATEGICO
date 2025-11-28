<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis de tendencias
 
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-12.col-md-9.col-lg-5.mx-auto.mb-2
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen Decorativa')
        
      .col-12.col-md-12.col-lg-7
        .row.align-items-center
          p.mb-4 En un entorno comercial cada vez más dinámico, comprender las tendencias del mercado se ha convertido en una habilidad esencial para cualquier profesional del 
            i marketing. 

          .col-12.col-md-12.col-lg-12.mx-auto
            .row.align-items-center.round-1.bg-color-terciario-t20.p-3(data-aos="fade-left")
              .col-12.col-md-6.col-lg-2.mx-auto
                figure
                  img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema3/img02.svg', alt='Imagen Decorativa')
              .col-12.col-md-12.col-lg-10
                p.mb-0 A través del estudio de herramientas como PESTEL, 
                  i benchmarking 
                  | y observación directa, se busca desarrollar la capacidad de anticipar oportunidades, adaptar estrategias y generar propuestas de valor alineadas con el contexto. El análisis de tendencias no solo permite mirar hacia el futuro, sino también entender el presente con mayor profundidad.
                  
    separador

    .bg-full-width.bg01

      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_3_1 3.1 Tipos

      .row.align-items-center.mb-4(data-aos="fade-left")
        //- banner con tarjeta
        .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
          .col-lg-12.mb-2
            div.tarjeta-horz.mb-3
              img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen decorativa')
              div.texto-tarjeta.bg-white
                  p.mb-0 El análisis de tendencias es una práctica estratégica que permite identificar cambios significativos en el comportamiento del mercado, la sociedad, la tecnología y el entorno económico, las tendencias reflejan patrones sostenidos en el tiempo que pueden influir en las decisiones empresariales, la innovación y la adaptación organizacional. 

        .col-12.col-md-12.col-lg-8.mx-auto
          .bloque-texto-b.color-terciario
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.ps-3 
                 b Según Raymond (2020),  
              p.mb-0 entender las tendencias no solo permite anticiparse al futuro, sino también detectar oportunidades antes que la competencia.
              i.fas.fa-quote-right
        
      .mb-2.round-3.bg-color-acento-botones-h1.p-2.px-4
        p.mb-0.text-white 
          b Las tendencias se clasifican en tres tipos principales:

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema3/img03.png', alt='Imagen Decorativa')
          
        .col-12.col-lg-8.p-2
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-12.col-lg-12.mb-4.mb-lg-0
              .custom-slider
                SlyderF(columnas="col-lg-6 col-xl-6 col-md-6 col-sm-12").px-4
                  .tarjeta.shadow.p-3.bg-white.bg08
                    .row.justify-content-center
                      .col-6.col-lg-10
                        img(src='@/assets/curso/temas/tema3/img10.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-icons.mb-2
                    .text-center.px-3.mb-0
                      H5.py-1 Macro
                      p.mb-0 Cambios globales y estructurales que afectan múltiples sectores; por ejemplo, el envejecimiento poblacional impulsa la demanda de productos para adultos mayores.

                  .tarjeta.shadow.p-3.bg-white.bg08
                    .row.justify-content-center
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema3/img11.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-icons.mb-2
                    .text-center.px-3.mb-0
                      H5.py-1 Micro
                      p.mb-0 Cambios específicos en grupos sociales o nichos de mercado; por ejemplo, la preferencia por alimentos orgánicos entre jóvenes urbanos.

                  .tarjeta.shadow.p-3.bg-white.bg08
                    .row.justify-content-center
                      .col-6.col-lg-8
                        img(src='@/assets/curso/temas/tema3/img12.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-icons.mb-2
                    .text-center.px-3.mb-0
                      H5.py-1 Emergentes
                      p.mb-0 Señales débiles que podrían convertirse en tendencias consolidadas; por ejemplo, el uso de inteligencia artificial en la atención al cliente.
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_2 3.2 Herramientas

    .bg-full-width.bg01

      p Las herramientas de análisis de tendencias permiten recopilar, organizar e interpretar información clave del entorno para anticipar cambios en el comportamiento del mercado y en las preferencias de los consumidores. Su aplicación facilita la toma de decisiones estratégicas basadas en evidencia, ayudando a las empresas a adaptarse de manera proactiva a las transformaciones sociales, tecnológicas y económicas, fortaleciendo su capacidad de innovación y su posicionamiento competitivo en un entorno dinámico.

      .row.align-items-center(data-aos="fade-left").mb-4
        .col-12.col-md-9.col-lg-5.mx-auto.mb-2
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img04.png', alt='Imagen Decorativa')
          
        .col-12.col-md-12.col-lg-7.mb-4.mb-lg-0
          .tarjeta.p-2.p-lg-4.bg03
            .tarjeta--blanca.p-3.p-lg-3
              SlyderA(tipo="b")
                .tarjeta.p-2.p-lg-3
                  .row.align-items-center
                    .col-12.col-lg-12.mb-0
                      h5.mb-3 Análisis PESTEL
                      p.mb-0 Evalúa los factores políticos, económicos, sociales, tecnológicos, ecológicos y legales que pueden impactar la dinámica del mercado. Permite anticipar oportunidades o amenazas derivadas de cambios estructurales, como regulaciones o innovaciones tecnológicas.

                .tarjeta.p-2.p-lg-3
                  .row.align-items-center
                    .col-12.col-lg-12.mb-0
                      h5.mb-3 
                        i Benchmarking
                      p.mb-0 Consiste en comparar el desempeño, procesos y estrategias de una organización con los líderes del sector, identificando buenas prácticas que orienten la mejora continua y la competitividad.

                .tarjeta.p-2.p-lg-3
                  .row.align-items-center
                    .col-12.col-lg-12.mb-0
                      h5.mb-3 Mapas de empatía
                      p.mb-0 Facilitan comprender a profundidad al consumidor, explorando sus pensamientos, sentimientos, motivaciones y frustraciones para diseñar ofertas más alineadas con sus expectativas.

                .tarjeta.p-2.p-lg-3
                  .row.align-items-center
                    .col-12.col-lg-12.mb-0
                      h5.mb-3 Análisis de datos digitales
                      p.mb-0 Utiliza herramientas tecnológicas para monitorear comportamientos de consumo, búsquedas y comentarios en línea, lo que permite detectar patrones emergentes y anticipar cambios en las preferencias del público objetivo.

      separador

      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_3_3 3.3 Aplicación

      .row.justify-content-center.align-items-center.mb-4.bg04(data-aos="fade-left")
        .col-12.col-md-8.col-lg-3.mb-2
          figure
            img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema3/img06.png', alt='Imagen Decorativa')
          
        .col-12.col-md-12.col-lg-9
          .row.align-items-center
            .col-12.col-md-12.col-lg-12.mx-auto
              p  El análisis de tendencias constituye una herramienta estratégica que permite a las organizaciones anticiparse a los cambios del entorno y convertirlos en oportunidades de negocio, innovación y diferenciación. Comprender hacia dónde se orienta el mercado facilita la adaptación proactiva de productos, servicios y estrategias, optimizando la toma de decisiones. 

            .col-12.col-md-12.col-lg-10.mx-auto
              .bloque-texto-b.color-terciario
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-0.ps-3 
                    b De acuerdo con Kotler y Keller (2016),  
                  p.mb-0  las oportunidades emergen cuando las empresas identifican necesidades insatisfechas, transformaciones en el entorno o avances tecnológicos susceptibles de aprovecharse para generar valor.
                  i.fas.fa-quote-right
            
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-5.mb-4.mb-lg-0.d-xl-block.d-none(data-aos="fade-left")
        .cajon.bg-color-acento-botones-p5.p-4.mb-4
          p.mb-0 La aplicación práctica de este análisis se evidencia en diversos sectores: la expansión del teletrabajo impulsó la creación de mobiliario funcional para espacios reducidos, mientras que el creciente interés por la salud mental favoreció el desarrollo de aplicaciones de bienestar y campañas corporativas enfocadas en el equilibrio emocional.

      .col-12.col-xl-7.mb-4.mb-lg-0
        TabsA.color-terciario
          .tarjeta.p-3.px-4(titulo="Digitalización de servicios").bg-color-adicional-1.d-flex.align-items-center
            .row.justify-content-center.mr-3
              .col-6.col-lg-12.mb-3
                img(src='@/assets/curso/temas/tema3/img07.png' alt='Icono Decorativo')
              .col-6.col-lg-12
                p.mb-0 Desarrollo de plataformas virtuales y automatización de procesos.

          .tarjeta.p-3.px-4(titulo="Consumo consciente").bg-color-adicional-1.d-flex.align-items-center
            .row.justify-content-center.mr-3
              .col-6.col-lg-12.mb-3
                img(src='@/assets/curso/temas/tema3/img07.png' alt='Icono Decorativo')
              .col-6.col-lg-12
                p.mb-0 Creación de marcas sostenibles, empaques ecológicos y trazabilidad ética.

          .tarjeta.p-3.px-4(titulo="Envejecimiento poblacional").bg-color-adicional-1.d-flex.align-items-center
            .row.justify-content-center.mr-3
              .col-6.col-lg-12.mb-3
                img(src='@/assets/curso/temas/tema3/img07.png' alt='Icono Decorativo')
              .col-6.col-lg-12
                p.mb-0 Innovaciones en salud preventiva, productos adaptados y tecnología asistida.


</template>

<script>
export default {
  name: 'Tema3',
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
