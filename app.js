// =================================================================================
// CONFIGURACI&Oacute;N GLOBAL DEL SISTEMA
// =================================================================================

const VENEZUELA_CONFIG = {
    center: [8.0, -66.0],
    zoom: 6,
    bounds: {
        north: 12.8,
        south: 0.6,
        west: -73.4,
        east: -59.8
    }
};

const VENEZUELA_CITIES = [
    // Distrito Capital
    { name: "Caracas", lat: 10.4806, lng: -66.9036, state: "Distrito Capital" },
    { name: "El Hatillo", lat: 10.4299, lng: -66.8166, state: "Distrito Capital" },
    { name: "Petare", lat: 10.4833, lng: -66.8167, state: "Distrito Capital" },
    { name: "Baruta", lat: 10.4340, lng: -66.8766, state: "Distrito Capital" },
    { name: "Antímano", lat: 10.4700, lng: -66.9850, state: "Distrito Capital" },

    // Zulia
    { name: "Maracaibo", lat: 10.6316, lng: -71.6444, state: "Zulia" },
    { name: "Cabimas", lat: 10.3978, lng: -71.4464, state: "Zulia" },
    { name: "Ciudad Ojeda", lat: 10.2000, lng: -71.3000, state: "Zulia" },
    { name: "Santa Bárbara del Zulia", lat: 8.9833, lng: -71.9167, state: "Zulia" },
    { name: "Machiques", lat: 10.0667, lng: -72.5667, state: "Zulia" },

    // Carabobo
    { name: "Valencia", lat: 10.1621, lng: -68.0078, state: "Carabobo" },
    { name: "Puerto Cabello", lat: 10.4667, lng: -68.0167, state: "Carabobo" },
    { name: "Guacara", lat: 10.2333, lng: -67.8833, state: "Carabobo" },
    { name: "Mariara", lat: 10.3000, lng: -67.7167, state: "Carabobo" },
    { name: "Bejuma", lat: 10.1667, lng: -68.2667, state: "Carabobo" },

    // Lara
    { name: "Barquisimeto", lat: 10.0647, lng: -69.3103, state: "Lara" },
    { name: "Carora", lat: 10.1667, lng: -70.0833, state: "Lara" },
    { name: "El Tocuyo", lat: 9.7833, lng: -69.8000, state: "Lara" },
    { name: "Quíbor", lat: 9.9167, lng: -69.6167, state: "Lara" },
    { name: "Duaca", lat: 10.2833, lng: -69.1667, state: "Lara" },

    // Aragua
    { name: "Maracay", lat: 10.2353, lng: -67.5911, state: "Aragua" },
    { name: "Turmero", lat: 10.2333, lng: -67.4833, state: "Aragua" },
    { name: "La Victoria", lat: 10.2333, lng: -67.3333, state: "Aragua" },
    { name: "Cagua", lat: 10.1833, lng: -67.4500, state: "Aragua" },
    { name: "El Limón", lat: 10.3000, lng: -67.6333, state: "Aragua" },

    // Bolívar
    { name: "Ciudad Guayana", lat: 8.3753, lng: -62.6208, state: "Bolívar" },
    { name: "Ciudad Bolívar", lat: 8.1167, lng: -63.5500, state: "Bolívar" },
    { name: "Upata", lat: 8.0167, lng: -62.4000, state: "Bolívar" },
    { name: "El Callao", lat: 7.3500, lng: -61.8667, state: "Bolívar" },
    { name: "Santa Elena de Uairén", lat: 4.6000, lng: -61.1167, state: "Bolívar" },

    // Monagas
    { name: "Maturín", lat: 9.7469, lng: -63.1764, state: "Monagas" },
    { name: "Punta de Mata", lat: 9.6833, lng: -63.6167, state: "Monagas" },
    { name: "Caripito", lat: 10.1167, lng: -63.1167, state: "Monagas" },
    { name: "Temblador", lat: 8.9833, lng: -62.6333, state: "Monagas" },
    { name: "Aguasay", lat: 9.4167, lng: -63.7333, state: "Monagas" },

    // Táchira
    { name: "San Cristóbal", lat: 7.7669, lng: -72.2253, state: "Táchira" },
    { name: "Rubio", lat: 7.7000, lng: -72.3500, state: "Táchira" },
    { name: "La Fría", lat: 8.2167, lng: -72.2500, state: "Táchira" },
    { name: "Colón", lat: 8.0333, lng: -72.2500, state: "Táchira" },
    { name: "San Antonio del Táchira", lat: 7.8167, lng: -72.4500, state: "Táchira" },

    // Mérida
    { name: "Mérida", lat: 8.5833, lng: -71.1333, state: "Mérida" },
    { name: "El Vigía", lat: 8.6167, lng: -71.6500, state: "Mérida" },
    { name: "Tovar", lat: 8.3333, lng: -71.7500, state: "Mérida" },
    { name: "Ejido", lat: 8.5500, lng: -71.2333, state: "Mérida" },
    { name: "Lagunillas", lat: 8.5000, lng: -71.3833, state: "Mérida" },

    // Trujillo
    { name: "Trujillo", lat: 9.3667, lng: -70.4333, state: "Trujillo" },
    { name: "Valera", lat: 9.3167, lng: -70.6000, state: "Trujillo" },
    { name: "Boconó", lat: 9.2500, lng: -70.2500, state: "Trujillo" },
    { name: "La Quebrada", lat: 9.1667, lng: -70.5833, state: "Trujillo" },
    { name: "Carache", lat: 9.6500, lng: -70.2333, state: "Trujillo" },

    // Anzoátegui
    { name: "Barcelona", lat: 10.1333, lng: -64.6833, state: "Anzoátegui" },
    { name: "Puerto La Cruz", lat: 10.2167, lng: -64.6167, state: "Anzoátegui" },
    { name: "El Tigre", lat: 8.8833, lng: -64.2667, state: "Anzoátegui" },
    { name: "Lechería", lat: 10.1833, lng: -64.6833, state: "Anzoátegui" },
    { name: "Anaco", lat: 9.4333, lng: -64.4667, state: "Anzoátegui" },

    // Sucre
    { name: "Cumaná", lat: 10.4500, lng: -64.1667, state: "Sucre" },
    { name: "Carúpano", lat: 10.6667, lng: -63.2500, state: "Sucre" },
    { name: "Güiria", lat: 10.5667, lng: -62.3000, state: "Sucre" },
    { name: "Araya", lat: 10.5667, lng: -64.2500, state: "Sucre" },
    { name: "Cariaco", lat: 10.5000, lng: -63.5500, state: "Sucre" },

    // Falcón
    { name: "Coro", lat: 11.3950, lng: -69.6817, state: "Falcón" },
    { name: "Punto Fijo", lat: 11.7167, lng: -70.1833, state: "Falcón" },
    { name: "Dabajuro", lat: 10.6333, lng: -70.9667, state: "Falcón" },
    { name: "Churuguara", lat: 10.8167, lng: -69.6167, state: "Falcón" },
    { name: "Mirimire", lat: 11.1667, lng: -68.6333, state: "Falcón" },

    // Portuguesa
    { name: "Guanare", lat: 9.0500, lng: -69.7500, state: "Portuguesa" },
    { name: "Acarigua", lat: 9.5500, lng: -69.2000, state: "Portuguesa" },
    { name: "Araure", lat: 9.5667, lng: -69.2167, state: "Portuguesa" },
    { name: "Villa Bruzual", lat: 9.3333, lng: -69.1167, state: "Portuguesa" },
    { name: "Ospino", lat: 9.3000, lng: -69.4500, state: "Portuguesa" },

    // Barinas
    { name: "Barinas", lat: 8.6333, lng: -70.2000, state: "Barinas" },
    { name: "Socopó", lat: 8.2333, lng: -70.8167, state: "Barinas" },
    { name: "Santa Bárbara", lat: 7.8167, lng: -71.1667, state: "Barinas" },
    { name: "Barinitas", lat: 8.7667, lng: -70.4167, state: "Barinas" },
    { name: "Altamira", lat: 8.8167, lng: -70.5000, state: "Barinas" },

    // Yaracuy
    { name: "San Felipe", lat: 10.3333, lng: -68.7333, state: "Yaracuy" },
    { name: "Yaritagua", lat: 10.0833, lng: -69.1333, state: "Yaracuy" },
    { name: "Chivacoa", lat: 10.1667, lng: -68.9000, state: "Yaracuy" },
    { name: "Nirgua", lat: 10.1500, lng: -68.5667, state: "Yaracuy" },
    { name: "Cocorote", lat: 10.3167, lng: -68.7833, state: "Yaracuy" },

    // Vargas
    { name: "La Guaira", lat: 10.6000, lng: -66.9333, state: "Vargas" },
    { name: "Catia La Mar", lat: 10.6000, lng: -67.0333, state: "Vargas" },
    { name: "Maiquetía", lat: 10.6000, lng: -66.9500, state: "Vargas" },
    { name: "Caraballeda", lat: 10.6167, lng: -66.8500, state: "Vargas" },
    { name: "Macuto", lat: 10.6000, lng: -66.8833, state: "Vargas" },

    // Cojedes
    { name: "San Carlos", lat: 9.6500, lng: -68.5833, state: "Cojedes" },
    { name: "Tinaquillo", lat: 9.9167, lng: -68.3000, state: "Cojedes" },
    { name: "El Baúl", lat: 8.9667, lng: -68.3000, state: "Cojedes" },
    { name: "Tinaco", lat: 9.7000, lng: -68.4333, state: "Cojedes" },
    { name: "El Pao", lat: 9.6667, lng: -68.1167, state: "Cojedes" },

    // Guárico
    { name: "San Juan de los Morros", lat: 9.9000, lng: -67.3500, state: "Guárico" },
    { name: "Calabozo", lat: 8.9167, lng: -67.4167, state: "Guárico" },
    { name: "Valle de la Pascua", lat: 9.2000, lng: -66.0000, state: "Guárico" },
    { name: "Altagracia de Orituco", lat: 9.8500, lng: -66.3833, state: "Guárico" },
    { name: "Zaraza", lat: 9.3500, lng: -65.3167, state: "Guárico" },

    // Nueva Esparta
    { name: "La Asunción", lat: 11.0333, lng: -63.8667, state: "Nueva Esparta" },
    { name: "Porlamar", lat: 10.9500, lng: -63.8500, state: "Nueva Esparta" },
    { name: "Pampatar", lat: 11.0000, lng: -63.8000, state: "Nueva Esparta" },
    { name: "Juan Griego", lat: 11.0833, lng: -63.9667, state: "Nueva Esparta" },
    { name: "Santa Ana", lat: 11.1167, lng: -63.9167, state: "Nueva Esparta" },

    // Delta Amacuro
    { name: "Tucupita", lat: 9.0500, lng: -62.0500, state: "Delta Amacuro" },
    { name: "Pedernales", lat: 9.9667, lng: -62.2333, state: "Delta Amacuro" },
    { name: "Curiapo", lat: 8.5667, lng: -60.9833, state: "Delta Amacuro" },
    { name: "La Horqueta", lat: 8.3833, lng: -61.0833, state: "Delta Amacuro" },
    { name: "Sierra Imataca", lat: 8.4500, lng: -61.5000, state: "Delta Amacuro" },

    // Amazonas
    { name: "Puerto Ayacucho", lat: 5.6639, lng: -67.6236, state: "Amazonas" },
    { name: "San Fernando de Atabapo", lat: 4.0500, lng: -67.7000, state: "Amazonas" },
    { name: "Maroa", lat: 2.7167, lng: -67.5500, state: "Amazonas" },
    { name: "San Carlos de Río Negro", lat: 1.9167, lng: -67.0667, state: "Amazonas" },
    { name: "La Esmeralda", lat: 3.1667, lng: -65.5500, state: "Amazonas" },

    // Apure
    { name: "San Fernando de Apure", lat: 7.8833, lng: -67.4667, state: "Apure" },
    { name: "Guasdualito", lat: 7.2500, lng: -70.7333, state: "Apure" },
    { name: "Elorza", lat: 7.0667, lng: -69.5000, state: "Apure" },
    { name: "Achaguas", lat: 7.7833, lng: -68.2167, state: "Apure" },
    { name: "Biruaca", lat: 7.8500, lng: -67.5000, state: "Apure" }
];

