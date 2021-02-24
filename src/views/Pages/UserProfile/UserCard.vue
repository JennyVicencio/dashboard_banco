<template>
  <b-card no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="3" class="order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <b-img src="img/user.png" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>

    <b-card-body class="pt-9">
      <div class="text-center">
        <h5 class="h3">
          {{get_usuario.nombre}}<span class="font-weight-light">, 30</span>
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-2"></i>Santiago, Chile
        </div>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>Ingeniero - Creative Tim Officer
        </div>
        <div>
          <i class="ni education_hat mr-2"></i>Universidad de la Vida
        </div>
        <hr class="my-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem natus minima, voluptatem nam culpa alias error rem libero nostrum at corporis dolore voluptatibus omnis eius temporibus voluptas vitae. Et!</p>
        <a href="#">Ver más</a>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    computed: {
      ...mapGetters(["get_usuario"]),
    },
};
</script>
<style></style>
