<template>
  <div class="infoUserTop">
    <img src="" alt="" class="profileimg" />
    <div class="name"></div>
  </div>
</template>
<script>
export default {
  methods: {
    h: function () {
      alert("hello");
    },
  },
};
</script>
<style lang="less">
.infoUserTop {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .profileimg {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .name {
    font-weight: 700;
    font-size: 0.4rem;
  }
}
</style>
