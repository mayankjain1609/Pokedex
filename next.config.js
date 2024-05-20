/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "www.pokemon.com",
        }]
    }
};

export default config;

// https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png",