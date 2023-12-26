import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
    plugins: [
        reactRefresh(),
        VitePWA({
            registerType: "autoUpdate",
            devOptions: {
                enabled: true,
            },
        }),
    ],
});
