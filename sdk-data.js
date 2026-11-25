// Danh mục SDK bên thứ ba – bản dịch tiếng Việt (dùng chung cho privacy-vi.html và sdk-vi.html)
// Nguồn: https://ltzj.hn5agame.com/sdk.html và Phụ lục 1 của https://ltzj.hn5agame.com/privacy.html
var SAFE = 'Khử định danh; truyền tải và xử lý có mã hoá';

var SDK_LIST = [
  {
    name: 'Cocos Engine (cocos引擎)',
    purpose: 'Khung phát triển (engine) của game',
    method: 'Đọc thông tin thiết bị (model, tên hệ điều hành, phiên bản hệ điều hành, địa chỉ IP, địa chỉ MAC, IMEI, OAID, Android_id); truy cập camera; danh sách ứng dụng đã cài; danh sách tác vụ; trạng thái mạng; thông tin cảm biến; tên nhà mạng',
    company: '—', zh: '',
    data: 'Model thiết bị, tên và phiên bản hệ điều hành, địa chỉ IP, địa chỉ MAC, IMEI, OAID, Android_id, quyền camera, danh sách ứng dụng đã cài, danh sách tác vụ, trạng thái mạng, thông tin cảm biến, tên nhà mạng',
    site: 'https://www.cocos.com/',
    policy: 'https://download.cocos.com/CocosUdc/agreement/Cocos_Privacy_Policy_cn_20200904.html'
  },
  {
    name: 'WeChat SDK (微信SDK)',
    purpose: 'Đăng nhập game bằng tài khoản WeChat; chia sẻ nội dung sang ứng dụng WeChat',
    method: SAFE,
    company: 'Công ty TNHH Hệ thống Máy tính Tencent Thâm Quyến', zh: '深圳市腾讯计算机系统有限公司',
    data: 'Thông tin định danh thiết bị (trên Android, ví dụ Android ID)',
    site: 'https://open.weixin.qq.com/',
    policy: 'https://www.tencent.com/zh-cn/privacy-policy.html/'
  },
  {
    name: 'Tencent Ads Mini Game SDK (腾讯广告小游戏 SDK)',
    purpose: 'Cung cấp cho nhà phát triển các chức năng cơ bản: đo lường quảng cáo, phân bổ nguồn quảng cáo, tối ưu hiệu quả quảng cáo',
    method: SAFE,
    company: 'Công ty TNHH Hệ thống Máy tính Tencent Thâm Quyến', zh: '深圳市腾讯计算机系统有限公司',
    data: 'Thông tin thiết bị, ID đã khử định danh…',
    site: 'https://e.qq.com/ads/',
    policy: 'https://datanexus.qq.com/doc/develop/compliance/minigame/privacy_policy'
  },
  {
    name: 'WeChat Pay SDK (微信支付SDK)',
    purpose: 'Cho phép người dùng thanh toán bằng WeChat Pay trong ứng dụng',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ Thanh toán Tenpay', zh: '财付通支付科技有限公司',
    data: 'Thông tin định danh thiết bị (trên Android, ví dụ Android ID)',
    site: 'https://pay.weixin.qq.com/',
    policy: 'https://www.tencent.com/zh-cn/privacy-policy.html/'
  },
  {
    name: 'Alipay (支付宝)',
    purpose: 'Cho phép người dùng thanh toán bằng Alipay trong ứng dụng',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ Mạng Alipay (Trung Quốc)', zh: '支付宝(中国)网络技术有限公司',
    data: 'Thông tin định danh thiết bị (trên Android, ví dụ Android ID); thông tin định danh người dùng (MAC; trên Android ví dụ IMSI, Android ID, IMEI, MEID)',
    site: 'https://docs.open.alipay.com/',
    policy: 'https://render.alipay.com/p/yuyan/180020010001196791/preview.html?agreementId=AG00000132'
  },
  {
    name: 'ThinkingAnalytics SDK',
    purpose: 'Tối ưu sản phẩm và dịch vụ',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ Thông tin ThinkingData (Thượng Hải)', zh: '数数信息科技（上海）有限公司',
    data: 'Thông tin thiết bị (IDFV, AndroidID, hệ điều hành, model, nhà sản xuất, phiên bản hệ thống, thông tin tiến trình ứng dụng…), thông tin kết nối mạng',
    site: 'https://www.thinkingdata.cn/',
    policy: 'https://docs.thinkingdata.cn/ta-manual/latest/user_guide/privacy_policy.html/'
  },
  {
    name: 'GravityEngine SDK',
    purpose: 'Đo lường và phân bổ nguồn quảng cáo, tối ưu hiệu quả phân phối quảng cáo và các mục đích khác liên quan đến hoạt động quảng cáo',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ Gravity Engine Thâm Quyến', zh: '深圳引力引擎科技有限公司',
    data: 'Thông tin định danh thiết bị (trên Android, ví dụ Android ID), thông tin thiết bị (hãng, model, hệ điều hành…), địa chỉ IP, sự kiện thiết bị như lỗi treo hệ thống…',
    site: 'https://www.gravity-engine.com/',
    policy: 'https://www.gravity-engine.com/h-col-101.html'
  },
  {
    name: 'XSDK',
    purpose: 'Cung cấp đăng nhập, thanh toán và trung tâm người dùng cho game di động',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ Mạng Chengnuo Thượng Hải', zh: '上海丞诺网络科技有限公司',
    data: 'Thông tin nhận dạng thiết bị (IMEI/MAC/AndroidID/IDFA/OAID/IMSI của SIM…), model phần cứng, số sê-ri phần cứng, phiên bản hệ điều hành, địa chỉ IP, phiên bản phần mềm, cách thức và loại kết nối mạng, nhật ký thao tác, dữ liệu cảm biến thiết bị',
    site: 'http://www.u8sdk.com/',
    policy: 'http://www.u8sdk.com/privacy/xsdk_privacy.html'
  },
  {
    name: 'Ocean Engine – SDK báo cáo dữ liệu ứng dụng di động (巨量引擎)',
    purpose: 'Tối ưu trải nghiệm người dùng',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ Mạng Ocean Engine Bắc Kinh', zh: '北京巨量引擎网络技术有限公司',
    data: 'Thông tin định danh thiết bị (Android ID, OAID, MAC; trên Android ví dụ thông tin SIM)',
    site: 'https://open.oceanengine.com/',
    policy: 'https://open.oceanengine.com/labels/8/docs/1708428054592516'
  },
  {
    name: 'TopOn SDK',
    purpose: 'Tích hợp quảng cáo trong ứng dụng',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ Thông tin Taku Quảng Châu', zh: '广州塔酷信息科技有限公司',
    data: 'Tên và số phiên bản hệ thống, tên gói ứng dụng hiện tại, tên và số phiên bản ứng dụng, địa chỉ IP, địa chỉ MAC, IMEI, Android_id, SSID, OAID, thông tin cảm biến, danh sách ứng dụng đã cài',
    site: 'https://www.toponad.com/',
    policy: 'https://www.toponad.com/zh-cn/privacy-policy/'
  },
  {
    name: 'Kuaishou Ads SDK (快手广告SDK)',
    purpose: 'Hiển thị và đề xuất nội dung cá nhân hoá; phân phối, đo lường và phân bổ quảng cáo; thống kê phân tích và chống gian lận quảng cáo',
    method: 'Thông tin thiết bị thường dùng (model, IMEI, IP, MAC, IMSI, ICCID, Android ID, UAID, MEID, OAID), vị trí, thông tin mạng, thông tin cảm biến, danh sách ứng dụng đã cài',
    company: 'Công ty TNHH Quảng cáo Kuaishou Bắc Kinh', zh: '北京快手广告有限公司',
    data: 'Thông tin định danh thiết bị (trên Android, ví dụ Android ID), thông tin thiết bị (hãng, model, hệ điều hành…), địa chỉ IP, phiên bản SDK…',
    site: 'https://kuaishou.com/',
    policy: 'https://www.kuaishou.com/about/policy?tab=privacy'
  },
  {
    name: 'Sigmob SDK – Android',
    purpose: 'Phân phối quảng cáo, phân bổ nguồn, chống gian lận, thống kê phân tích quảng cáo, ghi nhận lỗi treo ứng dụng',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ Chuangzhi Huiju Bắc Kinh', zh: '北京创智汇聚科技有限公司',
    data: 'Thông tin thiết bị (nhà sản xuất, thương hiệu, model, phiên bản hệ điều hành, múi giờ, mã định danh như IMEI, AndroidID, OAID, IDFA, IDFV), thông tin ứng dụng (MCC & MNC), tổng bộ nhớ, tổng dung lượng ổ đĩa, dung lượng trống, vị trí và vị trí gần đúng, dữ liệu quảng cáo, thông tin cảm biến; trạng thái mạng; dữ liệu lỗi treo',
    site: 'https://www.sigmob.com/',
    policy: 'https://doc.sigmob.com/Sigmob%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%90%88%E8%A7%84%E6%9D%A1%E6%AC%BE/%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96/'
  },
  {
    name: 'Mintegral SDK',
    purpose: 'Tích hợp quảng cáo trong ứng dụng',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ Thông tin Huiliang Shanhe Bắc Kinh', zh: '北京汇量山河信息科技有限公司',
    data: 'Thông tin định danh thiết bị (trên Android, ví dụ Android ID), thông tin thiết bị (hãng, model, hệ điều hành…), địa chỉ IP, phiên bản SDK…',
    site: 'https://www.mintegral.com/cn',
    policy: 'https://www.mintegral.com/cn/privacy/'
  },
  {
    name: 'NetEase Qiyu SDK (网易七鱼SDK)',
    purpose: 'Cung cấp dịch vụ trò chuyện với bộ phận chăm sóc khách hàng',
    method: SAFE,
    company: 'Công ty TNHH Công nghệ NetEase Zhiyun Hàng Châu', zh: '杭州网易质云科技有限公司',
    data: 'Thông tin cá nhân hoặc phương thức liên hệ, mã định danh trực tuyến, mã định danh, trạng thái trực tuyến, dữ liệu mạng xã hội (email, số điện thoại, tên người dùng mạng xã hội, địa chỉ IP, ID thiết bị)',
    site: 'https://b.163.com/home',
    policy: 'https://b.163.com/home/privacypolicy/qy-privacy'
  },
  {
    name: 'Tencent ACE – SDK chống hack game di động (腾讯游戏安全ACE)',
    purpose: 'Cung cấp cho nhà phát triển khả năng phát hiện phần mềm gian lận (hack), chống các loại hack phổ biến',
    method: 'Truyền tải có mã hoá và các phương thức xử lý an toàn khác',
    company: 'Công ty TNHH Hệ thống Máy tính Tencent Thâm Quyến', zh: '深圳市腾讯计算机系统有限公司',
    data: 'Tài khoản game, model thiết bị, phiên bản hệ thống, thương hiệu, thông tin CPU, danh sách ứng dụng đã cài, mã quốc gia và ngôn ngữ, AndroidID, trạng thái VPN',
    site: 'https://www.anticheatexpert.com',
    policy: 'https://down.anticheatexpert.com/docs/ACE-files/wsa/privacy_protocol.pdf'
  },
  {
    name: 'Solar Engine – Android SDK (热力引擎)',
    purpose: 'Tìm hiểu hiệu quả của ứng dụng trên các thiết bị khác nhau; tối ưu chiến lược quảng cáo, nhận diện gian lận; dịch vụ chân dung người dùng; phân tích theo nhóm; dịch vụ thử nghiệm A/B',
    method: 'Thu thập và phân tích dữ liệu hành vi người dùng',
    company: 'Công ty TNHH Công nghệ Huiliang Cloud (Bắc Kinh)', zh: '汇量云(北京)科技有限公司',
    data: 'IMEI / Android ID / GAID / thời điểm xảy ra sự kiện / tài khoản đăng nhập / IMEI2 / OAID / UA / ngôn ngữ thiết bị / múi giờ / nhà sản xuất / phiên bản hệ điều hành / chiều cao và chiều rộng màn hình / model và tên thiết bị / trạng thái mạng / phiên bản và số phiên bản ứng dụng / tên gói / tên ứng dụng / tên kênh phân phối / trình duyệt và phiên bản / tiêu đề và địa chỉ trang hiện tại / ID thiết bị duy nhất / thời gian hiện tại của thiết bị / thời điểm khởi động thiết bị / cờ theo dõi quảng cáo / ADServiceToken / mật độ điểm ảnh màn hình / URL nguồn giới thiệu khi cài gói / phiên bản ứng dụng lúc cài lần đầu…',
    site: 'https://www.solar-engine.com/cn/',
    policy: 'https://www.solar-engine.com/privacyPolicy.html'
  },
  {
    name: 'Youlianghui SDK (优量汇SDK)',
    purpose: 'Phân phối quảng cáo, theo dõi chuyển đổi',
    method: 'Thu thập và phân tích dữ liệu phân phối quảng cáo',
    company: 'Công ty TNHH Hệ thống Máy tính Tencent Thâm Quyến', zh: '深圳市腾讯计算机系统有限公司',
    data: 'Thông tin kết nối mạng, trạng thái điện thoại, địa chỉ IP, địa chỉ MAC, đọc/ghi dữ liệu thẻ SD (bộ nhớ ngoài), mã nhận dạng thiết bị duy nhất (IMEI/IMSI, IDFA, OAID, AAID, ODID, Android ID, số sê-ri phần cứng), mã định danh quảng cáo, thông tin nhà mạng, danh sách ứng dụng đã cài',
    site: 'https://e.qq.com/',
    policy: 'https://e.qq.com/dev/help_detail.html?cid=3605&pid=3815'
  },
  {
    name: 'MSA – SDK Liên minh An ninh Di động (移动安全联盟SDK)',
    purpose: 'Phân tích dữ liệu',
    method: 'Thu thập trạng thái mạng, OAID',
    company: 'Liên minh An ninh Di động (MSA)', zh: '移动安全联盟',
    data: 'Trạng thái mạng, OAID',
    site: 'http://www.msa-alliance.cn',
    policy: 'http://www.msa-alliance.cn/col.jsp?id=120'
  },
  {
    name: 'Tap SDK',
    purpose: 'Nhắc cập nhật, đăng nhập game, xác thực tuân thủ, phân tích dữ liệu, trò chuyện thoại thời gian thực, chống nghiện game, bảng tin nhúng, bạn bè trong game, xác minh bản quyền và DLC, hệ thống thành tựu',
    method: 'Thu thập dữ liệu liên quan đến game',
    company: 'Công ty TNHH Công nghệ Mạng Yiwan (Thượng Hải)', zh: '易玩（上海）网络科技有限公司',
    data: 'Quyền đọc/ghi bộ nhớ, đọc trạng thái điện thoại, IMSI, nhà sản xuất thiết bị mạng, GAID, Android_id, BSSID, danh sách ứng dụng, thông tin WiFi, phiên bản thiết bị, kiểu điện thoại, phiên bản hệ thống, danh sách tác vụ, ghi âm, thông tin cảm biến, danh sách ứng dụng đã cài, thông tin CPU, thông tin bộ nhớ, loại mạng, thông tin ứng dụng TapTap đã cài',
    site: 'https://taptap.cn',
    policy: 'https://developer.taptap.com/docs/sdk/start/agreement/'
  },
  {
    name: 'Huawei Petal Ads SDK (鲸鸿动能SDK)',
    purpose: 'Phân phối quảng cáo theo chương trình (programmatic), đo lường, phân bổ nguồn và chống gian lận quảng cáo',
    method: 'Thu thập và phân tích dữ liệu quảng cáo',
    company: 'Công ty TNHH Công nghệ Phần mềm Huawei', zh: '华为软件技术有限公司',
    data: 'Thông tin thiết bị (mã quảng cáo OAID, mã định danh IMEI, Android ID, thương hiệu, model, thông tin cảm biến, thông tin hệ thống cơ bản), thông tin mạng (nhà mạng, trạng thái kết nối), vị trí gần đúng, thông tin ứng dụng (thông tin cơ bản, danh sách ứng dụng đã cài), tương tác với quảng cáo (hiển thị, nhấp, chuyển đổi…), thông tin ngữ cảnh',
    site: 'https://developer.huawei.com/consumer/cn/',
    policy: 'https://privacy.consumer.huawei.com/legal/ads/privacy-statement.htm?&code=CN&language=zh-CN&branchid=0&contenttag=default'
  },
  {
    name: 'TapADN SDK',
    purpose: 'Dùng khi phân phối quảng cáo đến người dùng cuối',
    method: 'Thu thập dữ liệu phân phối quảng cáo',
    company: 'Công ty TNHH Công nghệ Kỹ thuật số Aideen Thượng Hải', zh: '上海艾得蒽数字科技有限公司',
    data: 'Mã định danh thiết bị (Android ví dụ IMEI, Android ID, OAID), địa chỉ IP, vị trí chính xác và gần đúng, thông tin cảm biến; thương hiệu, model, phiên bản hệ điều hành, mật độ và độ phân giải màn hình, ngôn ngữ, múi giờ, thông tin CPU, dung lượng trống, thời điểm khởi động lại, tổng dung lượng ổ đĩa, tổng bộ nhớ, nhà mạng, trạng thái Wi-Fi, cường độ tín hiệu, danh sách phần mềm, tên gói ứng dụng, tiến trình đang chạy, số phiên bản, trạng thái chạy nền/chạy chính của ứng dụng',
    site: 'https://ssp.dirichlet.cn',
    policy: 'https://ssp.dirichlet.cn/docs/agreement/'
  },
  {
    name: 'Kuaishou Union SDK – Android (快手联盟)',
    purpose: 'Dùng khi phân phối quảng cáo đến người dùng cuối',
    method: 'Truyền qua giao diện lập trình (API)',
    company: 'Công ty TNHH Công nghệ Kuaishou Bắc Kinh', zh: '北京快手科技有限公司',
    data: 'Model phần cứng, phiên bản hệ điều hành, mã định danh thiết bị (Android: IMEI, AndroidID, OAID, IMSI, thông tin SIM, GAID, số sê-ri phần cứng; iOS: IDFV, IDFA; HarmonyOS: OAID), địa chỉ MAC, địa chỉ IP, điểm truy cập WLAN, Bluetooth, trạm phát sóng, phiên bản phần mềm, cách thức kết nối mạng, dữ liệu chất lượng mạng, nhật ký thao tác, dữ liệu cảm biến thiết bị',
    site: 'https://u.kuaishou.com/',
    policy: 'https://u.kuaishou.com/home/detail/1290'
  },
  {
    name: 'Douyin Open SDK (抖音 Open SDK)',
    purpose: 'Cho phép uỷ quyền và đăng nhập bằng tài khoản Douyin',
    method: 'Thu thập thông tin người dùng đã uỷ quyền',
    company: 'Công ty TNHH Công nghệ Weibo Shijie Bắc Kinh', zh: '北京微播视界科技有限公司',
    data: 'Ảnh đại diện, biệt danh, số điện thoại, hệ điều hành, user agent, lịch sử chia sẻ (ảnh, video…)',
    site: 'https://developer.open-douyin.com/',
    policy: 'https://developer.open-douyin.com/docs/resource/zh-CN/dop/operation-standard/service-protocol/douyin-sdk-privacy-policy',
    sdkPageOnly: true
  },
  {
    name: 'Kuaishou Tracking SDK (快手监测 SDK)',
    purpose: 'Cung cấp cho nhà phát triển các chức năng cơ bản: đo lường quảng cáo, phân bổ nguồn quảng cáo, tối ưu hiệu quả quảng cáo',
    method: SAFE,
    company: 'Công ty TNHH Quảng cáo Kuaishou Bắc Kinh', zh: '北京快手广告有限公司',
    data: 'Thông tin thiết bị, ID đã khử định danh',
    site: 'https://www.kuaishou.com',
    policy: 'https://www.kuaishou.com/about/policy?tab=privacy',
    sdkPageOnly: true
  }
];

