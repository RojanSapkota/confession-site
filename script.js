function toggle() {
  document.getElementById('arrow').classList.toggle('show-arrow');
  document.getElementById('profile').classList.toggle('show');
}

function send() {
  const date = Date.now();
  // Test webhook link
  const link = "https://discord.com/api/webhooks/1282685840169894009/OlN_oXFw-4dS5cQZeS2VFIHS67FZUaKNmhg-APVnb1aVk8b0uUBkjg7Gdimx7T7VrqGV"; // Enter your webhook link to receive messages
  const name = document.getElementById('name').value;
  const avatar = "https://th.bing.com/th/id/OIP.iZywMxDDGbbr_zxkfQ6v5QHaEK?pid=ImgDet&rs=1";
  let message = document.getElementById('message').value;

  if (!link) {
      new Noty({
          type: 'error',
          text: 'Provide a valid webhook link',
          timeout: 3000,
          animation: {
              open: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 450, y: 0 }, to: { x: 0, y: 0 }, easing: 'bounce', duration: 1000, bounces: 4, stiffness: 3 })
                      .scale({ from: { x: 1.2, y: 1 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 4, stiffness: 1 })
                      .scale({ from: { x: 1, y: 1.2 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 6, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              },
              close: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 0, y: 0 }, to: { x: 450, y: 0 }, easing: 'bounce', duration: 500, bounces: 4, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              }
          }
      }).show();
      return;
  }

  if (!message) {
      new Noty({
          type: 'error',
          text: 'Provide a message',
          animation: {
              open: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 450, y: 0 }, to: { x: 0, y: 0 }, easing: 'bounce', duration: 1000, bounces: 4, stiffness: 3 })
                      .scale({ from: { x: 1.2, y: 1 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 4, stiffness: 1 })
                      .scale({ from: { x: 1, y: 1.2 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 6, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              },
              close: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 0, y: 0 }, to: { x: 450, y: 0 }, easing: 'bounce', duration: 500, bounces: 4, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              }
          }
      }).show();
      return;
  }

  if (message.length > 2000) {
      message = message.substring(0, 2000);
  }

  if (!link.startsWith('https://discord.com/api/webhooks/')) {
      new Noty({
          type: 'error',
          text: 'Provide a valid webhook link',
          timeout: 2000,
          animation: {
              open: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 450, y: 0 }, to: { x: 0, y: 0 }, easing: 'bounce', duration: 1000, bounces: 4, stiffness: 3 })
                      .scale({ from: { x: 1.2, y: 1 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 4, stiffness: 1 })
                      .scale({ from: { x: 1, y: 1.2 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 6, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              },
              close: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 0, y: 0 }, to: { x: 450, y: 0 }, easing: 'bounce', duration: 500, bounces: 4, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              }
          }
      }).show();
      return;
  }

  $.ajax({
      type: 'POST',
      url: link,
      data: { content: message, username: name, avatar_url: avatar }
  })
  .done(function (response) {
      new Noty({
          type: 'success',
          text: `Successfully sent in ${Date.now() - date}ms`,
          timeout: 400,
          animation: {
              open: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 450, y: 0 }, to: { x: 0, y: 0 }, easing: 'bounce', duration: 1000, bounces: 4, stiffness: 3 })
                      .scale({ from: { x: 1.2, y: 1 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 4, stiffness: 1 })
                      .scale({ from: { x: 1, y: 1.2 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 6, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              },
              close: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 0, y: 0 }, to: { x: 450, y: 0 }, easing: 'bounce', duration: 500, bounces: 4, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              }
          }
      }).show();
  })
  .fail(function (xhr) {
      if (xhr.status === 429) {
          new Noty({
              type: 'error',
              text: `429 - Too many requests. Retry in ${JSON.parse(xhr.responseText).retry_after}ms`,
              timeout: 2000,
              animation: {
                  open: function (promise) {
                      var n = this;
                      new Bounce()
                          .translate({ from: { x: 450, y: 0 }, to: { x: 0, y: 0 }, easing: 'bounce', duration: 1000, bounces: 4, stiffness: 3 })
                          .scale({ from: { x: 1.2, y: 1 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 4, stiffness: 1 })
                          .scale({ from: { x: 1, y: 1.2 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 6, stiffness: 1 })
                          .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
                  },
                  close: function (promise) {
                      var n = this;
                      new Bounce()
                          .translate({ from: { x: 0, y: 0 }, to: { x: 450, y: 0 }, easing: 'bounce', duration: 500, bounces: 4, stiffness: 1 })
                          .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
                  }
              }
          }).show();
          return;
      }

      new Noty({
          type: 'error',
          text: JSON.parse(xhr.responseText).message,
          timeout: 5000,
          animation: {
              open: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 450, y: 0 }, to: { x: 0, y: 0 }, easing: 'bounce', duration: 1000, bounces: 4, stiffness: 3 })
                      .scale({ from: { x: 1.2, y: 1 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 4, stiffness: 1 })
                      .scale({ from: { x: 1, y: 1.2 }, to: { x: 1, y: 1 }, easing: 'bounce', duration: 1000, delay: 100, bounces: 6, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              },
              close: function (promise) {
                  var n = this;
                  new Bounce()
                      .translate({ from: { x: 0, y: 0 }, to: { x: 450, y: 0 }, easing: 'bounce', duration: 500, bounces: 4, stiffness: 1 })
                      .applyTo(n.barDom, { onComplete: function () { promise(resolve => resolve()); } });
              }
          }
      }).show();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  Swal.fire(
      'Notice',
      'This was just made for fun<br> Do not abuse it.<br>I am not responsible for any of your actions',
      'info'
  );

  const btntheme = document.getElementById('theme');
  const currentTheme = localStorage.getItem('theme');

  if (!currentTheme) {
      btntheme.checked = true;
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', 'dark');
  } else {
      if (currentTheme === 'dark') {
          btntheme.checked = false;
          document.body.classList.toggle('light');
      } else if (currentTheme === 'light') {
          btntheme.checked = true;
          document.body.classList.toggle('dark');
      }
  }

  btntheme.addEventListener('click', function () {
      document.body.classList.toggle('light');
      const theme = document.body.classList.contains('light') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
  });

  document.getElementById('myForm').addEventListener('submit', function (e) {
      e.preventDefault();
      send();
  });
});
