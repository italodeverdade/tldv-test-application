module.exports = {
    apps: [{
            name: "api production",
            script: "npm",
            args: "run start",
            env: {
                ENV_PATH: "./.env.production",
                NODE_ENV: "production"
            }
        },
        {
            name: "api staging",
            script: "npm",
            args: "run start",
            env: {
                ENV_PATH: "./.env.development",
                NODE_ENV: "development"
            }
        },
    ],
};