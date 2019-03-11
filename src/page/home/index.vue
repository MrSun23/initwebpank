<template>
  <div>
    Hello Vue!xxxx
    <img :src="require('~/assets/avatar.jpeg')" />
    <img src="~assets/avatar.jpeg" />
    <div class="avatar"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 120px;
}
.avatar {
  background-image: url(~assets/avatar.jpeg);
  background-size: cover;
  width: 120px;
  height: 120px;;
}
</style>

