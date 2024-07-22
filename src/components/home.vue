<template>
  <div class="">
    <h1 id="heading" class="text-center">
      KNOW ME MORE
    </h1>
    <template>
      <v-banner class="ml-15 mr-16 pt-16 mt-3 banner-box" two-line>
        <v-avatar slot="icon" color="black" size="40">
          <v-icon icon="mdi-lock" color="white"> mdi-circle-outline </v-icon>
        </v-avatar>

        <span class="font-weight-bold black--text text-h"
          >Perspectives on matter: Agree or Disagree</span
        >
        <p class="mt-2">
          This section typically presents a statement or argument and invites
          respondents to express their agreement or disagreement. Optionally,
          participants can provide reasoning or discuss why they agreed or
          disagreed, but their final opinion will be recorded as either 'agree'
          or 'disagree'.
        </p>

        <template v-slot:actions>
          <v-btn
            style="float: right; margin-bottom: 35px"
            class="mx-2 mr-8"
            fab
            small
            dark
            color="blue"
            @click="goAgreeDisAgree()"
          >
            <v-icon dark> mdi-chevron-right </v-icon>
          </v-btn>
        </template>
      </v-banner>
    </template>

    <br />
    <template>
      <v-banner class="ml-15 mr-16 banner-box" two-line>
        <v-avatar slot="icon" color="black" size="40">
          <v-icon icon="mdi-lock" class="mt-n1" color="white">
            mdi-triangle-outline
          </v-icon>
        </v-avatar>

        <span class="font-weight-bold black--text text-h"
          >Perspectives on matter: Yes or No</span
        >
        <p class="mt-2">
          This section usually presents a statement or argument, prompting
          respondents to either openly accept with 'yes' or reject with 'no'.
          Participants may optionally provide reasoning or discuss their
          acceptance or rejection, but their ultimate stance will be recorded as
          either 'yes' or 'no'.
        </p>

        <template v-slot:actions>
          <v-btn
            style="float: right; margin-bottom: 35px"
            class="mx-2 mr-8"
            fab
            small
            dark
            color="blue"
            @click="goYesNo()"
          >
            <v-icon dark> mdi-chevron-right </v-icon>
          </v-btn>
        </template>
      </v-banner>
    </template>

    <br />
    <template>
      <v-banner class="ml-15 mr-16 banner-box" two-line>
        <v-avatar slot="icon" color="black" size="40">
          <v-icon icon="mdi-lock" color="white"> mdi-square-outline </v-icon>
        </v-avatar>

        <span class="font-weight-bold black--text text-h"
          >Perspectives on matter: Scenario Driven</span
        >
        <p class="mt-2">
          This section typically presents a scenario or situation, prompting
          respondents to explain their approach or understanding of the scene,
          as well as what actions they would take in that situation. It may take
          time for respondents to reach a common conclusion.
        </p>

        <template v-slot:actions>
          <v-btn
            style="float: right; margin-bottom: 35px"
            class="mx-2 mr-8"
            fab
            small
            dark
            color="blue"
            @click="goScene()"
          >
            <v-icon dark> mdi-chevron-right </v-icon>
          </v-btn>
        </template>
      </v-banner>
    </template>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data: () => ({
    provider_type: null,
  }),
  metaInfo() {
    return {
      title: "Welcome",
    };
  },
  methods: {
    goAgreeDisAgree() {
      let agreeDisagree = this.$store.state.agreeDisagree;
      if (agreeDisagree.length > 0) this.$router.push("/done.agree.disagree");
      else this.$router.push("/agree.disagree");
    },
    goYesNo() {
      let yesNo = this.$store.state.yesNo;
      if (yesNo.length > 0) this.$router.push("/done.yes.no");
      else this.$router.push("/yes.no");
    },
    goScene() {
      let scene = this.$store.state.scene;
      if (scene.length > 0) this.$router.push("/done.scene");
      else this.$router.push("/scene");
    },
  },
};
</script>

<style scoped>
#heading {
  background-color: rgb(238, 240, 243);
}
p {
  font-size: 16px;
}
.text-h {
  font-size: 18px;
}
@media only screen and (max-width: 420px) {
  .banner-box {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
  #heading {
    margin-top: 30px !important;
    margin-bottom: 0px !important;
  }
}
</style>
