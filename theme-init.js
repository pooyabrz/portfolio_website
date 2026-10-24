try {
  const preference = localStorage.getItem('pb-theme');
  if (preference === 'light' || preference === 'dark') {
    document.documentElement.dataset.theme = preference;
  }
} catch { /* Fall back to the system color scheme. */ }
