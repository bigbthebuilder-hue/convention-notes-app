const DB_NAME = "eternal-happiness-notes-v1";
const DB_VERSION = 1;
const NOTE_STORE = "notes";
const META_STORE = "meta";

const program = {
  title: "Eternal Happiness",
  subtitle: "2026 Convention of Jehovah's Witnesses",
  days: [
    {
      id: "friday",
      label: "Friday",
      theme: "Happy are those conscious of their spiritual need",
      scripture: "Matthew 5:3",
      sessions: [
        {
          id: "friday-morning",
          label: "Morning",
          items: [
            item("fri-0920", "9:20", "Music-Video Presentation", "Program Part"),
            item("fri-0930", "9:30", "Song No. 160 and Prayer", "Song / Prayer"),
            item("fri-0940", "9:40", "CHAIRMAN'S ADDRESS: Abundant Happiness Forever - Is It Realistic?", "Chairman's Address", "Psalm 16:11; 100:2"),
            item("fri-1010", "10:10", "FEATURE BIBLE DRAMA: The Good News According to Jesus: Episode 4 - This Is Why I Have Come", "Feature Bible Drama", "Matthew 4:23-25; 8:1-4, 14-17; 9:1-17; 12:1-21; Mark 1:21-3:19; Luke 4:31-44; 5:12-6:16; John 5:1-47"),
            item("fri-1105", "11:05", "Song No. 17 and Announcements", "Song / Announcements"),
            symposium("fri-1115", "11:15", "Messianic Prophecy Fulfilled!", [
              item("fri-1115-1", "Part 1", "He Himself Took Our Sicknesses", "Symposium Part", "Matthew 8:16, 17; Psalm 32:1, 2; Isaiah 53:4, 5"),
              item("fri-1115-2", "Part 2", "He Will Not Quarrel", "Symposium Part", "Matthew 12:15-21; Isaiah 42:1-4"),
              item("fri-1115-3", "Part 3", "Without an Illustration He Would Not Speak", "Symposium Part", "Matthew 13:34, 35; Psalm 78:2")
            ]),
            item("fri-1210", "12:10", "Song No. 14 and Intermission", "Song / Intermission")
          ]
        },
        {
          id: "friday-afternoon",
          label: "Afternoon",
          items: [
            item("fri-1335", "1:35", "Music-Video Presentation", "Program Part"),
            item("fri-1345", "1:45", "Song No. 23", "Song"),
            item("fri-1350", "1:50", "What Did Jesus Teach Regarding the Sabbath?", "Talk", "Matthew 12:1-14; John 5:1-17"),
            symposium("fri-1410", "2:10", "Imitate Those Who Ministered to Jesus!", [
              item("fri-1410-1", "Part 1", "The Apostles", "Symposium Part", "Luke 6:13, 15, 16"),
              item("fri-1410-2", "Part 2", "Many Women", "Symposium Part", "Matthew 27:55; Mark 15:40; Luke 8:1-3")
            ]),
            item("fri-1450", "2:50", "Song No. 76 and Announcements", "Song / Announcements"),
            item("fri-1500", "3:00", "Happy Are Those Who Wash Their Robes", "Talk", "Revelation 7:9, 10, 13-15; 22:14; John 5:24-29"),
            item("fri-1530", "3:30", "Song No. 155 and Closing Prayer", "Song / Prayer")
          ]
        }
      ]
    },
    {
      id: "saturday",
      label: "Saturday",
      theme: "There is more happiness in giving than there is in receiving",
      scripture: "Acts 20:35",
      sessions: [
        {
          id: "saturday-morning",
          label: "Morning",
          items: [
            item("sat-0920", "9:20", "Music-Video Presentation", "Program Part"),
            item("sat-0930", "9:30", "Song No. 111 and Prayer", "Song / Prayer"),
            item("sat-0940", "9:40", "He Opened His Mouth and Began Teaching Them", "Talk", "Matthew 5:1, 2"),
            item("sat-0950", "9:50", "FEATURE BIBLE DRAMA: The Good News According to Jesus: Episode 5 - Astounded at His Way of Teaching", "Feature Bible Drama", "Matthew 5:3-7:29; Luke 6:17-49"),
            item("sat-1025", "10:25", "Song No. 89 and Announcements", "Song / Announcements"),
            item("sat-1035", "10:35", "What Can Prevent Us From Being Happy?", "Talk", "Luke 6:24-26"),
            item("sat-1050", "10:50", "Can You Discern the Principle Behind the Law?", "Talk", "Matthew 5:17-48"),
            symposium("sat-1115", "11:15", "Lessons From the Land of Jesus", [
              item("sat-1115-1", "Part 1", "Salt and Light", "Symposium Part", "Matthew 5:13-16"),
              item("sat-1115-2", "Part 2", "Plants and Animals", "Symposium Part", "Genesis 1:28, 29; Matthew 6:19, 26, 28; 7:6, 10, 15, 16")
            ]),
            item("sat-1140", "11:40", "BAPTISM: Your Father Who Looks On in Secret Will Repay You", "Baptism", "Matthew 6:6"),
            item("sat-1210", "12:10", "Song No. 51 and Intermission", "Song / Intermission")
          ]
        },
        {
          id: "saturday-afternoon",
          label: "Afternoon",
          items: [
            item("sat-1335", "1:35", "Music-Video Presentation", "Program Part"),
            item("sat-1345", "1:45", "Song No. 125", "Song"),
            symposium("sat-1350", "1:50", "Happy Are . . .", [
              item("sat-1350-1", "Part 1", "Those Conscious of Their Spiritual Need", "Symposium Part", "Matthew 5:3"),
              item("sat-1350-2", "Part 2", "Those Who Mourn", "Symposium Part", "Matthew 5:4"),
              item("sat-1350-3", "Part 3", "The Mild-Tempered", "Symposium Part", "Matthew 5:5"),
              item("sat-1350-4", "Part 4", "Those Hungering and Thirsting for Righteousness", "Symposium Part", "Matthew 5:6"),
              item("sat-1350-5", "Part 5", "The Merciful", "Symposium Part", "Matthew 5:7"),
              item("sat-1350-6", "Part 6", "The Pure in Heart", "Symposium Part", "Matthew 5:8"),
              item("sat-1350-7", "Part 7", "The Peacemakers", "Symposium Part", "Matthew 5:9"),
              item("sat-1350-8", "Part 8", "Those Who Have Been Persecuted for Righteousness' Sake", "Symposium Part", "Matthew 5:10"),
              item("sat-1350-9", "Part 9", "You When People Reproach You", "Symposium Part", "Matthew 5:11, 12")
            ]),
            item("sat-1520", "3:20", "Song No. 81 and Announcements", "Song / Announcements"),
            item("sat-1530", "3:30", "Why Are You Anxious?", "Talk", "Matthew 6:19-33"),
            item("sat-1555", "3:55", "Go In Through the Narrow Gate", "Talk", "Matthew 7:1-5, 12-14, 16-18, 24-27"),
            item("sat-1630", "4:30", "Song No. 21 and Closing Prayer", "Song / Prayer")
          ]
        }
      ]
    },
    {
      id: "sunday",
      label: "Sunday",
      theme: "Happy are your eyes because they see and your ears because they hear",
      scripture: "Matthew 13:16",
      sessions: [
        {
          id: "sunday-morning",
          label: "Morning",
          items: [
            item("sun-0920", "9:20", "Music-Video Presentation", "Program Part"),
            item("sun-0930", "9:30", "Song No. 68 and Prayer", "Song / Prayer"),
            symposium("sun-0940", "9:40", "Applying Lessons From Jesus' Illustrations", [
              item("sun-0940-1", "Part 1", "Four Types of Soil", "Symposium Part", "Matthew 13:18-23"),
              item("sun-0940-2", "Part 2", "Wheat and Weeds", "Symposium Part", "Matthew 13:24-30"),
              item("sun-0940-3", "Part 3", "Mustard Grain", "Symposium Part", "Matthew 13:31, 32"),
              item("sun-0940-4", "Part 4", "Leaven", "Symposium Part", "Matthew 13:33"),
              item("sun-0940-5", "Part 5", "Dragnet", "Symposium Part", "Matthew 13:47-50")
            ]),
            item("sun-1100", "11:00", "Song No. 64 and Announcements", "Song / Announcements"),
            item("sun-1110", "11:10", "PUBLIC BIBLE DISCOURSE: Have You Discovered the Treasure?", "Public Bible Discourse", "Matthew 13:44-46"),
            item("sun-1140", "11:40", "Summary of The Watchtower", "Watchtower Summary"),
            item("sun-1210", "12:10", "Song No. 140 and Intermission", "Song / Intermission")
          ]
        },
        {
          id: "sunday-afternoon",
          label: "Afternoon",
          items: [
            item("sun-1335", "1:35", "Music-Video Presentation", "Program Part"),
            item("sun-1345", "1:45", "Song No. 108", "Song"),
            item("sun-1350", "1:50", "FEATURE BIBLE DRAMA: The Good News According to Jesus: Episode 6 - Are You the Coming One?", "Feature Bible Drama", "Matthew 8:5-13; 11:2-13:53; Mark 3:19-4:34; Luke 7:1-8:21"),
            item("sun-1435", "2:35", "Song No. 120 and Announcements", "Song / Announcements"),
            item("sun-1445", "2:45", "What Did You Learn?", "Review"),
            item("sun-1455", "2:55", "Happy Are Your Eyes Because They See", "Talk", "Matthew 7:1-5; 13:16, 17; Luke 6:46-49; 10:21; John 17:6; James 1:22-25"),
            item("sun-1545", "3:45", "Song No. 163 and Closing Prayer", "Song / Prayer")
          ]
        }
      ]
    }
  ]
};

