import path from "path";
import dotenv from "dotenv"

dotenv.config({ path: path.resolve(__dirname, "../..", ".env") });

const mustExist = <T>(value: T | undefined, name: string): T => {
    if (!value) {
        console.log(`Missing Config: ${name} !!!`);
        process.exit(1);
    }
    return value;
};

export const config = {
    env: mustExist(process.env.NODE_ENVIRONMENT, "ENVIRONMENT"),
    port: mustExist(+process.env.NODE_PORT, "PORT"),
    email: {
        emailVariableReplaceRegex: /\{\{(.+?)\}\}/gi
    },
    stripe: {
        publishableKey: mustExist(process.env.STRIPE_PUBLISHABLE_KEY, "STRIPE_PUBLISHABLE_KEY"),
        secretKey: mustExist(process.env.STRIPE_SECRET_KEY, "STRIPE_SECRET_KEY"),
    },
};
