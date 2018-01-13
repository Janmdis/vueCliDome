<template>
  <div class="box" >
    <mobox1></mobox1>
    <h3>{{msg}}</h3>
    <input type="text" v-model="message" placeholder="edit me" >
    <span>Message is:{{message}}</span><br>
    <p style="white-space: pre-line;">Multiline message is:{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines" ></textarea><br>
    <input type="checkbox" id="checkbox" v-model="checked" v-bind:click="checkClick" >
    <label for="checkbox">{{checked}}</label>
    <div id='multipleSelect'>多选框
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{checkedNames}}</span>
    </div>
    <div id="singleSelect">单选框
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
    </div>
    <div id="singleSelectList"> 单选列表
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
    </div>
    <div id="multipleSelectList">多选列表
        <select v-model="mselected" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ mselected }}</span>
    </div>
    <div id="dynamicSelected">动态选择
        <select name="dynamicRendering" id="" v-model="dynamicSelected" >
            <option v-for="option in options" v-bind:value="option.value">
                {{option.text}}
            </option>
        </select>
        <span>dynamicSelected:{{dynamicSelected}}</span>
    </div>
    <br>
    <div id="bindValue">
        <!-- <input type="radio" v-model="pick" v-bind:value="a">
        <label for="">{{pick}}</label> -->
        <input type="checkbox" v-model="toggle">
        <label for="">{{toggle}}</label>
        <select v-model="selected">
            <option v-bind:value="{number:123}">123</option>
        </select>
    </div>
    <div id="modifier">
        <span>1.修饰符lazy相当于input中的change事件,v-model.lazy值如下:</span>
        <input v-model.lazy="msg2" style="width:50px;" ><br>
        <span>v-model.lazy:{{msg2}}</span>
        <br>
        <span>2.如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值:</span>
        <input type="number" v-model.number="age" style="width:50px;" ><br>
        <span>v-model.number:{{age}}---这通常很有用，因为在 type="number" 时 HTML 中输入的值也总是会返回字符串类型。</span>
        <br>
        <span>3.如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：</span>
        <input v-model.trim="msg3" ><br>
        <span>v-model.trim:{{msg3}}</span>
    </div>
    <instantiation></instantiation>
</div>
</template>
<script>

//import mobox1 from './moduleBox';
import instantiation from './vueInstantiation'
export default {
    data () {
        return {
            msg:"开始学习",
            message:'',
            checked:false,
            checkedNames:[],
            picked:[],
            selected:'',
            mselected:[],
            dynamicSelected:'A',
            options:[{text:'one',value:'A'},{text:'two',value:'B'},{text:'three',value:'C'}],
            toggle:'',
            msg2:'',
            age:[],
            msg3:'',
        }
    },
    methods: {
        checkClick:function(){
            checked = !checked;
        }
    },
    components:{
        //mobox1,
        instantiation,
    }
}
</script>
<style>
.box{
    width: 500px;
    margin:auto;
    text-align: left;
}
.box input{
    margin:0 0 2px 0;
}
</style>
