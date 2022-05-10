<template>
 <div class="content">
    <div class="title">
        <h3>경력 별 회원 현황</h3>
    </div>
    <div class="container_parent">
        <div class="group">
            <h6>10년~</h6>
            <p><b>{{resUp10Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>5~10년</h6>
            <p><b>{{res5to10Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>3~5년</h6>
            <p><b>{{res3to5Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>1~3년</h6>
            <p><b>{{res1to3Data}}</b>명</p>
        </div>

        <div class="group">
            <h6>~1년</h6>
            <p><b>{{resUnder1Data}}</b>명</p>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: function() {
        return { //경력별 데이터 결과
            resUnder1Data: '경력별',
            res1to3Data: '',
            res3to5Data: '',
            res5to10Data: '',
            resUp10Data: ''
        }
    },
    created() {
        this.getExData();
    },
    methods: {
        getExData: function() {
            axios.get("http://localhost:5000/experience")
            .then((res) => {
            console.log(res.data);
            this.resUnder1Data = res.data['0-1'];
            this.res1to3Data = res.data['2-3'];
            this.res3to5Data = res.data['4-5'];
            this.res5to10Data = res.data['6-10'];
            this.resUp10Data = res.data['more than 10'];
        })
        }
    }
}
</script>


<style scoped>
/* @mixin mobile {

} */

.content {
    top: 5vmax;
    width: 90vmax;
    left:32.3vmin;
    height: 100vmax;
    position: fixed;
    border-top: 0.3vmin solid #bdc0c1;
    background-color: #f1f5f8;
    overflow-x: hidden;
}
.title {
    margin-top: 3vh;
    margin-left: 5vmin;
    font-size: 2.0vmin;
    font:bold; 
}

.container_parent {
    display: flex;
    margin-top:3vh;
    margin-left: 5vmin;
    width:60vmin;
    flex-direction: row;
    background-color: #ffffff;
}

.group h6 {
    font-size: 1.8vmin;
}
.group b {
    font-size: 2.0vmin;
    font:bold;
}
.group {
    margin-left: 1vmin;
    margin-right: 1vmin;
    font-size: 1.3vmin;
    width: 12vw;
    text-align: center;
    /* display:flex; */
    justify-content: space-between;
    /* flex-wrap: wrap; */
}

/*미디어 쿼리 단순 나열*/

/*Galaxy Fold*/
@media (max-width: 280px) 
{
    .container_parent {
        flex-direction: column;
        width: 30vmin;
        text-align:center;
    }
} 


/*IPHONE 12 PRO*/
@media (max-width: 390px) {
       .container_parent 
       {
        width: 30vmin;
        text-align:center;
        flex-direction: column;    
    }
      .group 
       {
          width: 25vw;
       }
}

/*Galaxy S20 Ultra*/
@media (max-width: 414px) {
    .container_parent {
        width: 40vmin;
        flex-direction: column;  
    }
     .group 
    {
        width: 35vw;
    }
}

</style>