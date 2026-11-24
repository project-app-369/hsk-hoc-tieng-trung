/* Dữ liệu: HSK 1, bài 1–8. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "h1-01", level: "HSK1", n: 1,
    zh: "AI小语，你好！", vi: "Xin chào, AI Tiểu Ngữ!",
    src: "HSK 1 3.0 BÀI 1 AI小语，你好！.pptx",
    pron: [
      "你好 thường đọc là ní hǎo: hai thanh 3 đứng liền nhau thì chữ đầu đổi thành thanh 2.",
      "您 nín (thanh 2) dùng khi nói với người lớn tuổi hoặc người cần tôn trọng.",
      "们 men là thanh nhẹ, đọc ngắn và nhẹ, không có dấu thanh."
    ],
    writing: [
      { zh: "你", py: "nǐ", note: "Bộ 亻 (người) bên trái, phần 尔 bên phải." },
      { zh: "好", py: "hǎo", note: "Bộ 女 (nữ) bên trái, 子 bên phải: người phụ nữ có con là điều tốt." },
      { zh: "老师", py: "lǎoshī", note: "老 có bộ 耂 ở trên. 师 có bộ 巾 (khăn) bên trái." }
    ],
    vocab: [
      ["你好", "nǐ hǎo", "chào", "xin chào"],
      ["老师", "lǎoshī", "danh", "thầy/cô giáo"],
      ["您", "nín", "đại từ", "ngài (kính trọng)"],
      ["大家", "dàjiā", "đại từ", "mọi người"],
      ["学生", "xuésheng", "danh", "học sinh"],
      ["们", "men", "hậu tố", "các, bọn (chỉ số nhiều)"],
      ["同学", "tóngxué", "danh", "bạn học"],
      ["谢谢", "xièxie", "động", "cảm ơn"],
      ["不客气", "bú kèqi", "cụm", "không có gì"],
      ["再见", "zàijiàn", "động", "tạm biệt"]
    ],
    grammar: [
      { t: "Số nhiều với 们", f: "Danh từ / đại từ + 们",
        e: "们 đặt sau người để chỉ số nhiều. Không đi kèm số đếm.",
        ex: [["学生们", "xuéshengmen", "các học sinh"], ["你们", "nǐmen", "các bạn"], ["老师们", "lǎoshīmen", "các thầy cô"]] },
      { t: "Kính ngữ 您", f: "您 + 好  (thay cho 你好)",
        e: "您 thay 你 khi xưng hô tôn kính với người lớn tuổi.",
        ex: [["您好！", "nín hǎo!", "Chào ngài!"], ["老师，您好！", "Lǎoshī, nín hǎo!", "Chào thầy/cô!"]] }
    ],
    read: [
      { zh: "王老师，你好！", py: "Wáng lǎoshī, nǐ hǎo!", vi: "Chào cô Vương!", note: "Họ + 老师 là cách gọi lịch sự khi chào giáo viên." },
      { zh: "大家好！", py: "Dàjiā hǎo!", vi: "Chào mọi người!", note: "大家 = mọi người, đứng đầu câu chào tập thể." },
      { zh: "谢谢！不客气！", py: "Xièxie! Bú kèqi!", vi: "Cảm ơn! Không có gì!", note: "Cặp câu đáp lại lịch sự thường gặp." }
    ],
    quiz: [
      { q: "“们” trong 同学们 dùng để làm gì?", o: ["Chỉ số nhiều", "Chỉ nơi chốn", "Chỉ thời gian", "Phủ định"], a: 0, exp: "们 biểu thị số nhiều cho người." },
      { q: "Chào người lớn tuổi một cách lịch sự, nói:", o: ["你好", "您好", "大家好", "同学好"], a: 1, exp: "您好 là cách chào kính ngữ." }
    ]
  },
  {
    id: "h1-02", level: "HSK1", n: 2,
    zh: "我叫李文", vi: "Tôi tên là Lý Văn",
    src: "HSK 1 3.0 BÀI 2 我叫李文.pptx",
    pron: [
      "叫 jiào: phụ âm j + vần iao. Đừng nhầm với jiāo (giao, dạy).",
      "请问 qǐngwèn: hai thanh 3 đứng liền, đọc qǐngwèn với chữ đầu thanh 3 bình thường."
    ],
    writing: [
      { zh: "叫", py: "jiào", note: "Bộ 口 (miệng) bên trái, phần 丩 bên phải. Gợi ý liên quan đến việc phát ra tiếng." },
      { zh: "名", py: "míng", note: "Gồm 夕 (tối) ở trên và 口 (miệng) ở dưới: gọi nhau bằng miệng để nhận ra trong bóng tối." }
    ],
    vocab: [
      ["请问", "qǐngwèn", "động", "xin hỏi"],
      ["你", "nǐ", "đại từ", "bạn"],
      ["叫", "jiào", "động", "gọi, tên là"],
      ["什么", "shénme", "đại từ", "cái gì"],
      ["名字", "míngzi", "danh", "tên"],
      ["不", "bù", "phó từ", "không"],
      ["是", "shì", "động", "là"],
      ["对不起", "duìbuqǐ", "động", "xin lỗi"],
      ["很", "hěn", "phó từ", "rất"],
      ["高兴", "gāoxìng", "tính từ", "vui"],
      ["认识", "rènshi", "động", "quen biết"]
    ],
    grammar: [
      { t: "Hỏi tên", f: "你叫什么名字？",
        e: "Dùng 什么 để hỏi “cái gì”. Trả lời theo mẫu: 我叫 + tên.",
        ex: [["你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"], ["我叫李文。", "Wǒ jiào Lǐ Wén.", "Tôi tên là Lý Văn."]] },
      { t: "Phủ định với 不是", f: "主语 + 不是 + danh từ",
        e: "不是 là phủ định của 是 (là). Đặt 不 trước 是.",
        ex: [["我不是老师。", "Wǒ bú shì lǎoshī.", "Tôi không phải giáo viên."]] }
    ],
    read: [
      { zh: "请问，你叫什么名字？", py: "Qǐngwèn, nǐ jiào shénme míngzi?", vi: "Xin hỏi, bạn tên là gì?", note: "请问 mở đầu câu hỏi lịch sự." },
      { zh: "我叫李文，很高兴认识你。", py: "Wǒ jiào Lǐ Wén, hěn gāoxìng rènshi nǐ.", vi: "Tôi tên Lý Văn, rất vui được làm quen.", note: "很高兴认识你 là câu chào khi mới gặp." },
      { zh: "对不起，我不是王老师。", py: "Duìbuqǐ, wǒ bú shì Wáng lǎoshī.", vi: "Xin lỗi, tôi không phải cô Vương.", note: "对不起 dùng khi nhầm lẫn hoặc xin lỗi." }
    ],
    quiz: [
      { q: "Câu “Bạn tên là gì?” là:", o: ["你是谁？", "你叫什么名字？", "你好吗？", "你几岁？"], a: 1, exp: "你叫什么名字？ hỏi tên một cách trực tiếp." },
      { q: "“Tôi không phải là giáo viên” viết là:", o: ["我是不老师", "我不是老师", "我老师不是", "我不老师是"], a: 1, exp: "Cấu trúc: 我 + 不是 + danh từ." }
    ]
  },
  {
    id: "h1-03", level: "HSK1", n: 3,
    zh: "我是中国人", vi: "Tôi là người Trung Quốc",
    src: "HSK 1 3.0 BÀI 3 我是 中国人.pptx",
    pron: [
      "中国人 Zhōngguórén: 国 guó (thanh 2) và 人 rén (thanh 2) đứng cuối, đọc gọn.",
      "吗 ma là thanh nhẹ khi đứng cuối câu hỏi."
    ],
    writing: [
      { zh: "国", py: "guó", note: "Bộ 囗 (vi, bao quanh) bên ngoài, 玉 (ngọc) bên trong." },
      { zh: "人", py: "rén", note: "Chữ tượng hình gồm 2 nét: phẩy trái và mác phải." }
    ],
    vocab: [
      ["人", "rén", "danh", "người"],
      ["中国人", "Zhōngguórén", "danh", "người Trung Quốc"],
      ["国", "guó", "danh", "đất nước"],
      ["法国", "Fǎguó", "danh", "nước Pháp"],
      ["中文", "Zhōngwén", "danh", "tiếng Trung"],
      ["这", "zhè", "đại từ", "đây, này"],
      ["谁", "shéi", "đại từ", "ai"],
      ["女朋友", "nǚpéngyou", "danh", "bạn gái"],
      ["吗", "ma", "trợ từ", "(dùng để hỏi)"],
      ["忙", "máng", "tính từ", "bận"],
      ["太", "tài", "phó từ", "quá"],
      ["也", "yě", "phó từ", "cũng"]
    ],
    grammar: [
      { t: "Câu khẳng định: A 是 B", f: "主语 + 是 + danh từ",
        e: "是 dùng để nói “là”, nối chủ ngữ với danh từ.",
        ex: [["我是中国人。", "Wǒ shì Zhōngguórén.", "Tôi là người Trung Quốc."]] },
      { t: "Câu hỏi với 吗", f: "Câu khẳng định + 吗？",
        e: "Thêm 吗 vào cuối câu để hỏi có/không.",
        ex: [["你忙吗？", "Nǐ máng ma?", "Bạn có bận không?"]] },
      { t: "也 và 很", f: "也 + động từ/tính từ · 很 + tính từ",
        e: "也 = cũng. 很 đứng trước tính từ, thường dịch là “rất”.",
        ex: [["她也是法国人。", "Tā yě shì Fǎguórén.", "Cô ấy cũng là người Pháp."], ["我很忙。", "Wǒ hěn máng.", "Tôi rất bận."]] }
    ],
    read: [
      { zh: "这是谁？", py: "Zhè shì shéi?", vi: "Đây là ai?", note: "谁 là đại từ nghi vấn, đặt đúng vị trí của câu trả lời." },
      { zh: "这是我女朋友。", py: "Zhè shì wǒ nǚpéngyou.", vi: "Đây là bạn gái tôi.", note: "我 + 女朋友: sở hữu đặt trước danh từ." },
      { zh: "你工作还忙吗？", py: "Nǐ gōngzuò hái máng ma?", vi: "Công việc bạn vẫn bận chứ?", note: "还 = vẫn. 吗 kết thúc câu hỏi." }
    ],
    quiz: [
      { q: "“Cô ấy cũng là người Pháp” là:", o: ["她是也法国人", "她也是法国人", "她是法国也人", "她很法国人"], a: 1, exp: "也 đặt trước 是." },
      { q: "Từ nào dùng để hỏi “ai”?", o: ["谁", "哪", "吗", "这"], a: 0, exp: "谁 shéi = ai." }
    ]
  },
  {
    id: "h1-04", level: "HSK1", n: 4,
    zh: "我有两个孩子", vi: "Tôi có hai đứa con",
    src: "HSK 1 3.0 BÀI 4 我有两个孩子 .pptx",
    pron: [
      "两 liǎng (thanh 3) khác 二 èr. Trước lượng từ dùng 两: 两个孩子, 两本书.",
      "没有 méiyǒu: 没 đọc méi, 有 yǒu. Không đọc thành mò yǒu."
    ],
    writing: [
      { zh: "有", py: "yǒu", note: "Gồm bộ 𠂇 (ngang và phẩy) bên trên và 月 bên dưới." },
      { zh: "孩", py: "hái", note: "Bộ 子 (con) bên trái, phần 亥 bên phải." }
    ],
    vocab: [
      ["有", "yǒu", "động", "có"],
      ["没有", "méiyǒu", "động", "không có"],
      ["多少", "duōshao", "đại từ", "bao nhiêu"],
      ["个", "gè", "lượng từ", "cái, người (chung)"],
      ["两", "liǎng", "số", "hai (trước lượng từ)"],
      ["哥哥", "gēge", "danh", "anh trai"],
      ["妹妹", "mèimei", "danh", "em gái"],
      ["爸爸", "bàba", "danh", "bố"],
      ["妈妈", "māma", "danh", "mẹ"],
      ["儿子", "érzi", "danh", "con trai"],
      ["女儿", "nǚ'ér", "danh", "con gái"],
      ["孩子", "háizi", "danh", "đứa trẻ, con cái"],
      ["今年", "jīnnián", "danh", "năm nay"],
      ["家", "jiā", "danh", "nhà, gia đình"]
    ],
    grammar: [
      { t: "有 chỉ sở hữu", f: "主语 + 有 + số lượng + 个 + danh từ",
        e: "有 để nói có gì. Phủ định là 没有, không dùng 不有.",
        ex: [["我有两个孩子。", "Wǒ yǒu liǎng ge háizi.", "Tôi có hai đứa con."], ["我没有哥哥。", "Wǒ méiyǒu gēge.", "Tôi không có anh trai."]] },
      { t: "多少 hỏi số lượng", f: "多少 + 个 + danh từ？",
        e: "多少 dùng khi số lượng có thể lớn, hoặc khi không biết trước. Số nhỏ thường dùng 几.",
        ex: [["你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"], ["你有多少个朋友？", "Nǐ yǒu duōshao ge péngyou?", "Bạn có bao nhiêu bạn?"]] }
    ],
    read: [
      { zh: "你家有几口人？", py: "Nǐ jiā yǒu jǐ kǒu rén?", vi: "Nhà bạn có mấy người?", note: "口 là lượng từ đếm thành viên gia đình." },
      { zh: "我家有四口人。", py: "Wǒ jiā yǒu sì kǒu rén.", vi: "Nhà tôi có bốn người.", note: "家 + 有 + số + 口 + 人." }
    ],
    quiz: [
      { q: "Phủ định của 有 là:", o: ["不有", "没有", "没是", "不是有"], a: 1, exp: "没有 là phủ định của 有." },
      { q: "Lượng từ thường đi với 孩子 là:", o: ["个", "本", "件", "条"], a: 0, exp: "个 là lượng từ chung cho người và vật." }
    ]
  },
  {
    id: "h1-05", level: "HSK1", n: 5,
    zh: "今天我休息", vi: "Hôm nay tôi nghỉ",
    src: "HSK 1 3.0 BÀI 5 今天我休息.pptx",
    pron: [
      "星期 xīngqī: hai thanh 1 liền nhau. 星期天 là Chủ nhật, cũng có thể nói 星期日.",
      "号 hào (thanh 2) khác 好 hǎo (thanh 3)."
    ],
    writing: [
      { zh: "星", py: "xīng", note: "Bộ 日 (mặt trời) bên trái, 生 bên phải." },
      { zh: "期", py: "qī", note: "Bộ 其 bên trên và 月 (trăng) bên dưới." }
    ],
    vocab: [
      ["今天", "jīntiān", "danh", "hôm nay"],
      ["星期", "xīngqī", "danh", "tuần, thứ"],
      ["星期天", "xīngqītiān", "danh", "Chủ nhật"],
      ["号", "hào", "lượng từ", "ngày (mùng)"],
      ["月", "yuè", "danh", "tháng"],
      ["下班", "xiàbān", "động", "tan làm"],
      ["休息", "xiūxi", "động", "nghỉ ngơi"],
      ["会", "huì", "động", "biết (làm được)"],
      ["做饭", "zuòfàn", "động", "nấu cơm"],
      ["面条儿", "miàntiáor", "danh", "mì sợi"],
      ["饺子", "jiǎozi", "danh", "sủi cảo"],
      ["一些", "yìxiē", "lượng từ", "một số, một ít"],
      ["电脑", "diànnǎo", "danh", "máy tính"],
      ["喜欢", "xǐhuan", "động", "thích"]
    ],
    grammar: [
      { t: "Nói ngày và thứ", f: "今天 + 星期 + số  ·  几号？",
        e: "星期一 đến 星期六 là thứ hai đến thứ bảy. 星期天 hoặc 星期日 là Chủ nhật.",
        ex: [["今天星期几？", "Jīntiān xīngqī jǐ?", "Hôm nay thứ mấy?"], ["今天五号。", "Jīntiān wǔ hào.", "Hôm nay là ngày mùng 5."]] },
      { t: "会 — biết làm", f: "主语 + 会 + động từ",
        e: "会 nói về kỹ năng đã học được, khác 能 (có thể, do điều kiện).",
        ex: [["我会做饭。", "Wǒ huì zuòfàn.", "Tôi biết nấu ăn."], ["你会说中文吗？", "Nǐ huì shuō Zhōngwén ma?", "Bạn biết nói tiếng Trung không?"]] }
    ],
    read: [
      { zh: "今天星期天，我休息。", py: "Jīntiān xīngqītiān, wǒ xiūxi.", vi: "Hôm nay là Chủ nhật, tôi nghỉ.", note: "Chủ ngữ + thời gian + động từ." },
      { zh: "你会做饭吗？", py: "Nǐ huì zuòfàn ma?", vi: "Bạn có biết nấu ăn không?", note: "会 + động từ + 吗?" },
      { zh: "我会做饺子。", py: "Wǒ huì zuò jiǎozi.", vi: "Tôi biết gói sủi cảo.", note: "做 = làm, nấu. 饺子 là món bột nhân." }
    ],
    quiz: [
      { q: "“Chủ nhật” trong tiếng Trung là:", o: ["星期一", "星期天", "星期五", "今天"], a: 1, exp: "星期天 = Chủ nhật." },
      { q: "会 dùng để diễn đạt điều gì?", o: ["Kỹ năng đã học", "Nơi chốn", "Phủ định", "Số lượng"], a: 0, exp: "会 + động từ = biết làm việc gì." }
    ]
  },
  {
    id: "h1-06", level: "HSK1", n: 6,
    zh: "你的手机号是多少？", vi: "Số điện thoại của bạn là bao nhiêu?",
    src: "HSK 1 3.0 BÀI 6 你的手机号是多少？.pptx",
    pron: [
      "Khi đọc số điện thoại, đọc từng chữ số một. Số 1 thường đọc yāo, số 0 đọc líng.",
      "明天 míngtiān: thanh 2 + thanh 1, đọc liền mạch."
    ],
    writing: [
      { zh: "手", py: "shǒu", note: "Chữ tượng hình, 4 nét. Nhìn như bàn tay xòe ra." },
      { zh: "机", py: "jī", note: "Bộ 木 (cây) bên trái, phần 几 bên phải." }
    ],
    vocab: [
      ["手机", "shǒujī", "danh", "điện thoại di động"],
      ["电话", "diànhuà", "danh", "điện thoại"],
      ["明天", "míngtiān", "danh", "ngày mai"],
      ["去", "qù", "động", "đi"],
      ["哪儿", "nǎr", "đại từ", "ở đâu"],
      ["超市", "chāoshì", "danh", "siêu thị"],
      ["买", "mǎi", "động", "mua"],
      ["东西", "dōngxi", "danh", "đồ vật"],
      ["吃", "chī", "động", "ăn"],
      ["晚饭", "wǎnfàn", "danh", "bữa tối"],
      ["那边", "nàbiān", "đại từ", "bên kia"],
      ["包子", "bāozi", "danh", "bánh bao"],
      ["米饭", "mǐfàn", "danh", "cơm"],
      ["坐", "zuò", "động", "ngồi, đi (xe)"]
    ],
    grammar: [
      { t: "Hỏi số: 是多少", f: "……是多少？",
        e: "多少 dùng để hỏi số điện thoại, giá tiền, số lượng.",
        ex: [["你的电话号码是多少？", "Nǐ de diànhuà hàomǎ shì duōshao?", "Số điện thoại của bạn là bao nhiêu?"]] },
      { t: "去 + nơi chốn", f: "主语 + 去 + nơi chốn + động từ",
        e: "去 chỉ hành động đi đến đâu. Có thể thêm động từ mục đích phía sau.",
        ex: [["我明天去超市。", "Wǒ míngtiān qù chāoshì.", "Ngày mai tôi đi siêu thị."], ["你去哪儿？", "Nǐ qù nǎr?", "Bạn đi đâu?"]] }
    ],
    read: [
      { zh: "你去哪儿？", py: "Nǐ qù nǎr?", vi: "Bạn đi đâu?", note: "哪儿 đứng ở vị trí của nơi chốn cần hỏi." },
      { zh: "我去超市买东西。", py: "Wǒ qù chāoshì mǎi dōngxi.", vi: "Tôi đi siêu thị mua đồ.", note: "去 + nơi chốn + 买 (mục đích)." },
      { zh: "那边有包子和米饭。", py: "Nàbiān yǒu bāozi hé mǐfàn.", vi: "Bên kia có bánh bao và cơm.", note: "和 nối hai danh từ." }
    ],
    quiz: [
      { q: "Số 1 trong số điện thoại thường đọc là:", o: ["yī", "yāo", "líng", "yí"], a: 1, exp: "Trong số điện thoại, 1 thường đọc yāo." },
      { q: "Hỏi “bao nhiêu” dùng từ nào?", o: ["几", "多少", "哪", "谁"], a: 1, exp: "多少 hỏi số lượng; 几 thường hỏi số nhỏ." }
    ]
  },
  {
    id: "h1-07", level: "HSK1", n: 7,
    zh: "我晚上六点半下班", vi: "Tôi tan làm lúc 6 giờ rưỡi tối",
    src: "HSK 1 3.0 BÀI 7 我 晚上六点半下班.pptx",
    pron: [
      "点 diǎn (thanh 3) là giờ, 分 fēn (thanh 1) là phút. Đừng nhầm hai chữ.",
      "半 bàn là “rưỡi”, dùng sau giờ: 六点半 = 6 giờ 30."
    ],
    writing: [
      { zh: "晚", py: "wǎn", note: "Bộ 日 bên trái, 免 bên phải." },
      { zh: "课", py: "kè", note: "Bộ 讠 (ngôn) bên trái, 果 bên phải." }
    ],
    vocab: [
      ["现在", "xiànzài", "danh", "bây giờ"],
      ["点", "diǎn", "lượng từ", "giờ"],
      ["分", "fēn", "lượng từ", "phút"],
      ["半", "bàn", "số", "rưỡi, một nửa"],
      ["早上", "zǎoshang", "danh", "buổi sáng sớm"],
      ["上午", "shàngwǔ", "danh", "buổi sáng (trước trưa)"],
      ["中午", "zhōngwǔ", "danh", "buổi trưa"],
      ["下午", "xiàwǔ", "danh", "buổi chiều"],
      ["晚上", "wǎnshang", "danh", "buổi tối"],
      ["课", "kè", "danh", "tiết học, bài học"],
      ["上课", "shàngkè", "động", "lên lớp"],
      ["见", "jiàn", "động", "gặp"],
      ["电影院", "diànyǐngyuàn", "danh", "rạp chiếu phim"],
      ["看", "kàn", "động", "xem, nhìn"],
      ["吧", "ba", "trợ từ", "(gợi ý, đề nghị)"],
      ["呢", "ne", "trợ từ", "(nhấn mạnh trạng thái)"]
    ],
    grammar: [
      { t: "Cách nói giờ", f: "số + 点 + (số phút / 半 / 分)",
        e: "点 là giờ, 分 là phút, 半 là rưỡi. 七点十分 = 7 giờ 10.",
        ex: [["现在几点？", "Xiànzài jǐ diǎn?", "Bây giờ mấy giờ?"], ["我六点半下班。", "Wǒ liù diǎn bàn xiàbān.", "Tôi tan làm lúc 6 giờ rưỡi."]] },
      { t: "Trợ từ 吧 và 呢", f: "……吧（gợi ý） · ……呢（nhấn mạnh）",
        e: "吧 đề nghị nhẹ nhàng. 呢 nhấn mạnh trạng thái đang diễn ra.",
        ex: [["我们七点见吧。", "Wǒmen qī diǎn jiàn ba.", "Chúng ta gặp lúc 7 giờ nhé."], ["我在上课呢。", "Wǒ zài shàngkè ne.", "Tôi đang lên lớp đấy."]] }
    ],
    read: [
      { zh: "现在下午三点十分。", py: "Xiànzài xiàwǔ sān diǎn shí fēn.", vi: "Bây giờ là 3 giờ 10 chiều.", note: "下午 + giờ + 分." },
      { zh: "我们晚上七点在电影院见，好吗？", py: "Wǒmen wǎnshang qī diǎn zài diànyǐngyuàn jiàn, hǎo ma?", vi: "Chúng ta gặp nhau ở rạp lúc 7 giờ tối, được không?", note: "在 + nơi chốn + 见: hẹn gặp ở đâu." }
    ],
    quiz: [
      { q: "“6 giờ rưỡi” là:", o: ["六点半", "六点十分", "六分", "半六点"], a: 0, exp: "六点半 = 6 giờ 30." },
      { q: "Trợ từ 吧 thường dùng để:", o: ["Hỏi có/không", "Gợi ý, đề nghị", "Phủ định", "Chỉ số lượng"], a: 1, exp: "吧 đặt cuối câu để đề nghị nhẹ nhàng." }
    ]
  },
  {
    id: "h1-08", level: "HSK1", n: 8,
    zh: "我爸爸也在医院工作", vi: "Bố tôi cũng làm việc ở bệnh viện",
    src: "HSK 1 3.0 BÀI 8 我爸爸也在医院工作.pptx",
    pron: [
      "医院 yīyuàn: 院 yuàn có vần üan, đọc tròn môi ở âm ü.",
      "工作 gōngzuò: thanh 1 + thanh 4."
    ],
    writing: [
      { zh: "医", py: "yī", note: "Bộ 匚 bao bên ngoài, 矢 bên trong." },
      { zh: "院", py: "yuàn", note: "Bộ 阝 bên phải (nghĩa gốc là nơi ở), 完 bên trái." }
    ],
    vocab: [
      ["爸爸", "bàba", "danh", "bố"],
      ["医院", "yīyuàn", "danh", "bệnh viện"],
      ["医生", "yīshēng", "danh", "bác sĩ"],
      ["病人", "bìngrén", "danh", "bệnh nhân"],
      ["工作", "gōngzuò", "động", "làm việc"],
      ["饭", "fàn", "danh", "cơm"],
      ["大", "dà", "tính từ", "lớn"],
      ["小", "xiǎo", "tính từ", "nhỏ"],
      ["房间", "fángjiān", "danh", "căn phòng"],
      ["外", "wài", "danh", "bên ngoài"],
      ["桌子", "zhuōzi", "danh", "cái bàn"],
      ["猫", "māo", "danh", "con mèo"],
      ["没", "méi", "phó từ", "không, chưa"],
      ["看见", "kànjiàn", "động", "nhìn thấy"],
      ["学校", "xuéxiào", "danh", "trường học"],
      ["书店", "shūdiàn", "danh", "hiệu sách"],
      ["能", "néng", "năng nguyện", "có thể"]
    ],
    grammar: [
      { t: "在 + nơi chốn + động từ", f: "主语 + 在 + nơi chốn + 工作 / 学习",
        e: "在 chỉ nơi làm việc, học tập. Đặt trước địa điểm.",
        ex: [["我爸爸在医院工作。", "Wǒ bàba zài yīyuàn gōngzuò.", "Bố tôi làm việc ở bệnh viện."]] },
      { t: "也 — cũng", f: "主语 + 也 + 在 / 是 / động từ",
        e: "也 đặt trước 在 (hoặc 是, động từ) để nói “cũng”.",
        ex: [["我也在学校。", "Wǒ yě zài xuéxiào.", "Tôi cũng ở trường."]] },
      { t: "还没…呢 — vẫn chưa", f: "还没 + động từ + 呢",
        e: "Diễn đạt việc vẫn chưa xảy ra, thường dùng với ý hỏi thăm.",
        ex: [["你还没吃饭呢？", "Nǐ hái méi chīfàn ne?", "Bạn vẫn chưa ăn cơm à?"]] }
    ],
    read: [
      { zh: "大医院病人多，医生非常忙。", py: "Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.", vi: "Bệnh viện lớn nhiều bệnh nhân, bác sĩ rất bận.", note: "多 và 忙 là tính từ làm vị ngữ." },
      { zh: "小胡，还没吃饭呢？", py: "Xiǎo Hú, hái méi chīfàn ne?", vi: "Tiểu Hồ, vẫn chưa ăn cơm à?", note: "Gọi thân mật bằng họ thêm 小." },
      { zh: "我们在学校书店前见吧。", py: "Wǒmen zài xuéxiào shūdiàn qián jiàn ba.", vi: "Chúng ta gặp nhau trước hiệu sách ở trường nhé.", note: "前 = phía trước." }
    ],
    quiz: [
      { q: "“Bác sĩ” trong tiếng Trung là:", o: ["医生", "病人", "医院", "工作"], a: 0, exp: "医生 yīshēng = bác sĩ." },
      { q: "Câu đúng: “Mẹ tôi cũng làm việc ở bệnh viện”", o: ["我妈妈也在医院工作", "我妈妈在也医院工作", "我也妈妈在医院工作", "我妈妈医院在工作也"], a: 0, exp: "也 đứng trước 在 + nơi chốn + động từ." }
    ]
  }
]);
