// ========================================
// 명언 데이터 & 상수
// ========================================

const DEFAULT_QUOTES = [
  { text: "삶이 있는 한 희망은 있다.", author: "키케로" },
  { text: "산다는것 그것은 치열한 전투이다.", author: "로망 롤랑" },
  { text: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.", author: "사무엘 존슨" },
  { text: "언제나 현재에 집중할수 있다면 행복할것이다.", author: "파울로 코엘료" },
  { text: "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다.", author: "헬렌 켈러" },
  { text: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.", author: "헬렌 켈러" },
  { text: "신은 용기있는자를 결코 버리지 않는다.", author: "켄러" },
  { text: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.", author: "엘버트 허버드" },
  { text: "우리는 두려움의 늪에 빠져 허우적댈 때 스스로 수렁에 빠진다.", author: "프랭클린 D. 루스벨트" },
  { text: "피할수 없으면 즐겨라.", author: "로버트 엘리엇" },
  { text: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?", author: "이드리스 샤흐" },
  { text: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.", author: "엘사 맥스웰" },
  { text: "먼저 전체를 보고 그 다음에 세부를 보라.", author: "괴테" },
  { text: "자신의 본성이 어떤것이든 그에 충실하라. 자신이 가진 재능의 끈을 놓아버리지 마라. 본성이 이끄는 대로 따르면 성공할것이다.", author: "시드니 스미스" },
  { text: "행복은 습관이다. 그것을 몸에 지니라.", author: "허버드" },
  { text: "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.", author: "L. 론 허버드" },
  { text: "계단을 밟아야 계단 위에 올라설수 있다.", author: "터키 속담" },
  { text: "행복은 결코 멀리 있는 것이 아니다. 행복은 가까이에 있다. 다만 우리가 보지 못할 뿐이다.", author: "탈무드" },
  { text: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.", author: "헨리 포드" },
  { text: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.", author: "톰 모나건" }
];

const STORAGE_KEY = 'custom-quotes';
const THEME_STORAGE_KEY = 'preferred-theme';
const ANIMATION_DURATION = 200;

// ========================================
// 상태 관리
// ========================================

let allQuotes = [...DEFAULT_QUOTES];
let currentQuote = null;

// ========================================
// DOM 요소
// ========================================

const elements = {
  quoteText: document.getElementById('quote-text'),
  quoteAuthor: document.getElementById('quote-author'),
  nextBtn: document.getElementById('next-quote-btn'),
  copyBtn: document.getElementById('copy-btn'),
  shareBtn: document.getElementById('share-btn'),
  feedbackMessage: document.getElementById('feedback-message'),
  addQuoteForm: document.getElementById('add-quote-form'),
  newQuoteText: document.getElementById('new-quote-text'),
  newQuoteAuthor: document.getElementById('new-quote-author'),
  customQuotesList: document.getElementById('custom-quotes-list'),
  emptyListMessage: document.getElementById('empty-list-message'),
  themeToggle: document.getElementById('theme-toggle')
};

// ========================================
// 유틸리티 함수
// ========================================

/**
 * 랜덤 명언 선택 (현재 명언과 다른 것 선택)
 */
function getRandomQuote() {
  if (allQuotes.length === 0) {
    return null;
  }
  
  if (allQuotes.length === 1) {
    return allQuotes[0];
  }
  
  let randomQuote;
  do {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    randomQuote = allQuotes[randomIndex];
  } while (currentQuote && randomQuote.text === currentQuote.text);
  
  return randomQuote;
}

/**
 * 피드백 메시지 표시
 */
function showFeedback(message, type = 'success') {
  elements.feedbackMessage.textContent = message;
  elements.feedbackMessage.className = `feedback-message ${type}`;
  
  setTimeout(() => {
    elements.feedbackMessage.textContent = '';
    elements.feedbackMessage.className = 'feedback-message';
  }, 3000);
}

/**
 * 명언 표시 (애니메이션 포함)
 */
function displayQuote(quote) {
  if (!quote) {
    elements.quoteText.textContent = '명언을 불러올 수 없습니다.';
    elements.quoteAuthor.textContent = '';
    return;
  }
  
  // 페이드 아웃
  elements.quoteText.classList.add('changing');
  elements.quoteAuthor.classList.add('changing');
  
  setTimeout(() => {
    currentQuote = quote;
    elements.quoteText.textContent = quote.text;
    elements.quoteAuthor.textContent = `— ${quote.author}`;
    
    // 페이드 인
    elements.quoteText.classList.remove('changing');
    elements.quoteAuthor.classList.remove('changing');
    
    // 접근성: 스크린리더에 알림
    elements.quoteText.setAttribute('aria-label', `${quote.text}, ${quote.author}`);
  }, ANIMATION_DURATION);
}

// ========================================
// LocalStorage 관리
// ========================================

/**
 * 커스텀 명언 불러오기
 */
function loadCustomQuotes() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('명언 불러오기 실패:', error);
    return [];
  }
}

/**
 * 커스텀 명언 저장
 */
function saveCustomQuotes(quotes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes));
    return true;
  } catch (error) {
    console.error('명언 저장 실패:', error);
    showFeedback('저장에 실패했습니다. 다시 시도해주세요.', 'error');
    return false;
  }
}

/**
 * 전체 명언 목록 업데이트
 */
function updateAllQuotes() {
  const customQuotes = loadCustomQuotes();
  allQuotes = [...DEFAULT_QUOTES, ...customQuotes];
}

// ========================================
// 명언 추가/삭제
// ========================================

/**
 * 새 명언 추가
 */
function addCustomQuote(text, author) {
  const trimmedText = text.trim();
  const trimmedAuthor = author.trim();
  
  // 유효성 검사
  if (!trimmedText || !trimmedAuthor) {
    showFeedback('명언과 저자를 모두 입력해주세요.', 'error');
    return false;
  }
  
  if (trimmedText.length > 300) {
    showFeedback('명언은 최대 300자까지 입력 가능합니다.', 'error');
    return false;
  }
  
  if (trimmedAuthor.length > 100) {
    showFeedback('저자명은 최대 100자까지 입력 가능합니다.', 'error');
    return false;
  }
  
  const newQuote = { 
    text: trimmedText, 
    author: trimmedAuthor,
    id: Date.now() // 고유 ID
  };
  
  const customQuotes = loadCustomQuotes();
  customQuotes.push(newQuote);
  
  if (saveCustomQuotes(customQuotes)) {
    updateAllQuotes();
    renderCustomQuotes();
    showFeedback('새 명언이 추가되었습니다! 🎉', 'success');
    return true;
  }
  
  return false;
}

/**
 * 커스텀 명언 삭제
 */
function deleteCustomQuote(quoteId) {
  const customQuotes = loadCustomQuotes();
  const filteredQuotes = customQuotes.filter(q => q.id !== quoteId);
  
  if (saveCustomQuotes(filteredQuotes)) {
    updateAllQuotes();
    renderCustomQuotes();
    showFeedback('명언이 삭제되었습니다.', 'success');
    
    // 삭제된 명언이 현재 표시 중이면 새 명언 표시
    if (currentQuote && currentQuote.id === quoteId) {
      displayQuote(getRandomQuote());
    }
  }
}

/**
 * 커스텀 명언 목록 렌더링
 */
function renderCustomQuotes() {
  const customQuotes = loadCustomQuotes();
  elements.customQuotesList.innerHTML = '';
  
  if (customQuotes.length === 0) {
    elements.emptyListMessage.classList.remove('hidden');
    elements.customQuotesList.setAttribute('aria-label', '사용자 정의 명언 목록이 비어있습니다');
  } else {
    elements.emptyListMessage.classList.add('hidden');
    elements.customQuotesList.setAttribute('aria-label', `${customQuotes.length}개의 사용자 정의 명언`);
    
    customQuotes.forEach(quote => {
      const li = document.createElement('li');
      li.className = 'quote-item';
      li.setAttribute('role', 'listitem');
      
      li.innerHTML = `
        <div class="quote-item-content">
          <p class="quote-item-text">"${quote.text}"</p>
          <p class="quote-item-author">— ${quote.author}</p>
        </div>
        <button 
          class="btn btn-delete" 
          data-quote-id="${quote.id}"
          aria-label="${quote.author}의 명언 삭제"
          title="삭제">
          <span aria-hidden="true">🗑️</span>
          삭제
        </button>
      `;
      
      elements.customQuotesList.appendChild(li);
    });
    
    // 삭제 버튼 이벤트 리스너
    const deleteButtons = elements.customQuotesList.querySelectorAll('.btn-delete');
    deleteButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const quoteId = parseInt(e.currentTarget.dataset.quoteId);
        if (confirm('이 명언을 삭제하시겠습니까?')) {
          deleteCustomQuote(quoteId);
        }
      });
    });
  }
}

