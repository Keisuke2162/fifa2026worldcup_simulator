import { useState, useMemo } from 'react';
import { GROUPS, GROUP_KEYS, initialMatchState } from './data/groups';
import { calcGroupStandings, calcBestThirdPlace } from './utils/standings';
import GroupPanel from './components/GroupPanel';
import QualificationPanel from './components/QualificationPanel';
import AdBanner from './components/AdBanner';
import './App.css';

export default function App() {
  const [matches, setMatches] = useState(() => {
    try {
      const saved = localStorage.getItem('wc2026-matches-v2');
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialMatchState();
  });
  const [activeTab, setActiveTab] = useState('A');
  const [view, setView] = useState('groups');

  const allStandings = useMemo(() => {
    const result = {};
    for (const key of GROUP_KEYS) {
      result[key] = calcGroupStandings(GROUPS[key].teams, matches[key]);
    }
    return result;
  }, [matches]);

  const bestThirds = useMemo(() => calcBestThirdPlace(allStandings), [allStandings]);
  const qualifiedThirds = useMemo(() => bestThirds.slice(0, 8), [bestThirds]);

  function handleScoreChange(groupKey, matchIdx, field, value) {
    setMatches((prev) => {
      const next = { ...prev, [groupKey]: prev[groupKey].map((m, i) =>
        i === matchIdx ? { ...m, [field]: value } : m
      )};
      localStorage.setItem('wc2026-matches-v2', JSON.stringify(next));
      return next;
    });
  }

  function handleReset() {
    if (window.confirm('全スコアをリセットしますか？')) {
      localStorage.removeItem('wc2026-matches-v2');
      setMatches(initialMatchState());
    }
  }

  const playedCount = useMemo(() => {
    let count = 0;
    for (const key of GROUP_KEYS) {
      for (const m of matches[key]) {
        if (m.homeScore !== '' && m.awayScore !== '') count++;
      }
    }
    return count;
  }, [matches]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-left">
            <span className="trophy-icon">🏆</span>
            <div>
              <h1 className="app-title">FIFA ワールドカップ 2026</h1>
              <p className="app-subtitle">グループリーグ スコアシミュレーター</p>
            </div>
          </div>
          <div className="header-right">
            <span className="played-badge">{playedCount} / 72 試合入力済み</span>
            <button className="reset-btn" onClick={handleReset}>リセット</button>
          </div>
        </div>
      </header>

      <nav className="main-nav">
        <button
          className={`nav-btn ${view === 'groups' ? 'active' : ''}`}
          onClick={() => setView('groups')}
        >
          グループステージ
        </button>
        <button
          className={`nav-btn ${view === 'qualification' ? 'active' : ''}`}
          onClick={() => setView('qualification')}
        >
          決勝T進出状況
        </button>
      </nav>

      {view === 'groups' && (
        <>
          <div className="group-tabs">
            {GROUP_KEYS.map((key) => {
              const played = matches[key].filter(
                (m) => m.homeScore !== '' && m.awayScore !== ''
              ).length;
              return (
                <button
                  key={key}
                  className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  {key}
                  {played > 0 && <span className="tab-badge">{played}/6</span>}
                </button>
              );
            })}
          </div>

          <main className="main-content">
            <GroupPanel
              groupKey={activeTab}
              group={GROUPS[activeTab]}
              matches={matches[activeTab]}
              onScoreChange={(idx, field, val) => handleScoreChange(activeTab, idx, field, val)}
              thirdPlaceQualifiers={qualifiedThirds}
            />
          </main>
        </>
      )}

      {view === 'qualification' && (
        <main className="main-content">
          <QualificationPanel allMatches={matches} />
        </main>
      )}

      <footer className="app-footer">
        <p>48チーム・12グループ | 各グループ上位2チーム（計24）＋3位ベスト8チーム = 計32チームが決勝トーナメント進出</p>
      </footer>
      <AdBanner slot="BOTTOM_AD_SLOT_ID" />
    </div>
  );
}
