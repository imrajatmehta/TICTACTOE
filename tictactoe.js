var crossdone=false;
var x=0;
var O=0;
function check(r1,r2,r3,c1,c2,c3,d1,d2,d3){
    
    if(r1.firstElementChild!=null && r2.firstElementChild!=null &&r3.firstElementChild!=null && r1.firstElementChild.innerHTML=='X' &&r2.firstElementChild.innerHTML=='X' &&r3.firstElementChild.innerHTML=='X'){
        
        alert("Winner X");
        refresh();
        

    }
    else if(r1.firstElementChild!=null && r2.firstElementChild!=null &&r3.firstElementChild!=null && r1.firstElementChild.innerHTML=='O' &&r2.firstElementChild.innerHTML=='O' &&r3.firstElementChild.innerHTML=='O'){
        alert("Winner O");
        refresh();
    }
    if(c1.firstElementChild!=null && c2.firstElementChild!=null &&c3.firstElementChild!=null && c1.firstElementChild.innerHTML=='X' &&c2.firstElementChild.innerHTML=='X' &&c3.firstElementChild.innerHTML=='X'){
        alert("Winner X");
        refresh();
    }
    else if(c1.firstElementChild!=null && c2.firstElementChild!=null &&c3.firstElementChild!=null && c1.firstElementChild.innerHTML=='O' &&c2.firstElementChild.innerHTML=='O' &&c3.firstElementChild.innerHTML=='O'){
        alert("Winner O");
        refresh();
    }
    if(d1!=null)
    {
    if(d1.firstElementChild!=null && d2.firstElementChild!=null &&d3.firstElementChild!=null && d1.firstElementChild.innerHTML=='X' &&d2.firstElementChild.innerHTML=='X' &&d3.firstElementChild.innerHTML=='X'){
        alert("Winner X");
        refresh();
    }
    else   if(d1.firstElementChild!=null && d2.firstElementChild!=null &&d3.firstElementChild!=null && d1.firstElementChild.innerHTML=='O' &&d2.firstElementChild.innerHTML=='O' &&d3.firstElementChild.innerHTML=='O'){
        alert("Winner O");
        refresh();
    }}
}
function refresh(){x=0;window.location.reload();}
function addit(){
    
    if(crossdone){
        var X=document.createElement('h1');
        X.className="text-center done"
        X.style.marginTop="11%";
        X.style.fontSize="60px";
        X.style.color="red";
        X.appendChild(document.createTextNode("X"));
        crossdone=false;
        x++;
        return X;
    }
    else{
        crossdone=true;
        O++;
        var X=document.createElement('h1');
        X.className="text-center"
        X.style.marginTop="11%";
        X.style.fontSize="60px";
        X.style.color="blue";
        X.appendChild(document.createTextNode("O"));
        return X;
    }
    
}

let box1=document.querySelector("#b1");
box1.addEventListener('click',(e)=>{
    e.preventDefault();
    if(box1.firstElementChild==null){
        box1.append(addit(crossdone));
        
    }
    check(box1,box2,box3,box1,box4,box7,box1,box5,box9);
    if(x+O==9){
        alert("TIE");
        refresh();
    }
   
});

const box2=document.querySelector("#b2");
box2.addEventListener('click',(e)=>{
    e.preventDefault();
    if(box2.firstElementChild==null){
       box2.append(addit());
    }
    check(box1,box2,box3,box2,box5,box8,null,null,null);
    if(x+O==9){
        alert("TIE");
        refresh();
    }
});
const box3=document.querySelector("#b3");
box3.addEventListener('click',(e)=>{
    e.preventDefault();
    if(box3.firstElementChild==null){
        box3.append(addit());
    }
    check(box1,box2,box3,box3,box6,box9,box3,box5,box7);
    if(x+O==9){
        alert("TIE");
        refresh();
    }
});
let box4=document.querySelector("#b4");
box4.addEventListener('click',(e)=>{
    e.preventDefault();
    if(box4.firstElementChild==null){
        box4.append(addit());
    }
    check(box4,box5,box6,box1,box4,box7,null,null,null);
    if(x+O==9){
        alert("TIE");
        refresh();
    }
});
let box5=document.querySelector("#b5");
box5.addEventListener('click',(e)=>{
    e.preventDefault();
    if(box5.firstElementChild==null){
        box5.append(addit());
    }
    check(box4,box5,box6,box1,box5,box9,box8,box2,box5);
    if(x+O==9){
        alert("TIE");
        refresh();
    }
});
let box6=document.querySelector("#b6");
box6.addEventListener('click',(e)=>{
    e.preventDefault();
    if(box6.firstElementChild==null){
        box6.append(addit(crossdone));
    }
    check(box4,box5,box6,box1,box3,box9,null,null,null);
    if(x+O==9){
        alert("TIE");
        refresh();
    }
});
let box7=document.querySelector("#b7");
box7.addEventListener('click',(e)=>{
    e.preventDefault();
    if(box7.firstElementChild==null){
        box7.append(addit(crossdone));
    }
    check(box7,box8,box9,box1,box4,box7,box3,box5,box7);
    if(x+O==9){
        alert("TIE");
        refresh();
    }
});
let box8=document.querySelector("#b8");
box8.addEventListener('click',(e)=>{
    e.preventDefault();
    if(box8.firstElementChild==null){
        box8.append(addit(crossdone));
    }
    check(box7,box8,box9,box2,box5,box8,null,null,null);
    if(x+O==9){
        alert("TIE");
        refresh();
    }
});
let box9=document.querySelector("#b9");
box9.addEventListener('click',(e)=>{
    e.preventDefault();
    if(box9.firstElementChild==null){
        box9.append(addit(crossdone));
    }
    check(box7,box8,box9,box1,box5,box9,box3,box6,box9);
    if(x+O==9){
        alert("TIE");
        refresh();
    }
});
