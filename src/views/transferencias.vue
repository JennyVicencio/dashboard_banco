<template>
  <div>
       <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-warning">
      <b-row>
        <b-col xl="12" md="12">
          <b-tabs content-class="mt-3">
            <!-- This tabs content will always be mounted -->
            <b-tab title="Nueva transferencia">
              <NuevaTrx />
            </b-tab>

            <!-- This tabs content will not be mounted until the tab is shown -->
            <!-- and will be un-mounted when hidden -->
            <b-tab title="Cartola transferencias" lazy>
              <TablaCartola />
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </base-header>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BaseHeader from '@/components/BaseHeader';
  import TablaCartola from '@/components/TablaCartola';
  import NuevaTrx from '@/components/NuevaTrx';


  Vue.use(VueClipboard)
  export default {
    name: 'transferencias',
    components: {
      BaseHeader, TablaCartola, NuevaTrx
    },
    methods: {
      onCopy() {
        this.$notify({
          type: 'info',
          message: 'Copied to clipboard'
        })
      }
    }
  };
</script>
<style></style>
