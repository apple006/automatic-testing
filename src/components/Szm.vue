<template>
  <div>
    <h2>szm form test</h2>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Szm',
    data () {
      return {
        message: 'Here is a test page'
      }
    },
    created () {
      this.message = 'Hello!'
    }
  }
</script>
