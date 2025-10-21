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
    "Franks, Kingdom of": "Francia"


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

  const USE_SLUG_FALLBACK = true;
  const QUESTION_IMG_SELECTORS = '#currQuestionImage img, #currQuestionImageWrapper img';
  
  // -------------------- STATE --------------------
  let currentImageSrc = "";   // image currently shown by the page
  let lastImageSrc = "";      // image from just-before the last submission
  const seen = new WeakSet();
  let hideOnNextSubmission = false;
  
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
    lastImageSrc = currentImageSrc || newSrc;
    currentImageSrc = newSrc;
  }
  
  // initialize both slots
  (function initImages(){
    const initial = snapshotQuestionImage();
    currentImageSrc = initial;
    lastImageSrc = initial;
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
  
  // Freeze the image for THIS submission just before the site handles it
  function captureBeforeSubmit(){
    // lock in whatever is on screen right now
    lastImageSrc = currentImageSrc || lastImageSrc;
    if (hideOnNextSubmission) hideCard();
  }
  document.addEventListener('pointerdown', captureBeforeSubmit, true); // capture-phase: runs before site handlers
  document.addEventListener('keydown', e => { if (e.key === 'Enter') captureBeforeSubmit(); }, true);
  
  // -------------------- Miss handling --------------------
  function onMissElement(el){
    if (seen.has(el)) return;
    seen.add(el);
  
    const answer = el.querySelector('.text')?.textContent?.trim() || el.textContent.trim();
    if (!answer) return;
  
    // Use the FROZEN image from just before the click: lastImageSrc
    setCard({
      image: lastImageSrc || currentImageSrc || '',
      title: `The correct answer was ${answer}.`,
      body: 'Loading Wikipedia summary…',
      href: ''
    });
    showCard();
  
    getSummary(answer)
      .then(({ title, extract, url }) => {
        setCard({
          image: lastImageSrc || currentImageSrc || '',
          title: `The correct answer was ${answer}.`,
          body: extract || '(No summary available.)',
          href: url || '',
          linkText: `Open “${title}” on Wikipedia`
        });
        showCard();
      })
      .catch(() => {
        setCard({
          image: lastImageSrc || currentImageSrc || '',
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
  