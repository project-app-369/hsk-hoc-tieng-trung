"""Cắt nhỏ font khải thư thành woff2 để đóng gói cùng app.
Dùng: python scripts/build-fonts.py <ukai.ttc> <thư mục files của lxgw-wenkai-webfont>
Cần: pip install fonttools brotli. AR PL UKai: Arphic Public License. LXGW WenKai: SIL OFL 1.1."""
import sys, glob, re, json, os
from fontTools.ttLib import TTFont, TTCollection
from fontTools import subset, merge

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ukai, wk_dir = sys.argv[1], sys.argv[2]

# Ký tự cần: mọi chữ Hán trong dữ liệu + GB2312 cấp 1 (dùng cho bảng âm tiết)
text = ''
for f in glob.glob(root + '/js/data-*.js') + glob.glob(root + '/data/*.json'):
    text += open(f, encoding='utf-8').read()
chars = {c for c in text if '一' <= c <= '鿿'}
for hi in range(0xB0, 0xD8):
    for lo in range(0xA1, 0xFF):
        try: chars.add(bytes([hi, lo]).decode('gbk'))
        except Exception: pass
chars |= set('，。！？、；：“”‘’（）《》·—…　')
print('chars', len(chars))
unis = sorted(ord(c) for c in chars)

def sub(font, out):
    opt = subset.Options(); opt.flavor = 'woff2'; opt.layout_features = []; opt.name_IDs = [1, 2, 3, 4, 6, 0, 13, 14]
    opt.notdef_outline = True; opt.hinting = False; opt.desubroutinize = True
    s = subset.Subsetter(opt); s.populate(unicodes=unis); s.subset(font)
    font.flavor = 'woff2'; font.save(out); print(out, os.path.getsize(out) // 1024, 'KB')

os.makedirs(root + '/fonts', exist_ok=True)
col = TTCollection(ukai)
f = col.fonts[0]
print('ukai:', f['name'].getDebugName(4))
sub(f, root + '/fonts/ukai-subset.woff2')

files = sorted(glob.glob(wk_dir + '/lxgwwenkai-regular-subset-*.woff2'))
print('wenkai slices', len(files))
m = merge.Merger()
wk = m.merge(files)
sub(wk, root + '/fonts/wenkai-subset.woff2')
