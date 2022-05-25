<template>
  <div class="app">
      <!-- <TopHeader v-bind:pagename="title" v-bind:selectpage="page"></TopHeader> -->
      <div class="main-box">
          <div class="infoAndPage">
            <p class="infolabel" >약속 날짜 설정</p>
            <p class="pageNumber">2/5</p>
          </div>
          <div class="lineSet timelabelSet">
            
            <!-- <label class="exLabel">약속 일시</label> -->
        </div>
        <div class=datePick>
            <div class="lineSet timelineSet">
            <Datepicker class="dateLabel" language="ko" v-model="date" :disabled-dates="disabledDates" :format="customFormatter" placeholder="날짜를 설정하세요" :highlighted="highlighted"></Datepicker>
             </div>
            <i class="far fa-calendar-alt iconImg"></i>
        </div>
 

        <br>
        <div class="lineSet timelineSet">
            <VueTimepicker format="Ahh:mm " class="timepickerSet" v-model="apmFirst2" am-text="오전" pm-text="오후" hide-clear-button close-on-complete></Vuetimepicker>
            <div class="timeLabel">
                <label class="pickerLabel" style="font-size:16px">부터</label>
                <input class="sub-inputSet" v-model="limitTime" type="number" ><label style="font-size:16px">분 이내</label>
            </div>
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

<!--https://unpkg.com/vuejs-datepicker/dist/locale/translations/ko.js" -->
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
        lang: {
            formatLocale: {
                months: ['1월', '2월', '3월', '4월','5월','6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                monthsShort: ['1월', '2월', '3월', '4월','5월','6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                weekdays: ['일', '월', '화', '수', '목', '금', '토'],
                weekdaysShort: ['일', '월', '화', '수', '목', '금', '토'],
                weekdaysMin: ['일', '월', '화', '수', '목', '금', '토'],
            }
        },
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
#app {
    /* width:480px;
    height: 780px; */
    font-family: 'Noto Sans KR', sans-serif;
    /* overflow: hidden; */
    
}
html {font-size: 62.5%;} /*1rem = 10px*/

.main-box{
    /* margin: 86px 30px 226px 30px; top right bottom left 86px 30px 226px 30px */
    margin: 17.9% 6.25% 50% 6.25%;
}

.infoAndPage{
    /* width:300px; 300px */
    width: 100%;
    justify-content: space-between;
    display: flex;
}

.infolabel{
    /* text-align: left; */
    color:#333333;
    margin-bottom:1%; /*5px*/
    font-size: 1em;
}

.datePick {
    width:100%;
    justify-content: space-between;
    display: flex;
}
.pageNumber{
    /* text-align: right; */
    color:gray;
    margin-bottom:1%;
    font-size: 0.813em; /*13px*/

}

.lineSet{
    display: flex;
    align-items: center;
    margin:4% 0;
}
.timelabelSet{
    /* margin-top:0em; */
    text-align: center; 

}
.timelineSet{
    margin-top:2.7%;
    /* margin-bottom: 0.188; */
}

