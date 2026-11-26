# Học tiếng Trung HSK

Ứng dụng học tiếng Trung HSK (phát âm, HSK 1, HSK 2: 15 bài) theo dạng PWA: dùng được trên điện thoại, máy tính, cài như app, và mở được khi mất mạng sau lần đầu truy cập.

## Nội dung mỗi bài

Mỗi bài có 6 phần, theo đúng trình tự của file giáo trình:

1. **Từ mới**: từ, pinyin, từ loại, nghĩa tiếng Việt, nghe phát âm.
2. **Cách đọc**: quy tắc phát âm, thanh điệu, biến điệu.
3. **Cách viết**: chữ mẫu và cấu tạo bộ phận.
4. **Ngữ pháp**: công thức, giải thích, ví dụ.
5. **Đọc câu**: câu mẫu có pinyin, nghĩa và ghi chú cách đọc.
6. **Ôn tập**: câu hỏi trắc nghiệm có giải thích.

Ngoài ra có **Flashcard** (lặp lại ngắt quãng), **Ôn tập** (trộn từ và ngữ pháp) và **Tiến độ**.

## Cách viết chữ Hán và tra nhanh từ

- Phần **Cách viết** liệt kê mọi chữ trong bài. Chạm vào một chữ để mở bảng: nét viết có số thứ tự, bộ thủ, số nét, loại chữ, thành phần, nút **Xem nét viết**, **Luyện viết** (tự viết bằng tay hoặc chuột, có gợi ý khi viết sai), **Nghe**.
- Tab **Câu ví dụ** liệt kê tất cả câu ví dụ trong bài (ngữ pháp và bài đọc). Chạm vào từng từ trong câu để mở popup tra nhanh: nghĩa, pinyin, cách viết từng chữ, bài chứa từ và các câu khác có từ đó.

## Dữ liệu chữ Hán

Dữ liệu nằm trong thư mục `data/` và được sinh bằng script, chạy theo thứ tự khi thêm bài mới:

```powershell
node scripts/collect-chars.js
node scripts/fetch-hanzi.js
node scripts/build-hanzi.js
node scripts/build-syllables.js
node scripts/export-knowledge.js
```

- `scripts/build-syllables.js`: dựng `data/syllables.json`, chọn một chữ Hán thông dụng cho mỗi âm tiết và thanh để giọng đọc tiếng Trung của thiết bị phát âm đúng.
- `scripts/make-icons.py`: tạo lại icon ứng dụng (any, maskable, Apple touch, favicon) và ảnh chia sẻ `icons/og-image.png` (cần Pillow và font Windows).

## Phát âm

Mỗi buổi phát âm có: thanh mẫu và vận mẫu mới (chạm để nghe), quy tắc viết (i→yi, u→wu, ü→yu…), bốn thanh điệu có đường cao độ, **bảng ghép thanh mẫu × vận mẫu** (chạm một ô để mở popup nghe cả 4 thanh) và các nhóm luyện đọc. Âm thanh dùng giọng đọc tiếng Trung (`zh-CN`) có sẵn của thiết bị; nếu chưa có, ứng dụng hiện hướng dẫn cài giọng.

- `scripts/collect-chars.js`: gom mọi chữ trong bài và báo các từ trong câu chưa có trong từ điển (bổ sung ở `js/data-extra.js`).
- `scripts/fetch-hanzi.js`: tải dữ liệu nét chữ và từ điển (cần mạng).
- `scripts/build-hanzi.js`: dựng `data/hanzi-info.json`. Tên Hán Việt và tên bộ thủ ở `scripts/vi-tables.js`.

Font chữ Hán: dùng KaiTi nếu máy có; nếu không dùng AR PL UKai (Arphic Public License) rồi LXGW WenKai (SIL OFL 1.1) đã cắt nhỏ trong `fonts/` (`scripts/build-fonts.py`).

Nguồn: dữ liệu nét chữ và bộ thủ từ Make Me a Hanzi (Arphic Public License); thư viện Hanzi Writer (MIT).

## Cập nhật khi có file giáo trình mới

Dữ liệu nằm trong thư mục `js/`:

| File | Nội dung |
|---|---|
| `js/data-ph.js` | Phát âm, buổi 1–3 |
| `js/data-hsk1a.js` | HSK 1, bài 1–8 |
| `js/data-hsk1b.js` | HSK 1, bài 9–15 |
| `js/data-hsk2.js` | HSK 2, bài 1–6 |
| `js/data-hsk2b.js` | HSK 2, bài 7–9 |
| `js/data-hsk2c.js` | HSK 2, bài 10–12 |
| `js/data-hsk2d.js` | HSK 2, bài 13–15 |

Để thêm bài: sao chép một object bài có sẵn, đổi `id`, `n`, tiêu đề, từ vựng, ngữ pháp, câu đọc và câu hỏi. Sau đó tăng phiên bản cache trong `sw.js` (ví dụ `hsk-app-v3`) để người dùng nhận bản mới.

## Chạy thử trên máy

Mở `index.html` bằng một máy chủ tĩnh, ví dụ:

```powershell
python -m http.server 8000
```

rồi truy cập http://localhost:8000.

## Ghi chú

- Nội dung là tóm tắt và câu mẫu do người biên soạn viết lại, không sao chép nguyên văn slide giáo trình.
- Tiến độ, flashcard và kết quả ôn tập được lưu trong trình duyệt của từng người (localStorage). Xóa dữ liệu trình duyệt sẽ mất tiến độ.
- Tính năng phát âm dùng giọng đọc có sẵn của trình duyệt/thiết bị (tiếng Trung `zh-CN`). Nếu thiết bị chưa có giọng đọc tiếng Trung thì nút 🔊 sẽ không phát tiếng.
