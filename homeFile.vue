<!--구매자 입장 구현-->

<template> 
<div class="home">
    <header>
        <div class="user">
            <i class=""><p>{{send.UserId}}#{{send.UserName}}</p></i>
        </div>
        <div class="availableMoney"><p>가용액: {{send.Money}} </p></div>
        <div class="totalMoney"><p>총 액: {{send.Money + receive.Panlty }}</p></div>
        <div class="user_btn"><button><font-awesome-icon icon="fa-light fa-circle-check"/>안전 송금</button></div>
    </header>

    <body>
        <div class="showMoney">
            <p1>보낸 미결액: {{send.Transation + send.Panlty}}</p1>
            <p2>받은 미결액: {{receive.Panlty}}</p2> 
        </div>

        <div class="transaction">
            <div class="moneyTransation">
            </div>

            <div class="penalty_receive">

            </div>

            <div class="penalty_send">

            </div>
        </div>


    </body>

</div>

</template>


<script>
export default {
    data: function() {
        return {
            tranState: false, //대금 상태
            transMessage: '승인 보류 중', //대금 상태 메세지

            meetState: false, //약속 상태 
            meetMessage: '약속 대기 중', //약속 상태 메세지
            send: {
                UserId: '응답하라',
                UserName: '성덕선',
                Panlty: 5000,
                Transation: 120000,
                Money: 172000
            },
            receive: {
                UserId: '쾌도',
                UserName: '이구매',
                Panlty: 4000,
                Transation: 0,
                Money: 145000
            }
        }
    },

    methods: {
        checkTrans: function() {
            if(this.tranState == true) {
                this.transMessage = '승인 완료'
            } else {
                this.transMessage = '승인 보류 중'
            }
        },

        checkMeet: function() {
            if(this.meetState == true) {
                this.meetMessage = '약속 시간 임박'
            } else {
                this.meetMessage = '약속 대기 중'
            }
        }
    }  
}

</script>

<style>

</style>