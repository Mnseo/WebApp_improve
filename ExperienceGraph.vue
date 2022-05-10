<template>
<div class="content">
    <div class="title">
        <h3>경력 별 회원 현황</h3>
    </div>
    <div class="container_parent">
        <div class="group">
            <h6>10년 이상</h6>
            <p><b>{{resUp10Data.count}}</b>명</p>
        </div>

        <div class="group">
            <h6>5년 초과 10년 이하</h6>
            <p><b>{{res5to10Data.count}}</b>명</p>
        </div>

        <div class="group">
            <h6>3년 초과 5년 이하</h6>
            <p><b>{{res3to5Data.count}}</b>명</p>
        </div>

        <div class="group">
            <h6>1년 초과 3년 이하</h6>
            <p><b>{{res1to3Data.count}}</b>명</p>
        </div>

        <div class="group">
            <h6>1년 이하</h6>
            <p><b>{{resUnder1Data.count}}</b>명</p>
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
            axios.get("http://localhost:5000/")
            .then((res) => {
            // console.log(res.data);
            this.resUnder1Data = res.data[0];
            this.res1to3Data = res.data[1];
            this.res3to5Data = res.data[2];
            this.res5to10Data = res.data[3];
            this.resUp10Data = res.data[4];
        })
        }
    }
}
</script>


<style>
.content {
    top: 60px;
    width: 1000px;
    left:242px;
    height: 100%;
    position: fixed;
    border-top: 2px solid #bdc0c1;
    background-color: #f1f5f8;
    overflow-x: hidden;
}

.title {
    margin-top: 50px;
    margin-left: 30px;
    font:bold;
    

}
.container_parent {
    display: flex;
    margin-top:40px;
    margin-left: 30px;
    margin-right: 30px;
    width:900px;
    text-align: center;
    background-color: #ffffff;

}
.group {
    width:180px;
    /* display:inline-block; */
    justify-content: space-between;

}

</style>