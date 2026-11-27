# General design guide

Rút ra từ app HSK (PWA tiếng Việt, vanilla CSS/JS, theme "Vườn Tô Châu"). Giá trị lấy từ `css/style.css`, `css/soft.css`, `css/theme-suzhou.css` và `js/app.js`. Dùng làm điểm xuất phát cho app khác: giữ cấu trúc token, đổi giá trị màu và phông theo thương hiệu.

---

## 1. Kiến trúc CSS: ba lớp, đổi giao diện bằng token

| Lớp | Tệp | Vai trò |
|---|---|---|
| Nền | `style.css` | Token, bố cục, cỡ chữ, khoảng cách, responsive. Đủ chạy một mình. |
| Kỹ thuật | `soft.css` | Bóng nổi/lõm, chuyển động, bố cục thanh điều hướng. |
| Theme | `theme-suzhou.css` | Chỉ định nghĩa lại token + vài trạng thái. Không đụng bố cục. |

Quy tắc: **theme chỉ được đổi màu, viền, bóng, phông, họa tiết.** Muốn đổi theme, thay tệp theme; muốn quay lại cũ, bỏ một dòng `<link>`. Mọi màu trong CSS phải là `var(--…)`, không viết hex rải rác.

Bộ token tối thiểu (mỗi theme phải có cả bản sáng và tối):

```css
:root {
  --bg; --surface; --surface-2; --surface-3;   /* nền → thẻ → ô lồng trong thẻ → nhấn mạnh */
  --border; --border-strong;                    /* viền mảnh / viền control */
  --ink; --ink-2; --ink-3;                      /* chữ chính / phụ / mờ */
  --accent; --accent-ink; --accent-soft;        /* màu nhấn, chữ trên nền nhấn, nền nhấn nhạt */
  --seal;                                       /* màu thương hiệu thứ hai (dấu, nhãn nhỏ) */
  --ok; --ok-soft; --bad; --bad-soft;           /* đúng / sai */
  --shadow; --shadow-lg; --r; --r-s;
}
```

Chế độ tối viết hai chỗ giống nhau: `@media (prefers-color-scheme: dark){ :root:not([data-theme="light"]){…} }` và `:root[data-theme="dark"]{…}`. Nhờ vậy người dùng có thể ép sáng/tối, còn mặc định theo hệ thống.

Độ tương phản: chữ phụ `--ink-3` vẫn phải đạt ≥ 4.5:1 trên `--bg` và `--surface`. Ở bản sáng của app: `#66593f` trên `#f1ead7`.

---

## 2. Cỡ chữ

Thang chữ thực tế của app (px, gốc `body` = 16px, `line-height` 1.55):

| Vai trò | Cỡ | Ghi chú |
|---|---|---|
| Tiêu đề trang `.page-title` | 26 → 32 (≥900px) | đậm 700, line-height 1.2 |
| Tiêu đề mục `.sec-head h2` | 22 → 26 (≥900px) | |
| Chữ thường | 16 | **không nhỏ hơn 16 cho ô nhập** (iOS tự phóng to nếu < 16) |
| Mô tả trang `.page-sub` | 15 | `max-width: 62ch` để dòng không quá dài |
| Nút | 15 (mặc định), 14 (nhỏ), 16 (lớn) | |
| Chip / segmented | 14 | |
| Chữ phụ `.small` | 13.5 | |
| Nhãn nhỏ `.eyebrow` | 12, in hoa, `letter-spacing .1em` | |
| Tab bar | 12 (mobile), 15 (rail trái desktop) | |
| Đáp án trắc nghiệm | **17**; nếu chứa chữ Hán **24** | xem bên dưới |
| Chữ Hán trong thẻ ghi nhớ | 64 (≤420px), 76, 88 (≥900px) | |

Bài học rút ra:

1. **Control là `<button>` không tự kế thừa phông** (`button { font: inherit }` có, nhưng nếu gán `font-family` cho phần tử cha thì nút vẫn phải được gán lại). Với app có chữ Hán/ngôn ngữ đặc biệt, gán rõ `font-family` cho lớp control (`.opt { font-family: var(--hanzi) }`).
2. **Nội dung hỗn hợp cần cỡ theo loại.** Chữ Hán cần lớn hơn chữ Latin cùng độ đọc được. Đừng đặt một cỡ chung; để JS gắn lớp theo nội dung rồi CSS chọn cỡ:

   ```js
   '<button class="opt' + (/[一-鿿]/.test(text) ? ' zh' : '') + '">'
   ```
   ```css
   .opt { font-size: 17px; }
   .opt.zh { font-size: 24px; line-height: 1.35; min-height: 56px; }
   ```
