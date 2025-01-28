import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"), 
    route('about', 'routes/About.tsx'),
    
    ...prefix('countries', [
        index('routes/Countries.tsx'),
        route(':countryName', 'routes/Country.tsx'),
    ])
] satisfies RouteConfig;
