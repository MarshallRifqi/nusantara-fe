<template>
  <div class="wrapper">
    <Aside/>
    <div class="main">
      <div class="input-group mb-5">
        <input type="search" placeholder="Cari stok barang" aria-describedby="button-addon5" class="form-control rounded-pill">
        <div class="input-group-append mx-3">
          <button id="button-addon5" type="submit" class="btn btn-danger"><i class="bi bi-search"></i>Search</button>
        </div>
        <button type="button" class="btn btn-danger rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Tambah Barang</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Form Barang Masuk</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="" class="mb-3">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="mb-3 col-md-12">
                        <label for="recipient-name" class="col-form-label">Pilih kode barang</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-10">
                        <input type="text" class="form-control" id="recipient-name">
                      </div>
                      <div class="col-md-2">
                        <button type="button" class="btn btn-primary"><i class="bi bi-search"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
                <form>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="mb-3 col-md-7">
                        <label for="message-text" class="col-form-label">Nama Barang</label>
                        <input type="text" class="form-control" id="message-text" readonly placeholder="Nama barang akan tampil">
                      </div>
                      <div class="mb-3 col-md-5">
                        <label for="message-text" class="col-form-label">Tipe Ban</label>
                        <input type="text" class="form-control" id="message-text" readonly placeholder="tipe barang akan tampil">
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Jumlah masuk stok</label>
                      <input type="number" class="form-control" id="message-text" min="0" max="200"> 
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i><span class="mx-2">Batal</span></button>
                <button type="button" class="btn btn-primary"><i class="bi bi-check2"></i><span class="mx-2">Simpan</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table Element -->
      <div class="card border-0 mx-5">
        <div class="card-header">
          <h5 class="card-title">Recent Orders</h5>
        </div>
        <div class="card-body">
          <table class="table table-light table-striped">
            <thead>
              <tr>
                <th scope="col" class="tbl-no">No</th>
                <th scope="col" class="tbl-do">Nomor DO</th>
                <th scope="col" class="tbl-kode">Kode Barang</th>
                <th scope="col" class="tbl-deskripsi">Deskripsi</th>
                <th scope="col" class="tbl-aksi">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>DO-001</td>
                <td>DUEL-1</td>
                <td>Dueller</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>DO-002</td>
                <td>PTNZ-3</td>
                <td>Potenza</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>DO-003</td>
                <td>ECOP-2</td>
                <td>Ecopia</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>DO-001</td>
                <td>DUEL-1</td>
                <td>Dueller</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>DO-002</td>
                <td>PTNZ-3</td>
                <td>Potenza</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>DO-003</td>
                <td>ECOP-2</td>
                <td>Ecopia</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>DO-003</td>
                <td>ECOP-2</td>
                <td>Ecopia</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>DO-003</td>
                <td>ECOP-2</td>
                <td>Ecopia</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>DO-003</td>
                <td>ECOP-2</td>
                <td>Ecopia</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>DO-003</td>
                <td>ECOP-2</td>
                <td>Ecopia</td>
                <td>
                  <button class="btn btn-sm btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@getbootstrap">
                    <i class="bi bi-pencil-square"></i>
                    Edit
                  </button>
                  <EditModal />
                  <button class="btn btn-sm btn-danger mx-2">
                    <i class="bi bi-trash"></i>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Aside from '../components/Aside.vue'
import EditModal from '@/components/EditModal.vue';
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

.tbl-no {
  width: 3%;
}

.tbl-do {
  width: 10%;
}

.tbl-kode {
  width: 10%;
}

.tbl-deskripsi {
  width: 15%;
}

.tbl-aksi {
  width: 10%;
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
    /* align-content: center;
    align-items: center;
    justify-content: center;
    align-items: center; */
    width: 50%;
    /* margin-left: 300px; */
    /* margin-top: 20px; */
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    min-width: 0;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    width: 100%;
    background: var(--bs-dark-bg-subtle);
}

.main .card {
    width: 90%;
}

.main .tambah-barang {
    width: 30%;
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