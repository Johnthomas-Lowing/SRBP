// --- Data / State ---
let equips = JSON.parse(localStorage.getItem('equips') || '{}');
let currentSlot = null;
const MAX_ALLOC = 155;
let allocPoints = MAX_ALLOC;
let allocStats = { Might:0, Dexterity:0, Vitality:0, Intelligence:0, Reflex:0 };

// Saved builds storage key
const SAVED_BUILDS_KEY = 'savedBuilds';

// --- DOM references ---
const slots = document.querySelectorAll('.slot');
const itemsEl = document.getElementById('items');
const slotButtonsContainer = document.getElementById('slot-buttons');
const slotButtons = slotButtonsContainer.querySelectorAll('button');

// --- Fortune slots ---
const fortuneSlots = ['Fortune 1', 'Fortune 2', 'Fortune 3', 'Fortune 4'];

// --- Utility helpers ---
function saveEquipsToStorage() {
  localStorage.setItem('equips', JSON.stringify(equips));
}
function loadEquipsFromStorage() {
  equips = JSON.parse(localStorage.getItem('equips') || '{}');
}

// Normalize attribute value helper (used in many places)
function parseAttributeValue(v) {
  if (typeof v === 'string' && v.startsWith('{')) {
    const vals = v.replace(/[{}]/g,'').split(',').map(x=>Number(x.trim())).filter(x=>!isNaN(x));
    return vals.length ? Math.max(...vals) : 0;
  } else if (!isNaN(v)) {
    return Number(v);
  }
  return 0;
}

// --- Centralized equip logic ---
/**
 * Equip or unequip an item into a target slot.
 * - slot: string (e.g., "Main Hand", "Fortune 1")
 * - item: object from db (or null to unequip)
 *
 * Rules:
 * - Fortunes: treated same as other gear, but:
 *    - No duplicate fortunes by name across fortune slots.
 *    - Only four fortune slots exist (enforced by UI).
 * - Two-handed weapons clear the offhand when equipped to Main Hand.
 * - Equipping Off Hand while Main Hand is two-handed will clear Main Hand.
 * - Toggling an item that's already equipped in the target slot unequips it.
 */
function equipItem(targetSlot, item) {
  // Defensive checks
  if (!targetSlot) return;

  // If item is null -> just remove what's in the target
  if (!item) {
    if (equips[targetSlot]) {
      delete equips[targetSlot];
      saveEquipsToStorage();
      renderSlots();
      renderStats();
    }
    return;
  }

  // Fortune-specific duplicate prevention:
  const isFortuneTarget = fortuneSlots.includes(targetSlot);
  const isFortuneItem = (item.type && item.type.toLowerCase().includes('fortune')) || (item.type === 'Fortune') || (item.slots && item.slots.includes && item.slots.includes('Fortune'));

  // If the item is a fortune and target is not a fortune slot, try to find a fortune slot to place it
  if (isFortuneItem && !isFortuneTarget) {
    // pick first open fortune slot or toggle if already equipped
    const alreadyEquippedSlot = fortuneSlots.find(f => equips[f]?.name === item.name);
    if (alreadyEquippedSlot) {
      // toggle off
      delete equips[alreadyEquippedSlot];
      saveEquipsToStorage();
      renderSlots();
      renderStats();
      return;
    }
    const free = fortuneSlots.find(f => !equips[f]);
    if (free) {
      equips[free] = item;
      saveEquipsToStorage();
      renderSlots();
      renderStats();
      return;
    } else {
      // No free fortune slot: replace the first one by default
      equips[fortuneSlots[0]] = item;
      saveEquipsToStorage();
      renderSlots();
      renderStats();
      return;
    }
  }

  // If item is fortune and target is a fortune slot: enforce no duplicates
  if (isFortuneItem && isFortuneTarget) {
    // Remove any existing duplicate fortune from other fortune slots
    fortuneSlots.forEach(fSlot => {
      if (equips[fSlot]?.name === item.name && fSlot !== targetSlot) {
        delete equips[fSlot];
      }
    });

    // Toggle behavior: unequip if same already present
    if (equips[targetSlot]?.name === item.name) {
      delete equips[targetSlot];
    } else {
      equips[targetSlot] = item;
    }

    saveEquipsToStorage();
    renderSlots();
    renderStats();
    return;
  }

  // Regular gear logic
  const currentItem = equips[targetSlot];

  // Defensive - item.type might be undefined
  const type = item.type || '';
  const isTwoHanded = (typeof type === 'string' && (type.includes('2H') || /Staff|Bow/i.test(type)));
  // some types might be strings like "Mace_2H" in your DB, ensure detection:
  const mainHand = 'Main Hand';
  const offHand = 'Off Hand';

  if (currentItem?.name === item.name) {
    // toggling: remove
    delete equips[targetSlot];

  } else {
    // if equipping into Main Hand and item is two-handed -> remove Off Hand
    if (targetSlot === mainHand && isTwoHanded) {
      delete equips[offHand];
    }

    // if equipping into Off Hand while Main Hand is two-handed -> clear Main Hand
    if (targetSlot === offHand && equips[mainHand]) {
      const mainType = equips[mainHand].type || '';
      const mainIsTwoHanded = (typeof mainType === 'string' && (mainType.includes('2H') || /Staff|Bow/i.test(mainType)));
      if (mainIsTwoHanded) delete equips[mainHand];
    }

    equips[targetSlot] = item;
  }

  saveEquipsToStorage();
  renderSlots();
  renderStats();
}