function item(id, time, title, type, scriptures = "") {
  return { kind: "item", id, time, title, type, scriptures };
}
function symposium(id, time, title, parts) {
  return { kind: "symposium", id, time, title, type: "Symposium", parts };
}

let db;
let notes = {};
let activeTab = "home";
let saveTimers = new Map();

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("online", updateConnectionPill);
window.addEventListener("offline", updateConnectionPill);

async function init() {
  registerServiceWorker();
  db = await openDb();
  notes = await loadAllNotes();
  activeTab = (await getMeta("activeTab")) || "home";
  setupTabs();
  updateConnectionPill();
  render(activeTab);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(NOTE_STORE)) database.createObjectStore(NOTE_STORE, { keyPath: "id" });
      if (!database.objectStoreNames.contains(META_STORE)) database.createObjectStore(META_STORE, { keyPath: "key" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function tx(store, mode = "readonly") {
  return db.transaction(store, mode).objectStore(store);
}

function loadAllNotes() {
  return new Promise(resolve => {
    const request = tx(NOTE_STORE).getAll();
    request.onsuccess = () => {
      const out = {};
      request.result.forEach(row => out[row.id] = row);
      resolve(out);
    };
    request.onerror = () => resolve({});
  });
}

function saveNote(id, text) {
  const record = {
    id,
    text,
    updatedAt: new Date().toISOString()
  };
  notes[id] = record;
  return new Promise(resolve => {
    const request = tx(NOTE_STORE, "readwrite").put(record);
    request.onsuccess = () => resolve(true);
    request.onerror = () => resolve(false);
  });
}

function setMeta(key, value) {
  return new Promise(resolve => {
    const request = tx(META_STORE, "readwrite").put({ key, value });
    request.onsuccess = () => resolve(true);
    request.onerror = () => resolve(false);
  });
}

function getMeta(key) {
  return new Promise(resolve => {
    const request = tx(META_STORE).get(key);
    request.onsuccess = () => resolve(request.result ? request.result.value : null);
    request.onerror = () => resolve(null);
  });
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => render(btn.dataset.tab));
  });
}

