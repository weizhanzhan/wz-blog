<template>
  <div class="loading-wrapper">
    <div class="loading" />
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style>
    .loading-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #ffffff;
        opacity: 0.8;
        top: 0;
        left: 0;
        z-index: 10000;
        padding-top: 100px
    }

    .loading {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 5px solid #BEBEBE;
        border-left: 5px solid #498aca;
        animation: load 1s linear infinite;
        -moz-animation: load 1s linear infinite;
        -webkit-animation: load 1s linear infinite;
        -o-animation: load 1s linear infinite;
        margin: 0 auto
    }

    @-webkit-keyframes load {
        from {
            -webkit-transform: rotate(0deg);
        }

        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @-moz-keyframes load {
        from {
            -moz-transform: rotate(0deg);
        }

        to {
            -moz-transform: rotate(360deg);
        }
    }

    @-o-keyframes load {
        from {
            -o-transform: rotate(0deg);
        }

        to {
            -o-transform: rotate(360deg);
        }
    }
</style>
