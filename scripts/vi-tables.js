// Bảng tên tiếng Việt: bộ thủ / thành phần (Hán Việt: nghĩa) và âm Hán Việt của chữ.
// Chỉ ghi những mục chắc chắn. Mục thiếu sẽ hiển thị bằng pinyin.

// Thành phần & bộ thủ: "âm Hán Việt: nghĩa"
const RAD_VI = Object.fromEntries(`
一 nhất: số một|丨 cổn: nét sổ|二 nhị: hai|户 hộ: cửa|古 cổ: xưa|子 tử: con|冖 mịch: khăn trùm|雨 vũ: mưa|而 nhi: và, mà|覀 tây: hướng tây|
女 nữ: phụ nữ|亻 nhân: người|尔 nhĩ: ngươi|戈 qua: cái giáo|扌 thủ: tay|厶 tư: riêng|土 thổ: đất|门 môn: cửa|氵 thủy: nước|又 hựu: lại, nữa|
讠 ngôn: lời nói|吾 ngô: tôi|人 nhân: người|日 nhật: mặt trời, ngày|疋 sơ: cuộn vải, chân|口 khẩu: miệng|囗 vi: vây quanh|玉 ngọc: đá quý|儿 nhân: người (chân)|冂 quynh: vùng biên|
耂 lão: già|匕 chủy: cái thìa|巾 cân: khăn|刂 đao: dao|帀 táp: vòng quanh|心 tâm: tim|宀 miên: mái nhà|豕 thỉ: con lợn|十 thập: mười|丿 phiệt: nét phẩy|
夕 tịch: buổi tối|寸 thốn: tấc|走 tẩu: đi, chạy|己 kỷ: bản thân|彳 xích: bước chân|艮 cấn: bền|亠 đầu: cái nắp|八 bát: tám|只 chỉ: chỉ|木 mộc: cây, gỗ|
隹 chuy: chim đuôi ngắn|马 mã: ngựa|乙 ất: can ất|山 sơn: núi|去 khứ: đi|辶 sước: đi, chạy|文 văn: chữ, văn|月 nguyệt: trăng, tháng|忄 tâm: tim|亡 vong: mất|
大 đại: lớn|丶 chủ: nét chấm|乚 ẩn: giấu|也 dã: cũng|不 bất: không|那 na: kia|殳 thù: binh khí|小 tiểu: nhỏ|从 tòng: theo|可 khả: có thể|
未 vị: chưa|父 phụ: cha|巴 ba: mong, dính|了 liễu: xong|亥 hợi: chi hợi|牛 ngưu: con bò|夂 trĩ: đi chậm|生 sinh: sống, sinh|其 kỳ: của nó|卜 bốc: bói|
王 vương: vua|自 tự: tự mình|云 vân: mây|故 cố: lý do|饣 thực: ăn, thức ăn|反 phản: ngược|交 giao: giao nhau|此 thử: này|曰 viết: nói|⺼ nhục: thịt|
欠 khiếm: thiếu, ngáp|兑 đoái: đổi|几 kỷ: bàn nhỏ|舌 thiệt: cái lưỡi|召 triệu: gọi|头 đầu: cái đầu|七 thất: bảy|乞 khất: xin|阝 ấp: thành, gò|力 lực: sức|
勹 bao: bao bọc|巳 tỵ: chi tỵ|白 bạch: trắng|勺 chước: cái muôi|石 thạch: đá|禾 hòa: lúa|见 kiến: thấy|才 tài: tài năng|灬 hỏa: lửa|占 chiếm: chiếm, xem bói|
刀 đao: con dao|果 quả: trái cây|彡 sam: lông, bóng|完 hoàn: xong|目 mục: mắt|手 thủ: tay|尼 ni: ni cô|匸 hệ: cái hộp|矢 thỉ: mũi tên|疒 nạch: bệnh|
方 phương: vuông, hướng|犭 khuyển: chó|广 nghiễm: mái rộng|尚 thượng: còn, chuộng|冫 băng: nước đá|田 điền: ruộng|卖 mại: bán|昌 xương: thịnh vượng|哥 ca: anh|奇 kỳ: lạ|
斤 cân: cái rìu, cân|艹 thảo: cỏ|平 bình: phẳng|更 canh: thay đổi, hơn|且 thả: hơn nữa|贝 bối: vỏ sò, tiền|中 trung: giữa|钅 kim: kim loại|戋 tiên: nhỏ|厂 hán: sườn núi|
下 hạ: dưới|卩 tiết: ấn tín|穴 huyệt: hang|牙 nha: răng|章 chương: chương, văn|化 hóa: biến đổi|羊 dương: con cừu|直 trực: thẳng|相 tương: lẫn nhau|止 chỉ: dừng|
廾 củng: hai tay|弓 cung: cái cung|垂 thùy: rủ xuống|彐 ký: đầu con lợn|令 lệnh: mệnh lệnh|执 chấp: cầm, giữ|旦 đán: bình minh|约 ước: hẹn|我 ngã: tôi|扁 biển: dẹt|
元 nguyên: đầu, đồng|纟 mịch: sợi tơ|合 hợp: hợp lại|丁 đinh: người đàn ông|页 hiệt: trang|是 thị: là|买 mãi: mua|与 dữ: và, cho|者 giả: người, kẻ|加 gia: thêm|
非 phi: không|勿 vật: đừng|爫 trảo: móng vuốt|友 hữu: bạn|主 chủ: chủ|至 chí: đến|火 hỏa: lửa|考 khảo: thi, xét|鸟 điểu: chim|甲 giáp: áo giáp, thứ nhất|
邦 bang: nước|音 âm: âm thanh|工 công: việc, thợ|京 kinh: kinh đô|上 thượng: trên|⺮ trúc: tre|弟 đệ: em trai|氏 thị: họ|六 lục: sáu|立 lập: đứng|
示 thị: bày tỏ, thần|攵 phộc: gõ nhẹ|孝 hiếu: hiếu thảo|票 phiếu: vé, phiếu|凵 khảm: há miệng|屮 triệt: mầm cây|气 khí: hơi|糸 mịch: sợi tơ|先 tiên: trước|关 quan: đóng|
母 mẫu: mẹ|采 thái: hái|录 lục: ghi chép|衤 y: áo|库 khố: kho|井 tỉnh: cái giếng|式 thức: kiểu, mẫu|亲 thân: thân thiết|虫 trùng: côn trùng|礻 thị: thần, lễ|
乃 nãi: bèn|寺 tự: chùa|尺 xích: thước|另 lánh: khác|毛 mao: lông|米 mễ: gạo|舍 xá: nhà|予 dư: cho|句 cú: câu|夭 yểu: non, trẻ|
尤 vưu: đặc biệt|尢 uông: yếu, què|只 chỉ: chỉ|凡 phàm: mọi, thường|干 can: khô, can thiệp|冉 nhiễm: mềm, dần dần|青 thanh: xanh|各 các: mỗi|射 xạ: bắn|敝 tệ: hỏng|
乂 ngải: cai quản|亢 kháng: cao|兀 ngột: cao, trơ|刖 nguyệt: chặt chân|冏 quýnh: sáng|冋 quýnh: vùng xa|匕 chủy: cái thìa|臱 tiện: —|乛 —: nét gập|丂 khảo: hơi bị cản|
乍 trá: chợt|丄 thượng: trên|丷 —: hai chấm|⺌ —: hình nhỏ|⺊ —: bói|⺈ —: dao|⺍ —: hình mái|壴 chú: cái trống|斿 du: cờ|昜 dương: sáng|
咼 qua: —|曷 hạt: sao, gì|矦 hầu: bia bắn|肰 nhiên: thịt chó|妾 thiếp: vợ lẽ|延 diên: kéo dài|彦 ngạn: tài giỏi|耶 da: (trợ từ)|仌 băng: nước đá|羔 cao: cừu con|
卓 trác: nổi bật|苗 miêu: mầm|董 đổng: coi quản|阿 a: (tiền tố)|焦 tiêu: cháy|斜 tà: —
`.replace(/\n/g, '').split('|').map((s) => s.trim()).filter(Boolean).map((s) => {
  const i = s.indexOf(' ');
  return [s.slice(0, i), s.slice(i + 1)];
}).filter(([, v]) => !/^—/.test(v) && !/: —$/.test(v)));

