<template>
  <div class="hello">
      <h1>{{msg}}</h1>
         <ol><li v-for="todo in todos">{{ todo.text }}</li></ol>
        <span v-bind:title="message">
            鼠标悬停此处几秒，
            可以看到此处动态绑定的 title！
        </span><br>
        <span v-if="seen">现在你可以看到我</span><br>
        <button v-on:click="reverseMessage">翻转 message</button>
        <p>{{infomation}}</p>
        <input type="text" v-model="infomation" >
        <!-- <mobox>
            <span>1111</span><br>
        </mobox>
        <mobox1  :msg2="parentMsg2"></mobox1> -->
         <mobox2></mobox2>
  </div>
</template>

<script>
//import mobox from './moduleBox';
//import mobox1 from './moduleBox';
import mobox2 from './moduleBox';
export default {
    components:{
        /* mobox:{
            template:"<li><slot></slot>111</li>"
        },
        mobox1,//  结果为父子传值 */
        mobox2:{
            data(){
                return {
                    parentTotal:0
                }
            },
            template:'<div :total="parentTotal" v-on:addCount="incrementTotal"><slot></slot></div>',
            methods:{
                incrementTotal:function(a){
                    this.parentTotal+=1;
                },
            }
        }
    },
    data () {
        return {
            parentTotal:0,
            msg: ' study----Vue ',
            parentMsg2: '父子传值',
            todo: '父级向子组件传值',
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '创建激动人心的代码' }
            ],
            message: '页面加载于 ' + new Date().toLocaleString(),
            seen:true,
            infomation:'你好,世界.',
        }
    },
    methods:{
        
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        },

    },
}
</script>

<style scoped>
   
</style>

