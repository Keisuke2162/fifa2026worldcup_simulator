import { calcGroupStandings } from '../utils/standings';

function normalizeScore(value) {
  return value
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[^0-9]/g, '');
}

export default function GroupPanel({ groupKey, group, matches, onScoreChange, thirdPlaceQualifiers }) {
  const standings = calcGroupStandings(group.teams, matches);
  const qualifiedThirds = new Set(thirdPlaceQualifiers.map((t) => t.team));

  function getRowMeta(idx, team) {
    if (idx === 0) return { rowClass: 'rank-1st', badgeCls: 'rb-1st', label: '進出', labelCls: 'adv-badge adv-1st' };
    if (idx === 1) return { rowClass: 'rank-2nd', badgeCls: 'rb-2nd', label: '進出', labelCls: 'adv-badge adv-2nd' };
    if (idx === 2 && qualifiedThirds.has(team)) return { rowClass: 'rank-3rd-q', badgeCls: 'rb-3rd-q', label: '3位進出', labelCls: 'adv-badge adv-3rd' };
    return { rowClass: idx === 2 ? 'rank-3rd' : '', badgeCls: 'rb-out', label: null, labelCls: '' };
  }

  return (
    <div className="group-panel">
      <h2 className="group-title">{group.name}</h2>

      <div className="group-content">
        {/* Standings Table */}
        <div className="standings-section">
          <table className="standings-table">
            <thead>
              <tr>
                <th>#</th>
                <th className="team-col">チーム</th>
                <th>試</th>
                <th>勝</th>
                <th>分</th>
                <th>負</th>
                <th>得</th>
                <th>失</th>
                <th>差</th>
                <th>勝点</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((s, idx) => {
                const { rowClass, badgeCls, label, labelCls } = getRowMeta(idx, s.team);
                return (
                  <>
                    <tr key={s.team} className={rowClass}>
                      <td className="rank-cell">
                        <span className={`rank-badge ${badgeCls}`}>{idx + 1}</span>
                      </td>
                      <td className="team-name">
                        <span className="team-label">{s.team}</span>
                        {label && <span className={labelCls}>{label}</span>}
                      </td>
                      <td>{s.mp}</td>
                      <td>{s.w}</td>
                      <td>{s.d}</td>
                      <td>{s.l}</td>
                      <td>{s.gf}</td>
                      <td>{s.ga}</td>
                      <td>{s.gd > 0 ? `+${s.gd}` : s.gd}</td>
                      <td className="pts-cell">{s.pts}</td>
                    </tr>
                    {idx === 1 && (
                      <tr key="divider" className="rank-divider-row">
                        <td colSpan={10}>
                          <div className="rank-divider">
                            <span>── 決勝トーナメント進出ライン ──</span>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Match Inputs */}
        <div className="matches-section">
          {matches.map((match, idx) => (
            <div key={idx} className="match-row">
              <span className="match-team home">{match.home}</span>
              <div className="score-inputs">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={match.homeScore}
                  onChange={(e) => onScoreChange(idx, 'homeScore', normalizeScore(e.target.value))}
                  className="score-input"
                  placeholder="−"
                />
                <span className="score-sep">:</span>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={match.awayScore}
                  onChange={(e) => onScoreChange(idx, 'awayScore', normalizeScore(e.target.value))}
                  className="score-input"
                  placeholder="−"
                />
              </div>
              <span className="match-team away">{match.away}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
