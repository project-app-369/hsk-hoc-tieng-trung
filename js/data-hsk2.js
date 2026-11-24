/* Dữ liệu: HSK 2, bài 1–6. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "h2-01", level: "HSK2", n: 1,
    zh: "她请我们吃了北京烤鸭", vi: "Cô ấy mời chúng tôi ăn vịt quay Bắc Kinh",
    src: "HSK 2 3.0 BÀI 1 她请我们吃了北京烤鸭.pptx",
    pron: [
      "烤鸭 kǎoyā: 烤 kǎo (thanh 3) + 鸭 yā (thanh 1).",
      "不好意思 bù hǎoyìsi: 意思 đọc yìsi, chữ 思 là thanh nhẹ."
    ],
    writing: [
      { zh: "请", py: "qǐng", note: "Bộ 讠 (ngôn) bên trái, 青 bên phải." },
      { zh: "鸭", py: "yā", note: "Bộ 鸟 (chim) bên phải, 甲 bên trái." }
    ],
    vocab: [
      ["请", "qǐng", "động", "mời"],
      ["北京烤鸭", "Běijīng kǎoyā", "danh", "vịt quay Bắc Kinh"],
      ["帮忙", "bāngmáng", "động", "giúp đỡ"],
      ["不好意思", "bù hǎoyìsi", "tính từ", "ngại quá, xin lỗi"],
      ["已经", "yǐjīng", "phó từ", "đã"],
      ["就", "jiù", "phó từ", "chính là, ngay"],
      ["给", "gěi", "giới từ", "cho, đối với"],
      ["让", "ràng", "động", "để, khiến"],
      ["接", "jiē", "động", "đón"],
      ["第一次", "dì yī cì", "số lượng", "lần đầu tiên"],
      ["介绍", "jièshào", "động", "giới thiệu"],
      ["有时", "yǒushí", "phó từ", "thỉnh thoảng"],
      ["懂", "dǒng", "động", "hiểu"],
      ["意思", "yìsi", "danh", "ý nghĩa"],
      ["旅游", "lǚyóu", "động", "du lịch"],
      ["次", "cì", "lượng từ", "lần"],
      ["尝", "cháng", "động", "nếm"],
      ["一定", "yídìng", "phó từ", "nhất định"],
      ["姐姐", "jiějie", "danh", "chị gái"]
    ],
    grammar: [
      { t: "请 + người + động từ", f: "请 + 人 + 动词",
        e: "请 có nghĩa “mời ai làm gì”, theo sau là người rồi đến hành động.",
        ex: [["她请我们吃饭。", "Tā qǐng wǒmen chīfàn.", "Cô ấy mời chúng tôi ăn cơm."]] },
      { t: "是…的 — nhấn mạnh thời gian, cách thức", f: "主语 + 是 + thời gian/cách thức + 动词 + 的",
        e: "Dùng để nhấn mạnh khi, ở đâu, bằng cách nào một việc đã xảy ra. Phần đã biết có thể lược bỏ 是 hoặc để sau 是.",
        ex: [["我是昨天到的。", "Wǒ shì zuótiān dào de.", "Tôi đến hôm qua đấy."], ["我是坐飞机来的。", "Wǒ shì zuò fēijī lái de.", "Tôi đi máy bay đến."]] },
      { t: "第一次 — lần đầu", f: "第一次 + 动词 + 名词",
        e: "Nói về lần đầu làm việc gì.",
        ex: [["这是我第一次吃北京烤鸭。", "Zhè shì wǒ dì yī cì chī Běijīng kǎoyā.", "Đây là lần đầu tôi ăn vịt quay Bắc Kinh."]] }
    ],
    read: [
      { zh: "谢谢你帮忙，我已经懂了。", py: "Xièxie nǐ bāngmáng, wǒ yǐjīng dǒng le.", vi: "Cảm ơn bạn đã giúp, tôi hiểu rồi.", note: "已经…了: đã xảy ra rồi." },
      { zh: "他让我给你打电话。", py: "Tā ràng wǒ gěi nǐ dǎ diànhuà.", vi: "Anh ấy bảo tôi gọi điện cho bạn.", note: "让 + người + động từ: bảo ai làm gì." }
    ],
    quiz: [
      { q: "“Lần đầu tiên” là:", o: ["第一次", "一次", "第二次", "有时"], a: 0, exp: "第一次 dì yī cì = lần đầu tiên." },
      { q: "“Hiểu” trong tiếng Trung là:", o: ["懂", "说", "给", "接"], a: 0, exp: "懂 dǒng = hiểu." }
    ]
  },
  {
    id: "h2-02", level: "HSK2", n: 2,
    zh: "还是打车去北大吧", vi: "Hay là bắt taxi đến Bắc Đại đi",
    src: "HSK 2 3.0 BÀI 2 还是打车去北大吧.pptx",
    pron: [
      "打车 dǎchē: 打 (thanh 3) + 车 (thanh 1).",
      "还是 háishi: 是 đọc nhẹ thành shi."
    ],
    writing: [
      { zh: "站", py: "zhàn", note: "Bộ 立 (đứng) bên trái, 占 bên phải: đứng ở một chỗ, là bến." },
      { zh: "远", py: "yuǎn", note: "Bộ 辶 (đi) bên trái, 元 bên phải: đi thật xa." }
    ],
    vocab: [
      ["公交车", "gōngjiāochē", "danh", "xe buýt"],
      ["但", "dàn", "liên từ", "nhưng"],
      ["车站", "chēzhàn", "danh", "bến xe, ga"],
      ["远", "yuǎn", "tính từ", "xa"],
      ["打车", "dǎchē", "động", "bắt taxi"],
      ["还是", "háishi", "phó từ", "hay là"],
      ["北京大学", "Běijīng Dàxué", "danh", "Đại học Bắc Kinh"],
      ["网上", "wǎngshàng", "danh", "trên mạng"],
      ["外国", "wàiguó", "danh", "nước ngoài"],
      ["万", "wàn", "số", "vạn (mười nghìn)"],
      ["间", "jiān", "lượng từ", "căn, gian (phòng)"],
      ["票", "piào", "danh", "vé"],
      ["有点儿", "yǒudiǎnr", "phó từ", "hơi"],
      ["教室", "jiàoshì", "danh", "lớp học"],
      ["漂亮", "piàoliang", "tính từ", "đẹp"],
      ["好看", "hǎokàn", "tính từ", "đẹp (nhìn)"],
      ["有时间", "yǒu shíjiān", "cụm", "có thời gian"],
      ["啊", "a", "trợ từ", "(cảm thán, đồng tình)"]
    ],
    grammar: [
      { t: "还是…吧 — gợi ý nên làm", f: "还是 + động từ + 吧",
        e: "Đưa ra gợi ý lựa chọn tốt hơn, thường là ý kiến nhẹ nhàng.",
        ex: [["还是打车去吧。", "Háishi dǎchē qù ba.", "Hay là bắt taxi đi thôi."]] },
      { t: "有点儿 + tính từ — hơi", f: "有点儿 + tính từ",
        e: "Thường mang sắc thái không thích: 有点儿远 = hơi xa.",
        ex: [["这儿有点儿远。", "Zhèr yǒudiǎnr yuǎn.", "Chỗ này hơi xa."]] },
      { t: "多 — hơn (ước lượng)", f: "số + 多 + lượng từ",
        e: "四万多名 = hơn bốn vạn người. 多 đứng sau số để chỉ số lượng ước chừng.",
        ex: [["有四万多名学生。", "Yǒu sì wàn duō míng xuésheng.", "Có hơn bốn vạn sinh viên."]] }
    ],
    read: [
      { zh: "这里的公交车站很远，我们打车吧。", py: "Zhèlǐ de gōngjiāo chēzhàn hěn yuǎn, wǒmen dǎchē ba.", vi: "Bến xe buýt ở đây rất xa, chúng ta bắt taxi đi.", note: "Đề nghị bằng 吧 sau một lý do." },
      { zh: "学校里人真多啊！", py: "Xuéxiào lǐ rén zhēn duō a!", vi: "Trong trường đông người quá!", note: "真 + tính từ + 啊: cảm thán." }
    ],
    quiz: [
      { q: "“Xe buýt” là:", o: ["公交车", "出租车", "火车", "汽车"], a: 0, exp: "公交车 gōngjiāochē = xe buýt công cộng." },
      { q: "“Hay là” dùng từ nào?", o: ["还是", "但", "因为", "所以"], a: 0, exp: "还是 = hay là (đưa ra lựa chọn)." }
    ]
  },
  {
    id: "h2-03", level: "HSK2", n: 3,
    zh: "我想去西安旅游", vi: "Tôi muốn đi du lịch Tây An",
    src: "HSK 2 3.0 BÀI 3 我想去西安旅游.pptx",
    pron: [
      "西安 Xī'ān: có dấu nháy để tách “Xī” và “ān”.",
      "想一想 xiǎng yi xiǎng: 一 đọc nhẹ ở giữa."
    ],
    writing: [
      { zh: "洗", py: "xǐ", note: "Bộ 氵 (nước) bên trái, 先 bên phải." },
      { zh: "拿", py: "ná", note: "Bộ 人 ở trên, 手 (tay) bên dưới: người dùng tay để cầm." }
    ],
    vocab: [
      ["旅游", "lǚyóu", "động", "du lịch"],
      ["西安", "Xī'ān", "danh", "Tây An"],
      ["想", "xiǎng", "động", "muốn, nghĩ"],
      ["买票", "mǎipiào", "động", "mua vé"],
      ["累", "lèi", "tính từ", "mệt"],
      ["休息", "xiūxi", "động", "nghỉ ngơi"],
      ["帮", "bāng", "động", "giúp"],
      ["时间", "shíjiān", "danh", "thời gian"],
      ["做完", "zuòwán", "động", "làm xong"],
      ["找到", "zhǎodào", "động", "tìm thấy"],
      ["想好", "xiǎnghǎo", "động", "nghĩ xong"],
      ["回来", "huílái", "động", "trở lại"],
      ["回去", "huíqù", "động", "quay về"],
      ["这么", "zhème", "đại từ", "như thế này"],
      ["一起", "yìqǐ", "phó từ", "cùng nhau"],
      ["洗", "xǐ", "động", "rửa"],
      ["自己", "zìjǐ", "đại từ", "bản thân"],
      ["拿", "ná", "động", "cầm, lấy"],
      ["手", "shǒu", "danh", "tay"],
      ["送", "sòng", "động", "đưa, tặng"],
      ["每", "měi", "đại từ", "mỗi"],
      ["菜", "cài", "danh", "món ăn"]
    ],
    grammar: [
      { t: "Bổ ngữ kết quả", f: "动词 + 好 / 完 / 到 / 见",
        e: "Phần sau động từ chỉ kết quả: 想好 = nghĩ xong, 找到 = tìm thấy, 做完 = làm xong.",
        ex: [["我还没想好呢。", "Wǒ hái méi xiǎng hǎo ne.", "Tôi vẫn chưa nghĩ xong."]] },
      { t: "Động từ lặp lại", f: "V 一 V  ·  VV",
        e: "Lặp động từ để làm nhẹ nhàng, ngắn gọn, hoặc đề nghị thân mật.",
        ex: [["你再想一想。", "Nǐ zài xiǎng yi xiǎng.", "Bạn nghĩ thêm chút đi."], ["帮帮忙吧。", "Bāngbang máng ba.", "Giúp một tay đi."]] },
      { t: "Câu hỏi đã…chưa", f: "…了吗？ · …了没有？",
        e: "Hỏi một việc đã xảy ra hay chưa.",
        ex: [["你做完了吗？", "Nǐ zuòwán le ma?", "Bạn làm xong chưa?"], ["你想好了没有？", "Nǐ xiǎnghǎo le méiyǒu?", "Bạn nghĩ xong chưa?"]] }
    ],
    read: [
      { zh: "我们找个时间去旅游，怎么样？", py: "Wǒmen zhǎo ge shíjiān qù lǚyóu, zěnmeyàng?", vi: "Chúng ta tìm lúc nào đó đi du lịch, được không?", note: "找个时间 = tìm một thời gian." },
      { zh: "你想去哪儿？", py: "Nǐ xiǎng qù nǎr?", vi: "Bạn muốn đi đâu?", note: "想 + động từ: muốn làm gì." }
    ],
    quiz: [
      { q: "“Nghĩ xong” là cụm nào?", o: ["想好", "想到", "想一想", "想完了"], a: 0, exp: "想好 xiǎnghǎo = nghĩ xong." },
      { q: "Cách nói “nghĩ thử xem” là:", o: ["想一想", "想想想", "想完", "想好"], a: 0, exp: "想一想 = nghĩ thử một chút." }
    ]
  },
  {
    id: "h2-04", level: "HSK2", n: 4,
    zh: "你穿红色的很好看", vi: "Bạn mặc màu đỏ rất đẹp",
    src: "HSK 2 3.0 BÀI 4 你穿红色的很好看.pptx",
    pron: [
      "红色 hóngsè: 红 (thanh 2) + 色 (thanh 4).",
      "因为 yīnwèi: 因 đọc yīn, 为 đọc wèi."
    ],
    writing: [
      { zh: "红", py: "hóng", note: "Bộ 纟 (tơ) bên trái, 工 bên phải." },
      { zh: "试", py: "shì", note: "Bộ 讠 bên trái, 式 bên phải: thử theo kiểu mẫu." }
    ],
    vocab: [
      ["穿", "chuān", "động", "mặc"],
      ["红色", "hóngsè", "danh", "màu đỏ"],
      ["绿色", "lǜsè", "danh", "màu xanh lá"],
      ["黑色", "hēisè", "danh", "màu đen"],
      ["白色", "báisè", "danh", "màu trắng"],
      ["颜色", "yánsè", "danh", "màu sắc"],
      ["书包", "shūbāo", "danh", "cặp sách"],
      ["裤子", "kùzi", "danh", "quần"],
      ["条", "tiáo", "lượng từ", "chiếc (quần, váy…)"],
      ["商场", "shāngchǎng", "danh", "trung tâm thương mại"],
      ["进去", "jìnqù", "động", "đi vào"],
      ["过去", "guòqù", "động", "đi qua, trước đây"],
      ["因为", "yīnwèi", "liên từ", "bởi vì"],
      ["所以", "suǒyǐ", "liên từ", "cho nên"],
      ["试", "shì", "động", "thử"],
      ["新开", "xīn kāi", "động", "mới mở"],
      ["很多", "hěn duō", "số lượng", "nhiều"],
      ["衣服", "yīfu", "danh", "quần áo"],
      ["没", "méi", "phó từ", "chưa"]
    ],
    grammar: [
      { t: "因为…所以… — vì…nên…", f: "因为 + nguyên nhân，所以 + kết quả",
        e: "Nối nguyên nhân và kết quả. Có thể bỏ một trong hai vế khi ngữ cảnh rõ.",
        ex: [["因为下雨，所以我们没去。", "Yīnwèi xiàyǔ, suǒyǐ wǒmen méi qù.", "Vì trời mưa nên chúng tôi không đi."]] },
      { t: "没…过 — chưa từng", f: "没 + động từ + 过",
        e: "Diễn đạt chưa từng làm việc gì trong quá khứ.",
        ex: [["我没穿过红色的裤子。", "Wǒ méi chuānguo hóngsè de kùzi.", "Tôi chưa từng mặc quần màu đỏ."]] },
      { t: "让 — để, bảo", f: "让 + người + động từ",
        e: "Sai khiến hoặc cho phép ai làm gì.",
        ex: [["妈妈让我试一试。", "Māma ràng wǒ shì yi shì.", "Mẹ bảo tôi thử xem."]] }
    ],
    read: [
      { zh: "这件衣服颜色很好看。", py: "Zhè jiàn yīfu yánsè hěn hǎokàn.", vi: "Màu của chiếc áo này rất đẹp.", note: "颜色 + tính từ: màu sắc thế nào." },
      { zh: "我觉得白色的不太好看。", py: "Wǒ juéde báisè de bú tài hǎokàn.", vi: "Tôi thấy màu trắng không đẹp lắm.", note: "的 thay cho danh từ: 白色的 = cái màu trắng." }
    ],
    quiz: [
      { q: "“Vì… nên…” là:", o: ["因为…所以", "因为…但是", "虽然…但是", "如果…就"], a: 0, exp: "因为…所以 = vì…nên." },
      { q: "“Chưa từng” dùng cấu trúc nào?", o: ["没…过", "没…了", "还没…呢", "没有…吗"], a: 0, exp: "没 + động từ + 过 = chưa từng làm." }
    ]
  },
  {
    id: "h2-05", level: "HSK2", n: 5,
    zh: "第一次去中国朋友家", vi: "Lần đầu đến nhà bạn người Trung Quốc",
    src: "HSK 2 3.0 BÀI 5 第一次去中国朋友家.pptx",
    pron: [
      "下来 xiàlái: 来 lái đọc nhẹ.",
      "礼物 lǐwù: 物 đọc wù, thanh 4 nhẹ."
    ],
    writing: [
      { zh: "客", py: "kè", note: "Bộ 宀 (mái nhà) bên trên, 各 bên dưới: khách đến nhà." },
      { zh: "礼", py: "lǐ", note: "Bộ 礻 (thị) bên trái, 乚 bên phải." }
    ],
    vocab: [
      ["朋友", "péngyou", "danh", "bạn bè"],
      ["礼物", "lǐwù", "danh", "quà tặng"],
      ["奶茶", "nǎichá", "danh", "trà sữa"],
      ["客气", "kèqi", "tính từ", "khách sáo"],
      ["爷爷", "yéye", "danh", "ông nội"],
      ["奶奶", "nǎinai", "danh", "bà nội"],
      ["下来", "xiàlái", "động", "đi xuống (về phía người nói)"],
      ["上来", "shànglái", "động", "đi lên (về phía người nói)"],
      ["上去", "shàngqù", "động", "đi lên (xa người nói)"],
      ["下面", "xiàmiàn", "danh", "bên dưới"],
      ["进来", "jìnlái", "động", "đi vào (về phía người nói)"],
      ["等", "děng", "động", "đợi"],
      ["走", "zǒu", "động", "đi"],
      ["快", "kuài", "phó từ", "nhanh, mau"],
      ["准备", "zhǔnbèi", "động", "chuẩn bị"],
      ["好吃", "hǎochī", "tính từ", "ngon (ăn)"],
      ["好喝", "hǎohē", "tính từ", "ngon (uống)"],
      ["迟到", "chídào", "động", "đến muộn"],
      ["自己", "zìjǐ", "đại từ", "tự mình"]
    ],
    grammar: [
      { t: "Bổ ngữ xu hướng 来 / 去", f: "động từ + 上 / 下 / 进 / 出 + 来 / 去",
        e: "来 chỉ hướng về phía người nói; 去 chỉ hướng xa người nói.",
        ex: [["她已经下来了。", "Tā yǐjīng xiàlái le.", "Cô ấy đã xuống rồi."], ["快上来吧！", "Kuài shànglái ba!", "Mau lên đây đi!"]] },
      { t: "还没…过 — vẫn chưa từng", f: "还没 + động từ + 过",
        e: "Nhấn mạnh việc vẫn chưa từng trải qua, thường dùng khi khen hoặc cảm thán.",
        ex: [["我还没喝过这么好喝的奶茶。", "Wǒ hái méi hēguo zhème hǎohē de nǎichá.", "Tôi chưa từng uống trà sữa ngon thế này."]] },
      { t: "你太客气了 — đáp khi được tiếp đãi", f: "太 + 客气 + 了",
        e: "Cách đáp lễ phép khi được khen hoặc được chiêu đãi.",
        ex: [["你们太客气了！", "Nǐmen tài kèqi le!", "Các bạn khách sáo quá!"]] }
    ],
    read: [
      { zh: "我们快下来吧，别迟到了。", py: "Wǒmen kuài xiàlái ba, bié chídào le.", vi: "Chúng ta xuống nhanh đi, đừng đến muộn nữa.", note: "别…了: đừng…nữa." },
      { zh: "这是我送给你们的礼物。", py: "Zhè shì wǒ sòng gěi nǐmen de lǐwù.", vi: "Đây là món quà tôi tặng các bạn.", note: "送给 + người: tặng cho ai." }
    ],
    quiz: [
      { q: "“Xuống đây” là:", o: ["下来", "上去", "进去", "出去"], a: 0, exp: "下来 xiàlái = đi xuống về phía người nói." },
      { q: "“Khách sáo” là:", o: ["客气", "礼物", "朋友", "迟到"], a: 0, exp: "客气 kèqi = khách sáo, lịch sự." }
    ]
  },
  {
    id: "h2-06", level: "HSK2", n: 6,
    zh: "小雪，生日快乐！", vi: "Tiểu Tuyết, sinh nhật vui vẻ!",
    src: "HSK 2 3.0 BÀI 6 小雪,生日快乐!.pptx",
    pron: [
      "生日 shēngrì: 日 đọc rì nhẹ.",
      "快乐 kuàilè: thanh 4 + thanh 4, đọc dứt khoát."
    ],
    writing: [
      { zh: "忘", py: "wàng", note: "Bộ 心 (tim) ở dưới, 亡 ở trên: quên đi thì tim cũng mất dấu." },
      { zh: "狗", py: "gǒu", note: "Bộ 犭 (con vật) bên trái, 句 bên phải." }
    ],
    vocab: [
      ["生日", "shēngrì", "danh", "sinh nhật"],
      ["快乐", "kuàilè", "tính từ", "vui vẻ"],
      ["忘", "wàng", "động", "quên"],
      ["画笔", "huàbǐ", "danh", "bút vẽ"],
      ["画", "huà", "động", "vẽ"],
      ["长", "cháng", "tính từ", "dài"],
      ["鱼", "yú", "danh", "cá"],
      ["肉", "ròu", "danh", "thịt"],
      ["过", "guò", "động", "trải qua"],
      ["床", "chuáng", "danh", "giường"],
      ["蛋糕", "dàngāo", "danh", "bánh kem"],
      ["面条儿", "miàntiáor", "danh", "mì sợi"],
      ["舒服", "shūfu", "tính từ", "thoải mái"],
      ["狗", "gǒu", "danh", "chó"],
      ["猫", "māo", "danh", "mèo"],
      ["孩子", "háizi", "danh", "trẻ con"],
      ["女儿", "nǚ'ér", "danh", "con gái"],
      ["让", "ràng", "động", "để, khiến"],
      ["地", "de", "trợ từ", "(đặt sau tính từ thành trạng ngữ)"]
    ],
    grammar: [
      { t: "Tính từ lặp lại", f: "AA 的 · 长长的 · 大大的",
        e: "Lặp tính từ đơn để nhấn sinh động, nhẹ nhàng: 长长的面条儿 = mì dài dài.",
        ex: [["长长的面条儿", "chángcháng de miàntiáor", "mì dài dài"], ["大大的蛋糕", "dàdà de dàngāo", "bánh kem to to"]] },
      { t: "地 — biến tính từ thành trạng ngữ", f: "tính từ + 地 + động từ",
        e: "Đặt 地 sau tính từ để nó bổ nghĩa cho động từ: 高兴地笑 = cười vui vẻ.",
        ex: [["他高兴地笑了。", "Tā gāoxìng de xiào le.", "Anh ấy vui vẻ cười."]] },
      { t: "还有…什么的 — và những thứ như thế", f: "还有 + A 啊 + B 啊 + 什么的",
        e: "Liệt kê vài ví dụ, ngụ ý còn nhiều thứ tương tự.",
        ex: [["有鱼啊肉啊什么的。", "Yǒu yú a ròu a shénme de.", "Có cá, có thịt, đại loại thế."]] }
    ],
    read: [
      { zh: "生日快乐！", py: "Shēngrì kuàilè!", vi: "Chúc mừng sinh nhật!", note: "Câu chúc phổ biến nhất khi sinh nhật." },
      { zh: "我们买了蛋糕，还做了面条儿。", py: "Wǒmen mǎi le dàngāo, hái zuò le miàntiáor.", vi: "Chúng tôi đã mua bánh kem, còn nấu mì nữa.", note: "了 dùng sau động từ để chỉ đã làm." },
      { zh: "孩子们坐在地上读书。", py: "Háizimen zuò zài dì shàng dú shū.", vi: "Bọn trẻ ngồi dưới đất đọc sách.", note: "们 chỉ số nhiều cho trẻ con." }
    ],
    quiz: [
      { q: "“Sinh nhật vui vẻ” là:", o: ["生日快乐", "快乐生日", "生快日乐", "生日好"], a: 0, exp: "生日快乐 shēngrì kuàilè." },
      { q: "“Quên” trong tiếng Trung là:", o: ["忘", "记", "想", "懂"], a: 0, exp: "忘 wàng = quên." }
    ]
  }
]);
