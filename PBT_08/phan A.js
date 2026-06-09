Câu A1 – Function Declaration vs Expression vs Arrow
Function Declaration
function tinhThueBaoHiem(luong) {

    const thue =
        luong > 11000000
            ? luong * 0.1
            : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
}
Function Expression
const tinhThueBaoHiem = function(luong) {

    const thue =
        luong > 11000000
            ? luong * 0.1
            : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
Arrow Function
const tinhThueBaoHiem = (luong) => {

    const thue =
        luong > 11000000
            ? luong * 0.1
            : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
Hoisting
Function Declaration
sayHello();

function sayHello() {
    console.log("Hello");
}

✅ Chạy được

Function Expression
sayHello();

const sayHello = function() {
    console.log("Hello");
};

❌ ReferenceError