// ========================================
// 복사 & 공유 기능
// ========================================

/**
 * 클립보드에 복사
 */
async function copyToClipboard() {
  if (!currentQuote) {
    showFeedback('복사할 명언이 없습니다.', 'error');
    return;
  }
  
  const textToCopy = `"${currentQuote.text}" - ${currentQuote.author}`;
  
  try {
    // 최신 브라우저 API 사용
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(textToCopy);
      showFeedback('명언이 클립보드에 복사되었습니다! 📋', 'success');
    } else {
      // 구형 브라우저 대체 방법
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        showFeedback('명언이 클립보드에 복사되었습니다! 📋', 'success');
      } catch (err) {
        showFeedback('복사에 실패했습니다. 수동으로 복사해주세요.', 'error');
      }
      
      document.body.removeChild(textArea);
    }
  } catch (error) {
    console.error('복사 실패:', error);
    showFeedback('복사에 실패했습니다. 다시 시도해주세요.', 'error');
  }
}

/**
 * 웹 공유 API 또는 트위터 공유
 */
async function shareQuote() {
  if (!currentQuote) {
    showFeedback('공유할 명언이 없습니다.', 'error');
    return;
  }
  
  const shareText = `"${currentQuote.text}" - ${currentQuote.author}`;
  const shareUrl = window.location.href;
  
  // 웹 공유 API 지원 확인
  if (navigator.share) {
    try {
      await navigator.share({
        title: '오늘의 명언',
        text: shareText,
        url: shareUrl
      });
      showFeedback('명언이 공유되었습니다! 🎉', 'success');
    } catch (error) {
      // 사용자가 취소한 경우 무시
      if (error.name !== 'AbortError') {
        console.error('공유 실패:', error);
        fallbackToTwitterShare(shareText);
      }
    }
  } else {
    // 대체: 트위터 공유
    fallbackToTwitterShare(shareText);
  }
}

