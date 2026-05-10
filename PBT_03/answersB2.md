# Phần 1 — Box Model

Hộp 1 (content-box):
- width CSS: 300px
- padding: 20px x 2 = 40px
- border: 5px x 2 = 10px

=> Chiều rộng thực tế:
300 + 40 + 10 = 350px

Hộp 2 (border-box):
- width tổng vẫn là 300px
- padding và border nằm bên trong width

=> Chiều rộng thực tế:
300px

Giải thích:
content-box chỉ tính phần content.
border-box tính luôn padding và border trong width.

---

# Phần 2 — Layout 3 cột

Không dùng border-box:
- Sidebar:
250 + 30 + 4 = 284px

- Content:
500 + 40 + 4 = 544px

- Ads:
250 + 30 + 4 = 284px

Tổng:
284 + 544 + 284 = 1112px

=> Vượt quá container 1000px
=> Layout bị vỡ

---

Dùng border-box:
- Tổng luôn đúng:
250 + 500 + 250 = 1000px

=> Layout không vỡ