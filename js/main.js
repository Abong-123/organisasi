const IMG = "src/assets/img/";
const WA = "6281234567890";
const NAV = [["#tentang", "Tentang"], ["#divisi", "Divisi"], ["#program", "Program"], ["#agenda", "Agenda"], ["#galeri", "Galeri"], ["#pengurus", "Pengurus"], ["#faq", "FAQ"]];

const STATS = [[250, "+", "Anggota aktif"], [60, "+", "Workshop terlaksana"], [35, "", "Proyek kolaborasi"], [12, "", "Penghargaan lomba"]];
const NILAI = ["Belajar lewat praktik langsung", "Terbuka untuk semua jurusan", "Kolaborasi lintas divisi", "Dokumentasi dan berbagi ilmu"];

const DIVISI = [
  ["mikrocontroller.jpg", "01", "IoT & Jaringan", "Sensor, protokol MQTT, dan dashboard monitoring dari ESP32 hingga cloud."],
  ["robot.jpg", "02", "Robotik", "Line follower, lengan robot, dan persiapan kontes robot tingkat nasional."],
  ["prototype1.jpg", "03", "Elektronika", "Desain PCB, penyolderan, serta rangkaian analog dan digital."],
  ["learning.jpg", "04", "Software & Web", "Aplikasi, backend, dan antarmuka untuk mendukung proyek perangkat keras."],
];

const PROGRAM = [
  ["session.jpg", "Q1", "Open Recruitment", "Penerimaan anggota baru dan orientasi penggunaan alat."],
  ["training.jpg", "Q2", "Workshop Series", "Pelatihan dasar hingga menengah di setiap divisi."],
  ["prototype2.jpg", "Q3", "Project Sprint", "Tim kecil membangun prototipe selama enam minggu."],
  ["hackaton.jpg", "Q4", "Expo & Hackathon", "Pameran karya dan kompetisi penutup tahun."],
];

const AGENDA = [
  { tgl: "2026-11-14T09:00", judul: "Workshop ESP32 untuk Pemula", tempat: "Lab Elektronika, Gedung B", tag: "Workshop" },
  { tgl: "2026-11-28T13:00", judul: "Open Lab & Tukar Proyek", tempat: "Sekretariat KNM", tag: "Komunitas" },
  { tgl: "2026-12-12T08:00", judul: "Hackathon IoT 24 Jam", tempat: "Aula Utama", tag: "Kompetisi" },
  { tgl: "2026-12-20T10:00", judul: "Kopdar Akhir Tahun", tempat: "Taman Kota", tag: "Komunitas" },
];

const GALERI = [
  { img: "hackaton.jpg", t: "Hackathon IoT", span: "col-span-2 row-span-2" },
  { img: "prototype1.jpg", t: "Prototipe Smart Device", span: "" },
  { img: "robot.jpg", t: "Robot Line Follower", span: "" },
  { img: "mentoring.jpg", t: "Sesi Mentoring", span: "col-span-2" },
  { img: "mikrocontroller.jpg", t: "Workshop Mikrokontroler", span: "" },
  { img: "training.jpg", t: "Pelatihan Anggota Baru", span: "" },
  { img: "prototype2.jpg", t: "Prototipe Tim Sprint", span: "col-span-2" },
  { img: "session.jpg", t: "Sesi Belajar Bersama", span: "" },
  { img: "learning.jpg", t: "Belajar Mandiri", span: "" },
];

const PENGURUS = [
  ["Rizky Pratama", "Ketua Umum"], ["Dewi Lestari", "Wakil Ketua"], ["Fajar Nugroho", "Sekretaris"], ["Siti Aminah", "Bendahara"],
  ["Bayu Setiawan", "Kepala Divisi IoT"], ["Nadia Putri", "Kepala Divisi Robotik"], ["Andi Wijaya", "Kepala Divisi Elektronika"], ["Laras Ayu", "Kepala Divisi Software"],
];

