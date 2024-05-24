<template>
  
  <aside id="sidebar" class="js-sidebar">
    <!-- Content For Sidebar -->
    <div class="h-100">
        <div class="sidebar-logo mb-5">
            <img src="../assets/nusantara.png" class="logo-nusantara" alt="">
            <br>
            <a href="#">Nusantara</a>
        </div>
        <ul class="sidebar-nav nav-tabs">
            <li class="sidebar-header mb-4">
                Hello, Admin!
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                    <i class="fa-solid fa-list pe-2"></i>
                    <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
                    <!-- <RouterLink to="/about">About</RouterLink> -->
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link nav-link active">
                    <i class="fa-solid fa-list pe-2"></i>
                    <RouterLink to="/barangmasuk" class="nav-link">Barang Masuk</RouterLink>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link nav-link">
                    <i class="fa-solid fa-list pe-2"></i>
                    <RouterLink to="/barangkeluar" class="nav-link">Barang Keluar</RouterLink>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                    <i class="fa-solid fa-list pe-2"></i>
                    <RouterLink to="/pengiriman" class="nav-link">Pengiriman</RouterLink>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link">
                    <i class="fa-solid fa-list pe-2"></i>
                    <RouterLink to="/stockopname" class="nav-link">Stok Opname</RouterLink>
                </a>
            </li>
            <li class="sidebar-item">
                <a href="#" class="sidebar-link mt-5">
                    <RouterLink to="#" class="nav-link">
                        <i class="fa-solid fa-list pe-2 bi-box-arrow-right"></i>
                        Logout
                    </RouterLink>
                </a>
            </li>
        </ul>
    </div>
  </aside>
</template>

<style>
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
</style>