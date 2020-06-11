<template>
 <div class="container1">
  <div class="container">
    <div class="row justify-content-center">
      <div class="boxtitlepoint col-md-12" style="background-color: #006599;">
        <div class="d-flex flex-row m-auto justify-content-center">
          <h2 class="mt-auto mb-auto">Point Statement</h2>
        </div>
      </div>
      <div class="col-md-6 col-6"
           style="margin : 11px 0px 0px 0px !important;
                  padding : 0px 10px 0px 0px !important;"
          >       
        <div
          class="col-md-12 col-12 boxtitlepoint2"
          style=" background-color: #17a2b8 !important;
                  border-color: #17a2b8 !important;"
        >
          <button
              type="button"
              class="btn btn-info formlogin "
              style="margin-bottom: 0px !important;margin-left: 0px !important;"
            >
              Promosi
            </button>

        </div>

       
      </div>
      <div class="col-md-6 col-6 "
           style="margin : 11px 0px 0px 0px !important;
                  padding : 0px 0px 0px 10px !important;" 
            >

            <a
          class=" font14 mb-0"
          style="color:white !important"
          href="https://www.inosis.co.id/mgc2020/images/katalog/mgc_2020/index.html"
          target="_blank"
        >
          <div
            class="boxtitlepoint2"
            style=" background-color: #17a2b8 !important;
                  border-color: #17a2b8 !important;"
          >
            <button
              type="button"
              class="btn btn-info formlogin "
              style="margin-bottom: 0px !important;"
            >
              Katalog
            </button>
          </div>
        </a>
          
      </div>
      <div
        class="boxtitle col-md-12 mt-2 mb-0 p-2"
        style="  background-color: #006599;"
      >
        <h5 style="color:white!important;" class="text-center mt-0 mb-0">
          {{ pointmgcs.outlet_id }}
        </h5>
        <h3 class="leftcontent mt-0 mb-0" style="color:#ffd659 !important">
          {{ pointmgcs.outlet_name }}
        </h3>
      </div>

      <div class="col-md-12 boxpoint mt-2">
        <div class="row boxtitlepoint3" style="background-color: #006599;">
          <div class="col-md-5 col-5 margincustom m-auto">
            <h5 class="section3">Ratio Pencapaian</h5>
            <h5
              class="caption3 mt-auto mb-auto"
              style="color:#ffd659 !important"
            >
              {{ pointmgcs.archievement }}%
            </h5>
          </div>
          <div class="col-md-2 col-2 ">
            <hr style="width: 0px; height: 20px; border: 0.5px solid white;" />
          </div>
          <div class="col-md-5 col-5 margincustom m-auto mb-0">
            <h5 class="section3">Sisa Point</h5>
            <h5
              class="caption3 mt-0 mb-auto"
              style="color:#ffd659 !important"
            >
              {{ pointmgcs.saldo_sisa }}
            </h5>
          </div>
        </div>
        <div
          class="row"
          style="border:1px #dedede solid;
                 border-radius: 0 0 10px 10px ;
                 margin 0px 0px 0px 0px "
        >
          <div class="col-md-5 col-5 m-auto" 
               style ="padding : 10px 0px 8px 10px !important;
                       margin 0px 0px 0px 0px!important;  
               " >
            <p style="color:black !important;" class="font10 mb-0" align="left">
              Target Penjualan
            </p>
            <h5
              style="color:black !important;"
              class="font16 mt-auto mb-auto"
              align="left"
            >
              Rp.{{ pointmgcs.target_plan | currency }}
            </h5>
          </div>


          <div class="col-md-1 col-1">
              <hr
              
              style="width: 0px; height: 18px; border: 0.2px #e3e3e3 solid;border-style: solid;"
            />
          </div>
          <div class="col-md-5 col-5 m-auto  "
               style ="padding : 0px 0px 0px 10px !important;
                       margin 0px 0px 0px 0px!important;  
               "  
              >
            <p style="color:black !important;" class="mb-0 font10 " align="left">
            Aktual Penjualan
            </p>
            <h5
              style="color:black !important;"
              class="font16 mt-auto mb-auto"
              align="left"
            >
              Rp.{{ pointmgcs.target_actual | currency }}
            </h5>
          </div>
          <div
            class="col-md-11 col-11 m-auto"
            style=" height: 0px; border: 0.2px #e3e3e3 solid;border-style: solid;"
          >
          </div>

          <div class="col-md-5 col-5 m-auto text-center"
               style =" 
                       padding : 8px 0px 8px 10px !important;" 
            >
            <p style="color:black !important;" class="mb-0 font10" align="left">
              Selisih Penjualan:
            </p>
            <p
              class="font7.5 mb-0"
              style="color:black !important;"
              align="left"
            >
              Diatas (+) atau Dibawah (-) Target
            </p>
          </div>
          <div class="col-md-1 col-1">
         
          </div>
          <div class="col-md-5 col-5 m-auto "
               style =" padding : 8px 0px 0px 10px !important;" >
           <p v-bind:class="parseInt(selisihPenjualan) > 0 ? 'black font15' : 'red font15'">
              Rp.{{ selisihPenjualan | currency }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-12 boxpoint mt-2">
        <div class="row boxtitlepoint3" style="background-color: #006599;">
          <div
            class="col-md-3 col-3 margincustom2"
            style="border-right:  1px white dashed; "
          >
            <p class="section4 mb-0">Total Point</p>
            <h5
              class="font12 mt-auto mb-auto"
              style="color:#ffd659 !important"
            >
              {{ totalPoint }}
            </h5>
          </div>

          <div
            class="col-md-3 col-3 margincustom2"
            style="border-right:  1px white dashed; "
          >
            <p class="section4 mb-0">Carry Over</p>
            <h5
              class="font12 mt-auto mb-auto"
              style="color:#ffd659 !important"
            >
              {{ pointmgcs.carry_over }}
            </h5>
          </div>
          <div
            class="col-md-3 col-3 margincustom2"
            style="border-right:  1px white dashed; "
          >
            <p class="section4 mb-0">Redemption</p>
            <h5
              class="font12 mt-auto mb-auto"
              style="color:#ffd659 !important"
            >
              {{ pointmgcs.redeemtion }}
            </h5>
          </div>
          <div class="col-md-3 col-3 margincustom2">
            <p class="section4 mb-0">Sisa Point</p>
            <h5
              class="font12 mt-auto mb-auto"
              style="color:#ffd659 !important"
            >
              {{ sisaPoint }}
            </h5>
          </div>
        </div>

        <div
          class="row "
          style="border:1px #dedede solid;
                 border-radius: 0 0 10px 10px ;
                 "
        >
          <div
            class="col-md-4 col-4 mx-auto mt-2 text-center margincustom d-flex flex-column"
            style="border-right:  1px #dedede dashed;
                   margin 0px 0px 0px 0px!important; 
                     "
            v-for="pointmgc in pointmgcs.data"
            :key="pointmgc.id"
          >
            <p style="color:black !important;" class="font10 mb-0">
              {{ pointmgc.bulan }}
            </p>
            <h5 style="color:black !important;" class="font14 mb-0">{{ pointmgc.point_satuan }}</h5>
          </div>
        </div>
      </div>

      <div
        class="col-md-12 boxpoint mt-2"
        v-for="pointmgc in pointmgcs.data"
        :key="pointmgc.id"
      >
        <div class="row boxtitlepoint3" style="  background-color: #0099CB;">
          <div class="col-md-5 col-5 align-self-center">
            <h5 style="color:white !important;" class="mb-0 font14">
              {{ pointmgc.bulan }}
            </h5>
          </div>
          <div class="col-md-2 col-2 align-self-center">
            <hr
              style="width: 0px; height: 20px; border: 0.5px white solid;border-style: solid;"
            />
          </div>
          <div class="col-md-5 col-5 align-self-center">
            <h5 class="font10 mb-1">Ratio Pencapaian</h5>
            <h5 class="font18 mb-0"  style="color:#ffd659 !important">
              {{ pointmgc.archievement }}%
            </h5>
          </div>
        </div>

        
        <div
          class="row"
          style="border:1px #dedede solid;
                 border-radius: 0 0 10px 10px ;
                 margin 0px 0px 0px 0px "
        >
           <div class="col-md-5 col-5 m-auto" 
               style ="padding : 10px 0px 8px 18px !important;
                       margin 0px 0px 0px 0px!important;  
               " >
            <p style="color:black !important;" class="font10 mb-0" align="left">
              Target Penjualan
            </p>
            <h5
              style="color:black !important;"
              class="font16 mt-auto mb-auto"
              align="left"
            >
              Rp.{{ pointmgc.target_monthly | currency }}
            </h5>
          </div>
          <div class="col-md-2 col-2 ">
            <hr
              style="width: 0px; height: 18px; border: 0.5px #e3e3e3 dashed;border-style: solid;"
            />
          </div>
          <div class="col-md-5 col-5 m-auto  "
               style ="padding : 0px 0px 0px 10px !important;
                       margin 0px 0px 0px 0px!important;  
               "  
              >
            <p style="color:black !important;" class="mb-0 font10 " align="left">
              Aktual Penjualan
            </p>
            <h5
              style="color:black !important;"
              class="font16 mt-auto mb-auto"
              align="left"
            >
              Rp.{{ pointmgc.total_sales | currency }}
            </h5>
          </div>

      
          <div
            class="col-md-11 col-11 mx-auto"
            style=" height: 0px; border: 0.5px #e3e3e3 dashed;border-style: solid;"
          ></div>
         <div class="col-md-5 col-5 m-auto text-center"
               style = "padding : 8px 0px 8px 10px !important;" 
            >
            <p style="color:black !important;" class="mb-0 font10" align="left">
              Selisih Penjualan:
            </p>
            <p
              class="font7.5 mb-0"
              style="color:black !important;"
              align="left"
            >
              Diatas (+) atau Dibawah (-) Target
            </p>
          </div>
          <div class="col-md-1 col-1">
          
          </div>
          <div class="col-md-5 col-5 m-auto text-center"
               style = "padding : 8px 0px 8px 15px !important;"   
          >
            <h5
              v-bind:class="
                parseInt(pointmgc.total_sales) -
                  parseInt(pointmgc.target_monthly) >
                0
                  ? 'black font15'
                  : 'red font15'
              "
            >
              Rp.
              {{
                (normalize(pointmgc.total_sales) -
                  normalize(pointmgc.target_monthly))
                  | currency
              }}
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-12"
           style="margin : 11px 0px 0px 0px !important;
                  padding : 0px 0px 0px 0px !important;" 
          >

      <router-link :to="{ path: '/loginmgc' }">
      
        <button type="button" class="btn btn-info  col-md-12 formlogin2">
          Keluar
        </button>
        </router-link>

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
      pointmgcs: {
        data: [],
      },
    };
  },
  methods: {
    normalize(badNumeric) {
      return Number(badNumeric.split(",").join(""));
    },
  },
  mounted() {
    axios
      .get("http://www.inosis.co.id/mgc2020_api/api.php/dashboard-outlet", {
        headers: { version: this.$route.params.version },
        params: {
          txtKodeOutlet: this.$route.params.outlet_id,
          token: localStorage.token,
        },
      })
      .then((res) => (this.pointmgcs = res.data))
      .catch((err) => console.log(err));
  },
  computed: {
    selisihPenjualan() {
      return this.pointmgcs.target_actual - this.pointmgcs.target_plan;
    },
    totalPoint() {
      return this.pointmgcs.data.reduce(function(items, data) {
        return items + Number(data.point_satuan);
      }, 0);
    },
    sisaPoint() {
      return (
        this.totalPoint +
        Number(this.pointmgcs.carry_over) +
        Number(this.pointmgcs.redeemtion)
      );
    },
    // selisihPenjualanMonth1() {
    //   return (
    //     Number(this.pointmgcs.total_sales) -
    //     Number(this.pointmgcs.target_monthly)
    //   );
    // },
    selisihPenjualanMonth() {
      return (
        Number(this.pointmgcs.total_sales.split(",").join("")) -
        Number(this.pointmgcs.target_monthly.split(",").join(""))
      );
    },
    warna() {
      return parseInt(this.pointmgcs.selisihPenjualan) < 0 ? "black" : "red";
    },
  },
  watch: {
    pointmgcs: {
      handler(value) {
        console.log(value);
      },
      deep: true,
    },
  },
};
</script>
