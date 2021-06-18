<template>
  <nav id="nav">
    <div variant="faded" class="nav-custom navbar navbar-expand-lg">
      <router-link to="/"
        ><img class="logo" src="../assets/logo.svg" alt="Logo"
      /></router-link>
      <p class="text-right">Teste Pulses</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav",
  components: {},
};
</script>

<style>
.logo {
  height: 60px;
  margin: 0 20px;
}

.nav-custom {
  background: #005579;
  display: flex !important;
  justify-content: space-around !important;
}

.text-right {
  color: #fff;
  font-weight: 300;
  font-size: 2rem;
  margin: 0;
}
</style>
