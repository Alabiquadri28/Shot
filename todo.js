console.log('hi')

const ces=document.getElementById('asb')
const sit=document.getElementById('fi')
const sic=document.getElementById('vasi')
let fed=document.getElementById('fed')
let xut=document.getElementById('sop')

let eed=document.getElementById('ased')
let his=document.getElementById('hcs')
let terd=document.getElementById('coun')
let nis=document.getElementById('sta')


let gis=document.getElementById('kos')
let ted=document.getElementById('cop')
let tord=document.getElementById('tow')





sit.style.display='block'
eed.style.display='none'
tord.style.display='none'
ted.style.display='none'
gis.style.display='none'






sic.onclick=()=>{
    sit.style.display='block'
    eed.style.display='none'
    tord.style.display='none'
    ted.style.display='none'
    gis.style.display='none'
    xut.style.display='none'
}


fed.onclick=()=>{
    eed.style.display='block'
    sit.style.display='none'
    tord.style.display='none'
    ted.style.display='none'
    gis.style.display='none'
    xut.style.display='block'

    

}


his.onclick=()=>{
    gis.style.display='block'
    eed.style.display='none'
    sit.style.display='none'
    tord.style.display='none'
    ted.style.display='none'
    xut.style.display='none'
}

nis.onclick=()=>{
    tord.style.display='block' 
    eed.style.display='none'
    xut.style.display='none'
    sit.style.display='none'
    ted.style.display='none'
    gis.style.display='none'
}

terd.onclick=()=>{

    ted.style.display='block'
    eed.style.display='none'
    xut.style.display='none'
    sit.style.display='none'
    tord.style.display='none'
    gis.style.display='none'
}





//advance stat workings

const zaza=document.getElementById('masa')
const asa=document.getElementById('maka')
const tester= document.getElementById('tester')
const teter= document.getElementById('bhm')
const red= document.getElementById('redi')

asa.style.width='1px'
let inat=parseInt(asa.style.width.substring(0,2))

teter.innerHTML = 0
let tet=parseInt(teter.innerHTML) 
console.log(tet)

red.innerHTML = 0
let der=parseInt(red.innerHTML)

zaza.style.width='1px'
let init=parseInt(zaza.style.width.substring(0,2))

console.log(init)


  



// Todo APP Starts here

let rap=document.getElementById('sibb')

// boss ul
let rip=document.getElementById('rev')//box
let rop=document.getElementById('ref')// add button
let rbp=document.getElementById('rem')// clear all button
let rep=document.getElementById('plu')
let rxp=document.getElementById('put')
let bui=document.getElementById('due')

let sab=""
rip.oninput=(e)=>{
 sab=e.target.value

}

const list=()=>{
   
    if(sab.length==0){
        alert('input task')
    }else{
        let rak=document.createElement('div')
        let nod=document.createTextNode(sab)
        rak.appendChild(nod)
        rak.className='buy'
       
      
        
         
        sij=document.createElement('div')
        sij.innerHTML='<input type="button" id="carl" value="Delete">'
        sij.className='del'
        rak.appendChild(sij)

        let did=document.createElement('input')
     
        did.type="text"
        did.id="tef"
        did.placeholder="Input text to update item"
        did.className='gba'
        let kip = ""
        did.oninput=(e)=>{
        kip=e.target.value
 
        }

       rak.appendChild(did)

       let thi=document.createElement('div')
      thi.innerHTML='<input type="button" id="yov"  value="Update"  >'
      thi.className='voy'
      rak.appendChild(thi)
      thi.onclick=()=>{
     if(kip !==""){
        nod.nodeValue=kip
     }
     did.value=""
     kip=""
    }

    let jis=document.createElement('div')
    jis.innerHTML='<input id="one" type="date" >'
    jis.className='jis' 
    let zip=""
    jis.oninput=(e)=>{
    zip=e.target.value
    fiw.innerHTML=zip
    } 
    rak.appendChild(jis)

    lip=document.createElement('div')
   lip.innerHTML='<input id="two" type="time" >'
   lip.className='lip'
   let vid=""
   lip.oninput=(e)=>{
   vid=e.target.value
   console.log(vid)
   mit.innerHTML=vid
  }
  rak.appendChild(lip)

  let col=document.createElement('div')
  col.innerHTML='<input type="checkbox" name="" id="">'
  col.className='xit'
  rak.appendChild(col)

  let jod=document.createElement('div')
  jod.innerHTML=''
  jod.className='lin'
  rak.appendChild(jod)

   rep.innerHTML++
  let mit=document.createElement('div')
  mit.innerHTML=vid
 mit.className='xoh'
  rak.appendChild(mit)

  let fiw=document.createElement('div')
  fiw.innerHTML=zip
  fiw.className='bon'
  rak.appendChild(fiw)   
  
  



           
         return rak

    }
    
   
  
}

