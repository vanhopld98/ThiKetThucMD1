let result = 0;

function PhuongTrinhBacNhat(a, b) {
    if (a === 0) {
        alert("Phương trình vô nghiệm");
    } else {
        if (b === 0) {
            alert("Phương trình vô số nghiệm ");
        } else {
            result = -b / a;
            alert(result)
        }
    }
}

PhuongTrinhBacNhat(5, 8);
