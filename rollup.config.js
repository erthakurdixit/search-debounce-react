import { defineConfig } from 'rollup'; // Corrected import statement
import typescript from '@rollup/plugin-typescript'; // Ensure this plugin is installed
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default defineConfig({
    input: "src/index.tsx",
    output: {
        dir: "dist",
        format: "es",
        name: "search-debounce-react"
    },
    external: ["react", "react-dom"],
    plugins: [nodeResolve(),
    commonjs(),
    typescript({ tsconfig: "tsconfig.json" })
    ],
});
