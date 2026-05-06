1. Các bước khi truy cập https://shopee.vn:

Người dùng nhập URL vào trình duyệt.
Trình duyệt thực hiện DNS lookup để tìm địa chỉ IP.
Trình duyệt gửi HTTP request đến server.
Server xử lý và trả về HTTP response.
Trình duyệt tải các tài nguyên (HTML, CSS, JS, ảnh).
Xây dựng DOM và CSSOM.
Render trang web ra màn hình.

Nguồn: 01_introduction_html_universe.md — HTTP & Browser

2. Tab Network trong DevTools hiển thị:

Danh sách request (HTML, CSS, JS, image…)
Status Code (200, 404…)
Thời gian load
Kích thước file
Tổng thời gian tải trang

Nguồn: 01_introduction_html_universe.md — DevTools

Câu A2 — Semantic HTML

Lỗi semantic:

Dùng <div> thay vì semantic tags
Không có <header>, <nav>, <main>, <footer>
Không có heading (<h1>, <h2>)
Không dùng <article> cho sản phẩm
Cấu trúc không rõ ràng

Cách sửa:

<header>
    <h1>ShopTLU</h1>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <section>
        <article>
            <h2>iPhone 16 Pro</h2>
            <p>25.990.000đ</p>
            <figure>
                <img src="iphone.jpg" alt="iPhone 16 Pro">
            </figure>
        </article>
    </section>
</main>

<footer>
    <p>© 2026 ShopTLU</p>
</footer>

Nguồn: 04_semantic_html.md

Câu A3 — Block vs Inline

Kết quả hiển thị:

Hộp 1

Text A Text B

Hộp 2

Text C Text D

Hộp 3

Giải thích:

<div> là block → xuống dòng
<span>, <strong> là inline → cùng dòng

Nguồn: 02_block_inline.md

Câu A4 — Table

Khác nhau:

<thead>: tiêu đề
<tbody>: nội dung
<tfoot>: phần cuối

Không nên dùng table để layout vì:

Khó bảo trì
SEO kém
Không responsive
Code rối

Nguồn: 05_tables_hyperlinks.md

🔹 PHẦN B
Bài B3 — Debug HTML

Danh sách lỗi:

Lỗi 1: Dòng 1 — <!DOCTYPE> thiếu html — Sửa thành <!DOCTYPE html>
Lỗi 2: Dòng 2 — Thiếu lang="vi" — Thêm vào <html>
Lỗi 3: Dòng 4 — <title> chưa đóng — Thêm </title>
Lỗi 4: Dòng 5 — Sai utf8 — Sửa thành UTF-8
Lỗi 5: Dòng 8 — <h1> sai — Sửa </h1>
Lỗi 6: Dòng 12 — <a> chưa đóng — Thêm </a>
Lỗi 7: Dòng 18 — <img> thiếu dấu " — Sửa src="iphone.jpg"
Lỗi 8: Dòng 20 — <b> sai vị trí — Dùng <strong> đúng thứ tự
Lỗi 9: Dòng 26 — Table thiếu <thead> <tbody>
Lỗi 10: Dòng 35 — 2 thẻ <main> — Đổi cái 2 thành <aside>
Lỗi 11: Dòng 40 — <p> chưa đóng trong footer
Lỗi 12: Thiếu alt cho ảnh
Lỗi 13: <h3> không hợp lý — đổi <h2>

Bài B4 — Phân tích website (ví dụ: shopee.vn)

1. Semantic HTML:

<header> — phần đầu trang
<nav> — menu điều hướng
<footer> — cuối trang

Không semantic:

Dùng nhiều <div> thay vì <section>
Thiếu <article> rõ ràng

2. Table:

Hiển thị dữ liệu sản phẩm / giá
Có thể có <tbody> nhưng ít dùng <thead>

3. Form:

action: URL xử lý tìm kiếm
method: GET
Input: text, submit
🔹 PHẦN C
Câu C1 — Cấu trúc HTML
<header> <!-- Header -->
    <nav> <!-- Điều hướng -->
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
    </nav>
</header>

<nav aria-label="breadcrumb">
    <ol>
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Điện thoại</a></li>
        <li>iPhone 16</li>
    </ol>
</nav>

<main>

<section>
    <figure>
        <img src="#" alt="Ảnh sản phẩm">
        <figcaption>Ảnh</figcaption>
    </figure>
</section>

<section>
    <article>
        <h1>Tên sản phẩm</h1>
        <p>Giá</p>
        <p>Đánh giá</p>
        <p>Mô tả</p>
    </article>
</section>

<section>
    <table>
        <thead>
            <tr><th>Thông số</th><th>Giá trị</th></tr>
        </thead>
        <tbody>
            <tr><td>RAM</td><td>8GB</td></tr>
        </tbody>
    </table>
</section>

<section>
    <article>
        <p>Bình luận</p>
    </article>
</section>

<aside>
    <h2>Sản phẩm tương tự</h2>
</aside>

</main>

<footer>
    <p>© 2026</p>
</footer>
Câu C2 — Tranh luận

Semantic HTML rất quan trọng trong phát triển web. Thứ nhất, nó giúp cải thiện SEO vì công cụ tìm kiếm hiểu rõ cấu trúc nội dung. Ví dụ, sử dụng <article> cho sản phẩm giúp Google nhận diện nội dung chính. Thứ hai, semantic HTML giúp tăng accessibility, hỗ trợ screen reader hiểu rõ các phần như <nav>, <header>.

Ví dụ, <nav> giúp thiết bị đọc màn hình xác định khu vực điều hướng.

Tuy nhiên, <div> vẫn cần thiết khi không có thẻ semantic phù hợp, ví dụ dùng để chia layout hoặc styling bằng CSS.