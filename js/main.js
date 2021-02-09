function numberInitializer(id, isValue){
    var input = "";
    if (isValue) {
        input = document.getElementById(id).value;                
    }
    else{
        input = document.getElementById(id).innerText;
    }
    
    var count = parseInt(input);
    if (isNaN(count)) {
        return count = 0;
    }
    else{
        return count;
    }
}
function counting(id, isIncrease){
    // console.log(id + "-count", isIncrease)
    var count = numberInitializer(id, true)
    // if (isNaN(count)) {
    //     count = 0;
    // }
    if (count>=0 && isIncrease) {
        count++;
    }
    else if (count>0 && !isIncrease) {
        count--;
    }
    document.getElementById(id).value = count;
    countTotal("count");
}
function countTotal(id){
    const firstClassAmount = numberInitializer("first-class-count", true);
    const economyAmount = numberInitializer("economy-count", true);
    const firstClassRate = numberInitializer("first-class-rate", false);
    const economyRate = numberInitializer("economy-rate", false);
    const subtotal = ((firstClassAmount * firstClassRate) + (economyAmount * economyRate));
    console.log(subtotal);
    const vat = (subtotal * .1);
    const total = (subtotal + vat);
    if (id == 'modal') {
        document.getElementById("confirmationModal").style.display= "block";
    }
    document.getElementById(id + "-Subtotal").innerText = subtotal;
    document.getElementById(id + "-Vat").innerText = vat;
    document.getElementById(id + "-Total").innerText = total;
}
function modalClose(){
    document.getElementById('confirmationModal').style.display = 'none';
    document.getElementById('first-class-count').value = '';
    document.getElementById('economy-count').value = '';
    document.getElementById('count-Subtotal').innerText = '0';
    document.getElementById('count-Vat').innerText = '0';
    document.getElementById('count-Total').innerText = '0';
}
// function bookingConfirmation(){
//     const subtotal = numberInitializer("subtotal", false);
//     const vat = numberInitializer("vat", false);
//     const total = numberInitializer("total", false);
//     document.getElementById("confirmationModal").style.display= "block";
//     document.getElementById("modalSubtotal").innerText = subtotal;
//     document.getElementById("modalVat").innerText = vat;
//     document.getElementById("modalTotal").innerText = total;
// }
