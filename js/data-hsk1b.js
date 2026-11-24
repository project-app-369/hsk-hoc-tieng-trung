/* Dữ liệu: HSK 1, bài 9–15. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "h1-09", level: "HSK1", n: 9,
    zh: "我明天上午在学校学习", vi: "Sáng mai tôi học ở trường",
    src: "HSK 1 3.0 BÀI 9 我明天 上午在学校学习.pptx",
    pron: [
      "前边 qiánbian: 边 đọc nhẹ thành bian, không có dấu thanh.",
      "学习 xuéxí: hai thanh 2 liền nhau, đọc xuéxí nhẹ và ngắn ở chữ sau."
    ],
    writing: [
      { zh: "明", py: "míng", note: "Bộ 日 (mặt trời) bên trái, 月 (trăng) bên phải: sáng vì có ánh sáng ngày và đêm." },
      { zh: "学", py: "xué", note: "Bộ 子 (con) ở dưới, phần 冖 ở trên." }
    ],
    vocab: [
      ["明天", "míngtiān", "danh", "ngày mai"],
      ["上午", "shàngwǔ", "danh", "buổi sáng"],
      ["在", "zài", "giới từ", "ở, tại"],
      ["学校", "xuéxiào", "danh", "trường học"],
      ["学习", "xuéxí", "động", "học tập"],
      ["前边", "qiánbian", "danh", "phía trước"],
      ["外边", "wàibian", "danh", "bên ngoài"],
      ["里边", "lǐbian", "danh", "bên trong"],
      ["上边", "shàngbian", "danh", "phía trên"],
      ["白天", "báitiān", "danh", "ban ngày"],
      ["晚上", "wǎnshang", "danh", "buổi tối"],
      ["读书", "dúshū", "động", "đọc sách"],
      ["唱歌", "chànggē", "động", "hát"],
      ["和", "hé", "liên từ", "và, cùng"],
      ["朋友", "péngyou", "danh", "bạn bè"],
      ["椅子", "yǐzi", "danh", "cái ghế"],
      ["那个", "nàge", "đại từ", "cái đó, cái kia"],
      ["本", "běn", "lượng từ", "quyển (sách)"],
      ["好听", "hǎotīng", "tính từ", "hay, dễ nghe"]
    ],
    grammar: [
      { t: "Phương vị với 边", f: "前边 · 外边 · 里边 · 上边",
        e: "Hậu tố 边 (bên) ghép với vị trí để chỉ phương hướng.",
        ex: [["学校前边有一个书店。", "Xuéxiào qiánbian yǒu yí ge shūdiàn.", "Phía trước trường có một hiệu sách."]] },
      { t: "Trật tự câu: thời gian → nơi chốn → hành động", f: "时间 + 在 + nơi chốn + động từ",
        e: "Đặt trạng ngữ thời gian lên đầu, sau đó đến nơi chốn, rồi đến động từ.",
        ex: [["我明天上午在学校学习。", "Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.", "Sáng mai tôi học ở trường."]] }
    ],
    read: [
      { zh: "我下午在家里看书，晚上和朋友去外边吃饭。", py: "Wǒ xiàwǔ zài jiālǐ kàn shū, wǎnshang hé péngyou qù wàibian chīfàn.", vi: "Chiều tôi đọc sách ở nhà, tối đi ăn ngoài cùng bạn.", note: "在家里 = ở trong nhà; 去外边 = đi ra ngoài." },
      { zh: "白天我在学校，晚上我在家。", py: "Báitiān wǒ zài xuéxiào, wǎnshang wǒ zài jiā.", vi: "Ban ngày tôi ở trường, buổi tối ở nhà.", note: "Đối lập 白天 / 晚上." }
    ],
    quiz: [
      { q: "“Bên ngoài” là:", o: ["前边", "外边", "里边", "上边"], a: 1, exp: "外边 wàibian = bên ngoài." },
      { q: "Trật tự đúng của câu “Sáng mai tôi học ở trường”:", o: ["我在学校明天学习", "我明天在学校学习", "我学习明天在学校", "在学校我明天学习"], a: 1, exp: "Thời gian (明天) → nơi chốn (在学校) → động từ (学习)." }
    ]
  },
  {
    id: "h1-10", level: "HSK1", n: 10,
    zh: "这儿的苹果真便宜！", vi: "Táo ở đây thật rẻ!",
    src: "HSK 1 3.0 BÀI 10 这儿的苹果真便宜！.pptx",
    pron: [
      "这儿 zhèr: r cuốn lưỡi nhẹ ở cuối, thường nói thành zhèr.",
      "便宜 piányi: chữ sau là thanh nhẹ."
    ],
    writing: [
      { zh: "苹", py: "píng", note: "Bộ 艹 (cỏ) bên trên, 平 bên dưới." },
      { zh: "宜", py: "yí", note: "Bộ 宀 (mái nhà) bên trên, 且 bên dưới." }
    ],
    vocab: [
      ["苹果", "píngguǒ", "danh", "quả táo"],
      ["水果", "shuǐguǒ", "danh", "trái cây"],
      ["便宜", "piányi", "tính từ", "rẻ"],
      ["贵", "guì", "tính từ", "đắt"],
      ["钱", "qián", "danh", "tiền"],
      ["块", "kuài", "lượng từ", "đồng, tệ"],
      ["元", "yuán", "lượng từ", "đồng (đơn vị)"],
      ["斤", "jīn", "lượng từ", "cân (500 g)"],
      ["少", "shǎo", "tính từ", "ít"],
      ["这儿", "zhèr", "đại từ", "ở đây"],
      ["那儿", "nàr", "đại từ", "ở kia"],
      ["这些", "zhèxiē", "đại từ", "những cái này"],
      ["那些", "nàxiē", "đại từ", "những cái kia"],
      ["杯子", "bēizi", "danh", "cái ly, cốc"],
      ["件", "jiàn", "lượng từ", "cái (áo, quần)"],
      ["衣服", "yīfu", "danh", "quần áo"],
      ["穿", "chuān", "động", "mặc"],
      ["商店", "shāngdiàn", "danh", "cửa hàng"],
      ["售货员", "shòuhuòyuán", "danh", "nhân viên bán hàng"],
      ["怎么样", "zěnmeyàng", "đại từ", "thế nào"]
    ],
    grammar: [
      { t: "真 + tính từ", f: "真 + 便宜 / 好 / 贵",
        e: "真 nhấn mạnh mức độ của tính từ: 真便宜 = thật rẻ.",
        ex: [["这儿的苹果真便宜！", "Zhèr de píngguǒ zhēn piányi!", "Táo ở đây thật rẻ!"]] },
      { t: "Lượng từ", f: "số + lượng từ + danh từ",
        e: "Mỗi danh từ có lượng từ riêng: 块 (tiền), 斤 (cân), 件 (áo), 杯 (ly).",
        ex: [["这个几块钱？", "Zhège jǐ kuài qián?", "Cái này mấy tệ?"], ["我想买两斤苹果。", "Wǒ xiǎng mǎi liǎng jīn píngguǒ.", "Tôi muốn mua hai cân táo."]] }
    ],
    read: [
      { zh: "这件衣服怎么样？", py: "Zhè jiàn yīfu zěnmeyàng?", vi: "Chiếc áo này thế nào?", note: "怎么样 hỏi ý kiến, nhận xét." },
      { zh: "我穿这件，好吗？", py: "Wǒ chuān zhè jiàn, hǎo ma?", vi: "Tôi mặc cái này, được không?", note: "件 là lượng từ của áo." }
    ],
    quiz: [
      { q: "Lượng từ đúng cho quần áo là:", o: ["件", "块", "斤", "杯"], a: 0, exp: "衣服 đi với 件." },
      { q: "“Rẻ” trong tiếng Trung là:", o: ["贵", "便宜", "少", "多"], a: 1, exp: "便宜 = rẻ; 贵 = đắt." }
    ]
  },
  {
    id: "h1-11", level: "HSK1", n: 11,
    zh: "我读大学呢", vi: "Tôi đang học đại học",
    src: "HSK 1 3.0 BÀI 11 我读大学呢.pptx",
    pron: [
      "在 zài (thanh 4) và 再 zài (thanh 4) cùng âm nhưng khác nghĩa: 在 là đang/ở, 再 là lại.",
      "正在 zhèngzài: nhấn mạnh hành động đang diễn ra."
    ],
    writing: [
      { zh: "读", py: "dú", note: "Bộ 讠 bên trái, 卖 bên phải." },
      { zh: "睡", py: "shuì", note: "Bộ 目 (mắt) bên trái, 垂 bên phải: nhắm mắt lại là ngủ." }
    ],
    vocab: [
      ["大学", "dàxué", "danh", "đại học"],
      ["大学生", "dàxuéshēng", "danh", "sinh viên đại học"],
      ["读", "dú", "động", "đọc, học"],
      ["学", "xué", "động", "học"],
      ["正在", "zhèngzài", "phó từ", "đang"],
      ["时候", "shíhou", "danh", "lúc, khi"],
      ["饭店", "fàndiàn", "danh", "nhà hàng"],
      ["知道", "zhīdào", "động", "biết"],
      ["找", "zhǎo", "động", "tìm"],
      ["开车", "kāichē", "động", "lái xe"],
      ["弟弟", "dìdi", "danh", "em trai"],
      ["起床", "qǐchuáng", "động", "thức dậy"],
      ["睡觉", "shuìjiào", "động", "ngủ"],
      ["昨天", "zuótiān", "danh", "hôm qua"],
      ["问", "wèn", "động", "hỏi"],
      ["对", "duì", "giới từ", "đối với"],
      ["说", "shuō", "động", "nói"],
      ["那里", "nàlǐ", "đại từ", "ở đó"]
    ],
    grammar: [
      { t: "在 / 正在 + động từ (đang)", f: "主语 + 在 + động từ + 呢",
        e: "Diễn đạt hành động đang diễn ra. 呢 cuối câu làm câu sinh động hơn.",
        ex: [["我在读大学呢。", "Wǒ zài dú dàxué ne.", "Tôi đang học đại học đấy."], ["他正在找你。", "Tā zhèngzài zhǎo nǐ.", "Anh ấy đang tìm bạn."]] },
      { t: "…的时候 — lúc, khi", f: "动作 + 的时候",
        e: "时候 chỉ thời điểm, thường đứng sau một hành động hoặc mệnh đề.",
        ex: [["吃饭的时候", "chīfàn de shíhou", "lúc ăn cơm"]] }
    ],
    read: [
      { zh: "昨天我问他：你知道饭店在哪儿吗？", py: "Zuótiān wǒ wèn tā: nǐ zhīdào fàndiàn zài nǎr ma?", vi: "Hôm qua tôi hỏi anh ấy: bạn có biết nhà hàng ở đâu không?", note: "问 + người + câu hỏi." },
      { zh: "弟弟还在睡觉呢。", py: "Dìdi hái zài shuìjiào ne.", vi: "Em trai vẫn đang ngủ.", note: "还 + 在 + động từ: vẫn đang." }
    ],
    quiz: [
      { q: "在 trước động từ dùng để chỉ hành động:", o: ["đã làm", "đang làm", "sẽ làm", "chưa làm"], a: 1, exp: "在 + động từ = đang làm." },
      { q: "“Hôm qua” là:", o: ["今天", "明天", "昨天", "前天"], a: 2, exp: "昨天 zuótiān = hôm qua." }
    ]
  },
  {
    id: "h1-12", level: "HSK1", n: 12,
    zh: "昨天下雪了", vi: "Hôm qua tuyết rơi rồi",
    src: "HSK 1 3.0 BÀI 12 昨天下雪了.pptx",
    pron: [
      "雪 xuě và 雨 yǔ đều là thanh 3 khi đứng riêng.",
      "了 le đọc nhẹ, ngắn ở cuối câu."
    ],
    writing: [
      { zh: "雪", py: "xuě", note: "Bộ 雨 (mưa) bên trên, 彐 bên dưới." },
      { zh: "冷", py: "lěng", note: "Bộ 冫 (băng) bên trái, 令 bên phải." }
    ],
    vocab: [
      ["天气", "tiānqì", "danh", "thời tiết"],
      ["天", "tiān", "danh", "trời"],
      ["雨", "yǔ", "danh", "mưa"],
      ["下雨", "xiàyǔ", "động", "mưa"],
      ["下雪", "xiàxuě", "động", "tuyết rơi"],
      ["冷", "lěng", "tính từ", "lạnh"],
      ["热", "rè", "tính từ", "nóng"],
      ["喝", "hē", "động", "uống"],
      ["水", "shuǐ", "danh", "nước"],
      ["热水", "rèshuǐ", "danh", "nước nóng"],
      ["再", "zài", "phó từ", "lại, thêm"],
      ["还", "hái", "phó từ", "vẫn, còn"],
      ["觉得", "juéde", "động", "cảm thấy"],
      ["病", "bìng", "danh", "bệnh"],
      ["药", "yào", "danh", "thuốc"],
      ["有点儿", "yǒudiǎnr", "phó từ", "hơi, có chút"],
      ["这里", "zhèlǐ", "đại từ", "ở đây"]
    ],
    grammar: [
      { t: "了 — thay đổi trạng thái", f: "câu + 了",
        e: "了 cuối câu báo việc đã xảy ra hoặc có thay đổi: 下雪了 = tuyết đã rơi.",
        ex: [["下雨了。", "Xià yǔ le.", "Trời mưa rồi."], ["我饿了。", "Wǒ è le.", "Tôi đói rồi."]] },
      { t: "太…了 — quá…", f: "太 + tính từ + 了",
        e: "Cảm thán mức độ cao: 太冷了 = lạnh quá.",
        ex: [["今天太冷了。", "Jīntiān tài lěng le.", "Hôm nay lạnh quá."]] },
      { t: "再 và 还", f: "再 + động từ (lại) · 还 + động từ (vẫn)",
        e: "再 chỉ việc làm thêm lần nữa. 还 chỉ việc vẫn đang tiếp diễn.",
        ex: [["请再说一遍。", "Qǐng zài shuō yí biàn.", "Xin nói lại một lần nữa."], ["他还在睡觉。", "Tā hái zài shuìjiào.", "Anh ấy vẫn đang ngủ."]] }
    ],
    read: [
      { zh: "今天天气不好，有点儿冷。", py: "Jīntiān tiānqì bù hǎo, yǒudiǎnr lěng.", vi: "Hôm nay thời tiết không tốt, hơi lạnh.", note: "有点儿 + tính từ: hơi (thường là điều không thích)." },
      { zh: "吃完饭，我想再喝一杯热水。", py: "Chī wán fàn, wǒ xiǎng zài hē yì bēi rèshuǐ.", vi: "Ăn xong, tôi muốn uống thêm một ly nước nóng.", note: "再 + động từ: làm thêm lần nữa." }
    ],
    quiz: [
      { q: "“Tuyết rơi” là:", o: ["下雨", "下雪", "下班", "下课"], a: 1, exp: "下雪 xiàxuě = tuyết rơi." },
      { q: "“Hôm nay quá lạnh” là:", o: ["今天太冷了", "今天冷太了", "太今天冷了", "今天很冷了了"], a: 0, exp: "太 + tính từ + 了." }
    ]
  },
  {
    id: "h1-13", level: "HSK1", n: 13,
    zh: "请给我一杯茶", vi: "Làm ơn cho tôi một ly trà",
    src: "HSK 1 3.0 BÀI 13 请给我一杯茶.pptx",
    pron: [
      "请 qǐng và 给 gěi đều là thanh 3 và thanh 3 liền nhau: đọc qǐng gěi.",
      "要 yào: đọc có âm “ao” rõ."
    ],
    writing: [
      { zh: "茶", py: "chá", note: "Bộ 艹 (cỏ) ở trên, 人 và 木 ở dưới." },
      { zh: "给", py: "gěi", note: "Bộ 纟 (tơ) bên trái, 合 bên phải." }
    ],
    vocab: [
      ["请", "qǐng", "động", "mời, làm ơn"],
      ["给", "gěi", "động", "cho, đưa"],
      ["一杯", "yì bēi", "lượng từ", "một ly"],
      ["茶", "chá", "danh", "trà"],
      ["要", "yào", "động", "muốn, cần"],
      ["可以", "kěyǐ", "năng nguyện", "có thể, được"],
      ["问题", "wèntí", "danh", "câu hỏi, vấn đề"],
      ["再", "zài", "phó từ", "lại, thêm"],
      ["卖", "mài", "động", "bán"],
      ["服务员", "fúwùyuán", "danh", "nhân viên phục vụ"],
      ["女士", "nǚshì", "danh", "quý bà, cô"],
      ["先生", "xiānsheng", "danh", "quý ông, anh"],
      ["坐", "zuò", "động", "ngồi"],
      ["早饭", "zǎofàn", "danh", "bữa sáng"],
      ["面包", "miànbāo", "danh", "bánh mì"],
      ["这个", "zhège", "đại từ", "cái này"],
      ["打电话", "dǎ diànhuà", "động", "gọi điện thoại"],
      ["一半", "yíbàn", "danh", "một nửa"]
    ],
    grammar: [
      { t: "请给我 + số lượng + danh từ", f: "请给我 + 一 + 杯 / 个 + danh từ",
        e: "Mẫu câu gọi món lịch sự.",
        ex: [["请给我一杯茶。", "Qǐng gěi wǒ yì bēi chá.", "Làm ơn cho tôi một ly trà."]] },
      { t: "可以…吗？ — có thể…không?", f: "可以 + động từ + 吗？",
        e: "Hỏi xin phép hoặc hỏi khả năng.",
        ex: [["我可以坐这儿吗？", "Wǒ kěyǐ zuò zhèr ma?", "Tôi có thể ngồi đây không?"]] },
      { t: "要 — muốn, cần", f: "要 + danh từ / động từ",
        e: "Diễn đạt mong muốn hoặc yêu cầu khi gọi món, mua hàng.",
        ex: [["我要一个面包。", "Wǒ yào yí ge miànbāo.", "Tôi muốn một cái bánh mì."]] }
    ],
    read: [
      { zh: "服务员，请给我一杯水。", py: "Fúwùyuán, qǐng gěi wǒ yì bēi shuǐ.", vi: "Phục vụ ơi, làm ơn cho tôi một ly nước.", note: "服务员 là cách gọi nhân viên phục vụ." },
      { zh: "这个面包怎么卖？", py: "Zhège miànbāo zěnme mài?", vi: "Bánh mì này bán thế nào?", note: "怎么卖 = bán thế nào, hỏi giá cách bán." }
    ],
    quiz: [
      { q: "Dùng từ nào để mời hoặc làm ơn?", o: ["请", "给", "要", "卖"], a: 0, exp: "请 qǐng = mời, làm ơn." },
      { q: "Hỏi xin phép dùng mẫu nào?", o: ["可以…吗", "可以…呢", "要…吗", "还…吗"], a: 0, exp: "可以 + động từ + 吗？" }
    ]
  },
  {
    id: "h1-14", level: "HSK1", n: 14,
    zh: "我看了一个电影", vi: "Tôi đã xem một bộ phim",
    src: "HSK 1 3.0 BÀI 14 我看了一个电影.pptx",
    pron: [
      "了 le trong 看了 đọc nhẹ: kànle.",
      "电影 diànyǐng: 影 yǐng (thanh 3) đứng cuối."
    ],
    writing: [
      { zh: "都", py: "dōu", note: "Bộ 者 bên trái, 阝 (ấp) bên phải." },
      { zh: "车", py: "chē", note: "Chữ tượng hình bánh xe và trục; 4 nét." }
    ],
    vocab: [
      ["电影", "diànyǐng", "danh", "bộ phim"],
      ["看", "kàn", "động", "xem, nhìn"],
      ["了", "le", "trợ từ", "(đã, hoàn thành)"],
      ["一个", "yí ge", "số lượng", "một cái"],
      ["火车", "huǒchē", "danh", "tàu hỏa"],
      ["上", "shàng", "động", "lên, lên xe"],
      ["开", "kāi", "động", "mở, lái, khởi hành"],
      ["中午", "zhōngwǔ", "danh", "buổi trưa"],
      ["明年", "míngnián", "danh", "năm sau"],
      ["去年", "qùnián", "danh", "năm ngoái"],
      ["小学", "xiǎoxué", "danh", "tiểu học"],
      ["中学", "zhōngxué", "danh", "trung học"],
      ["上学", "shàngxué", "động", "đi học"],
      ["写", "xiě", "động", "viết"],
      ["都", "dōu", "phó từ", "đều"],
      ["听见", "tīngjiàn", "động", "nghe thấy"],
      ["有些", "yǒuxiē", "đại từ", "một vài"],
      ["他们", "tāmen", "đại từ", "họ (nam hoặc hỗn hợp)"],
      ["她们", "tāmen", "đại từ", "họ (nữ)"]
    ],
    grammar: [
      { t: "了 — hành động đã hoàn thành", f: "动词 + 了 + số lượng + danh từ",
        e: "Diễn đạt hành động đã xảy ra. Phủ định dùng 没 và bỏ 了.",
        ex: [["我看了一个电影。", "Wǒ kàn le yí ge diànyǐng.", "Tôi đã xem một bộ phim."], ["我没看电影。", "Wǒ méi kàn diànyǐng.", "Tôi đã không xem phim."]] },
      { t: "都 — đều", f: "主语 + 都 + động từ",
        e: "都 đặt trước động từ, chỉ tất cả đều cùng làm.",
        ex: [["我们都会写汉字。", "Wǒmen dōu huì xiě Hànzì.", "Chúng tôi đều biết viết chữ Hán."]] },
      { t: "有些…，有些… — một số…, một số…", f: "有些人 …，有些人 …",
        e: "Chia nhóm để nói một số làm điều này, một số làm điều khác.",
        ex: [["有些人喝茶，有些人喝咖啡。", "Yǒuxiē rén hē chá, yǒuxiē rén hē kāfēi.", "Có người uống trà, có người uống cà phê."]] }
    ],
    read: [
      { zh: "中午我坐火车去北京。", py: "Zhōngwǔ wǒ zuò huǒchē qù Běijīng.", vi: "Buổi trưa tôi đi tàu hỏa đến Bắc Kinh.", note: "坐 + phương tiện + 去 + nơi chốn." },
      { zh: "他们明年上中学。", py: "Tāmen míngnián shàng zhōngxué.", vi: "Năm sau họ lên trung học.", note: "上 + cấp học: đi học bậc nào." },
      { zh: "昨天我没看见她。", py: "Zuótiān wǒ méi kànjiàn tā.", vi: "Hôm qua tôi không thấy cô ấy.", note: "没 + động từ + 见: không nhìn thấy." }
    ],
    quiz: [
      { q: "Dấu hiệu hoàn thành của hành động là:", o: ["了", "吗", "呢", "吧"], a: 0, exp: "了 đặt sau động từ để báo đã hoàn thành." },
      { q: "“Đều” trong tiếng Trung là:", o: ["都", "也", "还", "再"], a: 0, exp: "都 = đều, tất cả." }
    ]
  },
  {
    id: "h1-15", level: "HSK1", n: 15,
    zh: "大兴机场见！", vi: "Gặp nhau ở sân bay Đại Hưng!",
    src: "HSK 1 3.0 BÀI 15 大兴机场见！.pptx",
    pron: [
      "机场 jīchǎng: 场 chǎng (thanh 3) đứng cuối.",
      "好玩儿 hǎowánr: 玩儿 đọc cuốn lưỡi nhẹ."
    ],
    writing: [
      { zh: "场", py: "chǎng", note: "Bộ 土 (đất) bên trái, phần 易 bên phải." },
      { zh: "机", py: "jī", note: "Bộ 木 (cây) bên trái, phần 几 bên phải." }
    ],
    vocab: [
      ["机场", "jīchǎng", "danh", "sân bay"],
      ["飞机", "fēijī", "danh", "máy bay"],
      ["见", "jiàn", "động", "gặp"],
      ["爱", "ài", "động", "yêu, thích"],
      ["哪个", "nǎge", "đại từ", "cái nào"],
      ["去年", "qùnián", "danh", "năm ngoái"],
      ["男朋友", "nánpéngyou", "danh", "bạn trai"],
      ["几", "jǐ", "số", "mấy"],
      ["年", "nián", "danh", "năm"],
      ["好玩儿", "hǎowánr", "tính từ", "vui, thú vị"],
      ["要", "yào", "động", "mất (thời gian)"],
      ["小时", "xiǎoshí", "danh", "giờ (đồng hồ)"],
      ["家人", "jiārén", "danh", "người nhà"],
      ["时间", "shíjiān", "danh", "thời gian"],
      ["接", "jiē", "động", "đón"],
      ["住", "zhù", "động", "ở, trú"],
      ["早", "zǎo", "tính từ", "sớm"],
      ["香蕉", "xiāngjiāo", "danh", "chuối"],
      ["喜欢", "xǐhuan", "động", "thích"]
    ],
    grammar: [
      { t: "…，也 / 还… — câu ghép cùng chủ ngữ", f: "A，也 / 还 + B",
        e: "也 = cũng, 还 = còn, thêm nữa. Nối hai ý cùng nói về một chủ thể hoặc hai chủ thể liên quan.",
        ex: [["妈妈爱喝茶，我也爱喝茶。", "Māma ài hē chá, wǒ yě ài hē chá.", "Mẹ thích uống trà, tôi cũng thích."], ["我喜欢苹果，还喜欢香蕉。", "Wǒ xǐhuan píngguǒ, hái xǐhuan xiāngjiāo.", "Tôi thích táo, còn thích cả chuối."]] },
      { t: "要 — hỏi và nói thời gian mất", f: "要 + 几个小时 / 多长时间",
        e: "要 khi nói về khoảng thời gian cần để đi hoặc làm việc gì.",
        ex: [["从这儿到机场要几个小时？", "Cóng zhèr dào jīchǎng yào jǐ ge xiǎoshí?", "Từ đây đến sân bay mất mấy tiếng?"]] }
    ],
    read: [
      { zh: "你有男朋友吗？", py: "Nǐ yǒu nánpéngyou ma?", vi: "Bạn có bạn trai không?", note: "有 + danh từ + 吗？: hỏi có/không." },
      { zh: "他很好玩儿。", py: "Tā hěn hǎowánr.", vi: "Anh ấy rất vui tính.", note: "好玩儿 dùng cho người hoặc việc thú vị." },
      { zh: "我们在机场见。", py: "Wǒmen zài jīchǎng jiàn.", vi: "Chúng ta gặp nhau ở sân bay.", note: "在 + nơi chốn + 见." }
    ],
    quiz: [
      { q: "“Cũng” trong câu ghép dùng từ nào?", o: ["也", "都", "再", "要"], a: 0, exp: "也 = cũng." },
      { q: "“Sân bay” là:", o: ["飞机", "机场", "小时", "时间"], a: 1, exp: "机场 jīchǎng = sân bay." }
    ]
  }
]);
