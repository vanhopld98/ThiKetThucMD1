let arr = ['a', 'o', 'e', 'u', 'i'];
let arr1 = [];
let count = 0;
let a = prompt("nhập ký tự");

function checkSoKyTu(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (string[i]=== arr[j]){
                arr1.push(string[i]);
                count++;
            }
        }
    }
    if (arr1.length == 0){
        alert("Chuỗi tự bạn nhập không có ký tự nguyên âm")
    }else {
        alert("Chuỗi tự bạn nhập có "+ count+" ký tự nguyên âm")
    }
}

checkSoKyTu(a);