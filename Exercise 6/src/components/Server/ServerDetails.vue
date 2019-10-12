<template>
     <div  class="col-xs-12 col-sm-6">
                <p v-if="!server">Server Details are currently not updated</p>
                <div v-else>
                         <p >Server with #{{server.id}} is selected. Status - {{server.status}}</p>
                <button v-if="server.status !== 'Normal'" @click="server.status = 'Normal'" >Back To Normal</button>
                </div>
           
    </div>
</template>
<script>
import {serverBus} from '../../main'

export default {
data: function () {
    return {
        server: null
    }
},
  created() {
       serverBus.$on('serverSelected',server => this.server = server)
    }
}
</script>