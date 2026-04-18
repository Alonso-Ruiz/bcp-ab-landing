export default function useVariant() {
  let variant = sessionStorage.getItem('bcp_variant');
  if (!variant) {
    variant = Math.random() > 0.5 ? 'A' : 'B';
    sessionStorage.setItem('bcp_variant', variant);
  }
  return variant;
}
