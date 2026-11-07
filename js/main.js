const WA = "6281234567890";
const NAV = [["#tentang", "Tentang"], ["#divisi", "Divisi"], ["#agenda", "Agenda"], ["#pengurus", "Pengurus"], ["#galeri", "Galeri"], ["#artikel", "Artikel"], ["#faq", "FAQ"]];

const STATS = [[250, "+", "Anggota aktif"], [60, "+", "Workshop terlaksana"], [35, "", "Proyek kolaborasi"], [12, "", "Penghargaan lomba"]];

const DIVISI = [
  ["📡", "IoT & Jaringan", "Sensor, MQTT, dan dashboard. Dari ESP32 sampai cloud."],
  ["🤖", "Robotik", "Line follower, lengan robot, hingga kontes robot nasional."],
  ["🔌", "Elektronika", "Desain PCB, solder, dan rangkaian analog-digital."],
  ["💻", "Software & Web", "Aplikasi, backend, dan antarmuka untuk proyek hardware."],
];

const AGENDA = [
  { tgl: "2026-11-14T09:00", judul: "Workshop ESP32 untuk Pemula", tempat: "Lab Elektronika, Gedung B", tag: "Workshop" },
  { tgl: "2026-11-28T13:00", judul: "Open Lab & Tukar Proyek", tempat: "Sekretariat KNM", tag: "Komunitas" },
  { tgl: "2026-12-12T08:00", judul: "Hackathon IoT 24 Jam", tempat: "Aula Utama", tag: "Kompetisi" },
  { tgl: "2026-12-20T10:00", judul: "Kopdar Akhir Tahun", tempat: "Taman Kota", tag: "Komunitas" },
];

const PROGRAM = [
  ["Q1", "Open Recruitment", "Penerimaan anggota baru dan orientasi alat."],
  ["Q2", "Workshop Series", "Seri pelatihan dasar sampai menengah tiap divisi."],
  ["Q3", "Project Sprint", "Tim kecil membangun prototipe selama 6 minggu."],
  ["Q4", "Expo & Hackathon", "Pameran karya dan kompetisi akhir tahun."],
];

const PENGURUS = [
  ["Rizky Pratama", "Ketua Umum"], ["Dewi Lestari", "Wakil Ketua"], ["Fajar Nugroho", "Sekretaris"], ["Siti Aminah", "Bendahara"],
  ["Bayu Setiawan", "Kadiv IoT"], ["Nadia Putri", "Kadiv Robotik"], ["Andi Wijaya", "Kadiv Elektronika"], ["Laras Ayu", "Kadiv Software"],
];

const GALERI = [
  { e: "🌡️", t: "Monitor Suhu Ruangan", c: "from-orange-400 to-rose-500" }, { e: "🦾", t: "Lengan Robot 4-DOF", c: "from-indigo-500 to-violet-600" },
  { e: "💡", t: "Smart Lamp", c: "from-amber-400 to-orange-500" }, { e: "🚗", t: "Robot Line Follower", c: "from-cyan-500 to-blue-600" },
  { e: "🌱", t: "Penyiram Tanaman Otomatis", c: "from-emerald-400 to-teal-600" }, { e: "📟", t: "Datalogger Cuaca", c: "from-sky-400 to-indigo-500" },
  { e: "🔐", t: "Kunci Pintu RFID", c: "from-fuchsia-500 to-purple-600" }, { e: "🛰️", t: "Tracker GPS Mini", c: "from-slate-600 to-slate-900" },
]; // tambah properti img: "img/nama.jpg" untuk memakai foto asli

const ARTIKEL = [
  { j: "Mengenal MQTT: Protokol Ringan untuk IoT", m: "5 menit baca", d: "12 Nov 2026", k: "IoT" },
  { j: "Panduan Memilih Mikrokontroler untuk Pemula", m: "7 menit baca", d: "3 Nov 2026", k: "Elektronika" },
  { j: "Cerita di Balik Juara 2 Kontes Robot Regional", m: "4 menit baca", d: "21 Okt 2026", k: "Komunitas" },
];

const FAQ = [
  ["Apakah harus anak teknik?", "Tidak. Semua jurusan dan umum boleh bergabung, pemula sangat diterima."],
  ["Berapa biaya keanggotaan?", "Gratis. Biaya hanya untuk komponen proyek pribadi atau acara tertentu."],
  ["Apakah perlu punya laptop dan alat sendiri?", "Laptop disarankan. Alat dasar bisa dipinjam dari inventaris komunitas."],
  ["Berapa sering kegiatan berlangsung?", "Minimal dua kali sebulan, berupa workshop, open lab, atau kopdar."],
];

const $ = (id) => document.getElementById(id);
const bln = (s) => new Date(s).toLocaleDateString("id-ID", { month: "short" });
const tglL = (s) => new Date(s).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const jam = (s) => new Date(s).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }).replace(".", ":");

// Navigasi
const links = (c) => NAV.map(([h, l]) => `<a href="${h}" class="${c}">${l}</a>`).join("");
$("menu").innerHTML = links("text-slate-600 transition hover:text-indigo-600");
$("mmenu").innerHTML = links("border-b border-slate-100 py-3 text-slate-600");
$("burger").onclick = () => { $("mmenu").classList.toggle("hidden"); $("mmenu").classList.toggle("flex"); };
$("mmenu").onclick = () => { $("mmenu").classList.add("hidden"); $("mmenu").classList.remove("flex"); };
const setNav = () => { const on = scrollY > 40; ["bg-white/90", "backdrop-blur", "shadow-sm"].forEach(c => $("nav").classList.toggle(c, on)); };
addEventListener("scroll", setNav); setNav();

