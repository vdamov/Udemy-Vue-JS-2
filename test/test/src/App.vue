<template>
  <div id="app">
    <json-excel
      class="btn btn-default"
      fetch="https://skillythebot.com/en/UserAction/BotLogsList"
      worksheet="My Worksheet"
      name="filename.xls"
    >Download Excel (you can customize this with html code!)</json-excel>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import JsonExcel from "vue-json-excel";

export default {
  name: "app",
  components: {
    HelloWorld,
    JsonExcel
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
