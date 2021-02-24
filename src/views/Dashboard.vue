<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-info">
      <b-card
        :title="'Hola, '+[get_usuario.nombre]+' '+[get_usuario.apellido]"
        img-src="https://picsum.photos/600/150/?image=2"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2 px-0 mx-auto col-12 col-sm-9 col-lg-12" style="transition-duration: 0.5s"
      >
        <b-card-text v-text="get_usuario.mensaje"></b-card-text>
        <b-button href="#" variant="success">Solicítalo aquí</b-button>
      </b-card>
      <!-- Card stats -->
      <b-row>
        <b-col xl="6" lg="6" md="9" sm="9" class="my-2 mx-auto" style="transition-duration: 0.5s">
          <b-card 
              :title="lineaC.nombre"
              type="gradient-orange"
              >
            <b-card-body class="my-0 p-sm-0 p-md-0 row align-items-center text-center">
              <div class="data-summary col-6 col-md-6"> 
                <b-card-text><strong> {{lineaC.utilizado}} </strong> utilizado</b-card-text>
                <b-card-text><strong> {{lineaC.disponible}} </strong> disponible</b-card-text>
              </div> 
              <hr class="my-0">            
              <div class="small my-0 col-6 col-md-6">
                <line-chart
                v-if="loaded"
                :chartdata="chartdataLinea"
                :options="options"/>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col xl="6" lg="6" md="9" sm="9" class="my-2 mx-auto" style="transition-duration: 0.5s">
          <b-card
              :title="tarjetaC.nombre"
              type="gradient-orange" 
              >
            <b-card-body class="my-0 p-sm-0 p-md-0 row align-items-center text-center">
            <div class="data-summary col-6 col-md-6">   
                <b-card-text><strong> {{tarjetaC.utilizado}} </strong> utilizado</b-card-text>
                <b-card-text><strong> {{tarjetaC.disponible}} </strong> disponible</b-card-text>
              </div>
              <hr class="my-0"> 
              <div class="small my-0 col-6 col-md-6">
                <line-chart 
                v-if="loaded"
                :chartdata="chartdataTarjeta"
                :options="options"/>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </base-header>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';
  import LineChart from "@/components/chart_cupo";

  export default {
    components: { 
      BaseProgress,
      StatsCard,
      LineChart
    },
    data() {
      return {
        loaded: false,
        chartdataLinea: null,
        chartdataTarjeta: null,
        options: {
          responsive: true,
          cutoutPercentage: 80,  // tamaño del hoyo del doughnut
          legend: { position: 'bottom' },
          maintainAspectRatio: false
        },
        usuario: '', // si hay login...
      }
    },
    computed: {
      ...mapGetters(["get_usuario", "get_cupos"]),
      lineaC(){
        return this.get_cupos[0];
      },
      tarjetaC(){
        return this.get_cupos[1];
      }
    },
    methods: {
    },
    async mounted () {
      this.loaded = false
      let cupoLinea = this.get_cupos[0];
      let cupoTarjeta = this.get_cupos[1];
      let porcentajeLinea = {
        utilizado: ((cupoLinea.utilizado*100)/cupoLinea.disponible).toFixed(1),
        disponible: (100-((cupoLinea.utilizado*100)/cupoLinea.disponible)).toFixed(1),
      }
      let porcentajeTarjeta = {
        utilizado: ((cupoTarjeta.utilizado*100)/cupoTarjeta.disponible).toFixed(1),
        disponible: (100-((cupoTarjeta.utilizado*100)/cupoTarjeta.disponible)).toFixed(1),
      }
      try {
        this.chartdataLinea = { //datos Linea de crédito
          labels: ['Utilizado (%)', 'Disponible (%)'],
          datasets: [
            {
              backgroundColor: ['gray','#cd0048'],
              data: [porcentajeLinea.utilizado, porcentajeLinea.disponible]
            }, 
          ]
        }
        this.chartdataTarjeta = { //datos Tarjeta de crédito
          labels: ['Utilizado (%)', 'Disponible (%)'],
          datasets: [
            {
              backgroundColor: ['gray','#cd0048'],
              data: [porcentajeTarjeta.utilizado, porcentajeTarjeta.disponible]
            }, 
          ]
        }
        this.loaded = true;
      } 
      catch (e) {
        console.error(e)
      }
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
.small{
  position: relative;
  margin:  150px auto;
}

.small #doughnut-chart{
  max-width: 200px;
  max-height: 180px;
}
</style>
