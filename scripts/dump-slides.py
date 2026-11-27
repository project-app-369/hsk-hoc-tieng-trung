"""In văn bản từng slide của một file pptx, kèm vị trí (y,x) của khung chữ.
python scripts/dump-slides.py <file.pptx> [độ dài tối đa] [--pos] [--only-khoa]"""
import zipfile, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
args = [a for a in sys.argv[1:] if not a.startswith('--')]
pos = '--pos' in sys.argv
only = '--only-khoa' in sys.argv
z = zipfile.ZipFile(args[0])
lim = int(args[1]) if len(args) > 1 else 400
ns = sorted([n for n in z.namelist() if re.match(r'ppt/slides/slide\d+\.xml$', n)], key=lambda n: int(re.findall(r'\d+', n)[0]))
for n in ns:
    x = z.read(n).decode('utf8')
    items = []
    for sp in re.findall(r'<p:sp>.*?</p:sp>|<p:sp .*?</p:sp>', x, flags=re.S):
        m = re.search(r'<a:off x="(-?\d+)" y="(-?\d+)"', sp)
        ox, oy = (int(m.group(1)), int(m.group(2))) if m else (0, 0)
        paras = []
        for pp in re.findall(r'<a:p>.*?</a:p>|<a:p .*?</a:p>', sp, flags=re.S):
            t = ''.join(re.findall(r'<a:t>([^<]*)</a:t>', pp))
            if t.strip():
                paras.append(t.strip())
        if paras:
            items.append((oy, ox, ' / '.join(paras)))
    flat = ' '.join(i[2] for i in items)
    if only and not re.search(r'Bài\s*[Kk]hóa', flat):
        continue
    if only and 'New Words' in flat:
        continue
    if pos:
        items.sort()
        print('--', n.split('/')[-1])
        for oy, ox, t in items:
            print('   y=%d x=%d  %s' % (oy // 10000, ox // 10000, t[:lim]))
    else:
        print('--', n.split('/')[-1], ' | '.join(i[2] for i in items)[:lim])
