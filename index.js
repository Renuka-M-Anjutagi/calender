
let container = document.createElement("div");
container.setAttribute("class","container");




let h1 = document.createElement("h1");

h1.setAttribute('class','h1');
h1.setAttribute("style","text-align:center")
h1.innerHTML = "Calculater App";




let col1 = document.createElement("div");

col1.setAttribute('class','keys');

let table = document.createElement("table")
let tbody = document.createElement("tbody")
let tr = document.createElement("tr")
let td = document.createElement("td")
td.setAttribute("colspan","3")

function input_create(tagname,attr1,attrval1,idname)
{
   var input_ele =document.createElement(tagname)
   input_ele.setAttribute(attr1,attrval1)
   input_ele.className = "screen"
   input_ele.id = idname
   return input_ele
}

function break_create()
{
    var break_ele = document.createElement("br")
    return break_ele
}

function button_create(tagname,attr1,attrval1,attr2,attrval2,attrn,attrvaln)
 {
    var button_ele =document.createElement(tagname)
    button_ele.setAttribute(attr1,attrval1)
    button_ele.setAttribute(attr2,attrval2)
    button_ele.setAttribute(attrn,attrvaln)
    button_ele.className='button'
    return button_ele;
 }

 function button_clear(tagname,attr1,attrval1,attr2,attrval2,attrn,attrvaln)
 {
    var button_ele =document.createElement(tagname)
    button_ele.setAttribute(attr1,attrval1)
    button_ele.setAttribute(attr2,attrval2)
    button_ele.setAttribute(attrn,attrvaln)
    button_ele.className='clear'
    return button_ele;
 }

 let input_result = input_create("input","type","text","result")
 let input_type_submitclear = button_clear("input","type","button","value","C","onclick","clearScreen()")

let input_type_submit1 = button_create("input","type","button","value","7","onclick","display('7')")
let input_type_submit2 = button_create("input","type","button","value","8","onclick","display('8')")
let input_type_submit3 = button_create("input","type","button","value","9","onclick","display('9')")
let input_type_submit4 = button_create("input","type","button","value","/","onclick","display('/')")

var input_sub_break1 = break_create()


let input_type_submit5 = button_create("input","type","button","value","4","onclick","display('5')")
let input_type_submit6 = button_create("input","type","button","value","5","onclick","display('6')")
let input_type_submit7 = button_create("input","type","button","value","6","onclick","display('7')")
let input_type_submit8 = button_create("input","type","button","value","*","onclick","display('*')")

var input_sub_break2 = break_create()


let input_type_submit9 = button_create("input","type","button","value","1","onclick","display('1')")
let input_type_submit10 = button_create("input","type","button","value","2","onclick","display('2')")
let input_type_submit11 = button_create("input","type","button","value","3","onclick","display('3')")
let input_type_submit12 = button_create("input","type","button","value","-","onclick","display('-')")


let input_type_submit0 = button_create("input","type","button","value","0","onclick","display('0')")
let input_type_submit00 = button_create("input","type","button","value",".","onclick","display('.')")
let input_type_submit01 = button_create("input","type","button","value","=","onclick","solve()")
let input_type_submit02 = button_create("input","type","button","value","+","onclick","display('+')")

var input_sub_break3 = break_create()




col1.append(input_type_submit1,input_type_submit2,input_type_submit3,input_type_submit4,
    input_type_submit5,input_type_submit6,input_type_submit7,input_type_submit8,input_type_submit9,
    input_type_submit9,input_type_submit10,input_type_submit11,input_type_submit12,input_type_submit0,input_type_submit00,input_type_submit01,input_type_submit02)



td.append(input_result,input_type_submitclear)
tr.append(td)
tbody.append(tr)
table.append(tbody)
container.append(table)
container.append(col1)

document.body.append(container,h1)


function clearScreen(){

    
    document.getElementById('result').value = ''

}

function display(val){

   
    document.getElementById('result').value += val

    return val

}



function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
