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