// --- Slot selection ---
slots.forEach(s => {
  s.addEventListener('click', () => selectSlot(s.dataset.slot));
});

// Regular gear slot buttons
slotButtons.forEach(btn => {
  btn.onclick = () => {
    selectSlot(btn.dataset.slot);
    slotButtons.forEach(b => b.classList.toggle('active', b === btn));
    fortuneButton.classList.remove('active'); // clear [F] highlight when normal slot selected
    renderItems();
  };
});

// --- Add Fortune filter button [F] ---
const fortuneButton = document.createElement('button');
fortuneButton.textContent = '[F]';
fortuneButton.dataset.slot = 'Fortune';
slotButtonsContainer.appendChild(fortuneButton);

fortuneButton.onclick = () => {
  // pick a target fortune slot
  let targetSlot = fortuneSlots.find(f => !equips[f]) || fortuneSlots[0];
  currentSlot = targetSlot;

  // visually highlight the selected fortune slot
  slots.forEach(s => s.classList.toggle('active', s.dataset.slot === targetSlot));

  // make only the [F] button active
  slotButtons.forEach(b => b.classList.remove('active'));
  fortuneButton.classList.add('active');

  renderItems();
};

// --- Search input ---
document.getElementById('search').oninput = renderItems;

// --- Clear all equips ---
document.getElementById('clear').onclick = () => {
  equips = {};
  localStorage.removeItem('equips');
  renderSlots();
  renderStats();
  renderItems();
};

// --- Reset allocatable points ---
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

// --- Update renderItems() for fortune page ---
function renderItems() {
  itemsEl.innerHTML = '';
  if (!currentSlot) {
    itemsEl.innerHTML = '<div style="color:#94a3b8;">No slot selected.</div>';
    return;
  }

  const q = document.getElementById('search').value.toLowerCase().replace(/^%/, '');
  let sourceList;
  if (fortuneSlots.includes(currentSlot)) sourceList = fortunes;
  else if (currentSlot === 'Fortune') sourceList = fortunes; // fortune page
  else sourceList = items;

  let list = sourceList.filter(i => {
    // searchable text: name, description, effects, attributes, type, element
    const text = [
      i.name || '',
      i.description || '',
      i.type || '',
      i.element || '',
      ...(i.effects ? (Array.isArray(i.effects) ? i.effects : [i.effects]) : []),
      ...(Object.entries(i.attributes || {}).map(([k,v]) => k + ':' + (typeof v === 'string' ? v : v)))
    ].join(' ').toLowerCase();

    if (fortuneSlots.includes(currentSlot) || currentSlot === 'Fortune') {
      return !q || text.includes(q);
    }

    // regular gear filtering
    if (!i.slots?.includes(currentSlot)) return false;
    return !q || text.includes(q);
  });

  list.sort((a,b) => a.name.localeCompare(b.name));

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

    if (it.damageRange?.length===2) detailsHTML += `<div>Damage: ${it.damageRange[0]}–${it.damageRange[1]}</div>`;
    if (it.armor?.length===2) detailsHTML += `<div>Armor: ${it.armor[0]}–${it.armor[1]}</div>`;
    if (it.magicArmor?.length===2) detailsHTML += `<div>Magic Armor: ${it.magicArmor[0]}–${it.magicArmor[1]}</div>`;

    if (it.effects?.length) {
      const effectsArray = Array.isArray(it.effects) ? it.effects : [it.effects];
      detailsHTML += `<div style="margin-top:4px;">Effects:<br>${effectsArray.join('<br>')}</div>`;
    }

    if (it.description) detailsHTML += `<div style="margin-top:4px;">${it.description}</div>`;

    details.innerHTML = detailsHTML;
    row.appendChild(title);
    row.appendChild(details);
    itemsEl.appendChild(row);

    // --- Click to equip ---
    row.onclick = () => {
      // Use centralized equip function
      if (fortuneSlots.includes(currentSlot) || currentSlot === 'Fortune') {
        // targetSlot is either the selected fortune slot (if currentSlot is a slot name),
        // or if currentSlot === 'Fortune' we prefer first free fortune slot or toggle if already equipped
        const targetSlot = fortuneSlots.includes(currentSlot) ? currentSlot : (fortuneSlots.find(f => !equips[f]) || fortuneSlots[0]);
        equipItem(targetSlot, it);
      } else {
        equipItem(currentSlot, it);
      }
    };
  });
}

