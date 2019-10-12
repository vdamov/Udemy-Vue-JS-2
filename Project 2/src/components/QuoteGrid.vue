<template>
  <div class="row">
    <quote  :key="i" v-for="(q, i) in quotes" @click.native="deleteQuote(i)">{{q}}</quote>
  </div>
</template>
<script>
import Quote from "./Quote.vue";
export default {
  props: ["quotes"],
  data() {
    return {};
  },
  components: {
    Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>
<style>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2;
    }
</style>