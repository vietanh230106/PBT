1. Inline CSS
Ví dụ
<p style="color: red; font-size: 20px;">
    Hello World
</p>
Ưu điểm
Viết nhanh
Áp dụng trực tiếp cho 1 element
Độ ưu tiên rất cao
Nhược điểm
Khó bảo trì
Code HTML bị rối
Không tái sử dụng được
Không tách biệt giao diện và nội dung
Khi nên dùng
Test nhanh style
JS thay đổi style động
Chỉnh riêng một element đặc biệt
2. Internal CSS
Ví dụ
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>Hello CSS</p>
</body>
</html>
Ưu điểm
Dễ quản lý hơn inline
Không cần file riêng
Phù hợp trang nhỏ
Nhược điểm
Không tái sử dụng giữa nhiều trang
File HTML dài hơn
Khó maintain khi project lớn
Khi nên dùng
Website nhỏ
Demo/test
Một trang độc lập
3. External CSS
Ví dụ
HTML
<link rel="stylesheet" href="style.css">
style.css
p {
    color: green;
    font-size: 18px;
}
Ưu điểm
Tách biệt HTML và CSS
Dễ bảo trì
Tái sử dụng nhiều trang
Tổ chức code chuyên nghiệp
Browser cache tốt
Nhược điểm
Cần thêm file
Nếu file CSS lỗi → giao diện mất style
Khi nên dùng
Hầu hết project thực tế
Website nhiều trang
Project lớn
Câu hỏi thêm — Nếu cùng áp dụng cả 3 cách thì cách nào thắng?
Thứ tự ưu tiên
Inline CSS > Internal CSS > External CSS
Ví dụ
<head>
    <style>
        p {
            color: blue;
        }
    </style>

    <link rel="stylesheet" href="style.css">
</head>

<body>
    <p style="color:red;">Hello</p>
</body>
/* style.css */
p {
    color: green;
}
Kết quả
Màu cuối cùng: đỏ
Giải thích

Inline CSS có specificity cao hơn vì nó được viết trực tiếp trên element.

Specificity:

Inline = 1,0,0,0
ID = 0,1,0,0
Class = 0,0,1,0
Element = 0,0,0,1

Câu 2

1
h1
→ Chọn:
ShopTLU
2
price
→ Chọn:
25.990.000đ
45.990.000đ
3
→ Chọn:
<header class="top-bar dark">...</header>
(text content bên trong:)
ShopTLU
Home
Products
About
4
nav a:first-child
→ Chọn:
Home
5
product.featured h2
→ Chọn:
MacBook Pro
6
article > p
→ Chọn:
25.990.000đ
Mô tả sản phẩm...
45.990.000đ
Mô tả sản phẩm...
(vì chọn tất cả thẻ p là con trực tiếp của article)
7
a[href="/"]
→ Chọn:
Home
8
.top-bar.dark h1
→ Chọn:
ShopTLU

câu 3

Trường hợp 1 — content-box (mặc định)
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
Công thức content-box
Tổng width = content + padding + border
Tính toán
Content:
400px
Padding:
20px × 2 = 40px
Border:
5px × 2 = 10px
Chiều rộng hiển thị
400 + 40 + 10 = 450px
Không gian chiếm trên trang
(có cả margin)
450 + 10 + 10 = 470px
Trường hợp 2 — border-box
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
Với border-box
width đã bao gồm:
content + padding + border
Chiều rộng hiển thị
400px
Kích thước content thực tế
400 - 40 - 10
= 350px
Không gian chiếm trên trang
400 + 10 + 10
= 420px
Trường hợp 3 — Margin Collapse
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
Khoảng cách thực tế
40px
Vì sao KHÔNG phải 65px?
Margin dọc của block elements bị collapse.
Browser KHÔNG cộng:
25 + 40
Mà lấy:
margin lớn hơn = 40px
Nâng cao
.box-a { margin-bottom: -10px; }
.box-b { margin-top: 40px; }
Khoảng cách
40 + (-10) = 30px

Câu 4