function render(tab) {
  activeTab = tab;
  setMeta("activeTab", tab);
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tab));
  if (["friday", "saturday", "sunday"].includes(tab)) renderDay(tab);
  else if (tab === "review") renderReview();
  else if (tab === "backup") renderBackup();
  else renderHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const bannerImages = {
  home: "./assets/home-cover.jpg",
  friday: "./assets/friday-banner.jpg",
  saturday: "./assets/saturday-banner.jpg",
  sunday: "./assets/sunday-banner.jpg",
  review: "./assets/review-banner.jpg",
  backup: "./assets/backup-banner.jpg"
};


function renderPlainImageBanner(src, extraClass = "") {
  return `
    <section class="art-banner plain-image-banner ${escapeAttr(extraClass)}">
      <img src="${escapeAttr(src)}" alt="" loading="eager" />
    </section>
  `;
}

function renderArtBanner(src, eyebrow, title, text = "", extraClass = "") {
  return `
    <section class="art-banner ${escapeAttr(extraClass)}">
      <img src="${escapeAttr(src)}" alt="" loading="lazy" />
      <div class="art-shade"></div>
      <div class="art-copy">
        <div class="eyebrow">${escapeHtml(eyebrow)}</div>
        <h2>${escapeHtml(title)}</h2>
        ${text ? `<p>${escapeHtml(text)}</p>` : ""}
      </div>
    </section>
  `;
}

