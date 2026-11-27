"""Dựng js/data-dialogues.js từ scripts/dialogues-h1.txt và dialogues-h2.txt.

Pinyin được sinh tự động (pypinyin + từ điển từ vựng của chính app để ghép từ, thanh nhẹ, biến điệu 不/一),
sau đó scripts/check-data.js kiểm tra lại từng câu với chữ Hán.
Chạy:  python scripts/build-dialogues.py   (cần: pip install pypinyin; node)
"""
import json, os, re, subprocess, sys, io
from pypinyin import pinyin, Style, load_phrases_dict, load_single_dict

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---------- từ điển từ vựng của app ----------
js = r"""
const fs=require('fs'),vm=require('vm'),path=require('path');
const w={LESSONS:[]};vm.createContext(w);w.window=w;
for(const f of ['data-ph','data-hsk1a','data-hsk1b','data-hsk2','data-hsk2b','data-hsk2c','data-hsk2d','data-extra'])
  vm.runInContext(fs.readFileSync(path.join(process.argv[1],'js',f+'.js'),'utf8'),w);
const out={};
for(const l of w.LESSONS)for(const v of l.vocab||[])out[v[0]]=v[1];
for(const v of w.EXTRA_WORDS||[])out[v[0]]=v[1];
console.log(JSON.stringify(out));
"""
vocab = json.loads(subprocess.check_output(['node', '-e', js, ROOT], encoding='utf-8'))
WORDS = {}
for zh, py in vocab.items():
    zh = re.sub(r'[（(].*?[）)]', '', zh)
    if '/' in zh or '…' in zh or '~' in zh or '～' in zh:
        continue
    if len(zh) >= 2 and all('一' <= c <= '鿿' for c in zh) and ' ' not in py.strip():
        WORDS[zh] = py.strip()

# tên riêng / từ bổ sung (ưu tiên hơn từ vựng)
NAMES = {
    '王一飞': "Wáng Yīfēi", '王一雪': "Wáng Yīxuě", '刘小雪': "Liú Xiǎoxuě", '刘小明': "Liú Xiǎomíng",
    '白家月': "Bái Jiāyuè", '陈天中': "Chén Tiānzhōng", '杨同乐': "Yáng Tónglè", '李文': "Lǐ Wén", '刘明': "Liú Míng",
    '安妮': "Ānnī", '小语': "Xiǎoyǔ", '小雪': "Xiǎoxuě", '小明': "Xiǎomíng", '一飞': "Yīfēi", '一雪': "Yīxuě",
    '家月': "Jiāyuè", '天中': "Tiānzhōng", '同乐': "Tónglè", '王老师': "Wáng lǎoshī", '北京大学': "Běijīng Dàxué",
    '大兴机场': "Dàxīng Jīchǎng", '颐和园': "Yíhéyuán", '西安饭店': "Xī'ān Fàndiàn", '西安': "Xī'ān",
    '北京': "Běijīng", '中国': "Zhōngguó", '法国': "Fǎguó", '泰国': "Tàiguó", '中文': "Zhōngwén", '汉语': "Hànyǔ", '汉字': "Hànzì",
    '中国人': "Zhōngguórén", '法国人': "Fǎguórén", '泰国人': "Tàiguórén", '北京人': "Běijīngrén", '中国菜': "Zhōngguó cài",
    '爷爷': "yéye", '奶奶': "nǎinai", '学生们': "xuéshengmen", '同学们': "tóngxuémen", '孩子们': "háizimen", '你们': "nǐmen",
    '我们': "wǒmen", '他们': "tāmen", '她们': "tāmen", '大家': "dàjiā", '老师': "lǎoshī", '同学': "tóngxué", '朋友': "péngyou",
    '男朋友': "nánpéngyou", '女朋友': "nǚpéngyou", '妈妈': "māma", '爸爸': "bàba", '哥哥': "gēge", '姐姐': "jiějie", '弟弟': "dìdi", '妹妹': "mèimei",
    '谢谢': "xièxie", '喜欢': "xǐhuan", '知道': "zhīdào", '觉得': "juéde", '漂亮': "piàoliang", '好看': "hǎokàn", '好吃': "hǎochī",
    '好喝': "hǎohē", '好玩儿': "hǎowánr", '好玩': "hǎowán", '没关系': "méi guānxi", '不客气': "bú kèqi", '对不起': "duìbuqǐ",
    '认识': "rènshi", '运动': "yùndòng", '舒服': "shūfu", '便宜': "piányi", '时候': "shíhou", '怎么样': "zěnmeyàng", '什么': "shénme",
    '看看': "kànkan", '试试': "shìshi", '问问': "wènwen", '洗洗': "xǐxi", '想想': "xiǎngxiang", '说说': "shuōshuo", '运动运动': "yùndòng yùndòng",
    '考完': "kǎowán", '为什么': "wèishénme", '哪国人': "nǎ guórén", '回国': "huíguó", '个子': "gèzi", '男孩儿': "nánháir", '女孩儿': "nǚháir", '小孩儿': "xiǎoháir", '女孩子': "nǚháizi", '男孩子': "nánháizi",
    '东西': "dōngxi", '星期日': "xīngqīrì", '星期天': "xīngqītiān", '星期六': "xīngqīliù", '先生': "xiānsheng", '一下': "yíxià", '一些': "yìxiē", '一起': "yìqǐ", '一个': "yí ge",
}
for zh, py in NAMES.items():
    WORDS[zh] = py
