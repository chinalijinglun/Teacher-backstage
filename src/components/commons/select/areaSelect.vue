<template>
<el-row>
  <el-select size="mini" v-if="type>0" v-model="form.country" @change="handlerCountryChange" :style="{ width: itemWidth }">
    <el-option v-for="(item, index) in countryLs" :label="item.name_zh" :value="item.id" :key="index"></el-option>
  </el-select>
  <el-select size="mini" v-if="type>1" v-model="form.province" @change="handlerProvinceChange" :style="{ width: itemWidth }">
    <el-option v-for="(item, index) in provinceLs" :label="item.name_zh" :value="item.id" :key="index"></el-option>
  </el-select>
  <el-select size="mini" v-if="type>2" v-model="form.city" :style="{ width: itemWidth }">
    <el-option v-for="(item, index) in cityLs" :label="item.name_zh" :value="item.id" :key="index"></el-option>
  </el-select>
</el-row>
</template>
<script>
  import {
    getCountry,
    getRegionByPid
  } from '@/api/region'
  export default {
    name: 'areaSelect',
    watch: {
      form: {
        handler(v) {
          this.$emit('input',[v.country, v.province, v.city])
        },
        deep: true
      }
    },
    data() {
      return {
        form: {
          country: '',
          province: '',
          city: ''
        },
        countryLs: [],
        provinceLs: [],
        cityLs: []
      }
    },
    created() {
      this.onInit()
    },
    props: {
      value: {
        type: Array,
        default: []
      },
      // type 1 国家  2 国家 省  3 国家 省 市
      type: {
        type: Number,
        default: 3
      },
      itemWidth: {
        type: String,
        default: '100px'
      }
    },
    methods: {
      onInit() {
        const [country, province, city] = this.value;
        this.getCountrys().then(data => {
          if(country) {
            this.form.country = country;
            this.getProvince(country).then(resp => {
              this.form.province = province;
              if(province) {
                this.getCity(province).then(resp => {
                  this.form.city = city;
                })
              }
            })
          }
        })
      },
      getCountrys() {
        return getCountry().then(data => {
          this.countryLs = data;
          return data;
        })
      },
      getProvince(id) {
        return getRegionByPid(id).then(resp => {
          this.provinceLs = resp.data.objects;
          return resp.data.objects;
        });
      },
      getCity(id) {
        return getRegionByPid(id).then(resp => {
          this.cityLs = resp.data.objects;
          return resp.data.objects;
        });
      },
      handlerCountryChange(id) {
        this.province = '';
        this.city = '';
        this.getProvince(id)
      },
      handlerProvinceChange(id) {
        this.city = '';
        this.getCity(id)
      }
    }
  }
</script>