// =================================================================================
// VARIABLES GLOBALES DEL SISTEMA
// =================================================================================

let map;
let lightningLayer, alertsLayer, citiesLayer, radarLayer, satelliteLayer, stormLayer, trajectoryLayer, vigilanceLayer;
let autoUpdateInterval;
let isAutoUpdateEnabled = false;
let isUpdating = false;
let mapLayers = {};
let advisorySliderInterval;
let allStates = [...new Set(VENEZUELA_CITIES.map(c => c.state))];
let currentStateIndex = 0;

let apiData = {};
let radarAnimation = { interval: null, layers: [], currentIndex: 0 };
let satelliteAnimation = { interval: null, layers: [], currentIndex: 0 };

let stormSystem;
let alertPanel;
let vigilanceSystem;

const layerStates = {
    lightning: true,
    radar: true,
    satellite: true,
    alerts: true,
    storms: true,
    vigilance: false
};

const imageConfig = {
    bounds: { north: 14.8, south: -3.9, west: -75.5, east: -56.5 },
    opacity: 0.5
};
let rawLightningData = [];
let calibrationBounds = { north: 14.2, south: 0.2, west: -75.8, east: -54.9 };

// Audio
let synthesis = window.speechSynthesis;
let voices = [];
let isSoundEnabled = true;
// =================================================================================
// INICIALIZACI&Oacute;N DEL SISTEMA
// =================================================================================

document.addEventListener('DOMContentLoaded', initSystem);

function initSystem() {
    console.log('🚀 Inicializando Sistema Integrado de Monitoreo Meteorol&oacute;gico Venezuela');
    
    initMap();
    initControls();

    stormSystem = new StormDetectionSystem({});
    alertPanel = new AlertPanel(document.getElementById('alerts-container'));
    vigilanceSystem = new VigilanceSystem(VENEZUELA_CITIES);
    
    initAudio(); // Inicializar audio

    stormSystem.on('onAlertIssued', (alert) => {
        console.log('🚨 Nueva alerta emitida:', alert.type, alert.area.name);
        alertPanel.updateAlerts(stormSystem.alerts); // Actualizar panel con todas las alertas
        // Reproducir sonido y, al terminar, iniciar la narración.
        playAlertSound(() => {
            speak(alert.message);
        });
    });

    setAutoUpdate(true);

    const calibrationPanel = document.getElementById('calibration-panel');
    const northInput = document.getElementById('north-bound');
    const southInput = document.getElementById('south-bound');
    const westInput = document.getElementById('west-bound');
    const eastInput = document.getElementById('east-bound');

    function populateInputs() {
        northInput.value = calibrationBounds.north;
        southInput.value = calibrationBounds.south;
        westInput.value = calibrationBounds.west;
        eastInput.value = calibrationBounds.east;
    }

    const calibrationButton = L.control({ position: 'bottomleft' });
    calibrationButton.onAdd = function (map) {
        const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        div.innerHTML = '<button title="Calibrar" style="background: white; padding: 5px 10px; border: 2px solid rgba(0,0,0,0.2); border-radius: 4px;">🛠️</button>';
        div.onclick = (e) => {
            L.DomEvent.stopPropagation(e);
            calibrationPanel.style.display = 'block';
            populateInputs();
        };
        return div;
    };
    calibrationButton.addTo(map);

    document.getElementById('close-calibration').onclick = () => {
        calibrationPanel.style.display = 'none';
    };

    document.getElementById('apply-calibration').onclick = () => {
        calibrationBounds.north = parseFloat(northInput.value);
        calibrationBounds.south = parseFloat(southInput.value);
        calibrationBounds.west = parseFloat(westInput.value);
        calibrationBounds.east = parseFloat(eastInput.value);
        console.log('Aplicando nueva calibración:', calibrationBounds);
        redrawLightning();
    };

    console.log('✅ Sistema inicializado correctamente');
}

function initMap() {
    map = L.map('map').setView(VENEZUELA_CONFIG.center, VENEZUELA_CONFIG.zoom);

    L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 18,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google | Sistema Meteorol&oacute;gico Venezuela'
    }).addTo(map);

    map.createPane('lightningPane');
    map.getPane('lightningPane').style.zIndex = 450;

    lightningLayer = L.layerGroup({ pane: 'lightningPane' });
    alertsLayer = L.layerGroup();
    citiesLayer = L.layerGroup().addTo(map); // Las ciudades siempre están visibles
    radarLayer = L.layerGroup();
    satelliteLayer = L.layerGroup();
    stormLayer = L.layerGroup();
    map.createPane('trajectoryPane');
    map.getPane('trajectoryPane').style.zIndex = 460; // Encima de stormLayer (450)
    trajectoryLayer = L.layerGroup({ pane: 'trajectoryPane' }).addTo(map);
    vigilanceLayer = L.layerGroup();

    mapLayers = {
        lightning: lightningLayer,
        alerts: alertsLayer,
        radar: radarLayer,
        satellite: satelliteLayer,
        storms: stormLayer,
        vigilance: vigilanceLayer
    };

    // Añadir capas al mapa según su estado inicial
    Object.keys(layerStates).forEach(layerName => {
        if (layerStates[layerName] && mapLayers[layerName]) {
            mapLayers[layerName].addTo(map);
        }
    });

    addCitiesToMap();

    // const { north, south, east, west } = imageConfig.bounds;
    // const imageBounds = [[north, west], [south, east]];
    // const referenceOverlay = L.imageOverlay('icons/mapa.png', imageBounds, {
    //     opacity: imageConfig.opacity,
    //     interactive: false,
    //     attribution: 'Referencia: Meteologix'
    // }).addTo(map);
    
    // L.control.layers(null, { "Imagen de Referencia": referenceOverlay }, {collapsed: false}).addTo(map);

    map.setMaxBounds([
        [VENEZUELA_CONFIG.bounds.south - 2, VENEZUELA_CONFIG.bounds.west - 2],
        [VENEZUELA_CONFIG.bounds.north + 2, VENEZUELA_CONFIG.bounds.east + 2]
    ]);

    console.log('🗺️ Mapa inicializado');
}

function addCitiesToMap() {
    VENEZUELA_CITIES.forEach(city => {
        const iconHtml = `<div style="
            width: 10px; height: 10px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            opacity: 0.3;
        "></div>`;
        const icon = L.divIcon({
            html: iconHtml,
            className: '',
            iconSize: [12, 12],
            iconAnchor: [6, 6]
        });

        L.marker([city.lat, city.lng], { icon: icon })
            .bindTooltip(city.name, { permanent: false, direction: 'right', offset: [10, 0], className: 'city-tooltip' })
            .addTo(citiesLayer);
    });
}

