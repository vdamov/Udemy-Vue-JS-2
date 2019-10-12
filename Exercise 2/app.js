new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
             return   alert('ALERT')
            },
            storeData: function(event) {
                this.value = event.target.value
            }
        }
    });