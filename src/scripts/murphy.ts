import { PROFILE } from '../data/portfolio';

export function initMurphy() {
  const guide = document.querySelector<HTMLElement>('#guide')!;
  const bot = document.querySelector<HTMLButtonElement>('#guide-bot')!;
  const panel = document.querySelector<HTMLElement>('#guide-bubble')!;
  const body = document.querySelector<HTMLElement>('#guide-body')!;
  const voiceButton = document.querySelector<HTMLButtonElement>('#guide-voice')!;
  if (!guide || !bot || !panel || !body) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const tours = [
    ['top', 'Hello, explorer.', 'Meet Fahim Montasir Opi, a Flutter and agentic AI developer based in Dhaka.'],
    ['about', 'The person behind the code', 'Get to know Opi and his approach to building production mobile apps.'],
    ['skills', 'A versatile toolkit', 'Explore mobile, AI, backend, database and DevOps skills. Expand a group to see more.'],
    ['ai', 'Ideas that take action', 'Discover Opi’s work with planning, tool calling and AI agent orchestration.'],
    ['experience', 'Built through experience', 'See Opi’s engineering roles and the work behind them.'],
    ['projects', 'From idea to shipped', 'Explore real projects, filter by category, and follow their links.'],
    ['workflow', 'How the work happens', 'A look at the process from requirements to testing and delivery.'],
    ['contact', 'Start a conversation', 'Find Opi’s email and social profiles. Thanks for exploring with me!'],
  ];
  let step = -1, tab = 'explore', moodTimer: ReturnType<typeof setTimeout>;
  let voice = false;
  const pet = { joy: 70, energy: 80, snacks: 0 };
  try {
    voice = localStorage.getItem('murphy-voice') === 'on';
    const saved = JSON.parse(localStorage.getItem('murphy-care-v1') || '{}');
    for (const key of ['joy', 'energy', 'snacks'] as const) {
      if (Number.isFinite(saved[key])) pet[key] = Math.max(0, Math.min(key === 'snacks' ? 9999 : 100, saved[key]));
    }
  } catch { /* Storage is optional. */ }
  const escape = (value: string) => value.replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]!));
  const save = () => { try { localStorage.setItem('murphy-care-v1', JSON.stringify(pet)); } catch {} };
  const stopVoice = () => { if ('speechSynthesis' in window) speechSynthesis.cancel(); };
  const speak = (text: string) => {
    stopVoice();
    if (voice && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; utterance.rate = 1;
      speechSynthesis.speak(utterance);
    }
  };
  const syncVoice = () => {
    voiceButton.textContent = voice ? '♪ Voice on' : '♪ Voice off';
    voiceButton.setAttribute('aria-pressed', String(voice));
    voiceButton.disabled = !('speechSynthesis' in window);
    if (voiceButton.disabled) voiceButton.textContent = 'Voice unavailable';
  };
  syncVoice();
  const mood = (value: string) => {
    clearTimeout(moodTimer); bot.dataset.mood = value;
    moodTimer = setTimeout(() => { bot.dataset.mood = 'idle'; }, 4500);
  };
  const fit = () => {
    if (panel.hidden) return;
    const viewport = window.visualViewport;
    const viewportTop = viewport?.offsetTop ?? 0;
    const viewportHeight = viewport?.height ?? innerHeight;
    const viewportBottom = viewportTop + viewportHeight;
    const r = bot.getBoundingClientRect();
    const spaceAbove = r.top - viewportTop - 24;
    const spaceBelow = viewportBottom - r.bottom - 24;
    const available = Math.max(spaceAbove, spaceBelow);
    panel.style.maxHeight = `${Math.max(120, Math.min(viewportHeight - 24, available >= 240 ? available : viewportHeight - 24))}px`;
    const width = panel.offsetWidth, height = panel.offsetHeight;
    const x = Math.max(12, Math.min(r.right - width, innerWidth - width - 12));
    const above = r.top - height - 12;
    const y = above >= viewportTop + 12 ? Math.min(above, viewportBottom - height - 12) : Math.max(viewportTop + 12, Math.min(r.bottom + 12, viewportBottom - height - 12));
    panel.style.left = `${x}px`; panel.style.top = `${y}px`;
  };
  const clearTour = () => {
    step = -1;
    document.querySelectorAll('.guide-highlight').forEach(el => el.classList.remove('guide-highlight'));
    stopVoice();
  };
  const close = () => {
    panel.hidden = true; bot.setAttribute('aria-expanded', 'false'); clearTour(); bot.focus({preventScroll:true});
  };
  const action = (id: string, text: string, primary = false) => `<button type="button" data-action="${id}" ${primary ? 'class="primary"' : ''}>${text}</button>`;
  const render = (message = '') => {
    document.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.tab === tab)));
    if (step >= 0) {
      const [, title, text] = tours[step];
      body.innerHTML = `<p class="muted">GUIDED TOUR · ${step + 1} OF ${tours.length}</p><div class="tour-progress"><span style="width:${(step+1)/tours.length*100}%"></span></div><h3>${title}</h3><p class="muted">${text}</p><div class="tour-controls">${step > 0 ? action('back', '← Back') : ''}${action('next', step === tours.length-1 ? 'Finish ✦' : 'Next →', true)}${action('stop', 'End tour')}</div>`;
    } else if (tab === 'care') {
      body.innerHTML = `<h3>A tiny break together.</h3><p class="muted">A snack, a game, or a well-earned nap?</p><div class="stat"><span>Happiness</span><span>${pet.joy}%</span></div><meter min="0" max="100" value="${pet.joy}" aria-label="Happiness">${pet.joy}%</meter><div class="stat"><span>Energy</span><span>${pet.energy}%</span></div><meter min="0" max="100" value="${pet.energy}" aria-label="Energy">${pet.energy}%</meter><div class="actions">${action('feed','🍓 Give a snack')}${action('play','✦ Play together')}${action('pet','♡ Give a pat')}${action('rest','☾ Take a nap')}</div><p class="muted">${pet.snacks} snacks shared · Care is saved on this device.</p><div class="answer" role="status">${escape(message || 'Happy to see you! What shall we do?')}</div>`;
    } else {
      body.innerHTML = `<h3>Where shall we go?</h3><p class="muted">I know my way around. Let’s find something you’ll love.</p><div class="actions">${action('tour','✦ Take the tour',true)}${action('projects','→ See projects')}${action('skills','⌘ Explore skills')}${action('contact','→ Contact Opi')}</div><div class="answer" id="murphy-answer" role="status">${escape(message || 'Ask me about Opi’s skills, projects, experience, or how to get in touch.')}</div><form class="ask"><input aria-label="Ask Murphy about Opi" placeholder="Ask about Opi…" maxlength="240" required autocomplete="off" /><button type="submit" aria-label="Send question">Send →</button></form><p class="muted" style="margin-top:8px;margin-bottom:0">Portfolio helper · Answers from this site</p>`;
    }
    fit();
  };
  const tourStep = (index: number) => {
    clearTour();
    if (index >= tours.length) { mood('excited'); render('Tour complete! Thanks for exploring. You can contact Opi whenever you’re ready.'); return; }
    step = Math.max(0, index);
    const [id,, text] = tours[step];
    const target = document.getElementById(id);
    target?.classList.add('guide-highlight');
    target?.scrollIntoView({behavior:reduced.matches ? 'instant' : 'smooth', block:'start'});
    render(); speak(text);
  };
  bot.addEventListener('click', e => {
    if (suppressClick) { suppressClick = false; e.preventDefault(); return; }
    if (!panel.hidden) { close(); return; }
    panel.hidden = false; bot.setAttribute('aria-expanded','true'); render();
    document.querySelector<HTMLButtonElement>('#guide-close')?.focus({preventScroll:true});
  });
  document.getElementById('guide-close')?.addEventListener('click', close);
  document.getElementById('guide-reset')?.addEventListener('click', () => { guide.style.left = ''; guide.style.top = ''; guide.style.right = ''; guide.style.bottom = ''; fit(); });
  voiceButton.addEventListener('click', () => {
    voice = !voice; syncVoice();
    try { localStorage.setItem('murphy-voice', voice ? 'on' : 'off'); } catch {}
    if (voice) speak(step >= 0 ? tours[step][2] : 'Hi, I’m Murphy. Let’s explore Opi’s portfolio together.'); else stopVoice();
  });
  document.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach(b => b.addEventListener('click', () => { clearTour(); tab = b.dataset.tab!; render(); }));
  body.addEventListener('click', e => {
    const id = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-action]')?.dataset.action;
    if (!id) return;
    if (id === 'tour') { mood('happy'); tourStep(0); }
    else if (id === 'next') tourStep(step+1);
    else if (id === 'back') tourStep(step-1);
    else if (id === 'stop') { clearTour(); render(); }
    else if (['projects','skills','contact'].includes(id)) {
      clearTour(); document.getElementById(id)?.scrollIntoView({behavior:reduced.matches ? 'instant' : 'smooth'}); render(`Here’s Opi’s ${id} section. Keep exploring, or ask me another question.`); mood('happy');
    } else {
      let text = '';
      if (id === 'feed') { pet.energy = Math.min(100,pet.energy+15); pet.joy = Math.min(100,pet.joy+5); pet.snacks = Math.min(9999,pet.snacks+1); text = 'Yum! A strawberry snack for the road. Thank you!'; mood('love'); }
      if (id === 'pet') { pet.joy = Math.min(100,pet.joy+10); text = 'Aww, that made my day. You’re pretty great company.'; mood('love'); }
      if (id === 'play') {
        if (pet.energy < 15) { text = 'I’m a little sleepy. A snack or a nap will help me recharge.'; mood('sad'); }
        else { pet.energy -= 15; pet.joy = Math.min(100,pet.joy+15); text = 'You found my happy dance! Let’s call that a tiny victory.'; mood('excited'); }
      }
      if (id === 'rest') { pet.energy = 100; text = 'A tiny power nap. Recharged and ready for our next adventure!'; mood('sleep'); }
      save(); render(text); speak(text);
    }
  });
  body.addEventListener('submit', e => {
    e.preventDefault();
    const input = body.querySelector('input')!;
    const q = input.value.trim().toLowerCase(); if (!q) return;
    let answer = '';
    if (/contact|email|hire|reach/.test(q)) answer = `You can reach Opi at ${PROFILE.email}. The contact section also has his social links.`;
    else if (/skill|stack|flutter|dart|firebase/.test(q)) answer = 'Opi builds Flutter apps and works with Dart, Firebase, Node.js and agentic AI. Open Skills to explore his toolkit.';
    else if (/project|app|work|portfolio/.test(q)) answer = 'Explore Projects for mobile apps, AI tools, packages and web experiments. Use the category filters and project links to dig deeper.';
    else if (/experience|job|company/.test(q)) answer = 'Opi’s role is Associate Software Engineer. The Experience section lists his roles, responsibilities and technologies.';
    else if (/ai|agent/.test(q)) answer = 'Opi works on agentic AI systems, including planning loops, tool calling and orchestration. Visit the Agentic AI section to learn more.';
    else if (/who|about|where|opi/.test(q)) answer = `${PROFILE.name} is a Flutter and agentic AI developer based in Dhaka, Bangladesh.`;
    else if (/hello|hi\b|murphy/.test(q)) answer = 'Hi! I’m Murphy, your portfolio sidekick. I can show you around, answer questions about Opi, or hang out in Pet care.';
    else answer = 'I can help with Opi’s projects, skills, experience, AI work and contact details. Try “What does Opi build?” or take the tour.';
    body.querySelector('#murphy-answer')!.textContent = answer; input.value = ''; mood('happy'); speak(answer); fit();
  });
  let drag: {id:number; x:number; y:number; left:number; top:number; moved:boolean} | null = null;
  let suppressClick = false;
  const move = (left:number, top:number) => {
    guide.style.right='auto'; guide.style.bottom='auto';
    guide.style.left = `${Math.max(8,Math.min(left,innerWidth-guide.offsetWidth-8))}px`;
    guide.style.top = `${Math.max(8,Math.min(top,innerHeight-guide.offsetHeight-8))}px`; fit();
  };
  bot.addEventListener('pointerdown', e => {
    if (!e.isPrimary || e.button !== 0) return;
    suppressClick = false;
    const r = guide.getBoundingClientRect(); drag = {id:e.pointerId,x:e.clientX,y:e.clientY,left:r.left,top:r.top,moved:false};
    bot.setPointerCapture(e.pointerId);
  });
  bot.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    if (Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>7) drag.moved=true;
    if (drag.moved) { guide.classList.add('dragging'); move(drag.left+e.clientX-drag.x,drag.top+e.clientY-drag.y); }
  });
  const endDrag = () => { if (drag?.moved) { suppressClick=true; mood('happy'); } drag=null; guide.classList.remove('dragging'); };
  bot.addEventListener('pointerup',endDrag); bot.addEventListener('pointercancel',endDrag); bot.addEventListener('lostpointercapture',endDrag);
  window.addEventListener('resize', () => { if (guide.style.left) { const r=guide.getBoundingClientRect(); move(r.left,r.top); } fit(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) close(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopVoice(); });
  window.visualViewport?.addEventListener('resize', fit);
  window.visualViewport?.addEventListener('scroll', fit);
  new ResizeObserver(fit).observe(panel);
}
