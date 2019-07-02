<template>
  <div>
   
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
  export default {

  }
</script>
<style scoped>
#title {
  background-color: blue;
  padding: 0.1rem 0.08rem;
  overflow: hidden;
  width: 3.59rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
#title  img {
  width: 0.25rem;
  float: left;
}
#title span {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 1.5rem;
}
#me > img {
  width: 0.25rem;
  position: absolute;
  right: 0.2rem;
  top: 0.08rem;
}
</style>