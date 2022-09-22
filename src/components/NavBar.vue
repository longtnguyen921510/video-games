<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <!-- Toggle button -->
    <MDBNavbarToggler
        target="#navbarCenterAlignExample"
        @click="collapse6 = !collapse6"
    ></MDBNavbarToggler>
    <!-- Collapsible wrapper -->
    <MDBCollapse id="navbarCenterAlignExample" v-model="collapse6">
      <MDBNavbarNav center class="mb-2 mb-lg-0">
        <!-- Center links -->
        <MDBNavbarItem href="#" active>
          Home
        </MDBNavbarItem>
        <!-- Center links -->
      </MDBNavbarNav>
    </MDBCollapse>
    <!-- Collapsible wrapper -->
  </MDBNavbar>
</template>

<script>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse
} from 'mdb-vue-ui-kit';
import {ref} from 'vue';

export default {
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    // eslint-disable-next-line vue/no-unused-components
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse
  },
  setup() {
    const collapse6 = ref(true);
    const dropdown9 = ref(false);

    return {
      collapse6,
      dropdown9
    }
  }
}
</script>

<style scoped>

</style>