const TESTI = [
  ["Dari nol sampai bisa bikin sistem monitoring sendiri. Mentornya sabar dan materinya runtut.", "Anisa R.", "Mahasiswa Teknik Elektro"],
  ["Proyek tim di Project Sprint melatih saya bekerja dengan deadline dan dokumentasi yang rapi.", "Dimas P.", "Alumni, kini Embedded Engineer"],
  ["Komunitas ini membuka jejaring yang tidak saya dapat di kelas. Sangat membantu saat magang.", "Rahma K.", "Mahasiswa Teknik Informatika"],
];

const ARTIKEL = [
  { img: "mikrocontroller.jpg", j: "Mengenal MQTT: Protokol Ringan untuk IoT", m: "5 menit baca", d: "12 Nov 2026", k: "IoT" },
  { img: "learning.jpg", j: "Panduan Memilih Mikrokontroler untuk Pemula", m: "7 menit baca", d: "3 Nov 2026", k: "Elektronika" },
  { img: "hackaton.jpg", j: "Di Balik Juara 2 Kontes Robot Regional", m: "4 menit baca", d: "21 Okt 2026", k: "Komunitas" },
];

const FAQ = [
  ["Apakah harus berlatar belakang teknik?", "Tidak. Semua jurusan dan umum boleh bergabung. Materi dimulai dari dasar."],
  ["Berapa biaya keanggotaan?", "Gratis. Biaya hanya untuk komponen proyek pribadi atau acara tertentu."],
  ["Apakah harus memiliki laptop dan alat sendiri?", "Laptop disarankan. Peralatan dasar dapat dipinjam dari inventaris komunitas."],
  ["Seberapa sering kegiatan diadakan?", "Minimal dua kali sebulan: workshop, open lab, atau pertemuan komunitas."],
  ["Apakah anggota mendapat sertifikat?", "Ya, sertifikat keikutsertaan diberikan untuk program dan pelatihan tertentu."],
];

const $ = (id) => document.getElementById(id);
const bln = (s) => new Date(s).toLocaleDateString("id-ID", { month: "short" });
const tglL = (s) => new Date(s).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const jam = (s) => new Date(s).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }).replace(".", ":");
const pic = (f, alt, cls, zoom = false) => `<img src="${IMG}${f}" alt="${alt}" loading="lazy" class="${cls}" ${zoom ? "data-zoom" : ""} onerror="this.style.visibility='hidden'">`;

// Gambar statis di HTML
document.querySelectorAll("img[data-img]").forEach((el) => {
  el.src = IMG + el.dataset.img; el.loading = "lazy"; el.onerror = () => (el.style.visibility = "hidden");
});

// Navigasi
const links = (c) => NAV.map(([h, l]) => `<a href="${h}" class="${c}">${l}</a>`).join("");
$("menu").innerHTML = links("text-white/80 transition hover:text-white");
$("mmenu").innerHTML = links("border-b border-white/10 py-3.5 text-white/85");
$("fnav").innerHTML = links("transition hover:text-white");
$("burger").onclick = () => { $("mmenu").classList.toggle("hidden"); $("mmenu").classList.toggle("flex"); };
$("mmenu").onclick = () => { $("mmenu").classList.add("hidden"); $("mmenu").classList.remove("flex"); };
const setNav = () => { const on = scrollY > 40; ["bg-ink-950/95", "backdrop-blur", "shadow-lg"].forEach((c) => $("nav").classList.toggle(c, on)); };
addEventListener("scroll", setNav); setNav();

// Agenda
const next = AGENDA.filter((a) => new Date(a.tgl) > Date.now()).sort((a, b) => new Date(a.tgl) - new Date(b.tgl));
const n0 = next[0];

