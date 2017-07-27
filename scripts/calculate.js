function findbrac(s, index) {      //找两个函数之间的子表达式 如从sin(12+3)中提取出12+3
    var num_1 = 0; num_2 = 0;
    var index_1 = index;
    var index_2 = 0;
    for (var i = index; i < s.length; i++) {
        if (s[i] === '(')
            num_1 += 1;
        if (s[i] === ')')
            num_2 += 1;
        if (num_1 === num_2) {
            index_2 = i;
            break;
        }
    }
    var substr = s.substring(index_1 + 1, index_2);
    return [substr, index_2];
}

function factorial(n) {         //计算阶乘 
    return n > 1 ? n * factorial(n - 1) : 1;
}

function calculate(s) {        //实现计算功能
    var regexpans = /Ans/gi;
    var regexpsin = /sin\(.*\)/i;
    var regexpcos = /cos\(.*\)/i;
    var regexptan = /tan\(.*\)/i;
    var regexpexp = /exp\(.*\)/i;
    var regexplog = /log\(.*\)/i;
    var regexpfac = /!\(.*\)/i;
    var regexpsinh=/sinh\(.*\)/i;
    var regexpcosh=/cosh\(.*\)/i;
    var regexptanh=/tanh\(.*\)/i;
    var regexpcot=/cot\(.*\)/i;
    var regexpsec=/sec\(.*\)/i;
    var regexpcsc=/csc\(.*\)/i;
    var regexpsqrt=/sqrt\(.*\)/i;
    var regexpper=/\%/gi;
    var regexppi=/\π/gi;
    var regexpe=/\(e\)/gi;
    if (s.search(regexpans)!==-1){
        var history_1=readstorage(1);
        s=s.replace(regexpans,String(history_1));
    };
    if(s.search(regexpper)!==-1){
        s=s.replace(regexpper,'/100');
    }
    if(s.search(regexppi)!==-1){
        s=s.replace(regexppi,String(Math.PI));
    }
    if(s.search(regexpe)!==-1){
        s=s.replace(regexpe,String(Math.E));
    }
    if (s.search(regexpsin) !== -1) {
        var sin_index = s.search(regexpsin);
        var find = findbrac(s, sin_index + 3);
        var reasult_sin = String(Math.sin(calculate(find[0])));
        return calculate(s.substring(0, sin_index) + reasult_sin + s.substring(find[1] + 1, s.length + 1));
    }
    else if (s.search(regexpcos) !== -1) {
        var cos_index = s.search(regexpcos);
        var find = findbrac(s, cos_index + 3);
        var reasult_cos = String(Math.cos(calculate(find[0])));
        return calculate(s.substring(0, cos_index) + reasult_cos + s.substring(find[1] + 1, s.length + 1));
    }
    else if (s.search(regexptan) !== -1) {
        var tan_index = s.search(regexptan);
        var find = findbrac(s, tan_index + 3);
        var reasult_tan = String(Math.tan(calculate(find[0])));
        return calculate(s.substring(0, tan_index) + reasult_tan + s.substring(find[1] + 1, s.length + 1));
    }
    else if (s.search(regexpcot) !== -1) {
        var cot_index = s.search(regexpcot);
        var find = findbrac(s, cot_index + 3);
        var reasult_cot = String(1/Math.tan(calculate(find[0])));
        return calculate(s.substring(0, cot_index) + reasult_cot + s.substring(find[1] + 1, s.length + 1));
    }
    else if (s.search(regexpcsc) !== -1) {
        var csc_index = s.search(regexpcsc);
        var find = findbrac(s, csc_index + 3);
        var reasult_csc = String(1/Math.sin(calculate(find[0])));
        return calculate(s.substring(0, csc_index) + reasult_csc + s.substring(find[1] + 1, s.length + 1));
    }
    else if (s.search(regexpsec) !== -1) {
        var sec_index = s.search(regexpsec);
        var find = findbrac(s, sec_index + 3);
        var reasult_sec = String(1/Math.cos(calculate(find[0])));
        return calculate(s.substring(0, sec_index) + reasult_sec + s.substring(find[1] + 1, s.length + 1));
    }
    else if (s.search(regexpexp) !== -1) {
        var exp_index = s.search(regexpexp);
        var find = findbrac(s, exp_index + 3);
        var exp=find[0].split(/\s*\,\s*/);
        var reasult_exp = String(Math.pow(Number(exp[0]),calculate(exp[1])));
        return calculate(s.substring(0, exp_index) + reasult_exp + s.substring(find[1] + 1, s.length + 1));
    }
    else if (s.search(regexpsqrt) !== -1) {
        var sqrt_index = s.search(regexpsqrt);
        var find = findbrac(s, sqrt_index + 4);
        var sqrt=find[0].split(/\s*\,\s*/);
        var reasult_sqrt = String(Math.pow(Number(sqrt[1]),1/calculate(sqrt[0])));
        return calculate(s.substring(0, sqrt_index) + reasult_sqrt + s.substring(find[1] + 1, s.length + 1));
    }
    else if (s.search(regexplog) !== -1) {
        var log_index = s.search(regexplog);
        var find = findbrac(s, log_index + 3);
        var log=find[0].split(/\s*\,\s*/);
        var reasult_log = String(Math.log(calculate(log[1]))/Math.log(Number(log[0])));
        return calculate(s.substring(0, log_index) + reasult_log + s.substring(find[1] + 1, s.length + 1));
    }
    else if(s.search(regexpsinh)!==-1){
        var sinh_index = s.search(regexpsinh);
        var find = findbrac(s, sinh_index + 4);
        var reasult_sinh = String(Math.sinh(calculate(find[0])));
        return calculate(s.substring(0, sinh_index) + reasult_sinh + s.substring(find[1] + 1, s.length + 1));
    }
    else if(s.search(regexpcosh)!==-1){
        var cosh_index = s.search(regexpcosh);
        var find = findbrac(s, cosh_index + 4);
        var reasult_cosh = String(Math.cosh(calculate(find[0])));
        return calculate(s.substring(0, cosh_index) + reasult_cosh + s.substring(find[1] + 1, s.length + 1));
    }
    else if(s.search(regexptanh)!==-1){
        var tanh_index = s.search(regexptanh);
        var find = findbrac(s, tanh_index + 4);
        var reasult_tanh = String(Math.tanh(calculate(find[0])));
        return calculate(s.substring(0, tanh_index) + reasult_tanh + s.substring(find[1] + 1, s.length + 1));
    }
    else if (s.search(regexpfac) !== -1) {
        var fac_index = s.search(regexpfac);
        var find = findbrac(s, fac_index + 1);
        var reasult_fac = String(factorial(calculate(find[0])));
        return calculate(s.substring(0, fac_index) + reasult_fac + s.substring(find[1] + 1, s.length + 1));
    }
    else {
        try{
            return eval(s);
        }catch(e){
            return '输入数据有误';
        }

    }
}

function calcandstore(s){
    try{var result=calculate(s);
    }
    catch(e){
        return '输入数据有误';
    }
        storage(result);
    return result;
}

console.log(calculate('log((e),(e))'));

function storage(s) {            //存储
    var i;
    for (i = 1; i <= 10; i++) {
        if (window.localStorage.getItem(String(i)) === undefined)
            break;
    }
    if (i <= 10)
        window.localStorage.setItem(String(i), s);
    else {
        for (i = 10; i > 1; i--) {
            var a;
            a = window.localStorage.getItem(String(i - 1));
            window.localStorage.setItem(String(i), a);
        }
        window.localStorage.setItem(String(1), s);
    }
}

function readstorage(i) {    //读取
    return window.localStorage.getItem(String(i));
}
