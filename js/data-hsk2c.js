/* Dữ liệu: HSK 2, bài 10–12. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "h2-10", level: "HSK2", n: 10,
    zh: "就要考试了", vi: "Sắp thi rồi",
    src: "HSK2 3.0 BÀI 10.pptx",
    pron: [
      "后面 hòumian: 面 đọc thanh nhẹ khi đứng sau phương vị từ; 开学 kāixué: 学 thanh 2.",
      "考试 kǎoshì: 考 thanh 3 + 试 thanh 4; đọc dứt khoát ở âm cuối.",
      "还是 háishi: đọc 还 là hái (thanh 2), không đọc huán; 是 thanh nhẹ.",
      "快要…了 kuàiyào…le: 要 yào thanh 4 giữ rõ, 了 thanh nhẹ cuối câu."
    ],
    writing: [
      { zh: "错", py: "cuò", note: "Bộ 钅 (kim loại) bên trái, 昔 bên phải: sai, nhầm." },
      { zh: "笑", py: "xiào", note: "Bộ 竹 (trúc) ở trên, 夭 ở dưới: người cười vui." },
      { zh: "题", py: "tí", note: "Bên trái là 是, bên phải là 页: đề, câu hỏi." },
      { zh: "帮", py: "bāng", note: "Phần trên là 邦, phần dưới là 巾: giúp đỡ." }
    ],
    vocab: [
      ["开学", "kāixué", "động", "khai giảng, vào học"],
      ["门", "mén", "danh", "cửa"],
      ["后面", "hòumian", "danh", "phía sau"],
      ["笔", "bǐ", "danh", "cái bút"],
      ["帮", "bāng", "động", "giúp, giúp đỡ"],
      ["考试", "kǎoshì", "động/danh", "thi, kỳ thi"],
      ["本子", "běnzi", "danh", "quyển vở"],
      ["词", "cí", "danh", "từ"],
      ["错", "cuò", "tính từ", "sai, không đúng"],
      ["题", "tí", "danh", "câu hỏi, bài tập"],
      ["还是", "háishi", "liên từ", "hay là (câu hỏi lựa chọn)"],
      ["考", "kǎo", "động", "thi, kiểm tra"],
      ["快要", "kuàiyào", "phó từ", "sắp"],
      ["笑", "xiào", "động", "cười"]
    ],
    grammar: [
      { t: "Câu hỏi lựa chọn 是……还是……", f: "(是) A 还是 B？",
        e: "Liên từ 还是 dùng trong câu hỏi để người nghe chọn một trong hai hoặc nhiều phương án.",
        ex: [["妈妈，是您准备考试还是我准备考试？", "Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?", "Mẹ, là mẹ chuẩn bị thi hay con chuẩn bị thi?"], ["你更喜欢打篮球、踢足球还是游泳？", "Nǐ gèng xǐhuan dǎ lánqiú, tī zúqiú háishi yóuyǒng?", "Bạn thích chơi bóng rổ, đá bóng hay bơi hơn?"], ["我们什么时候去看电影？今天还是明天？", "Wǒmen shénme shíhou qù kàn diànyǐng? Jīntiān háishi míngtiān?", "Khi nào chúng ta đi xem phim? Hôm nay hay ngày mai?"]] },
      { t: "Câu chủ vị có vị ngữ chủ vị", f: "chủ ngữ + (chủ ngữ nhỏ + vị ngữ)",
        e: "Cụm chủ vị làm vị ngữ để miêu tả hoặc giải thích chủ ngữ lớn.",
        ex: [["我的书包你看见了吗？", "Wǒ de shūbāo nǐ kànjiàn le ma?", "Cặp sách của tôi bạn thấy chưa?"], ["弟弟手很小。", "Dìdi shǒu hěn xiǎo.", "Em trai tay rất nhỏ."], ["这件事他知道。", "Zhè jiàn shì tā zhīdào.", "Việc này anh ấy biết."]] },
      { t: "Sắp xảy ra: 要 / 快 / 快要 / 就要……了", f: "快要 / 就要 + động từ + 了",
        e: "Diễn tả việc sắp xảy ra. Nếu câu có trạng ngữ chỉ thời gian (ngày mai, tuần sau, ba phút nữa…) thì thường dùng 就要……了.",
        ex: [["饭菜快要做好了。", "Fàncài kuài yào zuò hǎo le.", "Cơm nước sắp nấu xong rồi."], ["火车快开了。", "Huǒchē kuài kāi le.", "Tàu sắp chạy rồi."], ["我们下星期就要考试了。", "Wǒmen xià xīngqī jiù yào kǎoshì le.", "Tuần sau chúng tôi sắp thi rồi."]] }
    ],
    read: [
      { zh: "小明，你们明天开学，你准备好了吗？", py: "Xiǎo Míng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?", vi: "Tiểu Minh, ngày mai các con khai giảng, con chuẩn bị xong chưa?", note: "准备好: chuẩn bị xong." },
      { zh: "我的书包你看见了吗？", py: "Wǒ de shūbāo nǐ kànjiàn le ma?", vi: "Cặp sách của con bố thấy chưa?", note: "Câu chủ vị có vị ngữ chủ vị." },
      { zh: "书包在门后面。", py: "Shūbāo zài mén hòumian.", vi: "Cặp sách ở sau cửa.", note: "在 + nơi chốn + 后面." },
      { zh: "这次爸爸帮你，下次你自己准备，好不好？", py: "Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bù hǎo?", vi: "Lần này bố giúp con, lần sau con tự chuẩn bị, được không?", note: "好不好: câu hỏi chính phản xin ý kiến." },
      { zh: "小雪，你在做什么呢？", py: "Xiǎoxuě, nǐ zài zuò shénme ne?", vi: "Tiểu Tuyết, con đang làm gì thế?", note: "在…呢: đang…" },
      { zh: "明天考试，我在看书呢。", py: "Míngtiān kǎoshì, wǒ zài kàn shū ne.", vi: "Ngày mai thi, con đang xem sách.", note: "在…呢 chỉ hành động đang diễn ra." },
      { zh: "本子上做错的题也要看一看。", py: "Běnzi shàng zuò cuò de tí yě yào kàn yi kàn.", vi: "Những câu làm sai trong vở cũng phải xem lại.", note: "做错: làm sai. 看一看: xem một chút." },
      { zh: "饭菜快要做好了，你叫弟弟一起去洗手吧。", py: "Fàncài kuài yào zuò hǎo le, nǐ jiào dìdi yìqǐ qù xǐshǒu ba.", vi: "Cơm nước sắp xong rồi, con gọi em đi rửa tay nhé.", note: "快要…了: sắp…" },
      { zh: "我问他们：“是我和弟弟上学还是你们上学？”", py: "Wǒ wèn tāmen: “Shì wǒ hé dìdi shàng xué háishi nǐmen shàng xué?”", vi: "Tôi hỏi họ: “Là em trai và con đi học hay bố mẹ đi học?”", note: "是…还是…: câu hỏi lựa chọn." }
    ],
    quiz: [
      { q: "“Sắp khai giảng rồi” là:", o: ["快要开学了", "快开了学", "开学快要", "了开学快要"], a: 0, exp: "快要 + động từ + 了: sắp…" },
      { q: "Chọn từ đúng: 你喝茶____咖啡？", o: ["还是", "和", "也", "就"], a: 0, exp: "Câu hỏi lựa chọn dùng 还是." },
      { q: "“Câu hỏi, bài tập” là:", o: ["题", "词", "笔", "门"], a: 0, exp: "题 tí = câu hỏi, đề bài." },
      { q: "“Phía sau cửa” là:", o: ["门后面", "后面门", "门面后", "后门面"], a: 0, exp: "Danh từ + 后面: phía sau…" }
    ]
  },
  {
    id: "h2-11", level: "HSK2", n: 11,
    zh: "我最喜欢吃中国菜", vi: "Tôi thích ăn đồ ăn Trung Quốc nhất",
    src: "HSK2 3.0 BÀI 11.pptx",
    pron: [
      "疼 téng: thanh 2, âm đầu t bật hơi mạnh; 头疼 tóuténg: hai thanh 2 liền nhau.",
      "经常 jīngcháng: 经 thanh 1, 常 thanh 2; nhấn nhẹ chữ đầu.",
      "着 zhe đọc thanh nhẹ khi là trợ từ động thái: 坐着 zuòzhe, 开着 kāizhe.",
      "最 zuì: thanh 4 dứt khoát; 药 yào thanh 4; 身体 shēntǐ: 体 thanh 3."
    ],
    writing: [
      { zh: "疼", py: "téng", note: "Bộ 疒 (bệnh) bao ngoài, 冬 bên trong: đau." },
      { zh: "药", py: "yào", note: "Bộ 艹 (cỏ) ở trên, 约 ở dưới: thuốc làm từ cỏ cây." },
      { zh: "最", py: "zuì", note: "Phần trên là 日, phần dưới là 取: nhất, hơn tất cả." },
      { zh: "头", py: "tóu", note: "Chữ giản thể của 頭: hai chấm ở trên, nét 大 ở dưới." }
    ],
    vocab: [
      ["头", "tóu", "danh", "đầu"],
      ["疼", "téng", "tính từ", "đau"],
      ["经常", "jīngcháng", "phó từ", "thường xuyên"],
      ["动", "dòng", "động", "động đậy, cử động"],
      ["着", "zhe", "trợ từ", "đang (trợ từ động thái chỉ trạng thái tiếp diễn)"],
      ["路上", "lùshang", "danh", "trên đường"],
      ["慢", "màn", "tính từ", "chậm"],
      ["进", "jìn", "động", "vào"],
      ["药", "yào", "danh", "thuốc"],
      ["身体", "shēntǐ", "danh", "cơ thể, sức khỏe"],
      ["时", "shí", "danh", "khi, lúc"],
      ["最", "zuì", "phó từ", "nhất"],
      ["药店", "yàodiàn", "danh", "tiệm thuốc"]
    ],
    grammar: [
      { t: "Trợ từ động thái 着 (1): trạng thái kéo dài", f: "động từ + 着 (phủ định: 没(有) + động từ + 着)",
        e: "着 đứng sau động từ để biểu thị hành động hoặc trạng thái đang duy trì. Phủ định thêm 没(有) trước động từ.",
        ex: [["那你在这儿坐着。", "Nà nǐ zài zhèr zuòzhe.", "Vậy bạn ngồi đây nhé."], ["教室的门开着。", "Jiàoshì de mén kāizhe.", "Cửa lớp đang mở."], ["教室的门没开着。", "Jiàoshì de mén méi kāizhe.", "Cửa lớp không mở."], ["妹妹笑着对我说：“再见！”", "Mèimei xiàozhe duì wǒ shuō: “Zàijiàn!”", "Em gái cười nói với tôi: “Tạm biệt!”"]] },
      { t: "Trợ từ động thái 着 (2): vị trí tân ngữ", f: "động từ + 着 + tân ngữ",
        e: "Trong câu biểu thị trạng thái kéo dài, tân ngữ đứng sau 着.",
        ex: [["他穿着白色的裤子。", "Tā chuānzhe báisè de kùzi.", "Anh ấy mặc chiếc quần màu trắng."], ["陈天中没拿着咖啡。", "Chén Tiānzhōng méi názhe kāfēi.", "Trần Thiên Trung không cầm cà phê."], ["王老师开着车呢。", "Wáng lǎoshī kāizhe chē ne.", "Cô Vương đang lái xe."]] },
      { t: "Phó từ mức độ 最", f: "最 + tính từ / động từ tâm lý",
        e: "最 đứng trước tính từ hoặc động từ chỉ tâm lý, biểu thị mức cao nhất so với mọi người hoặc sự vật cùng loại.",
        ex: [["你最喜欢吃中国菜。", "Nǐ zuì xǐhuan chī Zhōngguó cài.", "Bạn thích ăn món Trung Quốc nhất."], ["在我们家，爸爸最高。", "Zài wǒmen jiā, bàba zuì gāo.", "Trong nhà chúng tôi, bố cao nhất."], ["今天是今年最热的一天。", "Jīntiān shì jīnnián zuì rè de yì tiān.", "Hôm nay là ngày nóng nhất năm nay."]] }
    ],
    read: [
      { zh: "家月，都下课了，你怎么还不回家？", py: "Jiāyuè, dōu xiàkè le, nǐ zěnme hái bù huí jiā?", vi: "Gia Nguyệt, tan học rồi mà sao em còn chưa về nhà?", note: "都…了: đã… rồi." },
      { zh: "我头疼，不太舒服。", py: "Wǒ tóuténg, bú tài shūfu.", vi: "Em đau đầu, không được khỏe lắm.", note: "头疼: đau đầu." },
      { zh: "我想休息一下，现在不能动，一动就疼。", py: "Wǒ xiǎng xiūxi yíxià, xiànzài bù néng dòng, yí dòng jiù téng.", vi: "Em muốn nghỉ một lát, bây giờ không thể cử động, cử động là đau.", note: "一…就… ôn lại từ bài 7." },
      { zh: "那你在这儿坐着，我去开车，一会儿送你去医院。", py: "Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē, yíhuǐr sòng nǐ qù yīyuàn.", vi: "Vậy em ngồi đây, cô đi lấy xe, lát nữa đưa em đến bệnh viện.", note: "坐着: đang ngồi." },
      { zh: "现在路上车多，还下着雪，我开慢一点儿。", py: "Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.", vi: "Bây giờ trên đường nhiều xe, lại còn đang có tuyết, tôi lái chậm một chút.", note: "下着雪: tuyết đang rơi." },
      { zh: "喂，李文，王老师开着车呢，你找她有事吗？", py: "Wéi, Lǐ Wén, Wáng lǎoshī kāizhe chē ne, nǐ zhǎo tā yǒu shì ma?", vi: "A lô, Lý Văn, cô Vương đang lái xe, bạn tìm cô có việc gì không?", note: "开着车: đang lái xe." },
      { zh: "你最喜欢吃中国菜，我做几个中国菜吧。", py: "Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.", vi: "Em thích ăn món Trung Quốc nhất, cô nấu vài món Trung Quốc nhé.", note: "Câu tiêu đề của bài." },
      { zh: "身体不舒服时更要好好吃饭。", py: "Shēntǐ bù shūfu shí gèng yào hǎohǎo chīfàn.", vi: "Khi cơ thể không khỏe thì càng phải ăn uống đàng hoàng.", note: "…时: khi…" },
      { zh: "医生开了一些药，吃完就好多了。", py: "Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.", vi: "Bác sĩ kê một ít thuốc, uống xong là đỡ nhiều.", note: "好多了: đỡ hơn nhiều." }
    ],
    quiz: [
      { q: "“Cửa đang mở” là:", o: ["门开着", "门开了着", "门着开", "开门着"], a: 0, exp: "Động từ + 着 biểu thị trạng thái đang duy trì." },
      { q: "Chọn câu đúng:", o: ["他最喜欢踢足球。", "他喜欢最踢足球。", "他最踢足球喜欢。", "最他喜欢踢足球。"], a: 0, exp: "最 đứng trước động từ tâm lý 喜欢." },
      { q: "“Tiệm thuốc” là:", o: ["药店", "饭馆", "商店", "咖啡店"], a: 0, exp: "药店 yàodiàn = tiệm thuốc." },
      { q: "Phủ định đúng của 着 là:", o: ["门没开着", "门不开着", "门没着开", "门开着没"], a: 0, exp: "Dùng 没(有) trước động từ: 没开着." }
    ]
  },
  {
    id: "h2-12", level: "HSK2", n: 12,
    zh: "这里比北京冷多了", vi: "Ở đây lạnh hơn Bắc Kinh nhiều",
    src: "HSK2 3.0 BÀI 12.pptx",
    pron: [
      "冷多了 lěng duō le: 冷 thanh 3, 多 thanh 1; 多了 đọc liền, 了 thanh nhẹ.",
      "事情 shìqing: 情 đọc thanh nhẹ; 地铁 dìtiě: 铁 thanh 3.",
      "小时候 xiǎoshíhou: 候 đọc thanh nhẹ; 外面 wàimian: 面 thanh nhẹ.",
      "从小 cóngxiǎo: 从 thanh 2 + 小 thanh 3."
    ],
    writing: [
      { zh: "阴", py: "yīn", note: "Bộ 阝 (gò, đồi) bên trái, 月 bên phải: trời âm u." },
      { zh: "晴", py: "qíng", note: "Bộ 日 (mặt trời) bên trái, 青 bên phải: trời nắng." },
      { zh: "楼", py: "lóu", note: "Bộ 木 (gỗ) bên trái, 娄 bên phải: tòa nhà, tầng." },
      { zh: "站", py: "zhàn", note: "Bộ 立 (đứng) bên trái, 占 bên phải: đứng; trạm." }
    ],
    vocab: [
      ["事情", "shìqing", "danh", "sự việc, chuyện"],
      ["晴", "qíng", "tính từ", "nắng, quang đãng"],
      ["正", "zhèng", "phó từ", "đang"],
      ["外面", "wàimian", "danh", "bên ngoài"],
      ["阴", "yīn", "tính từ", "âm u, nhiều mây"],
      ["从小", "cóngxiǎo", "phó từ", "từ nhỏ"],
      ["地铁", "dìtiě", "danh", "tàu điện ngầm"],
      ["楼", "lóu", "danh", "tòa nhà, tầng"],
      ["站", "zhàn", "danh/động", "trạm; đứng"],
      ["小时候", "xiǎoshíhou", "danh", "lúc nhỏ"],
      ["好", "hǎo", "phó từ", "thật là (nhấn mạnh mức độ)"]
    ],
    grammar: [
      { t: "So sánh (4): 多了 / 得多", f: "A + 比 + B + tính từ + 多了 / 得多",
        e: "Đặt 多了 hoặc 得多 sau tính từ để biểu thị mức chênh lệch rất lớn.",
        ex: [["我这里比北京冷多了。", "Wǒ zhèlǐ bǐ Běijīng lěng duō le.", "Chỗ tôi lạnh hơn Bắc Kinh nhiều."], ["坐飞机比坐火车快得多。", "Zuò fēijī bǐ zuò huǒchē kuài de duō.", "Đi máy bay nhanh hơn đi tàu hỏa nhiều."], ["他觉得红茶比绿茶好喝得多。", "Tā juéde hóngchá bǐ lǜchá hǎohē de duō.", "Anh ấy thấy hồng trà ngon hơn trà xanh nhiều."]] },
      { t: "So sánh (5): 比 với bổ ngữ trạng thái", f: "A + 动词 + 得 + 比 + B + tính từ   /   A + 比 + B + 动词 + 得 + tính từ",
        e: "Khi động từ có bổ ngữ trạng thái, 比 có thể đặt trước hoặc sau động từ.",
        ex: [["昨天比今天下得大。", "Zuótiān bǐ jīntiān xià de dà.", "Hôm qua mưa (tuyết) to hơn hôm nay."], ["妈妈比我睡得晚。", "Māma bǐ wǒ shuì de wǎn.", "Mẹ ngủ muộn hơn tôi."], ["李文跑得比白家月快。", "Lǐ Wén pǎo de bǐ Bái Jiāyuè kuài.", "Lý Văn chạy nhanh hơn Bạch Gia Nguyệt."]] },
      { t: "So sánh (6): động từ có tân ngữ", f: "A + động từ + tân ngữ + động từ + 得 + 比 + B + tính từ",
        e: "Nếu động từ có tân ngữ và bổ ngữ trạng thái, có thể đưa tân ngữ lên trước hoặc lặp lại động từ. Với từ ly hợp, lặp lại phần động từ.",
        ex: [["你跑步跑得比我快。", "Nǐ pǎobù pǎo de bǐ wǒ kuài.", "Bạn chạy bộ nhanh hơn tôi."], ["白家月汉字写得比陈天中好。", "Bái Jiāyuè Hànzì xiě de bǐ Chén Tiānzhōng hǎo.", "Bạch Gia Nguyệt viết chữ Hán giỏi hơn Trần Thiên Trung."], ["他踢足球比我踢得好。", "Tā tī zúqiú bǐ wǒ tī de hǎo.", "Anh ấy đá bóng giỏi hơn tôi."]] }
    ],
    read: [
      { zh: "喂，家月，是你呀！有什么事情吗？", py: "Wéi, Jiāyuè, shì nǐ ya! Yǒu shénme shìqing ma?", vi: "A lô, Gia Nguyệt, là con à! Có chuyện gì không?", note: "呀: trợ từ ngữ khí, nhẹ nhàng." },
      { zh: "没什么事，就想跟您说说话。", py: "Méi shénme shì, jiù xiǎng gēn nín shuōshuo huà.", vi: "Không có gì ạ, chỉ muốn nói chuyện với cô một chút.", note: "说说话: nói chuyện chút." },
      { zh: "北京这几天虽然是晴天，但是有点儿冷。", py: "Běijīng zhè jǐ tiān suīrán shì qíngtiān, dànshì yǒudiǎnr lěng.", vi: "Mấy hôm nay Bắc Kinh tuy trời nắng nhưng hơi lạnh.", note: "虽然…但是… ôn lại từ bài 8." },
      { zh: "我这里比北京冷多了，外边还正下着雪呢！", py: "Wǒ zhèlǐ bǐ Běijīng lěng duō le, wàibian hái zhèng xiàzhe xuě ne!", vi: "Chỗ em lạnh hơn Bắc Kinh nhiều, bên ngoài còn đang có tuyết rơi nữa!", note: "Câu tiêu đề của bài." },
      { zh: "今天不大，昨天比今天下得大。", py: "Jīntiān bú dà, zuótiān bǐ jīntiān xià de dà.", vi: "Hôm nay không to, hôm qua to hơn hôm nay.", note: "比 đặt trước động từ có bổ ngữ." },
      { zh: "天气不好，你去外面的时候多穿点儿衣服。", py: "Tiānqì bù hǎo, nǐ qù wàimiàn de shíhou duō chuān diǎnr yīfu.", vi: "Thời tiết không tốt, lúc ra ngoài con mặc thêm áo nhé.", note: "多 + động từ: làm nhiều hơn." },
      { zh: "你跑步跑得比我快，我们能一起跑吗？", py: "Nǐ pǎobù pǎo de bǐ wǒ kuài, wǒmen néng yìqǐ pǎo ma?", vi: "Bạn chạy nhanh hơn mình, chúng ta chạy cùng nhau được không?", note: "Lặp động từ ly hợp 跑步." },
      { zh: "我从小就经常跟爸爸跑步，跑步能让人快乐！", py: "Wǒ cóngxiǎo jiù jīngcháng gēn bàba pǎobù, pǎobù néng ràng rén kuàilè!", vi: "Từ nhỏ mình đã thường chạy bộ cùng bố, chạy bộ làm người ta vui!", note: "让人 + tính từ: khiến người ta…" },
      { zh: "跟李文一起跑步，我好高兴啊！", py: "Gēn Lǐ Wén yìqǐ pǎobù, wǒ hǎo gāoxìng a!", vi: "Chạy bộ cùng Lý Văn, mình vui quá đi!", note: "好 + tính từ: rất, thật là (khẩu ngữ)." }
    ],
    quiz: [
      { q: "“Nhanh hơn nhiều” viết đúng là:", o: ["快得多", "多快得", "得快多", "很快多"], a: 0, exp: "Tính từ + 得多 / 多了 biểu thị chênh lệch lớn." },
      { q: "Chọn câu đúng:", o: ["李文跑得比白家月快。", "李文比跑得白家月快。", "李文跑比得白家月快。", "李文白家月比跑得快。"], a: 0, exp: "Có thể đặt 比 sau 动词+得: 跑得比…快." },
      { q: "“Trời nắng” và “trời âm u” lần lượt là:", o: ["晴天, 阴天", "阴天, 晴天", "晴天, 雨天", "冷天, 热天"], a: 0, exp: "晴 qíng = nắng, 阴 yīn = âm u." },
      { q: "“Tàu điện ngầm” là:", o: ["地铁", "火车", "飞机", "出租车"], a: 0, exp: "地铁 dìtiě = tàu điện ngầm." }
    ]
  }
]);