MAXLEN = max(len(w) for w in WORDS)

# ---------- pypinyin: từ điển tên riêng để đọc đúng ----------
load_phrases_dict({
    '杨同乐': [['yáng'], ['tóng'], ['lè']], '同乐': [['tóng'], ['lè']],
    '安妮': [['ān'], ['nī']], '高高兴兴地': [['gāo'], ['gāo'], ['xìng'], ['xìng'], ['de']],
    '想好了': [['xiǎng'], ['hǎo'], ['le']],
})

MARKS = {'a': 'āáǎà', 'e': 'ēéěè', 'i': 'īíǐì', 'o': 'ōóǒò', 'u': 'ūúǔù', 'ü': 'ǖǘǚǜ'}


def mark(syl):
    """lǎo3 -> lǎo ; 'ma5' -> 'ma'"""
    m = re.fullmatch(r'([a-zü]+?)([1-5]?)', syl)
    if not m:
        return syl
    base, t = m.group(1), m.group(2)
    if not t or t == '5':
        return base
    t = int(t) - 1
    for key in ('a', 'e'):
        if key in base:
            return base.replace(key, MARKS[key][t], 1)
    if 'ou' in base:
        return base.replace('o', MARKS['o'][t], 1)
    for i in range(len(base) - 1, -1, -1):
        if base[i] in MARKS:
            return base[:i] + MARKS[base[i]][t] + base[i + 1:]
    return base


PUNCT = {'，': ',', '。': '.', '！': '!', '？': '?', '、': ',', '：': ':', '；': ';', '“': '“', '”': '”', '…': '…', '……': '…'}
HAN = lambda c: '一' <= c <= '鿿'


def syllables(text):
    """Trả về list (ký tự, âm tiết có số thanh) cho từng chữ Hán, kèm biến điệu 不/一."""
    chars = list(text)
    raw = pinyin(text, style=Style.TONE3, v_to_u=True, neutral_tone_with_five=True, errors='ignore')
    out, k = [], 0
    for c in chars:
        if HAN(c):
            out.append([c, raw[k][0]])
            k += 1
        else:
            out.append([c, None])
    # biến điệu 不 / 一
    for i, (c, s) in enumerate(out):
        if c not in '不一' or s is None:
            continue
        nxt = out[i + 1][1] if i + 1 < len(out) else None
        prev = out[i - 1][0] if i > 0 else ''
        nt = int(nxt[-1]) if nxt and nxt[-1].isdigit() else 5
        if c == '不':
            if nt == 4:
                out[i][1] = 'bu2'
        else:
            if prev in '第星期' or nxt is None or prev in '十二三四五六七八九零':
                out[i][1] = 'yi1'
            elif nt == 4:
                out[i][1] = 'yi2'
            else:
                out[i][1] = 'yi4'
    return out


