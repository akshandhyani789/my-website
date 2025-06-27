  

   function loadPage(page) {
      fetch(`pages/${page}.html`)
        .then(response => {
          if (!response.ok) throw new Error("Page not found");
          return response.text();
        })
        .then(html => {
          document.getElementById('main').innerHTML = html;
        })
        .catch(error => {
          document.getElementById('main').innerHTML = "<h2>404 - Page not found</h2>";
        });
    }

    // Optional: load home page by default on first load
    window.onload = () => loadPage('main');