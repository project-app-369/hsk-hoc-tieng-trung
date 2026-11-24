# Tạo icon ứng dụng và ảnh chia sẻ. Chạy: python scripts/make-icons.py
# Cần Pillow và các font Windows: msyh.ttc (chữ Hán), segoeui/segoeuib (tiếng Việt).
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.path.join(ROOT, 'icons')
FONTS = r'C:\Windows\Fonts'
HAN = os.path.join(FONTS, 'msyh.ttc')
TOP, BOT = (45, 58, 140), (124, 58, 237)


def gradient(w, h):
    img = Image.new('RGB', (w, h))
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = (x / max(w - 1, 1) * 0.4 + y / max(h - 1, 1) * 0.6)
            px[x, y] = tuple(int(TOP[i] + (BOT[i] - TOP[i]) * t) for i in range(3))
    return img


def glyph(size, scale):
    """Ảnh vuông gradient với chữ 学 ở giữa. scale = tỉ lệ cỡ chữ so với cạnh."""
    img = gradient(size, size)
    d = ImageDraw.Draw(img)
    f = ImageFont.truetype(HAN, int(size * scale))
    d.text((size / 2, size / 2 + size * 0.02), '学', font=f, fill=(255, 255, 255), anchor='mm')
    # chấm ấn đỏ nhỏ ở góc dưới phải
    r = size * 0.05
    cx, cy = size * 0.80, size * 0.80
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 128, 112))
    return img


def rounded(img, radius_ratio):
    size = img.size[0]
    mask = Image.new('L', (size * 4, size * 4), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size * 4 - 1, size * 4 - 1], radius=int(size * 4 * radius_ratio), fill=255)
    mask = mask.resize((size, size), Image.LANCZOS)
    out = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


# Icon "any": bo góc, nền trong suốt ở góc
for s in (192, 512):
    rounded(glyph(s, 0.56), 0.22).save(os.path.join(OUT, f'icon-{s}.png'))
# Icon "maskable": tràn viền, chữ nằm trong vùng an toàn 80%
for s in (192, 512):
    glyph(s, 0.46).save(os.path.join(OUT, f'icon-maskable-{s}.png'))
# Apple touch icon (iOS tự bo góc, không dùng nền trong suốt)
glyph(180, 0.54).save(os.path.join(OUT, 'apple-touch-icon.png'))
# Favicon
fav = rounded(glyph(256, 0.6), 0.22)
fav.resize((32, 32), Image.LANCZOS).save(os.path.join(OUT, 'favicon-32.png'))
fav.resize((16, 16), Image.LANCZOS).save(os.path.join(OUT, 'favicon-16.png'))
fav.save(os.path.join(ROOT, 'favicon.ico'), sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

# Ảnh chia sẻ 1200x630
W, H = 1200, 630
og = gradient(W, H)
d = ImageDraw.Draw(og)
big = ImageFont.truetype(HAN, 330)
d.text((250, H / 2 + 10), '学', font=big, fill=(255, 255, 255), anchor='mm')
title = ImageFont.truetype(os.path.join(FONTS, 'segoeuib.ttf'), 66)
sub = ImageFont.truetype(os.path.join(FONTS, 'segoeui.ttf'), 31)
small = ImageFont.truetype(os.path.join(FONTS, 'segoeui.ttf'), 26)
x = 470
d.text((x, 200), 'Học tiếng Trung', font=title, fill=(255, 255, 255))
d.text((x, 280), 'HSK 1 · HSK 2', font=title, fill=(255, 214, 205))
d.text((x, 385), 'Từ mới · Cách viết chữ Hán · Phát âm', font=sub, fill=(235, 238, 255))
d.text((x, 430), 'Flashcard · Ôn tập · Theo dõi tiến độ', font=sub, fill=(235, 238, 255))
d.rounded_rectangle([x, 505, x + 330, 551], radius=23, fill=(255, 255, 255))
d.text((x + 165, 528), 'Dùng được cả khi offline', font=small, fill=(45, 58, 140), anchor='mm')
og.save(os.path.join(OUT, 'og-image.png'), optimize=True)
print('Đã tạo icon trong', OUT)
