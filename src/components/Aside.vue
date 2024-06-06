<template>
  <aside id="sidebar">
    <!-- Content For Sidebar -->
    <div class="h-100">
      <div class="sidebar-logo mb-5">
        <img src="../assets/nusantara_white.png" class="logo-nusantara" alt="">
        <br>
        <a href="#">Nusantara</a>
      </div>
      <ul class="sidebar-nav nav-tabs">
        <li class="sidebar-header mb-4">
          Hello, Admin!
        </li>
        <li class="sidebar-item">
          <RouterLink to="/dashboard" class="sidebar-link nav-link" exact>
            <i class="bi bi-house"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Dashboard
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <RouterLink to="/barangmaster" class="sidebar-link nav-link" exact>
            <i class="bi bi-box-seam"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Master Barang
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <RouterLink :to="{ name: 'BarangMasuk' }" class="sidebar-link nav-link">
            <i class="bi bi-box-arrow-in-down"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Barang Masuk
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <RouterLink :to="{ name: 'BarangKeluar' }" class="sidebar-link nav-link">
            <i class="bi bi-box-arrow-up"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Barang Keluar
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <RouterLink :to="{ name: 'Pengiriman' }" class="sidebar-link nav-link">
            <i class="bi bi-truck"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Pengiriman
          </RouterLink>
        </li>
        <li class="sidebar-item">
          <RouterLink :to="{ name: 'StockOpname' }" class="sidebar-link nav-link">
            <i class="bi bi-bag-check"></i>
            <i class="fa-solid fa-list pe-2"></i>
            Stok Opname
          </RouterLink>
        </li>
        <li class="sidebar-item mt-5">
          <RouterLink :to="{ name: 'Login' }" class="sidebar-link nav-link">
            <i class="fa-solid fa-list pe-2 bi-box-arrow-right"></i>
            Logout
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
/* Sidebar Elements Style */
/* .h-100{
  background-color: #E94F37;
} */

a {
    cursor: pointer;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
}

.logo-nusantara {
  margin-left: 30px;
  width: 150px;
  height: 150px;
}


#sidebar {
    max-width: 264px;
    min-width: 264px;
    background: #cf1313;
    transition: all 0.35s ease-in-out;
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

.sidebar-link {
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

.router-link-exact-active {
  color: #000000; /* Active link color */
  background-color: #ffffff; /* Active link background color */
}

.sidebar-item{
  margin-bottom: 15px;
}
</style>
