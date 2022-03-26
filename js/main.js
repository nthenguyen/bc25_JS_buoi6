//Bài 1
var n = 0;
var tong = 0;
while (tong < 10000) {
  n++;
  tong = tong + n;
}
document.getElementById("thongbao1").innerHTML =
  '<div class="alert alert-info">Số nguyên dương nhỏ nhất là: ' + n + "</div>";

// Bài 2
document.getElementById("btnTinhTong").addEventListener("click", function () {
  var x = document.getElementById("numX").value * 1;
  var n = document.getElementById("numN").value * 1;
  var tong = 0;
  var luythua = 1; //lũy thừa
  for (var i = 1; i <= n; i++) {
    luythua *= x;
    tong += luythua;
  }
  document.getElementById("thongbao2").innerHTML =
    '<div class="alert alert-danger">Tổng của S(n) là: ' + tong + "</div>";
});

//Bai 3
document
  .getElementById("btnTinhGiaiThua")
  .addEventListener("click", function () {
    var n = document.getElementById("num").value * 1;
    var giaithua = 1;
    for (var i = 1; i <= n; i++) {
      giaithua *= i;
    }
    document.getElementById("thongbao3").innerHTML =
      '<div class="alert alert-success">Giai thừa của ' +
      n +
      " là: " +
      giaithua +
      "</div>";
  });

//Bài 4
document.getElementById("btnTaoDiv").addEventListener("click", function () {
  var content = "";
  for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      content += '<div class="alert alert-info">' + (i + 1) + ". Lẻ</div>";
    } else {
      content += '<div class="alert alert-danger">' + (i + 1) + ". Chẵn</div>";
    }
  }
  document.getElementById("thongbao4").innerHTML = content;
});

//Bai 5
var mangKetQua = [];
document.getElementById("btnInSNT").addEventListener("click", function () {
  var n = document.getElementById("number").value * 1;
  for (var i = 1; i <= n; i++) {
    if (ktra_so_nguyen_to(i)) {
      mangKetQua.push(i);
    }
  }
  document.getElementById("thongbao5").innerHTML =
    '<div class="alert alert-success">' + mangKetQua + "</div>";
});

function ktra_so_nguyen_to(snt) {
  if (snt < 2) return false;
  for (var i = 2; i < snt; i++) {
    if (snt % i == 0) {
      return false;
    }
  }
  return true;
}
