<template>
  <div class="bg-white row m-0 overflow-hidden p-0" style="height: 100vh">
    <div class="col-md-6 d-none d-md-block p-0">
      <swiper
        swiper
        :spaceBetween="50"
        :effect="'fade'"
        :autoplay="{
          delay: 3600,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide>
          <div class="swiper-slide__content">
            <img
              src="@/assets/images/slider-1.png"
              alt=""
              class="img-fluid d-block bg h-100"
            />
            <div class="text-wrapper">
              <img
                src="@/assets/images/logo-white.png"
                alt=""
                class="img-fluid d-block"
              />
              <h2>Déplacez-vous en dépensant moins</h2>
              <h6>
                Des centaines de trajets pour vous attendent pour économiser de
                l’argent lors de vos déplacements.
              </h6>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="swiper-slide__content">
            <img
              src="@/assets/images/slider-2.png"
              alt=""
              class="img-fluid d-block bg h-100"
            />
            <div class="text-wrapper">
              <img
                src="@/assets/images/logo-white.png"
                alt=""
                class="img-fluid d-block"
              />
              <h2>Gagnez de l’argent</h2>
              <h6>
                WA ZEMI est le moyen le plus sûr pour gagner de l’argent en
                partageant vos places libres.
              </h6>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="swiper-slide__content">
            <img
              src="@/assets/images/slider-3.png"
              alt=""
              class="img-fluid d-block bg h-100"
            />
            <div class="text-wrapper">
              <img
                src="@/assets/images/logo-white.png"
                alt=""
                class="img-fluid d-block"
              />
              <h2>Créez des liens pour la vie</h2>
              <h6>
                Le temps d’un voyage ensemble, de beaux moments se vivent, des
                liens se créent pourquoi pas pour toujours ?
              </h6>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="col-md-6 col-sm-12 h-75 d-flex justify-center">
      <div class="d-flex flex-column align-items-center w-75 m-auto">
        <img
          src="@/assets/images/logo-dark.png"
          alt=""
          width="100"
          class="img-fluid mb-5 m-t-50"
        />
        <h4 class="mb-5 f-w-400">Connexion</h4>

        <div class="w-100 mb-3">
          <h5 class="labels">Adresse email</h5>
          <input
            type="email"
            class="form-control"
            v-model="loginForm.email"
            placeholder="Email"
          />
        </div>
        <div class="w-100 mb-3">
          <label class="labels">Mot de passe</label>
          <input
            type="password"
            @keydown.enter="handleLogin()"
            :feedback="false"
            toggleMask
            class="form-control"
            v-model="loginForm.password"
            placeholder="Mot de passe"
          />
        </div>
        <Button
          class="btn btn-sm w-100 login_button"
          iconPos="right"
          @click="handleLogin()"
          :disabled="loading"
          >Se connecter
          <i class="mdi mdi-check ml-1" v-if="loading == false"></i>
          <i class="spinner-border spinner-border-sm ml-1" v-else></i>
        </Button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { EffectFade, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay]);

export default {
  name: "LoginView",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
    },
  },
};
</script>
  
  <style lang="scss">
input {
  width: 100%;
}
.labels {
  font-size: 12px;
  font-weight: 600;
  color: #999;
  width: 100%;
  text-align: start;
  margin-bottom: 2px;
}
.login_button,
.login_button:hover {
  background-color: #fab917 !important;
  border-color: #fab917 !important;
  color: white;
}

.swiper-slide__content {
  position: relative;
  height: 100vh;

  img.bg {
    z-index: 100;
    position: absolute;
  }
  .iconcolor {
    color: white !important;
  }
  .text-wrapper {
    display: flex;
    position: absolute;
    transform: translate(5%, 100%);
    color: #fff;
    flex-direction: column;
    align-items: flex-start;
    z-index: 300;

    h2 {
      font-weight: 300;
      font-size: 1.5rem;
      margin-top: 20px;
    }

    h6 {
      font-weight: 300;
      margin-top: 10px;
      line-height: 24px;
      width: 80%;
    }
  }
}
</style>
