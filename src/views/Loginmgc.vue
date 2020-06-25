<template>
  <div
    class="container-fluid d-flex space-between flex-column justify-content-center"
  >
    <div
      class="row justify-content-center"
      style="margin-bottom: -10px !important;"
    >
      <div class="col-md-12">
        <br /><br /><br />
        <img src="../assets/unnamed.png" class="m-auto imgmgc" />
      </div>
      <div class="col-md-10 p-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#064495"
            fill-opacity="1"
            d="M0,64L60,106.7C120,149,240,235,360,261.3C480,288,600,256,720,218.7C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
        <div class="col-md-12 boxloginmgc">
          <div class="row row1 mt-4" style="border: none;">
            <div class="col-md-6 col-6 col-sm-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Tahun</label>
                <select id="inputState" class="form-control formlogin">
                  <option value="2020">2020</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-6 col-sm-6">
              <div class="form-group">
                <label for="exampleInputEmail2">Phase</label>
                <select
                  id="inputState"
                  v-model="version"
                  class="form-control formlogin"
                >
                  <option selected>Pilih Quarter</option>
                  <option value="1">Quarter 1</option>
                  <option value="2">Quarter 2</option>
                  <option value="3">Quarter 3</option>
                  <option value="3">Quarter 4</option>
                  <option value="3">Quarter 5</option>
                </select>
              </div>
            </div>

            <div class="col-md-12">
              <div class="form-group">
                <label for="inputAddress">ID</label>
                <input
                  type="text"
                  class="form-control text-center formlogin"
                  id="id"
                  v-model="username"
                  placeholder="Masukan User Id anda"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleInputPassword1">Kata Sandi</label>
                <input
                  type="password"
                  class="form-control text-center formlogin"
                  v-model="password"
                  id="exampleInputPassword1"
                  placeholder="Masukan Password anda"
                />
              </div>
            </div>
            <div class="col-md-12 mt-3 mb-2">
              <div class="form-group">
                <a
                  @click="getLogin(token)"
                  style="color: white !important;"
                  href="#"
                  ><button
                    type="button"
                    class="btn btn-danger col-md-12 col-12 formlogin2"
                  >
                    Masuk
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      regid: "test",
      version: "1",
    };
  },
  methods: {
    getLogin() {
      // this.tokenLogin.push(token);
      // const parsed = JSON.stringify(this.tokenLogin);
      // localStorage.setItem("tokenLogin", parsed);
      const urlencoded = new URLSearchParams();
      urlencoded.append("username", this.username);
      urlencoded.append("password", this.password);
      urlencoded.append("regid", this.regid);
      axios
        .post("http://www.inosis.co.id/mgc2020_api/api.php/login", urlencoded)
        // .then(res => (this.datalogin = res.data))
        .then((response) => {
          // console.log(response);

          let result = response.data;

          if (result.api_status === 1) {
            localStorage.token = result.token;
            this.$router.push(`pointmgc/${this.username}/${this.version}`);
          } else {
            console.log(alert("user Id dan password anda salah"));
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
