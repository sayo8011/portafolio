// ============================================================
//  PROYECTOS — Edita aquí toda la info de cada proyecto
//  
//  Cada proyecto tiene:
//    tag         → etiqueta pequeña arriba
//    title       → título del modal
//    description → descripción corta (header del modal)
//    details     → bloques de texto en la pestaña "Info"
//                  [ { heading: '...', text: '...' }, ... ]
//    bullets     → lista de puntos destacados (opcional)
//                  [ 'punto 1', 'punto 2', ... ]
//    link        → URL externa (pon null si no hay)
//    linkLabel   → texto del botón del link
//    photos      → fotos en la pestaña "Fotos/Video"
//                  [ 'img/foto1.jpg', 'img/foto2.jpg', ... ]
//    video       → URL embed de YouTube o null
//                  ej: 'https://www.youtube.com/embed/VIDEO_ID'
//    files       → archivos en la pestaña "Archivos"
//                  [ { name: 'Reporte.pdf', icon: '📄', type: 'PDF', src: 'archivos/reporte.pdf' }, ... ]
// ============================================================
const certs = {
  1: {
    tag: 'Cisco',
    title: 'Introduction to Cybersecurity',
    description: 'Este curso introductorio lo lleva al mundo de la ciberseguridad. Aprenderá los conceptos básicos de ciberseguridad para proteger su vida digital personal y obtendrá información sobre los mayores desafíos de seguridad que enfrentan las empresas, los gobiernos y las instituciones educativas en la actualidad. Los profesionales de ciberseguridad que pueden proteger y defender la red de una organización tienen una gran demanda.',
    details: [
      { heading: 'Emitido por', text: 'Cisco Networking Academy' },
      { heading: 'Año', text: '2026' },
    ],
    file: 'https://drive.google.com/file/d/12QasQTJrbLT24XsEoQEO6dOc2XukSP24/view?usp=drive_link',
    fileName: 'Introduction_to_Cybersecurity.pdf',
  },
  2: {
    tag: 'Cisco',
    title: 'Security of Terminals',
    description: 'Aprenda los conocimientos básicos que usará en el lugar de trabajo como Analista Junior en Ciberseguridad. Cada día, miles de millones de dispositivos se conectan a la red y cada uno debe protegerse. Adquiera las habilidades para proteger su red hasta el borde, incluso hardware, software y medios.Aprenderá cómo evaluar la red, los sistemas operativos y los puntos finales en busca de vulnerabilidades y cómo proteger la red. También obtendrá habilidades para mantener la integridad, confidencialidad y disponibilidad en su red y sus datos.',
    details: [
      { heading: 'Emitido por', text: 'Cisco Networking Academy' },
      { heading: 'Año', text: '2026' },
    ],
    file: 'https://drive.google.com/file/d/1lhEaEc0NbPoTjD9j6zSPc61MObd9Kare/view?usp=drive_link',
    fileName: 'Security_of_Terminals.pdf',
  },
  3: {
    tag: 'Universidad Cooperativa',
    title: 'Analítica de Datos',
    description: 'La credencial en analítica de datos permite adquirir la habilidad para construir reportes estructurados y confiables a partir de la aplicación de técnicas para el procesamiento de datos. Los resultados del análisis sirven de soporte en la toma de decisiones a las personas responsables con base en los reportes generados del contexto particular analizado.',
    details: [
      { heading: 'Emitido por', text: 'Universidad Cooperativa De Colombia' },
      { heading: 'Año', text: '2026' },
    ],
    file: 'https://drive.google.com/file/d/18ZmxN6o90vR4UBriPRI3KYL49qyqLzvs/preview',
    fileName: 'Data_Analytics.pdf',
  },
};


