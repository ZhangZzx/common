/**
 * ���(a, b, c)���� a*x + b*y = c ����� "yes" ������� "no"
 */
function t(a, b, c) {
    for (x=0; ; x++){
        if ( (c - a*x) % b == 0 ) {
            console.log("yes", a + "*" + x + "+" + b + "*" + (c - a*x) / b + "=" + c);
            break;
        } else if( (c - a*x)  < (b+1) && (c - a*x) % a !==0) {
            console.log("no", "ѭ������" + x);
            break;
        }
    }
}

t(6, 11, 5); //yes
