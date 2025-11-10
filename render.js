// --- Data / State ---
let equips = JSON.parse(localStorage.getItem('equips') || '{}');
let currentSlot = null;
const MAX_ALLOC = 155;
let allocPoints = MAX_ALLOC;
let allocStats = { Might:0, Dexterity:0, Vitality:0, Intelligence:0, Reflex:0 };

// DOM references
const slots = document.querySelectorAll('.slot');
const itemsEl = document.getElementById('items');
const slotButtons = document.querySelectorAll('#slot-buttons button');

// Fortune slots
const fortuneSlots = ['Fortune 1', 'Fortune 2', 'Fortune 3', 'Fortune 4'];

// --- Slot selection ---
slots.forEach(s => s.addEventListener('click', () => selectSlot(s.dataset.slot)));
slotButtons.forEach(btn => {
  btn.onclick = () => {
    selectSlot(btn.dataset.slot);
    slotButtons.forEach(b => b.classList.toggle('active', b === btn));
  };
});

// Search input
document.getElementById('search').oninput = renderItems;

// Clear all equips
document.getElementById('clear').onclick = () => {
  equips = {};
  localStorage.removeItem('equips');
  renderSlots();
  renderStats();
  renderItems();
};

// Reset alloc points
document.getElementById('reset-alloc').onclick = () => {
  allocPoints = MAX_ALLOC;
  for (const s of Object.keys(allocStats)) allocStats[s] = 0;
  renderStats();
};

// --- Render functions ---
function renderSlots() {
  slots.forEach(s => {
    const slot = s.dataset.slot;
    const item = equips[slot];
    const label = s.querySelector('.item-label'); // updated to match HTML
    if (item) {
      label.textContent = item.name;
      label.className = 'item-label';
      if (item.rarity) label.classList.add('rarity-' + item.rarity);
      label.classList.remove('empty');
    } else {
      label.textContent = 'Empty';
      label.className = 'item-label empty';
    }
  });
  renderFarmingInfo();
}

function parseType(typeStr) {
  if (!typeStr) return '';
  const parts = typeStr.split('_');
  if (parts.length !== 2) return typeStr;
  const [base, hands] = parts;
  return `${hands.toUpperCase()} ${base.charAt(0).toUpperCase() + base.slice(1)}`;
}

function renderItems() {
  itemsEl.innerHTML = '';
  if (!currentSlot) {
    itemsEl.innerHTML = '<div style="color:#94a3b8;">No slot selected.</div>';
    return;
  }

  const q = document.getElementById('search').value.toLowerCase().replace(/^%/, '');
  const sourceList = fortuneSlots.includes(currentSlot) ? fortunes : items;

  let list = sourceList.filter(i => {
    if (fortuneSlots.includes(currentSlot)) {
      return !q || i.name.toLowerCase().includes(q);
    }
    if (!i.slots?.includes(currentSlot)) return false;
    const text = [
      i.name,
      i.type,
      i.element,
      ...(i.slots || []),
      ...(i.effects || []),
      ...(Object.entries(i.attributes || {}).map(([k,v]) => k + ':' + (typeof v === 'string' ? v : v)))
    ].join(' ').toLowerCase();
    return !q || text.includes(q);
  });

  list.sort((a, b) => a.name.localeCompare(b.name));

  if (!list.length) {
    itemsEl.innerHTML = '<div style="color:#94a3b8;">No items match.</div>';
    return;
  }

  list.forEach(it => {
    const row = document.createElement('div');
    row.className = 'item-row rarity-' + (it.rarity || '');

    const title = document.createElement('div');
    title.textContent = it.name;
    title.className = 'item-title rarity-' + (it.rarity || '');

    const details = document.createElement('div');
    details.className = 'item-details';

    // Type + element
    const typeStr = parseType(it.type);
    let detailsHTML = `<div>${typeStr} • ${it.element || ''}</div>`;

    // Attributes
    if (it.attributes) {
      const attrLine = [];
      for (const [k,v] of Object.entries(it.attributes)) {
        let val = '';
        if (typeof v==='string' && v.startsWith('{')) {
          val = v.replace(/[{}]/g,'').split(',').map(n=>n.trim()).join('–');
        } else val = v;
        attrLine.push(`${k}: ${val}`);
      }
      if (attrLine.length) detailsHTML += `<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:4px;">${attrLine.map(a=>`<span>${a}</span>`).join('')}</div>`;
    }

    // Damage / Armor / Magic Armor
    if (it.damageRange?.length===2) detailsHTML += `<div>Damage: ${it.damageRange[0]}–${it.damageRange[1]}</div>`;
    if (it.armor?.length===2) detailsHTML += `<div>Armor: ${it.armor[0]}–${it.armor[1]}</div>`;
    if (it.magicArmor?.length===2) detailsHTML += `<div>Magic Armor: ${it.magicArmor[0]}–${it.magicArmor[1]}</div>`;

    // Effects (normalize string/array)
    if (it.effects?.length) {
      const effectsArray = Array.isArray(it.effects) ? it.effects : [it.effects];
      detailsHTML += `<div style="margin-top:4px;">Effects:<br>${effectsArray.join('<br>')}</div>`;
    }

    details.innerHTML = detailsHTML;
    row.appendChild(title);
    row.appendChild(details);
    itemsEl.appendChild(row);

    row.onclick = () => {
      if (fortuneSlots.includes(currentSlot)) {
        if (equips[currentSlot]?.name === it.name) delete equips[currentSlot];
        else equips[currentSlot] = it;
      } else {
        const currentItem = equips[currentSlot];
        const type = it.type;
        const isTwoHanded = type.includes('2H') || /Staff|Bow/i.test(type);
        const isOneHNonGun = /Sword|Axe|Mace/i.test(type) && !type.includes('Gun');
        const isOneHGun = /Gun/i.test(type);
        const isWand = /Wand/i.test(type);

        if (currentItem?.name === it.name) {
          delete equips[currentSlot];
        } else {
          if (currentSlot === 'Main Hand' && isTwoHanded) delete equips['Off Hand'];
          if (currentSlot === 'Off Hand' && equips['Main Hand']) {
            const mainType = equips['Main Hand'].type;
            const mainIsTwoHanded = mainType.includes('2H') || /Staff|Bow/i.test(mainType);
            if (mainIsTwoHanded) delete equips['Main Hand'];
          }
          equips[currentSlot] = it;
        }
      }

      localStorage.setItem('equips', JSON.stringify(equips));
      renderSlots();
      renderStats();
    };
  });
}

