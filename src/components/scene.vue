<template>
  <!-- <span class="black--text text-h5"
      >Get started with your <strong>name and location</strong></span
    > -->
  <v-stepper v-model="curr_step" id="stepper_wrapper">
    <v-stepper-header>
      <template v-for="(data, index) in qData">
        <v-stepper-step
          :color="checkAgreement(index + 1)"
          :complete="curr_step > index + 1"
          :step="index + 1"
        >
        </v-stepper-step>
        <v-divider v-if="index + 1 !== qData.length"></v-divider>
      </template>
    </v-stepper-header>

    <v-stepper-items v-for="(data, index) in qData" :key="index + 'qBody'">
      <v-stepper-content :step="index + 1">
        <v-container class="container-box">
          <span
            class="black--text text-h2"
            style="font-size: 45px !important"
            >{{ data }}</span
          >
        </v-container>
      </v-stepper-content>
    </v-stepper-items>

    <div id="div_body" v-if="curr_step < 1">
      <div id="inner_div_body">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12">
              <!-- <span class="black--text dark-v">Your name</span> -->
              <v-text-field
                label="Your name"
                outlined
                clearable
                color="blue"
                hint="This field is required!"
                counter
                placeholder="Jhon Wick"
                maxlength="25"
                class="mt-2"
                v-model="your_name"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <!-- <span class="black--text dark-v">Partner's name</span> -->
              <v-text-field
                label="Partner's name"
                outlined
                clearable
                color="blue"
                hint="This field is required!"
                counter
                placeholder="Rose Copper"
                maxlength="25"
                class="mt-2"
                v-model="your_part_name"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn
          style="float: right"
          class="mx-2 mt-8"
          fab
          dark
          color="blue"
          :disabled="
            your_name.trim().length == 0 || your_part_name.trim().length == 0
          "
          @click="startQ()"
        >
          <v-icon dark> mdi-chevron-right </v-icon>
        </v-btn>
      </div>
    </div>
    <div v-else>
      <template>
        <v-footer
          padless
          style="position: fixed; bottom: 0; width: 100vw; height: 10vh"
        >
          <v-btn
            style="position: fixed; right: 10px"
            class="mx-2"
            fab
            dark
            color="blue"
            @click="goNext()"
            :disabled="p1.length === 1 || p2.length === 1"
          >
            <v-icon dark> mdi-chevron-right </v-icon>
          </v-btn>
          <v-btn
            style="position: fixed; left: 10px"
            class="mx-2"
            fab
            dark
            color="blue"
            @click="goPrev()"
            :disabled="curr_step == 1"
          >
            <v-icon dark> mdi-chevron-left </v-icon>
          </v-btn>
          <div
            style="
              position: fixed;
              margin-left: 50%;
              transform: translate(-50%);
            "
          >
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-2"
                  outlined
                  color="blue"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ your_name }} : {{ p1 }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title
                    style="cursor: pointer"
                    @click="setP1('Satisfied')"
                    >Satisfied with {{ your_part_name }}</v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    style="cursor: pointer"
                    @click="setP1('Partially satisfied')"
                    >Partially satisfied with
                    {{ your_part_name }}</v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    style="cursor: pointer"
                    @click="setP1('Not satisfied')"
                    >Not satisfied with
                    {{ your_part_name }}</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-2"
                  outlined
                  color="blue"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ your_part_name }} : {{ p2 }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title
                    style="cursor: pointer"
                    @click="setP2('Satisfied')"
                    >Satisfied with {{ your_name }}</v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    style="cursor: pointer"
                    @click="setP2('Partially satisfied')"
                    >Partially satisfied with {{ your_name }} </v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    style="cursor: pointer"
                    @click="setP2('Not satisfied')"
                    >Not satisfied with {{ your_name }} </v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-footer>
      </template>
    </div>
  </v-stepper>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      curr_step: 0,
      your_part_name: "",
      your_name: "",
      qData: [],
      p1: "▼",
      p2: "▼",
    };
  },
  metaInfo() {
    return {
      title: "Questions",
    };
  },
  methods: {
    async readFile() {
      const response = await axios.get(`assets/scene.txt`);
      this.qData = response.data
        .replaceAll("\n", "")
        .replaceAll("\r", "")
        .split(":");
      this.qData.shift();
    },
    startQ() {
      this.curr_step = this.curr_step + 1;
      this.$store.commit("setYourName", this.your_name);
      this.$store.commit("setPartnerName", this.your_part_name);
    },
    goNext() {
      if (this.curr_step < this.qData.length) {
        this.curr_step = this.curr_step + 1;
        this.populateData();
      } else {
        this.$router.push("/done.scene");
      }
    },
    goPrev() {
      if (this.curr_step !== 1) {
        this.curr_step = this.curr_step - 1;
        this.populateData();
      }
    },
    saveData() {
      let obj = {
        qid: this.curr_step,
        p1_data: this.p1,
        p2_data: this.p2,
      };
      if (this.p1.length > 1 && this.p2.length > 1) {
        this.$store.commit("setScene", obj);
      }
    },
    populateData() {
      let scene = this.$store.state.scene;
      let isFound = false;
      scene.forEach((ele) => {
        if (this.curr_step == ele.qid) {
          this.setP1(ele.p1_data);
          this.setP2(ele.p2_data);
          isFound = true;
        }
      });
      if (!isFound) {
        this.setP1("▼");
        this.setP2("▼");
      }
    },
    setP1(data) {
      this.p1 = data;
    },
    setP2(data) {
      this.p2 = data;
    },

    checkAgreement(step) {
      let scene = this.$store.state.scene;
      let matched = false;
      scene.forEach((ele) => {
        if (step == ele.qid && ele.p1_data == ele.p2_data) {
          matched = true;
        }
      });

      if (matched) return "green";
      else return "red";
    },
    fetchNames() {
      let your_name = this.$store.state.your_name;
      let your_part_name = this.$store.state.partner_name;

      if (your_name.length > 1 && your_part_name.length > 1) {
        this.your_name = your_name;
        this.your_part_name = your_part_name;
      }
    },
  },
  mounted() {
    this.readFile();
    this.fetchNames();
  },
  watch: {
    p1() {
      this.saveData();
    },
    p2() {
      this.saveData();
    },
  },
};
</script>
<style scoped>
#div_body {
  height: 100vh;
  width: 100vw;
  position: relative;
}
#stepper_wrapper {
  overflow: hidden;
  height: 100vh;
}
#inner_div_body {
  height: 65vh;
  width: 30vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container-box {
  display: grid;
  place-items: center;
  height: 60vh;
}
</style>
