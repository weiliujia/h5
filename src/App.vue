<template>
  <div id="app">
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
      <el-input v-model="name" class="userform_inp1" ref="inpred" v-on:blur="names"></el-input>
      <p class="txt_red" ref="red">请填写此项</p>
    </div>
      <div class="userform_item1">
      <p class="userform_span1">
        年龄
        <span class="red">*</span>
      </p>
      <el-input v-model="age" class="userform_inp1" v-on:blur="ages"></el-input>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        身份证号码
        <span class="red">*</span>
      </p>
      <el-input v-model="idcard" class="userform_inp1" v-on:blur="idcards"></el-input>
      <p class="txt_red" ref="red1">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <span class="red">*</span>
      </p>
      <el-input v-model="phone" class="userform_inp1" type="number" v-on:blur="phones"></el-input>
      <p class="txt_red" ref="red2">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        需求贷款额度（万元）
        <span class="red">*</span>
      </p>
      <el-input v-model="quoat" class="userform_inp1" type="number" v-on:blur="quoats"></el-input>
      <p class="txt_red" ref="red02">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        贷款用途
        <span class="sp">(购房，消费，购车，装修，扩大经营等)</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="use" class="userform_inp1" v-on:blur="uses"></el-input>
      <p class="txt_red" ref="red3">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        <!-- 现在住的房子入住时间 -->
        来京时间
        <span class="sp">（什么时间来北京的）</span>
        <span class="red">*</span>
      </p>
      <!-- <el-date-picker v-model="live_time" type="date" placeholder="年-月-日" class="userform_inp1"></el-date-picker> -->
      <div class="userform_inp1">
        <!-- <input v-model="live_time_n" class="userform_inp01" placeholder="年" type="number" />
        <input v-model="live_time_y" class="userform_inp01" placeholder="月" type="number" />
        <input v-model="live_time_r" class="userform_inp01" placeholder="日" type="number" />-->

        <div class="userform_inp01">
          <input
            v-model="live_time_n"
            class="userform_inp01"
            type="number"
            v-on:blur="live_time_ns"
          />
          <span class="span">年</span>
        </div>
        <div class="userform_inp01">
          <input
            v-model="live_time_y"
            class="userform_inp01"
            type="number"
            v-on:blur="live_time_ys"
          />
          <span class="span">月</span>
        </div>
        <!-- <div class="userform_inp01">
          <input v-model="live_time_r" class="userform_inp01" type="number" />
          <span class="span">日</span>
        </div>-->

        <!-- <el-input v-model="job" class="userform_inp1"></el-input>
        <el-input v-model="job" class="userform_inp1"></el-input>-->
      </div>
      <p class="txt_red" ref="red4">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        现居住类型
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio" size="small">
          <el-radio
            :label="item.value"
            border
            v-for="item in radios"
            :key="item.value"
            class="isredio"
            @change="onRadioChange(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red5">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        每月租金
        <!-- <span class="red">*</span> -->
      </p>
      <el-input v-model="rent" class="userform_inp1" v-on:blur="rents"></el-input>
      <p class="txt_red" ref="red6">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        打卡工资(现单位是否满六个月)
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio09" size="small">
          <el-radio
            :label="item.value"
            border
            v-for="item in radios4"
            :key="item.value"
            class="isredio"
            @change="onRadioChange9(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red40">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        社保(现单位是否满六个月)
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio10" size="small">
          <el-radio
            :label="item.value"
            border
            v-for="item in radios4"
            :key="item.value"
            class="isredio"
            @change="onRadioChange10(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red41">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        公积金(现单位是否满六个月)
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio11" size="small">
          <el-radio
            :label="item.value"
            border
            v-for="item in radios4"
            :key="item.value"
            class="isredio"
            @change="onRadioChange11(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red42">请填写此项</p>
    </div>

    <div class="userform_item1">
      <p class="userform_span1">
        微粒贷额度是多少
        <!-- <span class="red">*</span> -->
      </p>
      <el-input v-model="finance" class="userform_inp1" v-on:blur="finances"></el-input>
      <p class="txt_red" ref="red43">请填写此项</p>
    </div>

    <div class="userform_item1">
      <p class="userform_span1">
        芝麻分额度大概是多少
        <!-- <span class="red">*</span> -->
      </p>
      <el-input v-model="sesame" class="userform_inp1" v-on:blur="sesames"></el-input>
      <p class="txt_red" ref="red44">请填写此项</p>
    </div>

    <div class="userform_item1">
      <p class="userform_span1">
        婚姻状况
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio01" size="small">
          <el-radio
            :label="item.value"
            border
            v-for="item in radios1"
            :key="item.value"
            class="isredio"
            @change="onRadioChange1(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red7">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        学历
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio02" size="small">
          <el-radio
            :label="item.value"
            border
            v-for="item in radios2"
            :key="item.value"
            class="isredio"
            @change="onRadioChange2(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red8">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        名下是否有车
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio03" size="small">
          <el-radio
            :label="item.value"
            border
            v-for="item in radios5"
            :key="item.value"
            class="isredio"
            @change="onRadioChange3(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red9">请填写此项</p>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        名下是否有房
        <span class="red">*</span>
      </p>
      <div>
        <el-radio-group v-model="radio04" size="small">
          <el-radio
            :label="item.value"
            border
            v-for="item in radios5"
            :key="item.value"
            class="isredio"
            @change="onRadioChange4(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red10">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        您有几个孩子
        <span class="sp">（如没有写无）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="is_children" class="userform_inp1" v-on:blur="is_childrens"></el-input>
      <p class="txt_red" ref="red11">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        现居住地址
        <span class="sp">（详细到门牌号）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="live_address" class="userform_inp1" v-on:blur="live_addresss"></el-input>
      <p class="txt_red" ref="red12">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        工作单位全称
        <span class="sp">（无工作可填无）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="unit_name" class="userform_inp1" v-on:blur="unit_names"></el-input>
      <p class="txt_red" ref="red13">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        单位电话
        <span class="red">*</span>
      </p>
      <el-input v-model="unit_tel" class="userform_inp1" type="number" v-on:blur="unit_tels"></el-input>
      <p class="txt_red" ref="red14">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        公司地址
        <span class="sp">（详细到门牌号）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="unit_address" class="userform_inp1" v-on:blur="unit_addresss"></el-input>
      <p class="txt_red" ref="red15">请填写此项</p>
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
            :label="item.value"
            border
            v-for="item in radios4"
            :key="item.value"
            class="isredio"
            @change="onRadioChange5(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red16">请填写此项</p>
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
            :label="item.value"
            border
            v-for="item in radios3"
            :key="item.value"
            class="isredio"
            @change="onRadioChange6(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red17">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        部门
        <span class="sp">（无单位可填无）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="branch" class="userform_inp1" v-on:blur="branchs"></el-input>
      <p class="txt_red" ref="red017">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        职务
        <span class="sp">（无单位可填无）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="job" class="userform_inp1" v-on:blur="jobs"></el-input>
      <p class="txt_red" ref="red18">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        现单位入职时间
        <span class="red">*</span>
      </p>
      <!-- <el-date-picker v-model="initia" type="date" placeholder="年-月-日" class="userform_inp1"></el-date-picker> -->
      <div class="userform_inp1">
        <div class="userform_inp01">
          <input v-model="initia_n" class="userform_inp01" type="number" v-on:blur="initia_ns" />
          <span class="span">年</span>
        </div>
        <div class="userform_inp01">
          <input v-model="initia_y" class="userform_inp01" type="number" v-on:blur="initia_ys" />
          <span class="span">月</span>
        </div>
        <!-- <div class="userform_inp01">
          <input v-model="initia_r" class="userform_inp01" type="number" />
          <span class="span">日</span>
        </div>-->

        <!-- <el-input v-model="job" class="userform_inp1"></el-input>
        <el-input v-model="job" class="userform_inp1"></el-input>-->
      </div>
      <p class="txt_red" ref="red19">请填写此项</p>
    </div>
    <!-- ------------ -->
    <div class="userform_itemm1">
      <p class="userform_span1">
        每月大概总收入（3000～50万）
        <span class="red">*</span>
      </p>
      <el-input v-model="income" class="userform_inp1" v-on:blur="incomes"></el-input>
      <p class="txt_red" ref="red20">请填写此项</p>
    </div>
    <div class="form1">
      <div class="userform_con1">
        <p>配偶信息（选填）</p>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        姓名
        <!-- <span class="red">*</span> -->
      </p>
      <el-input v-model="spouse_name" class="userform_inp1" v-on:blur="spouse_names"></el-input>
      <p class="txt_red" ref="red21">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <!-- <span class="red">*</span> -->
      </p>
      <el-input
        v-model="spouse_phone"
        class="userform_inp1"
        type="number"
        v-on:blur="spouse_phones"
      ></el-input>
      <p class="txt_red" ref="red22">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_itemm1">
      <p class="userform_span1">爱人单位名称(选填)</p>
      <el-input v-model="spouse_company" class="userform_inp1" v-on:blur="spouse_companys"></el-input>
      <p class="txt_red" ref="red23">请填写此项</p>
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
      <el-input v-model="kinship_name" class="userform_inp1" v-on:blur="kinship_names"></el-input>
      <p class="txt_red" ref="red24">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <span class="red">*</span>
      </p>
      <el-input
        v-model="kinship_phone"
        class="userform_inp1"
        type="number"
        v-on:blur="kinship_phones"
      ></el-input>
      <p class="txt_red" ref="red25">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        亲属关系
        <span class="sp">（父亲，母亲，哥哥，姐姐等）</span>
        <span class="red">*</span>
      </p>
      <el-input v-model="kinship_relev" class="userform_inp1" v-on:blur="kinship_relevs"></el-input>
      <p class="txt_red" ref="red26">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_itemm1">
      <p class="userform_span1">
        家庭具体地址(选填)
        <!-- <span class="red">*</span> -->
      </p>
      <el-input v-model="kinship_addr" class="userform_inp1" v-on:blur="kinship_addrs"></el-input>
      <p class="txt_red" ref="red27">请填写此项</p>
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
      <el-input v-model="work_name" class="userform_inp1" v-on:blur="work_names"></el-input>
      <p class="txt_red" ref="red027">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <span class="red">*</span>
      </p>
      <el-input v-model="work_phone" class="userform_inp1" type="number" v-on:blur="work_phones"></el-input>
      <p class="txt_red" ref="red28">请填写此项</p>
    </div>
    <!--  -->
    <div class="userform_item1">
      <p class="userform_span1">
        部门（选填）
        <!-- <span class="red">*</span> -->
      </p>
      <el-input v-model="work_section" class="userform_inp1" v-on:blur="work_sections"></el-input>
      <p class="txt_red" ref="red29">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_itemm1">
      <p class="userform_span1">
        职务（选填）
        <!-- <span class="red">*</span> -->
      </p>
      <el-input v-model="work_job" class="userform_inp1" v-on:blur="work_jobs"></el-input>
      <p class="txt_red" ref="red30">请填写此项</p>
    </div>
    <!--  -->
    <div class="form1">
      <div class="userform_con1">
        <p>其它联系人（例如:同学，朋友...等）</p>
      </div>
    </div>
    <div class="userform_item1">
      <p class="userform_span1">
        姓名
        <span class="red">*</span>
      </p>
      <el-input v-model="liaison_name" class="userform_inp1" v-on:blur="liaison_names"></el-input>
      <p class="txt_red" ref="red31">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        手机号码
        <span class="red">*</span>
      </p>
      <el-input
        v-model="liaison_phone"
        class="userform_inp1"
        type="number"
        v-on:blur="liaison_phones"
      ></el-input>
      <p class="txt_red" ref="red32">请填写此项</p>
    </div>
    <!-- ----------------- -->
    <div class="userform_item1">
      <p class="userform_span1">
        关系
        <span class="red">*</span>
      </p>
      <el-input v-model="liaison_relev" class="userform_inp1" v-on:blur="liaison_relevs"></el-input>
      <p class="txt_red" ref="red33">请填写此项</p>
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
            :label="item.value"
            border
            v-for="item in radios4"
            :key="item.value"
            class="isredio"
            @change="onRadioChange8(item.value)"
          >{{item.value}}</el-radio>
          <!-- <el-radio label="2" border>备选项2</el-radio> -->
        </el-radio-group>
      </div>
      <p class="txt_red" ref="red34">请填写此项</p>
    </div>
    <el-button class="form_btn" @click.native="add" v-if="this.code==''" :disabled="isDisable">确认提交</el-button>
    <el-button class="form_btn1" v-if="this.code==1">已提交</el-button>
  </div>