// Vẽ bảng vào phần tử có id cho trước. includeAll = false thì bỏ các dòng chỉ có ở trang sdk.html
function renderSdkTable(targetId, includeAll) {
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var rows = SDK_LIST.filter(function (r) { return includeAll || !r.sdkPageOnly; }).map(function (r) {
    return '<tr>' +
      '<td class="name">' + esc(r.name) + '</td>' +
      '<td>' + esc(r.purpose) + '</td>' +
      '<td>' + esc(r.method) + '</td>' +
      '<td>' + esc(r.company) + (r.zh ? '<span class="zh">' + esc(r.zh) + '</span>' : '') + '</td>' +
      '<td class="data">' + esc(r.data) + '</td>' +
      '<td class="links"><a href="' + esc(r.site) + '" target="_blank" rel="noopener">Trang chủ</a>' +
      '<a href="' + esc(r.policy) + '" target="_blank" rel="noopener">Chính sách bảo mật</a></td>' +
      '</tr>';
  }).join('');
  document.getElementById(targetId).innerHTML =
    '<div class="table-wrap"><table><thead><tr>' +
    '<th>Tên SDK</th><th>Mục đích / Tình huống sử dụng</th><th>Cách thức xử lý</th>' +
    '<th>Bên thứ ba</th><th>Loại dữ liệu</th><th>Liên kết</th>' +
    '</tr></thead><tbody>' + rows + '</tbody></table></div>';
}
