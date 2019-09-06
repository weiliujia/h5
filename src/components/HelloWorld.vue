<template>
  <div>
    <div class="tex">
      <p>
        贷款申请表
        <span class="tex_sp">
          （
          <span class="red">*</span>号为必填项，请填写真实信息）
        </span>
      </p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        姓名
        <span class="red">*</span>
      </p>
      <el-input v-model="name" class="userform_inp1"></el-input>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        身份证号码
        <span class="red">*</span>
      </p>
      <el-input v-model="idcard" class="userform_inp1" type="number"></el-input>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <span class="red">*</span>
      </p>
      <el-input v-model="phone" class="userform_inp1" type="number"></el-input>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        需求贷款额度（万元）
        <span class="red">*</span>
      </p>
      <el-input v-model="quoat" class="userform_inp1" type="number"></el-input>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        贷款用途
        <span class="sp">(购房，消费，购车，装修，扩大经营等)</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="use" class="userform_inp1"></el-input>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        现在住的房子入住时间
        <span class="sp">（什么时间住进来的）</span>
        <span class="red">*</span>
        <el-date-picker v-model="live_time" type="date" placeholder="年-月-日" class="userform_inp1"></el-date-picker>
      </p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        现居住类型
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio" size="small">
          <el-radio
            :label="item.id"
            border
            v-for="item in radios"
            :key="item.value"
            class="isredio"
            @change="onRadioChange(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        每月租金
        <span class="red">*</span>
      </p>
      <el-input v-model="rent" class="userform_inp1" type="number"></el-input>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        婚姻状况
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio01" size="small">
          <el-radio
            :label="item.id"
            border
            v-for="item in radios1"
            :key="item.value"
            class="isredio"
            @change="onRadioChange1(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        学历
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio02" size="small">
          <el-radio
            :label="item.id"
            border
            v-for="item in radios2"
            :key="item.value"
            class="isredio"
            @change="onRadioChange2(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        名下是否有车
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio03" size="small">
          <el-radio
            :label="item.id"
            border
            v-for="item in radios5"
            :key="item.value"
            class="isredio"
            @change="onRadioChange3(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        名下是否有房
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio04" size="small">
          <el-radio
            :label="item.id"
            border
            v-for="item in radios5"
            :key="item.value"
            class="isredio"
            @change="onRadioChange4(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        您有几个孩子
        <span class="sp">（如没有写无）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="is_children" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        现居住地址
        <span class="sp">（详细到门牌号）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="live_address" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        工作单位全称
        <span class="sp">（无工作可填无）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="unit_name" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        单位电话
        <span class="red">*</span>
      </p>
      <el-input v-model="unit_tel" class="userform_inp1" type="number"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        公司地址
        <span class="sp">（详细到门牌号）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="unit_address" class="userform_inp1"></el-input>
    </div>
    <!-- ---------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        是否是公务员
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio05" size="small">
          <el-radio
            :label="item.id"
            border
            v-for="item in radios4"
            :key="item.value"
            class="isredio"
            @change="onRadioChange5(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
    </div>
    <!-- ---------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        职位级别
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio06" size="small">
          <el-radio
            :label="item.id"
            border
            v-for="item in radios3"
            :key="item.value"
            class="isredio"
            @change="onRadioChange6(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        部门
        <span class="sp">（无单位可填无）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="branch" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        职务
        <span class="sp">（无单位可填无）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="job" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        现单位入职时间
        <span class="red">*</span>
      </p>
      <el-date-picker v-model="initia" type="date" placeholder="年-月-日" class="userform_inp1"></el-date-picker>
    </div>
    <!-- ------------ -->
    <div class="userform_itemm1">
      <p class="userform_span1">
        每月大概总收入（3000～50万）
        <span class="red">*</span>
      </p>
      <el-input v-model="income" class="userform_inp1" type="number"></el-input>
    </div>
    <div class="form1">
      <div class="userform_con1">
        <p>配偶信息（已婚再婚必须填写）</p>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        姓名
        <span class="red">*</span>
      </p>
      <el-input v-model="spouse_name" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <soan class="red">*</soan>
      </p>
      <el-input v-model="spouse_phone" class="userform_inp1" type="number"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_itemm1">
      <p class="userform_span1">爱人单位名称</p>
      <el-input v-model="spouse_company" class="userform_inp1"></el-input>
    </div>
    <div class="form1">
      <div class="userform_con1">
        <p>亲属信息</p>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        姓名
        <span class="red">*</span>
      </p>
      <el-input v-model="kinship_name" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <soan class="red">*</soan>
      </p>
      <el-input v-model="kinship_phone" class="userform_inp1" type="number"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        亲属关系
        <span class="sp">（父亲，母亲，哥哥，姐姐等）</span>
        <soan class="red">*</soan>
      </p>
      <el-input v-model="kinship_relev" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        家庭具体地址
        <soan class="red">*</soan>
      </p>
      <el-input v-model="kinship_addr" class="userform_inp1"></el-input>
    </div>
    <!--  -->
    <div class="form1">
      <div class="userform_con1">
        <p>同事基本信息</p>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        姓名
        <span class="red">*</span>
      </p>
      <el-input v-model="work_name" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <soan class="work_phone">*</soan>
      </p>
      <el-input v-model="work_phone" class="userform_inp1" type="number"></el-input>
    </div>
    <!--  -->
    <div class="userform_item1">
      <p class="userform_span1">
        部门
        <span class="work_section">*</span>
      </p>
      <el-input v-model="work_section" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        职务
        <soan class="red">*</soan>
      </p>
      <el-input v-model="work_job" class="userform_inp1"></el-input>
    </div>
    <!--  -->
    <div class="form1">
      <div class="userform_con1">
        <p>其它联系人朋友</p>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        姓名
        <span class="red">*</span>
      </p>
      <el-input v-model="liaison_name" class="userform_inp1"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <soan class="red">*</soan>
      </p>
      <el-input v-model="liaison_phone" class="userform_inp1" type="number"></el-input>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        关系
        <soan class="red">*</soan>
      </p>
      <el-input v-model="liaison_relev" class="userform_inp1"></el-input>
    </div>
    <!-- ---------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        是否爱人和亲属能知道贷款
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio07" size="small">
          <el-radio
            :label="item.id"
            border
            v-for="item in radios4"
            :key="item.value"
            class="isredio"
            @change="onRadioChange8(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
    </div>
    <el-button class="form_btn" @click.native="add">确认提交</el-button>
  </div>