def convert(text):
    out = syllables(text)
    # chữ 儿: erhua gộp vào âm trước
    res = []  # list of tokens: (type, str)
    i, n = 0, len(out)
    while i < n:
        c = out[i][0]
        if not HAN(c):
            res.append(('p', PUNCT.get(c, c)))
            i += 1
            continue
        # khớp từ dài nhất
        matched = None
        for L in range(min(MAXLEN, n - i), 1, -1):
            w = text[i:i + L]
            if w in WORDS and all(HAN(ch) for ch in w):
                matched = (w, WORDS[w])
                break
        if matched:
            res.append(('w', matched[1]))
            i += len(matched[0])
            continue
        s = out[i][1]
        if c == '谁':
            s = 'shei2'
        if c == '都':
            s = 'dou1'
        if c == '只' and not (i + 1 < n and out[i + 1][0] in '有是要好能'):
            s = 'zhi1'
        if c == '不' and 0 < i < n - 1 and out[i - 1][0] == out[i + 1][0] and HAN(out[i - 1][0]):
            s = 'bu5'
        if c == '个' and not (i + 1 < n and out[i + 1][0] in '子人别'):
            s = 'ge5'
        if c == '过' and i > 0 and out[i - 1][0] in '来去没吃喝穿说看学到买住' and not (i + 1 < n and out[i + 1][0] in '去来'):
            s = 'guo5'
        if c == '儿' and i > 0 and HAN(out[i - 1][0]) and out[i - 1][0] != '女' and not (i + 1 < n and out[i + 1][0] == '子'):
            res.append(('r', 'r'))
        else:
            res.append(('w', mark(s)))
        i += 1
    # ghép
    s = ''
    for typ, t in res:
        if typ == 'p':
            s += t
        elif typ == 'r':
            s += t
        else:
            if s and not s.endswith(('“', '(')) :
                s += ' '
            s += t
    s = re.sub(r'\s+([,.!?:;…”])', r'\1', s)
    s = re.sub(r'([,.!?:;…])(?=[^\s”])', r'\1 ', s).strip()
    s = re.sub(r'\s{2,}', ' ', s)
    # viết hoa đầu câu
    def cap(m):
        return m.group(1) + m.group(2).upper()
    s = re.sub(r'(^|[.!?…]\s+|“)([a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü])', cap, s)
    return s


def py_name(zh):
    if zh in NAMES:
        return NAMES[zh]
    r = convert(zh)
    return r[0].lower() + r[1:] if False else r


# ---------- đọc nguồn ----------
data = {}
order = []
for fn in ('dialogues-h1.txt', 'dialogues-h2.txt'):
    cur, sec = None, None
    with open(os.path.join(ROOT, 'scripts', fn), encoding='utf-8') as f:
        for ln in f:
            ln = ln.rstrip('\n')
            if not ln.strip() or ln.startswith('# Nguồn') or ln.startswith("# '@id'"):
                continue
            if ln.startswith('@'):
                cur = ln[1:].strip()
                data[cur] = []
                order.append(cur)
                continue
            if ln.startswith('# '):
                sec = {'t': ln[2:].strip(), 'l': []}
                data[cur].append(sec)
                continue
            who, zh, vi = ln.split('|', 2)
            sec['l'].append([who, py_name(who), zh, convert(zh), vi])

out = 'window.DIALOGUES = ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n'
header = '/* Hội thoại (课文) của từng bài — sinh bởi scripts/build-dialogues.py từ scripts/dialogues-h*.txt. Đừng sửa tay. */\n'
with open(os.path.join(ROOT, 'js', 'data-dialogues.js'), 'w', encoding='utf-8') as f:
    f.write(header + out)
n_sec = sum(len(v) for v in data.values())
n_line = sum(len(s['l']) for v in data.values() for s in v)
print('Đã ghi js/data-dialogues.js:', len(data), 'bài,', n_sec, 'đoạn,', n_line, 'câu')
