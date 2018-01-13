<template>
  <div id="test">
      111111111111111111
    <test id="testProp">
        <ul>
            <li v-for="(book,index) in books" :key="index">
                <p>{{book.title}}</p>
                <p>{{book.desc}}</p>
                <p>{{book.author}}</p>
            </li>
        </ul>
    </test>
  </div>
</template>
<script>
var TestProp = {
    template:'<p>This my component.<slot></slot></p>'
}
export default{
    data:function(){
        return{
            books:[
                { title: 'title1',desc: 'desc1',author: 'author1'},
                { title: 'title2',desc: 'desc2',author: 'author2'},
                { title: 'title3',desc: 'desc3',author: 'author3'}
            ]
        }
    },
    components:{
        'test':TestProp,
    }
}
</script>
<style>

</style>
