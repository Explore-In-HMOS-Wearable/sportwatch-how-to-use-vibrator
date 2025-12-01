import Vibrator from '@system.vibrator';

export default {
    data: {
    },
    vibrateLong() {
        Vibrator.vibrate({
            mode: "long"
        })
    },

    vibrateShort() {
        Vibrator.vibrate({
            mode: "long"
        })
    },

};
