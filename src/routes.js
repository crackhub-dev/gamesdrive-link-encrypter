import Home from './routes/Home.svelte';
import Link from './routes/Link.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/link/:d': Link,
    '*': NotFound
};