/**
 * Created by Administrator on 2017/7/30.
 */
function primary()
{
    var t =ts.get();
    switch(t.kind)
    {
        case number:
        {
            return t.value;
        }
        case"-":
            return -primary();
        case"+":
            return primary();
        default:
            throw("error");
    }
}

function term()
{
    var left = primary();
    var t=ts.get();
    while(true)
    {
        switch(t.kind)
        {
            case"*":
                left *=primary();
                t=ts.get();
                break;
            case"/":
                var d =primary();
                if(d==0)
                    throw("error");
                left /=d;
                t=ts.get();
                break;
            case"%":
                var right=primary();
                var i1=parseInt(left);
                if(i1!=left)
                    throw("error");
                var i2=parseInt(right);
                if(i2!=right)
                    throw("error");
                if(i2==0)
                    throw("error");
                left=i1%i2;
                t=ts.get();
                break;
            default:
                ts.putback(t);
                return left;
        }

    }
}

function expression()
{
    var left=term();
    var t=ts.get();

    while(true)
    {
        switch(t.kind)
        {
            case"+":
                left+=term();
                t=ts.get();
                break;
            case"-":
                left-=term();
                t=ts.get();
                break;
            default:
                ts.putback(t);
                return left;
        }
    }
}
