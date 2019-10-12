new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
        shrink: true
      },
      redClass: 'redColor',
      italicClass: 'textItalic',
      className: '',
      IsVisible: true,
      num: '100',
      progressBar: {
        width: '0px',
          backgroundColor: 'red'
        }
      
  },
  methods: {
    startEffect: function() {
      setInterval(() =>{
        this.effectClasses.highlight = !this.effectClasses.highlight;
        this.effectClasses.shrink = !this.effectClasses.shrink;
        }, 1000)
  },
  startProgress: function() {
      var width = 0;
     
    setInterval(() => {
      width = width + 10;
      this.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
