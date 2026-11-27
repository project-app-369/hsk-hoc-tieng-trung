"""Liệt kê các slide hội thoại (Bài khóa có tên người nói) của mọi bài: python scripts/dump-dialogues.py <thư mục pptx> [mẫu tên file]"""
import zipfile, re, sys, io, glob, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
NAMES = ['王一飞','王一雪','小语','李文','白家月','安妮','陈天中','杨同乐','刘明','售货员','学生们','老师','大家','服务员','王老师','朋友','妈妈','爸爸','同学','医生','司机','小明','小雪','刘老师']
d = sys.argv[1]; pat = sys.argv[2] if len(sys.argv) > 2 else 'HSK*.pptx'
for f in sorted(glob.glob(os.path.join(d, pat))):
    if os.path.basename(f).startswith('~$'): continue
    z = zipfile.ZipFile(f)
    ns = sorted([n for n in z.namelist() if re.match(r'ppt/slides/slide\d+\.xml$', n)], key=lambda n: int(re.findall(r'\d+', n)[0]))
    print('=====', os.path.basename(f))
    for n in ns:
        x = z.read(n).decode('utf8')
        items = []
        for sp in re.findall(r'<p:sp>.*?</p:sp>|<p:sp .*?</p:sp>', x, flags=re.S):
            m = re.search(r'<a:off x="(-?\d+)" y="(-?\d+)"', sp)
            oy = int(m.group(2)) // 10000 if m else 0
            paras = []
            for pp in re.findall(r'<a:p>.*?</a:p>|<a:p .*?</a:p>', sp, flags=re.S):
                t = ''.join(re.findall(r'<a:t>([^<]*)</a:t>', pp)).strip()
                if t: paras.append(t)
            if paras: items.append((oy, ' / '.join(paras)))
        flat = ' '.join(i[1] for i in items)
        if not re.search(r'Bài\s*[Kk]hóa', flat) or '分角色' in flat or 'Đọc' in flat or 'New Words' in flat: continue
        spk = sum(1 for _, t in items if re.fullmatch(r'.*/\s*(%s)\s*' % '|'.join(NAMES), re.sub(r'\s+', '', t) if False else t.replace(' ', '')))
        if spk < 2: continue
        print('--', n.split('/')[-1])
        has_pos = any(y for y, _ in items)
        its = sorted(items, key=lambda i: i[0]) if has_pos else items
        for y, t in its:
            if re.fullmatch(r'(生 词|语 法|课 文|Bài [Kk]hóa \d)', t.strip()): continue
            print('  ', y if y else '.', t[:700])
