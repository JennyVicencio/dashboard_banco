import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut, // aquí se cambia el tipo
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}