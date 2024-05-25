<template>
  <div class="wrapper">
    <Aside/>
    <div class="main">
            <nav class="navbar navbar-expand px-3 border-bottom">
                <button class="btn" id="sidebar-toggle" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a href="#" data-bs-toggle="dropdown" class="nav-icon pe-md-0">
                                <img src="../assets/nusantara.png" class="avatar img-fluid rounded" alt="">
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a href="#" class="dropdown-item">Profile</a>
                                <a href="#" class="dropdown-item">Setting</a>
                                <a href="#" class="dropdown-item">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="chart">
                <ChartComponent />
            </div>

            <main class="content px-3 py-2">
                <div class="container-fluid">
                    <div class="mb-3">
                        <h4>Admin Dashboard</h4>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 d-flex">
                            <div class="card flex-fill border-0 illustration">
                                <div class="card-body p-0 d-flex flex-fill">
                                    <div class="row g-0 w-100">
                                        <div class="col-6">
                                            <div class="p-3 m-1">
                                                <h4>Welcome Back, Admin</h4>
                                                <p class="mb-0">Admin Dashboard, Admin</p>
                                            </div>
                                        </div>
                                        <div class="col-6 align-self-end text-end">
                                            <img src="" class="img-fluid illustration-img"
                                                alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 d-flex">
                            <div class="card flex-fill border-0">
                                <div class="card-body py-4">
                                    <div class="d-flex align-items-start">
                                        <div class="flex-grow-1">
                                            <h4 class="mb-2">
                                                $ 78.00
                                            </h4>
                                            <p class="mb-2">
                                                Total Earnings
                                            </p>
                                            <div class="mb-0">
                                                <span class="badge text-success me-2">
                                                    +9.0%
                                                </span>
                                                <span class="text-muted">
                                                    Since Last Month
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <!-- Table Element -->
                    <div class="card border-0">
                        <div class="card-header">
                            <h5 class="card-title">
                                Recent Orders
                            </h5>
                            <!-- <h6 class="card-subtitle text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus,
                                necessitatibus reprehenderit itaque!
                            </h6> -->
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nomor DO</th>
                                        <th scope="col">Kode Barang</th>
                                        <th scope="col">Deskripsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>DO-001</td>
                                        <td>DUEL-1</td>
                                        <td>Dueller</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>DO-002</td>
                                        <td>PTNZ-3</td>
                                        <td>Potenza</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>DO-001</td>
                                        <td>DUEL-1</td>
                                        <td>Dueller</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>DO-002</td>
                                        <td>PTNZ-3</td>
                                        <td>Potenza</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>DO-003</td>
                                        <td>ECOP-2</td>
                                        <td>Ecopia</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <a href="#" class="theme-toggle">
                <i class="fa-regular fa-moon"></i>
                <i class="fa-regular fa-sun"></i>
            </a>
        </div>
    </div>
    
</template>

<script setup>
import Aside from '../components/Aside.vue'

import ChartComponent from '@/components/ChartComponent.vue';
</script>

<style scoped>


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