<template>
  <router-view></router-view>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('get_dashboard'); // consumo de json de Dashboard
    this.$store.dispatch('get_banklist');
  },
}
</script>
