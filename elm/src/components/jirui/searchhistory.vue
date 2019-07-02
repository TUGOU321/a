<template>
  <div>
    <footer>
      <p>搜索历史</p>
      <ul>
        <li :key="i" v-for="(v,i) in arr"></li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  name: "searchhistory",
  data(){
      return {
          arr:[]
      }
  },
  created() {
      arr.push();
  },
};
</script>
<style scoped>
footer {
  border: 2px solid gainsboro;
}
footer p {
  line-height: 0.2rem;
  font-size: 0.1rem;
  padding-left: 0.07rem;
}
</style>