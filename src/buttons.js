/**
 * Created by Administrator on 2017/7/30.
 */
var answer =0;
var s="";
var out_s="";
function one()
{
    s+="1";
    document.calculator.inScreen.value=s;
}


function two()
{
    s+="2";
    document.calculator.inScreen.value=s;
}

function three()
{
    s+="3";
    document.calculator.inScreen.value=s;
}

function four()
{
    s+="4";
    document.calculator.inScreen.value=s;
}

function five()
{
    s+="5";
    document.calculator.inScreen.value=s;
}

function six()
{
    s+="6";
    document.calculator.inScreen.value=s;
}

function seven()
{
    s+="7";
    document.calculator.inScreen.value=s;
}

function eight()
{
    s+="8";
    document.calculator.inScreen.value=s;
}


function nine()
{
    s+="9";
    document.calculator.inScreen.value=s;
}

function back()
{
    if(s.length)s=s.slice(0,s.length-1);
    document.calculator.inScreen.value=s;
}

function AC()
{
    s="";
    document.calculator.inScreen.value=s;
    out_s="";
    document.calculator.outScreen.value=out_s;
}

function multiply()
{
    s+="*";
    document.calculator.inScreen.value=s;
}

function divide()
{
    s+="/";
    document.calculator.inScreen.value=s;
}

function add()
{
    s+="+";
    document.calculator.inScreen.value=s;
}

function minus()
{
    s+="-";
    document.calculator.inScreen.value=s;
}

function zero()
{
    s+="0";
    document.calculator.inScreen.value=s;
}

function dzero()
{
    s+="00";
    document.calculator.inScreen.value=s;
}

function point()
{
    s+=".";
    document.calculator.inScreen.value=s;
}

function mod()
{
    s+="%";
    document.calculator.inScreen.value=s;
}

function equal()
{
    try
    {
        s+=";";
        for(i=0;i<s.length;i++)
        {
            ss.push(s.charAt(i));
        }
        var t =ts.get();
        while(t.kind==print)t=ts.get();
        ts.putback(t);
        answer=expression();
        out_s=answer.toString();
        document.calculator.outScreen.value=out_s;
        s="";
        clean_up_mess();
        ss=[];

    }
    catch(e)
    {
        out_s=e.toString();
        document.calculator.outScreen.value=out_s;
        s="";
        document.calculator.inScreen.value=s;
        clean_up_mess();
        ss=[];
    }
}