function renderHome() {
  const host = document.getElementById("screenHost");
  const total = getAllNoteTargets().length;
  const filled = getFilledTargets().length;
  const last = getLastEditedTarget();
  host.innerHTML = `
    ${renderPlainImageBanner(bannerImages.home, "home-art")}
    <section class="card">
      <h2>Offline notebook</h2>
      <p>This app saves notes on this device only. Once installed and opened with internet one time, it can be reopened without internet.</p>
      <div class="stats-grid">
        <div class="stat"><strong>${filled}</strong><span>Filled sections</span></div>
        <div class="stat"><strong>${total}</strong><span>Total note boxes</span></div>
        <div class="stat"><strong>${Math.round((filled / total) * 100) || 0}%</strong><span>Progress</span></div>
      </div>
      <div class="actions">
        <button class="primary-btn" type="button" onclick="goToLast()">Continue Last Note</button>
        <button class="secondary-btn" type="button" onclick="render('friday')">Start Program</button>
      </div>
      ${last ? `<p class="notice">Last edited: ${escapeHtml(last.day)} ${escapeHtml(last.session)} - ${escapeHtml(last.title)}</p>` : `<p class="notice warning">No notes yet. Choose a day and start typing.</p>`}
    </section>

    <section class="card">
      <h2>Program days</h2>
      <div class="actions">
        <button class="secondary-btn" type="button" onclick="render('friday')">Friday</button>
        <button class="secondary-btn" type="button" onclick="render('saturday')">Saturday</button>
        <button class="secondary-btn" type="button" onclick="render('sunday')">Sunday</button>
        <button class="secondary-btn" type="button" onclick="render('review')">Review Notes</button>
      </div>
    </section>
  `;
}

