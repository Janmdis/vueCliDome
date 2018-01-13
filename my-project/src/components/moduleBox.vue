<template>
    <div class="Box" >
        <!-- <p>{{msg2}}</p>
        <h2>Vue的各种方法练习</h2>
        父子级组件通信的自定义事件的耦合问题 -->
        <p>总数为:{{total}}</p>
        <buttonCounter >{{counter}}</buttonCounter>
        <buttonCounter >{{counter}}</buttonCounter>
    </div>
</template>
<script>
//此increment非彼increment，子组件的那个是click事件，然后点击触发increment方法，而v-on:increment是父组件的自定义监听事件，监听的是一个叫increment的事件，而这个事件是通过子组件的increment方法里$emit('increment')来分发事件的。所以子组件没有触发increment事件，只是子组件的点击事件响应里分发了increment事件，其实你把其中一个increment改成其他变量名称，就区分开了，这里只是刚好方法名跟事件名同名了，让人觉得奇怪.
export default{
    props:["total"],
    data () {
        return {
            counter:0,
        }
    },
    methods: {

    },
    components:{
        buttonCounter:{
            data () {
                return{
                    counter:0,
                }
            },
            methods:{
                incrementCounter: function () {
                    this.counter += 1;
                    this.$emit('addCount',this.counter+1);
                },
            },
            template: '<button v-on:click="incrementCounter">{{counter}}</button>',
        }
    },
}
</script>

<style>

</style>
