<template>
    <div class="content">
        <div class="title">
            <h3>본인인증</h3>
        </div>

        <section>
            <ul>

            </ul>

        </section>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            checkItems: []
        }
    },

    methods: {
        //모든 아이템을 체크함 
        // checkAllitem: function(checkItem, index) {

        // }
    },

    created: function() {

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
    width:40vw;
    text-align: center;
    /* display:flex; */
    justify-content: space-between;
    /* flex-wrap: wrap; */
}
</style>