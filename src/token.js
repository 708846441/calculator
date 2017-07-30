/**
 * Created by Administrator on 2017/7/30.
 */
const number = "8";		//t.kind==numbr means that t is a number Token
var Token= {
    createNew:function(ch,val){
        var token ={};
        token.kind = ch;
        token.value =val;
        return token;
    }
};