function initControls() {
    document.querySelectorAll('.toggle-btn[data-layer]').forEach(btn => {
        btn.addEventListener('click', () => {
            const layerName = btn.dataset.layer;
            layerStates[layerName] = !layerStates[layerName];
            btn.classList.toggle('active', layerStates[layerName]);
            toggleLayer(layerName, layerStates[layerName]);
        });
    });

    document.getElementById('legend-toggle').addEventListener('click', () => {
        const content = document.getElementById('legend-content');
        const button = document.getElementById('legend-toggle');
        if (content.style.display === 'none') {
            content.style.display = 'block';
            button.textContent = 'Ocultar Leyenda';
        } else {
            content.style.display = 'none';
            button.textContent = 'Mostrar Leyenda';
        }
    });
}

function toggleLayer(layerName, show) {
    const layer = mapLayers[layerName];
    if (layer) {
        if (show && !map.hasLayer(layer)) {
            map.addLayer(layer);
            if (layerName === 'radar') startAnimation(radarAnimation);
            if (layerName === 'satellite') startAnimation(satelliteAnimation);
        } else if (!show && map.hasLayer(layer)) {
            map.removeLayer(layer);
            if (layerName === 'radar') stopAnimation(radarAnimation);
            if (layerName === 'satellite') stopAnimation(satelliteAnimation);
        }
    }
}

// =================================================================================
// OBTENCI&Oacute;N Y PROCESAMIENTO DE DATOS
// =================================================================================

async function updateAllData() {
    console.log('🔄 Iniciando actualizaci&oacute;n de datos...');
    showLoading(true);

    try {
        console.log('1. Obteniendo datos de Rainviewer...');
        const rainviewerData = await fetchRainviewerData();
        console.log('2. Datos de Rainviewer recibidos:', rainviewerData ? 'OK' : 'Fallo');

        if (rainviewerData) {
            apiData = rainviewerData;
            updateRainviewerLayers(apiData);
        }

        console.log('3. Obteniendo datos de OpenMeteo...');
        const openMeteoData = await fetchOpenMeteoData();
        console.log('4. Datos de OpenMeteo recibidos:', openMeteoData ? 'OK' : 'Fallo');

        if (openMeteoData) {
            updateCitiesPanel(openMeteoData);
            
            // Generar y mostrar vigilancias de 48h
            const vigilances = vigilanceSystem.generateVigilances(openMeteoData);
            updateVigilancePanel(vigilances);

            // Generar y mostrar avisos de 7h
            const advisories7h = generateAdvisories(openMeteoData);
            updateAdvisoriesPanel(advisories7h);
        }

        console.log('5. Obteniendo datos de rayos...');
        await fetchData();
        console.log('6. Datos de rayos procesados.');

        console.log('7. Iniciando detección de tormentas...');
        await runStormDetection();
        console.log('8. Detección de tormentas completada.');

        updateStatusPanel();

        document.getElementById('api-status').textContent = 'Conectado';
        document.getElementById('api-status').style.color = '#4CAF50';
        console.log('✅ Actualizaci&oacute;n completada con &eacute;xito.');

    } catch (error) {
        console.error('❌ Error cr&iacute;tico durante la actualizaci&oacute;n de datos:', error);
        document.getElementById('api-status').textContent = 'Error';
        document.getElementById('api-status').style.color = '#F44336';
    } finally {
        console.log('🎬 Finalizando ciclo de actualizaci&oacute;n.');
        showLoading(false);
    }
}

async function fetchRainviewerData() {
    try {
        const response = await fetch('https://api.rainviewer.com/public/weather-maps.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching Rainviewer data:', error);
        return null;
    }
}

async function fetchOpenMeteoData() {
    const cityPromises = VENEZUELA_CITIES.map(city => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat.toFixed(2)}&longitude=${city.lng.toFixed(2)}&current=temperature_2m,precipitation,wind_speed_10m&hourly=precipitation_probability,lightning_potential,relative_humidity_2m,temperature_2m,wind_speed_10m&forecast_days=2&timezone=auto`;
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error for ${city.name}! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => ({
                ...city,
                weather: {
                    temperature: data.current.temperature_2m,
                    precipitation: data.current.precipitation,
                    windSpeed: data.current.wind_speed_10m,
                    precipitationProbability: data.hourly.precipitation_probability,
                    lightningPotential: data.hourly.lightning_potential,
                    relativeHumidity: data.hourly.relative_humidity_2m,
                    hourlyTemperature: data.hourly.temperature_2m,
                    hourlyWindSpeed: data.hourly.wind_speed_10m
                }
            }))
            .catch(error => {
                console.error(`Failed to fetch data for ${city.name}:`, error);
                return null; // Devuelve null para esta ciudad si falla
            });
    });

    try {
        const results = await Promise.all(cityPromises);
        return results.filter(r => r !== null); // Filtrar cualquier ciudad que haya fallado
    } catch (error) {
        console.error('Error fetching OpenMeteo data for all cities:', error);
        return null;
    }
}

function updateRainviewerLayers(apiData) {
    // Parar animaciones existentes
    stopAnimation(radarAnimation);
    stopAnimation(satelliteAnimation);

    // Preparar animación de Radar
    const radarFrames = (apiData.radar && apiData.radar.past) ? apiData.radar.past.concat(apiData.radar.nowcast || []) : [];
    radarAnimation.layers = buildAnimationLayers(radarFrames, `${apiData.host}`, 'radar');
    if (layerStates.radar) startAnimation(radarAnimation);

    // Preparar animación de Satélite
    const satelliteFrames = (apiData.satellite && apiData.satellite.infrared) ? apiData.satellite.infrared : [];
    satelliteAnimation.layers = buildAnimationLayers(satelliteFrames, `${apiData.host}`, 'satellite');
    if (layerStates.satellite) startAnimation(satelliteAnimation);
}

function buildAnimationLayers(frames, host, type) {
    const layers = [];
    const parentLayer = type === 'radar' ? radarLayer : satelliteLayer;
    parentLayer.clearLayers();

    if (frames.length === 0) return [];

    frames.forEach((frame, index) => {
        const url = type === 'radar'
            ? `${host}${frame.path}/256/{z}/{x}/{y}/2/1_1.webp`
            : `${host}${frame.path}/256/{z}/{x}/{y}/0/0_0.webp`;
        
        const layer = L.tileLayer(url, {
            tileSize: 256,
            opacity: 0, // Inicia invisible
            zIndex: frame.time
        });
        layer.addTo(parentLayer);
        layers.push(layer);
    });
    console.log(`🎞️ ${frames.length} fotogramas construidos para ${type}.`);
    return layers;
}

function startAnimation(animation) {
    stopAnimation(animation); // Asegurarse de que no haya una animación corriendo
    if (animation.layers.length === 0) return;

    animation.currentIndex = 0;
    
    const animate = () => {
        // Ocultar todas las capas
        animation.layers.forEach(l => l.setOpacity(0));
        
        // Mostrar la capa actual
        const currentLayer = animation.layers[animation.currentIndex];
        if (currentLayer) {
            currentLayer.setOpacity(0.8);
        }

        // Determinar el próximo índice y el tiempo de espera
        let timeout = 100; // Velocidad súper rápida
        if (animation.currentIndex === animation.layers.length - 1) {
            timeout = 2000; // Pausa en el último fotograma
            animation.currentIndex = 0; // Reiniciar
        } else {
            animation.currentIndex++;
        }
        
        animation.interval = setTimeout(animate, timeout);
    };

    animate();
}

function stopAnimation(animation) {
    if (animation.interval) {
        clearTimeout(animation.interval);
        animation.interval = null;
    }
}

function getColor(age) {
    if (age <= 1) return '#ff0000';
    if (age <= 3) return '#ff6600';
    if (age <= 6) return '#ffff00';
    if (age <= 9) return '#ffffff';
    return '#87CEEB';
}

function pixelToLatLng(x, y) {
    const mapBounds = calibrationBounds;
    const mapWidth = 800;
    const mapHeight = 600;
    const lat = mapBounds.north - (y / mapHeight) * (mapBounds.north - mapBounds.south);
    const lng = mapBounds.west + (x / mapWidth) * (mapBounds.east - mapBounds.west);
    return [lat, lng];
}

function updateStatus(message) {
    const statusElement = document.getElementById('status');
    if (statusElement) statusElement.innerHTML = message;
}

async function fetchData() {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = now.getUTCDate().toString().padStart(2, '0');
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const roundedMinutes = (Math.floor(now.getUTCMinutes() / 5) * 5).toString().padStart(2, '0');
    const timestamp = `${year}${month}${day}-${hours}${roundedMinutes}z`;
    
    updateStatus(`Buscando datos de rayos para: ${timestamp}`);
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const apiUrl = `https://meteologix.com/ve/lightning/venezuela/${timestamp}.html`;
    
    try {
        const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');
        rawLightningData = Array.from(doc.querySelectorAll('.ap.lgt'));
        redrawLightning();

        const statusMessage = `
            <strong>&Uacute;lt. Act. Rayos:</strong> ${new Date().toLocaleTimeString()}<br>
            <strong>Timestamp:</strong> ${timestamp}<br>
            <strong>Rayos V&aacute;lidos:</strong> ${lightningLayer.getLayers().length} / ${rawLightningData.length}
        `;
        updateStatus(statusMessage);
    } catch (error) {
        console.error('Error al obtener los datos de rayos:', error);
        updateStatus(`<span style="color: red;">Error al cargar datos de rayos: ${error.message}</span>`);
    }
}

