<template>
  <div class="account">
    <div class="about">
      关于我
    </div>
    <div class="info">
      <div>
        <img
          src="http://www.zhanwei.xyz/images/avatar.jpg"
          alt=""
        >
      </div>
      <div class="name">
        <div class="ename">
          Baymax
        </div>
        <div class="job">
          fe | 常州 @Amole
        </div>
      </div>
    </div>
    <div class="many">
      <i class="iconfont icon-git-2" />
      <i class="iconfont icon-git-1" />
      <i class="iconfont icon-git-3" />
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.account img {
  width: 60px;
  border-radius: 50%;
  margin: 0 auto;
}
.about {
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.info {
  padding: 10px;
  display: flex;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.name {
  padding-left: 10px;
  line-height: 32px;
}
.ename {
  font-size: 18px;
  font-weight: bold;
}
.job {
  color: #72777b;
}
.many {
  display: flex;
  padding: 15px 0;
  justify-content: space-around;
}
.many i {
  font-size: 20px;
}
</style>
