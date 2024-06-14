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
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Form Barang Keluar</h1>
              </div>
              <div class="modal-body">
                <form @submit.prevent="handleAddSubmit">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-md-6">
                            <!-- <div>Selected: {{ selected }}</div> -->
                            <label for="kode-barang" class="col-form-label">Pilih Barang</label>
                            <select id="kode-barang" class="form-select mb-2" v-model="newBarang.id_barang">
                              <option disabled value="">Pilih barang</option>
                              <option value="BRG-14846914">Adrenalin RE003</option>
                              <!-- <option value="BRG-27540728">S007A</option> -->
                              <!-- <option value="BRG-65147694">RE050</option> -->
                              <!-- <option value="BRG-02769403">MPV-1</option> -->
                              <!-- <option value="BRG-19646238">EP150</option> -->
                              <!-- <option value="BRG-48653832">EP300</option> -->
                              <!-- <option value="BRG-45352771">All Terrain 697</option> -->
                              <!-- <option value="BRG-73996611">Mud Terrain 674</option> -->
                              <!-- <option value="BRG-04844424">HL 683</option> -->
                            </select>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="kode-barang" class="col-form-label">Id Barang</label>
                            <input type="text" class="form-control" id="kode-barang" v-model="newBarang.id_barang" readonly placeholder="BRG-00000000">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label for="kode-barang" class="col-form-label">Pilih Customer</label>
                            <select id="kode-barang" class="form-select mb-2">
                              <option disabled value="">Customer</option>
                              <option value="#">Customer 1</option>
                              <option value="#">Customer 2</option>
                              <option value="#">Customer 3</option>
                            </select>
                          </div>
                          <div class="col-md-6">
                            <label for="alamat" class="col-form-label">Id Pelanggan</label>
                            <input type="text" class="form-control" id="alamat" placeholder="CST-00000" readonly>
                          </div>
                        </div>
                        <div class="row">
                          <div class="mb-3 col-md-12">
                            <label for="alamat" class="col-form-label">Alamat</label>
                            <input type="text" class="form-control" id="alamat" placeholder="Jalan haji daud No.70" readonly>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <div class="mb-3 col-md-6">
                            <label for="alamat" class="col-form-label">Stok Master Barang</label>
                            <input type="number" class="form-control" id="alamat" placeholder="200" readonly>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label for="stok" class="col-form-label">Stok Barang Keluar</label>
                              <input type="number" class="form-control" id="stok" min="0" v-model="newBarang.kuantitas">
                          </div>
                        </div>
                        <div class="row">
                          <div class="mb-3 col-md-12">
                            <label for="stok" class="col-form-label">Keterangan</label>
                            <input type="text" class="form-control" id="stok">
                          </div>
                        </div>
                        <div class="row">
                          <div class="mb-3 col-md-12">
                            <label for="tanggal" class="col-form-label">Tanggal Masuk</label>
                            <input type="date" class="form-control" id="tanggal" v-model="newBarang.tanggal_masuk">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                      <i class="bi bi-x-lg"></i><span class="mx-2">Batal</span>
                    </button>
                    <button type="submit" class="btn btn-primary">
                      <i class="bi bi-check2"></i><span class="mx-2">Simpan</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table Element -->
      <div class="card border-0 mx-5 p-2">
        <div class="card-header">
          <h5 class="card-title">List Barang Keluar</h5>
        </div>
        <div class="card-body">
          <table class="table table-light table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id barang masuk</th>
                <th scope="col">Kode Barang</th>
                <th scope="col">No DO</th>
                <th scope="col">Nama Ban</th>
                <th scope="col">Tipe Ban</th>
                <th scope="col">Stok</th>
                <th class="text-center" scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(barangMsk, index) in barangList" :key="barangMsk.id_barang_masuk">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ barangMsk.id_barang_masuk }}</td>
                <td>{{ barangMsk.id_barang }}</td>
                <td>{{ barangMsk.no_do }}</td>
                <td>{{ barangMsk.barang.nama_barang }}</td>
                <td>{{ barangMsk.barang.kategori }}</td>
                <td>{{ barangMsk.kuantitas }}</td>
                <td>
                  <!-- <button class="btn btn-sm btn-primary mx-2"><i class="bi bi-pencil-square"></i> <span>Edit</span></button> -->
                  <!-- <button type="button" class="btn btn-danger btn-sm " data-bs-toggle="modal" data-bs-target="#editModal" @click="openEditModal(barangMsk)">edit</button> -->
                  <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(barangMsk)"><i class="bi bi-pencil-square"></i> <span>Edit</span></button>
                  <!-- <button class="btn btn-sm btn-danger mx-2" @click="deleteBarang(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
                  <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button>
                  <button class="btn btn-sm btn-primary mx-2" @click="opendetailModal()">Detail</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="editLabel">Form Barang Masuk</h1>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleEditSubmit">
              <div class="container-fluid">
                <div class="row">
                  <div class="mb-3 col-md-12">
                    <label for="kode-barang" class="col-form-label">Masukan kode barang</label>
                    <input type="text" class="form-control" id="kode-barang" v-model="editBarang.id_barang">
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-5">
                    <label for="tanggal" class="col-form-label">Tanggal Masuk</label>
                    <input type="date" class="form-control" id="tanggal" v-model="editBarang.tanggal_masuk">
                  </div>
                  <div class="mb-3 col-md-7">
                    <label for="stok" class="col-form-label">Jumlah masuk stok</label>
                    <input type="number" class="form-control" id="stok" v-model="editBarang.kuantitas" min="0" max="200">
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                  <i class="bi bi-x-lg"></i><span class="mx-2">Batal</span>
                </button>
                <button type="submit" class="btn btn-primary">
                  <i class="bi bi-check2"></i><span class="mx-2" @click="handleEditSubmit">Simpan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h1 class="modal-title text-center fs-5" id="editLabel">Detail Pengiriman</h1>
          </div>
          <div class="modal-body">
            <form>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4 text-center align-self-center">
                      <img src="https://via.placeholder.com/150" alt="QR Code" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                      <p><strong>ID Pengiriman:</strong> 123456</p>
                      <p><strong>Nama Barang:</strong> Barang Contoh</p>
                      <p><strong>Customer:</strong> Nama Customer</p>
                      <p><strong>Status:</strong> Dalam Pengiriman</p>
                    </div>
                  </div>

                  <hr>

                  <div class="card border-0 mx-5 p-2">
                    <div class="card-header">
                      <h5 class="card-title">Riyawat Pengiriman</h5>
                    </div>
                    <div class="card-body">
                      <table class="table table-light table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id barang masuk</th>
                            <th scope="col">Kode Barang</th>
                            <th scope="col">No DO</th>
                            <th scope="col">Nama Ban</th>
                            <th scope="col">Tipe Ban</th>
                            <th scope="col">Stok</th>
                            <th class="text-center" scope="col">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(barangMsk, index) in barangList" :key="barangMsk.id_barang_masuk">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ barangMsk.id_barang_masuk }}</td>
                            <td>{{ barangMsk.id_barang }}</td>
                            <td>{{ barangMsk.no_do }}</td>
                            <td>{{ barangMsk.barang.nama_barang }}</td>
                            <td>{{ barangMsk.barang.kategori }}</td>
                            <td>{{ barangMsk.kuantitas }}</td>
                            <td>
                              <!-- <button class="btn btn-sm btn-primary mx-2"><i class="bi bi-pencil-square"></i> <span>Edit</span></button> -->
                              <!-- <button type="button" class="btn btn-danger btn-sm " data-bs-toggle="modal" data-bs-target="#editModal" @click="openEditModal(barangMsk)">edit</button> -->
                              <button class="btn btn-sm btn-primary mx-2" @click="openEditModal(barangMsk)"><i class="bi bi-pencil-square"></i> <span>Edit</span></button>
                              <!-- <button class="btn btn-sm btn-danger mx-2" @click="deleteBarang(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button> -->
                              <button class="btn btn-sm btn-danger mx-2" @click="confirmDelete(barangMsk.id_barang_masuk)"><i class="bi bi-trash"></i> <span>Delete</span></button>
                              <button class="btn btn-sm btn-primary mx-2" @click="opendetailModal()">Detail</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                <i class="bi bi-x-lg"></i><span class="mx-2">Batal</span>
              </button>
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-check2"></i><span class="mx-2" @click="handleEditSubmit">Simpan</span>
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import Aside from '../components/Aside.vue'

