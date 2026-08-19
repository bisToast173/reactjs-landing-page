import React, { useState } from 'react';
import './App.css'; 

const mapNotes = [
  { id: 1, name: "Đại Hồng Môn" },
  { id: 2, name: "Tả Hồng Môn" },
  { id: 3, name: "Hữu Hồng Môn" },
  { id: 4, name: "Bi Đình" },
  { id: 5, name: "Hiền Đức Môn" },
  { id: 6, name: "Tây Phối Điện" },
  { id: 7, name: "Đông Phối Điện" },
  { id: 8, name: "Sùng Ân Điện" },
  { id: 9, name: "Hữu Tùng Viện" },
  { id: 10, name: "Tả Tùng Viện" },
  { id: 11, name: "Hoàng Trạch Môn" },
  { id: 12, name: "Trung Đạo Kiều" },
  { id: 13, name: "Tả Phù Kiều" },
  { id: 14, name: "Hữu Bật Kiều" },
  { id: 15, name: "Minh Lâu" },
  { id: 16, name: "Thông Minh Chính Trực" },
  { id: 17, name: "Bửu Thành" },
  { id: 18, name: "Tả Hoa Biểu Trụ" },
  { id: 19, name: "Hữu Hoa Biểu Trụ" },
  { id: 20, name: "Nghinh Lương Quán" },
  { id: 21, name: "Điếu Ngư Đình" },
  { id: 22, name: "Truy Tư Trai" },
  { id: 23, name: "Quan Lan Sở" },
  { id: 24, name: "Linh Phương Các" },
  { id: 25, name: "Thuần Lộc Hiên" },
  { id: 26, name: "Tả Tùng Phòng" },
  { id: 27, name: "Hữu Tùng Phòng" },
  { id: 28, name: "Hư Hoài Tạ" },
  { id: 29, name: "Thần Kho" },
  { id: 30, name: "Yên Nguyệt Kiều" },
  { id: 31, name: "Tân Nguyệt Hồ" },
  { id: 32, name: "Trừng Minh Hồ" },
  { id: 33, name: "Bờ Kỷ" },
  { id: 34, name: "La Thành" },
  { id: 35, name: "Sân Chầu" },
  { id: 36, name: "Bái Đình" },
  { id: 37, name: "Phường Môn" },
  { id: 38, name: "Cống Nước" },
];
const constructionTimeline = [
  { year: "1826", title: "Tầm Đất Phong Thủy", desc: "Sau 7 năm lên ngôi, Vua Minh Mạng sai các quan địa lý đi chọn đất xây lăng. Phải mất 14 năm tìm kiếm kỹ càng khắp vùng đồi núi xứ Huế." },
  { year: "04/1840", title: "Chính Thức Khởi Công", desc: "Chấm dứt 14 năm tìm kiếm, vua chọn núi Cẩm Kê (đổi tên thành Hiếu Sơn). Đích thân phê duyệt bản vẽ của Bùi Công Huyên & Trương Đăng Quế." },
  { year: "08/1840", title: "Đình Chỉ Thi Công", desc: "Nhà vua cho tạm dừng công trình giữa chừng vì không vừa ý với thiết kế hồ Trừng Minh, yêu cầu đào sửa lại theo đúng ý nguyện." },
  { year: "09/1840", title: "Tiếp Tục & Bạo Bệnh", desc: "Cho tiếp tục thi công lăng sau khi chỉnh sửa. Cùng thời gian này, sức khỏe nhà vua suy giảm và lâm bạo bệnh." },
  { year: "01/1841", title: "Vua Minh Mạng Băng Hà", desc: "Nhà vua đột ngột qua đời khi Hiếu Lăng vẫn còn đang dang dở, để lại di nguyện kiến trúc chưa trọn vẹn." },
  { year: "02/1841", title: "Vua Thiệu Trị Nối Nghiệp", desc: "Thiệu Trị lên ngôi, lập tức điều động gần 10.000 lính và thợ giỏi tiếp tục thi công gấp rút theo đúng họa đồ của vua cha." },
  { year: "20/08/1841", title: "An Táng Vào Bửu Thành", desc: "Lễ đưa thi hài Vua Minh Mạng vào chôn cất tại Huyền Cung bên trong Bửu Thành diễn ra vô cùng trang nghiêm." },
  { year: "Đầu 1843", title: "Hoàn Thành Mỹ Mãn", desc: "Toàn bộ quần thể Hiếu Lăng chính thức hoàn tất trọn vẹn sau gần 3 năm nỗ lực thi công của hàng vạn nhân công." }
];
export default function App() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(0);
  return (
    <div className="snap-container">
      
      {/* SECTION 1: MÀN HÌNH CHÍNH */}
      <section className="snap-section hero-section">
        <div className="content-wrapper">
          <h1 className="hero-title">Lăng Minh Mạng</h1>
          <p className="hero-subtitle">Tuyệt tác giao hòa đất trời và chiều sâu triết học phương Đông </p>
          <p className='hero-content'>Nơi an nghỉ của vị hoàng đế thứ hai triều Nguyễn (1820 – 1841) , chinh phục người xem bằng trật tự kỷ cương, sự uy nghiêm và chiều sâu triết học phương Đông.</p>
        </div>
        
        <div className="scroll-indicator">
          <span style={{ fontSize: '12px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Khám phá</span>
          <span style={{ fontSize: '24px' }}>↓</span>
        </div>
      </section>

{/* SECTION 2: VỊ VUA KIỆT XUẤT (BỐ CỤC DÒNG THỜI GIAN) */}
      <section className="snap-section paper-section section-2-container">
        <div className="split-layout">
          
          {/* CỘT TRÁI: KHUNG CHÂN DUNG */}
          <div className="portrait-column">
            <div className="portrait-wrapper">
              {/* Bạn có thể thay đường dẫn ảnh dưới đây bằng ảnh thực tế của bạn */}
              <img 
                src="public\images\MinhMang.jpg"
                alt="Chân dung Vua Minh Mạng" 
                className="portrait-image"
              />
              <div className="portrait-caption">
                Hoàng đế Minh Mạng (1791 - 1841)
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: DÒNG THỜI GIAN LỊCH SỬ */}
          <div className="timeline-column">
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 24px 0' }}>
              Vị Vua Kiệt Xuất
            </h2>
            
            <div className="timeline">
              {/* Thẻ 1 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="info-card timeline-card">
                  <h3 className="card-title">Tiểu sử</h3>
                  <p className="info-text">
                    Vua Minh Mạng tên thật là Nguyễn Phúc Đảm (trong một số tài liệu lịch sử còn ghi là Nguyễn Phúc Kiểu), sinh ngày 25/5/1791. Ông là con trai thứ tư của Vua Gia Long.
                  </p>
                </div>
              </div>

              {/* Thẻ 2 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="info-card timeline-card">
                  <h3 className="card-title">Tình cảnh lên ngôi</h3>
                  <p className="info-text">
                    Tháng 2/1820, sau khi Vua Gia Long băng hà, ông lên ngôi và lấy niên hiệu là Minh Mạng (mang ý nghĩa là "Sự nối nghiệp sáng suốt") sau đó trị vì trong suốt 21 năm.
                  </p>
                </div>
              </div>

              {/* Thẻ 3 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="info-card timeline-card">
                  <h3 className="card-title">Quản trị sắt đá</h3>
                  <p className="info-text">
                    Trị vì 21 năm (1820-1841), Vua Minh Mạng đã đổi quốc hiệu thành Đại Nam và chia cả nước thành 31 tỉnh. Ông thiết lập kỷ cương với chính sách "Tứ bất lập" ngăn ngừa nạn lộng quyền.
                  </p>
                </div>
              </div>

              {/* Thẻ 4 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="info-card timeline-card">
                  <h3 className="card-title">Giai thoại hậu cung</h3>
                  <p className="info-text">
                    Ông giữ kỷ lục với 142 người con, sáng tác bài thơ "Đế Hệ Thi" gồm 20 chữ để quy định tên đệm cho thế hệ trực hệ và để lại phương thuốc "Minh Mạng Thang" danh tiếng.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 3: TRIẾT LÝ KIẾN TRÚC & PHONG THỦY */}
<section className="snap-section parallax-section section-3-container">
        {/* Lớp phủ làm tối ảnh nền để chữ nổi bật hơn */}
        <div className="parallax-overlay"></div>
        
        <div className="content-wrapper z-index-2">
          <h2 className="section-title" style={{ color: 'var(--color-gold)' }}>
            Triết Lý & Phong Thủy
          </h2>
          
          <div className="flip-cards-container">
            {/* THẺ LẬT 1 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Mặt trước */}
                <div className="flip-card-front">
                  <div className="card-icon">⛩️</div>
                  <h3 className="card-title" style={{ color: 'var(--color-text-dark)', marginTop: '16px' }}>Tính Đăng Đối</h3>
                  <span className="hover-hint">Chạm để xem</span>
                </div>
                {/* Mặt sau */}
                <div className="flip-card-back">
                  <p className="info-text">
                    Toàn bộ quần thể 18 ha bám sát trục Thần đạo dài 700m, mang đậm tư tưởng Nho giáo. Nhìn từ trên cao, kiến trúc tượng hình một con người đang nằm nghỉ ngơi giữa thiên nhiên bao la.
                  </p>
                </div>
              </div>
            </div>

            {/* THẺ LẬT 2 */}
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Mặt trước */}
                <div className="flip-card-front">
                  <div className="card-icon">☯️</div>
                  <h3 className="card-title" style={{ color: 'var(--color-text-dark)', marginTop: '16px' }}>Âm Dương Giao Hòa</h3>
                  <span className="hover-hint">Chạm để xem</span>
                </div>
                {/* Mặt sau */}
                <div className="flip-card-back">
                  <p className="info-text">
                    Hồ Tân Nguyệt mang đặc tính Âm dịu dàng ôm trọn Bửu Thành mang đặc tính Dương. Cùng với gần 600 ô chữ chạm khắc, lăng tẩm tựa như một "bảo tàng thơ văn" bất hủ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="snap-section paper-section construction-section">
        <div className="content-wrapper" style={{ maxWidth: '950px' }}>
          <h2 className="section-title">Ký Sự Kiến Thiết Hiếu Lăng</h2>
          <p className="info-text" style={{ textAlign: 'center', marginBottom: '24px' }}>
            Hành trình 17 năm từ ý tưởng tầm đất phong thủy đến khi hàng vạn nhân công hoàn thành di nguyện của bậc đế vương.
          </p>

          {/* THANH TIẾN TRÌNH INTERACTIVE STEPPER */}
          <div className="stepper-nav">
            {constructionTimeline.map((item, index) => (
              <button
                key={index}
                className={`step-node ${activeMilestone === index ? 'active' : ''}`}
                onClick={() => setActiveMilestone(index)}
              >
                <span className="node-year">{item.year}</span>
                <span className="node-dot"></span>
              </button>
            ))}
          </div>

          {/* THẺ HIỂN THỊ CHI TIẾT CỘT MỐC ĐANG CHỌN */}
          <div className="milestone-display-card">
            <div className="milestone-badge">Mốc thời gian: {constructionTimeline[activeMilestone].year}</div>
            <h3 className="milestone-title">{constructionTimeline[activeMilestone].title}</h3>
            <p className="milestone-desc">{constructionTimeline[activeMilestone].desc}</p>
          </div>

          {/* NÚT CHUYỂN CỘT MỐC NHANH */}
          <div className="milestone-controls">
            <button 
              className="ctrl-btn" 
              disabled={activeMilestone === 0}
              onClick={() => setActiveMilestone(prev => Math.max(0, prev - 1))}
            >
              ← Về trước
            </button>
            <span className="milestone-counter">{activeMilestone + 1} / {constructionTimeline.length}</span>
            <button 
              className="ctrl-btn" 
              disabled={activeMilestone === constructionTimeline.length - 1}
              onClick={() => setActiveMilestone(prev => Math.min(constructionTimeline.length - 1, prev + 1))}
            >
              Kế tiếp →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: HÀNH TRÌNH KHÁM PHÁ (CUỘN NGANG) */}
      <section className="snap-section tour-section">
        <div className="horizontal-scroll-container">
          
          {/* ĐIỂM DỪNG 1 */}
          <div className="h-slide">
            <div className="h-slide-content">
              <h3 className="h-slide-title">Đại Hồng Môn</h3>
              <p className="info-text" style={{ color: 'var(--color-paper)' }}>
                Đại Hồng Môn là cổng chính kiên cố, mang tính biểu tượng uy nghiêm, chỉ mở một lần duy nhất để đưa linh cữu vua vào lăng, sau đó đóng kín vĩnh viễn.
              </p>
            </div>
            <div className="h-slide-image bg-gate"></div>
          </div>

          <div className="h-slide">
            <div className="h-slide-content">
              <h3 className="h-slide-title">Bi Đình</h3>
              <p className="info-text" style={{ color: 'var(--color-paper)' }}>
                Phía sau Đại Hồng Môn là Bi Đình, nơi đặt tấm bia đá "Thánh Đức Thần Công" do chính vua Thiệu Trị chắp bút nhằm ngợi ca công đức to lớn của vua cha.
              </p>
            </div>
            <div className="h-slide-image bg-bidinh"></div>
          </div>

          {/* ĐIỂM DỪNG 2 */}
          <div className="h-slide">
            <div className="h-slide-content">
              <h3 className="h-slide-title">Sùng Ân Điện</h3>
              <p className="info-text" style={{ color: 'var(--color-paper)' }}>
                Trái tim của khu vực tẩm điện, nơi đặt bài vị thờ Vua Minh Mạng và Tá Thiên Nhân Hoàng hậu. Không gian nơi đây vô cùng trang nghiêm tĩnh lặng, được bao bọc bởi Hiển Đức Môn và Hoằng Trạch Môn, mang đậm nét kiến trúc gỗ sơn son thếp vàng của cung đình Huế.
              </p>
            </div>
            <div className="h-slide-image bg-temple"></div>
          </div>

          {/* ĐIỂM DỪNG 3 */}
          <div className="h-slide">
            <div className="h-slide-content">
              <h3 className="h-slide-title">Minh Lâu</h3>
              <p className="info-text" style={{ color: 'var(--color-paper)' }}>
                Minh Lâu (Lầu Sáng) từng được thiết kế làm nơi nhà vua suy tư vào những đêm trăng thanh gió mát. Lầu vuông vức, uy nghi vươn lên giữa trời.
              </p>
            </div>
            <div className="h-slide-image bg-minhlau"></div>
          </div>

          <div className="h-slide">
            <div className="h-slide-content">
              <h3 className="h-slide-title">Hồ Tân Nguyệt</h3>
              <p className="info-text" style={{ color: 'var(--color-paper)' }}>
                Hồ mang đặc tính Âm (Trăng), ôm trọn lấy Bửu Thành hình tròn mang đặc tính Dương (Mặt Trời). Đặc biệt vào buổi đêm, Minh Lâu soi bóng xuống Hồ Tân Nguyệt - hồ nước mang hình dáng vầng trăng khuyết tĩnh lặng, sự giao hòa Âm - Dương này thể hiện quy luật tạo hóa và sự tiếp nối vĩnh hằng.
              </p>
            </div>
            <div className="h-slide-image bg-lake"></div>
          </div>

        </div>
        
        {/* Chỉ thị vuốt / cuộn ngang */}
        <div className="swipe-hint">← Khám phá thêm →</div>
      </section>

      {/* SECTION 4: SƠ ĐỒ TỔNG THỂ */}
      <section className="snap-section paper-section">
        <div className="content-wrapper" style={{ maxWidth: '900px' }}>
          <h2 className="section-title">Sơ đồ tổng thể</h2>
          
          <div className="map-layout">
            <div className="map-image-container">
              <img 
                src="/images/map.jpg" 
                alt="Sơ đồ Lăng Minh Mạng" 
                className="zoomable-image"
                onClick={() => setIsZoomed(true)} 
              />
            </div>
            
            <div className="map-notes-container">
              <div className="notes-grid">
                {mapNotes.map((item) => (
                  <div key={item.id} className="note-card">
                    <span className="note-number">{item.id}.</span>
                    <span className="note-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BÍ ẨN HUYỀN CUNG */}
<section className="snap-section cinematic-section section-5-container">
        {/* Lớp phủ tối dần ở các góc (Vignette) */}
        <div className="vignette-overlay"></div>
        
        {/* Hiệu ứng đom đóm/đốm sáng tâm linh */}
        <div className="fireflies">
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
          <div className="firefly"></div>
        </div>

        <div className="content-wrapper cinematic-content">
          <h2 className="cinematic-title">Bí Ẩn Huyền Cung</h2>
          <div className="cinematic-text-wrapper">
            <p className="cinematic-text">
              Bước qua cầu Thông Minh Chính Trực và 33 bậc tầng cấp là đến Bửu Thành - nơi yên nghỉ vĩnh hằng của Vua.
            </p>
            <p className="cinematic-text highlight-text">
              Sâu dưới lòng đất là Huyền Cung, nhưng vị trí thực sự của mộ phần đến nay vẫn là một ẩn số tuyệt mật đối với nhân thế.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: LỜI KẾT & THÔNG TIN THAM QUAN */}
      <section className="snap-section paper-section section-footer-container">
        <div className="content-wrapper">
          <h2 className="section-title">Hành Trình Tiếp Nối</h2>
          
          <p className="info-text" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 32px' }}>
            Lăng Minh Mạng không chỉ là một di tích lịch sử, mà là bản trường ca trầm mặc về triết học phương Đông, nơi thời gian dường như ngưng đọng giữa thiên nhiên xứ Huế.
          </p>

          {/* THÔNG TIN THAM QUAN THỰC TẾ */}
          <div className="visit-cards-grid">
            <div className="info-card visit-card">
              <span className="visit-icon">📍</span>
              <h3 className="visit-card-title">Địa chỉ</h3>
              <p className="info-text">QL49, Hương Thọ, TP. Huế, Thừa Thiên Huế</p>
            </div>
            
            <div className="info-card visit-card">
              <span className="visit-icon">⏰</span>
              <h3 className="visit-card-title">Giờ mở cửa</h3>
              <p className="info-text">07:00 – 17:30 (Mở cửa tất cả các ngày)</p>
            </div>
            
            <div className="info-card visit-card highlight-thanks-card">
              <span className="visit-icon">🌸</span>
              <h3 className="visit-card-title">Lời cảm ơn</h3>
              <p className="info-text">
                Cảm ơn bạn đã dành thời gian đồng hành cùng chúng tôi
              </p>
            </div>
          </div>

          {/* NÚT TƯƠNG TÁC */}
          <div className="footer-actions">
            <button 
              className="btn-primary" 
              onClick={() => {
                const snapContainer = document.querySelector('.snap-container');
                if (snapContainer) {
                  snapContainer.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              Trở về đầu trang
            </button>
          </div>

          {/* CHÂN TRANG BẢN QUYỀN */}
          <div className="site-footer">
            <p>© 2026 Trang tin Lăng Minh Mạng — Khám phá di sản văn hóa Việt Nam</p>
          </div>
        </div>
      </section>

      {/* MODAL PHÓNG TO ẢNH */}
      {isZoomed && (
        <div className="image-modal" onClick={() => setIsZoomed(false)}>
          <span className="close-modal" onClick={() => setIsZoomed(false)}>&times;</span>
          <img 
            src="/images/map.jpg" 
            alt="Sơ đồ Lăng Minh Mạng Phóng To" 
            className="modal-content"
          />
        </div>
      )}

    </div>
  );
}