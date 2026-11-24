/* Dữ liệu: Phát âm (Buổi 1–3). Trọng tâm: luyện âm, nét cơ bản, thứ tự nét. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "ph1", level: "PH", n: 1,
    zh: "Phát âm · Buổi 1", vi: "Thanh mẫu, vận mẫu và thanh điệu",
    src: "01. HSK1 - BUỔI 1 (PHÁT ÂM) (1).pptx",
    pron: [
      "Mỗi âm tiết pinyin gồm 3 phần: thanh mẫu (phụ âm đầu) + vận mẫu (phần vần) + thanh điệu.",
      "Bốn thanh điệu: thanh 1 ¯ cao và đều; thanh 2 ´ lên; thanh 3 ˇ xuống rồi lên; thanh 4 ` xuống dứt khoát.",
      "Cặp b/p, d/t, g/k: âm thứ hai (p, t, k) bật hơi mạnh hơn âm thứ nhất (b, d, g). Đặt tay trước miệng để cảm nhận hơi.",
      "Đặt dấu thanh: ưu tiên nguyên âm a, rồi o, rồi e. Nếu có i và u, đặt dấu lên nguyên âm đứng sau (guì, liù)."
    ],
    sound: {
      inits: ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h"],
      finals: ["a", "o", "e", "i", "u", "ü", "ai", "ei", "ao", "ou", "an", "en", "ang", "eng", "ong"],
      tones: true,
      rules: [["i", "yi"], ["u", "wu"], ["ü", "yu"]],
      ruleNote: "Khi vận mẫu i, u, ü đứng một mình (không có thanh mẫu) thì viết lại thành yi, wu, yu."
    },
    drill: [
      { title: "Thanh mẫu b · p · m · f", note: "Đọc từng cột, giữ nguyên vận mẫu a, đổi thanh điệu.", items: ["bā", "bá", "bǎ", "bà", "pā", "pá", "pǎ", "pà", "mā", "má", "mǎ", "mà", "fā", "fá", "fǎ", "fà"] },
      { title: "Thanh mẫu d · t · n · l", note: "d/t là cặp bật hơi; n/l khác nhau ở vị trí lưỡi.", items: ["dā", "dá", "tā", "tá", "nā", "ná", "lā", "lá", "nǐ", "lǐ", "dǐ", "tǐ"] },
      { title: "Vận mẫu đơn", note: "Khi đứng một mình: i → yi, u → wu, ü → yu.", items: ["ā", "ō", "ē", "yī", "wū", "yú"] }
    ],
    strokes: [
      { name: "横", py: "héng", vi: "Ngang: đi từ trái sang phải, hơi nghiêng nhẹ.", d: "M8 24 L40 24", icon: "M6 24 L42 24" },
      { name: "竖", py: "shù", vi: "Sổ: đi từ trên xuống, thẳng đứng.", d: "M24 6 L24 42", icon: "M24 6 L24 42" },
      { name: "点", py: "diǎn", vi: "Chấm: ngắn, nhấn xuống rồi nhấc lên.", d: "M18 18 L26 26", icon: "M16 16 L28 28" }
    ],
    chars: [
      { zh: "十", py: "shí", vi: "mười", note: "Viết ngang trước, rồi sổ.", strokes: [
        { name: "横", d: "M20 50 L80 50" }, { name: "竖", d: "M50 14 L50 86" } ] },
      { zh: "二", py: "èr", vi: "hai", note: "Hai nét ngang: nét dưới dài hơn.", strokes: [
        { name: "横", d: "M22 36 L78 36" }, { name: "横", d: "M16 66 L84 66" } ] },
      { zh: "三", py: "sān", vi: "ba", note: "Ba nét ngang, viết từ trên xuống, cách đều.", strokes: [
        { name: "横", d: "M20 28 L80 28" }, { name: "横", d: "M18 50 L82 50" }, { name: "横", d: "M16 72 L84 72" } ] }
    ],
    read: [
      { zh: "mā mà mǎ", py: "mā mà mǎ", vi: "Mẹ mắng ngựa", note: "Ba thanh điệu liên tiếp, giữ nhịp đều." },
      { zh: "bā bá bǎ bà", py: "bā bá bǎ bà", vi: "Bốn thanh với b", note: "Chỉ đổi thanh điệu, giữ nguyên thanh mẫu và vận mẫu." }
    ],
    grammar: [
      { t: "Cấu trúc âm tiết", f: "Thanh mẫu + Vận mẫu + Thanh điệu",
        e: "Ví dụ bā = b (thanh mẫu) + a (vận mẫu) + thanh 1.",
        ex: [["八", "bā", "tám"], ["马", "mǎ", "ngựa"]] }
    ],
    quiz: [
      { q: "Dấu thanh nào là thanh 2?", o: ["ā", "á", "ǎ", "à"], a: 1, exp: "Dấu sắc ´ là thanh 2, giọng đi lên." },
      { q: "Thứ tự nét đúng khi viết 三 là:", o: ["Sổ trước, ngang sau", "Ba nét ngang, từ trên xuống", "Chấm trước, ngang sau", "Ngang dài trước"], a: 1, exp: "三 gồm ba nét ngang, viết từ trên xuống." }
    ]
  },
  {
    id: "ph2", level: "PH", n: 2,
    zh: "Phát âm · Buổi 2", vi: "j q x, ü, biến điệu 不, nét cơ bản",
    src: "02. HSK1 - BUỔI 2 (PHÁT ÂM).pptx",
    pron: [
      "j, q, x là phụ âm mặt lưỡi: đặt đầu lưỡi sau răng dưới, phát âm phẳng. Khác với z, c, s.",
      "ü đọc như u nhưng môi tròn và lưỡi ở vị trí của i. Sau j, q, x viết ü thành u: jū, qū, xū (vẫn đọc là ü).",
      "不 vốn đọc bù. Trước thanh 4 đọc bú: bú qù (không đi). Trước thanh 1, 2, 3 vẫn đọc bù: bù hǎo (không tốt)."
    ],
    sound: {
      inits: ["j", "q", "x"],
      finals: ["ia", "ie", "iao", "iu", "ian", "in", "iang", "ing", "iong", "üe", "üan", "ün"],
      tones: false,
      rules: [["ia", "ya"], ["ie", "ye"], ["iao", "yao"], ["iou", "you · iu"], ["ian", "yan"], ["in", "yin"], ["iang", "yang"], ["ing", "ying"], ["iong", "yong"], ["üe", "yue"], ["üan", "yuan"], ["ün", "yun"], ["j q x + ü", "ju qu xu"]],
      ruleNote: "Vận mẫu bắt đầu bằng i hoặc ü: không có thanh mẫu thì đổi i→y, ü→yu. Sau j, q, x thì bỏ hai chấm của ü."
    },
    drill: [
      { title: "j · q · x + ü", note: "Viết u nhưng đọc ü.", items: ["jū", "jú", "jǔ", "jù", "qū", "qú", "qǔ", "qù", "xū", "xú", "xǔ", "xù"] },
      { title: "j · q · x + i và ia / ie / iao", note: "Âm mặt lưỡi kết hợp với các vần có i.", items: ["jī", "qī", "xī", "jiā", "qié", "xiǎo", "jiǔ", "qiān", "xīn", "jiāng"] },
      { title: "Biến điệu của 不", note: "Nghe thanh điệu của chữ sau.", items: ["bù hē", "bù nán", "bù hǎo", "bú qù", "bù gāo", "bú xì"] }
    ],
    strokes: [
      { name: "撇", py: "piě", vi: "Phẩy: đi từ trên phải xuống dưới trái, nét mảnh dần.", d: "M32 8 L10 40", icon: "M32 8 L10 40" },
      { name: "捺", py: "nà", vi: "Mác: đi từ trên trái xuống dưới phải, nét dần đậm rồi nhấc.", d: "M12 8 L38 40", icon: "M12 8 L38 40" }
    ],
    chars: [
      { zh: "人", py: "rén", vi: "người", note: "Phẩy trước, mác sau.", strokes: [
        { name: "撇", d: "M52 14 L24 86" }, { name: "捺", d: "M52 30 L80 86" } ] },
      { zh: "大", py: "dà", vi: "lớn", note: "Ngang trước, phẩy rồi mác.", strokes: [
        { name: "横", d: "M16 38 L84 38" }, { name: "撇", d: "M50 16 L22 84" }, { name: "捺", d: "M52 40 L82 84" } ] },
      { zh: "八", py: "bā", vi: "tám", note: "Hai nét: phẩy bên trái và mác bên phải, cùng xuất phát từ một điểm.", strokes: [
        { name: "撇", d: "M48 18 L20 84" }, { name: "捺", d: "M52 18 L80 84" } ] }
    ],
    read: [
      { zh: "你学不学？", py: "Nǐ xué bu xué?", vi: "Bạn có học không?", note: "Câu hỏi lặp động từ: 学不学 = học hay không." },
      { zh: "我不去。", py: "Wǒ bú qù.", vi: "Tôi không đi.", note: "不 đứng trước 去 (thanh 4) nên đọc bú." },
      { zh: "我们学汉语。", py: "Wǒmen xué Hànyǔ.", vi: "Chúng tôi học tiếng Hán.", note: "我们 = chúng tôi. Hàn 汉 là chữ Hán." }
    ],
    grammar: [
      { t: "Quy tắc viết ü", f: "j / q / x + ü → viết thành j / q / x + u",
        e: "Viết ju, qu, xu nhưng đọc là ü. Không viết jǖ hay xǖ.",
        ex: [["居", "jū", "ở"], ["学", "xué", "học"], ["需要", "xūyào", "cần"]] }
    ],
    quiz: [
      { q: "Trong “xū”, ü được viết thành chữ nào?", o: ["xü", "xu", "xǖ", "xv"], a: 1, exp: "Sau j, q, x viết ü thành u." },
      { q: "Nét 撇 đi theo hướng nào?", o: ["Từ trái sang phải", "Từ trên phải xuống dưới trái", "Từ dưới lên trên", "Thẳng đứng"], a: 1, exp: "撇 là phẩy: đi xuống bên trái." }
    ]
  },
  {
    id: "ph3", level: "PH", n: 3,
    zh: "Phát âm · Buổi 3", vi: "z c s, zh ch sh r, er, nét gập",
    src: "03. HSK1 - BUỔI 3 (PHÁT ÂM).pptx",
    pron: [
      "z, c, s: đầu lưỡi đặt sau răng cửa trên, phát âm phẳng (zì, cí, sì).",
      "zh, ch, sh, r: đầu lưỡi cong lên vòm cứng (zhī, chī, shī, rì). Phân biệt cặp “sì” và “shí”.",
      "er là vận mẫu cuốn lưỡi: lưỡi cong lên khi phát âm (èr, ér).",
      "一 đọc yì trước thanh 1, 2, 3 (yì bān) và đọc yí trước thanh 4 (yí gè)."
    ],
    sound: {
      inits: ["z", "c", "s", "zh", "ch", "sh", "r"],
      finals: ["-i", "ua", "uo", "uai", "ui", "uan", "un", "uang", "ueng", "er"],
      tones: false,
      rules: [["ua", "wa"], ["uo", "wo"], ["uai", "wai"], ["uei", "wei · ui"], ["uan", "wan"], ["uen", "wen · un"], ["uang", "wang"], ["ueng", "weng"], ["er", "er (cuốn lưỡi)"]],
      ruleNote: "Vận mẫu bắt đầu bằng u: không có thanh mẫu thì đổi u→w. Có thanh mẫu thì uei viết ui, uen viết un. -i chỉ đi với z c s zh ch sh r."
    },
    drill: [
      { title: "z · c · s", note: "Đầu lưỡi phẳng, sau răng cửa.", items: ["zā", "cā", "sā", "zī", "cī", "sī", "zì", "cí", "sì", "zǎn", "cān", "sān"] },
      { title: "zh · ch · sh · r", note: "Đầu lưỡi cong lên vòm cứng.", items: ["zhī", "chī", "shī", "rì", "zhàn", "chǎn", "shān", "rán", "zhè", "chè", "shì", "rè"] },
      { title: "er", note: "Cuốn lưỡi, không kéo dài thành hai âm.", items: ["èr", "ér", "ěr", "ér"] }
    ],
    strokes: [
      { name: "折", py: "zhé", vi: "Gập: đi ngang rồi đổi hướng xuống, góc gập gọn.", d: "M8 16 L40 16 L40 40", icon: "M8 16 L40 16 L40 40" },
      { name: "竖", py: "shù", vi: "Sổ: đi từ trên xuống, thẳng đứng, nét đều.", d: "M24 6 L24 42", icon: "M24 6 L24 42" }
    ],
    chars: [
      { zh: "口", py: "kǒu", vi: "miệng", note: "Sổ bên trái, gập ngang rồi sổ bên phải, cuối cùng ngang đáy.", strokes: [
        { name: "竖", d: "M30 20 L30 82" }, { name: "折", d: "M30 20 L74 20 L74 82" }, { name: "横", d: "M30 82 L74 82" } ] },
      { zh: "日", py: "rì", vi: "mặt trời, ngày", note: "Sổ, gập, rồi ngang giữa. Ngang giữa ngắn hơn ngang đáy của 口.", strokes: [
        { name: "竖", d: "M30 16 L30 84" }, { name: "折", d: "M30 16 L72 16 L72 84" }, { name: "横", d: "M30 50 L72 50" } ] }
    ],
    read: [
      { zh: "我是中国人。", py: "Wǒ shì Zhōngguó rén.", vi: "Tôi là người Trung Quốc.", note: "Chú ý zh trong 中 và sh trong 是." },
      { zh: "十四", py: "shísì", vi: "Mười bốn", note: "sh + ì rồi s + ì: hai âm khác nhau, đọc tách rõ." }
    ],
    grammar: [
      { t: "Biến điệu của 一", f: "一 + thanh 1/2/3 → yì · 一 + thanh 4 → yí",
        e: "Số 一 đổi thanh điệu theo chữ đứng sau.",
        ex: [["一年", "yì nián", "một năm"], ["一个", "yí gè", "một cái"]] }
    ],
    quiz: [
      { q: "Thanh mẫu nào là âm cuốn lưỡi?", o: ["z", "c", "s", "zh"], a: 3, exp: "zh, ch, sh, r là nhóm đầu lưỡi cong." },
      { q: "Trong chữ 口, nét gập được viết ở đâu?", o: ["Nét đầu tiên", "Nét thứ hai, ngang rồi sổ xuống", "Nét cuối cùng", "Nét chấm giữa"], a: 1, exp: "Nét thứ hai là 折: ngang ở trên, rồi sổ xuống bên phải." }
    ]
  }
]);
