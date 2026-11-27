/* HSK App — đăng nhập bằng Firebase Authentication (Google + email/mật khẩu).
   SDK nạp lười từ gstatic; nếu offline hoặc lỗi mạng, ứng dụng vẫn học bình thường. */
(function () {
  'use strict';
  const SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const btn = document.getElementById('authBtn');
  if (!btn || !window.FIREBASE_CONFIG) return;

  const USER_IC = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z" fill="currentColor" opacity=".55"/></svg>';
  let auth = null, user = null, sdkP = null, mode = 'in'; // mode: in | up | reset
  let busy = false, msg = null; // msg: {t:'err'|'ok', s}
  let dlg = null;

  const loadScript = (src) => new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = src; s.async = true;
    s.onload = res; s.onerror = () => rej(new Error('Không tải được ' + src)); document.head.appendChild(s);
  });
  function loadSdk() {
    if (sdkP) return sdkP;
    sdkP = loadScript(SDK + 'firebase-app-compat.js').then(() => loadScript(SDK + 'firebase-auth-compat.js')).then(() => {
      if (!window.firebase.apps.length) window.firebase.initializeApp(window.FIREBASE_CONFIG);
      auth = window.firebase.auth();
      auth.languageCode = 'vi';
      auth.onAuthStateChanged((u) => {
        user = u; if (window.HSK) window.HSK.user = u || null;
        paintBtn(); if (dlg && dlg.open) paintDlg();
      });
      return auth;
    }).catch((e) => { sdkP = null; throw e; });
    return sdkP;
  }

  const ERR = {
    'auth/invalid-email': 'Email không hợp lệ.',
    'auth/missing-email': 'Hãy nhập email.',
    'auth/missing-password': 'Hãy nhập mật khẩu.',
    'auth/user-not-found': 'Không tìm thấy tài khoản với email này.',
    'auth/wrong-password': 'Mật khẩu chưa đúng.',
    'auth/invalid-credential': 'Email hoặc mật khẩu chưa đúng.',
    'auth/invalid-login-credentials': 'Email hoặc mật khẩu chưa đúng.',
    'auth/email-already-in-use': 'Email này đã có tài khoản. Hãy đăng nhập.',
    'auth/weak-password': 'Mật khẩu cần ít nhất 6 ký tự.',
    'auth/too-many-requests': 'Thử quá nhiều lần. Hãy đợi một lúc rồi thử lại.',
    'auth/network-request-failed': 'Không có kết nối mạng.',
    'auth/popup-closed-by-user': 'Bạn đã đóng cửa sổ đăng nhập.',
    'auth/cancelled-popup-request': 'Bạn đã đóng cửa sổ đăng nhập.',
    'auth/operation-not-allowed': 'Cách đăng nhập này chưa được bật trong Firebase (Authentication → Sign-in method).',
    'auth/unauthorized-domain': 'Tên miền này chưa được cho phép trong Firebase (Authentication → Settings → Authorized domains).',
    'auth/user-disabled': 'Tài khoản này đã bị khóa.'
  };
  const errText = (e) => ERR[e && e.code] || ('Có lỗi xảy ra' + (e && e.code ? ' (' + e.code + ')' : '') + '. Hãy thử lại.');

  /* ---------- nút trên thanh đầu ---------- */
  const initial = (u) => ((u.displayName || u.email || '?').trim()[0] || '?').toUpperCase();
  function paintBtn() {
    if (user) {
      btn.classList.add('signed');
      btn.setAttribute('aria-label', 'Tài khoản: ' + (user.displayName || user.email));
      btn.innerHTML = user.photoURL ? '<img src="' + esc(user.photoURL) + '" alt="" referrerpolicy="no-referrer">' : '<span class="av">' + esc(initial(user)) + '</span>';
    } else {
      btn.classList.remove('signed');
      btn.setAttribute('aria-label', 'Đăng nhập');
      btn.innerHTML = USER_IC;
    }
  }

  /* ---------- hộp thoại ---------- */
  const G_IC = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.5l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z"/><path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9z"/><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.3 3-4.1 5.6-4.1z"/></svg>';
  function ensureDlg() {
    if (dlg) return dlg;
    dlg = document.createElement('dialog');
    dlg.id = 'authDlg'; dlg.className = 'auth-dlg'; dlg.setAttribute('aria-labelledby', 'authTitle');
    document.body.appendChild(dlg);
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); else onClick(e); });
    dlg.addEventListener('submit', onSubmit);
    return dlg;
  }
  function paintDlg() {
    const d = ensureDlg();
    const note = msg ? '<p class="auth-msg ' + msg.t + '" role="' + (msg.t === 'err' ? 'alert' : 'status') + '">' + esc(msg.s) + '</p>' : '';
    if (user) {
      d.innerHTML = '<div class="auth-box"><div class="auth-head"><h2 id="authTitle">Tài khoản</h2><button class="iconbtn" type="button" data-a="close" aria-label="Đóng">✕</button></div>' +
        '<div class="auth-me">' + (user.photoURL ? '<img src="' + esc(user.photoURL) + '" alt="" referrerpolicy="no-referrer">' : '<span class="av lg">' + esc(initial(user)) + '</span>') +
        '<div><div class="auth-name">' + esc(user.displayName || 'Người học') + '</div><div class="muted small">' + esc(user.email || '') + '</div></div></div>' + note +
        '<p class="muted small">Bạn đã đăng nhập. Tiến độ học hiện vẫn lưu trên thiết bị này.</p>' +
        '<button class="btn" type="button" data-a="out">Đăng xuất</button></div>';
      return;
    }
    const title = mode === 'up' ? 'Tạo tài khoản' : mode === 'reset' ? 'Quên mật khẩu' : 'Đăng nhập';
    const go = mode === 'up' ? 'Tạo tài khoản' : mode === 'reset' ? 'Gửi email đặt lại' : 'Đăng nhập';
    d.innerHTML = '<div class="auth-box"><div class="auth-head"><h2 id="authTitle">' + title + '</h2><button class="iconbtn" type="button" data-a="close" aria-label="Đóng">✕</button></div>' +
      (mode === 'reset' ? '' : '<button class="btn auth-google" type="button" data-a="google"' + (busy ? ' disabled' : '') + '>' + G_IC + '<span>Tiếp tục với Google</span></button><div class="auth-or"><span>hoặc dùng email</span></div>') +
      '<form class="auth-form" novalidate>' +
        (mode === 'up' ? '<label>Tên hiển thị<input name="name" type="text" autocomplete="name" maxlength="40"></label>' : '') +
        '<label>Email<input name="email" type="email" autocomplete="email" inputmode="email" required></label>' +
        (mode === 'reset' ? '' : '<label>Mật khẩu<input name="pw" type="password" autocomplete="' + (mode === 'up' ? 'new-password' : 'current-password') + '" minlength="6" required></label>') +
        note +
        '<button class="btn btn-primary" type="submit"' + (busy ? ' disabled' : '') + '>' + go + '</button></form>' +
      '<div class="auth-links">' +
        (mode === 'in' ? '<button type="button" data-a="m-reset">Quên mật khẩu?</button><button type="button" data-a="m-up">Tạo tài khoản mới</button>' : '<button type="button" data-a="m-in">Quay lại đăng nhập</button>') +
      '</div></div>';
  }
  function openDlg() {
    ensureDlg(); msg = null; paintDlg();
    if (!dlg.open) dlg.showModal();
    loadSdk().then(() => { if (dlg.open) paintDlg(); })
      .catch(() => { msg = { t: 'err', s: 'Không tải được dịch vụ đăng nhập. Hãy kiểm tra kết nối mạng.' }; if (dlg.open) paintDlg(); });
  }
  const setBusy = (b) => { busy = b; paintDlg(); };
  const setMsg = (t, s) => { msg = { t, s }; busy = false; paintDlg(); };
  const finish = () => { msg = null; busy = false; if (dlg.open) dlg.close(); };

  function onClick(e) {
    const a = e.target.closest('[data-a]'); if (!a) return;
    const act = a.getAttribute('data-a');
    if (act === 'close') dlg.close();
    else if (act === 'm-up' || act === 'm-in' || act === 'm-reset') { mode = act.slice(2); msg = null; paintDlg(); }
    else if (act === 'out') loadSdk().then(() => auth.signOut()).then(finish).catch((er) => setMsg('err', errText(er)));
    else if (act === 'google') {
      setBusy(true);
      loadSdk().then(() => auth.signInWithPopup(new window.firebase.auth.GoogleAuthProvider())).then(finish)
        .catch((er) => {
          if (er && er.code === 'auth/popup-blocked') return auth.signInWithRedirect(new window.firebase.auth.GoogleAuthProvider());
          setMsg('err', errText(er));
        });
    }
  }
  function onSubmit(e) {
    e.preventDefault();
    const f = e.target.closest('.auth-form'); if (!f) return;
    const v = (n) => (f.elements[n] ? f.elements[n].value.trim() : '');
    const email = v('email'), pw = f.elements.pw ? f.elements.pw.value : '';
    if (!email) return setMsg('err', ERR['auth/missing-email']);
    if (mode !== 'reset' && !pw) return setMsg('err', ERR['auth/missing-password']);
    setBusy(true);
    loadSdk().then(() => {
      if (mode === 'reset') return auth.sendPasswordResetEmail(email).then(() => setMsg('ok', 'Đã gửi email đặt lại mật khẩu. Hãy kiểm tra hộp thư (cả thư rác).'));
      if (mode === 'up') {
        return auth.createUserWithEmailAndPassword(email, pw).then((cred) => {
          const name = v('name');
          return name ? cred.user.updateProfile({ displayName: name }).then(() => { user = auth.currentUser; paintBtn(); }) : null;
        }).then(finish);
      }
      return auth.signInWithEmailAndPassword(email, pw).then(finish);
    }).catch((er) => setMsg('err', errText(er)));
  }

  btn.addEventListener('click', openDlg);
  paintBtn();
  // Khôi phục phiên đăng nhập khi mở app (không chặn tải trang)
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1500));
  idle(() => { loadSdk().then(() => auth.getRedirectResult().catch(() => {})).catch(() => { /* offline */ }); });
})();
