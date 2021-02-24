<template>
   <div>
    <b-table responsive striped hover :items="get_cartola.transferencias" :fields="fields" table-variant="light"></b-table>
   </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'TablaCartola',
    data() {
      return {
        fields: [
            {  
               key: 'num_trx',
               label: 'N° Transferencia',
               sortable: true
            },
            {
               key: 'fecha',
               label: 'Fecha',
               sortable: false
            },
            {
               key: 'destinatario',
               label: 'Destinatario',
               sortable: true,
            },
            {
               key: 'monto',
               label: 'Monto',
               sortable: true,
            },
            {
               key: 'estado',
               label: 'Estado',
               sortable: true,
            }
        ],
        tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
        ]
      }
    },
    computed: {
      ...mapGetters(["get_cartola"]),
    },
    mounted() {
      this.$store.dispatch('get_trx');
    },
  }
</script>