const education = {
  1: {
  tag: 'Bachillerato',
  title: 'Bachillerato Académico',
  description: 'Formación académica completa en la Normal Superior de Montería, una de las instituciones educativas más reconocidas de Córdoba, con enfoque en pedagogía y formación integral.',
  details: [
    { heading: 'Institución', text: 'Normal Superior de Montería' },
    { heading: 'Período', text: '2010 — 2021' },
    { heading: 'Ciudad', text: 'Montería, Córdoba' },
  ],
  files: [
    { name: 'Diploma.pdf',       src: 'https://drive.google.com/file/d/1f4cX9mkwHb-Sv1uft1Goko_RTrhmpWUI/view?usp=drive_link' },
    { name: 'Acta de Grado.pdf', src: 'https://drive.google.com/file/d/1WMpaj451Lw1pXAii2PiMHsapzxRAS7Zz/view?usp=drive_link' },
  ],
},
  2: {
    tag: 'Universitario',
    title: 'Ingeniería de Sistemas',
    description: 'Estudiante activo de Ingeniería de Sistemas en la Universidad Cooperativa de Colombia sede Montería, con enfoque en ciberseguridad, redes y desarrollo de software.',
    details: [
      { heading: 'Institución', text: 'Universidad Cooperativa de Colombia' },
      { heading: 'Sede', text: 'Montería, Córdoba' },
      { heading: 'Inicio', text: '2022 — Semestre 2' },
      { heading: 'Estado', text: 'En curso' },
    ],
    file:null,
    fileName:null,
  },
};

