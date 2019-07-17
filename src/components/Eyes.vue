<template>
  <div class="container">
    <div class="window">
      <div
        id="first-cloud"
        class="cloud"
      />
      <div
        id="second-cloud"
        class="cloud"
      />
    </div>
    <div class="small-monitor">
      <div class="bar">
        <div
          id="red"
          class="button"
        />
        <div
          id="yellow"
          class="button"
        />
        <div
          id="green"
          class="button"
        />
      </div>
      <div class="screen">
        <ul class="code">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li
            id="line-1"
            class="inline-code"
          />
          <li
            id="line-2"
            class="inline-code"
          />
          <li
            id="line-3"
            class="inline-code"
          />
          <li
            id="line-4"
            class="inline-code"
          />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
    <div class="main-monitor">
      <div class="bar">
        <div
          id="red"
          class="button"
        />
        <div
          id="yellow"
          class="button"
        />
        <div
          id="green"
          class="button"
        />
      </div>
      <div class="screen">
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
    <div class="avatar">
      <div class="avatar-neck" />
      <div class="avatar-collar" />
      <div class="avatar-body" />
      <div class="avatar-head" />
      <div class="avatar-hairband" />
      <div class="avatar-hair" />
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {

    }
  }
</script>

<style>
/* body {
  overflow: hidden;
  display: flex;
  background: #111;
  perspective: 1000px;
  transform-style: preserve-3d;
} */

#drag-container,
#spin-container {
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);
}

#drag-container img,
#drag-container video {
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
  box-shadow: 0 0 8px #fff;
  -webkit-box-reflect: below 10px
    linear-gradient(transparent, transparent, #0005);
}

#drag-container img:hover,
#drag-container video:hover {
  box-shadow: 0 0 15px #fffd;
  -webkit-box-reflect: below 10px
    linear-gradient(transparent, transparent, #0007);
}

#drag-container p {
  font-family: Serif;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
  color: #fff;
}

#ground {
  width: 900px;
  height: 900px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
  background: -webkit-radial-gradient(
    center center,
    farthest-side,
    #9993,
    transparent
  );
}

#music-container {
  position: absolute;
  top: 0;
  left: 0;
}

#carousel-container {
  width: 100%;
  height: 100%;
}

@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
@keyframes spinRevert {
  from {
    transform: rotateY(360deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
