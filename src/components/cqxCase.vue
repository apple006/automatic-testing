<template>
  <div id="myApp">
    <h1>{{ msg }}</h1>
    <p>{{ description }}</p>
    <label for="select">我的选项:</label>
    <select name="select" id="select" v-model="select"  >
      <option v-for="(handsome,index) in handsomes" v-bind:value='handsome.name' >{{ handsome.name }}</option>
    </select>
    <p v-show="select">上帝啊,我的选择是:{{ select }}</p>
  </div>

</template>

<script>
  export default {
    name: 'MyTitle',
    data () {
      return {
        msg: 'hi there',
        description: 'can u dance with me?',
        select:'' ,
        handsomes: [
          {
            name: '赵寅成'
          },
          {
            name: '李钟硕'
          },
          {
            name: '边伯贤'
          },
          {
            name: '宋仲基'
          }

        ]
      }
    },



  }
</script>
<style lang="scss" scoped>
  select{
    width: 100px;
    option{
      width: 100%;
    }
  }

</style>




