<template>
  <card>
    <b-row align-v="center" slot="header" >
      <b-col cols="8">
        <h3 class="mb-0">Editar perfil</h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <a href="#" class="btn btn-sm btn-primary">Ajustes</a>
      </b-col>
    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">Datos del usuario</h6>
      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Username"
              placeholder="Username"
              v-model="user.username"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="email"
              label="Email address"
              placeholder="mike@email.com"
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="First Name"
              placeholder="First Name"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Datos de contacto</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="12">
            <base-input
              type="text"
              label="Address"
              placeholder="Home Address"
              v-model="user.address"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4">
            <base-input
              type="text"
              label="City"
              placeholder="City"
              v-model="user.city"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Country"
              placeholder="Country"
              v-model="user.country"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              label="Postal Code"
              placeholder="ZIP Code"
              v-model="user.postalCode"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>

      <hr class="my-4">
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">Sobre mí</h6>
      <div class="pl-lg-4">
        <b-form-group label="Sobre mí" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
         <!--  <label class="form-control-label">About Me</label> -->
          <b-form-textarea rows="4" value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos aspernatur nemo impedit quas ea! Temporibus, eius. Dicta deleniti libero eveniet temporibus unde necessitatibus aut, at, repudiandae non dolore omnis." id="about-form-textaria" placeholder="A few words about you ..."></b-form-textarea>
          
          <button href="#" type="submit" class="btn btn-sm btn-info mx-auto my-2">Actualizar</button>
        </b-form-group>
      </div>

    </b-form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'asdf',
        email: '',
        firstName: 'Luis',
        lastName: 'Cifuentes',
        address: 'Asdf Street, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'Santiago',
        country: 'Chile',
        postalCode: '555555',
        aboutMe: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos aspernatur nemo impedit quas ea! Temporibus, eius. Dicta deleniti libero eveniet temporibus unde necessitatibus aut, at, repudiandae non dolore omnis.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Tus datos han sido actualizados.');
      this.$router.push('/dashboard');
    }
  }
};
</script>
<style></style>