// Âm Hán Việt của chữ (chỉ ghi chữ có âm Hán Việt thông dụng)
const HV = Object.fromEntries(`
八 bát|马 mã|十 thập|二 nhị|三 tam|居 cư|学 học|需 nhu|要 yếu|你 nhĩ|不 bất|我 ngã|去 khứ|们 môn|汉 hán|语 ngữ|人 nhân|大 đại|一 nhất|年 niên|
个 cá|是 thị|中 trung|国 quốc|四 tứ|口 khẩu|日 nhật|好 hảo|老 lão|师 sư|家 gia|生 sinh|同 đồng|谢 tạ|客 khách|气 khí|再 tái|见 kiến|王 vương|请 thỉnh|
问 vấn|叫 khiếu|名 danh|字 tự|对 đối|起 khởi|很 ngận|高 cao|兴 hưng|认 nhận|识 thức|李 lý|文 văn|谁 thùy|几 kỷ|岁 tuế|法 pháp|女 nữ|朋 bằng|友 hữu|
忙 mang|太 thái|也 dã|工 công|作 tác|还 hoàn|有 hữu|没 một|多 đa|少 thiểu|两 lưỡng|哥 ca|妹 muội|儿 nhi|子 tử|孩 hài|今 kim|本 bản|件 kiện|条 điều|
天 thiên|星 tinh|期 kỳ|号 hiệu|月 nguyệt|下 hạ|班 ban|休 hưu|息 tức|会 hội|饭 phạn|面 diện|饺 giảo|些 ta|电 điện|脑 não|喜 hỷ|欢 hoan|五 ngũ|说 thuyết|
手 thủ|机 cơ|话 thoại|明 minh|超 siêu|市 thị|买 mãi|东 đông|西 tây|晚 vãn|那 na|边 biên|包 bao|米 mễ|坐 tọa|码 mã|和 hòa|现 hiện|在 tại|点 điểm|
分 phân|半 bán|早 tảo|上 thượng|午 ngọ|课 khóa|影 ảnh|院 viện|看 khán|六 lục|七 thất|医 y|病 bệnh|小 tiểu|房 phòng|间 gian|外 ngoại|桌 trác|猫 miêu|校 hiệu|
书 thư|店 điếm|能 năng|非 phi|常 thường|胡 hồ|前 tiền|习 tập|里 lý|白 bạch|读 độc|唱 xướng|歌 ca|椅 ỷ|听 thính|苹 bình|果 quả|水 thủy|便 tiện|宜 nghi|
贵 quý|钱 tiền|块 khối|元 nguyên|斤 cân|杯 bôi|衣 y|服 phục|穿 xuyên|商 thương|售 thụ|货 hóa|员 viên|怎 chẩm|样 dạng|真 chân|想 tưởng|正 chính|时 thời|候 hậu|
知 tri|道 đạo|开 khai|车 xa|弟 đệ|床 sàng|睡 thụy|觉 giác|昨 tạc|雨 vũ|雪 tuyết|冷 lãnh|热 nhiệt|得 đắc|药 dược|了 liễu|饿 ngạ|遍 biến|完 hoàn|给 cấp|
茶 trà|可 khả|以 dĩ|题 đề|卖 mại|务 vụ|士 sĩ|先 tiên|打 đả|火 hỏa|写 tả|都 đô|北 bắc|京 kinh|场 trường|飞 phi|爱 ái|男 nam|玩 ngoạn|接 tiếp|
住 trú|香 hương|蕉 tiêu|从 tòng|到 đáo|烤 khảo|鸭 áp|帮 bang|意 ý|思 tư|已 dĩ|经 kinh|就 tựu|让 nhượng|第 đệ|次 thứ|介 giới|绍 thiệu|旅 lữ|游 du|
尝 thường|定 định|姐 tỷ|来 lai|公 công|交 giao|但 đãn|站 trạm|远 viễn|网 võng|万 vạn|票 phiếu|教 giáo|室 thất|漂 phiêu|亮 lượng|出 xuất|租 tô|汽 khí|因 nhân|
为 vi|所 sở|安 an|累 lụy|回 hồi|洗 tẩy|自 tự|己 kỷ|拿 nã|送 tống|每 mỗi|菜 thái|红 hồng|色 sắc|绿 lục|黑 hắc|颜 nhan|裤 khố|进 tiến|过 quá|
试 thí|新 tân|虽 tuy|然 nhiên|如 như|礼 lễ|物 vật|奶 nãi|爷 da|等 đẳng|走 tẩu|快 khoái|准 chuẩn|备 bị|迟 trì|别 biệt|乐 lạc|忘 vong|画 họa|笔 bút|
长 trường|鱼 ngư|肉 nhục|蛋 đản|糕 cao|舒 thư|狗 cẩu|地 địa|笑 tiếu|记 ký
`.replace(/\n/g, '').split('|').map((s) => s.trim()).filter(Boolean).map((s) => s.split(' ')));

module.exports = { RAD_VI, HV };
