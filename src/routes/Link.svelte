<script>
	export let params = {};
    let data = params.d;
	let url = data.split(".")[0];
	let uploader = data.split(".")[1];
	let decrypted_url = atob(url);
	let decrypted_uploader = atob(uploader);							
	
</script>
<head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
  </head>
<main>
	{#if uploader.length > 0}
		<h3 style="text-align: center;">Link Provided by <b>{decrypted_uploader}</b></h3>
	{/if}
	{#if uploader.length == 0}
		<h3 style="text-align: center;">Link Provided by Gamesdrive</h3>
	{/if}
	<a href="{decrypted_url}" ><button style="cursor: pointer;" class="btn btn-primary btn-lg">Download</button></a>
</main>