// Strip hero
const strip = (t, v, s) => `<div class="py-5 md:px-8 md:first:pl-0"><p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400">${t}</p><p class="mt-1 font-display font-medium text-white">${v}</p><p class="text-xs text-slate-400">${s}</p></div>`;
$("heroStrip").innerHTML =
  strip("Agenda berikutnya", n0 ? n0.judul : "Segera diumumkan", n0 ? tglL(n0.tgl) : "") +
  strip("Pendaftaran", "Terbuka sepanjang tahun", "Gratis untuk semua jurusan") +
  strip("Sekretariat", "Salatiga, Jawa Tengah", "Senin – Sabtu, 09.00 – 17.00 WIB");

// Statistik
$("stats").innerHTML = STATS.map(([n, s, l]) => `<div class="px-4 md:border-l md:border-slate-200 md:first:border-0"><p class="font-display text-4xl font-semibold text-ink-900 md:text-5xl"><span data-count="${n}">0</span><span class="text-brand-600">${s}</span></p><p class="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">${l}</p></div>`).join("");
$("nilai").innerHTML = NILAI.map((t) => `<li class="flex items-center gap-3"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-[11px] font-bold text-brand-700">✓</span>${t}</li>`).join("");

// Divisi
$("divisiList").innerHTML = DIVISI.map(([f, n, t, d]) => `
  <article class="card reveal group overflow-hidden">
    <div class="relative h-48 overflow-hidden">${pic(f, t, "h-full w-full object-cover transition duration-700 group-hover:scale-105")}<span class="absolute left-4 top-4 font-display text-3xl font-semibold text-white drop-shadow">${n}</span><div class="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent"></div></div>
    <div class="p-6"><h3 class="font-display text-lg font-semibold text-ink-900">${t}</h3><p class="mt-2 text-sm leading-relaxed">${d}</p></div>
  </article>`).join("");

// Program
$("programList").innerHTML = PROGRAM.map(([f, q, t, d]) => `
  <div class="reveal group bg-ink-900">
    <div class="relative h-40 overflow-hidden">${pic(f, t, "h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80")}<div class="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent"></div></div>
    <div class="p-7"><p class="font-display text-4xl font-semibold text-brand-400">${q}</p><h3 class="mt-3 font-display text-lg font-semibold text-white">${t}</h3><p class="mt-2 text-sm leading-relaxed text-slate-400">${d}</p></div>
  </div>`).join("");

// Agenda list + hitung mundur
$("agendaList").innerHTML = next.map((a) => `
  <div class="reveal group flex items-center gap-6 py-6 transition hover:bg-slate-50 md:px-4">
    <div class="w-16 shrink-0 text-center"><p class="font-display text-3xl font-semibold text-ink-900">${new Date(a.tgl).getDate()}</p><p class="text-xs font-semibold uppercase tracking-widest text-brand-600">${bln(a.tgl)}</p></div>
    <div class="flex-1"><span class="tag">${a.tag}</span><h3 class="mt-2 font-display font-semibold text-ink-900">${a.judul}</h3><p class="mt-1 text-sm text-slate-500">${jam(a.tgl)} WIB · ${a.tempat}</p></div>
    <a href="#gabung" class="hidden text-sm font-semibold text-brand-600 transition group-hover:translate-x-1 sm:block">Daftar →</a>
  </div>`).join("") || `<p class="py-8">Belum ada agenda terdekat.</p>`;

function tick() {
  if (!n0) { $("countdown").innerHTML = `<p class="font-semibold">Agenda baru segera diumumkan.</p>`; return; }
  const ms = Math.max(new Date(n0.tgl) - Date.now(), 0), p = (n) => String(n).padStart(2, "0");
  const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
  $("countdown").innerHTML = `<p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-400">Acara berikutnya</p>
    <h3 class="mt-2 font-display text-xl font-semibold">${n0.judul}</h3><p class="mt-1 text-sm text-slate-300">${tglL(n0.tgl)} · ${jam(n0.tgl)} WIB</p>
    <div class="mt-6 grid grid-cols-4 gap-2 text-center">${[[d, "Hari"], [h, "Jam"], [m, "Menit"], [s, "Detik"]].map(([v, l]) => `<div class="rounded-lg border border-white/15 bg-white/5 py-3"><p class="font-display text-2xl font-semibold">${p(v)}</p><p class="text-[10px] uppercase tracking-wider text-slate-400">${l}</p></div>`).join("")}</div>`;
}
tick(); setInterval(tick, 1000);

