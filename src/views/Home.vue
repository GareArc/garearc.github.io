<template>
  <div class="home-container">
    <Particles id="tsparticles" class="particles" :options="option"/>
    <div class="home-header">
      <div>Gareth</div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"/>

<style lang="scss" scoped>
.home-container{
  display: flex;
}
.particles{
  z-index: -10;
}
.home-header{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 3vw 0 3vw;
  border: #42b983 1px solid;
}
</style>
