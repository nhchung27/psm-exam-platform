const { useState, useEffect, useCallback, useMemo } = React;

// ─── helpers ────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadProgress() {
  try { return JSON.parse(localStorage.getItem('genai_progress') || '{}'); }
  catch { return {}; }
}

function saveProgress(p) {
  localStorage.setItem('genai_progress', JSON.stringify(p));
}

// ─── SVG icons ───────────────────────────────────────────────────────────────
const IconBook = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const IconCards = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
);
const IconQuiz = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);
const IconTrophy = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
);
const IconTarget = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconBack = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconX = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconWarning = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconBrain = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 2a2.5 2.5 0 0 1 5 0v.5A2.5 2.5 0 0 1 12 5a2.5 2.5 0 0 1-2.5-2.5V2z"/>
    <path d="M9 5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5"/>
    <path d="M12 5v14"/><path d="M7 10h10"/><path d="M7 14h10"/>
  </svg>
);

// ─── Chapter Card ────────────────────────────────────────────────────────────
function ChapterCard({ chapter, progress, onStudy, onFlashcards, onQuiz }) {
  const best    = progress[`quiz_ch${chapter.id}`];
  const pct     = best ? Math.round((best.score / best.total) * 100) : null;
  const totalQ  = chapter.questions.length;
  const totalKW = chapter.keywords.length;

  const btnBase = {
    padding: '9px 6px', borderRadius: '8px', fontSize: '11.5px', fontWeight: 600,
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '5px', whiteSpace: 'nowrap', transition: 'opacity .15s',
    fontFamily: 'inherit',
  };

  return (
    <div style={{
      background: 'var(--surface)',
      border: `1px solid ${chapter.color}22`,
      borderRadius: '16px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      height: '100%',
      transition: 'transform .2s, box-shadow .2s, border-color .2s',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,.4)`;
        e.currentTarget.style.borderColor = chapter.color + '55';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = chapter.color + '22';
      }}
    >
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
          background: chapter.color + '18', border: `1.5px solid ${chapter.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: '17px', fontWeight: 800, color: chapter.color, lineHeight: 1 }}>
            {chapter.id}
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '10px', color: chapter.color, fontWeight: 700, letterSpacing: '.08em', marginBottom: '2px' }}>
            CHƯƠNG {chapter.id}
          </div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', lineHeight: 1.35 }}>
            {chapter.title}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
            {chapter.subtitle}
          </div>
        </div>
      </div>

      {/* meta badges */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: 'rgba(96,165,250,.12)', color: '#60A5FA', border: '1px solid rgba(96,165,250,.18)' }}>
          {totalKW} từ khóa
        </span>
        <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: 'rgba(167,139,250,.12)', color: '#A78BFA', border: '1px solid rgba(167,139,250,.18)' }}>
          {totalQ} câu hỏi
        </span>
        <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: 'var(--surface-2)', color: 'var(--muted)' }}>
          {chapter.time} phút
        </span>
        <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: 'rgba(245,158,11,.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,.18)' }}>
          {chapter.weight}
        </span>
      </div>

      {/* best score bar */}
      {pct !== null && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--muted)', marginBottom: '4px' }}>
            <span>Kết quả tốt nhất</span>
            <span style={{ color: pct >= 70 ? 'var(--success)' : 'var(--accent)', fontWeight: 700 }}>
              {pct}% ({best.score}/{best.total})
            </span>
          </div>
          <div style={{ height: '4px', background: 'var(--surface-2)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${pct}%`, background: pct >= 70 ? 'var(--success)' : 'var(--accent)', borderRadius: '4px', transition: 'width .4s' }} />
          </div>
        </div>
      )}

      <div style={{ flex: 1 }} />

      {/* actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
        <button onClick={() => onStudy(chapter.id)} style={{
          ...btnBase, border: '1px solid var(--border)',
          background: 'var(--surface-2)', color: 'var(--text)',
        }}>
          <IconBook /> Học
        </button>
        <button onClick={() => onFlashcards(chapter.id)} style={{
          ...btnBase, border: `1px solid ${chapter.color}33`,
          background: chapter.color + '14', color: chapter.color,
        }}>
          <IconCards /> Thẻ
        </button>
        <button onClick={() => onQuiz(chapter.id)} style={{
          ...btnBase, border: 'none',
          background: chapter.color, color: 'white',
        }}>
          <IconQuiz /> Làm bài
        </button>
      </div>
    </div>
  );
}

// ─── Home View ────────────────────────────────────────────────────────────────
function HomeView({ progress, onStudy, onFlashcards, onQuiz, onGlobalQuiz }) {
  const chapters = GENAI_DATA.chapters;
  const totalQ   = chapters.reduce((s, c) => s + c.questions.length, 0);
  const totalKW  = chapters.reduce((s, c) => s + c.keywords.length, 0);

  const doneQuizzes = chapters.filter(c => progress[`quiz_ch${c.id}`]).length;
  const avgScore = (() => {
    const scores = chapters.map(c => progress[`quiz_ch${c.id}`]).filter(Boolean);
    if (!scores.length) return null;
    const avg = scores.reduce((s, p) => s + p.score / p.total, 0) / scores.length;
    return Math.round(avg * 100);
  })();

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 16px 60px' }}>
      {/* hero */}
      <div style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #6D28D9 100%)',
        borderRadius: '20px', padding: '32px 28px', marginBottom: '32px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* decorative circles */}
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,.06)' }} />
        <div style={{ position: 'absolute', bottom: '-50px', right: '80px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,.04)' }} />
        <div style={{ position: 'absolute', top: '20px', right: '120px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,.04)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,.7)', letterSpacing: '.1em', marginBottom: '8px' }}>
            ISTQB SPECIALIST LEVEL · CT-GenAI v1.1
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.2 }}>
            Testing with Generative AI
          </h1>
          <p style={{ color: 'rgba(255,255,255,.8)', margin: '8px 0 20px', fontSize: '14px' }}>
            Ôn tập luyện thi CT-GenAI — 5 chương, {totalQ} câu hỏi, {totalKW} từ khóa
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { label: 'Chương', value: '5' },
              { label: 'Câu hỏi', value: totalQ },
              { label: 'Từ khóa', value: totalKW },
              { label: 'Thời lượng', value: '815ph' },
              ...(avgScore !== null ? [{ label: 'Avg Score', value: `${avgScore}%` }] : []),
            ].map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,.12)', borderRadius: '10px', padding: '8px 14px' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'white' }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,.7)', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* global quiz btn */}
      <button onClick={onGlobalQuiz} style={{
        width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
        background: 'linear-gradient(135deg, #F59E0B, #D97706)', color: 'white',
        fontSize: '15px', fontWeight: 700, cursor: 'pointer', marginBottom: '28px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        boxShadow: '0 4px 14px rgba(245,158,11,.35)',
        transition: 'transform .15s, box-shadow .15s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(245,158,11,.45)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px rgba(245,158,11,.35)'; }}
      >
        <IconTarget /> Thi thử tổng hợp — Tất cả {totalQ} câu hỏi
      </button>

      {/* progress summary */}
      {doneQuizzes > 0 && (
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px',
          padding: '14px 18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <span style={{ color: '#6366F1' }}><IconTrophy /></span>
          <span style={{ fontSize: '14px', color: 'var(--muted)' }}>
            Đã hoàn thành quiz: <strong style={{ color: 'var(--text)' }}>{doneQuizzes}/5 chương</strong>
            {avgScore !== null && <> — điểm trung bình <strong style={{ color: avgScore >= 70 ? 'var(--success)' : 'var(--accent)' }}>{avgScore}%</strong></>}
          </span>
        </div>
      )}

      {/* study tools row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px', marginBottom: '28px' }}>
        {[
          {
            label: 'Ôn tập kiến thức', sub: '5 chương chi tiết',
            color: '#6366F1', bg: 'rgba(99,102,241,.1)', border: 'rgba(99,102,241,.22)',
            href: '../ISTQB Gen-AI/GenAI-OnTapKienThuc/00-README.md',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            ),
          },
          {
            label: 'Sample Exam A', sub: '40 câu giải thích',
            color: '#EC4899', bg: 'rgba(236,72,153,.1)', border: 'rgba(236,72,153,.22)',
            href: '../ISTQB Gen-AI/CT-GenAI-Sample-Exam-A-Giai-Thich.md',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            ),
          },
          {
            label: 'Tổng hợp kiến thức', sub: 'CT-GenAI v1.1',
            color: '#06B6D4', bg: 'rgba(6,182,212,.1)', border: 'rgba(6,182,212,.22)',
            href: '../ISTQB Gen-AI/CT-GenAI-Tong-Hop-Kien-Thuc.md',
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            ),
          },
        ].map((t, i) => (
          <div key={i}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '12px 14px', borderRadius: '12px', textDecoration: 'none',
              background: t.bg, border: `1px solid ${t.border}`,
              transition: 'transform .15s, box-shadow .15s', cursor: 'default',
            }}
          >
            <span style={{ color: t.color, flexShrink: 0, display: 'flex' }}>{t.icon}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: t.color, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.label}</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{t.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* chapter grid */}
      <h2 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '.06em', marginBottom: '16px' }}>
        5 CHƯƠNG HỌC
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {chapters.map(ch => (
          <ChapterCard
            key={ch.id}
            chapter={ch}
            progress={progress}
            onStudy={onStudy}
            onFlashcards={onFlashcards}
            onQuiz={onQuiz}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Study View ───────────────────────────────────────────────────────────────
function StudyView({ chapterId, onBack }) {
  const chapter = GENAI_DATA.chapters.find(c => c.id === chapterId);
  const [tab, setTab] = useState('keywords');
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (i) => setExpanded(p => ({ ...p, [i]: !p[i] }));

  const tabs = [
    { key: 'keywords', label: `Từ khóa (${chapter.keywords.length})` },
    { key: 'traps',    label: `Bẫy thi (${chapter.traps.length})` },
  ];

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 16px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button onClick={onBack} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px 12px', color: 'var(--text)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <IconBack /> Trở về
        </button>
        <div>
          <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>CHƯƠNG {chapter.id}</div>
          <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)' }}>{chapter.title}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '4px', background: 'var(--surface)', borderRadius: '10px', padding: '4px', marginBottom: '20px', border: '1px solid var(--border)' }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{
            flex: 1, padding: '8px 12px', borderRadius: '8px', border: 'none',
            background: tab === t.key ? chapter.color : 'transparent',
            color: tab === t.key ? 'white' : 'var(--muted)',
            fontWeight: 600, fontSize: '13px', cursor: 'pointer', transition: 'all .15s',
          }}>{t.label}</button>
        ))}
      </div>

      {tab === 'keywords' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {chapter.keywords.map((kw, i) => (
            <div key={i} style={{
              background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px',
              overflow: 'hidden', transition: 'border-color .15s',
            }}>
              <button onClick={() => toggleExpand(`kw_${i}`)} style={{
                width: '100%', padding: '14px 16px', background: 'none', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                cursor: 'pointer', textAlign: 'left',
              }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)' }}>{kw.term}</span>
                <span style={{ fontSize: '12px', color: chapter.color, fontWeight: 700, flexShrink: 0, marginLeft: '8px' }}>
                  {expanded[`kw_${i}`] ? '▲ Ẩn' : '▼ Xem'}
                </span>
              </button>
              {expanded[`kw_${i}`] && (
                <div style={{ padding: '0 16px 14px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ color: 'var(--muted)', fontSize: '13px', margin: '10px 0 0', lineHeight: 1.6 }}>{kw.definition}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'traps' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {chapter.traps.map((trap, i) => (
            <div key={i} style={{
              background: 'var(--surface)', border: '1px solid rgba(245,158,11,.3)', borderRadius: '12px', padding: '16px',
            }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                <span style={{ color: '#F59E0B', flexShrink: 0 }}><IconWarning /></span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)' }}>{trap.title}</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '13px', margin: 0, lineHeight: 1.6, paddingLeft: '26px' }}>{trap.correct}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Flashcards View ──────────────────────────────────────────────────────────
function FlashcardsView({ chapterId, onBack }) {
  const chapter  = GENAI_DATA.chapters.find(c => c.id === chapterId);
  const cards    = useMemo(() => shuffle(chapter.keywords), [chapterId]);
  const [idx, setIdx]     = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState({});

  const card   = cards[idx];
  const total  = cards.length;
  const knownN = Object.values(known).filter(Boolean).length;

  const next = () => { setFlipped(false); setTimeout(() => setIdx(i => (i + 1) % total), 100); };
  const prev = () => { setFlipped(false); setTimeout(() => setIdx(i => (i - 1 + total) % total), 100); };
  const markKnown = () => { setKnown(p => ({ ...p, [idx]: true })); next(); };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 16px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <button onClick={onBack} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px 12px', color: 'var(--text)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <IconBack /> Trở về
        </button>
        <div>
          <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>FLASHCARD</div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>{chapter.title}</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--muted)', marginBottom: '6px' }}>
        <span>{idx + 1} / {total}</span>
        <span style={{ color: 'var(--success)' }}>Đã thuộc: {knownN}/{total}</span>
      </div>
      <div style={{ height: '4px', background: 'var(--surface-2)', borderRadius: '4px', marginBottom: '20px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${((idx + 1) / total) * 100}%`, background: chapter.color, borderRadius: '4px', transition: 'width .3s' }} />
      </div>

      <div
        onClick={() => setFlipped(f => !f)}
        style={{
          background: flipped ? chapter.color + '22' : 'var(--surface)',
          border: `2px solid ${flipped ? chapter.color : 'var(--border)'}`,
          borderRadius: '20px', padding: '40px 28px', minHeight: '200px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'all .25s', textAlign: 'center',
          boxShadow: flipped ? `0 0 30px ${chapter.color}30` : 'none',
        }}
      >
        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '.1em', marginBottom: '16px' }}>
          {flipped ? 'ĐỊNH NGHĨA' : 'THUẬT NGỮ'}
        </div>
        <div style={{
          fontSize: flipped ? '14px' : '20px',
          fontWeight: flipped ? 400 : 700,
          color: flipped ? 'var(--muted)' : 'var(--text)',
          lineHeight: 1.5,
        }}>
          {flipped ? card.definition : card.term}
        </div>
        {!flipped && (
          <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '16px' }}>
            Nhấn để xem định nghĩa
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={prev} style={{ flex: 1, padding: '12px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--surface-2)', color: 'var(--text)', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}>
          ← Trước
        </button>
        {flipped && (
          <button onClick={markKnown} style={{ flex: 1, padding: '12px', borderRadius: '10px', border: 'none', background: 'var(--success)', color: 'white', fontWeight: 700, cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <IconCheck /> Đã thuộc
          </button>
        )}
        <button onClick={next} style={{ flex: 1, padding: '12px', borderRadius: '10px', border: 'none', background: chapter.color, color: 'white', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}>
          Tiếp →
        </button>
      </div>
    </div>
  );
}

// ─── Quiz View ────────────────────────────────────────────────────────────────
function QuizView({ chapterId, onBack, onComplete }) {
  const questions = useMemo(() => {
    if (chapterId === 'all') {
      return shuffle(GENAI_DATA.chapters.flatMap(c => c.questions));
    }
    return shuffle(GENAI_DATA.chapters.find(c => c.id === chapterId).questions);
  }, [chapterId]);

  const [qi, setQi]             = useState(0);
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [answers, setAnswers]   = useState([]);

  const q         = questions[qi];
  const isLast    = qi === questions.length - 1;
  const chapter   = chapterId === 'all' ? null : GENAI_DATA.chapters.find(c => c.id === chapterId);
  const accentColor = chapter ? chapter.color : '#6366F1';

  const confirm = () => {
    if (!selected) return;
    setConfirmed(true);
    setAnswers(prev => [...prev, { id: q.id, correct: selected === q.correctAnswer }]);
  };

  const next = () => {
    if (isLast) {
      // answers already contains the last entry (added by confirm()); don't re-add it
      const score = answers.filter(a => a.correct).length;
      onComplete(chapterId, score, questions.length);
    } else {
      setQi(i => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  };

  const choiceStyle = (key) => {
    const base = {
      width: '100%', padding: '14px 16px', borderRadius: '10px', border: '1.5px solid',
      background: 'var(--surface)', cursor: confirmed ? 'default' : 'pointer',
      display: 'flex', alignItems: 'flex-start', gap: '10px', textAlign: 'left',
      transition: 'all .15s', fontSize: '14px', fontWeight: 500,
    };
    if (!confirmed) {
      if (selected === key) return { ...base, borderColor: accentColor, background: accentColor + '18', color: 'var(--text)' };
      return { ...base, borderColor: 'var(--border)', color: 'var(--muted)' };
    }
    if (key === q.correctAnswer) return { ...base, borderColor: 'var(--success)', background: 'rgba(16,185,129,.12)', color: '#6EE7B7' };
    if (key === selected && key !== q.correctAnswer) return { ...base, borderColor: '#EF4444', background: 'rgba(239,68,68,.12)', color: '#FCA5A5' };
    return { ...base, borderColor: 'var(--border)', color: 'var(--muted)', opacity: .5 };
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 16px 60px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button onClick={onBack} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px 12px', color: 'var(--text)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <IconBack /> Thoát
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>
            {chapterId === 'all' ? 'THI THỬ TỔNG HỢP CT-GenAI' : `CHƯƠNG ${chapterId}`}
          </div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>
            Câu {qi + 1} / {questions.length}
          </div>
        </div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: accentColor, background: accentColor + '18', padding: '4px 10px', borderRadius: '8px' }}>
          {answers.filter(a => a.correct).length}/{answers.length}
        </div>
      </div>

      <div style={{ height: '4px', background: 'var(--surface-2)', borderRadius: '4px', marginBottom: '24px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${((qi) / questions.length) * 100}%`, background: accentColor, transition: 'width .3s' }} />
      </div>

      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', marginBottom: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '.08em', marginBottom: '12px' }}>CÂU HỎI {qi + 1}</div>
        <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', margin: 0, lineHeight: 1.6 }}>{q.text}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        {q.choices.map(ch => (
          <button key={ch.key} onClick={() => !confirmed && setSelected(ch.key)} style={choiceStyle(ch.key)}>
            <span style={{
              width: '24px', height: '24px', borderRadius: '6px', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '12px',
              background: confirmed && ch.key === q.correctAnswer ? 'var(--success)'
                : confirmed && ch.key === selected && ch.key !== q.correctAnswer ? '#EF4444'
                : selected === ch.key && !confirmed ? accentColor
                : 'var(--surface-2)',
              color: (confirmed && (ch.key === q.correctAnswer || (ch.key === selected && ch.key !== q.correctAnswer))) || (selected === ch.key && !confirmed) ? 'white' : 'var(--muted)',
            }}>{ch.key}</span>
            <span>{ch.text}</span>
          </button>
        ))}
      </div>

      {confirmed && (
        <div style={{
          background: selected === q.correctAnswer ? 'rgba(16,185,129,.1)' : 'rgba(239,68,68,.08)',
          border: `1px solid ${selected === q.correctAnswer ? 'rgba(16,185,129,.3)' : 'rgba(239,68,68,.25)'}`,
          borderRadius: '12px', padding: '16px', marginBottom: '16px',
        }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            {selected === q.correctAnswer ? <IconCheck /> : <IconX />}
            <span style={{ fontWeight: 700, fontSize: '14px', color: selected === q.correctAnswer ? '#6EE7B7' : '#FCA5A5' }}>
              {selected === q.correctAnswer ? 'Chính xác!' : `Sai — Đáp án đúng: ${q.correctAnswer}`}
            </span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>{q.explanation}</p>
        </div>
      )}

      {!confirmed ? (
        <button onClick={confirm} disabled={!selected} style={{
          width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
          background: selected ? accentColor : 'var(--surface-2)',
          color: selected ? 'white' : 'var(--muted)',
          fontWeight: 700, fontSize: '15px', cursor: selected ? 'pointer' : 'not-allowed', transition: 'all .15s',
        }}>Xác nhận</button>
      ) : (
        <button onClick={next} style={{
          width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
          background: accentColor, color: 'white', fontWeight: 700, fontSize: '15px', cursor: 'pointer',
        }}>{isLast ? 'Xem kết quả →' : 'Câu tiếp theo →'}</button>
      )}
    </div>
  );
}

// ─── Results View ─────────────────────────────────────────────────────────────
function ResultsView({ chapterId, score, total, onRetry, onHome }) {
  const pct = Math.round((score / total) * 100);
  const pass = pct >= 70;
  const chapter = chapterId !== 'all' ? GENAI_DATA.chapters.find(c => c.id === chapterId) : null;
  const color   = chapter ? chapter.color : '#6366F1';

  const getMessage = () => {
    if (pct >= 90) return { icon: '🎉', text: 'Xuất sắc! Bạn đã nắm rất chắc kiến thức chương này.' };
    if (pct >= 70) return { icon: '✅', text: 'Tốt! Bạn đã hiểu phần lớn nội dung. Hãy ôn lại những câu sai.' };
    if (pct >= 50) return { icon: '📚', text: 'Cần cải thiện thêm. Hãy đọc lại lý thuyết và làm lại.' };
    return { icon: '💪', text: 'Hãy ôn lại từ đầu. Đừng nản lòng — học lại và thử lại!' };
  };
  const msg = getMessage();

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', padding: '40px 16px 60px', textAlign: 'center' }}>
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          width: '140px', height: '140px', borderRadius: '50%', margin: '0 auto 16px',
          background: `conic-gradient(${pass ? '#10B981' : '#F59E0B'} ${pct * 3.6}deg, var(--surface-2) 0deg)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
        }}>
          <div style={{
            width: '110px', height: '110px', borderRadius: '50%', background: 'var(--bg)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text)' }}>{pct}%</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{score}/{total}</div>
          </div>
        </div>

        <div style={{ fontSize: '32px', marginBottom: '8px' }}>{msg.icon}</div>
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: pass ? '#6EE7B7' : 'var(--accent)', margin: '0 0 8px' }}>
          {pass ? 'Đạt!' : 'Chưa đạt'}
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '14px', margin: 0 }}>{msg.text}</p>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
        {[
          { label: 'Đúng', value: score, color: '#10B981' },
          { label: 'Sai', value: total - score, color: '#EF4444' },
          { label: 'Tổng', value: total, color: color },
        ].map((s, i) => (
          <div key={i} style={{ flex: 1, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '14px 8px' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={onRetry} style={{ padding: '14px', borderRadius: '12px', border: 'none', background: color, color: 'white', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
          Làm lại
        </button>
        <button onClick={onHome} style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--surface-2)', color: 'var(--text)', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
          Về trang chủ
        </button>
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
function App() {
  const [view, setView]         = useState('home');
  const [chapterId, setChapterId] = useState(null);
  const [quizResult, setQuizResult] = useState(null);
  const [progress, setProgress] = useState(loadProgress);

  const updateProgress = useCallback((newProgress) => {
    setProgress(newProgress);
    saveProgress(newProgress);
  }, []);

  const goHome        = () => { setView('home'); setChapterId(null); setQuizResult(null); };
  const goStudy       = (id) => { setChapterId(id); setView('study'); };
  const goFlashcards  = (id) => { setChapterId(id); setView('flashcards'); };
  const goQuiz        = (id) => { setChapterId(id); setView('quiz'); setQuizResult(null); };
  const goGlobalQuiz  = () => { setChapterId('all'); setView('quiz'); setQuizResult(null); };

  const handleQuizComplete = useCallback((cId, score, total) => {
    if (cId !== 'all') {
      const key  = `quiz_ch${cId}`;
      const prev = progress[key];
      if (!prev || score > prev.score) {
        updateProgress({ ...progress, [key]: { score, total, date: new Date().toISOString() } });
      }
    }
    setQuizResult({ chapterId: cId, score, total });
    setView('results');
  }, [progress, updateProgress]);

  const handleRetryQuiz = () => {
    const id = quizResult.chapterId;
    setQuizResult(null);
    setChapterId(id);
    setView('quiz');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      {/* top nav */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(15,23,42,.9)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)', padding: '12px 20px',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <button onClick={goHome} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <IconBrain />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#6366F1', letterSpacing: '.06em' }}>CT-GenAI</div>
            <div style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 500 }}>v1.1 — Ôn luyện thi</div>
          </div>
        </button>

        <div style={{ flex: 1 }} />

        <a href="../index.html" style={{
          fontSize: '12px', color: 'var(--muted)', textDecoration: 'none', fontWeight: 600,
          padding: '6px 10px', borderRadius: '6px', background: 'var(--surface-2)',
          border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          ← Trang chủ
        </a>
      </header>

      <main style={{ padding: '32px 16px 0' }}>
        {view === 'home' && (
          <HomeView
            progress={progress}
            onStudy={goStudy}
            onFlashcards={goFlashcards}
            onQuiz={goQuiz}
            onGlobalQuiz={goGlobalQuiz}
          />
        )}
        {view === 'study' && (
          <StudyView chapterId={chapterId} onBack={goHome} />
        )}
        {view === 'flashcards' && (
          <FlashcardsView chapterId={chapterId} onBack={goHome} />
        )}
        {view === 'quiz' && (
          <QuizView chapterId={chapterId} onBack={goHome} onComplete={handleQuizComplete} />
        )}
        {view === 'results' && quizResult && (
          <ResultsView
            chapterId={quizResult.chapterId}
            score={quizResult.score}
            total={quizResult.total}
            onRetry={handleRetryQuiz}
            onHome={goHome}
          />
        )}
      </main>
    </div>
  );
}

// ─── Mount ────────────────────────────────────────────────────────────────────
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
