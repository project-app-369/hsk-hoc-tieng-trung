/* Dữ liệu: HSK 2, bài 7–9. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: "h2-07", level: "HSK2", n: 7,
    zh: "他篮球打得很好", vi: "Anh ấy đánh bóng rổ rất tốt",
    src: "HSK2 3.0 BÀI 7.pptx",
    pron: [
      "足球 zúqiú và 篮球 lánqiú: 球 qiú đọc thanh 2, tròn môi, đừng đọc thành “chiu”.",
      "游泳 yóuyǒng: 游 thanh 2 + 泳 thanh 3. Hai chữ liền nhau đọc mượt, thanh 3 đứng cuối giữ nguyên.",
      "得 de đọc thanh nhẹ khi làm trợ từ kết cấu: 打得很好 dǎ de hěn hǎo.",
      "一…就…: 一 yí đọc thanh 2 vì đứng trước thanh 4 (一下课 yí xiàkè, 一到 yí dào)."
    ],
    writing: [
      { zh: "球", py: "qiú", note: "Bộ 王 (ngọc) bên trái, 求 bên phải: quả cầu tròn." },
      { zh: "跑", py: "pǎo", note: "Bộ 足 (chân) bên trái, 包 bên phải: chạy bằng chân." },
      { zh: "踢", py: "tī", note: "Bộ 足 (chân) bên trái, 易 bên phải: dùng chân đá." },
      { zh: "游", py: "yóu", note: "Bộ 氵 (nước) bên trái: bơi lội gắn với nước." }
    ],
    vocab: [
      ["从", "cóng", "giới từ", "từ (điểm bắt đầu)"],
      ["往", "wǎng", "giới từ/động", "hướng về, đi về phía"],
      ["跑", "pǎo", "động", "chạy"],
      ["打", "dǎ", "động", "chơi (bóng); đánh"],
      ["篮球", "lánqiú", "danh", "bóng rổ"],
      ["运动", "yùndòng", "danh/động", "thể thao, vận động"],
      ["踢", "tī", "động", "đá"],
      ["足球", "zúqiú", "danh", "bóng đá"],
      ["球", "qiú", "danh", "quả bóng"],
      ["得", "de", "trợ từ", "trợ từ kết cấu (nối động từ với bổ ngữ)"],
      ["跑步", "pǎobù", "động", "chạy bộ"],
      ["游泳", "yóuyǒng", "động", "bơi lội"],
      ["游", "yóu", "động", "bơi; đi chơi"],
      ["爱好", "àihào", "danh/động", "sở thích"],
      ["开始", "kāishǐ", "động", "bắt đầu"]
    ],
    grammar: [
      { t: "Câu rút gọn 一……就……", f: "一 + A + 就 + B",
        e: "Hành động sau xảy ra ngay sau hành động trước; cũng có thể trước là điều kiện hoặc nguyên nhân, sau là kết quả. Cùng chủ ngữ thì đặt chủ ngữ trước 一 hoặc 就; khác chủ ngữ thì mỗi vế có chủ ngữ riêng.",
        ex: [["你怎么一下课就往外跑？", "Nǐ zěnme yí xiàkè jiù wǎng wài pǎo?", "Sao vừa tan học là bạn chạy ra ngoài ngay thế?"], ["我一到家，妈妈就打来电话了。", "Wǒ yí dào jiā, māma jiù dǎlái diànhuà le.", "Tôi vừa về đến nhà thì mẹ gọi điện đến."], ["一到星期六，陈天中就跟同学去打篮球。", "Yí dào xīngqīliù, Chén Tiānzhōng jiù gēn tóngxué qù dǎ lánqiú.", "Cứ đến thứ Bảy là Trần Thiên Trung đi chơi bóng rổ với bạn."]] },
      { t: "Bổ ngữ trạng thái (1)", f: "động từ + 得 + cụm tính từ",
        e: "Mô tả mức độ hoặc kết quả của hành động. Phủ định thêm 不 trước tính từ. Câu hỏi có 3 cách: thêm 吗; động từ + 得 + tính từ + 不 + tính từ; hoặc động từ + 得 + 怎么样.",
        ex: [["我踢得还可以。", "Wǒ tī de hái kěyǐ.", "Tôi đá cũng tạm được."], ["他们玩得很高兴。", "Tāmen wán de hěn gāoxìng.", "Họ chơi rất vui."], ["白家月跑得不快。", "Bái Jiāyuè pǎo de bù kuài.", "Bạch Gia Nguyệt chạy không nhanh."], ["你跑得快吗？", "Nǐ pǎo de kuài ma?", "Bạn chạy có nhanh không?"], ["他来得早不早？", "Tā lái de zǎo bù zǎo?", "Anh ấy đến sớm hay không sớm?"], ["他们玩得怎么样？", "Tāmen wán de zěnmeyàng?", "Họ chơi thế nào?"]] },
      { t: "Bổ ngữ trạng thái (2): lặp động từ", f: "động từ + tân ngữ + động từ + 得 + tính từ",
        e: "Nếu động từ là từ ly hợp, cần lặp lại phần động từ. Nếu động từ có tân ngữ, có thể đưa tân ngữ lên trước hoặc lặp lại động từ.",
        ex: [["我游泳游得不快。", "Wǒ yóuyǒng yóu de bù kuài.", "Tôi bơi không nhanh."], ["你篮球打得怎么样？", "Nǐ lánqiú dǎ de zěnmeyàng?", "Bạn chơi bóng rổ thế nào?"], ["白家月写汉字写得很好看。", "Bái Jiāyuè xiě Hànzì xiě de hěn hǎokàn.", "Bạch Gia Nguyệt viết chữ Hán rất đẹp."]] }
    ],
    read: [
      { zh: "安妮，你是什么时候从北京回来的？", py: "Ānní, nǐ shì shénme shíhou cóng Běijīng huílái de?", vi: "Annie, bạn từ Bắc Kinh về lúc nào vậy?", note: "是…的 nhấn mạnh thời gian." },
      { zh: "昨天下午。天中，你怎么一下课就往外跑？", py: "Zuótiān xiàwǔ. Tiānzhōng, nǐ zěnme yí xiàkè jiù wǎng wài pǎo?", vi: "Chiều hôm qua. Thiên Trung, sao vừa tan học là cậu chạy ra ngoài ngay thế?", note: "怎么 ở đây mang sắc thái ngạc nhiên." },
      { zh: "我跟同学说好了，一起去打篮球。", py: "Wǒ gēn tóngxué shuōhǎo le, yìqǐ qù dǎ lánqiú.", vi: "Tớ hẹn với bạn rồi, cùng đi chơi bóng rổ.", note: "跟…一起: cùng với." },
      { zh: "天中，你是不是很喜欢打篮球？", py: "Tiānzhōng, nǐ shì bu shì hěn xǐhuan dǎ lánqiú?", vi: "Thiên Trung, có phải cậu rất thích chơi bóng rổ không?", note: "是不是: dạng câu hỏi chính phản." },
      { zh: "我还喜欢踢足球，一到星期天就跟朋友们去踢球。", py: "Wǒ hái xǐhuan tī zúqiú, yí dào xīngqītiān jiù gēn péngyoumen qù tī qiú.", vi: "Tớ còn thích đá bóng, cứ đến Chủ nhật là đi đá bóng với bạn bè.", note: "一…就… chỉ thói quen." },
      { zh: "你篮球打得怎么样？", py: "Nǐ lánqiú dǎ de zěnmeyàng?", vi: "Bạn chơi bóng rổ thế nào?", note: "Đưa tân ngữ 篮球 lên trước." },
      { zh: "我跑得不快，也不太喜欢跑步。", py: "Wǒ pǎo de bú kuài, yě bú tài xǐhuan pǎobù.", vi: "Tớ chạy không nhanh, cũng không thích chạy bộ lắm.", note: "不太: không… lắm." },
      { zh: "我的爱好是运动。从上小学开始，我每天都跟爸爸去运动。", py: "Wǒ de àihào shì yùndòng. Cóng shàng xiǎoxué kāishǐ, wǒ měi tiān dōu gēn bàba qù yùndòng.", vi: "Sở thích của tôi là thể thao. Từ khi lên tiểu học, ngày nào tôi cũng đi tập cùng bố.", note: "从…开始: bắt đầu từ…" },
      { zh: "现在我篮球打得很好，足球踢得不错，游泳游得也很快。", py: "Xiànzài wǒ lánqiú dǎ de hěn hǎo, zúqiú tī de búcuò, yóuyǒng yóu de yě hěn kuài.", vi: "Bây giờ tôi chơi bóng rổ rất tốt, đá bóng khá, bơi cũng rất nhanh.", note: "Ba bổ ngữ trạng thái liên tiếp." },
      { zh: "我一有时间就去运动。", py: "Wǒ yì yǒu shíjiān jiù qù yùndòng.", vi: "Hễ có thời gian là tôi đi tập thể thao.", note: "一…就… chỉ điều kiện và kết quả." }
    ],
    quiz: [
      { q: "“Bơi lội” trong tiếng Trung là:", o: ["游泳", "跑步", "踢球", "打球"], a: 0, exp: "游泳 yóuyǒng = bơi lội." },
      { q: "Chọn câu đúng:", o: ["他跑得很快。", "他跑很快得。", "他得跑很快。", "他很快跑得。"], a: 0, exp: "Bổ ngữ trạng thái: động từ + 得 + tính từ." },
      { q: "“Vừa tan học là chạy ra ngoài” là:", o: ["一下课就往外跑", "下课一就往外跑", "一下课往外就跑", "一往外跑就下课"], a: 0, exp: "Cấu trúc 一……就……: 一下课 + 就往外跑." },
      { q: "Với 游泳 (từ ly hợp), câu đúng là:", o: ["我游泳游得不快。", "我游泳得不快。", "我游得泳不快。", "我不快游泳。"], a: 0, exp: "Động từ ly hợp cần lặp lại: 游泳游得…" }
    ]
  },
  {
    id: "h2-08", level: "HSK2", n: 8,
    zh: "虽然你忘了，但是我记得", vi: "Tuy em đã quên, nhưng anh vẫn nhớ",
    src: "HSK2 3.0 BÀI 8.pptx",
    pron: [
      "虽然 suīrán và 但是 dànshì: hai từ thường đi thành cặp, đọc rõ thanh 1 của 虽.",
      "左边 zuǒbian, 右边 yòubian: 边 đọc thanh nhẹ khi đứng sau phương vị từ.",
      "有意思 yǒu yìsi: 意思 đọc yìsi, chữ 思 là thanh nhẹ.",
      "记得 jìde: 得 đọc thanh nhẹ."
    ],
    writing: [
      { zh: "左", py: "zuǒ", note: "Nét 一 trước, nét 丿 sau, 工 ở dưới: tay trái cầm dụng cụ." },
      { zh: "右", py: "yòu", note: "Nét 丿 trước, nét 一 sau, 口 ở dưới: tay phải đưa lên miệng." },
      { zh: "妻", py: "qī", note: "Phần trên là 十 và 彐, phần dưới là 女: vợ." },
      { zh: "花", py: "huā", note: "Bộ 艹 (cỏ, hoa) ở trên, 化 ở dưới: hoa; nghĩa mở rộng là tiêu tốn." }
    ],
    vocab: [
      ["手表", "shǒubiǎo", "danh", "đồng hồ đeo tay"],
      ["左边", "zuǒbian", "danh", "bên trái"],
      ["左", "zuǒ", "danh", "trái"],
      ["比", "bǐ", "giới từ/động", "so với (dùng so sánh)"],
      ["右边", "yòubian", "danh", "bên phải"],
      ["右", "yòu", "danh", "phải"],
      ["记得", "jìde", "động", "nhớ"],
      ["爱情片", "àiqíngpiàn", "danh", "phim tình cảm"],
      ["有意思", "yǒu yìsi", "tính từ", "thú vị"],
      ["点", "diǎn", "động", "gọi (món), chọn"],
      ["虽然", "suīrán", "liên từ", "mặc dù"],
      ["但是", "dànshì", "liên từ", "nhưng"],
      ["花", "huā", "động", "tiêu (tiền), tốn (thời gian)"],
      ["妻子", "qīzi", "danh", "vợ"],
      ["丈夫", "zhàngfu", "danh", "chồng"],
      ["饭馆", "fànguǎn", "danh", "nhà hàng"]
    ],
    grammar: [
      { t: "Câu so sánh với 比 (1)", f: "A + 比 + B + tính từ / cụm tính từ",
        e: "Dùng giới từ 比 để so sánh khác biệt về tính chất, trạng thái giữa A và B.",
        ex: [["我也觉得左边的比右边的好看。", "Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.", "Tôi cũng thấy cái bên trái đẹp hơn cái bên phải."], ["今天比昨天冷。", "Jīntiān bǐ zuótiān lěng.", "Hôm nay lạnh hơn hôm qua."], ["他觉得踢足球比打篮球有意思。", "Tā juéde tī zúqiú bǐ dǎ lánqiú yǒu yìsi.", "Anh ấy thấy đá bóng thú vị hơn chơi bóng rổ."], ["姐姐比妹妹高。", "Jiějie bǐ mèimei gāo.", "Chị cao hơn em gái."]] },
      { t: "Câu so sánh với 比 (2): thêm 更 / 还", f: "A + 比 + B + 更 / 还 + tính từ",
        e: "Trong câu 比, trước tính từ không dùng 很 hay 非常; muốn nhấn mức độ tăng thì dùng 更 hoặc 还.",
        ex: [["今天比昨天更热。", "Jīntiān bǐ zuótiān gèng rè.", "Hôm nay còn nóng hơn hôm qua."], ["我觉得奶茶比牛奶还好喝。", "Wǒ juéde nǎichá bǐ niúnǎi hái hǎohē.", "Tôi thấy trà sữa còn ngon hơn sữa."], ["网上买比在这里买便宜。", "Wǎngshang mǎi bǐ zài zhèlǐ mǎi piányi.", "Mua trên mạng rẻ hơn mua ở đây."]] },
      { t: "Câu chuyển ý 虽然……，但是……", f: "虽然 + A，但是 + B",
        e: "Biểu thị sự tương phản. 虽然 và 但是 dùng thành cặp hoặc chỉ dùng một trong hai.",
        ex: [["虽然你忘了，但是我记得。", "Suīrán nǐ wàng le, dànshì wǒ jìde.", "Tuy bạn quên, nhưng tôi vẫn nhớ."], ["外边下雪了，但是不太冷。", "Wàibian xiàxuě le, dànshì bú tài lěng.", "Bên ngoài có tuyết, nhưng không lạnh lắm."], ["虽然觉得有点儿累，我还是走回家了。", "Suīrán juéde yǒudiǎnr lèi, wǒ háishi zǒu huí jiā le.", "Tuy thấy hơi mệt, tôi vẫn đi bộ về nhà."]] }
    ],
    read: [
      { zh: "你看，这两块手表怎么样？", py: "Nǐ kàn, zhè liǎng kuài shǒubiǎo zěnmeyàng?", vi: "Bạn xem, hai chiếc đồng hồ này thế nào?", note: "块 là lượng từ của đồng hồ." },
      { zh: "我也觉得左边的比右边的好看。", py: "Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.", vi: "Tôi cũng thấy cái bên trái đẹp hơn cái bên phải.", note: "Câu 比 không dùng 很." },
      { zh: "真不便宜！八千八！", py: "Zhēn bù piányi! Bā qiān bā!", vi: "Đắt thật! Tám nghìn tám!", note: "Đọc số: 八千八 = 8800." },
      { zh: "今天有不少电影，我们看个电影吧。", py: "Jīntiān yǒu bù shǎo diànyǐng, wǒmen kàn ge diànyǐng ba.", vi: "Hôm nay có khá nhiều phim, chúng ta xem phim nhé.", note: "不少: không ít." },
      { zh: "我记得你喜欢看爱情片，我们看那个爱情片，怎么样？", py: "Wǒ jìde nǐ xǐhuan kàn àiqíngpiàn, wǒmen kàn nàge àiqíngpiàn, zěnmeyàng?", vi: "Tôi nhớ bạn thích xem phim tình cảm, mình xem phim đó nhé?", note: "记得 + mệnh đề." },
      { zh: "还是看这个吧，我看网上说这个电影比那个爱情片更有意思。", py: "Háishi kàn zhège ba, wǒ kàn wǎngshang shuō zhège diànyǐng bǐ nàge àiqíngpiàn gèng yǒuyìsi.", vi: "Hay là xem phim này đi, tôi thấy trên mạng nói phim này thú vị hơn phim tình cảm kia.", note: "还是…吧: đề nghị chọn phương án khác." },
      { zh: "怎么点这么多菜？", py: "Zěnme diǎn zhème duō cài?", vi: "Sao gọi nhiều món thế?", note: "点菜: gọi món." },
      { zh: "生日快乐！虽然你忘了，但是我记得。", py: "Shēngrì kuàilè! Suīrán nǐ wàng le, dànshì wǒ jìde.", vi: "Sinh nhật vui vẻ! Tuy em quên, nhưng anh nhớ.", note: "Câu tiêu đề của bài." },
      { zh: "虽然花了一些钱，但是我们过了一个快乐的生日。", py: "Suīrán huāle yìxiē qián, dànshì wǒmen guòle yí ge kuàilè de shēngrì.", vi: "Tuy tốn một ít tiền, nhưng chúng ta đã có một sinh nhật vui vẻ.", note: "花钱: tiêu tiền." },
      { zh: "虽然妻子忘了今天是自己的生日，但是丈夫记得。", py: "Suīrán qīzi wàng le jīntiān shì zìjǐ de shēngrì, dànshì zhàngfu jìde.", vi: "Tuy vợ quên hôm nay là sinh nhật của mình, nhưng chồng vẫn nhớ.", note: "自己: bản thân, của chính mình." }
    ],
    quiz: [
      { q: "“Bên phải” là:", o: ["右边", "左边", "旁边", "前边"], a: 0, exp: "右边 yòubian = bên phải; 左边 là bên trái." },
      { q: "Câu so sánh đúng là:", o: ["今天比昨天冷。", "今天比昨天很冷。", "今天很比昨天冷。", "今天昨天比冷。"], a: 0, exp: "Sau 比 không dùng 很; có thể dùng 更 hoặc 还." },
      { q: "Chọn cặp từ nối đúng cho “mặc dù… nhưng…”:", o: ["虽然…但是…", "因为…所以…", "如果…就…", "不但…而且…"], a: 0, exp: "虽然……但是…… là câu chuyển ý." },
      { q: "“Vợ” và “chồng” lần lượt là:", o: ["妻子, 丈夫", "丈夫, 妻子", "妻子, 孩子", "朋友, 丈夫"], a: 0, exp: "妻子 qīzi = vợ, 丈夫 zhàngfu = chồng." }
    ]
  },
  {
    id: "h2-09", level: "HSK2", n: 9,
    zh: "我去买杯奶茶", vi: "Tôi đi mua ly trà sữa",
    src: "HSK2 3.0 BÀI 9.pptx",
    pron: [
      "旁边 pángbiān: 旁 thanh 2, 边 đọc thanh 1 khi đứng riêng; trong 左边, 右边 thì đọc nhẹ.",
      "咖啡 kāfēi: hai thanh 1 liên tiếp, giữ giọng cao đều.",
      "个子 gèzi: 子 đọc thanh nhẹ.",
      "走路 zǒulù: 走 thanh 3 đứng trước thanh 4 nên đọc nửa thanh 3."
    ],
    writing: [
      { zh: "离", py: "lí", note: "Phần trên là 亠 và 凶, phần dưới là 禸: chữ khó, viết từng khối từ trên xuống." },
      { zh: "近", py: "jìn", note: "Bộ 辶 (đi) ở dưới bên trái, 斤 bên phải: đi một đoạn ngắn là tới." },
      { zh: "旁", py: "páng", note: "Phần trên là 亠, 方 ở dưới: bên cạnh." },
      { zh: "周", py: "zhōu", note: "Khung 冂 bao quanh 土 và 口: một vòng, một tuần." }
    ],
    vocab: [
      ["坏", "huài", "tính từ/động", "xấu; hỏng"],
      ["旁边", "pángbiān", "danh", "bên cạnh"],
      ["男孩儿", "nánháir", "danh", "bé trai"],
      ["这样", "zhèyàng", "đại từ", "như vậy, như thế này"],
      ["个子", "gèzi", "danh", "chiều cao, vóc dáng"],
      ["那么", "nàme", "đại từ", "như thế, đến thế"],
      ["高", "gāo", "tính từ", "cao"],
      ["门口", "ménkǒu", "danh", "cửa ra vào, trước cửa"],
      ["咖啡", "kāfēi", "danh", "cà phê"],
      ["离", "lí", "giới từ/động", "cách (khoảng cách)"],
      ["近", "jìn", "tính từ", "gần"],
      ["走路", "zǒulù", "động", "đi bộ"],
      ["周", "zhōu", "danh", "tuần"]
    ],
    grammar: [
      { t: "So sánh với 没有", f: "A + 没有 + B + (这么 / 那么) + tính từ",
        e: "Biểu thị A không bằng B (phủ định của 比). Có thể thêm 这么 / 那么 trước tính từ.",
        ex: [["儿子的个子没有他那么高。", "Érzi de gèzi méiyǒu tā nàme gāo.", "Con trai không cao bằng cậu ấy."], ["昨天没有今天这么冷。", "Zuótiān méiyǒu jīntiān zhème lěng.", "Hôm qua không lạnh như hôm nay."], ["这块手表没有那块好看。", "Zhè kuài shǒubiǎo méiyǒu nà kuài hǎokàn.", "Chiếc đồng hồ này không đẹp bằng chiếc kia."]] },
      { t: "Câu hỏi so sánh với 有", f: "A + 有 + B + (这么 / 那么) + tính từ + 吗？",
        e: "Hỏi A có đạt mức của B hay không.",
        ex: [["妹妹有姐姐高吗？", "Mèimei yǒu jiějie gāo ma?", "Em gái có cao bằng chị không?"], ["那件衣服有这件好看吗？", "Nà jiàn yīfu yǒu zhè jiàn hǎokàn ma?", "Bộ quần áo kia có đẹp bằng bộ này không?"]] },
      { t: "Động từ 离: khoảng cách", f: "A + 离 + B + (tính từ / số lượng)",
        e: "Biểu thị khoảng cách về nơi chốn hoặc thời gian giữa A và B.",
        ex: [["咖啡店离这儿有点儿远。", "Kāfēidiàn lí zhèr yǒudiǎnr yuǎn.", "Quán cà phê hơi xa chỗ này."], ["学校离医院不远。", "Xuéxiào lí yīyuàn bù yuǎn.", "Trường cách bệnh viện không xa."], ["现在离我的生日还有三天。", "Xiànzài lí wǒ de shēngrì hái yǒu sān tiān.", "Bây giờ còn ba ngày nữa là sinh nhật tôi."]] },
      { t: "Bổ ngữ thời lượng (1)", f: "chủ ngữ + động từ + khoảng thời gian",
        e: "Từ chỉ khoảng thời gian đặt sau động từ để nói hành động hoặc trạng thái kéo dài bao lâu.",
        ex: [["走半个多小时就到了。", "Zǒu bàn ge duō xiǎoshí jiù dào le.", "Đi hơn nửa tiếng là đến."], ["他们学了两年。", "Tāmen xué le liǎng nián.", "Họ đã học hai năm."], ["我们休息十分钟。", "Wǒmen xiūxi shí fēnzhōng.", "Chúng ta nghỉ mười phút."]] }
    ],
    read: [
      { zh: "儿子的裤子坏了，我们给他买条新的吧。", py: "Érzi de kùzi huài le, wǒmen gěi tā mǎi tiáo xīn de ba.", vi: "Quần của con trai hỏng rồi, mình mua cho con cái mới nhé.", note: "条 là lượng từ của quần." },
      { zh: "你看这条黑色的怎么样？", py: "Nǐ kàn zhè tiáo hēisè de zěnmeyàng?", vi: "Bạn xem cái màu đen này thế nào?", note: "黑色的: cái màu đen." },
      { zh: "没有你上次买的那条好看。", py: "Méiyǒu nǐ shàng cì mǎi de nà tiáo hǎokàn.", vi: "Không đẹp bằng cái bạn mua lần trước.", note: "没有 so sánh: A không bằng B." },
      { zh: "旁边那个男孩儿就穿了这样的裤子，我觉得很好看啊！", py: "Pángbiān nàge nánháir jiù chuān le zhèyàng de kùzi, wǒ juéde hěn hǎokàn a!", vi: "Cậu bé bên cạnh mặc chiếc quần như thế này, tôi thấy rất đẹp!", note: "这样的: kiểu như thế này." },
      { zh: "儿子的个子没有他那么高，穿上就不会太好看。", py: "Érzi de gèzi méiyǒu tā nàme gāo, chuānshang jiù bú huì tài hǎokàn.", vi: "Con trai không cao bằng cậu ấy, mặc vào sẽ không đẹp lắm.", note: "穿上: mặc vào." },
      { zh: "门口有家奶茶店。你想喝杯奶茶吗？", py: "Ménkǒu yǒu jiā nǎichádiàn. Nǐ xiǎng hē bēi nǎichá ma?", vi: "Ở cửa có quán trà sữa. Bạn muốn uống ly trà sữa không?", note: "家 là lượng từ của cửa hàng." },
      { zh: "咖啡店离这儿有点儿远。", py: "Kāfēidiàn lí zhèr yǒudiǎnr yuǎn.", vi: "Quán cà phê hơi xa chỗ này.", note: "有点儿 + tính từ: hơi…" },
      { zh: "我想喝咖啡，还是去咖啡店吧。", py: "Wǒ xiǎng hē kāfēi, háishi qù kāfēidiàn ba.", vi: "Tôi muốn uống cà phê, hay là đến quán cà phê đi.", note: "还是…吧: nên chọn phương án này." },
      { zh: "喝了咖啡，晚上就别想睡觉了。", py: "Hēle kāfēi, wǎnshang jiù bié xiǎng shuìjiào le.", vi: "Uống cà phê rồi thì tối đừng mong ngủ nữa.", note: "别…了: đừng… nữa." },
      { zh: "这里离家很近，还是走路吧。", py: "Zhèlǐ lí jiā hěn jìn, háishi zǒulù ba.", vi: "Chỗ này gần nhà lắm, hay là đi bộ đi.", note: "离 + nơi + 近." },
      { zh: "走半个多小时就到了。", py: "Zǒu bàn ge duō xiǎoshí jiù dào le.", vi: "Đi hơn nửa tiếng là đến.", note: "半个多小时: hơn nửa tiếng." }
    ],
    quiz: [
      { q: "“Gần” là:", o: ["近", "远", "离", "旁"], a: 0, exp: "近 jìn = gần; 远 yuǎn = xa." },
      { q: "Câu đúng về khoảng cách:", o: ["学校离医院不远。", "学校从医院不远。", "学校到医院离不远。", "学校医院离不远。"], a: 0, exp: "A 离 B + tính từ: 学校离医院不远." },
      { q: "“Hôm qua không lạnh như hôm nay” là:", o: ["昨天没有今天这么冷。", "昨天比今天没有冷。", "昨天没有冷今天。", "昨天不比今天冷这么。"], a: 0, exp: "A 没有 B + 这么 + tính từ." },
      { q: "Bổ ngữ thời lượng đúng:", o: ["他们学了两年。", "他们两年学了。", "他们学两年了了。", "他们两年了学。"], a: 0, exp: "Chủ ngữ + động từ + 了 + khoảng thời gian." }
    ]
  }
]);
