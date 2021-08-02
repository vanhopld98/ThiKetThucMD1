let inputNumber = parseInt(prompt("Mời bạn nhập số cần tìm"));
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let flag = false;
let temp;

function check() {
    for (let i = 0; i < arr.length; i++) {
        if (inputNumber == arr[i]) {
            temp = i;
            flag = true;
            break;
        } else {
            flag = false;
        }
    }
    if (flag == true) {
        alert("Giá trị của " + inputNumber + " thuộc vị trí " + temp);
    } else {
        alert("Không tìm thấy");
    }
}

check()