import { ref, onMounted } from 'vue';
import axios from 'axios';

const opendetailModal = () => {
  const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
  detailModal.show();
  };

const barangList = ref([]);

const newBarang = ref({
  id_barang: '',
  tanggal_masuk: '',
  kuantitas: 0,
});

const editBarang = ref({
  id_barang_masuk: '',
  id_barang: '',
  tanggal_masuk: '',
  kuantitas: 0,
});



const fetchData = async () => {
  try {
    const response = await axios.get('/barang-masuk');
    barangList.value = response.data.barangMsk;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const deleteBarang = async (id_barang_masuk) => {
  try {
    await axios.delete(`barang-masuk/delete/${id_barang_masuk}`);
    fetchData(); 
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

const confirmDelete = (id_barang_masuk) => {
  Swal.fire({
    title: "Yakin ingin menghapus?",
    text: "Tindakan ini dapat menghapus data penting!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, saya ingin menghapus!"
  }).then((result) => {
    if (result.isConfirmed) {
      deleteBarang(id_barang_masuk).then(() => {
        Swal.fire({
          title: "Terhapus!",
          text: "Data berhasil terhapus.",
          icon: "success"
        });
      });
    }
  });
};


const handleAddSubmit = async () => {
  try {
    const response = await axios.post('barang-masuk/insert', {
      id_barang: newBarang.value.id_barang,
      tanggal_masuk: newBarang.value.tanggal_masuk,
      kuantitas: newBarang.value.kuantitas,
    });
    console.log('Response:', response.data);
    fetchData();
    
    newBarang.value.id_barang = '';
    newBarang.value.tanggal_masuk = '';
    newBarang.value.kuantitas = 0;
    const exampleModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    exampleModal.hide();
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Data berhasil tersimpan",
      showConfirmButton: false,
      timer: 1500
    });
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const openEditModal = (barangMsk) => {
  editBarang.value.id_barang_masuk = barangMsk.id_barang_masuk;
  editBarang.value.id_barang = barangMsk.id_barang;
  editBarang.value.tanggal_masuk = barangMsk.tanggal_masuk;
  editBarang.value.kuantitas = barangMsk.kuantitas;
  const editModal = new bootstrap.Modal(document.getElementById('editModal'));
  editModal.show();
};

const handleEditSubmit = async () => {
  try {
    const response = await axios.patch(`barang-masuk/update/${editBarang.value.id_barang_masuk}`, {
      id_barang: editBarang.value.id_barang,
      tanggal_masuk: editBarang.value.tanggal_masuk,
      kuantitas: editBarang.value.kuantitas,
    });
    console.log('Response:', response.data);
    fetchData(); 
  
    editBarang.value.id_barang_masuk = '';
    editBarang.value.id_barang = '';
    editBarang.value.tanggal_masuk = '';
    editBarang.value.kuantitas = 0;
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    editModal.hide();
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Data berhasil tersimpan",
      showConfirmButton: false,
      timer: 1500
    });
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};




onMounted(fetchData);
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
    padding: 50px;
    justify-content: flex-start;
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