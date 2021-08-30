export default {
    methods: {
        greet(message, onSuccess, onFailure, userObject) {
            global.google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).withUserObject(userObject).greet(message);
        },
    }
}