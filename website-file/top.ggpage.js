(function () {
  'use strict';

  const COMMANDS_URL = 'website-file/commands.json';

  const CATEGORY_META = {
    all: {
      title: 'All',
      desc: 'Every command Divo offers. Popular commands are shown first.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'
    },
    premium: {
      title: 'Premium',
      desc: 'Exclusive features unlocked with Divo Premium.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>'
    },
    moderation: {
      title: 'Moderation',
      desc: 'Bans, mutes, warns, antinuke and automod tools.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
    },
    music: {
      title: 'Music',
      desc: 'High quality music playback with autoplay and queue control.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
    },
    voicemaster: {
      title: 'VoiceMaster',
      desc: 'Custom voice channels that members can own and control.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>'
    },
    economy: {
      title: 'Economy',
      desc: 'Earn coins, gamble, rob, and climb the leaderboard.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
    },
    fun: {
      title: 'Fun & Games',
      desc: 'Mini games, trivia, polls, and random entertainment.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="10" y1="12" x2="10.01" y2="12"/><path d="M15 10l2 2-2 2"/></svg>'
    },
    mini: {
      title: 'Mini Games',
      desc: 'Quick, casual games to play anywhere.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>'
    },
    leveling: {
      title: 'Leveling',
      desc: 'XP, ranks, level-up rewards, and leaderboards.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>'
    },
    roleplay: {
      title: 'Roleplay',
      desc: 'Hugs, kisses, slaps and 70+ other reaction commands.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
    },
    utility: {
      title: 'Utility',
      desc: 'Helpful tools: translate, weather, screenshot, and more.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>'
    },
    general: {
      title: 'General',
      desc: 'Core info, user/server lookups, role management.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    },
    miscellaneous: {
      title: 'Miscellaneous',
      desc: 'Automation, feeds, snipes, starboard, AI and more.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>'
    },
    lastfm: {
      title: 'Last.fm',
      desc: 'Connect your Last.fm and flex your listening stats.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg>'
    },
    bumpreminder: {
      title: 'Bump Reminder',
      desc: 'Never miss a server bump - automatic reminders.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>'
    },
    giveaways: {
      title: 'Giveaways',
      desc: 'Run server giveaways with custom requirements.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>'
    }
  };

  const CATEGORY_ORDER = [
    'all', 'premium', 'moderation', 'music', 'voicemaster',
    'economy', 'fun', 'mini', 'leveling', 'roleplay',
    'utility', 'general', 'miscellaneous', 'lastfm',
    'bumpreminder', 'giveaways'
  ];

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function sortCommands(list) {
    return [...list].sort((a, b) => {
      const ap = a.popular ? 1 : 0;
      const bp = b.popular ? 1 : 0;
      if (ap !== bp) return bp - ap;
      const apr = a.premium ? 1 : 0;
      const bpr = b.premium ? 1 : 0;
      if (apr !== bpr) return bpr - apr;
      const apri = a.prime ? 1 : 0;
      const bpri = b.prime ? 1 : 0;
      if (apri !== bpri) return bpri - apri;
      return a.name.localeCompare(b.name);
    });
  }

  function renderCmdCard(cmd) {
    const badges = [];
    if (cmd.popular) {
      badges.push('<span class="cmd-badge popular"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>Popular</span>');
    }
    if (cmd.premium) {
      badges.push('<span class="cmd-badge premium">Premium</span>');
    }
    if (cmd.prime) {
      badges.push('<span class="cmd-badge prime">Prime</span>');
    }

    const bottom = [];
    if (cmd.permission && cmd.permission !== 'None') {
      const perm = cmd.permission.replace(/_/g, ' ');
      bottom.push(`<span class="cmd-meta perm">${escapeHtml(perm)}</span>`);
    }
    if (cmd.aliases && cmd.aliases !== 'N/A') {
      bottom.push(`<span class="cmd-meta"><span class="label">aliases:</span> ${escapeHtml(cmd.aliases)}</span>`);
    }

    const search = (cmd.name + ' ' + cmd.description + ' ' + (cmd.aliases || '')).toLowerCase();

    return `<div class="cmd-card" data-search="${escapeHtml(search)}">
      <div class="cmd-card-top">
        <span class="name"><span class="prefix">,</span>${escapeHtml(cmd.name)}</span>
        ${badges.join('')}
      </div>
      <p class="desc">${escapeHtml(cmd.description)}</p>
      ${bottom.length ? `<div class="bottom">${bottom.join('')}</div>` : ''}
    </div>`;
  }

  function buildTabs(groups) {
    const navEl = document.getElementById('tabNav');
    const panelsEl = document.getElementById('tabPanels');
    if (!navEl || !panelsEl) return;

    let navHTML = '';
    let panelsHTML = '';
    let firstKey = null;

    CATEGORY_ORDER.forEach(key => {
      const list = groups[key];
      if (!list || !list.length) return;
      if (!firstKey) firstKey = key;
      const meta = CATEGORY_META[key] || { title: key, desc: '', icon: '' };
      const sorted = sortCommands(list);

      navHTML += `<button class="tab-btn" data-tab="${key}">${meta.icon}<span>${escapeHtml(meta.title)}</span><span class="tab-count">${sorted.length}</span></button>`;

      panelsHTML += `<div class="tab-panel" id="tab-${key}">
        <div class="cat-card">
          <div class="cat-card-head">
            <div class="cat-card-icon">${meta.icon}</div>
            <div>
              <h3>${escapeHtml(meta.title)}</h3>
              <div class="cat-desc">${escapeHtml(meta.desc)}</div>
            </div>
            <span class="cat-count">${sorted.length} commands</span>
          </div>
          <div class="cmd-grid">${sorted.map(renderCmdCard).join('')}</div>
        </div>
      </div>`;
    });

    navEl.innerHTML = navHTML;
    panelsEl.innerHTML = panelsHTML;

    if (firstKey) {
      const firstBtn = navEl.querySelector(`[data-tab="${firstKey}"]`);
      const firstPanel = document.getElementById('tab-' + firstKey);
      if (firstBtn) firstBtn.classList.add('active');
      if (firstPanel) firstPanel.classList.add('active');
    }

    navEl.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        navEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        panelsEl.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById('tab-' + tab);
        if (panel) {
          panel.classList.add('active');
          panel.style.animation = 'none';
          void panel.offsetHeight;
          panel.style.animation = '';
        }
        applySearch();
      });
    });
  }

  function applySearch() {
    const input = document.getElementById('cmdSearch');
    const countEl = document.getElementById('cmdShowing');
    if (!input) return;
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    let total = 0;
    document.querySelectorAll('.tab-panel').forEach(panel => {
      const cards = panel.querySelectorAll('.cmd-card');
      let panelVisible = 0;
      cards.forEach(card => {
        total++;
        const match = !q || card.dataset.search.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) panelVisible++;
      });
      let empty = panel.querySelector('.cmd-empty');
      if (panelVisible === 0 && cards.length > 0) {
        if (!empty) {
          empty = document.createElement('div');
          empty.className = 'cmd-empty';
          empty.innerHTML = '<div class="cmd-empty-icon">:(</div>No commands match your search.';
          panel.querySelector('.cmd-grid').appendChild(empty);
        }
        empty.style.display = '';
      } else if (empty) {
        empty.style.display = 'none';
      }
      if (panel.classList.contains('active')) {
        visible = panelVisible;
      }
    });
    if (countEl) countEl.textContent = visible;
  }

  async function fetchCommands() {
    if (Array.isArray(window.DIVO_COMMANDS)) {
      return window.DIVO_COMMANDS;
    }
    const res = await fetch(COMMANDS_URL, { cache: 'no-cache' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (!Array.isArray(data)) throw new Error('Invalid data');
    return data;
  }

  async function loadCommands() {
    const panelsEl = document.getElementById('tabPanels');
    try {
      const data = await fetchCommands();

      const groups = {};
      data.forEach(c => {
        if (!c || !c.name) return;
        const key = (c.category || 'miscellaneous').toLowerCase();
        if (!groups[key]) groups[key] = [];
        groups[key].push(c);
      });

      groups.all = data.slice();
      groups.premium = data.filter(c => c.premium || c.prime);

      const totalEl = document.getElementById('cmdTotal');
      if (totalEl) totalEl.textContent = data.length;
      const countEl = document.getElementById('cmdShowing');
      const heroCount = document.getElementById('heroCommandCount');
      if (heroCount) heroCount.textContent = data.length;

      buildTabs(groups);

      const initiallyVisible = (groups[CATEGORY_ORDER.find(k => groups[k] && groups[k].length)] || []).length;
      if (countEl) countEl.textContent = initiallyVisible;

      const search = document.getElementById('cmdSearch');
      if (search) search.addEventListener('input', applySearch);
    } catch (err) {
      console.error('[commands] failed to load', err);
      if (panelsEl) {
        panelsEl.innerHTML = `<div class="cat-card"><div class="cmd-empty">
          <div class="cmd-empty-icon">!</div>
          Could not load commands. Make sure <code>commands.json</code> is hosted next to this page.
        </div></div>`;
      }
    }
  }

  function setupReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
  }

  function setupCounters() {
    const counters = document.querySelectorAll('.counter');
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          counters.forEach(c => {
            const target = parseInt(c.dataset.target, 10) || 0;
            const duration = 2000;
            const start = performance.now();
            const step = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              c.textContent = Math.floor(eased * target).toLocaleString();
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
        }
      });
    }, { threshold: 0.3 });
    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) obs.observe(statsBar);
  }

  function setupSearchShortcut() {
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        const search = document.getElementById('cmdSearch');
        if (search) search.focus();
      }
    });
  }

  function init() {
    setupReveal();
    setupCounters();
    setupSearchShortcut();
    loadCommands();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
