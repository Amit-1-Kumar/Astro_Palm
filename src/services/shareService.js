export const shareGuidance = async (title, text, url = window.location.href) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url
      });
      return { success: true, method: 'share' };
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error("Error sharing:", err);
      }
      return { success: false, method: 'share', error: err };
    }
  } else {
    // Fallback to clipboard if native share isn't supported
    try {
      await navigator.clipboard.writeText(`${title}\n\n${text}\n\nApp: ${url}`);
      return { success: true, method: 'clipboard' };
    } catch (err) {
      console.error("Clipboard failed:", err);
      return { success: false, method: 'clipboard', error: err };
    }
  }
};
