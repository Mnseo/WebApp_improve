<template>
  <div class="app">
      <!-- <TopHeader v-bind:pagename="title" v-bind:selectpage="page"></TopHeader> -->
      <div class="main-box">
        <p class="infolabel">약속 날짜 설정 (2/5)</p>
        <!-- <div class="lineSet timelabelSet">
            <i class="far fa-calendar-alt iconImg"></i>
            <label class="exLabel">약속 일시</label>
        </div> -->
        
        <div class="lineSet timelineSet">
            <Datepicker class="dateLabel" :language="ko" v-model="date" :disabled-dates="disabledDates" :format="customFormatter" placeholder="날짜 설정" :highlighted="highlighted"></Datepicker>
        </div>
        <br>
        <div class="lineSet timelineSet">
            <vue-timepicker class="timepickerSet" v-model="time" hide-clear-button close-on-complete></vue-timepicker>
            <label style="font-size:12px">부터</label>
            <input class="sub-inputSet" v-model="limitTime" type="number" ><label style="font-size:12px">분 이내</label>
        </div>
        <br>
        <!-- <p class="rightLabel"><input class="sub-inputSet" v-model="limitTime" type="number" > 분 이내</p> -->
        <p >약속 시간 기준 <input class="cancelInput" v-model="cancelTime" type="number" >시간 전까지 취소 가능</p>
        
        
    </div>
    <br>
    <div id="buttonBox">
        <button class="preButton" v-on:click="preClick">뒤로</button>
        <button class="nextButton" v-on:click="nextClick">다음</button>
    </div>
    <!-- <bottom-menu></bottom-menu> -->
  </div>
</template>

<script>
// import TopHeader from '../components/TopHeader.vue';
// import BottomMenu from '../components/BottomMenu.vue';
// import Map from '../components/Map.vue';
import Datepicker from 'vuejs-datepicker';
import {ko} from 'vuejs-datepicker/dist/locale';
import moment from 'moment';
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';
// import soundEffectModule from '../../js/soundEffect_426.js';



export default {
  name: 'App',
  components: {
      // TopHeader,
      // BottomMenu,
      Datepicker,
      // Map,
      VueTimepicker
  },

  data: function() {
    return {
        title:'약속 송금',
        page:'promise',
        date : this.$store.state.p.date,
        time: this.$store.state.p.time,
        cancelTime: 1, //this.$store.state.p.cancel_time,
        limitTime: 10, //this.$store.state.p.limit_time,
        limitRadius: 50, //this.$store.state.p.limit_radius,
        disabledDates:'',
        ko:ko
    }
  },

  created(){
    this.scrollToTop();
    this.Date();
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },

    Date:function() {
      var now = new Date();
      this.disabledDates = {
        to: new Date(now.setDate(now.getDate()-1)),
        from: ''
      }
      this.highlighted = {
        dates: [new Date()]
      }
    },
    customFormatter() {
        return moment(this.date).format('YYYY년 M월 D일');
    },
    priceToString:function(price){
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
    },
    dateString(){
        var t = '';
        var ms = '';
        t = this.time.replaceAll(":", "시 ");
        t += '분';
        ms += moment(this.date).format('YYYY년 MM월 DD일') + ' ' + t;
        return ms;
    },
    calTimeStamp:function(){
            
    },
    preClick:function(){
        this.$router.push({path:'one'})
    },
    nextClick:function(){
            
    }

  }
}
</script>

<style scoped>

.main-box{
    margin: 70px 20px 0px 20px;
}
.infolabel{
    text-align: right;
    color:gray;
    margin-bottom:5px;
}
.lineSet{
    display: flex;
    align-items: center;
    margin:20px 0;
}
.timelabelSet{
    margin-top:0px;
}
.timelineSet{
    margin-top:13px;
    margin-bottom: 3px;
}
.timeSet{
    display: flex;
    align-items: center;
    margin:25px 0;
    margin-bottom: 5px;
}
.placeSet{
    display: flex;
    align-items: flex-start;
    margin:25px 0;
    margin-bottom: 0px;
}
.exLabel{
    color:grey;
    margin-right: auto;
    font-size:15px;
}
.iconImg{
    color:gray;
    font-size:15px;
    width: 20px;
    /* margin-right:5px; */
}
.markerIcon{
    margin-top:2px;
}
.inputBox{
    display: flex;
    margin-left: auto;
    color:gray;
    font-size:13px;
}
.inputLine{
    border:none;
    border-bottom: 1px solid gray;
    color:black;
    caret-color:red;
    font-size: 15px;
    margin-left: auto;
}
.inputLine:focus{
    outline: none;
    border-bottom: 2px solid rgb(255, 0, 98);
}
.mapDiv{
    width: 99%;
    margin-left:auto;
    /* margin-right:5px; */
}
.mapSet{
    width: 100%;
    height: 190px;
}
.cancelLabel{
    font-size:14px;
    margin-bottom: 0px;
}
.cancelInput{
    font-size:15px;
    border: none;
    border-bottom: 1px solid gray;
    color:rgb(92, 52, 235);
    caret-color:red;
    width:23px;
    margin:0 2px;
    text-align: right;
}
.sub-inputSet{
    border: none;
    border-bottom: 1px solid gray;
    color:rgb(90, 82, 209);
    caret-color:red;
    width:40px;
    margin:0 2px;
    text-align: right;
    font-size:15px;
}
.sub-inputSet:focus{
    outline: none;
    border-bottom: 2px solid rgb(255, 0, 98);
}
.inputSet{
    width: 45%;
    margin:0 5px;
    text-align: center;
}
#spanSet{
    font-size: 13px;
    color:gray;
}
.rightLabel{
  color:black;
  text-align: right;
  font-size: 14px;
  margin:0;
}
#buttonBox{
    margin-top:25px;
    /* padding:0 10px; */
    width:100%;
    max-width: 480px;
    text-align: center;
    margin-bottom: 100px;
    /* position: absolute;
    bottom: 13%; */
}
.preButton{
  width:45%;
  height: 40px;
  border:2px solid rgb(71,97,209);
  background: white;
  font-weight: bold;
  color:rgb(71,97,209);
  margin: 0 1%;
}
.nextButton{
  width: 45%;
  height: 40px;
  border:none;
  background: rgb(71,97,209);
  font-weight: bold;
  color:white;
  margin: 0 1%;
}
.dateLabel >>> input{
    width: 100%;
    border: 1px solid rgb(201, 201, 201);
    text-align: center;
    padding-bottom: 2px;
    font-size:15px;
    height: 35px;
    cursor: pointer;
}
.timepickerSet{
    margin-right:5px;
    margin-left:5px;
    width: 40%;
}
.timepickerSet >>> input{
    width: 60%;
}
.dateLabel >>> .vdp-datepicker__calendar{
    width:140%;
    /* left:10%; */
    /* left:-35%; */
}
</style>