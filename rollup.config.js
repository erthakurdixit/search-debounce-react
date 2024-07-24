import { defineConfig } from 'rollup'; // Corrected import statement
import typescript from '@rollup/plugin-typescript'; // Ensure this plugin is installed

export default defineConfig({
    input: "src/index.tsx",
    output: {
        dir: "dist",
        format: "es",
        name: "search-debounce-react"
    },
    external: ["react", "react-dom"],
    plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
