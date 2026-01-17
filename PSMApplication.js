const { useState, useEffect, useMemo } = React;

function PSMExamPlatform() {
  const [view, setView] = useState('dashboard');
  const [currentExam, setCurrentExam] = useState(null);
  const [results, setResults] = useState({});
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [showExp, setShowExp] = useState({});
  const [shuffled, setShuffled] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState({});

  useEffect(() => {
    const savedNotes = localStorage.getItem('psm-notes');
    const savedResults = localStorage.getItem('psm-results');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('psm-notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('psm-results', JSON.stringify(results));
  }, [results]);

  const saveResults = (newResults) => {
    setResults(newResults);
  };

  const startExam = (exam) => {
    if (!exam.questions) return;
    setShuffled([...exam.questions].sort(() => Math.random() - 0.5));
    setCurrentExam(exam);
    setAnswers({});
    setSubmitted(false);
    setShowExp({});
    setCurrentQ(0);
    setView('exam');
  };

  const handleSelect = (qId, choice) => {
    if (submitted) return;
    const q = shuffled.find(x => x.id === qId);
    if (q.type === 'single') setAnswers(p => ({ ...p, [qId]: [choice] }));
    else {
      const cur = answers[qId] || [];
      setAnswers(p => ({ ...p, [qId]: cur.includes(choice) ? cur.filter(c => c !== choice) : [...cur, choice] }));
    }
  };

  const handleNoteChange = (qId, text) => {
    setNotes(p => ({ ...p, [qId]: text }));
  };

  const isCorrect = (qId) => {
    const q = shuffled.find(x => x.id === qId);
    const ans = answers[qId] || [];
    return ans.length === q.correctAnswers.length && q.correctAnswers.every(a => ans.includes(a));
  };

  const submitExam = () => {
    setSubmitted(true);
    const score = shuffled.filter(q => isCorrect(q.id)).length;
    const pct = Math.round(score / shuffled.length * 100);
    const newResults = { ...results };
    if (!newResults[currentExam.id]) newResults[currentExam.id] = { attempts: [], best: 0 };
    newResults[currentExam.id].attempts.push({ score, total: shuffled.length, pct, date: new Date().toISOString() });
    if (pct > newResults[currentExam.id].best) newResults[currentExam.id].best = pct;
    saveResults(newResults);
  };

  const getTotalStats = () => {
    const allExams = [...examStructure.PSM1, ...examStructure.PSM2];
    const available = allExams.filter(e => e.questions);
    const completed = Object.keys(results).length;
    const totalAttempts = Object.values(results).reduce((s, r) => s + r.attempts.length, 0);
    const avgBest = Object.values(results).length > 0 ? Math.round(Object.values(results).reduce((s, r) => s + r.best, 0) / Object.values(results).length) : 0;
    return { available: available.length, total: allExams.length, completed, totalAttempts, avgBest };
  };

  const getAllAttempts = () => {
    const attempts = [];
    Object.keys(results).forEach(examId => {
      const exam = [...examStructure.PSM1, ...examStructure.PSM2].find(e => e.id === examId);
      if (exam && results[examId].attempts) {
        results[examId].attempts.forEach(attempt => {
          attempts.push({
            examId,
            examName: exam.name,
            level: examId.startsWith('psm1') ? 'PSM I' : 'PSM II',
            ...attempt
          });
        });
      }
    });
    return attempts.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  // History Table Component - Optimized
  const HistoryTable = () => {
    const attempts = useMemo(() => getAllAttempts(), [results]);

    if (attempts.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p>Chưa có lịch sử thi</p>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Ngày thi</th>
              <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Bài thi</th>
              <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Level</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold text-sm">Điểm</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold text-sm">%</th>
              <th className="text-center py-3 px-4 text-gray-400 font-semibold text-sm">Kết quả</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((attempt, i) => (
              <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                <td className="py-3 px-4 text-gray-300 text-sm">
                  {new Date(attempt.date).toLocaleString('vi-VN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </td>
                <td className="py-3 px-4 text-gray-100 font-medium text-sm">{attempt.examName}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-1 rounded-lg text-xs font-bold ${
                    attempt.level === 'PSM I' ? 'bg-blue-900/50 text-blue-300' : 'bg-orange-900/50 text-orange-300'
                  }`}>
                    {attempt.level}
                  </span>
                </td>
                <td className="py-3 px-4 text-center text-gray-300 font-medium text-sm">
                  {attempt.score}/{attempt.total}
                </td>
                <td className="py-3 px-4 text-center">
                  <span className={`font-bold text-sm ${
                    attempt.pct >= 85 ? 'text-green-400' : attempt.pct >= 70 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {attempt.pct}%
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  {attempt.pct >= 85 ? (
                    <span className="inline-flex items-center gap-1 text-green-400 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Đạt
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-400 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Chưa đạt
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Analytics Component - Optimized
  const Analytics = () => {
    const attempts = useMemo(() => getAllAttempts(), [results]);

    if (attempts.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <p>Chưa có dữ liệu để phân tích</p>
        </div>
      );
    }

    // Calculate statistics by level
    const psm1Attempts = attempts.filter(a => a.level === 'PSM I');
    const psm2Attempts = attempts.filter(a => a.level === 'PSM II');

    const getAvgScore = (arr) => arr.length > 0 ? Math.round(arr.reduce((sum, a) => sum + a.pct, 0) / arr.length) : 0;
    const getPassRate = (arr) => arr.length > 0 ? Math.round(arr.filter(a => a.pct >= 85).length / arr.length * 100) : 0;
    const getBestScore = (arr) => arr.length > 0 ? Math.max(...arr.map(a => a.pct)) : 0;
    const getRecentTrend = (arr) => {
      if (arr.length < 3) return 'neutral';
      const recent = arr.slice(0, 3);
      const avgRecent = recent.reduce((sum, a) => sum + a.pct, 0) / recent.length;
      const older = arr.slice(3, 6);
      if (older.length === 0) return 'neutral';
      const avgOlder = older.reduce((sum, a) => sum + a.pct, 0) / older.length;
      if (avgRecent > avgOlder + 5) return 'improving';
      if (avgRecent < avgOlder - 5) return 'declining';
      return 'stable';
    };

    const psm1Stats = {
      avg: getAvgScore(psm1Attempts),
      passRate: getPassRate(psm1Attempts),
      best: getBestScore(psm1Attempts),
      trend: getRecentTrend(psm1Attempts),
      attempts: psm1Attempts.length
    };

    const psm2Stats = {
      avg: getAvgScore(psm2Attempts),
      passRate: getPassRate(psm2Attempts),
      best: getBestScore(psm2Attempts),
      trend: getRecentTrend(psm2Attempts),
      attempts: psm2Attempts.length
    };

    const getTrendIcon = (trend) => {
      if (trend === 'improving') {
        return (
          <div className="flex items-center gap-1 text-green-400 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Cải thiện
          </div>
        );
      }
      if (trend === 'declining') {
        return (
          <div className="flex items-center gap-1 text-red-400 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
            Giảm
          </div>
        );
      }
      return (
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
          </svg>
          Ổn định
        </div>
      );
    };

    const StatCard = ({ title, stats, color }) => (
      <div className={`bg-gray-800/50 rounded-xl p-5 border ${color}`}>
        <h4 className="font-bold text-lg text-gray-100 mb-4">{title}</h4>
        {stats.attempts === 0 ? (
          <p className="text-gray-500 text-sm">Chưa có dữ liệu</p>
        ) : (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Điểm trung bình:</span>
              <span className="font-bold text-gray-100">{stats.avg}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Điểm cao nhất:</span>
              <span className="font-bold text-gray-100">{stats.best}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Tỷ lệ đạt (≥85%):</span>
              <span className="font-bold text-gray-100">{stats.passRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Xu hướng:</span>
              {getTrendIcon(stats.trend)}
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-700">
              <span className="text-gray-400 text-sm">Số lần thi:</span>
              <span className="font-bold text-cyan-400">{stats.attempts}</span>
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard title="PSM I Analysis" stats={psm1Stats} color="border-blue-500/30" />
        <StatCard title="PSM II Analysis" stats={psm2Stats} color="border-orange-500/30" />
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-700 border-t-cyan-500 mb-4"></div>
          <div className="text-xl font-semibold text-gray-100">Đang tải...</div>
        </div>
      </div>
    );
  }

  if (view === 'dashboard') {
    const stats = getTotalStats();
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-lg mb-4">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-3">PSM Exam Dashboard</h1>
            <p className="text-base md:text-lg text-gray-400">Professional Scrum Master Certification Prep</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer hover:border-cyan-500">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-3 md:mb-4 mx-auto shadow-md">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-100 mb-1 text-center">
                {stats.available}<span className="text-lg md:text-xl text-gray-500">/{stats.total}</span>
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-400 text-center">Bộ đề có sẵn</div>
            </div>

            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer hover:border-green-500">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-3 md:mb-4 mx-auto shadow-md">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-100 mb-1 text-center">{stats.completed}</div>
              <div className="text-xs md:text-sm font-semibold text-gray-400 text-center">Đã hoàn thành</div>
            </div>

            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer hover:border-orange-500">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-3 md:mb-4 mx-auto shadow-md">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-100 mb-1 text-center">{stats.totalAttempts}</div>
              <div className="text-xs md:text-sm font-semibold text-gray-400 text-center">Tổng lượt thi</div>
            </div>

            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer hover:border-yellow-500">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl mb-3 md:mb-4 mx-auto shadow-md">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-100 mb-1 text-center">{stats.avgBest}%</div>
              <div className="text-xs md:text-sm font-semibold text-gray-400 text-center">Điểm TB cao nhất</div>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700 mb-8">
            <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              Phân tích chi tiết
            </h3>
            <Analytics />
          </div>

          {/* History Table */}
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700 mb-8">
            <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lịch sử làm bài
            </h3>
            <HistoryTable />
          </div>

          {/* Exam Lists */}
          {['PSM1', 'PSM2'].map(level => (
            <div key={level} className="mb-8">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className={`${level === 'PSM1' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'} px-4 py-2 rounded-2xl shadow-lg`}>
                  <h2 className="text-base md:text-lg font-bold text-white">{level.replace('PSM', 'PSM ')}</h2>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-100">Professional Scrum Master {level.replace('PSM', '')}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {examStructure[level].map(exam => {
                  const res = results[exam.id];
                  const hasData = !!exam.questions;
                  return (
                    <div
                      key={exam.id}
                      className={`relative rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg border transition-all duration-200 ${
                        hasData
                          ? 'bg-gray-800/90 backdrop-blur-sm border-gray-700 hover:shadow-2xl hover:scale-105 hover:border-cyan-500 cursor-pointer'
                          : 'bg-gray-900/40 border-gray-800 opacity-60'
                      }`}
                      onClick={() => hasData && startExam(exam)}
                      role={hasData ? "button" : undefined}
                      tabIndex={hasData ? 0 : undefined}
                      onKeyPress={(e) => hasData && e.key === 'Enter' && startExam(exam)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-base md:text-lg text-gray-100">{exam.name}</h4>
                        {res && (
                          <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-xl shadow-md">
                            {res.best}%
                          </span>
                        )}
                      </div>
                      {hasData ? (
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                          <span className="bg-gray-700 px-2 py-1 rounded-lg font-semibold text-gray-300">{exam.questions.length} câu</span>
                          <span>•</span>
                          <span className="font-medium">{res ? `${res.attempts.length} lượt` : 'Chưa làm'}</span>
                        </div>
                      ) : (
                        <div className="text-xs md:text-sm text-gray-600 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>Chưa có dữ liệu</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Exam View
  const q = shuffled[currentQ];
  const score = submitted ? shuffled.filter(x => isCorrect(x.id)).length : 0;
  const answeredCount = Object.keys(answers).filter(k => answers[k]?.length > 0).length;
  const progressPercentage = submitted ? (score / shuffled.length * 100) : (answeredCount / shuffled.length * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 pb-8">
      {/* Fixed Header - Compact Design */}
      <div className="sticky top-0 z-50 bg-gray-800/95 backdrop-blur-md shadow-xl border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Back Button & Title */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <button
                onClick={() => setView('dashboard')}
                className="flex-shrink-0 p-2 text-cyan-400 hover:text-cyan-300 hover:bg-gray-700 rounded-lg transition-all"
                aria-label="Quay về Dashboard"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-sm text-gray-100 truncate">{currentExam.name}</h2>
                <p className="text-xs text-gray-400">
                  {submitted ? (
                    <span>Điểm: {score}/{shuffled.length} ({Math.round(score/shuffled.length*100)}%)</span>
                  ) : (
                    `${answeredCount}/${shuffled.length} câu`
                  )}
                </p>
              </div>
            </div>

            {/* Right: Action Button */}
            {!submitted ? (
              <button
                onClick={submitExam}
                className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
                aria-label="Nộp bài thi"
              >
                Nộp bài
              </button>
            ) : (
              <button
                onClick={() => setView('dashboard')}
                className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
                aria-label="Xem kết quả"
              >
                Kết quả
              </button>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                submitted
                  ? (score/shuffled.length >= 0.85 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-red-600')
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600'
              }`}
              style={{ width: `${progressPercentage}%` }}
              role="progressbar"
              aria-valuenow={progressPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6">
        {/* Result Summary */}
        {submitted && (
          <div className={`rounded-2xl p-6 mb-6 text-center shadow-xl border ${
            score/shuffled.length >= 0.85
              ? 'bg-green-900/30 border-green-600'
              : 'bg-orange-900/30 border-orange-600'
          }`}>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-2xl shadow-lg">
              {score/shuffled.length >= 0.85 ? (
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )}
            </div>
            <p className="font-bold text-2xl text-gray-100 mb-2">
              {score}/{shuffled.length} <span className="text-gray-400">({Math.round(score/shuffled.length*100)}%)</span>
            </p>
            <p className="text-sm font-semibold text-gray-300">
              {score/shuffled.length >= 0.85 ? 'Tuyệt vời! Bạn đã sẵn sàng! 🎉' : 'Cần ôn tập thêm. Mục tiêu: 85% 📚'}
            </p>
          </div>
        )}

        {/* Question Card */}
        <div className={`bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border transition-all ${
          submitted
            ? (isCorrect(q.id) ? 'border-green-500' : 'border-red-500')
            : 'border-gray-700'
        }`}>
          {/* Question Header */}
          <div className="flex justify-between items-start flex-wrap gap-3 mb-5">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-md">
              Câu {currentQ + 1}/{shuffled.length}
            </span>
            <span className={`text-xs font-bold px-3 py-2 rounded-xl shadow-md ${
              q.type === 'single'
                ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
            }`}>
              {q.type === 'single' ? 'Chọn 1 đáp án' : `Chọn ${q.correctAnswers.length} đáp án`}
            </span>
          </div>

          {/* Question Text */}
          <p className="text-gray-100 font-semibold text-base mb-5 leading-relaxed">{q.question}</p>

          {/* Answer Choices */}
          <div className="space-y-3">
            {q.choices.map(c => {
              const sel = (answers[q.id] || []).includes(c.key);
              const correct = q.correctAnswers.includes(c.key);
              let bg = 'bg-gray-700/50 hover:bg-gray-700 border-gray-600';
              let icon = null;

              if (submitted) {
                if (correct) {
                  bg = 'bg-green-900/40 border-green-500';
                  icon = (
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  );
                } else if (sel) {
                  bg = 'bg-red-900/40 border-red-500';
                  icon = (
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  );
                }
              } else if (sel) {
                bg = 'bg-cyan-900/40 border-cyan-500';
              }

              return (
                <button
                  key={c.key}
                  onClick={() => handleSelect(q.id, c.key)}
                  disabled={submitted}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${bg} ${
                    !submitted ? 'hover:shadow-lg cursor-pointer' : ''
                  }`}
                  aria-label={`Đáp án ${c.key}: ${c.text}`}
                  aria-pressed={sel}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <span className="font-bold text-gray-100 mr-2">{c.key}.</span>
                      <span className="text-gray-300 text-sm">{c.text}</span>
                    </div>
                    {submitted && icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {submitted && (
            <div className="mt-6">
              <button
                onClick={() => setShowExp(p => ({ ...p, [q.id]: !p[q.id] }))}
                className="text-cyan-400 text-sm font-bold hover:text-cyan-300 flex items-center gap-2 transition-colors cursor-pointer"
                aria-expanded={showExp[q.id]}
                aria-controls={`explanation-${q.id}`}
              >
                <svg className={`w-5 h-5 transition-transform ${showExp[q.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {showExp[q.id] ? 'Ẩn giải thích' : 'Xem giải thích'}
              </button>

              {showExp[q.id] && (
                <div id={`explanation-${q.id}`} className="mt-4 p-4 bg-blue-900/30 rounded-xl border border-blue-700">
                  <p className="text-sm text-blue-200">
                    <strong className="font-bold">Đáp án đúng:</strong> {q.correctAnswers.join(', ')}
                  </p>
                  <p className="mt-3 text-sm text-blue-100 leading-relaxed">{q.explanation}</p>
                </div>
              )}

              {/* Notes */}
              <div className="mt-5">
                <label htmlFor={`note-${q.id}`} className="block text-sm font-bold text-gray-100 mb-2">
                  Ghi chú cá nhân:
                </label>
                <textarea
                  id={`note-${q.id}`}
                  value={notes[q.id] || ''}
                  onChange={(e) => handleNoteChange(q.id, e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-600 bg-gray-700 text-gray-100 p-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm"
                  rows="4"
                  placeholder="Nhập ghi chú của bạn ở đây..."
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <button
            onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
            disabled={currentQ === 0}
            className="w-full sm:w-auto px-5 py-3 bg-gray-700 rounded-xl shadow-lg font-bold text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-all border border-gray-600 flex items-center justify-center gap-2"
            aria-label="Câu trước"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Câu trước
          </button>

          {/* Question Grid */}
          <div className="flex flex-wrap gap-2 justify-center max-w-md">
            {shuffled.map((_, i) => {
              const isAnswered = answers[shuffled[i].id]?.length > 0;
              const isCurrent = i === currentQ;
              let bgColor = 'bg-gray-700 hover:bg-gray-600';

              if (isCurrent) {
                bgColor = 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg';
              } else if (submitted) {
                bgColor = isCorrect(shuffled[i].id) ? 'bg-green-600' : 'bg-red-600';
              } else if (isAnswered) {
                bgColor = 'bg-cyan-700';
              }

              return (
                <button
                  key={i}
                  onClick={() => setCurrentQ(i)}
                  className={`w-9 h-9 text-xs font-bold rounded-lg transition-all duration-200 hover:scale-110 ${bgColor} ${isCurrent ? 'text-white' : 'text-gray-300'}`}
                  aria-label={`Đi đến câu ${i + 1}`}
                  aria-current={isCurrent ? 'true' : undefined}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentQ(Math.min(shuffled.length - 1, currentQ + 1))}
            disabled={currentQ === shuffled.length - 1}
            className="w-full sm:w-auto px-5 py-3 bg-gray-700 rounded-xl shadow-lg font-bold text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-all border border-gray-600 flex items-center justify-center gap-2"
            aria-label="Câu sau"
          >
            Câu sau
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
