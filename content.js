(function() {
    const url = window.location.href;
    
    // Only run the redirect logic if we are on the annoying SSR/bundle page
    if (url.includes("/ssr/")) {
        const match = url.match(/productIds=([0-9]+)/);
        if (match && match[1]) {
            window.location.replace(`https://www.aliexpress.com/item/${match[1]}.html`);
        }
    }
})();