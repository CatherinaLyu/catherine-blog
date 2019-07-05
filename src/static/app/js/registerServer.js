
const isLocal = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/)
);

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      return ;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/server-worker.js`;
      if (isLocal) {
        checkValidServiceWorker(swUrl);
        navigator.serviceWorker.ready.then(() => {
          console.log('this app is already served cache-first');
        });
      } else {
        registerValidSw(swUrl);
      }
    });
  }
}

function registerValidSw(url) {
  navigator.serviceWorker.register(url)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('new content is avaliable, plase refresh');
            } else {
              console.log('Content is cached for offline use');
            }
          }
        }
      }
    }).catch(err => {
      console.error('error during service worker registraction');
    });
}

function checkValidServiceWorker(url) {
  fetch(url)
  .then()
  .catch();
}