<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-form @quoteAdded="AddQuote"></app-form>
    <app-quote-grid @quoteDeleted="DeleteQuote" :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import InputForm from "./components/Input-Form.vue";

export default {
  data() {
    return {
      quotes: [],
      maxQuotes: 10
    };
  },
  components: {
    appHeader: Header,
    AppQuoteGrid: QuoteGrid,
    appForm: InputForm
  },
  methods: {
    AddQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        alert("Max Quotes limit reached!");
        return;
      }
      this.quotes.push(quote);
    },
    DeleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