CSS
p { color: black; }                    /* Rule A */
.price { color: blue; }               /* Rule B */
#main-price { color: red; }           /* Rule C */
p.price { color: green; }             /* Rule D */
Element:
<p class="price" id="main-price">
Specificity score
Rule A
p
Score:
(0,0,1)
Rule B
.price
Score:
(0,1,0)
Rule C
#main-price
Score:
(1,0,0)
Rule D
p.price
Score:
(0,1,1)
Element sẽ có màu gì?
Kết quả
red
Giải thích
Rule C có ID selector nên specificity cao nhất:
#main-price → (1,0,0)
Nếu thêm inline style
<p class="price" id="main-price"
   style="color: orange;">
Kết quả
orange
Vì
Inline style có độ ưu tiên cao hơn CSS thông thường.
Nếu Rule A thêm !important
p {
    color: black !important;
}
Kết quả
black
Vì sao?
important ưu tiên cao hơn specificity thông thường.
Thứ tự:
important > inline > ID > class > element

PHẦN C 

CSS ban đầu
container {
    width: 960px;
    margin: 0 auto;
}
sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}
content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
}
1. Tính chiều rộng thực tế
Sidebar
width = 300
padding = 20 × 2 = 40
border = 1 × 2 = 2
Tổng
300 + 40 + 2 = 342px
Content
width = 660
padding = 30 × 2 = 60
border = 1 × 2 = 2
Tổng
660 + 60 + 2 = 722px
2. Vì sao layout bị vỡ?
Tổng chiều rộng thực tế
342 + 722 = 1064px
Trong khi container chỉ:
960px
→ Tổng vượt quá container.
Vì vậy .content bị đẩy xuống dòng mới.
3. Cách sửa 1 — Dùng border-box
CSS sửa
* {
    box-sizing: border-box;
}
sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}
content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
}
Kết quả
Width đã bao gồm:
padding + border
Nên tổng:
300 + 660 = 960px
→ Không bị vỡ layout.
4. Cách sửa 2 — Không dùng border-box
Phải tự giảm width content.
Sidebar thực tế
342px
Container:
960px
Còn lại:
960 - 342 = 618px
Content padding + border:
60 + 2 = 62px
Nên width content:
618 - 62 = 556px
CSS sửa
sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}
content {
    width: 556px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
}

Câu 2 

CSS
body { font-size: 16px; color: #333; }
container { font-size: 14px; }
card { color: blue; }
card .title { font-size: 20px; }
card p { color: inherit; }
#featured .title { color: red; }
highlight { color: green !important; }
1. “Sản phẩm A” (h2)
HTML:
<h2 class="title highlight">Sản phẩm A</h2>
Nằm trong:
<div class="card" id="featured">
Font-size
Rule áp dụng:
card .title {
    font-size: 20px;
}
→ Font-size:
20px
Color
Các rule liên quan:
card { color: blue; }
#featured .title { color: red; }
highlight { color: green !important; }
So sánh
highlight
có:
!important
→ thắng tất cả rule thường.
Kết quả
color = green
2. “Mô tả sản phẩm” (p trong featured)
HTML:
<p>Mô tả sản phẩm</p>
Các rule
.card {
    color: blue;
}
card p {
    color: inherit;
}
inherit nghĩa là kế thừa từ parent .card.
card
có:
color: blue
Kết quả
blue
3. “Sản phẩm B” (h2)
HTML:
<h2 class="title">Sản phẩm B</h2>
Font-size
Rule:
card .title {
    font-size: 20px;
}
20px
Color
Không có:
#featured .title
Không có .highlight
Nên kế thừa:
.card {
    color: blue;
}
Kết quả
blue
4. “Mô tả sản phẩm B”
HTML:
<p class="highlight">
Rule liên quan
card p {
    color: inherit;
}

highlight {
    color: green !important;
}
Kết quả
green
vì:
!important thắng inherit
Tổng kết đáp án
Element	Font-size	Color
Sản phẩm A	20px	green
Mô tả sản phẩm	kế thừa	blue
Sản phẩm B	20px	blue
Mô tả sản phẩm B	kế thừa	green