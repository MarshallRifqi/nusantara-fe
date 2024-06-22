<template>

  <div class="hero-overlay"></div>
<div class="container-sm d-flex justify-content-center align-items-center min-vh-100 bg-card">
      <!-- login -->
      <div class="row border rounder-5 bg-white shadow box-area rounded">
        <!-- kotak kiri -->
        <div class="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="../assets/Mobile-login.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <!-- kotak kanan -->
        <div class="col-md-6 p-4 my-3 right-box">
          <form @submit.prevent="handleLogin" class="needs-validation">
            <div class="row align-items-center">
              <div class="header-text mb-4">
                <h2>Sign In</h2>
              </div>
              <div class="input-group mb-3">
                <div class="col">
                  <label for="" class="mb-2">Username</label>
                  <input type="text" id="username" v-model="username" class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Username" required autofocus />
                  <div class="invalid-feedback">Username is invalid</div>
                </div>
              </div>
              <div class="input-group mb-3">
                <div class="col">
                  <label for="" class="mb-2">Password</label>
                  <input type="password" id="password" v-model="password" class="form-control form-control-lg bg-light fs-6" placeholder="password" required />
                  <div class="invalid-feedback">Password is required</div>
                </div>
              </div>
              <div class="input-group mb-5 d-flex justify-content-between">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="formCheck" />
                  <label for="formCheck" clas><small>Remember Me</small></label>
                </div>
                <div class="forgot">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div class="input-group mb-3">
                <button type="submit" class="btn btn-lg btn-danger w-100 fs-6">Login
                  <!-- <RouterLink :to="{ name: 'Dashboard' }" class="nav-link">Login</RouterLink> -->
                </button>
              </div>
              <div class="input-group mb-5 d-flex justify-content-between">
                <div class="forgot">
                  <p>Don't have an account?
                    <a href="#">
                      <RouterLink :to="{ name: 'Register' }" class="nav-link">Sign up here</RouterLink>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

</template>

<script>
// import axios from 'axios';
// import { useRouter } from 'vue-router';

// export default {
//   data() {
//     return {
//       username: '',
//       password: '',
//     };
//   },
//   setup() {
//     const router = useRouter();
//     return { router };
//   },
//   methods: {
//     async handleLogin() {
//       // Validate email format
//       const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//       if (!emailPattern.test(this.username)) {
//         alert('Please enter a valid email address.');
//         return;
//       }

//       // Validate password length (you can add more criteria here if needed)
//       if (this.password.length < 6) {
//         alert('Password must be at least 6 characters long.');
//         return;
//       }

//       try {
//         // Check if the email exists
//         const emailExistsResponse = await axios.post('/findEmail', {
//           username: this.username,
//         });
//         if (!emailExistsResponse.data.exists) {
//           alert('Email does not exist. Please check your email.');
//           return;
//         }

//         // Proceed with login
//         const loginResponse = await axios.post('/login', {
//           username: this.username,
//           password: this.password,
//         });
//         const { accesToken } = loginResponse.data;
//         localStorage.setItem('token', accesToken);
//         // this.router.push({ name: 'Dashboard' });
//       } catch (error) {
//         console.error('Login failed:', error);
//         alert('Login failed. Please check your credentials and try again.');
//       }
//     },
//   },
// };

import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('/login', {
  username: this.username,
  password: this.password,
}, {
  withCredentials: true
});
        const { accesToken } = response.data;
        // localStorage.setItem('token', accesToken);
        this.router.push({ name: 'Dashboard' });
        console.log(response.data)
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.msg,
        showConfirmButton: false,
        timer: 2000
        });
      } catch (error) {
        console.error('Login failed:', error);
        Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 1500
        });
      }
    },
  },
};

const Dashboard = () => {
  
}

</script>

<style>

/* .hero-overlay {
    background-image: url('../assets/ban.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(2px) grayscale(70%);
    filter: blur(8px);
    -webkit-filter: blur(8px);
} */

/* .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
} */

.box-shadow{
  box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-webkit-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
-moz-box-shadow: -1px 1px 39px 8px rgba(0,0,0,0.14);
}

</style>