3. Chỉ dùng phông có chân cho **tiêu đề** (`--serif`), không cho nội dung dài. Kiểm tra phông có đủ dấu tiếng Việt (Noto Serif có).
4. Đặt cỡ chữ cố định bằng `px` theo thang trên; chỉ co theo breakpoint chứ không dùng `vw` cho chữ.

Bộ phông:

```css
--text:  "Be Vietnam Pro", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--hanzi: "HanziKai", "HanziUKai", "HanziWenKai", "Be Vietnam Pro", "Noto Serif SC", "Songti SC", "Microsoft YaHei", system-ui, sans-serif;
--serif: "Noto Serif", "Noto Serif SC", Georgia, "Times New Roman", serif;
```

Phông Hán tự host (`/fonts`, cache-first), có dự phòng Latin cuối ngăn xếp để chuỗi tiếng Việt không bị hiển thị bằng phông Hán thiếu glyph.

---

## 3. Khoảng cách và kích thước chạm

- Lưới nhịp: **4 / 8 / 12 / 16 / 24 / 32**. Khoảng cách giữa thẻ 12 (mobile) → 16 (desktop). Padding thẻ 16 (hero: 16 mobile, 28 desktop).
- Bo góc: thẻ `--r: 20px` (theme Tô Châu hạ xuống 14px), ô nhỏ `--r-s: 12px`, nút/chip `999px`.
- **Vùng chạm ≥ 44px** cho nút chính (`.btn` min-height 44; lớn 52; nhỏ 36 chỉ dùng trong hàng dày). Nút icon 40×40, tab bar mục ≥ 54px, mục bên bài học 62px (mobile).
- Khoảng cách tới đáy trang mobile: `padding-bottom: 112px` để tab bar cố định không che nội dung cuối.
- Lề ngang an toàn: `padding-inline: max(16px, env(safe-area-inset-left/right))`; tab bar cộng `env(safe-area-inset-bottom)`.
- Tránh tràn ngang: phần tử con của grid/flex đặt `min-width: 0`, bảng rộng bọc trong khung `overflow: auto` thay vì làm cả trang cuộn ngang.

```css
.grid > *, .lesson-layout > *, .hero > * { min-width: 0; }
```

---

## 4. Bố cục responsive

Một breakpoint chính **900px**, hai breakpoint phụ **700px** và **420px**.

| Khoảng | Điều hướng | Nội dung |
|---|---|---|
| ≤ 420px | Tab bar dưới, 5 mục | 1 cột; chữ Hán thẻ 64px; hero padding 16 |
| 421–899px | Tab bar dưới | 1 cột; ≥700px thêm lưới 4 cột cho bảng thanh điệu, hộp thoại căn giữa |
| ≥ 900px | **Rail trái cố định** 212px (`top: 80px; left: 20px; bottom: 16px`) | `.view` chừa lề trái `calc(20px + 212px + clamp(24px,3vw,48px))`; lưới nhiều cột |
| ≥ 1100px | như trên | lưới 3 cột `repeat(3,1fr)` |

Các mẫu bố cục nên tái dùng:

1. **Cùng một phần tử, hai dạng**: `.tabbar` là hàng ngang dưới ở mobile và cột dọc trái ở desktop, chỉ đổi `display`/`position` trong media query. Không nhân đôi HTML.
2. **Lưới tự co**: `grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))` cho danh sách thẻ; `minmax(380px,1fr)` trong trang bài; `minmax(420px,1fr)` cho câu ví dụ. Các khối rộng (`.snd-card`, `.drill`) dùng `grid-column: 1 / -1`.
3. **Bố cục hai cột có thanh bên**: `grid-template-columns: 270px minmax(0,1fr)`, thanh bên `position: sticky; top: 88px`.
4. **Mục con luôn thấy hết, không cuộn ngang** (mobile): thanh mục con là lưới `repeat(4, minmax(0,1fr))`, mỗi ô xếp dọc icon trên nhãn dưới, `min-height: 62px`, `font-size: 12px`, `white-space: normal`. Desktop chuyển thành cột dọc.
5. **Lề desktop co giãn**: `padding: 28px clamp(24px, 3vw, 64px) 64px`.
6. Thanh trên cố định, mờ kính (`backdrop-filter: blur(16px) saturate(150%)`) với `padding-top: env(safe-area-inset-top)`.
7. Nút "Cài app": chỉ icon ở mọi cỡ (40×40) kèm `aria-label`.

Thẻ lật (flashcard) cần chú ý:

