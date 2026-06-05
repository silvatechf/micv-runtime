document.addEventListener('DOMContentLoaded', () => {

    // DATA MATRIX TOTALMENTE ALINHADA COM O MODELO ESPANHOL E REQUISITOS TRADICIONAIS
    const cvData = {
        personal_info: `
            <div class="recruiter-header">
                <h2 class="recruiter-name">Fernando Silva Felix</h2>
                <div class="recruiter-title">Fullstack Security Engineer // Specialized in AI Systems</div>
                <div class="recruiter-contact-grid">
                    <span><i class="bi bi-envelope-fill text-emerald"></i> fernando.silva@fsf.dev</span>
                    <span><i class="bi bi-telephone-fill text-emerald"></i> +34 600 000 000</span>
                    <span><i class="bi bi-geo-alt-fill text-emerald"></i> Barcelona, España</span>
                </div>
            </div>
            <div class="cv-section-title">// Datos Personales e Identidad</div>
            <p class="font-sans" style="font-size: 0.9rem; line-height: 1.6; color: rgba(255,255,255,0.75);">
                • <strong>Nombre Completo:</strong> Fernando da Silva Felix<br>
                • <strong>Fecha de Nacimiento:</strong> 14/08/1996<br>
                • <strong>Nacionalidad:</strong> Brasileña<br>
                • <strong>Estado Civil:</strong> Soltero<br>
                • <strong>Ubicación:</strong> Barcelona, España (Disponibilidad Inmediata)<br>
                • <strong>Permiso de Conducir :</strong> Sí - Vehículo Propio: Sí
            </p>
            <div class="cv-section-title mt-4">// Perfil Profesional</div>
            <p class="font-sans">
                Ingeniero de sistemas enfocado en el desarrollo de arquitecturas desacopladas bajo estrictos principios de ciberseguridad corporativa. Especializado en el blindaje de automatizaciones de alto volumen y securización de pipelines de Inteligencia Artificial para el mercado corporativo.
            </p>
        `,
        experience: `
            <div class="cv-section-title">// Experiencia Profesional (Cronología Inversa)</div>
            
            <div class="cv-entry">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h4 class="cv-entry-role">Partner & Lead Developer</h4>
                        <div class="cv-entry-company">Veredict BI Strategic Engine · Barcelona Node // Remoto</div>
                    </div>
                    <span class="cv-entry-period">01/2026 — Presente</span>
                </div>
                <p class="cv-entry-desc">
                    Diseño de la plataforma analítica de auditoría de capital humano y reclutamiento predictivo, transformando datos brutos en mitigações de risco através de vetores semânticos.
                </p>
                <ul class="cv-logros-list">
                    <li>Diseñar e implementar el motor neural en Python encargado del procesamiento de vectores semánticos en archivos PDF para mitigar riesgos analíticos.</li>
                    <li>Desarrollar la matriz relacional de Risk Scoring basada en 4 pilares estables: Tech Gap, Seniority, Context y Scalability, utilizando infraestructura robusta en Java 21.</li>
                    <li>Asegurar e integrar el almacenamiento distribuido empresarial con bases de datos de gran volumen en Snowflake y Google Cloud Storage.</li>
                </ul>
            </div>

            <div class="cv-entry">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h4 class="cv-entry-role">Cybersecurity Specialist</h4>
                        <div class="cv-entry-company">Veredict CTI Lite · Threat Intelligence Lab // Barcelona</div>
                    </div>
                    <span class="cv-entry-period">03/2025 — 12/2025</span>
                </div>
                <p class="cv-entry-desc">
                    Mitigación activa de vectores de ataque perimetrales y despliegue de firewalls automatizados.
                </p>
                <ul class="cv-logros-list">
                    <li>Desplegar laboratorios activos de contención forense mediante integraciones con APIs de reputación de red (AbuseIPDB).</li>
                    <li>Neutralizar de forma automatizada intentos masivos de intrusión remota SSH Brute Force mediante scripts de bloqueo dinámico.</li>
                </ul>
            </div>
        `,
        capabilities: `
            <div class="cv-section-title">// Aptitudes Técnicas (Hard Skills)</div>
            
            <div class="quality-metric-item">
                <div class="metric-label-container"><span>Secure Software Architecture (DDD / Hexagonal)</span><span class="text-muted">Advanced</span></div>
                <div class="metric-track-bar"><div class="metric-fill-fluid" data-level="95%"></div></div>
            </div>
            
            <div class="quality-metric-item">
                <div class="metric-label-container"><span>AI Pipelines & Semantic Vector Extraction</span><span class="text-muted">Expert</span></div>
                <div class="metric-track-bar"><div class="metric-fill-fluid" data-level="90%"></div></div>
            </div>
            
            <div class="quality-metric-item">
                <div class="metric-label-container"><span>Cloud Hardening (Azure / GCP / Snowflake)</span><span class="text-muted">Enterprise Scale</span></div>
                <div class="metric-track-bar"><div class="metric-fill-fluid" data-level="92%"></div></div>
            </div>

            <div class="cv-section-title mt-4">// Competencias Comportamentales (Soft Skills)</div>
            <div class="tag-cloud-container">
                <span class="tag-hud-sm">Builder Mindset</span>
                <span class="tag-hud-sm">Socio Técnico Estratégico</span>
                <span class="tag-hud-sm">Mitigación de Riesgos Críticos</span>
                <span class="tag-hud-sm">Visión de Producto End-to-End</span>
            </div>

            <div class="cv-section-title mt-4">// Competencia Lingüística (Idiomas)</div>
            <p class="font-sans m-0" style="font-size: 0.88rem; color: rgba(255,255,255,0.75);">
                • <strong>Español / Portugués:</strong> Lengua Materna (Bilingüe Nativo)<br>
                • <strong>Inglés:</strong> Nivel C1 / Operaciones Técnicas Avanzadas Enterprise
            </p>
        `,
        education_metadata: `
            <div class="cv-section-title">// Formación Académica Reglada</div>
            
            <div class="cv-entry">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h4 class="cv-entry-role">Master in Cybersecurity Management</h4>
                        <div class="cv-entry-company">Labora Ara Formación · Barcelona Centro</div>
                    </div>
                    <span class="cv-entry-period">10/2026 — 10/2027</span>
                </div>
            </div>

            <div class="cv-entry">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h4 class="cv-entry-role">Graduado en Ingeniería Informática</h4>
                        <div class="cv-entry-company">Universidade Paulista UNIP</div>
                    </div>
                    <span class="cv-entry-period">Concluido // Homologado</span>
                </div>
            </div>

            <div class="cv-section-title mt-4">// Formación Complementaria & Certificaciones</div>
            <div class="tag-cloud-container">
                <span class="tag-hud-sm">Python Level 2 Professional (PCED // 2026)</span>
                <span class="tag-hud-sm">SnowPro Associate — Snowflake Cloud Data Architecture (2026)</span>
            </div>
        `
    };

    const leftAside = document.getElementById('leftAside');
    const ideDisplay = document.getElementById('ideDisplay');
    const ideOutput = document.getElementById('ideOutput');
    const tabName = document.getElementById('currentTabName');
    const skipBtn = document.getElementById('skipBtn');
    const glowTargets = document.querySelectorAll('.border-glow-target');

    let isTyping = false;
    let currentTimeoutId = null;
    let currentRawHtml = "";

    const streamIdeContent = (htmlString) => {
        if (isTyping) { clearTimeout(currentTimeoutId); isTyping = false; }
        currentRawHtml = htmlString;
        if (!ideOutput) return;

        if (window.location.protocol === 'file:') {
            ideOutput.innerHTML = htmlString;
            restoreLayoutState();
            return;
        }
        
        isTyping = true;
        if (skipBtn) { skipBtn.style.opacity = "1"; skipBtn.style.pointerEvents = "all"; }
        
        ideOutput.innerHTML = "";
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        
        const cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        ideOutput.appendChild(cursor);

        const nodesToInject = Array.from(tempDiv.childNodes);
        let nodeIdx = 0;

        const processNodeInjection = () => {
            if (!isTyping) return;
            if (nodeIdx >= nodesToInject.length) { restoreLayoutState(); return; }

            const node = nodesToInject[nodeIdx];
            ideOutput.insertBefore(node.cloneNode(true), cursor);
            nodeIdx++;
            currentTimeoutId = setTimeout(processNodeInjection, 12); 
        };
        processNodeInjection();
    };

    const restoreLayoutState = () => {
        if (skipBtn) { skipBtn.style.opacity = "0"; skipBtn.style.pointerEvents = "none"; }
        isTyping = false;
        const cursorNode = document.querySelector('.terminal-cursor');
        if (cursorNode) cursorNode.remove();

        document.querySelectorAll('.metric-fill-fluid').forEach(bar => {
            bar.style.width = bar.getAttribute('data-level');
        });
    };

    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            clearTimeout(currentTimeoutId);
            if (ideOutput) ideOutput.innerHTML = currentRawHtml;
            restoreLayoutState();
        });
    }

    const triggerFileSwitch = (fileId) => {
        if (!cvData[fileId]) return;

        document.querySelectorAll('.injector-panel').forEach(p => {
            p.classList.remove('active');
            if (p.getAttribute('data-file') === fileId) p.classList.add('active');
        });

        document.querySelectorAll('.file-node').forEach(f => {
            f.classList.remove('active');
            if (f.getAttribute('data-file') === fileId) f.classList.add('active');
        });

        const tabTitleMap = {
            personal_info: 'profile',
            experience: 'experience',
            capabilities: 'capabilities',
            education_metadata: 'education'
        };
        
        if (tabName) tabName.textContent = `${tabTitleMap[fileId]}`;
        streamIdeContent(cvData[fileId]);
    };

    document.querySelectorAll('.injector-panel, .file-node').forEach(el => {
        el.addEventListener('click', () => {
            const targetFile = el.getAttribute('data-file');
            if (targetFile) triggerFileSwitch(targetFile);
        });
    });

    // TIME SYNC BCN
    const realtimeClock = document.getElementById('realtimeClock');
    const updateClock = () => {
        if (realtimeClock) {
            const formatter = new Intl.DateTimeFormat('es-ES', {
                timeZone: 'Europe/Madrid',
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
            });
            realtimeClock.textContent = `TIME_SYNC: ${formatter.format(new Date())} BCN`;
        }
    };
    setInterval(updateClock, 1000);
    updateClock();

    // MOUSE MAPPING
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty('--m-x', `${x}%`);
        document.documentElement.style.setProperty('--m-y', `${y}%`);

        glowTargets.forEach(target => {
            const rect = target.getBoundingClientRect();
            target.style.setProperty('--g-x', `${e.clientX - rect.left}px`);
            target.style.setProperty('--g-y', `${e.clientY - rect.top}px`);
        });
    });

    // CURSOR LERP
    const mDot = document.querySelector('.magnetic-dot');
    const mRing = document.querySelector('.magnetic-ring');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    if (mDot && mRing) {
        mDot.style.display = 'block'; mRing.style.display = 'block';
        document.body.classList.add('custom-cursor-active');

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
            mDot.style.left = mouseX + 'px'; mDot.style.top = mouseY + 'px';
        });

        const cursorLoop = () => {
            ringX += (mouseX - ringX) * 0.15; ringY += (mouseY - ringY) * 0.15;
            mRing.style.left = (ringX - 14) + 'px'; mRing.style.top = (ringY - 14) + 'px';
            requestAnimationFrame(cursorLoop);
        };
        cursorLoop();
    }

    // Initialize Core
    setTimeout(() => { triggerFileSwitch('personal_info'); }, 100);
});