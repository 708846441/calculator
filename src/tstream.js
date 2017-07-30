/**
 * Created by Administrator on 2017/7/30.
 */

const print = ";";

var ss=new Array();

function isDigit(ch)
{
    switch(ch)
    {
        case".":
        case"0":case"1":case"2":case"3":case"4":
        case"5":case"6":case"7":case"8":case"9":
        return true;
        default:
            return false;
    }
}
function getValue(ss,val)
//将ss前面的数值去掉并赋值给val
{
    var ch =ss.shift();
    var s="";
    while(isDigit(ch))
    {
        s+=ch;
        ch=ss.shift();
    }
    ss.unshift(ch);
    val=parseFloat(s);
    return val;
}

var Token_stream={
    createNew:function(){
        var token_stream={};
        var full=false;
        var buffer=0;
        token_stream.get=function(){
            if(full)
            {
                full=false;
                return buffer;
            }
            var ch =ss.shift();

            switch (ch)
            {
                case print:
                case"+":
                case"-":
                case"*":
                case"/":
                case"%":
                    return Token.createNew(ch,0);
                case".":
                case"0":case"1":case"2":case"3":case"4":
                case"5":case"6":case"7":case"8":case"9":
            {
                ss.unshift(ch);
                var val=0;
                val=getValue(ss,val);
                return Token.createNew(number,val);
            }
                default:
                    throw("error");

            }

        };

        token_stream.putback=function(t) {
            if(full)
                throw("error");
            buffer=t;
            full=true;
        };
        token_stream.ignore=function(c){
            if((full)&&(c==buffer.kind))
            {
                full=false;
                return;
            }
            full=false;

            var ch="";
            while(ss.length)
            {
                ch =ss[0];
                ss.shift();
                if(ch==c)
                    return;
            }

        };
        return token_stream;
    }
};
var ts=Token_stream.createNew();
function clean_up_mess()
{
    ts.ignore(print);
}
