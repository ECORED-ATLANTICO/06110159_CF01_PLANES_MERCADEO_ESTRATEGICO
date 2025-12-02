<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Investigación de mercado
 

    .container.mb-2
      .row.align-items-center(data-aos="fade-left")
        //- banner con tarjeta
        .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
          .col-lg-12.mb-2
            div.tarjeta-horz.mb-3
              img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen decorativa')
              div.texto-tarjeta.bg-white
                  p.mb-0 La investigación de mercados es un proceso sistemático que permite recopilar, analizar e interpretar información relevante sobre consumidores, competidores y el entorno comercial. Su propósito principal es reducir la incertidumbre en la toma de decisiones estratégicas, facilitando el diseño de productos, campañas y canales de distribución más efectivos. 

        .col-12.col-md-12.col-lg-10.mx-auto
          .bloque-texto-b.color-terciario
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-0.ps-3 Según Malhotra (2019),  
              p.mb-0  esta disciplina combina métodos cuantitativos y cualitativos para comprender las necesidades del mercado, identificar oportunidades y evaluar el desempeño de las acciones comerciales.
              i.fas.fa-quote-right
      
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_1 2.1 Tipos

    .row.align-items-center.justify-content-center(data-aos="fade-left").mb-4
      .col-12.col-md-6.col-lg-1.mb-4.mb-lg-0
        figure
          img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema2/img03.svg', alt='Imagen Decorativa')

      .col-12.col-md-12.col-lg-11
        p.mb-0  Existen diversos tipos de investigación de mercados, cada uno con características específicas que responden a distintos objetivos empresariales. A continuación, se presentan los principales:

    .row.align-items-center(data-aos="fade-left").mb-5
      .row.justify-content-center.mb-2
        .col-xl-3.col-lg-6.col-12.mb-4.mb-xl-0.col-md-6
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/img04.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Exploratoria
              p Se utiliza en las etapas iniciales del estudio para obtener una comprensión general del problema o identificar variables relevantes. Suele emplear técnicas cualitativas como entrevistas o grupos focales.

        .col-xl-3.col-lg-6.col-12.mb-4.mb-xl-0.col-md-6
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/img05.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Descriptiva
              p Permite cuantificar características del mercado, comportamientos de compra o perfiles de consumidores. Utiliza encuestas y análisis estadísticos para describir una situación existente.

        .col-xl-3.col-lg-6.col-12.mb-4.mb-xl-0.col-md-6
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/img06.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Causal o explicativa
              p Busca determinar relaciones de causa y efecto entre variables, evaluando cómo un cambio en una de ellas puede influir en otra. Es común en pruebas de producto o campañas publicitarias.

        .col-xl-3.col-lg-6.col-12.mb-4.mb-xl-0.col-md-6
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/img07.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Predictiva
              p Se orienta a anticipar tendencias y comportamientos futuros del mercado mediante modelos estadísticos o herramientas de análisis de datos. Es clave para la planificación estratégica.

    
    //- Col8 y Col3
    .row.align-items-center(data-aos="fade-left")
      .col-12.col-lg-12.col-xl-10.bg12.justify-content-center.p-4.tarjeta.mx-auto.position-relative
        .row.align-items-center
          .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img08.png', alt='imagen decorativa').w-auto.img01

          .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
            p.mb-0 Cada tipo responde a una etapa distinta del proceso de toma de decisiones. Por ejemplo, una empresa de moda sostenible puede iniciar con una investigación exploratoria para entender qué significa “sostenibilidad” para sus clientes, luego aplicar una investigación descriptiva para perfilar a sus compradores, y finalmente usar técnicas predictivas para estimar la demanda de una nueva colección. La investigación causal sería útil para evaluar si una campaña publicitaria específica incrementa las ventas.

    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_2 2.2 Métodos

      
    //- Col3 y Col9
    .row.align-items-center(data-aos="fade-left")
      p.mb-4 Las técnicas de investigación representan los métodos de recolección de datos y se dividen en dos grandes grupos: cualitativas y cuantitativas; ambas son complementarias y permiten obtener una visión integral del mercado.

      TabsB.color-primario
        div(titulo="Cualitativos" :icono="require('@/assets/curso/temas/tema2/img09.svg')")
          .row.align-items-center
            .col-12.col-md-12.col-lg-9
              p.mb-0 Se enfocan en comprender percepciones, motivaciones y comportamientos del consumidor. Utilizan técnicas como entrevistas en profundidad, grupos focales, observación directa y análisis de contenido. 
            .col-12.col-sm-12.col-md-8.col-lg-3.mx-auto
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img11.png', alt='Imagen Decorativa')

        div(titulo="<em>Checklists</em> operativos: verificación de ejecución en campo." :icono="require('@/assets/curso/temas/tema2/img10.svg')")
          .row.align-items-center
            .col-12.col-md-12.col-lg-9
              p.mb-0 Permiten medir y analizar datos numéricos para identificar patrones, preferencias o niveles de satisfacción. Emplean encuestas estructuradas, experimentos y análisis estadístico de la información. 
            .col-12.col-sm-12.col-md-8.col-lg-3.mx-auto
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img12.png', alt='Imagen Decorativa')

    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_3 2.3 Fuentes de información

    .row.align-items-center(data-aos="fade-left")
      p.mb-4 En el proceso de investigación de mercados, las fuentes de información se clasifican en primarias y secundarias, según el origen de los datos. Esta distinción es fundamental para definir el enfoque metodológico, el presupuesto y el tiempo requerido para obtener resultados confiables.
      .row.justify-content-center.mb-5
        .col-xl-6.col-lg-6.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left").round-2
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/img13.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Fuentes primarias
              p Son datos obtenidos directamente del mercado mediante encuestas, entrevistas, observaciones o experimentos. Proporcionan información actualizada, específica y alineada con los objetivos del estudio. Su principal ventaja es el control sobre la calidad y pertinencia de los datos, aunque requieren mayor inversión de tiempo y recursos para su obtención (Malhotra, 2019).

        .col-xl-6.col-lg-6.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left").round-2
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema2/img14.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Fuentes secundarias
              p Corresponden a información previamente recopilada por otras entidades o investigaciones. Incluyen informes sectoriales, estadísticas oficiales, bases de datos académicas y registros empresariales. Permiten conocer tendencias generales del mercado y complementar la información primaria, con menor costo y tiempo de acceso (Malhotra, 2019).

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
        .col-12.col-md-12.col-lg-5.mx-auto.mb-2
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img15.png', alt='Imagen Decorativa')
          
        .col-12.col-md-12.col-lg-7
          .row.align-items-center

            .col-12.col-md-12.col-lg-12.mx-auto.mb-3
              .bloque-texto-b.color-terciario
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-0 Aunque son más accesibles y económicas, las fuentes secundarias pueden presentar limitaciones en cuanto a actualidad, profundidad o relevancia específica
                  p.mb-0.ps-3 <br>
                    b (Aaker et al., 2017).
                  i.fas.fa-quote-right

            .col-12.col-md-12.col-lg-12.mx-auto
              .row.align-items-center.round-1.bg-color-terciario-t20.p-3(data-aos="fade-left")
                .col-12.col-md-6.col-lg-2.mx-auto
                  figure
                    img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema2/img16.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-10
                  p.mb-0 La combinación de ambas fuentes permite enriquecer el análisis y tomar decisiones más informadas, en contextos empresariales, es común iniciar con fuentes secundarias para contextualizar el problema y luego aplicar técnicas primarias para profundizar en aspectos específicos del público objetivo.
                    

</template>

<script>
export default {
  name: 'Tema2',
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
