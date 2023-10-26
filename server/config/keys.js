module.exports = {
    app: {
        name: 'CarShare',
        apiURL: process.env.BASE_API_URL,
        clientURL: process.env.CLIENT_URL
    },
    port: process.env.PORT || 3000,
    database: {
        url: "mongodb+srv://vincentnewman918:SuperMan@cluster0.yvyupu7.mongodb.net/"
    }
}