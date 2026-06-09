Câu C1 – Debug DOM Code
Lỗi 1

Sai:

addEventListener("onclick", ...)

Đúng:

addEventListener("click", ...)
Lỗi 2

Sai:

countDisplay = count;

Đúng:

countDisplay.textContent = count;
Lỗi 3

Sai:

const countDisplay = ...

Sau đó lại gán:

countDisplay = count;

=> Không được gán lại const.

Lỗi 4

Sai:

historyList.innerHTML = null;

Đúng:

historyList.innerHTML = "";
Lỗi 5

Sai:

item.remove;

remove là method.

Đúng:

item.remove();
Lỗi 6

Sai:

count = localStorage.getItem("count");

getItem trả về string.

Đúng:

count =
Number(localStorage.getItem("count")) || 0;
Lỗi 7

Load history nhưng không restore.

Thiếu:

historyList.innerHTML =
localStorage.getItem("history") || "";
Lỗi 8

Không bind lại sự kiện delete cho history sau khi load.

Nên dùng Event Delegation:

historyList.addEventListener("click", e => {
    if(e.target.tagName === "LI"){
        e.target.remove();
    }
});
Lỗi 9

Dùng innerHTML cho số đếm.

Nên:

countDisplay.textContent = count;
Lỗi 10

Có thể decrement xuống âm vô hạn.

Nên kiểm tra:

if(count > 0){
    count--;
}
Câu C2 – Performance
Tại sao bind 1000 event là không tốt?

Ví dụ:

for(let i=0;i<1000;i++){

    div.addEventListener(
        "click",
        handler
    );

}

Nhược điểm:

Tốn RAM
Tốn CPU
Khó quản lý
DOM lớn sẽ chậm
Event Delegation

Thay vì 1000 listeners:

parent.addEventListener("click", e => {

    if(e.target.matches(".item")){

        console.log(e.target);

    }

});

Chỉ cần:

1 Event Listener

thay vì

1000 Event Listeners
Code gây nhiều Reflow
for (let i = 0; i < 1000; i++) {

    const div =
    document.createElement("div");

    div.textContent =
    `Item ${i}`;

    document.body.appendChild(div);

}

Mỗi lần append:

Recalculate Layout
↓
Repaint
↓
Reflow

1000 lần.

Dùng DocumentFragment
const fragment =
document.createDocumentFragment();

for(let i = 0; i < 1000; i++){

    const div =
    document.createElement("div");

    div.textContent =
    `Item ${i}`;

    fragment.appendChild(div);
}

document.body.appendChild(fragment);
Tại sao nhanh hơn?

Vì:

1000 append
↓
Fragment (bộ nhớ tạm)
↓
1 append vào DOM
↓
1 reflow

Thay vì:

1000 append
↓
1000 reflow

=> Hiệu năng tốt hơn rất nhiều.