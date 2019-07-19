<template>
  <div class="aside-card">
    <div class="title">
      推荐
    </div>
    <div class="body">
      <div
        v-for="h in data"
        :key="h._id"
        class="recomment"
      >
        <div class="img">
          <img
            :src="h.img"
            alt=""
          >
        </div>
        <div class="b_title">
          {{ h.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array
    }
  }
</script>

<style scoped>
.aside-card .title {
  padding: 10px;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  font-size: 15px;
  font-weight: bold;
}
.aside-card .body {
  padding: 10px;
}
.aside-card .body .recomment {
  display: flex;
  margin: 2px 0;
}
.aside-card .body .recomment .img img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.aside-card .body .recomment .b_title {
  padding-left: 10px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}
</style>
