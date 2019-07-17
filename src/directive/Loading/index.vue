<template>
  <div class="loading-wrapper">
    <!-- <div class="loading" /> -->
    <div class="loader" />
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style>
 .loader {
    position: relative;
        width: 2.5em;
        height: 2.5em;
        transform: rotate(165deg);
        margin: 0 auto
    }
    .loader:before, .loader:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 0.5em;
        height: 0.5em;
        border-radius: 0.25em;
        transform: translate(-50%, -50%);
    }
    .loader:before {
        animation: before 2s infinite;
    }
    .loader:after {
        animation: after 2s infinite;
    }

     @keyframes before {
        0% {
            width: 0.5em;
            box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
        }
        35% {
            width: 2.5em;
            box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
        }
        70% {
            width: 0.5em;
            box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
        }
        100% {
            box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
        }
        }
        @keyframes after {
        0% {
            height: 0.5em;
            box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
        }
        35% {
            height: 2.5em;
            box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
        }
        70% {
            height: 0.5em;
            box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
        }
        100% {
            box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
        }
        }
    .loading-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #ffffff;
        opacity: 0.8;
        top: 0;
        left: 0;
        z-index: 10000;
        padding-top: 25%
    }
  /*
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
    } */
</style>