function goToLast() {
  const last = getLastEditedTarget();
  if (!last) return render("friday");
  render(last.dayId);
  setTimeout(() => {
    const el = document.querySelector(`[data-note-id="${CSS.escape(last.id)}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus();
    }
  }, 150);
}

function renderDay(dayId) {
  const day = program.days.find(d => d.id === dayId);
  const host = document.getElementById("screenHost");
  host.innerHTML = `
    ${renderArtBanner(bannerImages[day.id], day.label, day.theme, day.scripture, "day-art")}
    <section class="day-title">
      <h2>${escapeHtml(day.label)}</h2>
      <p>"${escapeHtml(day.theme)}"<br>${escapeHtml(day.scripture)}</p>
    </section>
    ${day.sessions.map(session => renderSession(day, session)).join("")}
    ${renderDayReflection(day)}
  `;
  hydrateTextareas();
}

function renderDayReflection(day) {
  const reflection = { id: `${day.id}-reflection`, time: "Review", title: `${day.label} personal review`, type: "Day Review", scriptures: "" };
  const note = notes[reflection.id]?.text || "";
  return `
    <section class="reflection-card">
      ${renderArtBanner(bannerImages.review, `${day.label} Review`, "What do I want to remember?", "Use this box for thoughts to review later.", "mini-art")}
      <div class="note-wrap reflection-wrap">
        <textarea class="note-area reflection-area" data-note-id="${escapeAttr(reflection.id)}" data-day="${escapeAttr(day.id)}" placeholder="Type your end-of-day review notes here...">${escapeHtml(note)}</textarea>
        <div class="save-line">
          <span id="status-${escapeAttr(reflection.id)}">${notes[reflection.id]?.updatedAt ? "Saved " + formatTime(notes[reflection.id].updatedAt) : "Ready"}</span>
          <button class="mini-btn" type="button" onclick="clearOneNote('${escapeAttr(reflection.id)}')">Clear</button>
        </div>
      </div>
    </section>
  `;
}

function renderSession(day, session) {
  const targets = getTargetsForSession(day, session);
  const filled = targets.filter(t => (notes[t.id]?.text || "").trim()).length;
  return `
    <section class="session-card">
      <div class="session-header">
        <h3>${escapeHtml(session.label)}</h3>
        <span class="count">${filled}/${targets.length} filled</span>
      </div>
      ${session.items.map(entry => renderEntry(day, session, entry)).join("")}
    </section>
  `;
}

function renderEntry(day, session, entry) {
  if (entry.kind === "symposium") {
    return `
      <article class="talk-card symposium">
        <div class="talk-top">
          <div class="time">${escapeHtml(entry.time)}</div>
          <div>
            <div class="talk-type">Symposium</div>
            <h4 class="talk-title">${escapeHtml(entry.title)}</h4>
          </div>
        </div>
        <div class="group-label">Grouped symposium parts. Each part saves its own notes.</div>
        ${entry.parts.map(part => renderPart(day, session, entry, part)).join("")}
      </article>
    `;
  }
  return renderNoteCard(day, session, entry, null);
}

function renderPart(day, session, group, part) {
  const target = { ...part, groupTitle: group.title };
  return `<div class="part-card">${renderNoteCard(day, session, target, group, true)}</div>`;
}

function renderNoteCard(day, session, entry, group = null, isPart = false) {
  const note = notes[entry.id]?.text || "";
  return `
    <article class="${isPart ? "" : "talk-card"}">
      <div class="talk-top">
        <div class="time">${escapeHtml(entry.time)}</div>
        <div>
          <div class="talk-type">${escapeHtml(entry.type || "Program Part")}</div>
          <h4 class="talk-title">${escapeHtml(entry.title)}</h4>
          ${entry.scriptures ? `<div class="scriptures">${escapeHtml(entry.scriptures)}</div>` : ""}
        </div>
      </div>
      <div class="note-wrap">
        <textarea class="note-area" data-note-id="${escapeAttr(entry.id)}" data-day="${escapeAttr(day.id)}" placeholder="Type notes here...">${escapeHtml(note)}</textarea>
        <div class="save-line">
          <span id="status-${escapeAttr(entry.id)}">${notes[entry.id]?.updatedAt ? "Saved " + formatTime(notes[entry.id].updatedAt) : "Ready"}</span>
          <button class="mini-btn" type="button" onclick="clearOneNote('${escapeAttr(entry.id)}')">Clear</button>
        </div>
      </div>
    </article>
  `;
}

function hydrateTextareas() {
  document.querySelectorAll("textarea.note-area").forEach(area => {
    autoGrow(area);
    area.addEventListener("input", () => {
      autoGrow(area);
      queueSave(area.dataset.noteId, area.value);
    });
    area.addEventListener("blur", () => immediateSave(area.dataset.noteId, area.value));
  });
}

function queueSave(id, text) {
  const status = document.getElementById("status-" + id);
  if (status) status.textContent = "Saving...";
  if (saveTimers.has(id)) clearTimeout(saveTimers.get(id));
  saveTimers.set(id, setTimeout(() => immediateSave(id, text), 450));
}

async function immediateSave(id, text) {
  await saveNote(id, text);
  const status = document.getElementById("status-" + id);
  if (status) status.textContent = "Saved " + formatTime(new Date().toISOString());
}

async function clearOneNote(id) {
  if (!confirm("Clear this note box on this device?")) return;
  await saveNote(id, "");
  const area = document.querySelector(`[data-note-id="${CSS.escape(id)}"]`);
  if (area) {
    area.value = "";
    autoGrow(area);
  }
  const status = document.getElementById("status-" + id);
  if (status) status.textContent = "Cleared";
  showToast("Note cleared");
}

function autoGrow(el) {
  el.style.height = "auto";
  el.style.height = Math.max(120, el.scrollHeight) + "px";
}

function renderReview() {
  const host = document.getElementById("screenHost");
  host.innerHTML = `
    ${renderPlainImageBanner(bannerImages.review, "review-art")}
    <section class="card">
      <h2>Review notes</h2>
      <p>Search all saved notes on this device. Empty note boxes are hidden here.</p>
      <input id="reviewSearch" class="search-box" placeholder="Search notes, titles, scriptures..." autocomplete="off" />
      <div class="actions">
        <button class="secondary-btn" type="button" onclick="printReview()">Print / Save PDF</button>
        <button class="secondary-btn" type="button" onclick="copyAllNotes()">Copy All Notes</button>
      </div>
      <div id="reviewList" class="review-list"></div>
    </section>
  `;
  const input = document.getElementById("reviewSearch");
  input.addEventListener("input", () => fillReviewList(input.value));
  fillReviewList("");
}

function fillReviewList(query) {
  const list = document.getElementById("reviewList");
  const q = query.trim().toLowerCase();
  const rows = getFilledTargets().filter(t => {
    const hay = [t.day, t.session, t.time, t.type, t.groupTitle || "", t.title, t.scriptures || "", notes[t.id]?.text || ""].join(" ").toLowerCase();
    return !q || hay.includes(q);
  });
  if (!rows.length) {
    list.innerHTML = `<div class="review-item"><h3>No matching notes yet.</h3><div class="review-meta">Notes saved on this device will appear here.</div></div>`;
    return;
  }
  list.innerHTML = rows.map(t => `
    <article class="review-item">
      <h3>${escapeHtml(t.title)}</h3>
      <div class="review-meta">${escapeHtml(t.day)} ${escapeHtml(t.session)} · ${escapeHtml(t.time)} · ${escapeHtml(t.groupTitle || t.type)}</div>
      ${t.scriptures ? `<div class="scriptures">${escapeHtml(t.scriptures)}</div>` : ""}
      <div class="review-note">${escapeHtml(notes[t.id]?.text || "")}</div>
      <div style="margin-top:10px"><button class="mini-btn" type="button" onclick="jumpToNote('${escapeAttr(t.id)}')">Open</button></div>
    </article>
  `).join("");
}

function jumpToNote(id) {
  const target = getAllNoteTargets().find(t => t.id === id);
  if (!target) return;
  render(target.dayId);
  setTimeout(() => {
    const area = document.querySelector(`[data-note-id="${CSS.escape(id)}"]`);
    if (area) {
      area.scrollIntoView({ behavior: "smooth", block: "center" });
      area.focus();
    }
  }, 150);
}

function renderBackup() {
  const host = document.getElementById("screenHost");
  host.innerHTML = `
    ${renderArtBanner(bannerImages.backup, "Backup", "Keep your notes safe", "Export a backup from this device whenever you want.", "backup-art")}
    <section class="tool-card">
      <h2>Backup and export</h2>
      <p>Notes are saved locally on this device. Use these tools to make a backup or move notes to another device.</p>
      <div class="actions">
        <button class="primary-btn" type="button" onclick="exportBackup()">Export Backup File</button>
        <button class="secondary-btn" type="button" onclick="copyAllNotes()">Copy All Notes</button>
        <button class="secondary-btn" type="button" onclick="printReview()">Print / Save PDF</button>
        <button class="danger-btn" type="button" onclick="clearAllNotes()">Clear All Notes</button>
      </div>
    </section>
    <section class="tool-card">
      <h2>Import backup</h2>
      <p>Use this only if you exported a backup file from this same app.</p>
      <input class="file-input" type="file" accept="application/json,.json" onchange="importBackupFile(event)" />
    </section>
    <section class="tool-card">
      <h2>Offline check</h2>
      <p class="notice">Install/open this app while online first. Then turn off Wi-Fi/cellular and reopen it from the home-screen icon to confirm it loads offline.</p>
    </section>
  `;
}

function exportBackup() {
  const payload = {
    app: "Eternal Happiness Notes",
    version: 2,
    exportedAt: new Date().toISOString(),
    notes: Object.values(notes).filter(n => (n.text || "").trim())
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `eternal-happiness-notes-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Backup file exported");
}

async function importBackupFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!Array.isArray(data.notes)) throw new Error("Invalid backup file");
    if (!confirm(`Import ${data.notes.length} saved note sections? Existing matching sections will be replaced.`)) return;
    for (const n of data.notes) {
      if (n.id && typeof n.text === "string") await saveNote(n.id, n.text);
    }
    notes = await loadAllNotes();
    showToast("Backup imported");
    render("review");
  } catch (err) {
    alert("Could not import this backup file.");
  }
}

