<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">
        <b-icon-brightness-high-fill></b-icon-brightness-high-fill>
        ADMIN
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- righ aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="gohome" active>Exit</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <b-modal id="modal-1" title="yeaaah">
        <p class="my-4">Admin</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbarAdmin",
  methods: {
    gohome() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
