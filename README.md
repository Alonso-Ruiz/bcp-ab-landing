# 🏦 BCP A/B Test — Landing Tarjetas de Crédito

## 🔗 Demo en vivo
URL: [https://alonso-ruiz.github.io/bcp-ab-landing/](https://alonso-ruiz.github.io/bcp-ab-landing/)

Para ver la variante B abrir en modo incógnito

## 💡 Hipótesis del experimento
"Modificar el color y mensaje del banner principal puede aumentar el porcentaje de clics (CTR) hacia el formulario de solicitud de tarjeta de crédito."

## 🎯 Objetivo
Validar qué variante del banner genera mayor CTR y tasa de envío del formulario, midiendo los eventos registrados en GTM via dataLayer.

## 🧪 Variantes del experimento

| Variante | Color | CTA | Descripción |
|---|---|---|---|
| A | Azul #003DA6 | "Solicita ahora" | Banner azul |
| B | Naranja #FF6600 | "Aplica ya" | Banner naranja |

<img width="1311" height="653" alt="image" src="https://github.com/user-attachments/assets/902e2fcb-aaf2-434c-81c1-8ad52d902e51" />

<img width="1312" height="653" alt="image" src="https://github.com/user-attachments/assets/7be54f0c-298b-4773-b949-20d48be37403" />

<!-- Agrega aquí la captura de la Variante A -->

<!-- Agrega aquí la captura de la Variante B -->

## ⚙️ Stack tecnológico

- React 18 + Vite
- Tailwind CSS v4
- Google Tag Manager via dataLayer
- GitHub Pages para el deploy

## 📁 Estructura del proyecto
```text
bcp-ab-landing/
├── public/
│   └── bcp-logo.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   └── Form/
│   │       └── Form.jsx
│   ├── hooks/
│   │   └── useVariant.js
│   ├── utils/
│   │   └── dataLayer.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 📊 Eventos GTM implementados

| Evento | Action | Cuándo se dispara | Variant |
|---|---|---|---|
| experiment_event | experiment_viewed | Al cargar el banner | A o B |
| experiment_event | click_cta | Al hacer click en el CTA | A o B |
| experiment_event | form_submit | Al enviar el formulario exitosamente | A o B |

<img width="1319" height="273" alt="image" src="https://github.com/user-attachments/assets/67cf2493-e455-4f11-9e66-06607d94b435" />


<img width="1325" height="299" alt="image" src="https://github.com/user-attachments/assets/fb007be3-2654-4eac-960f-94b0a5a50af5" />

<!-- Agrega aquí la captura de los eventos en la consola (window.dataLayer) -->

## 💻 Código del tracking
```javascript
export function pushExperimentViewed(variant) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'experiment_event',
    experimentId: 'bcp_banner_test_v1',
    action: 'experiment_viewed',
    variant: variant,
    label: variant === 'A' ? 'Solicita ahora' : 'Aplica ya'
  });
}

export function pushCTAClick(variant, label) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'experiment_event',
    experimentId: 'bcp_banner_test_v1',
    action: 'click_cta',
    variant: variant,
    label: label
  });
}

export function pushFormSubmit(variant) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'experiment_event',
    experimentId: 'bcp_banner_test_v1',
    action: 'form_submit',
    variant: variant,
    label: 'Formulario enviado'
  });
}
```

## 🚀 Cómo correr el proyecto localmente
```bash
git clone https://github.com/alonso-ruiz/bcp-ab-landing.git
cd bcp-ab-landing
npm install
npm run dev
```

## 📦 Cómo hacer el deploy
```bash
npm run deploy
```

## 🔍 Cómo verificar el tracking
1. Abre la página desplegada.
2. Presiona F12 (o haz click derecho "Inspeccionar") y ve a la pestaña **Console**.
3. Realiza la acción que quieres probar (ver la página, hacer click, enviar el form).
4. Escribe `window.dataLayer` en la consola para confirmar que los eventos se guardaron.

## 📝 Notas técnicas

- La variante se asigna aleatoriamente por sesión usando sessionStorage
- Para ver la variante B abrir en modo incógnito
- Los eventos siguen la estructura requerida por GTM con experimentId, action, variant y label