let yip=document.getElementById('mel')


yip.onclick=()=>{

    if(rxp.innerHTML==0){
        xri.style.display='block'
        }else{
            if(confirm('Are you Sure you want to delete this?')){
                tjp.innerHTML=""
                rxp.innerHTML=0
        }
 
    }
 }

let xri=document.getElementById('sue')
let tjp=document.getElementById('try')
rop.onclick=()=>{
   // alert(sab.length)
   

    rak = list()
    rap.appendChild(rak)
   
    
   let tip=document.createElement('div')
   let nid=document.createTextNode(sab)
   tip.className='tip'
   tip.appendChild(nid)
   jof=document.createElement('div')
   jof.innerHTML='<input type="button" id="bao" value="Delete">'
   jof.className='den'
   tip.appendChild(jof)
   tjp.appendChild(tip)  

   rxp.innerHTML++

  
   tet  += 1
   teter.innerHTML = tet
   init += 1
   zaza.style.width = init + 'px'

   let zax=document.querySelectorAll('.den')
   for (let i=0; i< zax.length; i++){
    zax[i].onclick=function(){
        if(confirm('Are you Sure you want to delete this ?')){
            this.parentNode.remove()
            rxp.innerHTML--
            if(rxp.innerHTML==0){
                xri.style.display='block'
                }

        }
        
    }
   }
    

    let cov=document.querySelectorAll('.del')
   for(let i =0; i< cov.length; i++){
    cov[i].onclick=function(){
        if(confirm('Are you sure want to delete this item ?')){
            this.parentNode.remove()
            rep.innerHTML--
            if(rep.innerHTML==0){
                bui.style.display='block'
            }
        }
    }
}

   let soi=document.querySelectorAll('.xit')
  for(let i=0; i< soi.length; i++){
    soi[i].onclick=function(){
    this.parentNode.classList.toggle('cod')
    der  += 1
    inat += 1
    asa.style.width = inat + 'px'
    red.innerHTML = der
       
   
    }
}



    rip.value=""
    sab=""

   
   xri.style.display='none'
   bui.style.display='none'
   
}

rbp.onclick=()=>{
    if(rep.innerHTML==0){
        bui.style.display='block'   
    }else{
        if(confirm('Are you sure you want to delete all ?')){
            rap.innerHTML=""
            rep.innerHTML=0
           }  
    }
    
  
}



// statics/calculator
let kbg=document.getElementById('lad')
let kag=Array.from(document.querySelectorAll('.bom'))  



kag.map((bom)=>{
    bom.onclick=(e)=>{

   let show=e.target.innerHTML
   console.log(show)
   switch(show ){
    case "Clear":{
        kbg.innerHTML=""
    }
    break;
    case "Del":{
        kbg.innerHTML=kbg.innerHTML.slice(0, -1)
    }
    break;
    case "=":{
    
   try{
    kbg.innerHTML=eval(kbg.innerHTML)
    
   }catch(error){
    kbg.innerHTML="Error"
   }
      
    }
    break;

    default:{
        kbg.innerHTML+= show
    }
        
   }

    }
})

//  Counter Workings
let jip=document.getElementById('fad')
let jep=document.getElementById('kas')
let jop=document.getElementById('fut')



let shi=""
jip.oninput=(e)=>{
    shi = e.target.value

}