function redrawLightning() {
    lightningLayer.clearLayers();
    rawLightningData.forEach((span) => {
        const pixelY = parseFloat(span.dataset.top);
        const pixelX = parseFloat(span.dataset.left);
        if (isNaN(pixelX) || isNaN(pixelY)) return;

        const [lat, lng] = pixelToLatLng(pixelX, pixelY);

        if (lat >= calibrationBounds.south && lat <= calibrationBounds.north && lng >= calibrationBounds.west && lng <= calibrationBounds.east) {
            const ageClass = Array.from(span.classList).find(c => c.startsWith('lgt-'));
            const age = ageClass ? parseInt(ageClass.split('-')[1]) : 0;
            const color = getColor(age);
            const customIcon = L.divIcon({
                className: 'lightning-icon',
                html: `<span style="color: ${color}; font-size: 12px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); opacity: 0.7;">⚡️</span>`,
                iconSize: [16, 16],
                iconAnchor: [8, 8]
            });
            L.marker([lat, lng], { icon: customIcon, pane: 'lightningPane' })
                .bindPopup(`<strong>⚡ Rayo detectado</strong><br>Edad: ${age * 5} min<br>Coords: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
                .addTo(lightningLayer);
        }
    });
    console.log(`Redibujado completado. Rayos válidos: ${lightningLayer.getLayers().length}`);
}

// =================================================================================
// ACTUALIZACI&Oacute;N DE LA INTERFAZ
// =================================================================================

function updateStatusPanel() {
    const now = new Date();
    document.getElementById('last-update').textContent = now.toLocaleTimeString('es-VE');
    document.getElementById('active-storms').textContent = lightningLayer.getLayers().length > 50 ? Math.ceil(Math.random() * 3) + 2 : (lightningLayer.getLayers().length > 10 ? 1 : 0);
}

function updateCitiesPanel(citiesData) {
    const container = document.getElementById('cities-container');
    container.innerHTML = '';
    if (!citiesData) {
        container.innerHTML = '<div style="text-align:center;opacity:0.7;">No se pudieron cargar los datos de las ciudades.</div>';
        return;
    }

    citiesData.forEach(city => {
        let status = 'safe';
        let statusText = 'SEGURO';
        if (city.weather.precipitationProbability > 60 || city.weather.windSpeed > 30) {
            status = 'danger';
            statusText = 'PELIGRO';
        } else if (city.weather.precipitationProbability > 30 || city.weather.windSpeed > 20) {
            status = 'warning';
            statusText = 'PRECAUCI&Oacute;N';
        }
        
        const item = `
            <div class="city-item">
                <span>${city.name} (${city.weather.temperature}°C)</span>
                <span class="city-status ${status}">${statusText}</span>
            </div>
        `;
        container.innerHTML += item;
    });
}

function generateAlerts(citiesData) {
    const alerts = [];
    if (!citiesData) return alerts;

    const severityMap = { 'severe': 3, 'moderate': 2, 'minor': 1 };

    citiesData.forEach(city => {
        let alertData = null;
        if (city.weather.precipitation > 5) {
            alertData = { level: 'severe', details: `Se registran lluvias fuertes (${city.weather.precipitation} mm) en este momento.` };
        } else if (city.weather.windSpeed > 40) {
            alertData = { level: 'moderate', details: `Se registran vientos fuertes de ${city.weather.windSpeed.toFixed(1)} km/h.` };
        }

        if (alertData) {
            alerts.push({
                id: `meteoalert_${city.name.replace(/\s/g, '')}_${Date.now()}`,
                type: 'WEATHER_ADVISORY',
                severity: severityMap[alertData.level] || 2,
                storm: {},
                area: { name: city.name, population: 100000 },
                timing: { eta: new Date(), minutesFromNow: 0, confidence: 1 },
                message: `${alertData.details}`,
                instructions: ['Tome precauciones en el área afectada.', 'Manténgase informado.'],
                issuedAt: Date.now(),
                status: 'ACTIVE',
                priority: 4
            });
        }
    });
    return alerts;
}

function updateVigilancePanel(vigilances) {
    const container = document.getElementById('vigilance-container');
    vigilanceLayer.clearLayers();

    if (vigilances.length === 0) {
        container.innerHTML = '<div class="no-alerts">✅ Sin vigilancias activas.</div>';
        return;
    }

    let content = '';
    vigilances.forEach(v => {
        const peakTime = new Date();
        peakTime.setHours(peakTime.getHours() + v.details.peakTime);

        content += `
            <div class="vigilance-item vigilance-${v.level}">
                <div class="vigilance-header">
                    <span class="vigilance-icon">▲</span>
                    <span class="vigilance-state">${v.state}</span>
                    <span class="vigilance-level">${v.type} ${'Leve,Moderada,Alta'.split(',')[v.level - 1]}</span>
                </div>
                <div class="vigilance-body">
                    <p>${v.description}</p>
                    <p><strong>Ciudades con mayor riesgo:</strong> ${v.details.cities.join(', ') || 'Todo el estado'}</p>
                </div>
            </div>
        `;

        const bounds = [[v.bounds.south, v.bounds.west], [v.bounds.north, v.bounds.east]];
        const popupContent = `
            <b>Vigilancia para ${v.state}</b><br>
            <p>${v.description}</p>
            <b>Ciudades con Mayor Riesgo:</b> ${v.details.cities.join(', ') || 'Todo el estado'}
        `;
        L.rectangle(bounds, {
            color: v.color,
            weight: 2,
            fillOpacity: 0.2
        }).bindPopup(popupContent).addTo(vigilanceLayer);
    });

    container.innerHTML = content; // Actualizar el DOM una sola vez al final.
}
function generateAdvisories(citiesData) {
    const advisories = [];
    if (!citiesData) return advisories;

    citiesData.forEach(city => {
        // Analizar las próximas 7 horas
        for (let i = 0; i < 7; i++) {
            const rainProb = city.weather.precipitationProbability?.[i] || 0;
            const lightningPot = city.weather.lightningPotential?.[i] || 0;
            const windSpeed = city.weather.hourlyWindSpeed?.[i] || 0;

            let advisoryData = null;
            if (lightningPot > 50 && rainProb > 40) {
                advisoryData = { level: 3, type: 'Tormentas Eléctricas', details: `Potencial de tormentas con lluvias (${rainProb}%) y rayos.` };
            } else if (rainProb > 60) {
                advisoryData = { level: 2, type: 'Lluvias Fuertes', details: `Alta probabilidad de lluvias (${rainProb}%).` };
            } else if (windSpeed > 35) {
                advisoryData = { level: 2, type: 'Viento Fuerte', details: `Ráfagas de viento de hasta ${windSpeed.toFixed(0)} km/h.` };
            } else if (rainProb > 40) {
                advisoryData = { level: 1, type: 'Lluvias', details: `Probabilidad de lluvias (${rainProb}%).` };
            }

            if (advisoryData) {
                advisories.push({
                    city: city.name,
                    state: city.state,
                    level: advisoryData.level,
                    type: advisoryData.type,
                    details: advisoryData.details,
                    hour: i
                });
                break; // Añadir solo el primer aviso encontrado para la ciudad
            }
        }
    });
    return advisories.sort((a, b) => b.level - a.level);
}

function updateAdvisoriesPanel(advisories) {
    const container = document.getElementById('advisories-container');
    if (!container) return;

    if (advisories.length === 0) {
        container.innerHTML = '<div class="no-alerts">🌤️ Sin avisos de mal tiempo.</div>';
        return;
    }

    let content = '';
    advisories.forEach(advisory => {
        const time = new Date();
        time.setHours(time.getHours() + advisory.hour);
        
        content += `
            <div class="alert alert-${advisory.level}">
                <div class="alert-header">
                    <span class="alert-type">${advisory.type}</span>
                    <span class="alert-time">Próximas ${advisory.hour + 1}h</span>
                </div>
                <div class="alert-content">
                    <h4>${advisory.city} (${advisory.state})</h4>
                    <p>${advisory.details}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = content;
}
function generateAdvisories(citiesData) {
    const advisories = [];
    if (!citiesData) return advisories;

    citiesData.forEach(city => {
        let cityAdvisory = null;
        // Analizar las próximas 7 horas para encontrar el riesgo MÁS ALTO
        for (let i = 0; i < 7; i++) {
            const rainProb = city.weather.precipitationProbability?.[i] || 0;
            const lightningPot = city.weather.lightningPotential?.[i] || 0;
            const windSpeed = city.weather.hourlyWindSpeed?.[i] || 0;

            let currentAdvisory = null;
            if (lightningPot > 50 && rainProb > 40) {
                currentAdvisory = { level: 3, type: 'Tormentas Eléctricas', details: `Potencial de tormentas con lluvias (${rainProb}%) y rayos.` };
            } else if (rainProb > 60) {
                currentAdvisory = { level: 2, type: 'Lluvias Fuertes', details: `Alta probabilidad de lluvias (${rainProb}%).` };
            } else if (windSpeed > 35) {
                currentAdvisory = { level: 2, type: 'Viento Fuerte', details: `Ráfagas de viento de hasta ${windSpeed.toFixed(0)} km/h.` };
            } else if (rainProb > 40) {
                currentAdvisory = { level: 1, type: 'Lluvias', details: `Probabilidad de lluvias (${rainProb}%).` };
            }

            if (currentAdvisory) {
                if (!cityAdvisory || currentAdvisory.level > cityAdvisory.level) {
                    cityAdvisory = {
                        ...currentAdvisory,
                        city: city.name,
                        state: city.state,
                        hour: i
                    };
                }
            }
        }
        if (cityAdvisory) {
            advisories.push(cityAdvisory);
        }
    });
    return advisories.sort((a, b) => b.level - a.level);
}

function updateAdvisoriesPanel(advisories) {
    clearInterval(advisorySliderInterval); // Detener el slider anterior

    const advisoriesByState = advisories.reduce((acc, advisory) => {
        (acc[advisory.state] = acc[advisory.state] || []).push(advisory);
        return acc;
    }, {});

    const header = document.getElementById('advisory-slider-header');
    const slide = document.getElementById('advisory-slide');

    function showNextState() {
        const stateName = allStates[currentStateIndex];
        const stateAdvisories = advisoriesByState[stateName] || [];

        header.textContent = `🔔 Avisos (7h) - ${stateName}`;
        
        let content = '';
        if (stateAdvisories.length > 0) {
            stateAdvisories.forEach(advisory => {
                content += `
                    <div class="vigilance-item vigilance-${advisory.level}">
                        <div class="vigilance-header">
                            <span class="vigilance-icon">${{1:'💧', 2:'💨', 3:'⚡'}[advisory.level] || '⚠️'}</span>
                            <span class="vigilance-state">${advisory.city}</span>
                            <span class="vigilance-level">${advisory.type}</span>
                        </div>
                        <div class="vigilance-body">
                            <p>${advisory.details}</p>
                            <p><strong>Riesgo principal dentro de:</strong> ${advisory.hour + 1} hora(s)</p>
                        </div>
                    </div>
                `;
            });
        } else {
            content = `<div class="no-alerts">✅ Sin avisos de mal tiempo para ${stateName}.</div>`;
        }
        
        slide.innerHTML = content;
        slide.classList.remove('fade-in');
        void slide.offsetWidth; // Truco para reiniciar la animación
        slide.classList.add('fade-in');

        currentStateIndex = (currentStateIndex + 1) % allStates.length;
    }

    showNextState(); // Mostrar el primer estado inmediatamente
    advisorySliderInterval = setInterval(showNextState, 10000); // Cambiar cada 10 segundos
}

function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
}

// =================================================================================
// CONTROLES DEL USUARIO
// =================================================================================

function setAutoUpdate(enabled) {
    isAutoUpdateEnabled = enabled;
    const btn = document.getElementById('auto-btn');
    
    clearInterval(autoUpdateInterval);

    if (isAutoUpdateEnabled) {
        btn.textContent = '⏰ Auto: ON';
        btn.classList.add('active');
        updateAllData();
        autoUpdateInterval = setInterval(updateAllData, 5 * 60 * 1000);
    } else {
        btn.textContent = '⏰ Auto: OFF';
        btn.classList.remove('active');
    }
}

function toggleAutoUpdate() {
    setAutoUpdate(!isAutoUpdateEnabled);
}

function showCalibration() {
    document.getElementById('calibration-panel').style.display = 'block';
}

function exportData() {
    alert('Funcionalidad de exportaci&oacute;n no implementada a&uacute;n.');
}

// ===============================================
// INTEGRACIÓN DEL SISTEMA DE TORMENTAS
// ===============================================

async function runStormDetection() {
    if (!stormSystem || rawLightningData.length === 0) {
        console.log('No hay datos de rayos para detectar tormentas.');
        return;
    }

    const lightningData = prepareLightningData();
    if (lightningData.length < 5) { // No ejecutar si hay muy pocos rayos
        stormLayer.clearLayers();
        trajectoryLayer.clearLayers();
        document.getElementById('active-storms').textContent = 0;
        return;
    }

    const radarData = prepareRadarData(lightningData);
    const satelliteData = prepareSatelliteData(lightningData);
    
    const weatherData = { radarData, satelliteData, lightningData };
    const populatedAreas = VENEZUELA_MUNICIPALITIES.map(m => ({
        id: m.municipio.replace(/\s/g, ''),
        name: m.municipio,
        lat: m.latitud,
        lon: m.longitud,
        state: m.estado,
        population: 100000 // Simular población
    }));

    const storms = await stormSystem.detectStorms(weatherData);
    const alerts = stormSystem.generateAlerts(storms, populatedAreas);

    drawStormsOnMap(storms);
    alertPanel.updateAlerts(alerts);
    drawAlertsOnMap(alerts);
    
    document.getElementById('active-storms').textContent = storms.length;
}

function prepareLightningData() {
    return rawLightningData.map(span => {
        const [lat, lon] = pixelToLatLng(parseFloat(span.dataset.left), parseFloat(span.dataset.top));
        return { lat, lon, timestamp: Date.now() };
    }).filter(p => p.lat && p.lon);
}

function prepareRadarData(lightningPoints) {
    // Simulación de datos de radar basada en rayos
    return lightningPoints.map(point => ({
        lat: point.lat + (Math.random() - 0.5) * 0.1,
        lon: point.lon + (Math.random() - 0.5) * 0.1,
        reflectivity: 45 + Math.random() * 15, // Simular reflectividad moderada a alta
        timestamp: point.timestamp
    }));
}

function prepareSatelliteData(lightningPoints) {
    // Simulación de datos de satélite
    return lightningPoints.map(point => ({
        lat: point.lat,
        lon: point.lon,
        cloudTop: 10000 + Math.random() * 4000, // 10-14 km
        temperature: -60 - Math.random() * 15, // -60 a -75 C
        timestamp: point.timestamp
    }));
}

function drawStormsOnMap(storms) {
    stormLayer.clearLayers();
    trajectoryLayer.clearLayers();

    const severityColors = { 1: '#ffc107', 2: '#fd7e14', 3: '#dc3545', 4: '#E91E63' };

    storms.forEach(storm => {
        // Dibujar cono de trayectoria
        if (storm.trajectory && storm.trajectory.length > 0) {
            drawStormCone(storm);
        }

        // Dibujar caja de la tormenta
        const bounds = [[storm.bounds.south, storm.bounds.west], [storm.bounds.north, storm.bounds.east]];
        const stormBoxClass = `storm-box storm-severity-${storm.severity}`;
        L.rectangle(bounds, {
            color: severityColors[storm.severity] || '#FFFFFF',
            weight: 4, // Borde más grueso
            fillOpacity: 0.25, // Relleno más opaco
            className: stormBoxClass
        }).addTo(stormLayer);

        // Marcador central con información
        const iconHtml = `<div style="color: ${severityColors[storm.severity]}; font-size: 14px; font-weight: bold; text-shadow: 1px 1px 2px #000;">🌪️</div>`;
        const stormIcon = L.divIcon({
            html: iconHtml,
            className: 'storm-icon',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        const popupContent = `
            <b>Tormenta ID:</b> ${storm.id.slice(-4)}<br>
            <b>Intensidad:</b> ${storm.intensity} (${storm.severity}/4)<br>
            <b>Reflectividad (Sim.):</b> ${storm.maxReflectivity.toFixed(1)} dBZ<br>
            <b>Rayos:</b> ${storm.lightningCount}<br>
            <b>Velocidad:</b> ${storm.movement.speed.toFixed(0)} km/h (${storm.movement.directionText})<br>
            <b>Confianza:</b> ${storm.confidence.toFixed(0)}%
        `;

        L.marker([storm.lat, storm.lon], { icon: stormIcon })
            .bindPopup(popupContent)
            .addTo(stormLayer);
    });
}

function drawStormCone(storm) {
    const trajectory = storm.trajectory;
    if (!trajectory || trajectory.length < 1) return;

    const conePoints = [[storm.lat, storm.lon]];
    const rightSidePoints = [];
    const baseWidth = 3; // km (Más estrecho)
    const uncertaintyGrowth = 4; // km per step (Menos ancho con el tiempo)

    trajectory.forEach((point, index) => {
        const uncertaintyRadius = baseWidth + (index * uncertaintyGrowth);
        const perpAngleLeft = (storm.movement.direction - 90) * Math.PI / 180;
        
        const latRad = point.lat * Math.PI / 180;
        
        const leftLat = point.lat + (uncertaintyRadius / 111) * Math.cos(perpAngleLeft);
        const leftLon = point.lon + (uncertaintyRadius / (111 * Math.cos(latRad))) * Math.sin(perpAngleLeft);
        conePoints.push([leftLat, leftLon]);

        const perpAngleRight = (storm.movement.direction + 90) * Math.PI / 180;
        const rightLat = point.lat + (uncertaintyRadius / 111) * Math.cos(perpAngleRight);
        const rightLon = point.lon + (uncertaintyRadius / (111 * Math.cos(latRad))) * Math.sin(perpAngleRight);
        rightSidePoints.push([rightLat, rightLon]);
    });
    
    const fullCone = conePoints.concat(rightSidePoints.reverse());

    const color = storm.severity >= 3 ? '#dc3545' : '#fd7e14';
    const coneClass = `storm-cone storm-severity-${storm.severity}`;

    L.polygon(fullCone, {
        color: color,
        weight: 3, // Borde más oscuro/grueso
        fillOpacity: 0.25,
        fillColor: color,
        dashArray: '10, 5',
        className: coneClass
    }).bindPopup(`
        <b>🎯 Cono de Trayectoria</b><br>
        Tormenta: ${storm.id.slice(-4)}<br>
        Proyección: 4 horas<br>
        <small>El área sombreada indica la zona de posible paso de la tormenta.</small>
    `).addTo(trajectoryLayer);
}

function drawAlertsOnMap(alerts) {
    alertsLayer.clearLayers();
    alerts.forEach(alert => {
        const city = VENEZUELA_CITIES.find(c => c.name === alert.area.name);
        if (city) {
            const radius = alert.severity * 15000; // 15km per severity level
            const color = {1: '#ffc107', 2: '#fd7e14', 3: '#dc3545', 4: '#842029'}[alert.severity] || '#ffc107';
            L.circle([city.lat, city.lng], {
                radius: radius,
                color: color,
                weight: 2,
                fillColor: color,
                fillOpacity: 0.2,
                className: 'alert-zone'
            }).bindPopup(`<b>${alert.type.replace('_', ' ')}</b><br><b>${alert.area.name}</b><br>${alert.message}`)
              .addTo(alertsLayer);
        }
    });
}

// ===============================================
// MÓDULO DE DETECCIÓN DE TORMENTAS
// ===============================================
class StormDetectionSystem {
  constructor(config = {}) {
    this.config = {
      radarThreshold: config.radarThreshold || 45, // dBZ
      lightningRadius: config.lightningRadius || 30, // km
      clusterRadius: config.clusterRadius || 70, // km
      minClusterPoints: config.minClusterPoints || 3,
      updateInterval: config.updateInterval || 300000, // 5 minutos
      ...config
    };
    
    this.storms = new Map();
    this.alerts = [];
    this.callbacks = {
      onStormDetected: [],
      onStormUpdated: [],
      onAlertIssued: [],
      onStormDissipated: []
    };
  }

  async detectStorms(data) {
    const { radarData, satelliteData, lightningData } = data;
    
    const significantRadarPoints = radarData.filter(point =>
      point.reflectivity >= this.config.radarThreshold
    );

    const clusters = this.createClusters(significantRadarPoints);

    const stormPromises = clusters.map((cluster, index) => {
      if (cluster.points.length >= this.config.minClusterPoints) {
        return this.analyzeStormCluster(cluster, index, {
          satelliteData,
          lightningData,
          timestamp: Date.now()
        });
      }
      return Promise.resolve(null);
    });
      
    const detectedStorms = (await Promise.all(stormPromises)).filter(s => s !== null);

    detectedStorms.forEach(storm => {
        if (storm) {
            this.updateStormTracking(storm);
        }
    });

    this.updateExistingStorms(detectedStorms);

    return detectedStorms;
  }

  createClusters(radarPoints) {
    const clusters = [];
    const processed = new Set();

    radarPoints.forEach((point, index) => {
      if (processed.has(index)) return;

      const cluster = {
        id: `cluster_${Date.now()}_${index}`,
        points: [point],
        centerLat: point.lat,
        centerLon: point.lon,
        maxReflectivity: point.reflectivity,
        bounds: {
          north: point.lat,
          south: point.lat,
          east: point.lon,
          west: point.lon
        }
      };

      processed.add(index);

      radarPoints.forEach((otherPoint, otherIndex) => {
        if (processed.has(otherIndex)) return;

        const distance = this.calculateDistance(
          point.lat, point.lon,
          otherPoint.lat, otherPoint.lon
        );

        if (distance <= this.config.clusterRadius) {
          cluster.points.push(otherPoint);
          processed.add(otherIndex);
          
          cluster.centerLat = cluster.points.reduce((sum, p) => sum + p.lat, 0) / cluster.points.length;
          cluster.centerLon = cluster.points.reduce((sum, p) => sum + p.lon, 0) / cluster.points.length;
          
          cluster.maxReflectivity = Math.max(cluster.maxReflectivity, otherPoint.reflectivity);
          
          cluster.bounds.north = Math.max(cluster.bounds.north, otherPoint.lat);
          cluster.bounds.south = Math.min(cluster.bounds.south, otherPoint.lat);
          cluster.bounds.east = Math.max(cluster.bounds.east, otherPoint.lon);
          cluster.bounds.west = Math.min(cluster.bounds.west, otherPoint.lon);
        }
      });

      clusters.push(cluster);
    });

    return clusters;
  }

  async analyzeStormCluster(cluster, index, additionalData) {
    const { satelliteData, lightningData, timestamp } = additionalData;

    const nearbyLightning = lightningData.filter(lightning => {
      const distance = this.calculateDistance(
        lightning.lat, lightning.lon,
        cluster.centerLat, cluster.centerLon
      );
      return distance <= this.config.lightningRadius;
    });

    if (nearbyLightning.length < 5) return null; // Ignorar si no hay suficientes rayos

    const nearbySatellite = satelliteData.filter(sat => {
      const distance = this.calculateDistance(
        sat.lat, sat.lon,
        cluster.centerLat, cluster.centerLon
      );
      return distance <= this.config.clusterRadius;
    });

    const stormAnalysis = this.calculateStormIntensity({
      maxReflectivity: cluster.maxReflectivity,
      lightningCount: nearbyLightning.length,
      satelliteData: nearbySatellite,
      area: this.calculateClusterArea(cluster)
    });

    if (stormAnalysis.severity < 1) return null;

    const movement = await this.calculateStormMovement(cluster.centerLat, cluster.centerLon);

    const stormId = `STORM_${timestamp}_${index.toString().padStart(3, '0')}`;

    return {
      id: stormId,
      lat: cluster.centerLat,
      lon: cluster.centerLon,
      bounds: cluster.bounds,
      intensity: stormAnalysis.intensity,
      severity: stormAnalysis.severity,
      maxReflectivity: cluster.maxReflectivity,
      lightningCount: nearbyLightning.length,
      lightningData: nearbyLightning,
      area: stormAnalysis.area,
      movement: movement,
      trajectory: this.calculateTrajectory(cluster.centerLat, cluster.centerLon, movement),
      timestamp: timestamp,
      status: 'ACTIVE',
      confidence: stormAnalysis.confidence,
      threats: this.assessThreats(stormAnalysis),
      rawData: {
        radarPoints: cluster.points,
        satellitePoints: nearbySatellite
      }
    };
  }

  calculateStormIntensity(data) {
    const { lightningCount } = data;
    
    let severity = 0;
    let intensity = 'WEAK';
    let confidence = 75; // Se establece una confianza base alta ya que depende de datos directos

    // Clasificación basada en rayos por 5 minutos:
    // Débil: 5-20, Moderada: 21-70, Fuerte: 71-200, Severa: >200
    if (lightningCount > 200) {
        intensity = 'SEVERE';
        severity = 4; // Rosa/Severa
    } else if (lightningCount > 70) {
        intensity = 'STRONG';
        severity = 3; // Rojo/Fuerte
    } else if (lightningCount > 20) {
        intensity = 'MODERATE';
        severity = 2; // Naranja/Moderada
    } else if (lightningCount >= 5) {
        intensity = 'WEAK';
        severity = 1; // Amarillo/Débil
    } else {
        intensity = 'NONE';
        severity = 0;
    }

    return {
      intensity,
      severity,
      confidence: confidence,
      area: data.area,
      factors: {
        radar: data.maxReflectivity,
        lightning: lightningCount,
        satellite: data.satelliteData.length,
        areaFactor: data.area
      }
    };
  }

  async calculateStormMovement(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(3)}&longitude=${lon.toFixed(3)}&hourly=windspeed_500hPa,winddirection_500hPa&forecast_days=1`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Usar el primer dato horario disponible
        const speed = data.hourly.windspeed_500hPa[0];
        const windDirection = data.hourly.winddirection_500hPa[0];

        if (typeof speed === 'number' && typeof windDirection === 'number') {
            // Convertir dirección del viento (de dónde viene) a dirección de movimiento (hacia dónde va)
            const stormDirection = (windDirection + 180) % 360;
            
            return {
                speed: speed, // km/h
                direction: stormDirection, // degrees
                directionText: this.bearingToDirection(stormDirection),
                confidence: 'HIGH',
                method: 'OPEN_METEO_500HPA'
            };
        } else {
            throw new Error('Invalid wind data from API');
        }
    } catch (error) {
        console.error('Error fetching wind data from Open-Meteo:', error);
        // Devolver un valor por defecto en caso de error
        return {
            speed: 25, // km/h
            direction: 270, // West
            directionText: 'W',
            confidence: 'LOW',
            method: 'DEFAULT_FALLBACK'
        };
    }
  }

  calculateTrajectory(lat, lon, movement) {
    const trajectory = [];
    const timeSteps = [30, 60, 90, 120, 150, 180, 210, 240]; // minutos (4 horas)
    
    timeSteps.forEach(minutes => {
      const distanceKm = (movement.speed * minutes) / 60;
      const directionRad = (movement.direction * Math.PI) / 180;
      
      const deltaLat = (distanceKm / 111) * Math.cos(directionRad);
      const deltaLon = (distanceKm / (111 * Math.cos(lat * Math.PI / 180))) * Math.sin(directionRad);
      
      const newLat = lat + deltaLat;
      const newLon = lon + deltaLon;
      
      trajectory.push({
        lat: newLat,
        lon: newLon,
        timeMinutes: minutes,
        eta: new Date(Date.now() + minutes * 60000),
        confidence: movement.confidence === 'HIGH' ? 0.9 - (minutes / 180) : 0.7 - (minutes / 150)
      });
    });
    
    return trajectory;
  }

  generateAlerts(storms, populatedAreas = []) {
    const newAlerts = [];
    
    storms.forEach(storm => {
        if (storm.severity < 1) return; // Skip non-threatening storms

        const threatenedMunicipalities = new Map(); // Use a Map to avoid duplicate municipalities

        // Find all unique municipalities under the storm's path (current and trajectory)
        const allPoints = [{lat: storm.lat, lon: storm.lon}, ...storm.trajectory];
        allPoints.forEach(point => {
            const threats = this.getThreatenedAreas(point.lat, point.lon, storm.area, populatedAreas);
            threats.forEach(muni => {
                if (!threatenedMunicipalities.has(muni.name)) {
                    threatenedMunicipalities.set(muni.name, muni);
                }
            });
        });

        if (threatenedMunicipalities.size > 0) {
            const alert = this.createConsolidatedAlert(storm, Array.from(threatenedMunicipalities.values()));
            // Only add if it's a new storm alert
            if (alert && !this.alerts.some(a => a.storm.id === storm.id)) {
                 newAlerts.push(alert);
            }
        }
    });

    this.alerts = [...this.alerts.filter(alert => !alert.expired), ...newAlerts];
    
    newAlerts.forEach(alert => {
      this.triggerCallback('onAlertIssued', alert);
    });

    return newAlerts;
  }

  createConsolidatedAlert(storm, municipalities) {
    const alertType = this.determineAlertType(storm);
    const alertId = `CONSOLIDATED_${alertType}_${storm.id}`;

    // The 'area' will now be the state(s) affected.
    const affectedStates = [...new Set(municipalities.map(m => m.state))].join(', ');

    return {
      id: alertId,
      type: alertType,
      severity: storm.severity,
      storm: { ...storm },
      area: {
        name: affectedStates,
        municipalities: municipalities.map(m => m.name)
      },
      timing: { // We can just use the storm's timestamp
        eta: new Date(storm.timestamp),
        minutesFromNow: 0,
        confidence: storm.confidence
      },
      message: this.generateConsolidatedAlertMessage(storm, municipalities),
      instructions: this.generateSafetyInstructions(storm),
      issuedAt: Date.now(),
      expiresAt: Date.now() + (2 * 60 * 60 * 1000), // 2 horas
      status: 'ACTIVE',
      priority: 5 - storm.severity
    };
  }

  determineAlertType(storm) {
    switch (storm.severity) {
        case 4: return 'Alerta de Tormenta Eléctrica Severa';
        case 3: return 'Alerta de Tormenta Eléctrica Fuerte';
        case 2: return 'Aviso de Tormenta Eléctrica Moderada';
        case 1: return 'Aviso de Tormenta Eléctrica';
        default: return 'Información Meteorológica';
    }
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  calculateBearing(lat1, lon1, lat2, lon2) {
    const dLon = this.toRadians(lon2 - lon1);
    const lat1Rad = this.toRadians(lat1);
    const lat2Rad = this.toRadians(lat2);
    
    const y = Math.sin(dLon) * Math.cos(lat2Rad);
    const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) -
              Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);
    
    const bearing = Math.atan2(y, x);
    return (bearing * 180 / Math.PI + 360) % 360;
  }

  bearingToDirection(bearing) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                       'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(bearing / 22.5) % 16;
    return directions[index];
  }

  on(event, callback) {
    if (this.callbacks[event]) {
      this.callbacks[event].push(callback);
    }
  }

  triggerCallback(event, data) {
    if (this.callbacks[event]) {
      this.callbacks[event].forEach(callback => callback(data));
    }
  }

  calculateClusterArea(cluster) {
    const latRange = cluster.bounds.north - cluster.bounds.south;
    const lonRange = cluster.bounds.east - cluster.bounds.west;
    return latRange * lonRange * 111 * 111;
  }

  assessThreats(stormAnalysis) {
    const threats = [];
    
    if (stormAnalysis.severity >= 4) {
      threats.push('Vientos destructivos', 'Lluvias torrenciales', 'Actividad eléctrica severa y frecuente');
    } else if (stormAnalysis.severity >= 3) {
      threats.push('Vientos fuertes', 'Lluvias intensas', 'Actividad eléctrica frecuente');
    } else if (stormAnalysis.severity >= 2) {
        threats.push('Rachas de viento', 'Lluvias moderadas a fuertes', 'Actividad eléctrica');
    } else if (stormAnalysis.severity >= 1) {
      threats.push('Rachas de viento', 'Fuertes lluvias', 'Actividad eléctrica');
    }
    
    return threats;
  }

  updateStormTracking(storm) {
    const existingStorm = this.storms.get(storm.id);
    
    if (existingStorm) {
      existingStorm.history = existingStorm.history || [];
      existingStorm.history.push({
        lat: existingStorm.lat,
        lon: existingStorm.lon,
        timestamp: existingStorm.timestamp
      });
      
      Object.assign(existingStorm, storm);
      this.triggerCallback('onStormUpdated', existingStorm);
    } else {
      storm.history = [];
      this.storms.set(storm.id, storm);
      this.triggerCallback('onStormDetected', storm);
    }
  }

  updateExistingStorms(currentStorms) {
    const currentStormIds = new Set(currentStorms.map(s => s.id));
    
    this.storms.forEach((storm, id) => {
      if (!currentStormIds.has(id) && storm.status === 'ACTIVE') {
        storm.status = 'DISSIPATED';
        storm.dissipatedAt = Date.now();
        this.triggerCallback('onStormDissipated', storm);
      }
    });
  }

  findSimilarPreviousStorm(cluster) {
    const candidates = Array.from(this.storms.values()).filter(storm => {
      const distance = this.calculateDistance(
        storm.lat, storm.lon,
        cluster.centerLat, cluster.centerLon
      );
      return distance < 100 && storm.history && storm.history.length > 0;
    });

    if (candidates.length > 0) {
      const closest = candidates.reduce((prev, curr) => {
        const prevDist = this.calculateDistance(prev.lat, prev.lon, cluster.centerLat, cluster.centerLon);
        const currDist = this.calculateDistance(curr.lat, curr.lon, cluster.centerLat, cluster.centerLon);
        return currDist < prevDist ? curr : prev;
      });
      
      return [closest, ...closest.history];
    }
    
    return null;
  }

  getTypicalStormMovement(lat, lon) {
    if (lat >= 25 && lat <= 50 && lon >= -125 && lon <= -65) {
      return {
        speed: 25 + Math.random() * 20,
        direction: 120 + (Math.random() - 0.5) * 60,
        directionText: 'SE',
        confidence: 'MEDIUM',
        method: 'CLIMATOLOGICAL'
      };
    }
    
    return {
      speed: 20,
      direction: 135,
      directionText: 'SE',
      confidence: 'LOW',
      method: 'DEFAULT'
    };
  }

  getThreatenedAreas(lat, lon, stormArea, populatedAreas) {
    const threatRadius = Math.sqrt(stormArea) + 25; // Define search radius
    
    return populatedAreas.filter(area => {
      // Use area.lon which is consistent with the new populatedAreas structure
      const distance = this.calculateDistance(lat, lon, area.lat, area.lon);
      return distance <= threatRadius;
    });
  }

  isDuplicateAlert(newAlert, existingAlerts) {
    return existingAlerts.some(alert => alert.id === newAlert.id);
  }

  generateConsolidatedAlertMessage(storm, municipalities) {
    const alertType = this.determineAlertType(storm);
    const nowStr = new Date().toLocaleTimeString('es-VE', { hour: 'numeric', minute: 'numeric', hour12: true });
    
    const states = [...new Set(municipalities.map(m => m.state))];
    const municipalitiesList = municipalities.map(m => m.name).join(', ');

    const mainMessage = `A las ${nowStr}, se emite un ${alertType} para el estado de ${states.join(', ')}.`;
    
    const details = `Una tormenta ${storm.intensity.toLowerCase()} con ${storm.lightningCount} rayos se aproxima, moviéndose hacia el ${storm.movement.directionText} a ${storm.movement.speed.toFixed(0)} km/h.`;

    const affected = `Municipios bajo amenaza: ${municipalitiesList}.`;

    const risks = `Riesgos: ${storm.threats.join(', ')}. Busque refugio y manténgase informado.`;

    return `${mainMessage} ${details} ${affected} ${risks}`;
  }

  generateSafetyInstructions(storm) {
    const instructions = [];
    
    if (storm.threats && storm.threats.includes('TORNADO')) {
      instructions.push(
        "🌪️ TORNADO: Busque refugio inmediatamente en el nivel más bajo de un edificio sólido",
        "Aléjese de ventanas y vaya al centro del edificio",
        "Si está en un vehículo, abandónelo y busque refugio en una zanja"
      );
    } else if (storm.severity >= 3) {
      instructions.push(
        "⛈️ TORMENTA SEVERA: Permanezca en interiores",
        "Evite ventanas y puertas",
        "No use teléfonos con cable ni aparatos eléctricos"
      );
    }
    
    if (storm.threats && storm.threats.includes('DESTRUCTIVE_HAIL')) {
      instructions.push(
        "🧊 GRANIZO DESTRUCTIVO: Proteja vehículos bajo techo",
        "No salga al exterior durante la tormenta"
      );
    }
    
    if (storm.lightningCount > 5) {
      instructions.push(
        "⚡ RAYOS FRECUENTES: Permanezca alejado de objetos metálicos",
        "No use aparatos eléctricos conectados a la red"
      );
    }
    
    instructions.push(
      "📱 Manténgase informado a través de medios oficiales",
      "🚨 Tenga preparado un kit de emergencia"
    );
    
    return instructions;
  }

  calculateAlertPriority(storm, area, trajectoryPoint) {
    let priority = 5;
    
    priority -= storm.severity;
    
    if (trajectoryPoint.timeMinutes < 15) priority -= 2;
    else if (trajectoryPoint.timeMinutes < 30) priority -= 1;
    
    if (area.population > 100000) priority -= 1;
    else if (area.population > 50000) priority -= 0.5;
    
    return Math.max(1, Math.round(priority));
  }
}
class AlertPanel {
  constructor(container) {
    this.container = container;
    this.alerts = [];
  }

  updateAlerts(alerts) {
    this.alerts = alerts.sort((a, b) => b.issuedAt - a.issuedAt);
    this.render();
  }

  render() {
    if (this.alerts.length === 0) {
        this.container.innerHTML = '<div class="no-alerts">🌤️ Sin alertas de tormentas</div>';
        return;
    }

    const alertsHTML = this.alerts.map(alert => {
        const municipalitiesText = alert.area.municipalities.join(', ');
        const severityClass = `alert-severity-${alert.severity}`;
        return `
          <div class="alert ${severityClass}" data-alert-id="${alert.id}">
            <div class="alert-header">
              <span class="alert-type">${alert.type}</span>
              <span class="alert-time">${new Date(alert.issuedAt).toLocaleTimeString('es-VE')}</span>
            </div>
            <div class="alert-content">
              <h4>Alerta para: ${alert.area.name}</h4>
              <p><strong>Municipios Afectados:</strong> ${municipalitiesText}</p>
              <p>${alert.message}</p>
              <div class="alert-instructions">
                ${alert.instructions.map(instruction => `<p>• ${instruction}</p>`).join('')}
              </div>
            </div>
          </div>
        `;
    }).join('');

    this.container.innerHTML = alertsHTML;
  }
}
// ===============================================
// MÓDULO DE VIGILANCIA DE MAL TIEMPO (48H)
// ===============================================
class VigilanceSystem {
    constructor(cities) {
        this.cities = cities;
        this.states = [...new Set(cities.map(c => c.state))];
        this.threatLevels = {
            ninguna: 0,
            leve: 1,
            moderada: 2,
            alta: 3
        };
        this.threatColors = {
            1: 'yellow',
            2: 'orange',
            3: 'red'
        };
    }

    generateVigilances(citiesData) {
        const stateVigilances = [];

        // 1. Agrupar datos por estado
        const dataByState = this.groupDataByState(citiesData);

        // 2. Analizar cada estado
        for (const stateName in dataByState) {
            const cityDataForState = dataByState[stateName];
            const vigilance = this.analyzeState(cityDataForState, stateName);
            if (vigilance.level > this.threatLevels.ninguna) {
                stateVigilances.push(vigilance);
            }
        }

        return stateVigilances.sort((a, b) => b.level - a.level);
    }

    groupDataByState(citiesData) {
        const dataByState = {};
        this.cities.forEach(city => {
            const cityWeather = citiesData.find(c => c.name === city.name);
            if (cityWeather) {
                if (!dataByState[city.state]) {
                    dataByState[city.state] = [];
                }
                dataByState[city.state].push(cityWeather);
            }
        });
        return dataByState;
    }

    analyzeState(citiesInState, stateName) {
        const hourlyThreats = [];

        // 1. Analizar cada hora y almacenar la amenaza dominante de esa hora
        for (let i = 0; i < 48; i++) {
            let cityScores = { rain: 0, wind: 0, lightning: 0, heat: 0 };
            let maxProbs = { rain: 0, lightning: 0 };

            citiesInState.forEach(city => {
                const rainProb = city.weather.precipitationProbability?.[i] || 0;
                const lightningPot = city.weather.lightningPotential?.[i] || 0;
                const windSpeed = city.weather.hourlyWindSpeed?.[i] || 0;
                const temp = city.weather.hourlyTemperature?.[i] || 0;

                if (rainProb > 50) cityScores.rain++;
                if (windSpeed > 30) cityScores.wind++;
                if (lightningPot > 40) cityScores.lightning++;
                if (temp > 35) cityScores.heat++;
                
                if (rainProb > maxProbs.rain) maxProbs.rain = rainProb;
                if (lightningPot > maxProbs.lightning) maxProbs.lightning = lightningPot;
            });

            const threats = [
                { type: 'Tormentas', score: cityScores.lightning, prob: maxProbs.lightning },
                { type: 'Lluvias', score: cityScores.rain, prob: maxProbs.rain },
                { type: 'Viento', score: cityScores.wind, prob: 0 },
                { type: 'Calor', score: cityScores.heat, prob: 0 }
            ].sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score;
                return b.prob - a.prob;
            });
            
            const dominantThreat = threats[0];
            if (dominantThreat.score > 0) {
                const affectedRatio = dominantThreat.score / citiesInState.length;
                let level = this.threatLevels.ninguna;
                if (affectedRatio > 0.6) level = this.threatLevels.alta;
                else if (affectedRatio > 0.3) level = this.threatLevels.moderada;
                else level = this.threatLevels.leve;
                
                hourlyThreats.push({ hour: i, level: level, type: dominantThreat.type, prob: dominantThreat.prob });
            }
        }

        if (hourlyThreats.length === 0) return { state: stateName, level: 0 };

        // 2. Encontrar la hora con la amenaza más significativa en todo el período
        const peakThreat = hourlyThreats.sort((a, b) => {
            if (b.level !== a.level) return b.level - a.level;
            return b.prob - a.prob;
        })[0];

        // 3. Construir el objeto de vigilancia final basado en la hora pico
        const peakHour = peakThreat.hour;
        const cities = citiesInState.filter(city => {
            switch(peakThreat.type) {
                case 'Tormentas': return (city.weather.lightningPotential?.[peakHour] || 0) > 40;
                case 'Lluvias': return (city.weather.precipitationProbability?.[peakHour] || 0) > 50;
                case 'Viento': return (city.weather.windSpeed?.[peakHour] || 0) > 30;
                case 'Calor': return (city.weather.hourlyTemperature?.[peakHour] || 0) > 35;
                default: return false;
            }
        }).map(c => c.name).slice(0, 3);

        const lats = citiesInState.map(c => c.lat);
        const lngs = citiesInState.map(c => c.lng);
        const bounds = {
            north: Math.max(...lats) + 0.1,
            south: Math.min(...lats) - 0.1,
            east: Math.max(...lngs) + 0.1,
            west: Math.min(...lngs) - 0.1
        };

        const description = this.generateVigilanceDescription(peakThreat);

        return {
            state: stateName,
            level: peakThreat.level,
            color: this.threatColors[peakThreat.level] || 'transparent',
            type: peakThreat.type,
            description: description,
            details: { peakTime: peakHour, cities: cities },
            bounds: bounds
        };
    }

    getPeriodOfDay(hour) {
        if (hour >= 5 && hour < 12) return 'en horas de la mañana';
        if (hour >= 12 && hour < 19) return 'en horas de la tarde';
        return 'en horas de la noche y madrugada';
    }

    generateVigilanceDescription(threat) {
        const date = new Date();
        date.setHours(date.getHours() + threat.hour);
        const day = date.toLocaleDateString('es-VE', { weekday: 'long', day: 'numeric', month: 'long' });
        const period = this.getPeriodOfDay(date.getHours());
        const probability = Math.round(threat.prob);
        const levelText = {'1':'baja','2':'moderada','3':'alta'}[threat.level] || 'baja';

        let probText = '';
        if (threat.type === 'Tormentas' || threat.type === 'Lluvias') {
            probText = ` (hasta ${probability}%)`;
        }

        let threatText = '';
        switch (threat.type) {
            case 'Tormentas':
                threatText = `Existe una probabilidad ${levelText}${probText} de que ocurran <strong>tormentas eléctricas</strong>`;
                break;
            case 'Lluvias':
                threatText = `Existe una probabilidad ${levelText}${probText} de que ocurran <strong>lluvias</strong>`;
                break;
            case 'Viento':
                threatText = `Se anticipa una ${levelText} probabilidad de <strong>vientos fuertes</strong>`;
                break;
            case 'Calor':
                threatText = `Se anticipa una ${levelText} probabilidad de <strong>altas temperaturas</strong>`;
                break;
        }

        return `${threatText} el <strong>${day}</strong>, principalmente ${period}.`;
    }
}
// =================================================================================
// GESTIÓN DE AUDIO Y VOZ
// =================================================================================
function initAudio() {
    const voiceSelect = document.getElementById('voice-select');
    const soundToggle = document.getElementById('sound-toggle');

    if (!voiceSelect || !soundToggle) {
        console.warn("Controles de audio no encontrados en el HTML. La funcionalidad de voz estará deshabilitada.");
        isSoundEnabled = false;
        return;
    }

    function populateVoiceList() {
        voices = synthesis.getVoices().filter(v => v.lang.startsWith('es'));
        if (voices.length === 0) return;
        voiceSelect.innerHTML = voices.map((voice, i) => `<option value="${i}">${voice.name} (${voice.lang})</option>`).join('');
    }

    populateVoiceList();
    if (synthesis.onvoiceschanged !== undefined) {
        synthesis.onvoiceschanged = populateVoiceList;
    }

    soundToggle.addEventListener('click', () => {
        isSoundEnabled = !isSoundEnabled;
        soundToggle.textContent = isSoundEnabled ? '🔊' : '🔇';
        soundToggle.classList.toggle('active', isSoundEnabled);
        if (!isSoundEnabled) synthesis.cancel();
    });

    voiceSelect.addEventListener('change', () => {
        if (!isSoundEnabled) return;
        const selectedVoiceIndex = voiceSelect.value;
        const selectedVoice = voices[selectedVoiceIndex];
        if (selectedVoice) {
            synthesis.cancel(); // Detener cualquier narración en curso
            const testUtterance = new SpeechSynthesisUtterance(`Esta es la voz de ${selectedVoice.name}`);
            testUtterance.voice = selectedVoice;
            testUtterance.volume = 1;
            testUtterance.pitch = 1;
            testUtterance.rate = 1;
            synthesis.speak(testUtterance);
        }
    });
}

function playAlertSound(callback) {
    if (!isSoundEnabled) {
        if (callback) callback();
        return;
    }
    const audio = new Audio('Audios/Alerta-tormenta.mp3');
    audio.volume = 0.3; // Reducir el volumen del sonido de la alerta
    
    // Cuando el sonido termine, ejecuta el callback si existe.
    audio.onended = () => {
        if (callback) {
            callback();
        }
    };

    audio.play().catch(e => {
        console.error("Error al reproducir sonido de alerta:", e);
        if (callback) callback();
    });
}

function speak(text) {
    if (!isSoundEnabled || synthesis.speaking) return;
    const utterance = new SpeechSynthesisUtterance(text);
    const voiceSelect = document.getElementById('voice-select');
    const selectedVoiceIndex = voiceSelect ? voiceSelect.value : 0;
    
    utterance.voice = voices[selectedVoiceIndex] || voices.find(v => v.lang === 'es-ES') || voices[0];
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1; // Aumentado al máximo
    synthesis.speak(utterance);
}