```css
.fc-wrap { perspective: 1400px; max-width: 540px; margin: 0 auto; }
.fc      { position: relative; height: 330px; transform-style: preserve-3d; }   /* 360px ≥900px */
.fc-face { position: absolute; inset: 0; backface-visibility: hidden; }
.fc-back { transform: rotateY(180deg); }
```

**Lỗi đã gặp:** theme đặt `position: relative` cho mọi khung (`.hero, .lesson-head, .fc-face`) và ghi đè `absolute` của mặt thẻ → hai mặt xếp chồng dọc, thẻ "nhảy" khi lật. Sau khi gộp nhiều selector vào một quy tắc, luôn đặt lại `.fc-face { position: absolute; inset: 0 }` ở cuối tệp theme.

---

## 5. Chuyển động

- Thời lượng: nhanh 120–150ms (nhấn nút `scale(.97)`), vừa 250–280ms (vào trang `translateY(8px) → 0`), chậm 500–650ms (lật thẻ, đổi theme).
- Chỉ animate `transform`, `opacity`, `clip-path`, `box-shadow`.
- Phản hồi đúng/sai: `sx-pop` (đúng), `sx-shake` (sai), ~400ms.
- Luôn có khối giảm chuyển động:

  ```css
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition: none !important; animation: none !important; } }
  ```

**Đổi theme sáng/tối lan tỏa từ nút bấm** (View Transitions, rơi về đổi tức thì nếu không hỗ trợ hoặc bật giảm chuyển động):

```js
btn.addEventListener('click', () => {
  const swap = () => applyTheme(isDark() ? 'light' : 'dark');
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return swap();
  const b = btn.getBoundingClientRect(), x = b.left + b.width / 2, y = b.top + b.height / 2;
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(swap).ready.then(() =>
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 650, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' }));
});
```
```css
::view-transition-old(root), ::view-transition-new(root) { animation: none; mix-blend-mode: normal; }
::view-transition-old(root) { z-index: 1; }
::view-transition-new(root) { z-index: 2; }
```

---

## 6. Trạng thái và thành phần

- **Mục đang chọn** (segmented, chip, mục bên, nút chính): nền `--accent` + chữ `--accent-ink`. Không chỉ dựa vào màu: tab bar thêm gạch dưới, `aria-pressed` / `aria-current="page"` luôn được đặt.
- **Focus**: `:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px }`. Không bao giờ bỏ outline.
- **Hover** chỉ trong `@media (hover: hover)`; trạng thái `:active` thay thế cho cảm ứng.
- Thẻ: viền 1px `--edge`, bóng nhẹ; thẻ "đặc biệt" (hero, đầu bài, thẻ ghi nhớ) có khung viền kép bằng `::before { inset: 5px }`.
- Họa tiết trang trí là SVG nhúng trong `background-image`, `opacity` .22–.35, `pointer-events: none`, và ẩn ở nơi cần đọc kỹ (mặt sau thẻ).
- Dialog dùng `<dialog>` gốc, rộng `min(420px, calc(100vw - 32px))`, `max-height: calc(100dvh - 32px)`.

---

## 7. PWA / cache khi cập nhật giao diện

- Service worker: **network-first** (`cache: 'no-cache'`) cho CSS/JS, **cache-first** cho `/data`, `/icons`, `/fonts`; `skipWaiting` + `clients.claim` + tự tải lại khi `controllerchange`.
- **Mỗi lần đổi CSS/JS phải tăng `CACHE` trong `sw.js`** (`hsk-app-v24`…). Quên bước này là lý do người dùng thấy giao diện cũ; hướng dẫn họ tải lại hai lần.
- Cập nhật `<meta name="theme-color">` cho cả sáng và tối khi đổi bảng màu.

---

## 8. Checklist trước khi giao

- [ ] Mọi màu là token; bản tối được xem trên ít nhất một trang có thẻ + form + nút.
- [ ] 390px: không cuộn ngang; vùng chạm ≥ 44px; tab bar không che nội dung cuối.
- [ ] 900px+: rail/thanh bên không đè nội dung; lưới tự co đúng số cột.
- [ ] Ô nhập ≥ 16px; chữ phụ đạt tương phản 4.5:1.
- [ ] Control (`button`) có phông đúng; nội dung hỗn hợp có cỡ theo loại.
- [ ] Thẻ lật: hai mặt cùng toạ độ và kích thước ở hai trạng thái.
- [ ] Bật `prefers-reduced-motion` thì không còn animation.
- [ ] Đã tăng phiên bản cache của service worker.
