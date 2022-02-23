import Home from './routes/Home.svelte';
import Link from './routes/Link.svelte';
import NotFound from './routes/NotFound.svelte';
import Bulk from './routes/Bulk.svelte';
export default {
    '/': Home,
    '/link/:d': Link,
    '/bulk': Bulk,
    '*': NotFound
};