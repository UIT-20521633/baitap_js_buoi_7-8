var numberArray=[];
function Nhap_array(){
    var number=document.getElementById("number").value;
    numberArray.push(number);
    var result="";
    result+="<p class='alert alert-success'> Mảng giá trị: "+numberArray.join(" ")+"</p>";
    document.getElementById("footerNhap").innerHTML=result;
}
function tinhTongDuong(){
    var tongDuong=0;
    var countPositive=0;
    for (var i = 0; i < numberArray.length; i++) {
        if(numberArray[i]>=0){
            tongDuong+=Number(numberArray[i]);
            countPositive++;
        }  
    }
    var resultTinh="";
    resultTinh+="<p class='alert alert-success'> Tổng các số dương là: "+tongDuong+"</p>";
    document.getElementById("footerTongDuong").innerHTML=resultTinh;
    var resultDem="";
    resultDem+="<p class='alert alert-success'> Các số dương trong mảng là: "+countPositive+"</p>";
    document.getElementById("footerDemDuong").innerHTML=resultDem;
}
function findMin(){
    var min=Number(numberArray[0]);
    for (var i = 1; i < numberArray.length; i++) {
        if(Number(numberArray[i])<min){
           min=numberArray[i];
        }  
    }
    var resultMin="";
    resultMin+="<p class='alert alert-success'> Giá trị nhỏ nhất trong mảng là: "+min+"</p>";
    document.getElementById("footerMin").innerHTML=resultMin;
}
function findMinPosivite(){
    var minPositive=undefined;
    for (var i = 0; i < numberArray.length; i++) {
        if(Number(numberArray[i])>=0 && (minPositive===undefined || (Number(numberArray[i])<minPositive))){
                minPositive=numberArray[i];
        }
    }
    var resultMin="";
    resultMin+="<p class='alert alert-success'> Số dương nhỏ nhất trong mảng là: "+minPositive+"</p>";
    document.getElementById("footerMinPositive").innerHTML=resultMin;
}
function findEvenFinal(){
    var findFinal=0;
    for (var i = 0; i < numberArray.length; i++) {
        if(Number(numberArray[i]%2)===0){
            findFinal=numberArray[i];
        }
    }
    var resultEven="";
    if(findFinal===0){
        resultEven+="<p class='alert alert-success'> Số chẵn cuối cùng trong mảng là: -1</p>";
    }else{
        resultEven+="<p class='alert alert-success'> Số chẵn cuối cùng trong mảng là: "+findFinal+"</p>";
    }
    document.getElementById("footerEvenFinal").innerHTML=resultEven;
}
function exchangeValue(){
    var copyNumberArray1=[];
    copyNumberArray1=numberArray.slice();
    var index1=document.getElementById("index1").value*1;
    var index2=document.getElementById("index2").value*1;
    var result="";
    var temp=0;
    if((index1>=0&&index1<copyNumberArray1.length)&&(index2>=0&&index2<copyNumberArray1.length)){
        temp=copyNumberArray1[index1];
        copyNumberArray1[index1]=copyNumberArray1[index2];
        copyNumberArray1[index2]=temp;
        result+="<p class='alert alert-success'> Mảng giá trị sau khi đổi vị trí "+index1+" và vị trí "+index2+"với nhau là: "+copyNumberArray1.join(" ")+"</p>";
    }else{
        result+="<p class='alert alert-success'> Vị trí index vượt quá độ dài của mảng </p>";
    }
    document.getElementById("footerPosition").innerHTML=result;
}
function sortUp(){
    var copyNumberArray2=numberArray.slice();;
    var result="";
    var temp=0;
    for(var i=0; i<copyNumberArray2.length-1; i++){
        for (var j =i+1; j < copyNumberArray2.length; j++) {
            if(Number(copyNumberArray2[i])>Number(copyNumberArray2[j])) {
                temp=copyNumberArray2[i];
                copyNumberArray2[i]=copyNumberArray2[j];
                copyNumberArray2[j]=temp;
            }
        }
    }
    result+="<p class='alert alert-success'> Mảng giá trị sau khi sắp xếp tăng là: "+copyNumberArray2.join(" ")+"</p>";
    document.getElementById("footerSortUp").innerHTML=result;
}
function checkPrime(number) {
    if(number<2){
        return false;
    }
    for(var i=2;i<number/2;i++) {
        if(number%i===0){
            return false;
        }
    }
    return true;
}
function firstPrime(){
    var firstPrimeNumber = 0;
    var result ="";
    var flag=0;
    for(var i=0; i<numberArray.length; i++) {
        if(Number.isInteger(Number(numberArray[i]))){
            if(checkPrime(Number(numberArray[i]))) {
                firstPrimeNumber=numberArray[i];
                flag=1;
                break;
            }
        }
    } 
    if(flag==1){
        result+="<p class='alert alert-success'> Số nguyên tố đầu tiên là: "+firstPrimeNumber+"</p>";
    }else{
        result+="<p class='alert alert-success'> Số nguyên tố đầu tiên là: -1 (Không có giá trị) </p>";
    }
    document.getElementById("footerFirstPrime").innerHTML=result;
}
function PrimeReal(){
    var intergerArray=[];
    for(var i=0;i<numberArray.length;i++){
        if(Number.isInteger(Number(numberArray[i]))){
            intergerArray.push(numberArray[i]);
        }
    }
    var result="";
    result+="<p class='alert alert-success'> Số nguyên trong mảng số thực là: "+intergerArray.join(" ")+"</p>";
    document.getElementById("footerPrimeReal").innerHTML=result;
}
function Compare(){
    var countPositive=0;
    var countNegative=0;
    for(var i=0;i<numberArray.length;i++) {
        if(Number(numberArray[i])>=0){
            countPositive++;
        }
        else if(Number(numberArray[i])<0){
            countNegative++;
        }
    }
    var result="";
    if(countPositive>countNegative) {
        result+="<p class='alert alert-success'> Số lượng số dương nhiều hơn số âm</p>";
    }else if(countPositive<countNegative) {
        result+="<p class='alert alert-success'> Số lượng số âm nhiều hơn số dương</p>";
    }else{
        result+="<p class='alert alert-success'> Số lượng số dương bằng số âm</p>";
    }
    document.getElementById("footerCompare").innerHTML=result;
}