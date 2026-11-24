/* Dữ liệu: Phát âm (Buổi 1–3). Mỗi bài theo 6 phần: vocab, pron, writing, grammar, read, quiz. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "ph1", level: "PH", n: 1,
    zh: "Phát âm · Buổi 1", vi: "Thanh mẫu, vận mẫu và thanh điệu",
    src: "01. HSK1 - BUỔI 1 (PHÁT ÂM) (1).pptx",
    pron: [
      "Mỗi âm tiết pinyin gồm 3 phần: thanh mẫu (phụ âm đầu) + vận mẫu (phần vần) + thanh điệu.",
      "Bốn thanh điệu: thanh 1 ¯ cao và đều; thanh 2 ´ lên; thanh 3 ˇ xuống rồi lên; thanh 4 ` xuống dứt khoát.",
      "Cặp b/p, d/t, g/k: âm thứ hai (p, t, k) bật hơi mạnh hơn âm thứ nhất (b, d, g). Đặt tay trước miệng để cảm nhận hơi."
    ],
    writing: [
      { zh: "ā á ǎ à", py: "Thanh 1–4 trên a", note: "Đặt dấu thanh: ưu tiên nguyên âm a, rồi o, rồi e. Nếu có i và u thì đặt dấu lên nguyên âm đứng sau (guì, liù)." }
    ],
    vocab: [
      ["妈", "mā", "thanh 1", "mẹ"],
      ["麻", "má", "thanh 2", "cây gai"],
      ["马", "mǎ", "thanh 3", "ngựa"],
      ["骂", "mà", "thanh 4", "mắng"],
      ["八", "bā", "số", "tám"],
      ["四", "sì", "số", "bốn"]
    ],
    grammar: [
      { t: "Cấu trúc âm tiết", f: "Thanh mẫu + Vận mẫu + Thanh điệu",
        e: "Ví dụ bā = b (thanh mẫu) + a (vận mẫu) + thanh 1.",
        ex: [["八", "bā", "tám"], ["马", "mǎ", "ngựa"]] },
      { t: "Vận mẫu đơn", f: "a · o · e · i · u · ü",
        e: "Khi đứng một mình: i → yi, u → wu, ü → yu.",
        ex: [["一", "yī", "một"], ["五", "wǔ", "năm"], ["鱼", "yú", "cá"]] }
    ],
    read: [
      { zh: "mā mà mǎ", py: "mā mà mǎ", vi: "Mẹ mắng ngựa", note: "Luyện ba thanh điệu liên tiếp, giữ nhịp đều." },
      { zh: "bā bá bǎ bà", py: "bā bá bǎ bà", vi: "Bốn thanh với b", note: "Chỉ đổi thanh điệu, giữ nguyên thanh mẫu và vận mẫu." }
    ],
    quiz: [
      { q: "Dấu thanh nào là thanh 2?", o: ["ā", "á", "ǎ", "à"], a: 1, exp: "Dấu sắc ´ là thanh 2, giọng đi lên." },
      { q: "“mǎ” có nghĩa là gì?", o: ["mẹ", "cây gai", "ngựa", "mắng"], a: 2, exp: "马 mǎ = ngựa (thanh 3)." }
    ]
  },
  {
    id: "ph2", level: "PH", n: 2,
    zh: "Phát âm · Buổi 2", vi: "j q x, ü, biến điệu 不, nét chữ Hán",
    src: "02. HSK1 - BUỔI 2 (PHÁT ÂM).pptx",
    pron: [
      "j, q, x là phụ âm mặt lưỡi: đặt đầu lưỡi sau răng dưới, phát âm phẳng và hơi “rít”. Khác với z, c, s.",
      "ü đọc như u nhưng môi tròn và lưỡi ở vị trí của i. Sau j, q, x viết ü thành u: jū, qū, xū (đọc là ü).",
      "不 vốn đọc bù. Khi đứng trước thanh 4 đọc bú: bú qù (không đi). Trước thanh 1, 2, 3 vẫn đọc bù: bù hǎo (không tốt)."
    ],
    writing: [
      { zh: "一 丨 丿 丶", py: "Các nét cơ bản", note: "Ngang (一), sổ (丨), phẩy (丿), chấm (丶)." },
      { zh: "Bút thuận", py: "Quy tắc viết", note: "Viết từ trên xuống, trái sang phải. Ngang trước sổ sau; phẩy trái trước mác phải sau." }
    ],
    vocab: [
      ["鸡", "jī", "danh", "con gà"],
      ["七", "qī", "số", "bảy"],
      ["西", "xī", "danh", "hướng tây"],
      ["去", "qù", "động", "đi"],
      ["学", "xué", "động", "học"],
      ["雨", "yǔ", "danh", "mưa"],
      ["居", "jū", "động", "cư trú, ở"]
    ],
    grammar: [
      { t: "Quy tắc viết ü", f: "j / q / x + ü → viết thành j / q / x + u",
        e: "Viết ju, qu, xu nhưng đọc là ü. Không viết jǖ hay xǖ.",
        ex: [["居", "jū", "ở"], ["学", "xué", "học"], ["需要", "xūyào", "cần"]] },
      { t: "Biến điệu của 不", f: "不 + thanh 1/2/3 → bù · 不 + thanh 4 → bú",
        e: "Nghe thanh điệu của chữ sau để quyết định cách đọc 不.",
        ex: [["不喝", "bù hē", "không uống"], ["不去", "bú qù", "không đi"]] }
    ],
    read: [
      { zh: "你学不学？", py: "Nǐ xué bu xué?", vi: "Bạn có học không?", note: "Câu hỏi lặp động từ: 学不学 = học hay không." },
      { zh: "我不去。", py: "Wǒ bú qù.", vi: "Tôi không đi.", note: "不 đứng trước 去 (thanh 4) nên đọc bú." },
      { zh: "我们学汉语。", py: "Wǒmen xué Hànyǔ.", vi: "Chúng tôi học tiếng Hán.", note: "我们 = chúng tôi. Hàn 汉 là chữ Hán." }
    ],
    quiz: [
      { q: "Trong “xū”, ü được viết thành chữ nào?", o: ["xü", "xu", "xǖ", "xv"], a: 1, exp: "Sau j, q, x viết ü thành u." },
      { q: "不 đọc thế nào khi đứng trước 去 (thanh 4)?", o: ["bù", "bú", "bu", "bǔ"], a: 1, exp: "Trước thanh 4, 不 đọc bú." }
    ]
  },
  {
    id: "ph3", level: "PH", n: 3,
    zh: "Phát âm · Buổi 3", vi: "z c s, zh ch sh r, er, biến điệu 一",
    src: "03. HSK1 - BUỔI 3 (PHÁT ÂM).pptx",
    pron: [
      "z, c, s: đầu lưỡi đặt sau răng cửa trên, phát âm phẳng (zì, cí, sì).",
      "zh, ch, sh, r: đầu lưỡi cong lên vòm cứng (zhī, chī, shī, rì). Phân biệt cặp “sì” và “shí”.",
      "er là vận mẫu cuốn lưỡi: lưỡi cong lên khi phát âm (èr, ér)."
    ],
    writing: [
      { zh: "这", py: "zhè", note: "Gồm bộ 辶 (chỉ sự di chuyển) và phần 文. Viết theo thứ tự bút thuận: trên trước, dưới sau." },
      { zh: "是", py: "shì", note: "Bộ 日 phía trên, phần 疋 bên dưới." }
    ],
    vocab: [
      ["四", "sì", "số", "bốn"],
      ["十", "shí", "số", "mười"],
      ["二", "èr", "số", "hai"],
      ["这", "zhè", "đại từ", "này, đây"],
      ["是", "shì", "động", "là"],
      ["日", "rì", "danh", "ngày, mặt trời"],
      ["中", "zhōng", "danh", "giữa, Trung"],
      ["字", "zì", "danh", "chữ"],
      ["词", "cí", "danh", "từ"]
    ],
    grammar: [
      { t: "Biến điệu của 一", f: "一 + thanh 1/2/3 → yì · 一 + thanh 4 → yí",
        e: "Số 一 đổi thanh điệu theo chữ đứng sau.",
        ex: [["一年", "yì nián", "một năm"], ["一个", "yí gè", "một cái"]] },
      { t: "er — vận mẫu cuốn lưỡi", f: "er",
        e: "Cuốn lưỡi khi đọc. Gặp trong 二 (èr) và 儿 (ér).",
        ex: [["二", "èr", "hai"], ["儿", "ér", "con, nhi (hậu tố)"]] }
    ],
    read: [
      { zh: "我是中国人。", py: "Wǒ shì Zhōngguó rén.", vi: "Tôi là người Trung Quốc.", note: "Chú ý zh trong 中 và sh trong 是." },
      { zh: "十四", py: "shísì", vi: "Mười bốn", note: "sh + ì rồi s + ì: hai âm khác nhau, đọc tách rõ." }
    ],
    quiz: [
      { q: "Thanh mẫu nào là âm cuốn lưỡi?", o: ["z", "c", "s", "zh"], a: 3, exp: "zh, ch, sh, r là nhóm đầu lưỡi cong." },
      { q: "一 trong “一个” đọc là?", o: ["yī", "yì", "yí", "yǐ"], a: 2, exp: "一 đứng trước thanh 4 (个 gè) đọc yí." }
    ]
  }
]);