// Galeri
$("galeriList").innerHTML = GALERI.map((g) => `
  <div class="reveal group relative overflow-hidden rounded-xl ${g.span}">
    ${pic(g.img, g.t, "absolute inset-0 h-full w-full cursor-zoom-in object-cover transition duration-700 group-hover:scale-105", true)}
    <div class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent p-4 pt-10 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">${g.t}</div>
  </div>`).join("");

// Pengurus
$("pengurusList").innerHTML = PENGURUS.map(([n, r]) => `
  <div class="card reveal p-6 text-center">
    <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-ink-900 font-display text-xl font-semibold text-brand-400">${n.split(" ").map((x) => x[0]).join("")}</div>
    <h3 class="mt-4 font-display font-semibold text-ink-900">${n}</h3><p class="mt-1 text-xs text-slate-500">${r}</p>
  </div>`).join("");

// Testimoni
$("testi").innerHTML = TESTI.map(([q, n, r]) => `<figure class="reveal"><span class="font-display text-5xl leading-none text-brand-100/60">“</span><blockquote class="-mt-2 leading-relaxed text-white/95">${q}</blockquote><figcaption class="mt-5 text-sm"><b class="text-white">${n}</b><br><span class="text-brand-100/80">${r}</span></figcaption></figure>`).join("");

// Artikel
$("artikelList").innerHTML = ARTIKEL.map((a) => `
  <article class="reveal group">
    <div class="h-52 overflow-hidden rounded-xl">${pic(a.img, a.j, "h-full w-full object-cover transition duration-700 group-hover:scale-105")}</div>
    <div class="mt-5 flex items-center gap-3 text-xs text-slate-500"><span class="tag">${a.k}</span><span>${a.d}</span><span>·</span><span>${a.m}</span></div>
    <h3 class="mt-3 font-display text-lg font-semibold leading-snug text-ink-900 transition group-hover:text-brand-600">${a.j}</h3>
  </article>`).join("");

// FAQ
$("faqList").innerHTML = FAQ.map(([q, a]) => `<details class="card group px-6 py-5"><summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-ink-900">${q}<span class="text-xl text-brand-600 transition group-open:rotate-45">+</span></summary><p class="mt-3 text-sm leading-relaxed">${a}</p></details>`).join("");

// Form
document.querySelector("select[name=divisi]").innerHTML = ["Pilih divisi", ...DIVISI.map((d) => d[2])].map((o) => `<option>${o}</option>`).join("");
$("yr").textContent = new Date().getFullYear();
$("form").onsubmit = (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  const msg = `Halo admin KNM, saya ingin mendaftar sebagai anggota.\nNama: ${f.nama}\nAsal institusi: ${f.asal}\nDivisi: ${f.divisi}\nMotivasi: ${f.alasan || "-"}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
};

// Lightbox
const lb = $("lb"), closeLb = () => { lb.classList.add("hidden"); lb.classList.remove("flex"); };
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-zoom]");
  if (t && t.style.visibility !== "hidden") { lb.querySelector("img").src = t.src; lb.classList.remove("hidden"); lb.classList.add("flex"); }
  else if (e.target.closest("#lb")) closeLb();
});
addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

// Animasi
const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
const co = new IntersectionObserver((es) => es.forEach((en) => {
  if (!en.isIntersecting) return;
  const el = en.target, end = +el.dataset.count, t0 = performance.now();
  const f = (t) => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f); co.unobserve(el);
}), { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach((el) => co.observe(el));