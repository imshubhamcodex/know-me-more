<template>
  <v-container class="pt-7" style="width: 95vw">
    <v-btn fab dark color="green">
      <v-icon dark> mdi-check-outline </v-icon>
    </v-btn>
    <span class="black--text text-h5 dark-v ml-2 pt-2"
      ><strong> Thankyou </strong> for submitting your response.</span
    >
    <div id="div-cont" class="mt-8 mb-5">
      <h3 class="black--text text-h6">🌟DIFFER IN ({{ qDiff.length }})</h3>
      <div class="mb-10 mt-5">
        <v-row v-for="(data, index) in qDiff">
          <v-col cols="12" sm="10">
            <span class="black--text">❉ {{ data.que }}</span>
          </v-col>
          <v-col cols="12" sm="2">
            <strong
              ><span>{{ yourName }} {{ data.p1 }}</span>
              <br />
              <span>{{ partnerName }} {{ data.p2 }}</span></strong
            >
          </v-col>
        </v-row>
      </div>

      <h3 class="black--text text-h6">🌟SAME IN ({{ qSame.length }})</h3>
      <div class="mt-5">
        <v-row v-for="(data, index) in qSame">
          <v-col cols="12" sm="10">
            <span class="black--text">❉ {{ data.que }}</span>
          </v-col>
          <v-col cols="12" sm="2">
            <strong
              ><span>Both {{ data.p1 }}</span>
            </strong>
          </v-col>
        </v-row>
      </div>
    </div>
    <v-btn
      @click="home()"
      style="position: fixed; bottom: 20px; right: 25px"
      fab
      dark
      color="blue"
    >
      <v-icon dark> mdi-home </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      qData: [],
      qDiff: [],
      qSame: [],
      yourName: "",
      partnerName: "",
    };
  },
  metaInfo() {
    return {
      title: "Report",
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    async readFile() {
      const response = await axios.get(`assets/yesno.txt`);
      this.qData = response.data
        .replaceAll("\n", "")
        .replaceAll("\r", "")
        .split(":");
      this.qData.shift();

      let yesNo = this.$store.state.yesNo;
      yesNo.forEach((ele, index) => {
        if (ele.p1_data == ele.p2_data) {
          let que = this.qData[index];
          let p1 = ele.p1_data;
          let p2 = ele.p2_data;
          this.qSame.push({ que, p1, p2 });
        } else {
          let que = this.qData[index];
          let p1 = ele.p1_data;
          let p2 = ele.p2_data;
          this.qDiff.push({ que, p1, p2 });
        }
      });
    },
  },
  mounted() {
    this.readFile();
    this.yourName = this.$store.state.your_name;
    this.partnerName = this.$store.state.partner_name;
  },
};
</script>
<style scoped>
#div-cont {
  width: 100%;
  margin: auto auto;
  display: block;
}
</style>
