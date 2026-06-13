import { calcGroupStandings, calcBestThirdPlace } from '../utils/standings';
import { GROUPS } from '../data/groups';

const RANK_CONFIG = {
  0: { badge: 'qp-badge-1', row: 'qp-row-in qp-row-1', label: '進出', labelCls: 'qp-adv qp-adv-1' },
  1: { badge: 'qp-badge-2', row: 'qp-row-in qp-row-2', label: '進出', labelCls: 'qp-adv qp-adv-2' },
};

export default function QualificationPanel({ allMatches }) {
  const allStandings = {};
  for (const [key, group] of Object.entries(GROUPS)) {
    allStandings[key] = calcGroupStandings(group.teams, allMatches[key]);
  }

  const bestThirds = calcBestThirdPlace(allStandings);
  const qualifiedThirdTeams = new Set(bestThirds.slice(0, 8).map((t) => t.team));

  const qualifiedCount = Object.keys(GROUPS).length * 2 + Math.min(bestThirds.length, 8);

  return (
    <div className="qualification-panel">
      <h2 className="qual-title">
        決勝トーナメント進出状況
        <span className="qual-count-badge">{qualifiedCount} / 32</span>
      </h2>

      <div className="qp-legend">
        <span className="qp-legend-item"><span className="qp-dot dot-1" />1位・2位（自動進出）</span>
        <span className="qp-legend-item"><span className="qp-dot dot-3" />3位（ベスト8進出）</span>
        <span className="qp-legend-item"><span className="qp-dot dot-out" />敗退</span>
      </div>

      <div className="qp-grid">
        {Object.keys(GROUPS).map((key) => {
          const standings = allStandings[key];
          return (
            <div key={key} className="qp-card">
              <div className="qp-card-header">グループ {key}</div>
              {standings.map((s, idx) => {
                const isThirdQualified = idx === 2 && qualifiedThirdTeams.has(s.team);
                const qualified = idx < 2 || isThirdQualified;
                const cfg = RANK_CONFIG[idx] ?? null;

                let rowCls = 'qp-team-row';
                let badgeCls = 'qp-badge qp-badge-out';
                let label = null;
                let labelCls = '';

                if (idx === 0) {
                  rowCls += ' qp-row-in qp-row-1';
                  badgeCls = 'qp-badge qp-badge-1';
                  label = '進出';
                  labelCls = 'qp-adv qp-adv-1';
                } else if (idx === 1) {
                  rowCls += ' qp-row-in qp-row-2';
                  badgeCls = 'qp-badge qp-badge-2';
                  label = '進出';
                  labelCls = 'qp-adv qp-adv-2';
                } else if (isThirdQualified) {
                  rowCls += ' qp-row-in qp-row-3';
                  badgeCls = 'qp-badge qp-badge-3';
                  label = '3位進出';
                  labelCls = 'qp-adv qp-adv-3';
                } else {
                  rowCls += ' qp-row-out';
                  badgeCls = 'qp-badge qp-badge-out';
                }

                return (
                  <div key={s.team} className={rowCls}>
                    <span className={badgeCls}>{idx + 1}</span>
                    <span className="qp-team-name">{s.team}</span>
                    <span className="qp-pts">{s.pts}pt</span>
                    {label && <span className={labelCls}>{label}</span>}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {bestThirds.length > 0 && (
        <div className="thirds-ranking">
          <h3>3位チームランキング（上位8チームが進出）</h3>
          <table className="thirds-table">
            <thead>
              <tr>
                <th>#</th>
                <th>G</th>
                <th className="thirds-team-col">チーム</th>
                <th>勝点</th>
                <th>得失点差</th>
                <th>総得点</th>
                <th>進出</th>
              </tr>
            </thead>
            <tbody>
              {bestThirds.map((t, idx) => (
                <tr key={t.team} className={idx < 8 ? 'third-in' : 'third-out'}>
                  <td>{idx + 1}</td>
                  <td>{t.group}</td>
                  <td className="thirds-team-col">{t.team}</td>
                  <td>{t.pts}</td>
                  <td>{t.gd > 0 ? `+${t.gd}` : t.gd}</td>
                  <td>{t.gf}</td>
                  <td className={idx < 8 ? 'third-adv-cell' : 'third-elim-cell'}>
                    {idx < 8 ? '✓ 進出' : '× 敗退'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
