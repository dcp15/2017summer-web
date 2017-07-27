function relatives(s, sex) {
    var sexual = sex === 1;    //如果sex=1表示为男性，否则为女性
    var regexp = /\s*\的\s*/g;
    var a = s.split(regexp);
    const myself = {            //自己
        '爸爸': '爸爸',
        '妈妈': '妈妈',
        '弟弟': '弟弟',
        '妹妹': '妹妹',
        '儿子': '儿子',
        '丈夫': '丈夫',
        '妻子': '妻子',
        '哥哥': '哥哥',
        '姐姐': '姐姐',
        '女儿': '女儿',
    }
    const wife = {               //妻子             
        '爸爸': '岳父',
        '妈妈': '岳母',
        '丈夫': '丈夫',
        '妻子': '妻子',
        '哥哥': '大舅子',
        '姐姐': '大姨子',
        '弟弟': '小舅子',
        '妹妹': '小姨子',
        '儿子': '儿子',
        '女儿': '女儿',
    }
    const wife_father = {        //岳父||岳母
        '爸爸': '岳祖父',
        '妈妈': '岳祖母',
        '丈夫': '岳父',
        '妻子': '岳母',
        '哥哥': '伯岳父',
        '姐姐': '岳姨母',
        '弟弟': '叔岳父',
        '妹妹': '岳姨母',
        '儿子': ['大舅子', '小舅子'],
        '女儿': ['妻子', '大姨子', '小姨子'],
    }
    const husband_father = {     //公公||婆婆
        '爸爸': '公祖父',
        '妈妈': '公祖母',
        '丈夫': '公公',
        '妻子': '婆婆',
        '哥哥': '伯公父',
        '姐姐': '公姑母',
        '弟弟': '叔公父',
        '妹妹': '公姑母',
        '儿子': ['丈夫', '大叔子', '小叔子'],
        '女儿': ['姐姐', '妹妹'],
    }
    const husband = {          //丈夫
        '爸爸': '公公',
        '妈妈': '婆婆',
        '丈夫': '丈夫',
        '妻子': '妻子',
        '哥哥': '哥哥',
        '姐姐': '姐姐',
        '弟弟': '弟弟',
        '妹妹': '妹妹',
        '儿子': '儿子',
        '女儿': '女儿',
    }
    const grandfather = {       //祖父||祖母
        '爸爸': '曾祖父',
        '妈妈': '曾祖母',
        '丈夫': '祖父',
        '妻子': '祖母',
        '哥哥': '伯祖父',
        '姐姐': '姑祖母',
        '弟弟': '叔祖父',
        '妹妹': '姑祖母',
        '儿子': ['爸爸', '伯伯', '叔叔'],
        '女儿': '姑母',
    }
    const father = {           //爸爸
        '爸爸': '祖父',
        '妈妈': '祖母',
        '丈夫': '爸爸',
        '妻子': '妈妈',
        '哥哥': '伯父',
        '姐姐': '姑母',
        '弟弟': '叔父',
        '妹妹': '姑母',
        '儿子': sexual ? ['自己', '哥哥', '弟弟'] : ['哥哥', '弟弟'],
        '女儿': sexual ? ['姐姐', '妹妹'] : ['自己', '姐姐', '妹妹'],
    };
    const mgrandfather = {      //外祖父||外祖母
        '爸爸': '外曾祖父',
        '妈妈': '外曾祖母',
        '丈夫': '外祖父',
        '妻子': '外祖母',
        '哥哥': '外伯祖父',
        '姐姐': '外姑祖母',
        '弟弟': '外叔祖父',
        '妹妹': '外姑祖母',
        '儿子': '舅舅',
        '女儿': ['妈妈', '姨母'],
    }
    const mother = {           //妈妈
        '爸爸': '外祖父',
        '妈妈': '外祖母',
        '丈夫': '爸爸',
        '妻子': '妈妈',
        '哥哥': '舅父',
        '姐姐': '姨母',
        '弟弟': '舅父',
        '妹妹': '姨母',
        '儿子': sexual ? ['自己', '哥哥', '弟弟'] : ['哥哥', '弟弟'],
        '女儿': sexual ? ['姐姐', '妹妹'] : ['自己', '姐姐', '妹妹'],
    };
    const uncle1 = {    //伯父||伯母
        '爸爸': '祖父',
        '妈妈': '祖母',
        '丈夫': '伯父',
        '妻子': '伯母',
        '哥哥': '伯父',
        '姐姐': '姑母',
        '弟弟': ['爸爸', '叔父'],
        '妹妹': '姑母',
        '儿子': ['堂兄', '堂弟'],
        '女儿': ['堂姐', '堂妹'],
    }
    const uncle2 = {    //叔父||婶婶
        '爸爸': '祖父',
        '妈妈': '祖母',
        '丈夫': '叔父',
        '妻子': '婶婶',
        '哥哥': ['爸爸', '伯父'],
        '姐姐': '姑母',
        '弟弟': '叔父',
        '妹妹': '姑母',
        '儿子': ['堂兄', '堂弟'],
        '女儿': ['堂姐', '堂妹'],
    }
    const aunt = {     //姑父||姑母
        '爸爸': '祖父',
        '妈妈': '祖母',
        '丈夫': '姑父',
        '妻子': '姑母',
        '哥哥': ['爸爸', '伯父', '叔父'],
        '姐姐': '姑母',
        '弟弟': ['爸爸', '伯父', '叔父'],
        '妹妹': '姑母',
        '儿子': ['表兄', '表弟'],
        '女儿': ['表姐', '表妹'],
    }
    const muncle = {    //舅父||舅母
        '爸爸': '外祖父',
        '妈妈': '外祖母',
        '丈夫': '舅父',
        '妻子': '舅母',
        '哥哥': '舅父',
        '姐姐': ['妈妈', '姨母'],
        '弟弟': '舅父',
        '妹妹': ['妈妈', '姨母'],
        '儿子': ['表兄', '表弟'],
        '女儿': ['表姐', '表妹'],
    };

    const maunt = {   //姨父||姨母
        '爸爸': '外祖父',
        '妈妈': '外祖母',
        '丈夫': '姨父',
        '妻子': '姨母',
        '哥哥': '舅父',
        '姐姐': ['妈妈', '姨母'],
        '弟弟': '舅父',
        '妹妹': ['妈妈', '姨母'],
        '儿子': ['表兄', '表弟'],
        '女儿': ['表姐', '表妹'],
    }
    const brother1 = {         //哥哥||嫂子
        '爸爸': '爸爸',
        '妈妈': '妈妈',
        '丈夫': '哥哥',
        '妻子': '嫂子',
        '哥哥': '哥哥',
        '姐姐': '姐姐',
        '弟弟': sexual ? ['自己', '弟弟', '哥哥'] : ['弟弟', '哥哥'],
        '妹妹': sexual ? ['姐姐', '妹妹'] : ['自己', '妹妹', '姐姐'],
        '儿子': '侄儿',
        '女儿': '侄女',
    };
    const brother2 = {         //弟弟||弟媳
        '爸爸': '爸爸',
        '妈妈': '妈妈',
        '丈夫': '弟弟',
        '妻子': '弟媳',
        '哥哥': sexual ? ['自己', '哥哥', '弟弟'] : ['哥哥', '弟弟'],
        '姐姐': sexual ? ['妹妹', '姐姐'] : ['自己', '姐姐', '妹妹'],
        '弟弟': '弟弟',
        '妹妹': '妹妹',
        '儿子': '侄儿',
        '女儿': '侄女',
    };
    const sister1 = {         //姐姐||姐夫
        '爸爸': '爸爸',
        '妈妈': '妈妈',
        '丈夫': '姐夫',
        '妻子': '姐姐',
        '哥哥': '哥哥',
        '姐姐': '姐姐',
        '弟弟': sexual ? ['自己', '哥哥', '弟弟'] : ['哥哥', '弟弟'],
        '妹妹': sexual ? ['姐姐', '妹妹'] : ['自己', '姐姐', '妹妹'],
        '儿子': '外甥',
        '女儿': '外甥女',
    }
    const sister2 = {         //妹妹||妹夫
        '爸爸': '爸爸',
        '妈妈': '妈妈',
        '丈夫': '妹夫',
        '妻子': '妹妹',
        '哥哥': sexual ? ['自己', '弟弟', '哥哥'] : ['哥哥', '弟弟'],
        '姐姐': sexual ? ['姐姐', '姐姐'] : ['自己', '姐姐', '妹妹'],
        '弟弟': '弟弟',
        '妹妹': '妹妹',
        '儿子': '外甥',
        '女儿': '外甥女',
    }
    const son = {            //儿子||儿媳
        '爸爸': sexual ? '自己' : '丈夫',
        '妈妈': sexual ? '妻子' : '自己',
        '丈夫': '儿子',
        '妻子': '儿媳',
        '哥哥': '儿子',
        '姐姐': '女儿',
        '弟弟': '儿子',
        '妹妹': '女儿',
        '儿子': '孙子',
        '女儿': '孙女',
    }
    const daughter = {       //女儿||女婿 
        '爸爸': sexual ? '自己' : '丈夫',
        '妈妈': sexual ? '妻子' : '自己',
        '丈夫': '女婿',
        '妻子': '女儿',
        '哥哥': '儿子',
        '姐姐': '女儿',
        '弟弟': '儿子',
        '妹妹': '女儿',
        '儿子': '外孙',
        '女儿': '外孙女',

    }
    const grandson = {    //孙子||孙媳
        '爸爸': '儿子',
        '妈妈': '儿媳',
        '丈夫': '孙子',
        '妻子': '孙媳',
        '哥哥': '孙子',
        '姐姐': '孙女',
        '弟弟': '孙子',
        '妹妹': '孙女',
        '儿子': '曾孙',
        '女儿': '曾孙女',
    }
    const granddau = {    //孙女||孙女婿
        '爸爸': '儿子',
        '妈妈': '儿媳',
        '丈夫': '孙女婿',
        '妻子': '孙女',
        '哥哥': '孙子',
        '姐姐': '孙女',
        '弟弟': '孙子',
        '妹妹': '孙女',
        '儿子': '外曾孙',
        '女儿': '外曾孙女',
    }
    var deterrel = [];
    var rel = [];
    for (var i = 0; i < a.length; i++) {
        var temp_rel = [];
        if (i === 0) {
            deterrel = deterrel.concat(a[0]);
        }
        else {
            var temp_deterrel = [];
            rel.forEach((e, index) => {
                temp_deterrel = temp_deterrel.concat(e[a[i]]);
            })
            deterrel = temp_deterrel;
        }
        if (i === a.length - 1) {
            var newdeterrel = [];
            for (var j = 0; j < deterrel.length; j++) {
                if (newdeterrel.indexOf(deterrel[j]) === -1)
                    newdeterrel.push(deterrel[j])
            }
            var output="";
            newdeterrel.forEach((e)=>{
                output=output+e+'/';
            })
            return output.slice(0,output.length-1);
        }
        temp_rel = [];
        deterrel.forEach((e) => {
            switch (e) {
                case '自己':
                    temp_rel = temp_rel.concat(myself);
                    break;
                case '丈夫':
                    temp_rel = temp_rel.concat(husband);
                    break;
                case '妻子':
                    temp_rel = temp_rel.concat(wife);
                    break;
                case '岳父':
                case '岳母':
                    temp_rel = temp_rel.concat(wife_father)
                    break;
                case '公公':
                case '婆婆':
                    temp_rel = temp_rel.concat(husband_father);
                    break;
                case '祖父':
                case '祖母':
                    temp_rel = temp_rel.concat(grandfather);
                    break;
                case '爸爸':
                    temp_rel = temp_rel.concat(father);
                    break;
                case '妈妈':
                    temp_rel = temp_rel.concat(mother);
                    break;
                case '伯父':
                case '伯母':
                    temp_rel = temp_rel.concat(uncle1);
                    break;
                case '叔父':
                case '婶婶':
                    temp_rel = temp_rel.concat(uncle2);
                    break;
                case '姑父':
                case '姑母':
                    temp_rel = temp_rel.concat(aunt);
                    break;
                case '舅父':
                case '舅母':
                    temp_rel = temp_rel.concat(muncle);
                    break;
                case '姨夫':
                case '姨母':
                    temp_rel = temp_rel.concat(maunt);
                    break;
                case '哥哥':
                case '嫂子':
                    temp_rel = temp_rel.concat(brother1);
                    break;
                case '弟弟':
                case '弟媳':
                    temp_rel = temp_rel.concat(brother2);
                    break;
                case '姐姐':
                case '姐夫':
                    temp_rel = temp_rel.concat(sister1);
                    break;
                case '妹妹':
                case '妹夫':
                    temp_rel = temp_rel.concat(sister2);
                    break;
                case '儿子':
                case '儿媳':
                    temp_rel = temp_rel.concat(son);
                    break;
                case '女儿':
                case '女婿':
                    temp_rel = temp_rel.concat(daughter);
                    break;
                case '孙子':
                case '孙媳':
                    temp_rel = temp_rel.concat(grandson);
                    break;
                case '孙女':
                case '孙女婿':
                    temp_rel = temp_rel.concat(granddau);
                    break;
                default:
                    return 'sorry , beyond my ability';
                    break;
            }
        })
        rel = temp_rel;
    }
}
// console.log(relatives('儿子的妈妈的爸爸的儿子的弟弟'));
// console.log(relatives('爸爸的儿子的爸爸的爸爸的儿子', 1));
