// -------------------- CONFIG --------------------
const WIKI = {
    "Lydia, Kingdom of": "Lydia",
    "Minoan Greece": "Minoan_civilization",
    "Persia, Achaemenid": "Achaemenid_Empire",
    "Saba, Kingdom of": "Sheba",
    "Dahomey, Kingdom of": "Dahomey",
    "Khwarazm Empire": "Khwarazmian_Empire", 
    "Medes, Kingdom of": "Median_Kingdom",
    "Magadha, Kingdom of": "Magadha",
    "Jin Dynasty": "Jin_dynasty_(266–420)",
    "Nabatea, Kingdom of": "Nabataean_Kingdom",
    "Bosporus, Kingdom of": "Bosporan_Kingdom",
    "Wari": "Wari_Empire",
    "Franks, Kingdom of": "Francia",
    "Israel, Kingdom of": "Kingdom_of_Israel_(united_monarchy)"


    // "Sui Dynasty": "Sui_dynasty",
  };

  const civilizations = {
    "https://i.imgur.com/wr7G45D.png": "Indus Valley Civilization",
    "https://i.imgur.com/p7lYsLc.png": "Egypt, Ancient",
    "https://i.imgur.com/aTbp7py.png": "Sumer",
    "https://i.imgur.com/wxXG8bV.png": "Minoan Greece",
    "https://i.imgur.com/dr57Zm5.png": "Akkadian Empire",
    "https://i.imgur.com/BK8loD3.png": "Elam",
    "https://i.imgur.com/ecr9W4C.png": "Babylonia",
    "https://i.imgur.com/2DJQ9Sq.png": "Hittite Empire",
    "https://i.imgur.com/HG3igrm.png": "Assyria",
    "https://i.imgur.com/HNFoeuo.png": "Phrygia",
    "https://i.imgur.com/ECtoRDG.png": "Mycenaean Greece",
    "https://i.imgur.com/0sximZm.png": "Shang Dynasty",
    "https://i.imgur.com/1RoQvQU.png": "Israel, Kingdom of",
    "https://i.imgur.com/cNlBqka.png": "Zhou Dynasty",
    "https://i.imgur.com/WiR9F1G.png": "Kush, Kingdom of",
    "https://i.imgur.com/JZjO9Ws.png": "Saba, Kingdom of",
    "https://i.imgur.com/m8C45Gy.png": "Urartu",
    "https://i.imgur.com/yfrXW2o.png": "Etruscans",
    "https://i.imgur.com/g5SrMG8.png": "Persia, Achaemenid",
    "https://i.imgur.com/ypzpHP5.png": "Phoenicia / Carthage",
    "https://i.imgur.com/2L33WxW.png": "Magadha, Kingdom of",
    "https://i.imgur.com/4Fmy32L.png": "Olmecs",
    "https://i.imgur.com/yic2y6n.png": "Nanda Empire",
    "https://i.imgur.com/rBZQ7EL.png": "Anuradhapura, Kingdom of",
    "https://i.imgur.com/ksLGjN1.png": "Medes, Kingdom of",
    "https://i.imgur.com/9rtLmj6.png": "Lydia, Kingdom of",
    "https://i.imgur.com/Yldcm01.png": "Bosporus, Kingdom of",
    "https://i.imgur.com/z4wpNrp.png": "Macedonian Empire",
    "https://i.imgur.com/h6oGLlH.png": "Maurya Empire",
    "https://i.imgur.com/9YD6oh5.png": "Qin Dynasty",
    "https://i.imgur.com/mEWTjgY.png": "Seleucid Empire",
    "https://i.imgur.com/pgRIij8.png": "Numidia",
    "https://i.imgur.com/QV8gHNZ.png": "Parthian Empire",
    "https://i.imgur.com/YaR1Wx0.png": "Nabatea, Kingdom of",
    "https://i.imgur.com/Y3AGEQ3.png": "Kushan Empire",
    "https://i.imgur.com/DnLZVm6.png": "Han Dynasty",
    "https://i.imgur.com/BZ05Gn0.png": "Funan",
    "https://i.imgur.com/kN13X6W.png": "Sasanian Empire",
    "https://i.imgur.com/agGb8MW.png": "Göktürks",
    "https://i.imgur.com/viIT731.png": "Ghana Empire",
    "https://i.imgur.com/qqCzsAg.png": "Tarumanagara",
    "https://i.imgur.com/H0KeJvK.png": "Jin Dynasty",
    "https://i.imgur.com/7usmyoH.png": "Himyar",
    "https://i.imgur.com/cT4GfRM.png": "Hephthalites",
    "https://i.imgur.com/cUkz4Ee.png": "Sui Dynasty",
    "https://i.imgur.com/TuKaxlF.png": "Tang Dynasty",
    "https://i.imgur.com/nTtZwKT.png": "Byzantine Empire",
    "https://i.imgur.com/2rtlP4l.png": "Umayyad Caliphate",
    "https://i.imgur.com/YS2ruaa.png": "Khazaria",
    "https://i.imgur.com/7zVanXI.png": "Srivijaya",
    "https://i.imgur.com/AzfLTtc.png": "Song Dynasty",
    "https://i.imgur.com/Nu0nnaN.png": "Yuan Dynasty",
    "https://i.imgur.com/VByg1zn.png": "Ming Dynasty",
    "https://i.imgur.com/i8bU0jh.png": "Qing Dynasty",
    "https://i.imgur.com/TkJOzi8.png": "Tibetan Empire",
    "https://i.imgur.com/wbOHllm.png": "Khazar Khaganate",
    "https://i.imgur.com/2sB3mIL.png": "Abbasid Caliphate",
    "https://i.imgur.com/iDmg6Hm.png": "Samanid Empire",
    "https://i.imgur.com/7ZKCamH.png": "Buyid Dynasty",
    "https://i.imgur.com/I0QEV9E.png": "Ghaznavid Empire",
    "https://i.imgur.com/eZd9KfM.png": "Fatimid Caliphate",
    "https://i.imgur.com/TqAF6tX.png": "Seljuk Dynasty",
    "https://i.imgur.com/2otdPM6.png": "Qara Khitai",
    "https://i.imgur.com/SXSLWqi.png": "Khwarazm Empire",
    "https://i.imgur.com/cx9D0Kn.png": "Ayyubid Dynasty",
    "https://i.imgur.com/rNAwMTS.png": "Almohad Caliphate",
    "https://i.imgur.com/n4JSigg.png": "Mali Empire",
    "https://i.imgur.com/muVafva.png": "Kilwa Sultanate",
    "https://i.imgur.com/0xwOwBT.png": "Mamluk Sultanate",
    "https://i.imgur.com/3lRoQkX.png": "Ottoman Empire",
    "https://i.imgur.com/b6mPpNw.png": "Safavid Empire",
    "https://i.imgur.com/UexX01C.png": "Songhai Empire",
    "https://i.imgur.com/HpVmAy1.png": "Benin, Kingdom of",
    "https://i.imgur.com/Eq0blyd.png": "Dahomey, Kingdom of",
    "https://i.imgur.com/ILlT1Z9.png": "Kanem-Bornu Empire",
    "https://i.imgur.com/zwFDmST.png": "Kongo, Kingdom of",
    "https://i.imgur.com/nXFywIM.png": "Ethiopian Empire",
    "https://i.imgur.com/owDsYeB.png": "Delhi Sultanate",
    "https://i.imgur.com/nsPSfsm.png": "Ilkhanate",
    "https://i.imgur.com/aCfKfun.png": "Mongol Empire",
    "https://i.imgur.com/w79fyhG.png": "Chagatai Khanate",
    "https://i.imgur.com/fVtwuBM.png": "Golden Horde",
    "https://i.imgur.com/RGtzuAQ.png": "Timurid Empire",
    "https://i.imgur.com/sFfer3Q.png": "Bukhara Khanate",
    "https://i.imgur.com/ycXpKux.png": "Kazakh Khanate",
    "https://i.imgur.com/md03KT.png": "Mughal Empire",
    "https://i.imgur.com/Gse5vFL.png": "Dzungar Khanate",
    "https://i.imgur.com/geUBNC.png": "Roman Empire",
    "https://i.imgur.com/s3dxrSh.png": "Visigothic Kingdom",
    "https://i.imgur.com/olv6bs0.png": "Franks, Kingdom of",
    "https://i.imgur.com/8PbATiu.png": "Bulgarian Empire",
    "https://i.imgur.com/v5ozyJ2.png": "Holy Roman Empire",
    "https://i.imgur.com/joycnyt.png": "Kievan Rus",
    "https://i.imgur.com/bsYDtKQ.png": "Majapahit Empire",
    "https://i.imgur.com/DN6WPLh.png": "Mayan Civilization",
    "https://i.imgur.com/DiiUaF9.png": "Inca Empire",
    "https://i.imgur.com/kylUZVQ.png": "Aztec Empire",
    "https://i.imgur.com/7tVoAKY.png": "Teotihuacan",
    "https://i.imgur.com/aSiucI0.png": "Wari",
    "https://i.imgur.com/4wjYZc6.png": "Tiwanaku",
    "https://i.imgur.com/YtATlxL.png": "Aksum",
    "https://i.imgur.com/JTDx9lW.png": "Khmer Empire"
  };

  // Build a quick filename -> civilization map to handle CDN/host variations
  const civilizationsByFilename = (() => {
    const map = new Map();
    try {
      for (const [url, name] of Object.entries(civilizations)) {
        try {
          const u = new URL(url);
          const file = (u.pathname.split('/').filter(Boolean).pop()) || '';
          if (file) map.set(file, name);
        } catch {
          const file = (url.split('/').filter(Boolean).pop()) || '';
          if (file) map.set(file, name);
        }
      }
    } catch {}
    return map;
  })();

  function basenameNoExt(name){
    const file = (name || '').split('/').filter(Boolean).pop() || '';
    const i = file.lastIndexOf('.');
    return i >= 0 ? file.slice(0, i) : file;
  }
  function charsAmbiguouslyEqual(a, b){
    if (a === b) return true;
    const A = (a || '').toUpperCase();
    const B = (b || '').toUpperCase();
    if (A === B) return true;
    const groups = [
      new Set(['0','O']),
      new Set(['1','I','L']),
      new Set(['5','S']),
      new Set(['2','Z']),
      new Set(['8','B'])
    ];
    for (const g of groups) {
      if (g.has(A) && g.has(B)) return true;
    }
    return false;
  }
  function filenamesAmbiguouslyEqual(a, b){
    const A = basenameNoExt(a);
    const B = basenameNoExt(b);
    if (A.length !== B.length) return false;
    for (let i = 0; i < A.length; i++) {
      if (!charsAmbiguouslyEqual(A[i], B[i])) return false;
    }
    return true;
  }

  const USE_SLUG_FALLBACK = true;
  const QUESTION_IMG_SELECTORS = '#currQuestionImage img, #currQuestionImageWrapper img';
  const DEBUG = true; // set to false to silence logs
  const t0 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
  function ts(){
    const n = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    return `${Math.round(n - t0)}ms`;
  }
  function log(...args){ if (DEBUG) console.log('[Sporcle helper]', ts(), ...args); }
  
  // -------------------- STATE --------------------
  let currentImageSrc = "";   // image currently shown by the page
  let lastImageSrc = "";      // image from just-before the last submission
  const seen = new WeakSet();
  let hideOnNextSubmission = false;
  let hasShownEndCard = false;           // guard to avoid duplicate end-of-quiz popups
  let seenImageAtLeastOnce = false;      // only try end-detect if we've seen a question image before
  let endCheckTimer = 0;                 // debounce timer id for end-detection
  let replayCheckTimer = 0;              // debounce timer id for replay-link detection
  let replayPollIntervalId = 0;          // interval id for polling fallback (results screen)
  const dynamicImageToAnswer = new Map(); // learned mappings during session
  let lastImageUpdateAt = 0;
  
  // -------------------- UI --------------------
  const $card = (() => {
    const root = document.createElement('div');
    root.id = 'sporcle-helper-card';
    root.style.display = 'none';
    root.innerHTML = `
      <div class="sh-card">
        <img class="sh-img" alt="Question image" />
        <div class="sh-title"></div>
        <div class="sh-body"></div>
        <div class="sh-footer"><a class="sh-link" target="_blank" rel="noopener noreferrer"></a></div>
      </div>
    `;
    document.documentElement.appendChild(root);
    return root;
  })();
  
  function setCard({ image, title, body, href, linkText }) {
    const img = $card.querySelector('.sh-img');
    if (image) {
      if (img.src !== image) img.src = image;
      img.style.display = 'block';
    } else {
      img.removeAttribute('src');
      img.style.display = 'none';
    }
    $card.querySelector('.sh-title').textContent = title || '';
    // body can contain multiple paragraphs separated by \n\n
    $card.querySelector('.sh-body').textContent = body || '';
    const link = $card.querySelector('.sh-link');
    if (href) {
      link.href = href;
      link.textContent = linkText || 'Read on Wikipedia';
      link.style.display = '';
    } else {
      link.removeAttribute('href');
      link.textContent = '';
      link.style.display = 'none';
    }
  }
  function showCard() { $card.style.display = ''; hideOnNextSubmission = true; }
  function hideCard() { $card.style.display = 'none'; hideOnNextSubmission = false; }
  
  // -------------------- Wikipedia helpers --------------------
  function normalizeKey(txt){ return (txt||'').trim(); }
  function guessSlugFromAnswer(txt) {
    // 1) Trim and flip "X, Y" -> "Y X" (handles multiple commas too)
    let s = (txt || '').trim();
    if (s.includes(',')) {
      const parts = s.split(',').map(p => p.trim()).filter(Boolean);
      if (parts.length >= 2) {
        // Move the first segment to the end: "Benin, Kingdom of" -> "Kingdom of Benin"
        s = parts.slice(1).join(', ') + ' ' + parts[0];
      }
    }
  
    // 2) Normalize & clean (mildly more robust than before)
    // - strip accents (e.g., Sui Dýnásty -> Sui Dynasty)
    // - drop parentheses and apostrophes
    // - keep dashes, spaces, letters, digits, underscore
    s = s
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove diacritics
      .replace(/[()]/g, '')
      .replace(/['’]/g, '')
      .replace(/–|—/g, '-')            // unicode dash -> ascii
      .replace(/[^\w\s-]/g, ' ')       // other punctuation to space
      .replace(/\s+/g, '_')            // spaces -> underscores
      .replace(/_+/g, '_')             // collapse multiple _
      .replace(/^_+|_+$/g, '');        // trim leading/trailing _
    return s;
  }  
async function fetchWikiIntroBySlug(slug){
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`;
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { title: data.title || slug.replace(/_/g,' '), extract: data.extract || '', url: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${slug}` };
  }
  async function getSummary(answerText){
    const key = normalizeKey(answerText);
    try { if (WIKI[key]) return await fetchWikiIntroBySlug(WIKI[key]); } catch {}
    if (USE_SLUG_FALLBACK) { try { return await fetchWikiIntroBySlug(guessSlugFromAnswer(key)); } catch {} }
    return { title: key, extract: '', url: '' };
  }
  
  // -------------------- Image capture (2-slot buffer) --------------------
  function snapshotQuestionImage(){
    const img = document.querySelector(QUESTION_IMG_SELECTORS);
    if (!img) return '';
    try { return new URL(img.getAttribute('src') || img.src, location.href).href; }
    catch { return img.src || ''; }
  }
  // Update the buffer when the page swaps the image
  function updateCurrentImage(newSrc){
    if (!newSrc || newSrc === currentImageSrc) return;
    // shift current -> last, then set current
    const beforeCurrent = currentImageSrc;
    const beforeLast = lastImageSrc;
    lastImageSrc = currentImageSrc || newSrc;
    currentImageSrc = newSrc;
    seenImageAtLeastOnce = true;
    hasShownEndCard = false; // new image means we are in-game again
    const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    const delta = lastImageUpdateAt ? Math.round(now - lastImageUpdateAt) : 'N/A';
    lastImageUpdateAt = now;
    log('updateCurrentImage', { beforeCurrent, beforeLast, newSrc, newLast: lastImageSrc, deltaSincePrevMs: delta });
  }
  
  // initialize both slots
  (function initImages(){
    const initial = snapshotQuestionImage();
    currentImageSrc = initial;
    lastImageSrc = initial;
    seenImageAtLeastOnce = !!initial;
    log('initImages', { initial });
  })();
  
  // Watch for the page changing the question image (src changes or new <img>)
  const imageObserver = new MutationObserver(ms => {
    for (const m of ms) {
      if (m.type === 'attributes' && m.attributeName === 'src' && m.target.tagName === 'IMG') {
        if (m.target.matches(QUESTION_IMG_SELECTORS)) updateCurrentImage(m.target.src);
      }
      for (const n of m.addedNodes || []) {
        if (n.nodeType !== 1) continue;
        if (n.matches?.(QUESTION_IMG_SELECTORS)) updateCurrentImage(n.src || n.getAttribute?.('src'));
        const nested = n.querySelector?.(QUESTION_IMG_SELECTORS);
        if (nested) updateCurrentImage(nested.src || nested.getAttribute('src'));
      }
    }
  });
  imageObserver.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['src'] });
  log('imageObserver attached');

  // -------------------- End-of-quiz detection --------------------
  function isElementVisible(el){
    if (!el || !el.isConnected) return false;
    const cs = window.getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity || '1') === 0) return false;
    return el.getClientRects().length > 0;
  }
  function resolveAnswerFromImage(imgSrc){
    const imageSrcExact = imgSrc || '';
    let imageSrcKey = imageSrcExact;
    let fileKey = '';
    try {
      const u = new URL(imageSrcExact, location.href);
      imageSrcKey = u.origin + u.pathname; // strip query/hash for robust matching
      fileKey = (u.pathname.split('/').filter(Boolean).pop()) || '';
    } catch {}
    // prefer learned cache
    const cached = dynamicImageToAnswer.get(imageSrcExact)
      || dynamicImageToAnswer.get(imageSrcKey)
      || (fileKey ? dynamicImageToAnswer.get(fileKey) : '');
    if (cached) return cached;
    // then static maps
    const fromStatic = civilizations[imageSrcKey] || civilizations[imageSrcExact] || (fileKey ? civilizationsByFilename.get(fileKey) : '');
    let resolved = fromStatic || '';
    if (!resolved && fileKey) {
      // ambiguous filename matching fallback
      for (const [knownFile, name] of civilizationsByFilename.entries()) {
        if (filenamesAmbiguouslyEqual(fileKey, knownFile)) { resolved = name; break; }
      }
    }
    log('resolveAnswerFromImage', { imageSrcExact, imageSrcKey, fileKey, cached: !!cached, resolved });
    return resolved;
  }
  function extractAnswerFromResultsForImage(imgSrc){
    const imageSrcExact = imgSrc || '';
    let fileKey = '';
    try {
      const u = new URL(imageSrcExact, location.href);
      fileKey = (u.pathname.split('/').filter(Boolean).pop()) || '';
    } catch {
      fileKey = (imageSrcExact.split('/').filter(Boolean).pop()) || '';
    }
    if (!fileKey) return '';
    // Scan all images to match by filename across currentSrc/src/srcset/data-src
    const imgs = Array.from(document.querySelectorAll('img'));
    const candidates = imgs.filter(img => {
      const csrc = img.currentSrc || '';
      const s1 = img.getAttribute('src') || img.src || '';
      const ss = img.getAttribute('srcset') || '';
      const ds = img.getAttribute('data-src') || '';
      const any = [csrc, s1, ss, ds].some(s => s.includes(fileKey));
      if (any) return true;
      // try ambiguous match against the basename
      const files = [csrc, s1, ds].map(basenameNoExt).filter(Boolean);
      return files.some(f => f && filenamesAmbiguouslyEqual(f, fileKey));
    });
    for (const img of candidates) {
      // Try common attributes first
      const attrs = [img.getAttribute('alt'), img.getAttribute('title'), img.getAttribute('aria-label')]
        .map(v => (v || '').trim()).filter(Boolean);
      if (attrs.length) {
        log('extractAnswerFromResultsForImage:attr', { fileKey, value: attrs[0] });
        return attrs[0];
      }
      // Search nearby DOM for likely labels
      const container = img.closest('figure, .tile, .result, .entry, .image, .card, li, .grid-item, .slot, .answer, .name, .label') || img.parentElement;
      const labelSelectors = ['figcaption', '[data-answer]', '[data-name]', '.text', '.label', '.answer', '.name', '.title', '.caption'];
      if (container) {
        for (const sel of labelSelectors) {
          const el = container.querySelector(sel);
          const val = el?.textContent?.trim();
          if (val) {
            log('extractAnswerFromResultsForImage:nearby', { fileKey, sel, value: val });
            return val;
          }
        }
        // Try immediate sibling text nodes/elements
        const sibs = [container.nextElementSibling, img.nextElementSibling].filter(Boolean);
        for (const s of sibs) {
          const val = s?.textContent?.trim();
          if (val) {
            log('extractAnswerFromResultsForImage:sibling', { fileKey, value: val });
            return val;
          }
        }
        // Try data-* attributes on container
        const ds = (container.dataset && (container.dataset.answer || container.dataset.name)) || '';
        if (ds) {
          const v = (ds || '').trim();
          if (v) {
            log('extractAnswerFromResultsForImage:dataset', { fileKey, value: v });
            return v;
          }
        }
      }
    }
    log('extractAnswerFromResultsForImage:none', { fileKey });
    return '';
  }
  function learnMappingFromImage(imgSrc, answer){
    if (!imgSrc || !answer) return;
    try {
      const u = new URL(imgSrc, location.href);
      dynamicImageToAnswer.set(u.href, answer);
      dynamicImageToAnswer.set(u.origin + u.pathname, answer);
      const fileKey = (u.pathname.split('/').filter(Boolean).pop()) || '';
      if (fileKey) dynamicImageToAnswer.set(fileKey, answer);
    } catch {
      dynamicImageToAnswer.set(imgSrc, answer);
      const fileKey = (imgSrc.split('/').filter(Boolean).pop()) || '';
      if (fileKey) dynamicImageToAnswer.set(fileKey, answer);
    }
    log('learnMappingFromImage', { imgSrc, answer });
  }
  function showEndCardFromLastImage(){
    if (hasShownEndCard) return;
    const img = lastImageSrc || currentImageSrc || '';
    if (!img) return;
    let answer = resolveAnswerFromImage(img);
    if (!answer) {
      // Attempt to extract answer text from the results DOM
      const extracted = extractAnswerFromResultsForImage(img);
      if (extracted) {
        learnMappingFromImage(img, extracted);
        answer = extracted;
      }
    }
    if (!answer) {
      // Poll the results screen briefly; DOM may populate labels slightly later
      let tries = 0;
      const maxTries = 8; // ~2s (8 * 250ms)
      const interval = setInterval(() => {
        tries++;
        const extractedLater = extractAnswerFromResultsForImage(img);
        if (extractedLater) {
          clearInterval(interval);
          learnMappingFromImage(img, extractedLater);
          log('showEndCardFromLastImage:resolvedLater', { img, extractedLater });
          hasShownEndCard = true;
          setCard({ image: img, title: `The correct answer was ${extractedLater}.`, body: 'Loading Wikipedia summary…', href: '' });
          showCard();
          getSummary(extractedLater)
            .then(({ title, extract, url }) => {
              setCard({ image: img, title: `The correct answer was ${extractedLater}.`, body: extract || '(No summary available.)', href: url || '', linkText: `Open “${title}” on Wikipedia` });
              showCard();
            })
            .catch(() => {
              setCard({ image: img, title: `The correct answer was ${extractedLater}.`, body: '(Could not load Wikipedia summary.)', href: '' });
              showCard();
            });
        } else if (tries >= maxTries) {
          clearInterval(interval);
          hasShownEndCard = true;
          log('showEndCardFromLastImage:unresolved', { img });
          setCard({ image: img, title: 'Answer unavailable', body: 'Mapping not found yet.', href: '' });
          showCard();
        }
      }, 250);
      return;
    }
    hasShownEndCard = true;
    log('showEndCardFromLastImage', { img, answer });
    setCard({ image: img, title: `The correct answer was ${answer}.`, body: 'Loading Wikipedia summary…', href: '' });
    showCard();
    getSummary(answer)
      .then(({ title, extract, url }) => {
        setCard({ image: img, title: `The correct answer was ${answer}.`, body: extract || '(No summary available.)', href: url || '', linkText: `Open “${title}” on Wikipedia` });
        showCard();
      })
      .catch(() => {
        setCard({ image: img, title: `The correct answer was ${answer}.`, body: '(Could not load Wikipedia summary.)', href: '' });
        showCard();
      });
  }
  function scheduleCheckQuizEnd(){
    if (endCheckTimer) clearTimeout(endCheckTimer);
    endCheckTimer = setTimeout(() => {
      endCheckTimer = 0;
      // Only evaluate end if we've seen at least one question image during this session
      if (!seenImageAtLeastOnce || hasShownEndCard) return;
      const imgEl = document.querySelector(QUESTION_IMG_SELECTORS);
      const imgVisible = !!(imgEl && isElementVisible(imgEl));
      log('scheduleCheckQuizEnd', { imgVisible, currentImageSrc, lastImageSrc });
      if (!imgVisible) {
        // The question image is not visible anymore for a moment → likely results screen
        showEndCardFromLastImage();
      }
    }, 700); // small delay to avoid triggering during normal image swaps
  }
  function scheduleCheckReplayLink(){
    if (replayCheckTimer) clearTimeout(replayCheckTimer);
    replayCheckTimer = setTimeout(() => {
      replayCheckTimer = 0;
      if (!seenImageAtLeastOnce || hasShownEndCard) return;
      const replayEl = document.getElementById('replay-link');
      const vis = !!(replayEl && isElementVisible(replayEl));
      log('scheduleCheckReplayLink', { found: !!replayEl, visible: vis });
      if (vis) {
        showEndCardFromLastImage();
      }
    }, 150);
  }
  const endObserver = new MutationObserver(() => { scheduleCheckQuizEnd(); scheduleCheckReplayLink(); });
  endObserver.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'style', 'hidden'] });
  // In case we're injected on the results screen
  scheduleCheckReplayLink();
  log('replay observer attached + initial check');
  function startReplayPolling(){
    if (replayPollIntervalId) return;
    replayPollIntervalId = setInterval(() => {
      if (hasShownEndCard) return;
      scheduleCheckReplayLink();
    }, 400);
  }
  startReplayPolling();
  log('replay polling started');
  
  // Freeze the image for THIS submission just before the site handles it
  function captureBeforeSubmit(trigger){
    // lock in whatever is on screen right now
    lastImageSrc = currentImageSrc || lastImageSrc;
    const imgEl = document.querySelector(QUESTION_IMG_SELECTORS);
    const state = imgEl ? {
      attrSrc: imgEl.getAttribute('src'),
      domSrc: imgEl.src,
      currentSrc: imgEl.currentSrc,
      attrSrcset: imgEl.getAttribute('srcset')
    } : null;
    log('captureBeforeSubmit', { trigger: trigger || 'unknown', currentImageSrc, lastImageSrc, imgState: state });
    if (hideOnNextSubmission) hideCard();
  }
  document.addEventListener('pointerdown', () => captureBeforeSubmit('pointerdown'), true); // capture-phase: runs before site handlers
  document.addEventListener('keydown', e => { if (e.key === 'Enter') captureBeforeSubmit('enter'); }, true);
  
  // -------------------- Miss handling --------------------
  function onMissElement(el){
    if (seen.has(el)) return;
    seen.add(el);
  
    // Resolve the correct answer by mapping the image URL -> civilization name
    const imageSrcExact = lastImageSrc || currentImageSrc || '';
    let imageSrcKey = imageSrcExact;
    try {
      const u = new URL(imageSrcExact, location.href);
      imageSrcKey = u.origin + u.pathname; // strip query/hash for robust matching
    } catch {}
    const mapped = civilizations[imageSrcKey] || civilizations[imageSrcExact] || '';
    // Fallback to decoy element text if mapping fails
    const fallbackText = el.querySelector('.text')?.textContent?.trim() || el.textContent.trim();
    const answer = mapped || fallbackText;
    log('onMissElement', { mapped: !!mapped, fallbackUsed: !mapped, imageSrcExact, imageSrcKey, answerText: answer });
    if (!answer) return;
    // learn mapping for future questions in this session
    learnMappingFromImage(imageSrcExact, answer);
  
    // Use the FROZEN image from just before the click: lastImageSrc
    setCard({
      image: imageSrcExact,
      title: `The correct answer was ${answer}.`,
      body: 'Loading Wikipedia summary…',
      href: ''
    });
    showCard();
  
    getSummary(answer)
      .then(({ title, extract, url }) => {
        setCard({
          image: imageSrcExact,
          title: `The correct answer was ${answer}.`,
          body: extract || '(No summary available.)',
          href: url || '',
          linkText: `Open “${title}” on Wikipedia`
        });
        showCard();
      })
      .catch(() => {
        setCard({
          image: imageSrcExact,
          title: `The correct answer was ${answer}.`,
          body: '(Could not load Wikipedia summary.)',
          href: ''
        });
        showCard();
      });
  }
  
  // Watch for .answer.decoy
  const missObserver = new MutationObserver(ms => {
    for (const m of ms) {
      if (m.type !== 'attributes' || m.attributeName !== 'class') continue;
      const el = m.target;
      if (!(el instanceof HTMLElement)) continue;
      if (!el.classList.contains('answer') || !el.classList.contains('decoy')) continue;
      onMissElement(el);
    }
  });
  missObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'], subtree: true });
  
  console.log('[Sporcle helper] Ready (previous image + summary).');
  