// Render
$("stats").innerHTML = STATS.map(([n, s, l]) => `<div><p class="font-display text-4xl font-bold text-white"><span data-count="${n}">0</span>${s}</p><p class="mt-1 text-xs uppercase tracking-widest text-slate-400">${l}</p></div>`).join("");
$("divisiList").innerHTML = DIVISI.map(([e, t, d]) => `<div class="card reveal"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">${e}</div><h3 class="mt-4 font-bold text-slate-900">${t}</h3><p class="mt-2 text-sm">${d}</p></div>`).join("");

const now = Date.now();
const next = AGENDA.filter(a => new Date(a.tgl) > now).sort((a, b) => new Date(a.tgl) - new Date(b.tgl));
$("agendaList").innerHTML = next.map(a => `
  <div class="card reveal flex items-center gap-5">
    <div class="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-900 text-white"><span class="font-display text-2xl font-bold leading-none">${new Date(a.tgl).getDate()}</span><span class="text-[10px] uppercase tracking-widest text-cyan-300">${bln(a.tgl)}</span></div>
    <div><span class="chip">${a.tag}</span><h3 class="mt-1 font-bold text-slate-900">${a.judul}</h3><p class="text-xs text-slate-500">🕒 ${jam(a.tgl)} WIB · 📍 ${a.tempat}</p></div>
  </div>`).join("") || `<p>Belum ada agenda terdekat.</p>`;

function tick() {
  const a = next[0];
  if (!a) { $("countdown").innerHTML = `<p class="font-bold">Pantau terus, agenda baru segera hadir.</p>`; return; }
  const ms = Math.max(new Date(a.tgl) - Date.now(), 0), p = (n) => String(n).padStart(2, "0");
  const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
  $("countdown").innerHTML = `<p class="text-xs font-bold uppercase tracking-widest text-indigo-100">Menuju acara</p><h3 class="mt-1 font-display text-xl font-bold">${a.judul}</h3><p class="text-sm text-indigo-100">${tglL(a.tgl)}</p>
    <div class="mt-5 grid grid-cols-4 gap-2 text-center">${[[d, "Hari"], [h, "Jam"], [m, "Menit"], [s, "Detik"]].map(([v, l]) => `<div class="rounded-2xl bg-white/20 py-3"><p class="font-display text-2xl font-bold">${p(v)}</p><p class="text-[10px] uppercase tracking-wider">${l}</p></div>`).join("")}</div>`;
}
tick(); setInterval(tick, 1000);

$("programList").innerHTML = PROGRAM.map(([q, t, d]) => `<div class="reveal rounded-3xl border border-white/10 bg-white/5 p-6"><p class="font-display text-4xl font-bold text-cyan-300">${q}</p><h3 class="mt-3 font-bold text-white">${t}</h3><p class="mt-2 text-sm text-slate-400">${d}</p></div>`).join("");
$("pengurusList").innerHTML = PENGURUS.map(([n, r]) => `<div class="card reveal text-center"><div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 font-display text-xl font-bold text-white">${n.split(" ").map(x => x[0]).join("")}</div><h3 class="mt-3 text-sm font-bold text-slate-900">${n}</h3><p class="text-xs text-indigo-600">${r}</p></div>`).join("");
$("galeriList").innerHTML = GALERI.map(g => `<div class="reveal group relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br ${g.c}">${g.img ? `<img src="${g.img}" alt="${g.t}" class="absolute inset-0 h-full w-full object-cover" loading="lazy">` : `<div class="flex h-full items-center justify-center text-6xl transition group-hover:scale-125">${g.e}</div>`}<div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 p-4 text-sm font-semibold text-white">${g.t}</div></div>`).join("");
$("artikelList").innerHTML = ARTIKEL.map(a => `<article class="card reveal"><span class="chip">${a.k}</span><h3 class="mt-3 font-bold text-slate-900">${a.j}</h3><p class="mt-3 text-xs text-slate-500">${a.d} · ${a.m}</p><a href="#" onclick="return false" class="mt-4 inline-block text-sm font-bold text-indigo-600">Baca →</a></article>`).join("");
$("faqList").innerHTML = FAQ.map(([q, a]) => `<details class="card !p-5"><summary class="cursor-pointer font-bold text-slate-900">${q}</summary><p class="mt-3 text-sm">${a}</p></details>`).join("");
document.querySelector("select[name=divisi]").innerHTML = ["Pilih divisi minat", ...DIVISI.map(d => d[1])].map(o => `<option>${o}</option>`).join("");
$("yr").textContent = new Date().getFullYear();

// Form → WhatsApp
$("form").onsubmit = (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  const msg = `Halo admin KNM, saya ingin mendaftar.\nNama: ${f.nama}\nAsal: ${f.asal}\nDivisi: ${f.divisi}\nAlasan: ${f.alasan || "-"}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
};

// Animasi
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
const co = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  const el = en.target, end = +el.dataset.count, t0 = performance.now();
  const f = (t) => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f); co.unobserve(el);
}), { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach(el => co.observe(el));