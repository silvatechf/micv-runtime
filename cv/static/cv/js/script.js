/**
 * ==============================================================================
 * ENGINE RUNTIME CONTROLLER - TRANSICIÓN INTERACTIVA EXPANDIDA
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // MAPEO EXCLUSIVO DEL BUFFER DINÁMICO OCULTO DEL DOM DESDE DJANGO
    const cvData = {
        personal_info: document.getElementById('raw-personal-info')?.innerHTML || '',
        experience: document.getElementById('raw-experience')?.innerHTML || '',
        capabilities: document.getElementById('raw-capabilities')?.innerHTML || '',
        education_metadata: document.getElementById('raw-education')?.innerHTML || ''
    };

    const ideOutput = document.getElementById('ideOutput');
    const tabName = document.getElementById('currentTabName');
    const skipBtn = document.getElementById('skipBtn');
    const glowTargets = document.querySelectorAll('.border-glow-target');

    let isTyping = false;
    let currentTimeoutId = null;
    let currentRawHtml = "";

    // CONTROLADORES CINÉTICOS DE LA EX-COLUMNA CENTRAL ADAPTADOS AL EMISOR DIRECTO
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

        // Procesa la animación visual por nodos heredada de la columna eliminada
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

        // Inyectores directos activos sin pasar por intermediarios huerfanos
        document.querySelectorAll('.injector-panel').forEach(p => {
            p.classList.remove('active');
            if (p.getAttribute('data-file') === fileId) p.classList.add('active');
        });

        const tabTitleMap = {
            personal_info: 'profile.json',
            experience: 'experience.json',
            capabilities: 'capabilities.json',
            education_metadata: 'education.json'
        };
        
        if (tabName) tabName.textContent = `${tabTitleMap[fileId]}`;
        streamIdeContent(cvData[fileId]);
    };

    document.querySelectorAll('.injector-panel').forEach(el => {
        el.addEventListener('click', () => {
            const targetFile = el.getAttribute('data-file');
            if (targetFile) triggerFileSwitch(targetFile);
        });
    });

    // RELOJ OPERATIVO UTC/BCN
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

    // RADIAL MOUSE GLOW PARAMETERS
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

    // SUAVIZADO LERP CURSOR MAGNÉTICO
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

    // VARIABLES DE CONFIGURACIÓN DEL SELECTOR DE COLOR
    const themeSelect = document.getElementById('themeSelect');
    const themes = {
        emerald: { accent: '#00ffaa', accent2: '#5e3aff', rgb: '0, 255, 170', rgb2: '94, 58, 255' },
        sapphire: { accent: '#00a3ff', accent2: '#00ffaa', rgb: '0, 163, 255', rgb2: '0, 255, 170' },
        cyberpunk: { accent: '#ff007f', accent2: '#39ff14', rgb: '255, 0, 127', rgb2: '57, 255, 20' }
    };

    const applyTheme = (themeName) => {
        const selected = themes[themeName] || themes.emerald;
        document.documentElement.style.setProperty('--accent', selected.accent);
        document.documentElement.style.setProperty('--accent-2', selected.accent2);
        document.documentElement.style.setProperty('--accent-rgb', selected.rgb);
        document.documentElement.style.setProperty('--accent-2-rgb', selected.rgb2);
        if (themeSelect) themeSelect.value = themeName;
    };

    themeSelect?.addEventListener('change', (e) => {
        const selectedTheme = e.target.value;
        applyTheme(selectedTheme);
        localStorage.setItem('cv-theme', selectedTheme);
    });

    const savedTheme = localStorage.getItem('cv-theme') || 'emerald';
    applyTheme(savedTheme);

    // Arranque asíncrono inicializado
    setTimeout(() => { triggerFileSwitch('personal_info'); }, 100);
});