async function clearAllNotes() {
  if (!confirm("Clear ALL notes saved on this device? This cannot be undone unless you have an export backup.")) return;
  const store = tx(NOTE_STORE, "readwrite");
  store.clear();
  notes = {};
  showToast("All notes cleared");
  render("home");
}

function copyAllNotes() {
  const text = buildPlainTextNotes();
  if (!text.trim()) return alert("No notes to copy yet.");
  navigator.clipboard?.writeText(text).then(() => showToast("Notes copied"), () => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast("Notes copied");
  });
}

function printReview() {
  render("review");
  setTimeout(() => window.print(), 250);
}

function buildPlainTextNotes() {
  const rows = getFilledTargets();
  return rows.map(t => {
    const heading = [t.day, t.session, t.time, t.groupTitle || t.type, t.title].filter(Boolean).join(" - ");
    const scripture = t.scriptures ? `\nScriptures: ${t.scriptures}` : "";
    return `${heading}${scripture}\n\n${notes[t.id]?.text || ""}`;
  }).join("\n\n------------------------------\n\n");
}

function getAllNoteTargets() {
  const targets = [];
  program.days.forEach(day => {
    day.sessions.forEach(session => {
      getTargetsForSession(day, session).forEach(t => targets.push(t));
    });
    targets.push({ id: `${day.id}-reflection`, day: day.label, dayId: day.id, session: "Review", sessionId: `${day.id}-review`, time: "Review", type: "Day Review", title: `${day.label} personal review`, scriptures: "" });
  });
  return targets;
}

function getTargetsForSession(day, session) {
  const targets = [];
  session.items.forEach(entry => {
    if (entry.kind === "symposium") {
      entry.parts.forEach(part => targets.push({ ...part, day: day.label, dayId: day.id, session: session.label, sessionId: session.id, groupTitle: entry.title }));
    } else {
      targets.push({ ...entry, day: day.label, dayId: day.id, session: session.label, sessionId: session.id });
    }
  });
  return targets;
}

function getFilledTargets() {
  return getAllNoteTargets().filter(t => (notes[t.id]?.text || "").trim());
}

function getLastEditedTarget() {
  const filled = getFilledTargets()
    .map(t => ({ ...t, updatedAt: notes[t.id]?.updatedAt || "" }))
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  return filled[0] || null;
}

function updateConnectionPill() {
  const pill = document.getElementById("connectionPill");
  if (!pill) return;
  const online = navigator.onLine;
  pill.textContent = online ? "Online - notes still save locally" : "Offline - notes save locally";
  pill.classList.toggle("online", online);
  pill.classList.toggle("offline", !online);
}

function showToast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => el.classList.add("hidden"), 1800);
}

function formatTime(iso) {
  try {
    return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } catch {
    return "now";
  }
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}
function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}
