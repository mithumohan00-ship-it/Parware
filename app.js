const API_BASE = 'http://localhost:5000/api';

let plots = [
  { id: 'P001', db_id: 1, number: 'GF-01', floor: 'Ground Floor', status: 'Occupied', vehicle: 'KA-01-AB-1234', checkin: '2024-02-02 09:00', checkout: '2024-02-02 11:00' },
  { id: 'P002', db_id: 2, number: 'GF-02', floor: 'Ground Floor', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P003', db_id: 3, number: 'GF-03', floor: 'Ground Floor', status: 'Reserved', vehicle: 'KA-05-HJ-2210', checkin: '2024-02-02 10:20', checkout: '2024-02-02 13:00' },
  { id: 'P004', db_id: 4, number: 'GF-04', floor: 'Ground Floor', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P005', db_id: 5, number: 'GF-05', floor: 'Ground Floor', status: 'Occupied', vehicle: 'KA-09-UV-2040', checkin: '2024-02-02 08:40', checkout: '2024-02-02 12:10' },
  { id: 'P006', db_id: 6, number: 'GF-06', floor: 'Ground Floor', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P007', db_id: 7, number: 'GF-07', floor: 'Ground Floor', status: 'Reserved', vehicle: 'KA-11-PL-4421', checkin: '2024-02-02 11:00', checkout: '2024-02-02 15:45' },
  { id: 'P008', db_id: 8, number: 'GF-08', floor: 'Ground Floor', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P009', db_id: 9, number: 'GF-09', floor: 'Ground Floor', status: 'Occupied', vehicle: 'KA-19-LM-7780', checkin: '2024-02-02 07:55', checkout: '2024-02-02 10:30' },
  { id: 'P010', db_id: 10, number: 'GF-10', floor: 'Ground Floor', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P011', db_id: 11, number: 'F1-01', floor: 'Floor 1', status: 'Reserved', vehicle: 'KA-02-CD-5678', checkin: '2024-02-02 10:00', checkout: '2024-02-02 14:00' },
  { id: 'P012', db_id: 12, number: 'F1-02', floor: 'Floor 1', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P013', db_id: 13, number: 'F1-03', floor: 'Floor 1', status: 'Occupied', vehicle: 'KA-21-AA-9090', checkin: '2024-02-02 09:45', checkout: '2024-02-02 12:45' },
  { id: 'P014', db_id: 14, number: 'F1-04', floor: 'Floor 1', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P015', db_id: 15, number: 'F1-05', floor: 'Floor 1', status: 'Reserved', vehicle: 'KA-07-ZX-3200', checkin: '2024-02-02 12:10', checkout: '2024-02-02 16:40' },
  { id: 'P016', db_id: 16, number: 'F1-06', floor: 'Floor 1', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P017', db_id: 17, number: 'F1-07', floor: 'Floor 1', status: 'Occupied', vehicle: 'KA-31-RT-7762', checkin: '2024-02-02 08:25', checkout: '2024-02-02 11:55' },
  { id: 'P018', db_id: 18, number: 'F1-08', floor: 'Floor 1', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P019', db_id: 19, number: 'F1-09', floor: 'Floor 1', status: 'Reserved', vehicle: 'KA-14-NB-6060', checkin: '2024-02-02 13:00', checkout: '2024-02-02 17:30' },
  { id: 'P020', db_id: 20, number: 'F1-10', floor: 'Floor 1', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P021', db_id: 21, number: 'F2-01', floor: 'Floor 2', status: 'Occupied', vehicle: 'KA-17-QW-1122', checkin: '2024-02-02 09:05', checkout: '2024-02-02 12:05' },
  { id: 'P022', db_id: 22, number: 'F2-02', floor: 'Floor 2', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P023', db_id: 23, number: 'F2-03', floor: 'Floor 2', status: 'Reserved', vehicle: 'KA-44-HG-9898', checkin: '2024-02-02 11:15', checkout: '2024-02-02 15:15' },
  { id: 'P024', db_id: 24, number: 'F2-04', floor: 'Floor 2', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P025', db_id: 25, number: 'F2-05', floor: 'Floor 2', status: 'Occupied', vehicle: 'KA-25-VV-2525', checkin: '2024-02-02 08:10', checkout: '2024-02-02 11:40' },
  { id: 'P026', db_id: 26, number: 'F2-06', floor: 'Floor 2', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P027', db_id: 27, number: 'F2-07', floor: 'Floor 2', status: 'Reserved', vehicle: 'KA-08-DE-4545', checkin: '2024-02-02 12:40', checkout: '2024-02-02 16:20' },
  { id: 'P028', db_id: 28, number: 'F2-08', floor: 'Floor 2', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' },
  { id: 'P029', db_id: 29, number: 'F2-09', floor: 'Floor 2', status: 'Occupied', vehicle: 'KA-40-YT-3030', checkin: '2024-02-02 10:10', checkout: '2024-02-02 13:50' },
  { id: 'P030', db_id: 30, number: 'F2-10', floor: 'Floor 2', status: 'Available', vehicle: '—', checkin: '—', checkout: '—' }
];

let violations = [
  { id: 'V001', db_id: 1, vehicle: 'KA-03-EF-9012', type: 'No Permit', date: '2024-02-01', fine: '$150', status: 'Pending' },
  { id: 'V002', db_id: 2, vehicle: 'KA-04-GH-3456', type: 'Overtime', date: '2024-01-30', fine: '$75', status: 'Approved' },
  { id: 'V003', db_id: 3, vehicle: 'KA-05-IJ-7890', type: 'Wrong Zone', date: '2024-01-28', fine: '$100', status: 'Rejected' }
];

let editingPlotIndex = null;
let donutChartInstance = null;
let economyChartInstance = null;
let finesChartInstance = null;
let revenueChartInstance = null;
const weeklyPendingTasks = 2;
let selectedPlotIds = new Set();
let currentPlotQuickViewId = null;
let activityFeedTimer = null;
let quickViewPhotoUrl = '';
let visualFloorFilter = 'Ground Floor';
const activityItems = [
  '[10:42:15] Plate ABC-1234 detected at North Gate - Entry Granted.',
  '[10:43:09] Reserved slot B-01 opened for permit holder KA-02-CD-5678.',
  '[10:44:51] OCR mismatch flagged on visitor plate MH-14-XQ-2201.',
  '[10:46:20] Exit lane cleared after payment confirmation for A-01.',
  '[10:47:33] Camera health check completed - All 6 feeds online.'
];
const settingsState = {
  autoSave: true,
  'entry-alerts': true,
  'night-mode': false,
  'camera-health': true,
  'fine-escalation': false
};
const permissionsState = {
  operators: 'allow',
  supervisors: 'allow',
  security: 'allow',
  finance: 'allow'
};

function setAreaTypeBadge(type) {
  const areaType = document.getElementById('areaType');
  if (!areaType) return;
  areaType.textContent = type || 'Normal';
  areaType.className = 'area-badge area-badge-normal';
}

function updateTopContext(label) {
  const parent = document.querySelector('.bc-parent');
  const current = document.querySelector('.bc-current');
  if (parent) parent.textContent = label === 'Dashboard' ? 'Dashboard' : 'Parking Areas';
  if (current) current.textContent = label === 'Dashboard' ? 'Overview' : label;
}

function getSearchQuery() {
  return document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
}

function getFilteredPlots() {
  const status = document.getElementById('plotStatusFilter')?.value || '';
  const vehicleType = document.getElementById('plotVehicleTypeFilter')?.value || '';
  const floor = document.getElementById('plotFloorFilter')?.value || '';
  const query = getSearchQuery();

  return plots.filter(plot => {
    const matchesStatus = !status || plot.status === status;
    const matchesFloor = !floor || plot.floor === floor;
    const hasVehicle = plot.vehicle && plot.vehicle !== '—';
    const matchesVehicleType = !vehicleType || (vehicleType === 'registered' ? hasVehicle : !hasVehicle);
    const haystack = `${plot.id} ${plot.number} ${plot.status} ${plot.vehicle || ''}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesStatus && matchesFloor && matchesVehicleType && matchesQuery;
  });
}

function getPlotSelectionCount() {
  return selectedPlotIds.size;
}

function toggleAutoSave() {
  settingsState.autoSave = !settingsState.autoSave;
  const button = document.getElementById('autoSaveToggle');
  if (button) {
    button.textContent = settingsState.autoSave ? 'Auto-save On' : 'Auto-save Off';
  }
  showToast(`Auto-save ${settingsState.autoSave ? 'enabled' : 'disabled'}`);
}

function toggleSetting(settingKey, button) {
  settingsState[settingKey] = !settingsState[settingKey];
  button.classList.toggle('active', settingsState[settingKey]);
  button.setAttribute('aria-pressed', String(settingsState[settingKey]));
  showToast(`${settingKey.replace('-', ' ')} ${settingsState[settingKey] ? 'enabled' : 'disabled'}`);
}

function setPermission(role, value, button) {
  permissionsState[role] = value;
  const row = button.closest('.permission-row');
  row?.querySelectorAll('.access-btn').forEach(btn => btn.classList.remove('active', 'deny'));
  if (value === 'allow') {
    button.classList.add('active');
  } else {
    button.classList.add('deny', 'active');
  }
  showToast(`${role} access ${value === 'allow' ? 'granted' : 'denied'}`);
}

function toggleTask(checkbox) {
  const row = checkbox.closest('.task-row');
  if (!row) return;
  row.classList.toggle('done', checkbox.checked);
  updateStats();
  showToast(checkbox.checked ? 'Task marked complete' : 'Task reopened');
}

function activateTab(tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
  const btn = document.querySelector(`.tab[onclick*="'${tabId}'"]`);
  btn?.classList.add('active');
  document.getElementById('tab-' + tabId)?.classList.add('active');

  if (tabId === 'plots') loadPlots();
  if (tabId === 'violations') loadViolations();
  if (tabId === 'economy') initEconomyChart();
  if (tabId === 'plots') renderPlotMap();
}

function switchTab(btn, tabId) {
  activateTab(tabId);
}

function toggleNavGroup(groupName) {
  const group = document.querySelector(`.nav-group[data-group="${groupName}"]`);
  if (!group) return;
  group.classList.toggle('open');
}

function setActiveSidebar(target) {
  document.querySelectorAll('.nav-child').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active-main'));

  if (target?.classList.contains('nav-child')) {
    target.classList.add('active');
    document.querySelector('.nav-group[data-group="parking"]')?.classList.add('open');
  } else if (target?.classList.contains('nav-link')) {
    target.classList.add('active-main');
  }
}

function navigateFromSidebar(tabId, label, event) {
  activateTab(tabId);
  setActiveSidebar(event?.currentTarget);
  updateTopContext(label);
}

function showPage(page, event) {
  const routeMap = {
    areas: ['overview', 'Parking Areas'],
    fines: ['violations', 'Fines'],
    complaints: ['observer', 'Complaints'],
    booking: ['plots', 'Booking'],
    reservation: ['weekly', 'Reservation'],
    history: ['economy', 'Parking History']
  };
  const [tabId, label] = routeMap[page] || ['overview', 'Parking Areas'];
  navigateFromSidebar(tabId, label, event);
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
  if (id === 'editAreaModal') prefillEditModal();
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  if (id === 'addPlotModal') resetPlotForm();
}

document.querySelectorAll('.modal-overlay').forEach(mo => {
  mo.addEventListener('click', e => {
    if (e.target === mo) {
      mo.classList.remove('open');
      if (mo.id === 'addPlotModal') resetPlotForm();
    }
  });
});

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function prefillEditModal() {
  document.getElementById('editAreaName').value = document.getElementById('areaName').textContent;
  document.getElementById('editCustomer').value = document.getElementById('customerName').textContent;
  document.getElementById('editAddress').value = document.getElementById('areaAddress').textContent;
  document.getElementById('editType').value = document.getElementById('areaType').textContent;
  document.getElementById('editCode').value = document.getElementById('parkingCode').textContent;
}

async function loadAreaInfo() {
  try {
    const res = await fetch(`${API_BASE}/area/1`);
    if (!res.ok) return;
    const area = await res.json();
    document.getElementById('areaName').textContent = area.area_name || document.getElementById('areaName').textContent;
    document.getElementById('customerName').textContent = area.customer || document.getElementById('customerName').textContent;
    document.getElementById('areaAddress').textContent = area.address || document.getElementById('areaAddress').textContent;
    setAreaTypeBadge(area.type || document.getElementById('areaType').textContent);
    document.getElementById('parkingCode').textContent = area.parking_code || document.getElementById('parkingCode').textContent;
    if (area.areas) document.getElementById('areaAreas').textContent = area.areas;
  } catch {
    // Keep existing demo content
  }
}

async function saveAreaInfo() {
  const payload = {
    area_name: document.getElementById('editAreaName').value,
    customer: document.getElementById('editCustomer').value,
    address: document.getElementById('editAddress').value,
    type: document.getElementById('editType').value,
    parking_code: document.getElementById('editCode').value
  };

  try {
    const res = await fetch(`${API_BASE}/area/1`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Failed to update area');

    document.getElementById('areaName').textContent = payload.area_name;
    document.getElementById('customerName').textContent = payload.customer;
    document.getElementById('areaAddress').textContent = payload.address;
    setAreaTypeBadge(payload.type);
    document.getElementById('parkingCode').textContent = payload.parking_code;
    closeModal('editAreaModal');
    showToast('Area information updated!');
  } catch {
    document.getElementById('areaName').textContent = payload.area_name;
    document.getElementById('customerName').textContent = payload.customer;
    document.getElementById('areaAddress').textContent = payload.address;
    setAreaTypeBadge(payload.type);
    document.getElementById('parkingCode').textContent = payload.parking_code;
    closeModal('editAreaModal');
    showToast('Area updated (demo mode)');
  }
}

async function loadPlots() {
  try {
    const res = await fetch(`${API_BASE}/plots`);
    if (res.ok) {
      plots = await res.json();
    }
  } catch {
    // Keep demo data
  }
  renderPlots();
  renderPlotMap();
  updateStats();
}

function renderPlots() {
  const tbody = document.getElementById('plotsBody');
  const filteredPlots = getFilteredPlots();
  tbody.innerHTML = filteredPlots.map((p) => {
    const i = plots.findIndex(plot => plot.id === p.id);
    const checked = selectedPlotIds.has(p.id) ? 'checked' : '';
    return `
    <tr>
      <td><input type="checkbox" ${checked} onchange="togglePlotSelection('${p.id}', this.checked)"/></td>
      <td>${p.id}</td>
      <td><strong>${p.number}</strong></td>
      <td><span class="status-badge status-${p.status.toLowerCase()}">${p.status}</span></td>
      <td>${p.vehicle || '—'}</td>
      <td>${p.checkin || '—'}</td>
      <td>${p.checkout || '—'}</td>
      <td>
        <button class="action-btn" onclick="editPlot(${i})">Edit</button>
        <button class="action-btn danger" onclick="deletePlot(${i})">Delete</button>
      </td>
    </tr>
  `;
  }).join('');

  document.getElementById('plotsEmptyState').hidden = filteredPlots.length > 0;
  document.getElementById('selectAllPlots').checked = filteredPlots.length > 0 && filteredPlots.every(plot => selectedPlotIds.has(plot.id));
  document.getElementById('plotMapSummary').textContent = `${filteredPlots.length} visible plots`;
}

function resetPlotForm() {
  editingPlotIndex = null;
  document.getElementById('plotNumber').value = '';
  document.getElementById('plotStatus').value = 'Available';
  document.getElementById('plotVehicle').value = '';
  document.querySelector('#addPlotModal .modal-header h3').textContent = 'Add Parking Plot';
  document.querySelector('#addPlotModal .btn-save').textContent = 'Add Plot';
}

async function addPlot() {
  const num = document.getElementById('plotNumber').value.trim();
  if (!num) {
    showToast('Enter plot number');
    return;
  }

  const payload = {
    number: num,
    status: document.getElementById('plotStatus').value,
    vehicle: document.getElementById('plotVehicle').value.trim(),
    floor: visualFloorFilter
  };

  if (editingPlotIndex !== null) {
    await updatePlot(payload);
    return;
  }

  const newPlot = {
    id: 'P' + String(plots.length + 1).padStart(3, '0'),
    number: payload.number,
    floor: payload.floor,
    status: payload.status,
    vehicle: payload.vehicle || '—',
    checkin: '—',
    checkout: '—'
  };

  try {
    const res = await fetch(`${API_BASE}/plots`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      newPlot.id = data.id || newPlot.id;
      newPlot.db_id = data.db_id;
    } else {
      throw new Error('Failed to add plot');
    }
  } catch {
    // Demo mode only
  }

  plots.push(newPlot);
  renderPlots();
  renderPlotMap();
  updateStats();
  closeModal('addPlotModal');
  showToast('Plot added successfully');
}

async function updatePlot(payload) {
  const plot = plots[editingPlotIndex];
  const updatedPlot = {
    ...plot,
    number: payload.number,
    floor: payload.floor || plot.floor,
    status: payload.status,
    vehicle: payload.vehicle || '—'
  };

  try {
    if (plot.db_id) {
      const res = await fetch(`${API_BASE}/plots/${plot.db_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to update plot');
    }
  } catch {
    // Fall back to demo update
  }

  plots[editingPlotIndex] = updatedPlot;
  renderPlots();
  renderPlotMap();
  updateStats();
  closeModal('addPlotModal');
  showToast('Plot updated');
}

async function deletePlot(i) {
  const plot = plots[i];

  try {
    if (plot.db_id) {
      const res = await fetch(`${API_BASE}/plots/${plot.db_id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error('Failed to delete plot');
    }
  } catch {
    // Fall back to demo delete
  }

  plots.splice(i, 1);
  selectedPlotIds.delete(plot.id);
  renderPlots();
  renderPlotMap();
  updateStats();
  showToast('Plot removed');
}

function editPlot(i) {
  const p = plots[i];
  editingPlotIndex = i;
  document.getElementById('plotNumber').value = p.number;
  document.getElementById('plotStatus').value = p.status;
  document.getElementById('plotVehicle').value = p.vehicle === '—' ? '' : p.vehicle;
  document.querySelector('#addPlotModal .modal-header h3').textContent = 'Edit Parking Plot';
  document.querySelector('#addPlotModal .btn-save').textContent = 'Save Changes';
  openModal('addPlotModal');
}

async function loadViolations() {
  try {
    const res = await fetch(`${API_BASE}/violations`);
    if (res.ok) violations = await res.json();
  } catch {
    // Keep demo data
  }
  renderViolations();
}

function renderViolations() {
  const tbody = document.getElementById('violationsBody');
  tbody.innerHTML = violations.map(v => `
    <tr>
      <td>${v.id}</td>
      <td><strong>${v.vehicle}</strong></td>
      <td>${v.type}</td>
      <td>${v.date}</td>
      <td><strong>${v.fine}</strong></td>
      <td><span class="status-badge status-${v.status.toLowerCase()}">${v.status}</span></td>
    </tr>
  `).join('');
}

function renderPlotMap() {
  const plotMap = document.getElementById('plotMap');
  if (!plotMap) return;
  const floorFilteredPlots = plots.filter(plot => plot.floor === visualFloorFilter);
  const midpoint = Math.ceil(floorFilteredPlots.length / 2);
  plotMap.innerHTML = `
    <div class="lot-stage">
      <div class="lot-column left">
        ${floorFilteredPlots.slice(0, midpoint).map(plot => `
          <button class="plot-slot angled-left plot-slot-${plot.status.toLowerCase()} ${currentPlotQuickViewId === plot.id ? 'selected' : ''}" type="button" onclick="openPlotQuickView('${plot.id}')">
            <span class="plot-slot-id">${plot.number}</span>
            <span class="plot-slot-meta">${plot.vehicle && plot.vehicle !== '—' ? plot.vehicle : 'Empty'}</span>
          </button>
        `).join('')}
      </div>
      <div class="lot-lane">
        <div class="lane-label">${visualFloorFilter}</div>
        <div class="lane-car">🚗</div>
      </div>
      <div class="lot-column right">
        ${floorFilteredPlots.slice(midpoint).map(plot => `
          <button class="plot-slot angled-right plot-slot-${plot.status.toLowerCase()} ${currentPlotQuickViewId === plot.id ? 'selected' : ''}" type="button" onclick="openPlotQuickView('${plot.id}')">
            <span class="plot-slot-id">${plot.number}</span>
            <span class="plot-slot-meta">${plot.vehicle && plot.vehicle !== '—' ? plot.vehicle : 'Empty'}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function setVisualFloorFilter(floorName, button) {
  visualFloorFilter = floorName;
  document.querySelectorAll('.floor-chip').forEach(chip => chip.classList.remove('active'));
  button?.classList.add('active');
  const floorSelect = document.getElementById('plotFloorFilter');
  if (floorSelect) floorSelect.value = floorName;
  applyPlotFilters();
}

function openPlotQuickView(plotId) {
  currentPlotQuickViewId = plotId;
  const plot = plots.find(item => item.id === plotId);
  const quickView = document.getElementById('plotQuickView');
  if (!plot || !quickView) return;
  const photoMarkup = quickViewPhotoUrl
    ? `<img src="${quickViewPhotoUrl}" alt="Selected vehicle preview"/>`
    : `<img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80" alt="Vehicle preview"/>`;

  quickView.innerHTML = `
    <div class="quickview-card">
      <div class="quickview-head">
        <div>
          <span class="quickview-kicker">Quick View</span>
          <h3>${plot.number}</h3>
        </div>
        <span class="status-badge status-${plot.status.toLowerCase()}">${plot.status}</span>
      </div>
      <div class="quickview-photo">
        ${photoMarkup}
      </div>
      <div class="quickview-upload">
        <label class="upload-photo-btn" for="slotPhotoUpload">Select Photo From Device</label>
      </div>
      <div class="quickview-grid">
        <div><span>Plot ID</span><strong>${plot.id}</strong></div>
        <div><span>Vehicle</span><strong>${plot.vehicle || '—'}</strong></div>
        <div><span>Check-in</span><strong>${plot.checkin || '—'}</strong></div>
        <div><span>Check-out</span><strong>${plot.checkout || '—'}</strong></div>
      </div>
      <div class="quickview-foot">
        <button class="edit-btn" type="button" onclick="editPlot(${plots.findIndex(item => item.id === plot.id)})">Edit Slot</button>
        <button class="edit-btn" type="button" onclick="showToast('Gate camera snapshot refreshed')">Refresh Camera</button>
      </div>
    </div>
  `;
  renderPlotMap();
}

function handleQuickViewPhotoUpload(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  quickViewPhotoUrl = URL.createObjectURL(file);
  if (currentPlotQuickViewId) {
    openPlotQuickView(currentPlotQuickViewId);
  } else {
    const quickView = document.getElementById('plotQuickView');
    if (quickView) {
      quickView.innerHTML = `
        <div class="quickview-card">
          <div class="quickview-head">
            <div>
              <span class="quickview-kicker">Quick View</span>
              <h3>Uploaded Photo</h3>
            </div>
          </div>
          <div class="quickview-photo">
            <img src="${quickViewPhotoUrl}" alt="Uploaded slot preview"/>
          </div>
          <p class="setting-copy">Photo selected from device. Choose a slot to attach this preview.</p>
        </div>
      `;
    }
  }
  showToast('Photo selected from device');
}

function applyPlotFilters() {
  renderPlots();
  renderPlotMap();
}

function togglePlotSelection(plotId, checked) {
  if (checked) selectedPlotIds.add(plotId);
  else selectedPlotIds.delete(plotId);
  renderPlots();
}

function toggleSelectAllPlots(checked) {
  const filteredPlots = getFilteredPlots();
  filteredPlots.forEach(plot => {
    if (checked) selectedPlotIds.add(plot.id);
    else selectedPlotIds.delete(plot.id);
  });
  renderPlots();
}

function bulkIssueFines() {
  const count = getPlotSelectionCount();
  if (!count) {
    showToast('Select plots to issue fines');
    return;
  }
  showToast(`Issued ${count} bulk fine notice${count > 1 ? 's' : ''}`);
}

function bulkClearStatus() {
  const count = getPlotSelectionCount();
  if (!count) {
    showToast('Select plots to clear');
    return;
  }
  plots = plots.map(plot => selectedPlotIds.has(plot.id) ? { ...plot, status: 'Available', vehicle: '—', checkin: '—', checkout: '—' } : plot);
  selectedPlotIds.clear();
  renderPlots();
  renderPlotMap();
  updateStats();
  showToast(`Cleared ${count} selected plot${count > 1 ? 's' : ''}`);
}

async function addViolation() {
  const vehicle = document.getElementById('violVehicle').value.trim();
  const fineValue = document.getElementById('violFine').value || 100;
  if (!vehicle) {
    showToast('Enter vehicle number');
    return;
  }

  const payload = {
    vehicle,
    type: document.getElementById('violType').value,
    fine: fineValue
  };

  const v = {
    id: 'V' + String(violations.length + 1).padStart(3, '0'),
    vehicle,
    type: payload.type,
    date: new Date().toISOString().slice(0, 10),
    fine: '$' + fineValue,
    status: 'Pending'
  };

  try {
    const res = await fetch(`${API_BASE}/violations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const data = await res.json();
      v.id = data.id || v.id;
      v.db_id = data.db_id;
    } else {
      throw new Error('Failed to add violation');
    }
  } catch {
    // Demo mode only
  }

  violations.unshift(v);
  renderViolations();
  closeModal('addViolationModal');
  document.getElementById('violVehicle').value = '';
  document.getElementById('violFine').value = '';
  showToast('Violation reported');
}

async function loadRevenue() {
  try {
    const res = await fetch(`${API_BASE}/revenue`);
    if (!res.ok) throw new Error('Failed to load revenue');

    const d = await res.json();
    document.getElementById('totalSales').textContent = '$' + Number(d.total_sales || 0).toLocaleString();
    document.getElementById('totalExpenses').textContent = '$' + Number(d.expenses || 0).toLocaleString();
    document.getElementById('netRevenue').textContent = '$' + Number(d.revenue || 0).toLocaleString();
    document.getElementById('ecoSales').textContent = '$' + Number(d.total_sales || 0).toLocaleString();
    document.getElementById('ecoExpenses').textContent = '$' + Number(d.expenses || 0).toLocaleString();
    document.getElementById('ecoRevenue').textContent = '$' + Number(d.revenue || 0).toLocaleString();
  } catch {
    showToast('Using demo revenue data');
  }
}

async function loadStats() {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    if (!res.ok) throw new Error('Failed to load stats');

    const stats = await res.json();
    const totalPlots = Number(stats.total_plots || plots.length || 0);
    const occupied = Number(stats.occupied || 0);
    const available = Number(stats.available || 0);
    const pendingViolations = Number(stats.pending_violations || 0);

    document.getElementById('totalRented').textContent = totalPlots.toLocaleString();
    document.getElementById('permittedCar').textContent = available.toLocaleString();
    document.getElementById('checkinCount').textContent = occupied.toLocaleString();
    document.getElementById('checkoutCount').textContent = (pendingViolations + weeklyPendingTasks).toLocaleString();
  } catch {
    document.getElementById('totalRented').textContent = plots.length.toLocaleString();
    document.getElementById('permittedCar').textContent = plots.filter(p => p.status === 'Available').length.toLocaleString();
    document.getElementById('checkinCount').textContent = plots.filter(p => p.status === 'Occupied').length.toLocaleString();
    document.getElementById('checkoutCount').textContent = (violations.filter(v => v.status === 'Pending').length + weeklyPendingTasks).toLocaleString();
  }
}

function updateStats() {
  const occupied = plots.filter(p => p.status === 'Occupied').length;
  const available = plots.filter(p => p.status === 'Available').length;
  document.getElementById('rentedCount').textContent = occupied;
  document.getElementById('remainingCount').textContent = available;
  document.getElementById('donutTotal').textContent = plots.length;
  document.getElementById('totalRented').textContent = plots.length.toLocaleString();
  document.getElementById('permittedCar').textContent = available.toLocaleString();
  document.getElementById('checkinCount').textContent = occupied.toLocaleString();
  document.getElementById('checkoutCount').textContent = (violations.filter(v => v.status === 'Pending').length + weeklyPendingTasks).toLocaleString();

  donutChartInstance?.destroy();
  initDonutChart(occupied, available);
}

function initDonutChart(rented = 250, remaining = 102) {
  const ctx = document.getElementById('donutChart').getContext('2d');
  donutChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [rented, remaining],
        backgroundColor: ['#2abfbf', '#e8eaf0'],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      cutout: '72%',
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      animation: { animateRotate: true, duration: 800 }
    }
  });
}

function initFinesChart() {
  const ctx = document.getElementById('finesChart').getContext('2d');
  const counts = {
    approved: violations.filter(v => v.status === 'Approved').length,
    pending: violations.filter(v => v.status === 'Pending').length,
    rejected: violations.filter(v => v.status === 'Rejected').length
  };

  finesChartInstance?.destroy();
  finesChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Approved', 'Pending', 'Rejected'],
      datasets: [{
        data: [counts.approved, counts.pending, counts.rejected],
        backgroundColor: ['#3dba7e', '#f5a623', '#e05252'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '65%',
      plugins: { legend: { display: false } },
      animation: { duration: 800 }
    }
  });
}

function initRevenueChart() {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const sales = [80, 95, 60, 110, 90, 75, 120, 85, 100, 70, 95, 80];
  const expenses = [40, 50, 35, 60, 45, 38, 70, 42, 55, 36, 50, 45];
  revenueChartInstance?.destroy();
  revenueChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Sales', data: sales, backgroundColor: '#4a90e2', borderRadius: 5, barPercentage: 0.5 },
        { label: 'Expenses', data: expenses, backgroundColor: '#3dba7e', borderRadius: 5, barPercentage: 0.5 }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: '#f0f2f5' }, ticks: { color: '#aaa', font: { size: 11 } } },
        x: { grid: { display: false }, ticks: { color: '#aaa', font: { size: 11 } } }
      }
    }
  });
}

function initEconomyChart() {
  const ctx = document.getElementById('economyChart');
  if (!ctx) return;

  economyChartInstance?.destroy();
  economyChartInstance = new Chart(ctx.getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        { label: 'Revenue', data: [20000, 24000, 18000, 29500, 26000, 31000], borderColor: '#3dba7e', fill: false, tension: 0.4 },
        { label: 'Expenses', data: [15000, 18000, 14000, 20500, 19000, 22000], borderColor: '#f5a623', fill: false, tension: 0.4 }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: false } }
    }
  });
}

function initActivityFeed() {
  const feed = document.getElementById('activityFeed');
  if (!feed) return;

  const renderFeed = () => {
    feed.innerHTML = activityItems.map((item, index) => `
      <div class="activity-item ${index === 0 ? 'fresh' : ''}">
        <span class="activity-dot"></span>
        <span>${item}</span>
      </div>
    `).join('');
  };

  renderFeed();
  clearInterval(activityFeedTimer);
  activityFeedTimer = setInterval(() => {
    const next = activityItems.pop();
    activityItems.unshift(next);
    renderFeed();
  }, 3500);
}

function toggleTheme() {
  document.body.classList.toggle('theme-dark');
  const isDark = document.body.classList.contains('theme-dark');
  localStorage.setItem('parkware-theme', isDark ? 'dark' : 'light');
  showToast(isDark ? 'Night mode enabled' : 'Day mode enabled');
}

function applySavedTheme() {
  const saved = localStorage.getItem('parkware-theme');
  if (saved === 'dark') {
    document.body.classList.add('theme-dark');
  }
}

function generateReport() {
  const button = document.getElementById('generateReportBtn');
  const spinner = document.getElementById('reportSpinner');
  const label = document.getElementById('reportBtnText');
  if (!button || !spinner || !label) return;

  button.disabled = true;
  spinner.classList.add('spinning');
  label.textContent = 'Generating...';

  setTimeout(() => {
    window.print();

    button.disabled = false;
    spinner.classList.remove('spinning');
    label.textContent = 'Generate PDF Report';
    showToast('Print dialog opened for PDF export');
  }, 1400);
}

document.getElementById('searchInput').addEventListener('input', function() {
  renderPlots();
  renderPlotMap();
  renderViolations();
});

window.addEventListener('DOMContentLoaded', async () => {
  applySavedTheme();
  setActiveSidebar(document.querySelector('.nav-child.active'));
  updateTopContext('Parking Areas');
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  initDonutChart();
  initFinesChart();
  initRevenueChart();
  initActivityFeed();
  renderPlots();
  renderPlotMap();
  renderViolations();
  updateStats();
  await Promise.all([loadAreaInfo(), loadPlots(), loadViolations(), loadRevenue(), loadStats()]);
  initFinesChart();
  updateStats();
});
