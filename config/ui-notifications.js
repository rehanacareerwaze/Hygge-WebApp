/**
 * Created by kapil on 07/05/16.
 */

angular.module('HyggeWebApp')
    .config(function(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 3000,
            startTop: 10,
            startRight: 5,
            verticalSpacing: 140,
            horizontalSpacing: 320,
            positionX: 'center',
            positionY: 'bottom'
        });
    });