/**
 * 트위터 공유 대체 방법
 */
function fallbackToTwitterShare(text) {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(twitterUrl, '_blank', 'width=550,height=420');
  showFeedback('트위터 공유 창이 열렸습니다! 🐦', 'success');
}

// ========================================
// 테마 관리
// ========================================

/**
 * 현재 테마 가져오기
 */
function getCurrentTheme() {
  // localStorage에서 사용자 설정 확인
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  
  if (savedTheme) {
    return savedTheme;
  }
  
  // 시스템 설정 확인
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
}

/**
 * 테마 적용
 */
function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  
  // 접근성: 테마 변경 알림
  const themeText = theme === 'dark' ? '다크' : '라이트';
  elements.themeToggle.setAttribute('aria-label', `현재 ${themeText} 테마, 클릭하여 변경`);
}

/**
 * 테마 토글
 */
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme') || getCurrentTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  
  // 피드백
  const themeText = newTheme === 'dark' ? '다크 모드' : '라이트 모드';
  showFeedback(`${themeText}로 변경되었습니다! ${newTheme === 'dark' ? '🌙' : '☀️'}`, 'success');
}

// ========================================
// 이벤트 리스너
// ========================================

/**
 * 다음 명언 버튼
 */
elements.nextBtn.addEventListener('click', () => {
  const quote = getRandomQuote();
  displayQuote(quote);
});

// 키보드 접근성: Enter/Space
elements.nextBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    elements.nextBtn.click();
  }
});

/**
 * 복사 버튼
 */
elements.copyBtn.addEventListener('click', copyToClipboard);

/**
 * 공유 버튼
 */
elements.shareBtn.addEventListener('click', shareQuote);

/**
 * 테마 토글 버튼
 */
elements.themeToggle.addEventListener('click', toggleTheme);

// 키보드 접근성: Enter/Space
elements.themeToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleTheme();
  }
});

/**
 * 명언 추가 폼
 */
elements.addQuoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const text = elements.newQuoteText.value;
  const author = elements.newQuoteAuthor.value;
  
  if (addCustomQuote(text, author)) {
    // 폼 초기화
    elements.addQuoteForm.reset();
    elements.newQuoteText.focus();
  }
});

// ========================================
// 초기화
// ========================================

/**
 * 앱 초기화
 */
function init() {
  // 테마 초기화 (사용자 설정 또는 시스템 설정 적용)
  const theme = getCurrentTheme();
  applyTheme(theme);
  
  // localStorage에서 커스텀 명언 로드
  updateAllQuotes();
  
  // 초기 명언 표시
  const initialQuote = getRandomQuote();
  if (initialQuote) {
    currentQuote = initialQuote;
    elements.quoteText.textContent = initialQuote.text;
    elements.quoteAuthor.textContent = `— ${initialQuote.author}`;
  }
  
  // 커스텀 명언 목록 렌더링
  renderCustomQuotes();
  
  console.log('✨ 명언 앱이 준비되었습니다!');
  console.log(`📚 총 ${allQuotes.length}개의 명언을 사용할 수 있습니다.`);
  console.log(`🎨 현재 테마: ${theme}`);
}

// DOM이 준비되면 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// 접근성: 키보드 포커스 표시 개선
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