const projects = {
    1: {
    tag: 'Active Directory',
    title: 'Active Directory Lab — Configuración y administración',
    description: 'Implementación completa de un dominio Windows Server 2025 con usuarios, grupos, GPOs y políticas de seguridad en entorno virtualizado con Hyper-V.',
    details: [
      {
        heading: 'Descripción',
        text: 'Configuré desde cero un entorno Active Directory corporativo sobre Windows Server 2025 en Hyper-V, incluyendo controlador de dominio, unidades organizativas, usuarios, grupos y políticas de seguridad mediante GPOs.'
      },
      {
        heading: 'Objetivo',
        text: 'Simular un entorno empresarial real para practicar administración de identidades, aplicación de políticas y control de acceso en infraestructura Windows.'
      },
    ],
    bullets: [
      'Instalación y configuración del controlador de dominio (DC) en Windows Server 2025',
      'Creación de unidades organizativas, usuarios y grupos del dominio',
      'Configuración de GPOs: políticas de escritorio, restricciones de red y seguridad',
      'Política de contraseñas: longitud mínima 10, complejidad activa, expiración 60 días',
      'Bloqueo de cuenta: 5 intentos fallidos / bloqueo 30 minutos',
      'Activación de auditoría de eventos: inicios de sesión, cambios de cuenta y bloqueos',
      'LDAP Signing requerido y restricción de enumeración anónima',
      'Desactivación de LLMNR y NetBIOS en todos los adaptadores de red',
    ],
    link:null,
    linkLabel:null,
    photos: [
  'Proyectos/Gobierno_Ti/Hyperv.png',
  'Proyectos/Gobierno_Ti/hyperv2.png',
    ],
    video: ['https://youtu.be/-rTB32Vrx5s',],
   files: [
  { name: 'Documentación AD.pdf', icon: '📄', type: 'PDF', src: 'https://docs.google.com/document/d/1qLHTjSwI4sBEw8VfhNUReuXLP6VNiZQL/edit?usp=drive_link&ouid=102863722784854773180&rtpof=true&sd=true'},
  { name: 'Inventario', icon: '📄', type: 'XLSX', src: 'https://docs.google.com/spreadsheets/d/15ZSXQcK5SjIw6zGtXJj58p7UDcej6wfT/edit?usp=drive_link&ouid=102863722784854773180&rtpof=true&sd=true'},
],
  },
  2: {
    tag: 'Pentesting',
    title: 'Ataque y defensa sobre Active Directory',
    description: 'Laboratorio completo de ataque y defensa sobre un dominio Windows Server 2025 usando Kali Linux como atacante y herramientas propias desarrolladas en Bash y PowerShell.',
    details: [
      {
        heading: 'Descripción',
        text: 'Desarrollé dos herramientas propias — OctoScan-AD en Bash (atacante desde Kali Linux) y OctoDefend-AD en PowerShell (defensor en Windows Server) — para simular un ciclo real de ataque, detección y corrección sobre un Active Directory en red aislada con Hyper-V.'
      },
      {
        heading: 'Herramientas utilizadas',
        text: 'Kali Linux, NMAP, netexec, rpcclient, Impacket, kerbrute, ldapsearch, Evil-WinRM, PowerShell, GPO, auditpol.'
      },
    ],
    bullets: [
      'OctoScan-AD: reconocimiento NMAP, enumeración LDAP/RPC/DNS, fuerza bruta SMB',
      'OctoScan-AD: AS-REP Roasting, Kerberoasting y password spraying con kerbrute',
      'Validación de lockout activo — el atacante detecta el bloqueo de cuenta en tiempo real',
      'OctoDefend-AD: bloqueo de puertos críticos SMB, RPC, NetBIOS y WinRM vía firewall',
      'OctoDefend-AD: desactivación de SMBv1, SMB Signing requerido y LDAP Signing',
      'OctoDefend-AD: corrección automática de políticas y generación de reporte de auditoría',
      'Verificación post-defensa: se volvió a correr OctoScan-AD para confirmar qué ataques fueron bloqueados',
      'Resultado: 6 de 8 vectores de ataque bloqueados — LDAP anónimo y credenciales débiles como puntos pendientes',
    ],
    links: [{ url: 'https://github.com/sayo8011/Octoscan-attck-and-defend.git', label: 'Ver Script →' }],
    linkLabel: null,
    photos: [],
    video: ['https://youtu.be/zzEKN0t_7HM'],
    files: [
        { name: 'Analisis de vulneravilidad en un Active Directory AD.pdf', icon: '📄', type: 'PDF', src: 'https://docs.google.com/document/d/1k384dK7IwaaIgEb6aCiVOKc_D-OAKOEx/edit?usp=drive_link&ouid=102863722784854773180&rtpof=true&sd=true' },
        { name: 'Creacion de script de analisis a Active Directory con OctoScan AD.pdf', icon: '📄', type: 'PDF', src: 'https://docs.google.com/document/d/16t9IhDk0ryTzQW8Tj7d3Gg62q07q4tr5/edit?usp=drive_link&ouid=102863722784854773180&rtpof=true&sd=true' },
    ],
  },
3: {
  tag: 'Web Dev',
  title: 'Web PlayStation',
  description: 'Plataforma web interactiva enfocada en el ecosistema PlayStation, donde se presentan consolas, videojuegos y contenido multimedia como tráilers en una interfaz moderna, dinámica y centrada en la experiencia del usuario.',
  details: [
    { 
      heading: 'Descripción', 
      text: 'Este proyecto consiste en el desarrollo de una aplicación web informativa dedicada a la marca PlayStation. Permite explorar distintas generaciones de consolas, conocer sus características principales y visualizar videojuegos destacados junto con sus respectivos tráilers. La aplicación está diseñada para ofrecer una navegación fluida, intuitiva y visualmente atractiva.' 
    },
    { 
      heading: 'Enfoque Técnico', 
      text: 'El desarrollo fue realizado utilizando HTML, CSS y JavaScript puro (vanilla), implementando manipulación del DOM para la carga dinámica de contenido y control de elementos interactivos como modales y secciones multimedia. Se priorizó el rendimiento, la organización del código y la experiencia del usuario.' 
    },
    { 
      heading: 'Funcionalidades', 
      text: 'Incluye visualización de consolas, catálogo de videojuegos, reproducción de tráilers, navegación interactiva y estructura adaptable a diferentes dispositivos mediante diseño responsivo.' 
    },
    { 
      heading: 'Objetivo', 
      text: 'Demostrar habilidades en desarrollo frontend, estructuración de interfaces web y manejo de contenido multimedia dentro de una aplicación web moderna.' 
    },
  ],
  bullets: [
    'Catálogo de consolas PlayStation con información detallada',
    'Listado de videojuegos con integración de tráilers',
    'Interfaz interactiva con navegación fluida',
    'Uso de JavaScript para manipulación dinámica del DOM',
    'Diseño responsivo adaptable a móviles y escritorio',
    'Estructuración modular del código',
  ],
  links: [
    { url: 'https://github.com/sayo8011/web.git', label: 'Ver código →' },
    { url: 'https://sayo8011.github.io/web/', label: 'Ver página →' },
  ],
  photos: ['Proyectos/Play_station/Playstation.png',
  'Proyectos/Play_station/Playstation1.png',],
  video: null,
  files: [],
},
};

