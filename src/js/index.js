document.documentElement.style.overflowX = 'hidden';

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(shoowLocation);
}

function shoowLocation(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    const url = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    window.open(url, "map");
}

function getNotifications() {
    console.log(window)
    if (!("Nofitication" in window)) {
        console.log("Navegador não suporta notificações!");
    } else if (Notification.permission === "granted") {
        const notify = new Notification("Olá, você acabou de ativar as notificações!! :D");
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                const notify = new Notification("Olá, você acabou de ativar as notificações!! :D");
            }
        })
    }
}