</template>

<script>

var timestamp = Date.parse(new Date());
console.log(timestamp)
import '@/home.css';
import * as apis from "@/api/apis.js";
import Qs from "qs";
import { Loading } from "element-ui";

export default {
  // name: "HelloWorld",

  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      data:["1"],
      arr:["222"],
      isDisable: false,
      radio: "",
      radio01: "",
      radio02: "",
      radio03: "",
      radio04: "",
      radio05: "",
      radio06: "",
      radio07: "",
      radio09: "",
      radio10: "",
      radio11: "",
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
      age:'',
      idcard: "",
      phone: "",
      quoat: "",
      use: "",
      live_time: "", //	现在住的房子入住时间
      live_time_n: "",
      live_time_y: "",
      live_time_r: "",
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
      initia_n: "",
      initia_y: "",
      initia_r: "",
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
      is_clear: "",
      uid: "",
      code: "",
      wages_six: "", //工资是否连续发了六个月以上
      social_six: "", //社保是否上了六个月以上
      fund_six: "", //公积金是否上了六个月以上
      finance: "", //微粒贷额度
      sesame: "" //芝麻分
    };
  },
  created() {
    let uid = null;
    let local = window.location.search; //获取url中"?"符后的字串
    if (local.indexOf("?") != -1) {
      //判断是否有参数
      if (local.indexOf("uid=") != -1) {
        uid = local.split("uid=")[1].split("&")[0];
        console.log(uid);
      }
    }

    this.live_type = localStorage.getItem("radio")||"";
    this.marriage = localStorage.getItem("radio01")||"";
    this.educa = localStorage.getItem("radio02")||"";
    this.is_car = localStorage.getItem("radio03")||"";
    this.is_house = localStorage.getItem("radio04")||"";
    this.is_civil = localStorage.getItem("radio05")||"";
    this.position_level = localStorage.getItem("radio06")||"";
    this.is_clear = localStorage.getItem("radio07")||"";

    this.wages_six = localStorage.getItem("radio09")||"";
    this.social_six = localStorage.getItem("radio10")||"";
    this.fund_six = localStorage.getItem("radio11")||"";
 

    this.radio = localStorage.getItem("radio")||"";
    this.radio01 = localStorage.getItem("radio01")||"";
    this.radio02 = localStorage.getItem("radio02")||"";
    this.radio03 = localStorage.getItem("radio03")||"";
    this.radio04 = localStorage.getItem("radio04")||"";
    this.radio05 = localStorage.getItem("radio05")||"";
    this.radio06 = localStorage.getItem("radio06")||"";
    this.radio07 = localStorage.getItem("radio07")||"";

    this.radio09 = localStorage.getItem("radio09")||"";
    this.radio10 = localStorage.getItem("radio10")||"";
    this.radio11 = localStorage.getItem("radio11")||"";
    console.log(this.radio);

    this.name = localStorage.getItem("name")||"";
    this.age = localStorage.getItem("age")||"";
    this.idcard = localStorage.getItem("idcard")||"";
    this.phone = localStorage.getItem("phone")||"";
    this.quoat = localStorage.getItem("quoat")||"";
    this.use = localStorage.getItem("use")||"";
    this.live_time_n = localStorage.getItem("live_time_n")||"";
    this.live_time_y = localStorage.getItem("live_time_y")||"";
    this.rent = localStorage.getItem("rent")||"";

    this.is_children = localStorage.getItem("is_children")||"";
    this.live_address = localStorage.getItem("live_address")||"";
    this.unit_name = localStorage.getItem("unit_name")||"";
    this.unit_tel = localStorage.getItem("unit_tel")||"";
    this.unit_address = localStorage.getItem("unit_address")||"";

    this.branch = localStorage.getItem("branch")||"";
    this.job = localStorage.getItem("job")||"";
    this.initia_n = localStorage.getItem("initia_n")||"";
    this.initia_y = localStorage.getItem("initia_y")||"";
    this.income = localStorage.getItem("income")||"";

    this.spouse_name = localStorage.getItem("spouse_name")||"";
    this.spouse_phone = localStorage.getItem("spouse_phone")||"";
    this.spouse_company = localStorage.getItem("spouse_company")||"";
    this.kinship_name = localStorage.getItem("kinship_name")||"";
    this.kinship_phone = localStorage.getItem("kinship_phone")||"";
    this.kinship_relev = localStorage.getItem("kinship_relev")||"";
    this.kinship_addr = localStorage.getItem("kinship_addr")||"";

    this.work_name = localStorage.getItem("work_name")||"";
    this.work_phone = localStorage.getItem("work_phone")||"";
    this.work_section = localStorage.getItem("work_section")||"";
    this.work_job = localStorage.getItem("work_job")||"";
    this.liaison_name = localStorage.getItem("liaison_name")||"";
    this.liaison_phone = localStorage.getItem("liaison_phone")||"";
    this.liaison_relev = localStorage.getItem("liaison_relev")||"";

    // this.wages_six = localStorage.getItem("wages_six")||"";
    // this.social_six = localStorage.getItem("social_six")||"";
    // this.fund_six = localStorage.getItem("fund_six")||"";

    this.finance = localStorage.getItem("finance")||"";
    this.sesame = localStorage.getItem("sesame")||"";

    this.uid = uid;
  },

  methods: {
    onRadioChange(item) {
      console.log("item", item);
      this.live_type = item;
      localStorage.setItem("radio", item);
    },
    onRadioChange1(item) {
      console.log("item", item);
      this.marriage = item;
      localStorage.setItem("radio01", item);
    },
    onRadioChange2(item) {
      console.log("item", item);
      this.educa = item;
      localStorage.setItem("radio02", item);
    },
    onRadioChange3(item) {
      console.log("item", item);
      this.is_car = item;
      localStorage.setItem("radio03", item);
    },
    onRadioChange4(item) {
      console.log("item", item);
      this.is_house = item;
      localStorage.setItem("radio04", item);
    },
    onRadioChange5(item) {
      console.log("item", item);
      this.is_civil = item;
      localStorage.setItem("radio05", item);
    },
    onRadioChange6(item) {
      console.log("item", item);
      this.position_level = item;
      localStorage.setItem("radio06", item);
    },

    onRadioChange8(item) {
      console.log("item", item);
      this.is_clear = item;
      localStorage.setItem("radio07", item);
    },
    onRadioChange9(item) {
      console.log("item", item);
      this.wages_six = item;
      localStorage.setItem("radio09", item);
    },
    onRadioChange10(item) {
      console.log("item", item);
      this.social_six = item;
      localStorage.setItem("radio10", item);
    },
    onRadioChange11(item) {
      console.log("item", item);
      this.fund_six = item;
      localStorage.setItem("radio11", item);
    },

    names(event) {
      console.log(event.target.value);
      let a = event.value;
      localStorage.setItem("name", event.target.value);
      
    },
     ages(event) {
      localStorage.setItem("age", event.target.value);
    },
    idcards(event) {
      localStorage.setItem("idcard", event.target.value);
    },
    phones(event) {
      localStorage.setItem("phone", event.target.value);
    },
    quoats(event) {
      localStorage.setItem("quoat", event.target.value);
    },
    uses(event) {
      localStorage.setItem("use", event.target.value);
    },
    live_time_ns(event) {
      localStorage.setItem("live_time_n", event.target.value);
    },
    live_time_ys(event) {
      localStorage.setItem("live_time_y", event.target.value);
    },
    rents(event) {
      localStorage.setItem("rent", event.target.value);
    },

    is_childrens(event) {
      localStorage.setItem("is_children", event.target.value);
    },
    live_addresss(event) {
      localStorage.setItem("live_address", event.target.value);
    },
    unit_names(event) {
      localStorage.setItem("unit_name", event.target.value);
    },
    unit_tels(event) {
      localStorage.setItem("unit_tel", event.target.value);
    },
    unit_addresss(event) {
      localStorage.setItem("unit_address", event.target.value);
    },
    branchs(event) {
      localStorage.setItem("branch", event.target.value);
    },
    jobs(event) {
      localStorage.setItem("job", event.target.value);
    },
    initia_ns(event) {
      localStorage.setItem("initia_n", event.target.value);
    },
    initia_ys(event) {
      localStorage.setItem("initia_y", event.target.value);
    },
    incomes(event) {
      localStorage.setItem("income", event.target.value);
    },

    spouse_names(event) {
      localStorage.setItem("spouse_name", event.target.value);
    },
    spouse_phones(event) {
      localStorage.setItem("spouse_phone", event.target.value);
    },
    spouse_companys(event) {
      localStorage.setItem("spouse_company", event.target.value);
    },
    kinship_names(event) {
      localStorage.setItem("kinship_name", event.target.value);
    },
    kinship_phones(event) {
      localStorage.setItem("kinship_phone", event.target.value);
    },
    kinship_relevs(event) {
      localStorage.setItem("kinship_relev", event.target.value);
    },
    kinship_addrs(event) {
      localStorage.setItem("kinship_addr", event.target.value);
    },
    work_names(event) {
      localStorage.setItem("work_name", event.target.value);
    },
    work_phones(event) {
      localStorage.setItem("work_phone", event.target.value);
    },
    work_sections(event) {
      localStorage.setItem("work_section", event.target.value);
    },
    work_jobs(event) {
      localStorage.setItem("work_job", event.target.value);
    },
    liaison_names(event) {
      localStorage.setItem("liaison_name", event.target.value);
    },
    liaison_phones(event) {
      localStorage.setItem("liaison_phone", event.target.value);
    },
    liaison_relevs(event) {
      localStorage.setItem("liaison_relev", event.target.value);
    },

    finances(event) {
      localStorage.setItem("finance", event.target.value);
    },
    sesames(event) {
      localStorage.setItem("sesame", event.target.value);
    },
    async add() {
      console.log(this.name+"0000")
      if (this.name == "") {
        console.log(1222222222)
        this.$refs.red.style.display = "block";
        // this.$refs.inpred.style.border = " 1px solid red !important";
        this.$dialog.toast({
          mes: "请输入姓名",
          timeout: 1500
        });
        return;
      } else {
        console.log(this.$refs.inpred);
        this.$refs.red.style.display = "none";
      }
        if (this.age == "") {
        console.log(1222222222)
        // this.$refs.red.style.display = "block";
        // this.$refs.inpred.style.border = " 1px solid red !important";
        this.$dialog.toast({
          mes: "请输入年龄",
          timeout: 1500
        });
        return;
      } else {
        // console.log(this.$refs.inpred);
        // this.$refs.red.style.display = "none";
      }
      
      if (this.idcard == "") {
         console.log(1222)
        this.$refs.red1.style.display = "block";
        this.$dialog.toast({
          mes: "请输入身份证号",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red1.style.display = "none";
      }
      if (this.phone == "") {
        this.$refs.red2.style.display = "block";
        this.$dialog.toast({
          mes: "请输入手机号",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red2.style.display = "none";
      }
      if (this.quoat == "") {
        this.$refs.red02.style.display = "block";
        this.$dialog.toast({
          mes: "请输入贷款额度",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red02.style.display = "none";
      }
      if (this.use == "") {
        this.$refs.red3.style.display = "block";
        this.$dialog.toast({
          mes: "请输入贷款用途",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red3.style.display = "none";
      }
      if (this.live_time_n == "") {
        this.$refs.red4.style.display = "block";
        this.$dialog.toast({
          mes: "请输入来京年份",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red4.style.display = "none";
      }
      if (this.live_time_y == "") {
        this.$refs.red4.style.display = "block";
        this.$dialog.toast({
          mes: "请输入来京月份",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red4.style.display = "none";
      }
      // if (this.live_time_r == "") {
      //   this.$refs.red4.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请选择入住日期",
      //     timeout: 1500
      //   });
      //   return;
      // } else
      // {
      //   this.$refs.red4.style.display = "none";
      // }
      if (this.live_type == "") {
        this.$refs.red5.style.display = "block";
        this.$dialog.toast({
          mes: "请选择居住类型",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red5.style.display = "none";
      }
       if (this.wages_six == "") {
        this.$refs.red40.style.display = "block";
        //  this.$refs.red33.style.display = "block";
        this.$dialog.toast({
          mes: "请选择工资是否连续发了六个月以上",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red40.style.display = "none";
      }

      if (this.social_six == "") {
        this.$refs.red41.style.display = "block";
        //  this.$refs.red33.style.display = "block";
        this.$dialog.toast({
          mes: "请选择社保是否上了六个月以上",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red41.style.display = "none";
      }
      if (this.fund_six == "") {
        this.$refs.red42.style.display = "block";
        //  this.$refs.red33.style.display = "block";
        this.$dialog.toast({
          mes: "请选择公积金是否上了六个月以上",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red42.style.display = "none";
      }
      // if (this.finance == "") {
      //   this.$refs.red43.style.display = "block";
      //   //  this.$refs.red33.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请输入微粒贷额度",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red43.style.display = "none";
      // }
      // if (this.sesame == "") {
      //   this.$refs.red44.style.display = "block";
      //   //  this.$refs.red33.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请输入芝麻分",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red44.style.display = "none";
      // }







      
      // if (this.rent == "") {
      //   this.$refs.red6.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请填写每月租金",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red6.style.display = "none";
      // }
      if (this.marriage == "") {
        this.$refs.red7.style.display = "block";
        this.$dialog.toast({
          mes: "请选择婚姻状况",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red7.style.display = "none";
      }
      if (this.educa == "") {
        this.$refs.red8.style.display = "block";
        this.$dialog.toast({
          mes: "请选择学历",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red8.style.display = "none";
      }
      if (this.is_car == "") {
        this.$refs.red9.style.display = "block";
        this.$dialog.toast({
          mes: "请选择是否有车",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red9.style.display = "none";
      }
      if (this.is_house == "") {
        this.$refs.red10.style.display = "block";
        this.$dialog.toast({
          mes: "请选择是否有房",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red10.style.display = "none";
      }
      if (this.is_children == "") {
        this.$refs.red11.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您的孩子",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red11.style.display = "none";
      }
      if (this.live_address == "") {
        this.$refs.red12.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您的现居住地",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red12.style.display = "none";
      }
      if (this.unit_name == "") {
        this.$refs.red13.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您的工作单位",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red13.style.display = "none";
      }

      if (this.unit_tel == "") {
        this.$refs.red14.style.display = "block";
        this.$dialog.toast({
          mes: "请填写单位电话",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red14.style.display = "none";
      }
      if (this.unit_address == "") {
        this.$refs.red15.style.display = "block";
        this.$dialog.toast({
          mes: "请填写公司地址",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red15.style.display = "none";
      }
      if (this.is_civil == "") {
        this.$refs.red16.style.display = "block";
        this.$dialog.toast({
          mes: "您是否是公务员",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red16.style.display = "none";
      }
      if (this.position_level == "") {
        this.$refs.red17.style.display = "block";
        this.$dialog.toast({
          mes: "请选择职位级别",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red17.style.display = "none";
      }
      if (this.branch == "") {
        this.$refs.red017.style.display = "block";
        this.$dialog.toast({
          mes: "请填写部门",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red017.style.display = "none";
      }
      if (this.job == "") {
        this.$refs.red18.style.display = "block";
        this.$dialog.toast({
          mes: "请填写职务",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red18.style.display = "none";
      }
      if (this.initia_n == "") {
        this.$refs.red19.style.display = "block";
        this.$dialog.toast({
          mes: "请填写入职年份",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red19.style.display = "block";
      }
      if (this.initia_y == "") {
        this.$refs.red19.style.display = "block";
        this.$dialog.toast({
          mes: "请填写入职月份",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red19.style.display = "none";
      }
      // if (this.initia_r == "") {
      //   this.$refs.red19.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请填写入职日期",
      //     timeout: 1500
      //   });
      //   return;
      // } else
      // {
      //   this.$refs.red19.style.display = "none";
      // }
      if (this.income == "") {
        this.$refs.red20.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您的月薪",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red20.style.display = "none";
      }
      // if (this.marriage == "已婚" || this.marriage == "再婚") {
      //   if (this.spouse_name == "") {
      //     this.$refs.red21.style.display = "block";
      //     this.$dialog.toast({
      //       mes: "请填写您配偶的姓名",
      //       timeout: 1500
      //     });
      //     return;
      //   } else {
      //     this.$refs.red21.style.display = "none";
      //   }
      //   if (this.spouse_phone == "") {
      //     this.$refs.red22.style.display = "block";
      //     this.$dialog.toast({
      //       mes: "请填写您配偶的手机号",
      //       timeout: 1500
      //     });
      //     return;
      //   } else {
      //     this.$refs.red22.style.display = "none";
      //   }
      // }
      if (this.kinship_name == "") {
        this.$refs.red24.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您亲属的姓名",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red24.style.display = "none";
      }
      if (this.kinship_phone == "") {
        this.$refs.red25.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您亲属的手机号码",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red25.style.display = "none";
      }
      if (this.kinship_relev == "") {
        this.$refs.red26.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您亲属关系",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red26.style.display = "none";
      }
      if (this.work_name == "") {
        this.$refs.red027.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您同事的姓名",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red027.style.display = "none";
      }
      if (this.work_phone == "") {
        this.$refs.red28.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您同事的电话",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red28.style.display = "none";
      }
      // if (this.work_section == "") {
      //   this.$refs.red29.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请填写您同事的部门",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red29.style.display = "none";
      // }
      // if (this.work_job == "") {
      //   this.$refs.red30.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请填写您同事职务",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red30.style.display = "none";
      // }
      if (this.liaison_name == "") {
        this.$refs.red31.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您朋友的姓名",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red31.style.display = "none";
      }
      if (this.liaison_phone == "") {
        this.$refs.red32.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您朋友的手机号",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red32.style.display = "none";
      }
      if (this.liaison_relev == "") {
        this.$refs.red33.style.display = "block";
        this.$dialog.toast({
          mes: "请填写您跟朋友的关系",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red33.style.display = "none";
      }
      if (this.is_clear == "") {
        this.$refs.red34.style.display = "block";
        //  this.$refs.red33.style.display = "block";
        this.$dialog.toast({
          mes: "亲属是否知道贷款",
          timeout: 1500
        });
        return;
      } else {
        this.$refs.red34.style.display = "none";
      }

      // if (this.wages_six == "") {
      //   this.$refs.red40.style.display = "block";
      //   //  this.$refs.red33.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请选择工资是否连续发了六个月以上",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red40.style.display = "none";
      // }

      // if (this.social_six == "") {
      //   this.$refs.red41.style.display = "block";
      //   //  this.$refs.red33.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请选择社保是否上了六个月以上",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red41.style.display = "none";
      // }
      // if (this.fund_six == "") {
      //   this.$refs.red42.style.display = "block";
      //   //  this.$refs.red33.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请选择公积金是否上了六个月以上",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red42.style.display = "none";
      // }
      // if (this.finance == "") {
      //   this.$refs.red43.style.display = "block";
      //   //  this.$refs.red33.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请输入微粒贷额度",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red43.style.display = "none";
      // }
      // if (this.sesame == "") {
      //   this.$refs.red44.style.display = "block";
      //   //  this.$refs.red33.style.display = "block";
      //   this.$dialog.toast({
      //     mes: "请输入芝麻分",
      //     timeout: 1500
      //   });
      //   return;
      // } else {
      //   this.$refs.red44.style.display = "none";
      // }
   
      this.isDisable = true;
      await apis
        .add(
          Qs.stringify({
            uid: this.uid,
            // uid:1,
            name: this.name,
            age:this.age,
            idcard: this.idcard,
            phone: this.phone,
            quoat: this.quoat,
            use: this.use,
            live_time: `${this.live_time_n}-${this.live_time_y}`,
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
            initia: `${this.initia_n}-${this.initia_y}`,
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
            is_clear: this.is_clear,
            finance: this.finance,
            wages_six: this.wages_six,
            social_six: this.social_six,
            fund_six: this.fund_six,
            sesame: this.sesame
          })
        )
        .then(res => {
          this.code = res.data.code;
          console.log(res.data.code);
          this.isDisable = false;
         
          if (res.data.code == 1) {
            // loading.close();
            this.$dialog.toast({
              mes: "提交成功",
              icon: "success",
              timeout: 1500
            });
             window.localStorage.clear();
          }
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->



<style>
#app {
  background: rgba(194, 230, 255, 1);

  padding: 0 0.32rem;
}
</style>
