import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_active: {},
    usuario: {},
    cupos: {},
    cartola: {},
    bancos: {}
  },
  getters: {
    get_usuario(state){
      return state.usuario;
    },
    get_cupos(state){
      return state.cupos;
    },
    get_cartola(state){
      return state.cartola;
    },
    get_bancos(state){
      return state.bancos;
    }
  },
  mutations: {
    set_user (state, dataUser){
      state.user_active = dataUser; 
    },
    set_dashdata (state, data){ // usuario y cupos
      state.usuario = data.usuario; 
      state.cupos = data.cupos;
    },
    set_cartola (state, data){
      state.cartola = data;
    },
    set_bancos (state, data){
      state.bancos = data;
    },
  },
  actions: {
    user_authentication({ commit }, datoslogin) {
      let authdata = datoslogin;
      axios
        .post(
          "http://BASE_URL/api/v1/bdc/users/login", {}, {
            auth: {
              username: authdata.id,
              password: authdata.password
            }
          }
        )
        .then((respuesta) => {
          const { data } = respuesta;
          console.log(data)
          console.log('Autenticado con éxito');
          commit('set_user', respuesta.data);
        })
        .catch(error => {
          console.error(error);
          console.log('No se pudo autenticar.');
        })
    },

    get_dashboard({ commit }) {
      axios
        .get(
          'data_json/dashboard.json'
        )
        .then((resp) => {
          commit('set_dashdata', resp.data);
          console.log('Datos del dashboard recibidos.');
        })
        .catch((error) => {
          console.log(error);
          console.log('Datos del dashboard no recibidos.');
        })
    },
    get_trx({ commit }) {
      axios
        .get(
          'data_json/cartola_transf.json'
        )
        .then((resp) => {
          commit('set_cartola', resp.data);
          console.log('Datos de la cartola recibidos.');
        })
        .catch((error) => {
          console.log(error);
          console.log('Datos de la cartola no recibidos.');
        })
    },
    get_banklist({ commit }) {
      axios
        .get(
          'data_json/bancos.json'
        )
        .then((resp) => {
          commit('set_bancos', resp.data);
          console.log('Lista de bancos recibida.');
        })
        .catch((error) => {
          console.log(error);
          console.log('Lista de bancos no recibida.');
        })
    },
  }
})

