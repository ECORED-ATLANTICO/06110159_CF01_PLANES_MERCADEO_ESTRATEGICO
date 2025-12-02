<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-sm-12.col-md-8.col-lg-3.mx-auto.mb-4.mb-lg-0
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/sintesis/img01.png', alt='Imagen Decorativa')
      .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
        p El componente formativo Mercado potencial permite comprender los fundamentos estratégicos del mercadeo, desde la identificación de oportunidades comerciales hasta la definición de segmentos y perfiles de clientes. Se inicia con el estudio de los tipos y variables del mercado potencial, así como su relación con la demanda y la competencia. Posteriormente, se profundiza en la investigación de mercado, lo que permite establecer su importancia en la toma de decisiones basadas en información confiable. 
        p Asimismo, se analizan las tendencias y herramientas para su evaluación, proporcionando criterios para anticipar cambios y comportamientos del consumidor. Se presentan los elementos que influyen en la construcción del perfil de mercado, así como el desarrollo del <em>buyer</em> persona y su papel en la planeación estratégica. La documentación aborda los métodos y fuentes de información aplicadas al análisis de mercado. Para fortalecer la aplicación de estos conceptos, se detallan los aspectos relacionados con la segmentación, sus criterios, estándares y buenas prácticas. Finalmente, se analiza la integración de todos estos elementos en la formulación de planes de mercadeo más competitivos y sostenibles .
          

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Mercado potencial ofrece una aproximación integral a los conocimientos fundamentales sobre la identificación y caracterización de mercados, y el análisis estratégico para la toma de decisiones comerciales. Este módulo analiza detalladamente los tipos y variables del mercado potencial, resaltando su importancia en cuanto a la comprensión del comportamiento del consumidor y la proyección de la demanda, y se desglosan los métodos y fuentes de información empleadas en la investigación de mercado. Asimismo, se estudian las tendencias del entorno y las herramientas que permiten interpretar los cambios en las preferencias y necesidades del público objetivo. La propuesta profundiza en la construcción del perfil de mercado y la creación del buyer persona, así como en la segmentación y los criterios que orientan la selección de nichos estratégicos. Además, se destacan las buenas prácticas y estándares de segmentación, junto con el uso de estrategias analíticas, enfatizando su aplicación para formular planes de mercadeo sostenibles, coherentes y alineados con los objetivos empresariales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
