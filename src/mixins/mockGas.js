export default {
    methods: {
        greet(message, onSuccess, onFailure, userObject) {
            onSuccess(`this is mock backend. received :${message}`, userObject);
        }
    }
}