.timeSet{
    display: flex;
    align-items: center;
    margin:5% 0; /*25px 0 */
    margin-bottom: 3%;
}
.placeSet{
    display: flex;
    align-items: flex-start;
    margin:5% 0;
    margin-bottom: 0px;
}
.exLabel{
    color:grey;
    margin-right: auto;
    font-size:0.938em;
}
.iconImg{
    color:gray;
    font-size: 1.1em;
    margin-top: 0.67em;
    /* margin-left: 7%; /*35px* */
    /* margin-left: -50px; */
}
.markerIcon{
    margin-top:0.4%; /*2px*/
}
.inputBox{
    display: flex;
    margin-left: auto;
    color:gray;
    font-size:0.813em;
}
.inputLine{
    border:none;
    border-bottom: 0.2% solid gray; /*1px*/
    color:black;
    caret-color:red;
    font-size: 0.938em;
    margin-left: auto;
}
.inputLine:focus{
    outline: none;
    border-bottom: 0.4% solid rgb(255, 0, 98);
}
.mapDiv{
    width: 99%;
    margin-left:auto;
    /* margin-right:5px; */
}
.mapSet{
    width: 100%;
    height: 11.875em;
}
.cancelLabel{
    font-size:0.875em;
    /* margin-bottom: 0px; */
}
.cancelInput{
    font-size:1em;
    border: none;
    border-bottom: 1px solid gray;
    font-weight: bold;
    color:#3263ff;
    caret-color:red;
    width:7%;
    margin:0 2px;
    margin-left: 1px;
    text-align: center;
}
.sub-inputSet{
    border: none;
    border-bottom: 1px solid gray;
    color: #3263ff;
    font-weight: bold;
    caret-color:red;
    width: 7%;
    margin:0 10px;
    text-align: center;
    font-size:16px;
}
.sub-inputSet:focus{
    outline: none;
    border-bottom: 0.4% solid rgb(255, 0, 98);
}
.inputSet{
    width: 100%;
    margin:0 1.5%;
    text-align: center;
}
#spanSet{
    font-size: 0.813em;
    color:gray;
}
.rightLabel{
  color:black;
  text-align: right;
  font-size: 0.875em;
  margin:0;
}
#buttonBox{   
    /* padding:0 30px; */
    position: absolute;
    width:100%;
    /* max-width: 480px; */
    bottom:10%; /* 100px*/
    text-align: center;
    /* align-items: center; */
}
.preButton{
  width:45%; /*145px*/
  height: 40px;
  border:2px solid #3263ff;
  background: white;
  font-weight: bold;
  color: #3263ff;
  margin: 0 1%;
  border-radius: 4px;
}
.nextButton{
  width: 45%; /*145px*/
  height: 40px;
  border:none;
  background: #3263ff;
  font-weight: bold;
  color:white;
  margin: 0 1%;
  border-radius: 4px;
}

.timeLabel { 
    width: 100%;

}

.pickerLabel {
    margin: 0 0 0 33%;
}

/* .dateLabel {
    width: 150%;
} */

.dateLabel >>> input{
    display: absolute;
    /* align-items: center; */
    width: 70vw;
    /* border-radius: 4px; */
    text-align: center;
    padding-bottom: 0.4%;
    font-size:0.938em;
    height: 100%;
    cursor: pointer;
}

.dateLabel >>> .vdp-datepicker__calendar{
    
    /* 가운데에 picker 띄우기 */
    position: absolute;
     /* transform:translateX(10%); */
    border-radius: 4px;
    left: 10%;
    transform:translateY(30%);
    
    /*기존 속성*/
    width:70vw;
    /* height:35vh; */
    /* left:10%; */

}
/* .dateLabel >>> .cell:hover {
    border-radius:50%;
    border-color: #3263ff;
    background: #3263ff;
} */
/* 
.dateLabel >>> .cell:cursor pointer:hover{
    border: 5px solid #3263ff;
    border-radius: 50%;
    
}  */

.dateLabel >>> .cell.highlighted {
    background: #ffffff;
    border-radius: 50%;
    border-color: #b3e5fb;
    /* color: #3263ff; */
}

.dateLabel >>> .cell.selected {
    background: #3263ff;
    border-radius: 50%;

}
.dateLabel >>> .cell.selected:hover {
    background: #3263ff;
    border-radius: 30%;
    
}

.dateLabel >>> .cell.selected.highlighted {
    background: #3263ff;
    border-radius: 50%;
}

.dateLabel ::placeholder {
    display: absolute;
    color: #999999;
    text-align: left;
    text-indent: 1%; /*place holder 옆으로 5px 옮기기 */
}

.timepickerSet{
    margin-right:1%;
    /* margin-left:0.313em; */
    width: 30%;
    font-size: 0.938em;
    border-radius: 4px;
}
.timepickerSet >>> input{
    width: 200%;
    height: 100%;
    text-align: center;
    font-weight: bolder;
}
</style>