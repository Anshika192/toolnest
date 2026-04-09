export function searchInDOM(query) {
  if (!query || query.length < 2) return false;

  const text = document.body.innerText.toLowerCase();
  return text.includes(query.toLowerCase());
}