// Welcome screen
setTimeout(() => {
  document.getElementById('welcome-screen').classList.add('hide');
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}, 3000);

// Navbar scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});
(function lerp() {
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(lerp);
})();

// Menú móvil
document.getElementById('menu-toggle').onclick = () =>
  document.getElementById('nav-links').classList.toggle('open');
document.querySelectorAll('.nav-links a').forEach(a =>
  a.onclick = () => document.getElementById('nav-links').classList.remove('open'));

// Modal
const modal    = document.getElementById('modal');
const fvWrap   = document.getElementById('file-viewer');
const fvFrame  = document.getElementById('fv-frame');
const fvName   = document.getElementById('fv-name');
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');

function openModal(id) {
  const d = projects[id];
  if (!d) return;

  document.getElementById('modal-tag').textContent = '// ' + d.tag;
  document.getElementById('modal-title').textContent = d.title;
  document.getElementById('modal-description').textContent = d.description;

  // Tab info
  const detailsEl = document.getElementById('modal-details');
  let html = '';
  (d.details || []).forEach(b => {
    html += `<div class="modal-detail-block"><h4>${b.heading}</h4><p>${b.text}</p></div>`;
  });
  if (d.bullets && d.bullets.length) {
    html += `<div class="modal-detail-block"><h4>Destacado</h4><ul>`;
    d.bullets.forEach(b => { html += `<li>${b}</li>`; });
    html += `</ul></div>`;
  }
  detailsEl.innerHTML = html;

 const linkWrap = document.getElementById('modal-link-wrap');
  linkWrap.innerHTML = '';
  const linksArr = d.links || (d.link ? [{ url: d.link, label: d.linkLabel || 'Ver →' }] : []);
  if (linksArr.length) {
    linksArr.forEach(l => {
      const a = document.createElement('a');
      a.href = l.url; a.target = '_blank';
      a.className = 'btn btn-primary'; a.style.marginRight = '10px';
      a.textContent = l.label;
      linkWrap.appendChild(a);
    });
    linkWrap.style.display = 'block';
  } else {
    linkWrap.style.display = 'none';
  }

  // Tab media
  const gallery = document.getElementById('modal-gallery');
  gallery.innerHTML = '';
  if (d.photos && d.photos.length) {
    d.photos.forEach(src => {
      const img = document.createElement('img');
      img.src = src; img.alt = '';
      img.onclick = () => { lbImg.src = src; lightbox.classList.add('open'); };
      gallery.appendChild(img);
    });
  } else {
    gallery.innerHTML = `<p class="modal-no-media">Sin fotos aún — agrega rutas en photos[] del script.js</p>`;
  }
 const videoWrap = document.getElementById('modal-video-wrap');
  videoWrap.innerHTML = '';

  // Soporta video como string o array
  const videoSrc = Array.isArray(d.video) ? d.video[0] : d.video;

  if (videoSrc) {
    const isYoutube = videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be');
    if (isYoutube) {
      // Convertir youtu.be/ID o youtube.com/watch?v=ID a embed
      let embedId = '';
      if (videoSrc.includes('youtu.be/')) {
        embedId = videoSrc.split('youtu.be/')[1].split('?')[0];
      } else if (videoSrc.includes('watch?v=')) {
        embedId = videoSrc.split('watch?v=')[1].split('&')[0];
      } else if (videoSrc.includes('/embed/')) {
        embedId = videoSrc.split('/embed/')[1].split('?')[0];
      }
      const embedUrl = `https://www.youtube.com/embed/${embedId}`;
      videoWrap.innerHTML = `
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin-top:1rem;">
          <iframe src="${embedUrl}" frameborder="0" allowfullscreen
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>`;
    } else {
      videoWrap.innerHTML = `
        <div style="position:relative;border-radius:12px;overflow:hidden;background:#0a0e27;cursor:pointer;">
          <video id="modal-video" src="${videoSrc}"
            style="width:100%;display:block;border-radius:12px;" preload="metadata">
          </video>
          <div id="vid-overlay" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.45);border-radius:12px;">
            <div style="width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,0.15);border:2px solid rgba(255,255,255,0.6);display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;padding-left:4px;backdrop-filter:blur(4px);">▶</div>
          </div>
        </div>`;
      setTimeout(() => {
        const vid = document.getElementById('modal-video');
        const overlay = document.getElementById('vid-overlay');
        if (vid && overlay) {
          overlay.onclick = () => { overlay.style.display = 'none'; vid.controls = true; vid.play(); };
        }
      }, 50);
    }
  }

  // Tab files
// Tab files
  const fileArea = document.getElementById('modal-files');
  const noFile   = document.getElementById('modal-no-files');

  if (d.files && d.files.length) {
    fileArea.innerHTML = d.files.map(f => `
      <a href="${f.src}" target="_blank" rel="noopener"
         class="btn btn-primary"
         style="display:inline-block; margin: 0.5rem 0.5rem 0 0;">
        ${f.icon || '📄'} ${f.name} →
      </a>
    `).join('');
    if (noFile) noFile.style.display = 'none';
  } else {
    fileArea.innerHTML = `<p class="modal-no-media">Sin archivos — agrega rutas en files[] del script.js</p>`;
  }

  switchTab('info');
  modal.classList.add('open');
}