const sav=()=>{
    if(shi.length > 0){
        let san=document.createElement('div')
san.id='om'
san.className="mo"
let nik=document.createTextNode(shi)
san.appendChild(nik)

let kin=document.createElement('div')
kin.innerHTML=2
kin.className='nuy'
san.appendChild(kin)

let vek=document.createElement('div')
vek.innerHTML= "$"
vek.className='vek'
san.appendChild(vek)

let kon=document.createElement('div')
 kon.innerHTML = 4
 

//let vnk=document.createElement('span')
 //let vok=document.createElement('span')
 //let vpk=document.createElement('span')
 
kon.className='nok'
san.appendChild(kon)

let vok=document.createElement('div')
vok.innerHTML= "Unit(s):"
vok.className='vok'
san.appendChild(vok)

let vbk=document.createElement('div')
 vbk.innerHTML= "ITEM DETAILS :"
 vbk.className="deta"
 san.appendChild(vbk)

let clo=document.createElement('a')
clo.innerHTML='<input type="button" id="mk" value="Update">'
san.appendChild(clo)

let fij=document.createElement('input')
fij.type='number'
fij.className='fij'
fij.placeholder="Enter an Amount e.g $2, $3"
console.log(fij)

let faja=document.createElement('input')
faja.type='number'
faja.className='faj'
faja.placeholder="Enter Unit e.g 1unit, 2units"
console.log(fij)

let elim=document.createElement('a')
elim.innerHTML=' <input type="button" id="bk" value="Delete">'
elim.className='ck'




let ok=""
fij.oninput=(e)=>{
 ok = e.target.value
 
}

let okana=""
faja.oninput=(e)=>{
 okana = e.target.value
 
}

clo.onclick=()=>{
    if(ok.length > 0){
        kin.innerHTML = ok
        kod.innerHTML=kin.innerHTML *  kon.innerHTML
    }
    if(okana.length > 0){
        kon.innerHTML = okana
        kod.innerHTML=kin.innerHTML *  kon.innerHTML
    }

    
    let rimi=Array.from(document.querySelectorAll('.dok'))
    let sum = 0
    for(let i=0; i<rimi.length; i++){
    sum += parseInt(rimi[i].innerHTML) 
    up.innerHTML = sum
    
      
}



faja.value=""
okana=""
fij.value=""
ok=""
  
 
  
}

san.appendChild(fij)
san.appendChild(faja)
san.appendChild(elim)

let vak=document.createElement('div')
vak.innerHTML= "$"
vak.className='vak'
san.appendChild(vak)

let kod=document.createElement('div')
kod.innerHTML=parseInt(kin.innerHTML) *  parseInt(kon.innerHTML)
kod.className='dok'
san.appendChild(kod)





return san


    }else{
        alert("Please, type in an item !")
    }

}

let fo =document.getElementById('maf')
fo.style.display='block' 


let lasa=document.getElementById('last')
let up=document.getElementById('pob')




jep.onclick=()=>{
 
    san=sav()
    jop.appendChild(san)

    lasa.innerHTML++

    fo.style.display='none' 
    
    

    let samana=document.querySelectorAll('.ck')
    for(let i=0; i<samana.length; i++){
        samana[i].onclick=function(){

            if(up.innerHTML == "0") {
                alert('no item to be deleted')
              }else{
              
             if(confirm('Dangerous Operation!, Are you sure ?')){
                this.parentNode.remove() 
                let up=document.getElementById('pob')
                let rimi=Array.from(document.querySelectorAll('.dok'))
                let sum = 0
                 for(let i=0; i<rimi.length; i++){
                sum += parseInt(rimi[i].innerHTML) 
                up.innerHTML = sum
                    
                     
                  }

                  lasa.innerHTML--

                  if(lasa.innerHTML == 0){
                    up.innerHTML = 0
                    fo.style.display='block' 
                    }
    
                 
         
    
                }
            
            
            }

           
           
          }

     let up=document.getElementById('pob')
    let rimi=Array.from(document.querySelectorAll('.dok'))
    let sum = 0
     for(let i=0; i<rimi.length; i++){
        sum += parseInt(rimi[i].innerHTML) 
         up.innerHTML = sum
         

          
      }


        
    }
  
    
   
    

    console.log(shi)
    jip.value=""
    shi=""
}

let omo=document.getElementById('onm')

omo.onclick=()=>{

  if(up.innerHTML == "0") {
    alert('no item to be deleted')
  }else{
  
 if(confirm('Dangerous Operation!, Are you sure ?')){
    fo.style.display='block' 
    jop.innerHTML= ""
    lasa.innerHTML = 0
    up.innerHTML = 0  


}

  }
  
}







