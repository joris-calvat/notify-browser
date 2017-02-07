const isApiAvailable = () => {

    return "Notification" in window;
}

const isPermissionGranted = () => {
    return Notification.permission === "granted";
}

const hasPermission = () => {

    return 'permission' in Notification;
}

const setPermission = (permission) => {
    Notification.permission = permission;
}

const sendNotification = (message, options = {}) => {
    return new Notification(message, options);
}

const requestPermission = () => {

    return new Promise((resolve, reject) => {

        Notification.requestPermission((permission) => {

            resolve (permission);
        });
    });
};



const notifyBrowser = {

    push(message, options) {
        return new Promise((resolve, reject) => {

            if (!isApiAvailable()) {

                reject('Notification not supported by the browser');
                return;
            }
            else if (isPermissionGranted()) {
                
                resolve(sendNotification(message, options));
            }
            else if(!hasPermission()) {
                
                requestPermission()
                .then((permission) => {
                    setPermission(permission);
                    if(isPermissionGranted()) {
                        resolve(sendNotification(message, options));
                    }
                    else {
                        reject('Notification not allowed');
                    }
                })
            }
        });


    }
};

window.notifyBrowser = notifyBrowser;

export default notifyBrowser;
