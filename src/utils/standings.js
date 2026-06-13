// Calculate standings for a single group
export function calcGroupStandings(teams, matches) {
  const stats = {};
  for (const team of teams) {
    stats[team] = { team, mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
  }

  for (const match of matches) {
    const hs = parseInt(match.homeScore, 10);
    const as = parseInt(match.awayScore, 10);
    if (isNaN(hs) || isNaN(as) || match.homeScore === '' || match.awayScore === '') continue;

    const h = stats[match.home];
    const a = stats[match.away];
    h.mp++;
    a.mp++;
    h.gf += hs;
    h.ga += as;
    h.gd = h.gf - h.ga;
    a.gf += as;
    a.ga += hs;
    a.gd = a.gf - a.ga;

    if (hs > as) {
      h.w++; h.pts += 3;
      a.l++;
    } else if (hs < as) {
      a.w++; a.pts += 3;
      h.l++;
    } else {
      h.d++; h.pts++;
      a.d++; a.pts++;
    }
  }

  const list = Object.values(stats);
  list.sort((a, b) => compareTeams(a, b, matches));
  return list;
}

// Compare two teams for sorting (tiebreaker logic)
function compareTeams(a, b, matches) {
  if (b.pts !== a.pts) return b.pts - a.pts;
  // Head-to-head among tied teams (simplified: just between these two)
  const h2h = calcHeadToHead([a.team, b.team], matches);
  const ha = h2h[a.team];
  const hb = h2h[b.team];
  if (hb.pts !== ha.pts) return hb.pts - ha.pts;
  if (hb.gd !== ha.gd) return hb.gd - ha.gd;
  if (hb.gf !== ha.gf) return hb.gf - ha.gf;
  // Overall GD and GF
  if (b.gd !== a.gd) return b.gd - a.gd;
  return b.gf - a.gf;
}

function calcHeadToHead(teamList, matches) {
  const stats = {};
  for (const t of teamList) stats[t] = { pts: 0, gf: 0, ga: 0, gd: 0 };

  for (const match of matches) {
    if (!teamList.includes(match.home) || !teamList.includes(match.away)) continue;
    const hs = parseInt(match.homeScore, 10);
    const as = parseInt(match.awayScore, 10);
    if (isNaN(hs) || isNaN(as) || match.homeScore === '' || match.awayScore === '') continue;

    stats[match.home].gf += hs;
    stats[match.home].ga += as;
    stats[match.home].gd = stats[match.home].gf - stats[match.home].ga;
    stats[match.away].gf += as;
    stats[match.away].ga += hs;
    stats[match.away].gd = stats[match.away].gf - stats[match.away].ga;

    if (hs > as) {
      stats[match.home].pts += 3;
    } else if (hs < as) {
      stats[match.away].pts += 3;
    } else {
      stats[match.home].pts++;
      stats[match.away].pts++;
    }
  }
  return stats;
}

// Get the best 8 third-place teams from all groups
export function calcBestThirdPlace(allGroupStandings) {
  const thirds = [];
  for (const [groupKey, standings] of Object.entries(allGroupStandings)) {
    if (standings.length >= 3) {
      thirds.push({ ...standings[2], group: groupKey });
    }
  }
  thirds.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return 0;
  });
  return thirds;
}
