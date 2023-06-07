export function sendNotification(notificationOptions) {
  if ('Notification' in window) {
    if (Notification.permission === 'granted') {
      const notification = new Notification(notificationOptions.title, {
        body: notificationOptions.body
      });

      if (notificationOptions.url) {
        notification.onclick = function() {
          window.open(notificationOptions.url);
        };
      }

      return notification;
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          const notification = new Notification(notificationOptions.title, {
            body: notificationOptions.body
          });

          if (notificationOptions.url) {
            notification.onclick = function() {
              window.open(notificationOptions.url);
            };
          }

          return notification;
        }
      });
    }
  }

  return 'As notificações estão bloqueadas ou não são suportadas pelo seu navegador.';
}
