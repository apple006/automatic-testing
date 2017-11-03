<template>
  <div>
    <input v-model="message" placeholder="edit me">
    <p>Message is : {{ message }}</p>
    <input type="checkbox" id="checkbox" v-model="checked" >
    <label for="checkbox">{{ checked }}</label>
    <br>
    <button type="button" @click="onSubmit(message,checked)">submit</button>
  </div>

</template>

<script>
  export default {
    name: 'SzmForm',
    data () {
      return {
        checked: false,
        message: null
      }
    },
    methods: {
      onSubmit: (message, checked) => {
        console.log(message)
        console.log(checked)
      }
    }
  }
</script>