// --- Slot selection ---
function selectSlot(slot) {
  currentSlot = slot;
  slots.forEach(s => s.classList.toggle('active', s.dataset.slot === slot));
  renderItems();
}

// --- Stats / Allocation ---
function renderStats() {
  const totals = {Might:0,Dexterity:0,Vitality:0,Intelligence:0,Reflex:0};

  for (const it of Object.values(equips)) {
    for (const [k,v] of Object.entries(it.attributes||{})) {
      let val=0;
      if (typeof v==='string' && v.startsWith('{')) val = Math.max(...v.replace(/[{}]/g,'').split(',').map(Number));
      else if (!isNaN(v)) val=Number(v);
      if (totals[k]!==undefined) totals[k]+=val;
    }

    if (it.damageRange?.length===2) totals['Damage']=(totals['Damage']||0)+Math.max(...it.damageRange);
    if (it.armor?.length===2) totals['Armor']=(totals['Armor']||0)+Math.max(...it.armor);
    if (it.magicArmor?.length===2) totals['Magic Armor']=(totals['Magic Armor']||0)+Math.max(...it.magicArmor);
  }

  const header = document.getElementById('attr-header');
  if(header) header.textContent = `Attributes ~ ${allocPoints} Remaining`;

  for (const [k,v] of Object.entries(totals)) {
    const el = document.getElementById(k);
    if(el) el.innerHTML = `
      <button class="stat-btn" data-stat="${k}" data-op="-">-</button>
      <span class="stat-label">${k}: ${v+(allocStats[k]||0)}</span>
      <button class="stat-btn" data-stat="${k}" data-op="+">+</button>
    `;
  }

  document.querySelectorAll('.stat button').forEach(btn => {
    btn.onclick = e => {
      const stat = btn.dataset.stat;
      const op = btn.dataset.op;
      const amt = e.shiftKey ? 10 : 1;
      if(op==='+' && allocPoints>0){
        const assign = Math.min(amt,allocPoints);
        allocStats[stat]+=assign;
        allocPoints-=assign;
      } else if(op==='-' && allocStats[stat]>0){
        const remove=Math.min(amt,allocStats[stat]);
        allocStats[stat]-=remove;
        allocPoints+=remove;
      }
      renderStats();
    };
  });

  renderFarmingInfo();
}

// --- Farming info ---
function renderFarmingInfo() {
  const bossList = document.getElementById('boss-list');
  const zoneList = document.getElementById('zone-list');
  if (!bossList || !zoneList) return;

  bossList.innerHTML = '';
  zoneList.innerHTML = '';

  const bossMap = new Map();
  const zoneMap = new Map();

  Object.entries(equips).forEach(([slot, it]) => {
    (it.bosses || []).forEach(b => {
      const key = b.trim().toLowerCase();
      if (!bossMap.has(key)) bossMap.set(key, { name: b.trim(), slots: new Set() });
      bossMap.get(key).slots.add(slot);
    });
    (it.zones || []).forEach(z => {
      const key = z.trim().toLowerCase();
      if (!zoneMap.has(key)) zoneMap.set(key, { name: z.trim(), slots: new Set() });
      zoneMap.get(key).slots.add(slot);
    });
  });

  if (bossMap.size) {
    [...bossMap.values()].sort((a,b)=>a.name.localeCompare(b.name))
      .forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name} - ${[...entry.slots].sort().join(' / ')}`;
        bossList.appendChild(li);
      });
  } else bossList.innerHTML = '<li style="color:#666;">None</li>';

  if (zoneMap.size) {
    [...zoneMap.values()].sort((a,b)=>a.name.localeCompare(b.name))
      .forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name} - ${[...entry.slots].sort().join(' / ')}`;
        zoneList.appendChild(li);
      });
  } else zoneList.innerHTML = '<li style="color:#666;">None</li>';
}

// --- Initial render ---
renderSlots();
renderItems();
renderStats();
