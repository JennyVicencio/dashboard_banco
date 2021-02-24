<template>
   <b-container>
      <h2>Nueva transferencia</h2>
         <b-col>
            <h3>Cuenta de origen</h3>
            <b-row class="my-1">
               <b-col sm="12" md="12" lg="12">
                  <b-form-group v-slot="{ ariaDescribedby }">
                     <b-form-checkbox-group
                     id="checkbox-group-2"
                     v-model="cuentaseleccionada"
                     :aria-describedby="ariaDescribedby"
                     name="cta-origen"
                     >
                     <b-form-checkbox class="col-12 col-md-4 mx-0 pe-1" value="1">Cuenta corriente</b-form-checkbox>
                     <b-form-checkbox class="col-12 col-md-4 mx-0 pe-1" value="2">Línea de crédito</b-form-checkbox>
                     <b-form-checkbox class="col-12 col-md-4 mx-0 pe-1" value="3">Tarjeta de crédito</b-form-checkbox>
                     </b-form-checkbox-group>
                     <div>Cta. seleccionada: <strong>{{ cuentaseleccionada }}</strong></div>
                  </b-form-group>
               </b-col> 
            </b-row>
         </b-col>
         <b-col>
            <h3>Cuenta de destino</h3>
            <b-form>
               <b-row class="my-1">
                  <b-col sm="4" class="text-sm-right">
                     <label for="number">Banco:</label>
                  </b-col>
                  <b-col sm="8">
                     <b-form-select v-model="bancoseleccionado">
                        <b-form-select-option :value="null">Selecciona un banco.</b-form-select-option>
                        <b-form-select-option v-for="(item, i) in get_bancos.bancos" :key="i" :value="item.id"> {{item.nombre}} </b-form-select-option>
                     </b-form-select>
                  </b-col>
               </b-row>
               <b-row class="my-1">
                  <b-col sm="4" class="text-sm-right">
                     <label for="number">N° cuenta:</label>
                  </b-col>
                  <b-col sm="8">
                     <b-form-input v-model="numcuenta" type="text"></b-form-input>
                  </b-col>
               </b-row>
               <b-row class="my-1">
                  <b-col sm="4" class="text-sm-right">
                     <label for="username">Nombre:</label>
                  </b-col>
                  <b-col sm="8">
                     <b-form-input v-model="nombrecliente" type="text"></b-form-input>
                  </b-col>
               </b-row>
               <b-row class="my-1">
                  <b-col sm="4" class="text-sm-right">
                     <label for="number" type="number">RUT:</label>
                  </b-col>
                  <b-col sm="8">
                     <b-form-input v-model="rutcliente" type="number"></b-form-input>
                  </b-col>
               </b-row>
               <b-row class="my-1">
                  <b-col sm="4" class="text-sm-right">
                     <label for="number" type="number">Monto:</label>
                  </b-col>
                  <b-col sm="8">
                     <b-form-input v-model="montothx" type="number"></b-form-input>
                  </b-col>
               </b-row>
               <b-row class="my-1">
                  <b-col sm="4" class="text-sm-right">
                     <label for="username">Correo electrónico:</label>
                  </b-col>
                  <b-col sm="8">
                     <b-form-input v-model="correocliente" type="email"></b-form-input>
                  </b-col>
               </b-row>
               <b-row class="my-1">
                  <b-col sm="4" class="text-sm-right">
                     <label for="text">Mensaje:</label>
                  </b-col>
                  <b-col sm="8">
                     <b-form-input v-model="mensajethx" type="text"></b-form-input>
                  </b-col>
               </b-row>
               <b-button variant="primary" class="my-3" @click="hacerTransferencia">Transferir</b-button>
            </b-form>
         </b-col>
   </b-container>
</template>
<script>
import { mapGetters } from "vuex";
import Swal from 'sweetalert2'

export default {
   name: 'NuevaTrx',
   data() {
      return {
         cuentaseleccionada: null,
         bancoseleccionado: null,
         numcuenta: null,
         nombrecliente: null,
         rutcliente: null,
         correocliente: null,
         montothx: null,
         mensajethx: null,
      }
   },
   computed: {
      ...mapGetters(["get_bancos"]),
   },
   methods: {
      hacerTransferencia() {
         if (this.cuentaseleccionada && this.bancoseleccionado&& this.numcuenta && this.nombrecliente && this.rutcliente && this.correocliente && this.montothx) {
            Swal.fire(
               'Éxito',
               'La transferencia se ha realizado con éxito.',
               'success'
            )
            this.resetForm();
         }
         else {
            Swal.fire(
               'Fallo',
               'Parece que faltan datos.',
               'question'
            )
         }
      },
      resetForm(){
         this.cuentaseleccionada = "";
         this.bancoseleccionado = "";
         this.numcuenta = "";
         this.nombrecliente = "";
         this.rutcliente = "";
         this.correocliente = "";
         this.montothx = "";
         this.mensajethx = "";
      }
   }
}
</script>