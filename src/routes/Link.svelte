<script>
	import { Base64 } from 'js-base64';
	export let params = {};
    let data = params.d;
	let url = data.split(".")[0];
	let uploader = data.split(".")[1];
	let decrypted_url = Base64.decode(url);
</script>
<head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
  </head>
<main>
	<div class="container d-flex justify-content-center ">
	<div class="container">
	{#if data.includes(".") && uploader.length > 0 }
		<h3>Link Provided by <b>{Base64.decode(uploader)}</b></h3>
		{:else}
		<h3>Link Provided by Gamesdrive</h3>
	{/if}
	<a href="{decrypted_url}" target="_blank"><button class="btn btn-primary btn-lg"><i class="bi bi-download"></i> Download</button></a>
</div>
</div>
</main>