// --- Slot selection handler (keeps same behavior) ---
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

// --- Build export / import functions ---

/**
 * Returns a plain JSON string representing the current build.
 */
function exportBuildJSON() {
  const payload = {
    equips,
    allocStats,
    allocPoints
  };
  return JSON.stringify(payload);
}

/**
 * Returns a compact base64-encoded representation suitable for URLs.
 */
function exportBuildShort() {
  try {
    const json = exportBuildJSON();
    // URI-safe base64
    const b64 = btoa(unescape(encodeURIComponent(json)));
    return b64;
  } catch (err) {
    console.error('Failed to export build (short):', err);
    return null;
  }
}

/**
 * Import build from a JSON string (plain JSON).
 * Overwrites equips and allocation state, persists to localStorage and re-renders.
 */
function importBuildJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    equips = data.equips || {};
    allocStats = data.allocStats || { Might:0, Dexterity:0, Vitality:0, Intelligence:0, Reflex:0 };
    allocPoints = (typeof data.allocPoints === 'number') ? data.allocPoints : MAX_ALLOC;
    saveEquipsToStorage();
    renderSlots();
    renderStats();
    renderItems();
    return true;
  } catch (err) {
    console.error('Failed to import build JSON:', err);
    return false;
  }
}

/**
 * Import build from a short base64 string (reverse of exportBuildShort).
 */
function importBuildShort(b64String) {
  try {
    const json = decodeURIComponent(escape(atob(b64String)));
    return importBuildJSON(json);
  } catch (err) {
    console.error('Failed to import short build:', err);
    return false;
  }
}

// --- Saved builds management (simple "folder" system) ---

function _loadSavedBuilds() {
  return JSON.parse(localStorage.getItem(SAVED_BUILDS_KEY) || '{}');
}

function _saveSavedBuilds(obj) {
  localStorage.setItem(SAVED_BUILDS_KEY, JSON.stringify(obj));
}

/**
 * Save current active build into saved builds under `name`.
 * Overwrites existing build with same name.
 */
function saveBuild(name) {
  if (!name || typeof name !== 'string') throw new Error('saveBuild requires a string name');
  const builds = _loadSavedBuilds();
  builds[name] = {
    equips,
    allocStats,
    allocPoints,
    savedAt: new Date().toISOString()
  };
  _saveSavedBuilds(builds);
}

/**
 * Load a named saved build into active workspace. Returns true if successful.
 */
function loadBuild(name) {
  const builds = _loadSavedBuilds();
  if (!builds[name]) return false;
  equips = builds[name].equips || {};
  allocStats = builds[name].allocStats || { Might:0, Dexterity:0, Vitality:0, Intelligence:0, Reflex:0 };
  allocPoints = (typeof builds[name].allocPoints === 'number') ? builds[name].allocPoints : MAX_ALLOC;
  saveEquipsToStorage();
  renderSlots();
  renderStats();
  renderItems();
  return true;
}

/**
 * Delete a named saved build.
 */
function deleteBuild(name) {
  const builds = _loadSavedBuilds();
  if (builds[name]) {
    delete builds[name];
    _saveSavedBuilds(builds);
    return true;
  }
  return false;
}

/**
 * Return an array of saved build metadata: [{ name, savedAt }]
 */
function listBuilds() {
  const builds = _loadSavedBuilds();
  return Object.keys(builds).map(name => ({ name, savedAt: builds[name].savedAt || null }));
}

// --- Initial render ---
renderSlots();
renderItems();
renderStats();

// Expose some functions to console for debugging / manual usage
window.equipItem = equipItem;
window.exportBuildJSON = exportBuildJSON;
window.exportBuildShort = exportBuildShort;
window.importBuildJSON = importBuildJSON;
window.importBuildShort = importBuildShort;
window.saveBuild = saveBuild;
window.loadBuild = loadBuild;
window.deleteBuild = deleteBuild;
window.listBuilds = listBuilds;
window.SAVED_BUILDS_KEY = SAVED_BUILDS_KEY;
