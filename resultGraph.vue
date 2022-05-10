<template>
<div class="content">
    <div class="title">
        <h3>중재건수별 회원현황</h3>
    </div>
    <div class="container_parent">
        <div class="group">
            <h6>20건 이상</h6>
            <p><b>{{resUp20Data.count}}</b>명</p>
        </div>

        <div class="group">
            <h6>15건 이상 20건 이하</h6>
            <p><b>{{res15to20Data.count}}</b>명</p>
        </div>

        <div class="group">
            <h6>10건 이상 15건 이하</h6>
            <p><b>{{res10to15Data.count}}</b>명</p>
        </div>

        <div class="group">
            <h6>5건 이상 10건 이하</h6>
            <p><b>{{res5to10Data.count}}</b>명</p>
        </div>

        <div class="group">
            <h6>5건 이하</h6>
            <p><b>{{resUnder5Data.count}}</b>명</p>
        </div>
    </div>
</div>

</template>


<script>
import axios from 'axios'
export default {
    data: function() {
        return {
            resUnder5Data: 0,
            res5to10Data: 0,
            res10to15Data: 0,
            res15to20Data: 0,
            resUp20Data: 0
        }
    },

    created() {
        this.getResultData();
    },

    methods: {
        getResultData : function() {
            axios.get("http://localhost:5000/result")
            .then((res) => {
            // console.log(res.data);
            this.resUnder5Data = res.data[0];
            this.res5to10Data = res.data[1];
            this.res10to15Data = res.data[2];
            this.res15to20Data = res.data[3];
            this.resUp20Data = res.data[4];
        })
        }
    }
}
</script>

<style scoped>
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
    width:850px;
    /* display:inline-block; */
    justify-content: space-between;

}

</style>