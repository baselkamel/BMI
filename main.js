height=document.getElementById('height')
weight=document.getElementById('weight')
function result(){
    if(height.value!=''&& weight.value!=''){

        let bmi=weight.value/((height.value*height.value/10000))
       bmi=bmi.toFixed(4)
if(bmi<=18.4){

    document.getElementById('output').innerHTML=`<p>Underweight: ${bmi} </p>`
    
}
else if(bmi>=18.5 && bmi<=24.9){
    document.getElementById('output').innerHTML=`<p>Normal: ${bmi} </p>`
}
else if(bmi>=25 && bmi<=39.9){
    document.getElementById('output').innerHTML=`<p>Overweight: ${bmi} </p>`
}
else{
    document.getElementById('output').innerHTML=`<p>Obese: ${bmi} </p>`
}


        delWarning()
        delInput()
    }


    else if(height.value==''&& weight.value==''){
        document.getElementById('warning-height').style.visibility='visible'
        document.getElementById('warning-weight').style.visibility='visible'

    }
    else if(height.value==''){
        document.getElementById('warning-height').style.visibility='visible'
    }
    else if(weight.value==''){
        document.getElementById('warning-weight').style.visibility='visible'
    }
}


function delWarning(){

    document.getElementById('warning-height').style.visibility='hidden'
            document.getElementById('warning-weight').style.visibility='hidden'
            
}
function delInput(){
    height.value=''
            weight.value=''
}

function reset(){
    document.getElementById('output').innerHTML=`` 
    height.value=''
            weight.value='' 
            document.getElementById('warning-weight').style.visibility='hidden'
            document.getElementById('warning-height').style.visibility='hidden'
}