</template>

<script>
import "./home.css";
import * as apis from "@/api/apis.js";
import Qs from "qs";
import utils from "../utils";

export default {
  // name: "HelloWorld",

  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      radio: "",
      radio01: "",
      radio02: "",
      radio03: "",
      radio04: "",
      radio05: "",
      radio06: "",
      radio07: "",
      // informantType: 0,
      radios: [
        {
          label: "租房",
          value: "租房",
          id: 0,
          selected: "1"
        },
        {
          label: "自己有房产无贷款",
          value: "自己有房产无贷款",
          id: 1,
          selected: "0"
        },
        {
          label: "自己有房产有贷款",
          value: "自己有房产有贷款",
          id: 2,
          selected: "0"
        },
        {
          label: "单位宿舍",
          value: "单位宿舍",
          id: 3,
          selected: "0"
        },
        {
          label: "亲属住房",
          value: "亲属住房",
          id: 4,
          selected: "0"
        }
      ],
      radios1: [
        {
          label: "未婚",
          value: "未婚",
          id: 0
        },
        {
          label: "已婚",
          value: "已婚",
          id: 1
        },
        {
          label: "离异",
          value: "离异",
          id: 2
        },
        {
          label: "再婚",
          value: "再婚",
          id: 3
        },
        {
          label: "丧偶",
          value: "丧偶",
          id: 4
        }
      ],
      radios2: [
        {
          label: "硕士及以上",
          value: "硕士及以上",
          id: 0
        },
        {
          label: "本科",
          value: "本科",
          id: 1
        },
        {
          label: "大专",
          value: "大专",
          id: 2
        },
        {
          label: "中专",
          value: "中专",
          id: 3
        },
        {
          label: "高中",
          value: "高中",
          id: 4
        },
        {
          label: "初中及以下",
          value: "初中及以下",
          id: 5
        }
      ],
      radios3: [
        {
          label: "法人",
          value: "法人",
          id: 0
        },
        {
          label: "股东",
          value: "股东",
          id: 1
        },
        {
          label: "管理人员",
          value: "管理人员",
          id: 2
        },
        {
          label: "正式人员",
          value: "正式人员",
          id: 3
        },
        {
          label: "派遣人员",
          value: "派遣人员",
          id: 4
        }
      ],
      radios4: [
        {
          label: "是",
          value: "是",
          id: 0
        },
        {
          label: "否",
          value: "否",
          id: 1
        }
      ],
      radios5: [
        {
          label: "有",
          value: "有",
          id: 0
        },
        {
          label: "没有",
          value: "没有",
          id: 1
        }
      ],

      value1: "",
      value2: "",
      value3: "",
      value4: "",

      name: "",
      idcard: "",
      phone: "",
      quoat: "",
      use: "",
      live_time: "", //	现在住的房子入住时间
      live_type: "",
      rent: "", //	每月租金
      marriage: "",
      educa: "",
      is_car: "",
      is_house: "",
      is_children: "",
      live_address: "",
      unit_name: "",
      unit_tel: "",
      unit_address: "",
      is_civil: "",
      position_level: "",
      branch: "",
      job: "",
      initia: "",
      income: "",
      spouse_name: "",
      spouse_phone: "",
      spouse_company: "",
      kinship_name: "",
      kinship_phone: "",
      kinship_relev: "",
      kinship_addr: "",
      work_name: "",
      work_phone: "",
      work_section: "",
      work_job: "",
      liaison_name: "",
      liaison_phone: "",
      liaison_relev: "",
      is_clear: ""
    };
  },
  created() {
    let uid = null;
    let local = "http://form-1.guangrongjie.com/?uid=885#/"; //获取url中"?"符后的字串
    if (local.indexOf("?") != -1) {
      //判断是否有参数
      if (local.indexOf("uid=") != -1) {
        uid = local.split("uid=")[1].split("&")[0];
        console.log(uid);
      }
    }
  },
  methods: {
    onRadioChange(item) {
      console.log("item", item);
      this.live_type = item;
    },
    onRadioChange1(item) {
      console.log("item", item);
      this.marriage = item;
    },
    onRadioChange2(item) {
      console.log("item", item);
      this.educa = item;
    },
    onRadioChange3(item) {
      console.log("item", item);
      this.is_car = item;
    },
    onRadioChange4(item) {
      console.log("item", item);
      this.is_house = item;
    },
    onRadioChange5(item) {
      console.log("item", item);
      this.is_civil = item;
    },
    onRadioChange6(item) {
      console.log("item", item);
      this.position_level = item;
    },

    onRadioChange8(item) {
      console.log("item", item);
      this.is_clear = item;
    },
    async add() {
      await apis;
      if (this.name === "") {
        this.$dialog.toast({
          mes: "请输入姓名",
          timeout: 1500
        });
        return;
      }
      if (this.idcard < 18) {
        this.$dialog.toast({
          mes: "请输入身份证号",
          timeout: 1500
        });
        return;
      }
      if (this.phone < 11) {
        this.$dialog.toast({
          mes: "请输入手机号",
          timeout: 1500
        });
        return;
      }
      if (this.quoat === "") {
        this.$dialog.toast({
          mes: "请输入贷款额度",
          timeout: 1500
        });
        return;
      }
      if (this.use === "") {
        this.$dialog.toast({
          mes: "请输入贷款用途",
          timeout: 1500
        });
        return;
      }
      if (this.live_time === "") {
        this.$dialog.toast({
          mes: "请选择入住时间",
          timeout: 1500
        });
        return;
      }
      if (this.live_type === "") {
        this.$dialog.toast({
          mes: "请选择居住类型",
          timeout: 1500
        });
        return;
      }
      if (this.rent === "") {
        this.$dialog.toast({
          mes: "请填写每月租金",
          timeout: 1500
        });
        return;
      }
      if (this.marriage === "") {
        this.$dialog.toast({
          mes: "请选择婚姻状况",
          timeout: 1500
        });
        return;
      }
      if (this.educa === "") {
        this.$dialog.toast({
          mes: "请选择学历",
          timeout: 1500
        });
        return;
      }
      if (this.is_car === "") {
        this.$dialog.toast({
          mes: "请选择是否有车",
          timeout: 1500
        });
        return;
      }
      if (this.is_house === "") {
        this.$dialog.toast({
          mes: "请选择是否有房",
          timeout: 1500
        });
        return;
      }
      if (this.is_children === "") {
        this.$dialog.toast({
          mes: "请填写您的孩子",
          timeout: 1500
        });
        return;
      }
      if (this.live_address === "") {
        this.$dialog.toast({
          mes: "请填写您的现居住地",
          timeout: 1500
        });
        return;
      }
      if (this.unit_name === "") {
        this.$dialog.toast({
          mes: "请填写您的工作单位",
          timeout: 1500
        });
        return;
      }
      if (this.unit_tel === "") {
        this.$dialog.toast({
          mes: "请填写单位电话",
          timeout: 1500
        });
        return;
      }
      if (this.unit_address === "") {
        this.$dialog.toast({
          mes: "请填写公司地址",
          timeout: 1500
        });
        return;
      }
      if (this.is_civil === "") {
        this.$dialog.toast({
          mes: "您是否是公务员",
          timeout: 1500
        });
        return;
      }
      if (this.position_level === "") {
        this.$dialog.toast({
          mes: "请选择职位级别",
          timeout: 1500
        });
        return;
      }
      if (this.branch === "") {
        this.$dialog.toast({
          mes: "请填写部门",
          timeout: 1500
        });
        return;
      }
      if (this.job === "") {
        this.$dialog.toast({
          mes: "请填写职务",
          timeout: 1500
        });
        return;
      }
      if (this.initia === "") {
        this.$dialog.toast({
          mes: "请填写入职时间",
          timeout: 1500
        });
        return;
      }
      if (this.income === "") {
        this.$dialog.toast({
          mes: "请填写您的月薪",
          timeout: 1500
        });
        return;
      } else if (this.marriage === "已婚") {
        if (this.spouse_name === "") {
          this.$dialog.toast({
            mes: "请填写您配偶的姓名",
            timeout: 1500
          });
          return;
        }
        if (this.spouse_phone === "") {
          this.$dialog.toast({
            mes: "请填写您配偶的手机号",
            timeout: 1500
          });
          return;
        }
      }
      if (this.kinship_name === "") {
        this.$dialog.toast({
          mes: "请填写您亲属的姓名",
          timeout: 1500
        });
        return;
      }
      if (this.kinship_phone === "") {
        this.$dialog.toast({
          mes: "请填写您亲属的手机号码",
          timeout: 1500
        });
        return;
      }
      if (this.kinship_relev === "") {
        this.$dialog.toast({
          mes: "请填写您亲属关系",
          timeout: 1500
        });
        return;
      }
      if (this.work_name === "") {
        this.$dialog.toast({
          mes: "请填写您同事的姓名",
          timeout: 1500
        });
        return;
      }
      if (this.liaison_phone === "") {
        this.$dialog.toast({
          mes: "请填写您同事的电话",
          timeout: 1500
        });
        return;
      }
      if (this.work_section === "") {
        this.$dialog.toast({
          mes: "请填写您同事的部门",
          timeout: 1500
        });
        return;
      }
      if (this.work_job === "") {
        this.$dialog.toast({
          mes: "请填写您同事职务",
          timeout: 1500
        });
        return;
      }
      if (this.liaison_name === "") {
        this.$dialog.toast({
          mes: "请填写您朋友的姓名",
          timeout: 1500
        });
        return;
      }
      if (this.liaison_phone === "") {
        this.$dialog.toast({
          mes: "请填写您朋友的手机号",
          timeout: 1500
        });
        return;
      }
      if (this.liaison_relev === "") {
        this.$dialog.toast({
          mes: "请填写您跟朋友的关系",
          timeout: 1500
        });
        return;
      }
      if (this.is_clear === "") {
        this.$dialog.toast({
          mes: "亲属是否知道贷款",
          timeout: 1500
        });
        return;
      } else {
        await apis
          .add(
            Qs.stringify({
              uid: acode,
              name: this.name,
              idcard: this.idcard,
              phone: this.phone,
              quoat: this.quoat,
              use: this.use,
              live_time: this.live_time,
              live_type: this.live_type,
              rent: this.rent,
              marriage: this.marriage,
              educa: this.educa,
              is_car: this.is_car,
              is_house: this.is_house,
              is_children: this.is_children,
              live_address: this.live_address,
              unit_name: this.unit_name,
              unit_tel: this.unit_tel,
              unit_address: this.unit_address,
              is_civil: this.is_civil,
              position_level: this.position_level,
              branch: this.branch,
              job: this.job,
              initia: this.initia,
              income: this.income,
              spouse_name: this.spouse_name,
              spouse_phone: this.spouse_phone,
              spouse_company: this.spouse_company,
              kinship_name: this.kinship_name,
              kinship_phone: this.kinship_phone,
              kinship_relev: this.kinship_relev,
              kinship_addr: this.kinship_addr,
              work_name: this.work_name,
              work_phone: this.work_phone,
              work_section: this.work_section,
              work_job: this.work_job,
              liaison_name: this.liaison_name,
              liaison_phone: this.liaison_phone,
              liaison_relev: this.liaison_relev,
              is_clear: this.is_clear
            })
          )
          .then(res => {
            this.msg = res.data.msg;
            this.code = res.data.code;
          });
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