function switchTab(name) {
  // Pausar video de YouTube vaciando el src del iframe
  const videoWrap = document.getElementById('modal-video-wrap');
  if (videoWrap) {
    const iframe = videoWrap.querySelector('iframe');
    if (iframe) {
      const src = iframe.src;
      iframe.src = '';
      iframe.src = src;
    }
    const vid = document.getElementById('modal-video');
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
      const overlay = document.getElementById('vid-overlay');
      if (overlay) overlay.style.display = 'flex';
      vid.controls = false;
    }
  }
  document.querySelectorAll('.mtab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === name));
  document.querySelectorAll('.mtab-content').forEach(c =>
    c.classList.toggle('active', c.id === 'tab-' + name));
}

document.querySelectorAll('.mtab').forEach(t => t.onclick = () => switchTab(t.dataset.tab));
document.querySelectorAll('.open-modal').forEach(btn =>
  btn.addEventListener('click', () => openModal(btn.dataset.project)));

function closeModal() {
  // Parar YouTube
  const videoWrap = document.getElementById('modal-video-wrap');
  if (videoWrap) {
    const iframe = videoWrap.querySelector('iframe');
    if (iframe) { const s = iframe.src; iframe.src = ''; iframe.src = s; }
  }
  // Parar video local
  const vid = document.getElementById('modal-video');
  if (vid) {
    vid.pause(); vid.currentTime = 0;
    const overlay = document.getElementById('vid-overlay');
    if (overlay) overlay.style.display = 'flex';
    vid.controls = false;
  }
  modal.classList.remove('open');
}

document.getElementById('modal-close').onclick = closeModal;
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

document.getElementById('fv-close').onclick = () => { fvWrap.classList.remove('open'); fvFrame.src = ''; };
document.getElementById('lb-close').onclick = () => lightbox.classList.remove('open');
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Modal certificados
const certModal = document.getElementById('cert-modal');

