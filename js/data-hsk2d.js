/* Dữ liệu: HSK 2, bài 13–15. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "h2-13", level: "HSK2", n: 13,
    zh: "我们爱上中文课", vi: "Chúng tôi yêu giờ học tiếng Trung",
    src: "HSK2 3.0 BÀI 13.pptx",
    pron: [
      "新年 xīnnián: 新 thanh 1 + 年 thanh 2; 希望 xīwàng: hai chữ đầu thanh 1, nhớ giữ giọng cao.",
      "洗手间 xǐshǒujiān: ba chữ liền nhau, 洗 và 手 đều thanh 3 nên chữ đầu biến thành thanh 2 khi nói nhanh.",
      "可能 kěnéng: 可 thanh 3 + 能 thanh 2; 告诉 gàosu: 诉 đọc thanh nhẹ.",
      "上面 shàngmian, 里面 lǐmian: 面 đọc thanh nhẹ khi đứng sau phương vị từ."
    ],
    writing: [
      { zh: "教", py: "jiāo", note: "Bên trái là 孝, bên phải là 攵 (đánh nhẹ): thầy cô dạy bảo." },
      { zh: "希", py: "xī", note: "Phần trên là 乂, phần dưới là 巾: hy vọng." },
      { zh: "间", py: "jiān", note: "Bộ 门 (cửa) bao 日 (mặt trời): khe sáng giữa hai cánh cửa. Khác 问 (bên trong là 口)." },
      { zh: "班", py: "bān", note: "Hai chữ 王 kẹp chữ 刂: lớp, nhóm." }
    ],
    vocab: [
      ["新年", "xīnnián", "danh", "năm mới"],
      ["教", "jiāo", "động", "dạy"],
      ["花", "huā", "danh", "hoa"],
      ["希望", "xīwàng", "động/danh", "hy vọng"],
      ["上面", "shàngmian", "danh", "phía trên"],
      ["洗手间", "xǐshǒujiān", "danh", "nhà vệ sinh"],
      ["里面", "lǐmian", "danh", "bên trong"],
      ["笔画", "bǐhuà", "danh", "nét chữ"],
      ["可能", "kěnéng", "phó từ/động", "có thể, có lẽ"],
      ["上网", "shàngwǎng", "động", "lên mạng"],
      ["那样", "nàyàng", "đại từ", "như thế, như vậy"],
      ["告诉", "gàosu", "động", "nói cho biết"],
      ["班", "bān", "danh", "lớp"]
    ],
    grammar: [
      { t: "So sánh (7): chênh lệch cụ thể", f: "A + 比 + B + tính từ + số lượng",
        e: "Cụm số lượng đặt sau tính từ để nói rõ mức chênh lệch cụ thể.",
        ex: [["今天的词比昨天多了十个。", "Jīntiān de cí bǐ zuótiān duō le shí ge.", "Từ hôm nay nhiều hơn hôm qua mười từ."], ["姐姐比我大三岁。", "Jiějie bǐ wǒ dà sān suì.", "Chị lớn hơn tôi ba tuổi."], ["坐飞机比坐火车快五个多小时。", "Zuò fēijī bǐ zuò huǒchē kuài wǔ ge duō xiǎoshí.", "Đi máy bay nhanh hơn đi tàu hơn năm tiếng."]] },
      { t: "So sánh (8): chênh lệch nhỏ", f: "A + 比 + B + tính từ + 一点儿 / 一些",
        e: "一点儿 hoặc 一些 đặt sau tính từ để biểu thị chỉ hơn hoặc kém một chút.",
        ex: [["这个本子比我们一起买的那个本子贵一点儿。", "Zhège běnzi bǐ wǒmen yìqǐ mǎi de nàge běnzi guì yìdiǎnr.", "Quyển vở này đắt hơn quyển mình mua cùng nhau một chút."], ["姐姐比我高一点儿。", "Jiějie bǐ wǒ gāo yìdiǎnr.", "Chị cao hơn tôi một chút."], ["那间教室比这间大一些。", "Nà jiān jiàoshì bǐ zhè jiān dà yìxiē.", "Phòng học kia lớn hơn phòng này một chút."]] },
      { t: "Câu song tân ngữ", f: "chủ ngữ + động từ + người + sự vật",
        e: "Một động từ đi với hai tân ngữ: thường tân ngữ thứ nhất chỉ người, thứ hai chỉ sự vật. Có thể dùng với 给 / 送 / 告诉 / 教 / 拿给 / 卖给…",
        ex: [["老师教我们写汉字。", "Lǎoshī jiāo wǒmen xiě Hànzì.", "Cô giáo dạy chúng tôi viết chữ Hán."], ["他拿给我一杯水。", "Tā ná gěi wǒ yì bēi shuǐ.", "Anh ấy đưa cho tôi một ly nước."], ["他卖给我一本中文书。", "Tā mài gěi wǒ yì běn Zhōngwén shū.", "Anh ấy bán cho tôi một quyển sách tiếng Trung."], ["你告诉他我在公园门口等他。", "Nǐ gàosu tā wǒ zài gōngyuán ménkǒu děng tā.", "Bạn nói với anh ấy là tôi đợi ở cổng công viên."]] }
    ],
    read: [
      { zh: "时间过得真快啊！新年就要到了。", py: "Shíjiān guò de zhēn kuài a! Xīnnián jiù yào dào le.", vi: "Thời gian trôi nhanh thật! Năm mới sắp đến rồi.", note: "就要…了: sắp… (bài 10)." },
      { zh: "是啊，她教得很好。因为她，我们都非常爱上中文课了。", py: "Shì a, tā jiāo de hěn hǎo. Yīnwèi tā, wǒmen dōu fēicháng ài shàng Zhōngwén kè le.", vi: "Đúng vậy, cô dạy rất hay. Nhờ cô mà chúng ta đều rất yêu giờ học tiếng Trung.", note: "爱上: yêu thích (bắt đầu thích)." },
      { zh: "我们给她准备个新年礼物吧。你觉得送给她什么好呢？", py: "Wǒmen gěi tā zhǔnbèi ge Xīnnián lǐwù ba. Nǐ juéde sòng gěi tā shénme hǎo ne?", vi: "Mình chuẩn bị cho cô một món quà năm mới nhé. Bạn thấy tặng cô gì thì tốt?", note: "送给 + người + vật." },
      { zh: "我们去花店看看，希望花店还有漂亮的花。", py: "Wǒmen qù huādiàn kànkan, xīwàng huādiàn hái yǒu piàoliang de huā.", vi: "Mình đến tiệm hoa xem thử, hy vọng tiệm còn hoa đẹp.", note: "希望 + mệnh đề." },
      { zh: "“日”比“口”多一笔，写“口”就是“问题”的“问”了。", py: "“Rì” bǐ “kǒu” duō yì bǐ, xiě “kǒu” jiù shì “wèntí” de “wèn” le.", vi: "“日” nhiều hơn “口” một nét, viết “口” thì thành chữ “问” trong “问题”.", note: "比 + số lượng: chênh lệch cụ thể." },
      { zh: "这个本子比我们一起买的那个本子贵一点儿。", py: "Zhège běnzi bǐ wǒmen yìqǐ mǎi de nàge běnzi guì yìdiǎnr.", vi: "Quyển vở này đắt hơn quyển chúng ta cùng mua một chút.", note: "比 + tính từ + 一点儿." },
      { zh: "这么漂亮的本子，不可能贵一点儿吧？", py: "Zhème piàoliang de běnzi, bù kěnéng guì yìdiǎnr ba?", vi: "Quyển vở đẹp thế này, không thể chỉ đắt hơn một chút đâu nhỉ?", note: "不可能: không thể nào." },
      { zh: "我是上网买的，真没那么贵。我买了两个，送你一个。", py: "Wǒ shì shàngwǎng mǎi de, zhēn méi nàme guì. Wǒ mǎile liǎng ge, sòng nǐ yí ge.", vi: "Mình mua trên mạng, thật sự không đắt thế đâu. Mình mua hai quyển, tặng bạn một quyển.", note: "送你一个: câu song tân ngữ." },
      { zh: "新年就要到了，安妮送给我一个新本子。", py: "Xīnnián jiù yào dào le, Ānní sòng gěi wǒ yí ge xīn běnzi.", vi: "Năm mới sắp đến, Annie tặng mình một quyển vở mới.", note: "送给 + người + vật." },
      { zh: "我们班同学也送了王老师漂亮的花，希望她高高兴兴地过个新年。", py: "Wǒmen bān tóngxué yě sòngle Wáng lǎoshī piàoliang de huā, xīwàng tā gāogāoxìngxìng de guò ge Xīnnián.", vi: "Các bạn trong lớp cũng tặng cô Vương những bông hoa đẹp, hy vọng cô đón năm mới vui vẻ.", note: "高高兴兴地: lặp tính từ + 地 (bài 6)." }
    ],
    quiz: [
      { q: "“Chị lớn hơn tôi ba tuổi” là:", o: ["姐姐比我大三岁。", "姐姐比我三岁大。", "姐姐大比我三岁。", "姐姐比三岁我大。"], a: 0, exp: "A 比 B + tính từ + số lượng." },
      { q: "“Cao hơn một chút” là:", o: ["高一点儿", "一点儿高", "很高点儿", "高很多点儿"], a: 0, exp: "Tính từ + 一点儿 / 一些." },
      { q: "Câu song tân ngữ đúng:", o: ["老师教我们汉字。", "老师教汉字我们。", "我们老师教汉字给。", "老师汉字教我们。"], a: 0, exp: "Động từ + người + vật." },
      { q: "“Nhà vệ sinh” là:", o: ["洗手间", "药店", "教室", "饭馆"], a: 0, exp: "洗手间 xǐshǒujiān = nhà vệ sinh." }
    ]
  },
  {
    id: "h2-14", level: "HSK2", n: 14,
    zh: "一个人过年多没意思啊", vi: "Một mình ăn Tết thật chẳng có gì vui",
    src: "HSK2 3.0 BÀI 14.pptx",
    pron: [
      "过年 guònián: 过 thanh 4 + 年 thanh 2; 没意思 méi yìsi: 思 đọc thanh nhẹ.",
      "房子 fángzi, 眼睛 yǎnjing: chữ cuối đọc thanh nhẹ.",
      "男孩儿 nánháir, 女孩儿 nǚháir, 小孩儿 xiǎoháir: vần er ở cuối, cuốn lưỡi nhẹ.",
      "多 duō trong câu cảm thán đọc nhấn mạnh: 多没意思啊!"
    ],
    writing: [
      { zh: "站", py: "zhàn", note: "Bộ 立 (đứng) bên trái, 占 bên phải: đứng." },
      { zh: "包", py: "bāo", note: "Bộ 勹 bao quanh 巳: bọc lại, túi, gói." },
      { zh: "房", py: "fáng", note: "Bộ 户 (cửa nhà) ở trên, 方 ở dưới: căn phòng." },
      { zh: "姓", py: "xìng", note: "Bộ 女 bên trái, 生 bên phải: họ (thời xưa theo họ mẹ)." }
    ],
    vocab: [
      ["站", "zhàn", "động", "đứng"],
      ["包", "bāo", "danh", "túi, cặp, gói"],
      ["过年", "guònián", "động", "ăn Tết, đón năm mới"],
      ["没意思", "méi yìsi", "tính từ", "chán, không thú vị"],
      ["位", "wèi", "lượng từ", "vị (lịch sự khi chỉ người)"],
      ["前面", "qiánmian", "danh", "phía trước"],
      ["房子", "fángzi", "danh", "nhà, căn phòng"],
      ["小孩儿", "xiǎoháir", "danh", "trẻ em"],
      ["女孩儿", "nǚháir", "danh", "bé gái"],
      ["姓", "xìng", "động/danh", "họ"],
      ["眼睛", "yǎnjing", "danh", "mắt"],
      ["跳舞", "tiàowǔ", "động", "nhảy múa"]
    ],
    grammar: [
      { t: "Câu tồn hiện (2): dùng 着", f: "nơi chốn + động từ + 着 + người / vật",
        e: "Trước động từ là cụm chỉ nơi chốn; sau 着 thường là người hoặc vật chưa xác định, để nói nơi đó đang có ai hoặc cái gì.",
        ex: [["你家楼下站着一个人。", "Nǐ jiā lóuxià zhànzhe yí ge rén.", "Dưới nhà bạn có một người đang đứng."], ["爸爸手里拿着一杯咖啡。", "Bàba shǒu lǐ názhe yì bēi kāfēi.", "Trong tay bố đang cầm một ly cà phê."], ["那间教室里坐着不少学生。", "Nà jiān jiàoshì lǐ zuòzhe bù shǎo xuésheng.", "Trong phòng học kia có không ít học sinh đang ngồi."], ["我楼下还住着一家中国人。", "Wǒ lóu xià hái zhùzhe yì jiā Zhōngguó rén.", "Dưới nhà tôi còn có một gia đình người Trung Quốc ở."]] },
      { t: "Phó từ mức độ 多 trong câu cảm thán", f: "多 + tính từ + 啊",
        e: "多 dùng trong câu cảm thán để nhấn mạnh mức độ rất cao.",
        ex: [["你一个人在这儿多没意思啊！", "Nǐ yí ge rén zài zhèr duō méi yìsi a!", "Một mình bạn ở đây thì chán biết bao!"], ["我们一起去多好啊！", "Wǒmen yìqǐ qù duō hǎo a!", "Chúng ta cùng đi thì tuyệt biết bao!"], ["多好看啊！买这件吧。", "Duō hǎokàn a! Mǎi zhè jiàn ba.", "Đẹp quá! Mua cái này đi."]] },
      { t: "Bổ ngữ xu hướng kép", f: "động từ + 上 / 下 / 进 / 出 / 回 / 过 / 起 + 来 / 去",
        e: "Các từ 上、下、进、出、回、过 kết hợp với 来 / 去, cùng với 起来, đặt sau động từ để chỉ hướng của hành động.",
        ex: [["他经常跑上来找我玩。", "Tā jīngcháng pǎo shànglái zhǎo wǒ wán.", "Cậu bé thường chạy lên tìm tôi chơi."], ["楼不高，我们走上去吧。", "Lóu bù gāo, wǒmen zǒu shàngqù ba.", "Tòa nhà không cao, mình đi bộ lên đi."], ["一听到老师叫他的名字，他就站起来了。", "Yì tīngdào lǎoshī jiào tā de míngzi, tā jiù zhàn qǐlái le.", "Vừa nghe cô giáo gọi tên, cậu ấy liền đứng dậy."]] }
    ],
    read: [
      { zh: "那个人穿着黑色的裤子，手里还拿着一个黑色的包。", py: "Nàge rén chuānzhe hēisè de kùzi, shǒu lǐ hái názhe yí ge hēisè de bāo.", vi: "Người đó mặc quần màu đen, trong tay còn cầm một chiếc túi đen.", note: "穿着, 拿着: trạng thái đang duy trì." },
      { zh: "我看见那个人了，他是我男朋友。", py: "Wǒ kànjiàn nàge rén le, tā shì wǒ nánpéngyou.", vi: "Tôi thấy người đó rồi, anh ấy là bạn trai tôi.", note: "男朋友: bạn trai." },
      { zh: "同乐，真是你呀！上次打电话，你说有时间过来看我，没想到这么快就来了！", py: "Tónglè, zhēn shì nǐ ya! Shàng cì dǎ diànhuà, nǐ shuō yǒu shíjiān guòlái kàn wǒ, méi xiǎngdào zhème kuài jiù lái le!", vi: "Đồng Lạc, đúng là anh rồi! Lần trước gọi điện anh nói có thời gian sẽ qua thăm em, không ngờ đến nhanh thế!", note: "没想到: không ngờ." },
      { zh: "就要过年了，你一个人在这儿多没意思啊，所以我就早过来了。", py: "Jiù yào guònián le, nǐ yí ge rén zài zhèr duō méi yìsi a, suǒyǐ wǒ jiù zǎo guòlái le.", vi: "Sắp Tết rồi, em một mình ở đây chán biết bao, nên anh qua sớm.", note: "Câu tiêu đề của bài." },
      { zh: "一飞，你旁边这位是？", py: "Yīfēi, nǐ pángbiān zhè wèi shì?", vi: "Nhất Phi, vị bên cạnh em đây là?", note: "位: lượng từ lịch sự." },
      { zh: "同乐，这是李文，他在我们学校学医。", py: "Tónglè, zhè shì Lǐ Wén, tā zài wǒmen xuéxiào xué yī.", vi: "Đồng Lạc, đây là Lý Văn, cậu ấy học y ở trường chúng em.", note: "学医: học y." },
      { zh: "一飞，你住的房子真不错，很大，离学校也不远。", py: "Yīfēi, nǐ zhù de fángzi zhēn búcuò, hěn dà, lí xuéxiào yě bù yuǎn.", vi: "Nhất Phi, nhà em ở thật tốt, rộng, lại không xa trường.", note: "离 + nơi + 不远 (bài 9)." },
      { zh: "我楼下还住着一家中国人，他们人很好。", py: "Wǒ lóu xià hái zhùzhe yì jiā Zhōngguó rén, tāmen rén hěn hǎo.", vi: "Dưới nhà em còn có một gia đình người Trung Quốc ở, họ rất tốt.", note: "Câu tồn hiện với 着." },
      { zh: "我男朋友姓杨，叫杨同乐。他高个子，大眼睛，唱歌唱得很好，跳舞跳得也不错。", py: "Wǒ nánpéngyou xìng Yáng, jiào Yáng Tónglè. Tā gāo gèzi, dà yǎnjing, chànggē chàng de hěn hǎo, tiàowǔ tiào de yě búcuò.", vi: "Bạn trai tôi họ Dương, tên Dương Đồng Lạc. Anh ấy dáng cao, mắt to, hát rất hay, nhảy cũng khá.", note: "你姓什么？— 我姓…: hỏi và trả lời họ." }
    ],
    quiz: [
      { q: "“Một mình ở đây chán biết bao” là:", o: ["你一个人在这儿多没意思啊！", "你一个人在这儿很多没意思！", "你多一个人没意思啊！", "你一个人多在这儿没意思！"], a: 0, exp: "多 + tính từ + 啊: câu cảm thán." },
      { q: "“Trong tay cầm một ly cà phê” là:", o: ["手里拿着一杯咖啡", "手里拿一杯着咖啡", "拿着手里一杯咖啡", "咖啡拿着手里一杯"], a: 0, exp: "Nơi chốn + động từ + 着 + vật." },
      { q: "“Mắt” là:", o: ["眼睛", "房子", "小孩儿", "前面"], a: 0, exp: "眼睛 yǎnjing = mắt." },
      { q: "“Chạy lên” (hướng về phía người nói) là:", o: ["跑上来", "跑下去", "跑进去", "跑出去"], a: 0, exp: "上来: lên về phía người nói." }
    ]
  },
  {
    id: "h2-15", level: "HSK2", n: 15,
    zh: "我想再去一次中国", vi: "Tôi muốn đến Trung Quốc một lần nữa",
    src: "HSK2 3.0 BÀI 15.pptx",
    pron: [
      "出国 chūguó: 出 thanh 1 + 国 thanh 2; 出门 chūmén đọc liền.",
      "机场 jīchǎng, 机票 jīpiào: 机 thanh 1 đọc cao đều.",
      "颐和园 Yíhéyuán: 颐 thanh 2, 和 hé thanh 2, 园 thanh 2: ba thanh 2 liên tiếp.",
      "好像 hǎoxiàng: 好 thanh 3 đứng trước thanh 4, đọc nửa thanh 3."
    ],
    writing: [
      { zh: "机", py: "jī", note: "Bộ 木 (gỗ) bên trái, 几 bên phải: máy móc." },
      { zh: "场", py: "chǎng", note: "Bộ 土 (đất) bên trái, 汤 bên phải (giản thể): bãi đất, sân." },
      { zh: "票", py: "piào", note: "Phần trên là 西, phần dưới là 示: vé, phiếu." },
      { zh: "飞", py: "fēi", note: "Chữ giản thể của 飛: hình con chim dang cánh bay." }
    ],
    vocab: [
      ["姓名", "xìngmíng", "danh", "họ tên"],
      ["出国", "chūguó", "động", "ra nước ngoài"],
      ["门票", "ménpiào", "danh", "vé vào cửa"],
      ["高中", "gāozhōng", "danh", "trung học phổ thông"],
      ["出门", "chūmén", "động", "ra ngoài, rời khỏi nhà"],
      ["路", "lù", "danh", "đường"],
      ["颐和园", "Yíhéyuán", "danh", "Di Hòa Viên (Bắc Kinh)"],
      ["机场", "jīchǎng", "danh", "sân bay"],
      ["机票", "jīpiào", "danh", "vé máy bay"],
      ["飞", "fēi", "động", "bay"],
      ["好像", "hǎoxiàng", "phó từ", "hình như, dường như"],
      ["鸟", "niǎo", "danh", "con chim"]
    ],
    grammar: [
      { t: "Bổ ngữ động lượng (1): số + 次", f: "động từ + số + 次 (+ tên người / địa điểm)",
        e: "“Số + 次” đặt sau động từ để chỉ số lần hành động xảy ra. Nếu tân ngữ là tên người hay địa điểm, đặt trước hoặc sau bổ ngữ đều được.",
        ex: [["我想去中国，虽然去过一次，但是很想再去一次。", "Wǒ xiǎng qù Zhōngguó, suīrán qùguo yí cì, dànshì hěn xiǎng zài qù yí cì.", "Tôi muốn đến Trung Quốc, tuy đã đi một lần nhưng rất muốn đi lại."], ["安妮去过一次北京。", "Ānnī qùguo yí cì Běijīng.", "Annie đã đến Bắc Kinh một lần."], ["我要再去一次北京。", "Wǒ yào zài qù yí cì Běijīng.", "Tôi sẽ lại đến Bắc Kinh một lần nữa."]] },
      { t: "Bổ ngữ động lượng (2): vị trí tân ngữ", f: "động từ + số + 次 + vật   /   động từ + đại từ + số + 次",
        e: "Nếu tân ngữ là danh từ chỉ vật thì đặt sau bổ ngữ; nếu là đại từ thì đặt trước bổ ngữ.",
        ex: [["因为我想再吃一次烤鸭，再喝一次奶茶。", "Yīnwèi wǒ xiǎng zài chī yí cì kǎoyā, zài hē yí cì nǎichá.", "Vì tôi muốn ăn thêm một lần vịt quay, uống thêm một lần trà sữa."], ["我想找他一次。", "Wǒ xiǎng zhǎo tā yí cì.", "Tôi muốn tìm anh ấy một lần."], ["安妮来过这儿两次。", "Ānnī lái guo zhèr liǎng cì.", "Annie đã đến đây hai lần."]] },
      { t: "Câu chữ 有 (2): 有 + số lượng", f: "有 + cụm số lượng",
        e: "“有 + cụm từ chỉ số lượng” nhấn mạnh đã đạt đến một số lượng hoặc mức độ nào đó, thường là khá nhiều.",
        ex: [["你有一年没回国了吧？", "Nǐ yǒu yì nián méi huíguó le ba?", "Chắc bạn đã một năm chưa về nước rồi nhỉ?"], ["你女儿今年有十岁了吗？", "Nǐ nǚ'ér jīnnián yǒu shí suì le ma?", "Con gái bạn năm nay đã mười tuổi chưa?"], ["我有一个月没给家里打电话了。", "Wǒ yǒu yí ge yuè méi gěi jiālǐ dǎ diànhuà le.", "Tôi đã một tháng chưa gọi điện về nhà."]] }
    ],
    read: [
      { zh: "考试就要开始了，请大家先写上姓名，写好后就可以做题了。", py: "Kǎoshì jiù yào kāishǐ le, qǐng dàjiā xiān xiě shàng xìngmíng, xiě hǎo hòu jiù kěyǐ zuò tí le.", vi: "Sắp bắt đầu thi, mời mọi người viết họ tên trước, viết xong là có thể làm bài.", note: "写上: viết lên." },
      { zh: "你们考完试想做什么？", py: "Nǐmen kǎowán shì xiǎng zuò shénme?", vi: "Thi xong các bạn muốn làm gì?", note: "考完: thi xong." },
      { zh: "我很想去中国，虽然去过一次，但是很想再去一次。", py: "Wǒ hěn xiǎng qù Zhōngguó, suīrán qùguo yí cì, dànshì hěn xiǎng zài qù yí cì.", vi: "Mình rất muốn đến Trung Quốc, tuy đã đi một lần nhưng rất muốn đi lại.", note: "Câu tiêu đề của bài." },
      { zh: "考试完了，我现在可以出国旅游了。", py: "Kǎoshì wán le, wǒ xiànzài kěyǐ chūguó lǚyóu le.", vi: "Thi xong rồi, bây giờ mình có thể ra nước ngoài du lịch.", note: "出国: ra nước ngoài." },
      { zh: "因为我想再吃一次烤鸭，再喝一次奶茶，再去北京大学看一次电影……", py: "Yīnwèi wǒ xiǎng zài chī yí cì kǎoyā, zài hē yí cì nǎichá, zài qù Běijīng Dàxué kàn yí cì diànyǐng……", vi: "Vì mình muốn ăn thêm một lần vịt quay, uống thêm một lần trà sữa, lại đến Đại học Bắc Kinh xem một lần phim…", note: "再 + động từ + 一次." },
      { zh: "我的高中同学就在颐和园上班，可以让他给你好好介绍介绍。", py: "Wǒ de gāozhōng tóngxué jiù zài Yíhéyuán shàngbān, kěyǐ ràng tā gěi nǐ hǎohāo jièshào jièshào.", vi: "Bạn cấp ba của mình làm việc ở Di Hòa Viên, có thể nhờ cậu ấy giới thiệu cho bạn kỹ hơn.", note: "介绍介绍: lặp động từ, nhẹ nhàng." },
      { zh: "出门旅游，多个朋友多条路。", py: "Chūmén lǚyóu, duō ge péngyou duō tiáo lù.", vi: "Đi du lịch, thêm một người bạn là thêm một con đường.", note: "Tục ngữ: nhiều bạn nhiều đường." },
      { zh: "我还在网上买好颐和园的门票了呢。", py: "Wǒ hái zài wǎngshàng mǎi hǎo Yíhéyuán de ménpiào le ne.", vi: "Mình còn mua xong vé vào Di Hòa Viên trên mạng rồi đấy.", note: "买好: mua xong." },
      { zh: "你有一年没回国了吧？", py: "Nǐ yǒu yì nián méi huíguó le ba?", vi: "Chắc bạn đã một năm chưa về nước rồi nhỉ?", note: "有 + số lượng: đã được… (bài 15)." },
      { zh: "这次的机票虽然有点儿贵，但想到就要飞北京了，我还是很高兴的。", py: "Zhè cì de jīpiào suīrán yǒudiǎnr guì, dàn xiǎngdào jiù yào fēi Běijīng le, wǒ háishi hěn gāoxìng de.", vi: "Vé máy bay lần này tuy hơi đắt, nhưng nghĩ đến sắp bay đến Bắc Kinh, mình vẫn rất vui.", note: "想到: nghĩ đến." }
    ],
    quiz: [
      { q: "“Đã đi một lần” là:", o: ["去过一次", "去一次过", "一次去过", "过去一次"], a: 0, exp: "Động từ + 过 + số + 次." },
      { q: "Tân ngữ là đại từ thì đặt ở đâu?", o: ["Trước bổ ngữ động lượng: 找他一次", "Sau bổ ngữ: 找一次他", "Đầu câu", "Cuối câu"], a: 0, exp: "Đại từ đứng trước bổ ngữ động lượng." },
      { q: "“Vé máy bay” là:", o: ["机票", "门票", "火车票", "电影票"], a: 0, exp: "机票 jīpiào = vé máy bay." },
      { q: "“Tôi đã một tháng chưa gọi điện về nhà” là:", o: ["我有一个月没给家里打电话了。", "我一个月有没给家里打电话了。", "我没有一个月给家里打电话。", "我给家里没打电话一个月了。"], a: 0, exp: "有 + số lượng + 没 + động từ + 了." }
    ]
  }
]);
