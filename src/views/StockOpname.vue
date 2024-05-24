<template>
  <div class="wrapper">
    <Aside/>
  <div class="main">
      <div class="input-group mt-5 mb-5">
        <input type="search" placeholder="Cari stok barang" class="form-control rounded-pill">
        <div class="input-group-append mx-3">
          <button id="button-addon5" class="btn btn-primary">
            <i class="bi bi-search">Search</i>
          </button>
        </div>
        <div class="tambah-barang">
          <button><RouterLink to="#" class="btn btn-primary tambah-button">Tambah Barang</RouterLink> </button>
          <!-- <RouterLink to="#" class="btn btn-primary tambah-button">Tambah Barang</RouterLink> -->
        </div>
      </div>
      <div class="card border-0 mx-5">
        <div class="card-header">
          <h5 class="card-title">Product lists</h5>
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nomor Produk</th>
                <th scope="col">Nama Produk</th>
                <th scope="col">Kategori</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                  <!-- <RouterLink :to="{ name: 'UpdateProd', params: { id_product: product.id_product } }" class="btn btn-sm btn-warning">Edit</RouterLink> -->
                  <!-- <button class="btn btn-sm btn-warning">Edit</button> -->
                  <button class="btn btn-sm btn-danger mx-2">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <a href="#" class="theme-toggle">
        <i class="fa-regular fa-moon"></i>
        <i class="fa-regular fa-sun"></i>
      </a>
    </div>
  </div>

</template>


<script setup>
import Aside from '../components/Aside.vue'
</script>


<style>


@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*,
::after,
::before {
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  opacity: 1;
  overflow-y: scroll;
  margin: 0;
}

a {
  cursor: pointer;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

li {
  list-style: none;
}

h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.275rem;
  color: var(--bs-emphasis-color);
}

::-webkit-input-placeholder {
 font-size: 15px;
}

.tambah-button {
  color: #FFF;
  font-size: 0.875rem;
}

.input-group {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin-left: 300px;
  margin-top: 20px;
  font-size: 1rem;
}

.footer {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: var(--bs-primary-bg-subtle);

}

/* Layout for admin dashboard skeleton */

.wrapper {
  align-items: stretch;
  display: flex;
  width: 100%;
}

#sidebar {
  max-width: 264px;
  min-width: 264px;
  background: #cf1313;
  transition: all 0.35s ease-in-out;
}

.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 0;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
  width: 100%;
  background: var(--bs-dark-bg-subtle);
}

/* Sidebar Elements Style */
.logo-nusantara {
  margin-left: 30px;
  width: 150px;
  height: 150px
}

.sidebar-logo {
  padding: 1.15rem;
}

.sidebar-logo a {
  color: #e9ecef;
  font-size: 1.15rem;
  font-weight: 600;
  margin-left: 60px;
}

.sidebar-nav {
  flex-grow: 1;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  margin-left: 0;
}

.sidebar-header {
  color: #e9ecef;
  font-size: .75rem;
  padding: 1.5rem 1.5rem .375rem;
}

a.sidebar-link {
  padding: .625rem 1.625rem;
  color: #e9ecef;
  position: relative;
  display: block;
  font-size: 0.875rem;
}

.sidebar-link[data-bs-toggle="collapse"]::after {
  border: solid;
  border-width: 0 .075rem .075rem 0;
  content: "";
  display: inline-block;
  padding: 2px;
  position: absolute;
  right: 1.5rem;
  top: 1.4rem;
  transform: rotate(-135deg);
  transition: all .2s ease-out;
}

.sidebar-link[data-bs-toggle="collapse"].collapsed::after {
  transform: rotate(45deg);
  transition: all .2s ease-out;
}

.avatar {
  height: 40px;
  width: 40px;
}

.navbar-expand .navbar-nav {
  margin-left: auto;
}

.content {
  flex: 1;
  max-width: 100vw;
  width: 100vw;
}

.form-control:focus {
box-shadow: none;
}

.form-control-underlined {
border-width: 0;
border-bottom-width: 1px;
border-radius: 0;
padding-left: 0;
}


@media (min-width:768px) {
  .content {
      max-width: auto;
      width: auto;
  }
}

.card {
  box-shadow: 0 0 .875rem 0 rgba(60, 35, 34, 0.05);
  margin-bottom: 24px;
}

.illustration {
  background-color: var(--bs-primary-bg-subtle);
  color: var(--bs-emphasis-color);
}

.illustration-img {
  max-width: 150px;
  width: 100%;
}

/* Sidebar Toggle */

#sidebar.collapsed {
  margin-left: -264px;
}

/* Footer and Nav */

@media (max-width:767.98px) {

  .js-sidebar {
      margin-left: -264px;
  }

  #sidebar.collapsed {
      margin-left: 0;
  }

  .navbar,
  footer {
      width: 100vw;
  }
}

/* Theme Toggler */

.theme-toggle {
  position: fixed;
  top: 50%;
  transform: translateY(-65%);
  text-align: center;
  z-index: 10;
  right: 0;
  left: auto;
  border: none;
  background-color: var(--bs-body-color);
}

html[data-bs-theme="dark"] .theme-toggle .fa-sun,
html[data-bs-theme="light"] .theme-toggle .fa-moon {
  cursor: pointer;
  padding: 10px;
  display: block;
  font-size: 1.25rem;
  color: #FFF;
}

html[data-bs-theme="dark"] .theme-toggle .fa-moon {
  display: none;
}

html[data-bs-theme="light"] .theme-toggle .fa-sun {
  display: none;
}

</style>