function openCertModal(id) {
  const d = certs[id];
  if (!d) return;

  document.getElementById('cert-modal-tag').textContent = '// ' + d.tag;
  document.getElementById('cert-modal-title').textContent = d.title;
  document.getElementById('cert-modal-description').textContent = d.description;

  const detailsEl = document.getElementById('cert-modal-details');
  let html = '';
  (d.details || []).forEach(b => {
    html += `<div class="modal-detail-block"><h4>${b.heading}</h4><p>${b.text}</p></div>`;
  });
  detailsEl.innerHTML = html;

  const frame = document.getElementById('cert-fv-frame');
  const noFile = document.getElementById('cert-no-file');
  const fvWrapC = document.getElementById('cert-file-viewer');
 if (d.file) {
    document.getElementById('cert-fv-name').textContent = d.fileName || 'Certificado';
    
    // Botón para abrir en pestaña nueva en lugar de iframe
    const fvWrapC = document.getElementById('cert-file-viewer');
    fvWrapC.style.display = 'block';
    noFile.style.display = 'none';
    
    document.getElementById('cert-fv-name').textContent = d.fileName || 'Certificado';
    
    // Reemplazar el iframe por un botón
    const frame = document.getElementById('cert-fv-frame');
    frame.style.display = 'none';
    
    // Crear botón si no existe
    let btn = document.getElementById('cert-open-btn');
    if (!btn) {
      btn = document.createElement('a');
      btn.id = 'cert-open-btn';
      btn.className = 'btn btn-primary';
      btn.style.cssText = 'display:block;text-align:center;margin:1.5rem auto;width:fit-content;';
      btn.target = '_blank';
      btn.rel = 'noopener';
      frame.parentNode.appendChild(btn);
    }
    btn.href = d.file;
    btn.textContent = 'Abrir certificado PDF →';
    
  } else {
    const fvWrapC = document.getElementById('cert-file-viewer');
    frame.src = '';
    fvWrapC.style.display = 'none';
    noFile.style.display = 'block';
  }

  switchCertTab('info');
  certModal.classList.add('open');
}

function switchCertTab(name) {
  document.querySelectorAll('.ctab').forEach(t => t.classList.toggle('active', t.dataset.ctab === name));
  document.querySelectorAll('.ctab-content').forEach(c => c.classList.toggle('active', c.id === 'ctab-' + name));
}

document.querySelectorAll('.ctab').forEach(t => t.onclick = () => switchCertTab(t.dataset.ctab));
document.getElementById('cert-modal-close').onclick = () => certModal.classList.remove('open');
certModal.addEventListener('click', e => { if (e.target === certModal) certModal.classList.remove('open'); });


const eduModal = document.getElementById('edu-modal');

function openEduModal(id) {
  const d = education[id];
  if (!d) return;

  document.getElementById('edu-modal-tag').textContent = '// ' + d.tag;
  document.getElementById('edu-modal-title').textContent = d.title;
  document.getElementById('edu-modal-description').textContent = d.description;

  const detailsEl = document.getElementById('edu-modal-details');
  let html = '';
  (d.details || []).forEach(b => {
    html += `<div class="modal-detail-block"><h4>${b.heading}</h4><p>${b.text}</p></div>`;
  });
  detailsEl.innerHTML = html;

 const fileArea = document.getElementById('edu-file-area');
  const noFile   = document.getElementById('edu-no-file');

  // Soporta d.files (array) y d.file (singular)
  const filesArr = d.files
    ? d.files
    : d.file
      ? [{ name: 'Abrir documento PDF', src: d.file }]
      : [];

  if (filesArr.length) {
    noFile.style.display = 'none';
    fileArea.innerHTML = filesArr.map(f => `
      <a href="${f.src}" target="_blank" rel="noopener"
         class="btn btn-primary"
         style="display:inline-block; margin: 0.5rem 0.5rem 0 0;">
        📄 ${f.name} →
      </a>
    `).join('');
  } else {
    fileArea.innerHTML = '';
    noFile.style.display = 'block';
  }

  switchEduTab('info');
  eduModal.classList.add('open');
}

function switchEduTab(name) {
  document.querySelectorAll('.etab').forEach(t =>
    t.classList.toggle('active', t.dataset.etab === name));
  document.querySelectorAll('.etab-content').forEach(c =>
    c.classList.toggle('active', c.id === 'etab-' + name));
}

document.querySelectorAll('.etab').forEach(t =>
  t.onclick = () => switchEduTab(t.dataset.etab));
document.getElementById('edu-modal-close').onclick = () =>
  eduModal.classList.remove('open');
eduModal.addEventListener('click', e => {
  if (e.target === eduModal) eduModal.classList.remove('open');
});