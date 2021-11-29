<script>	
	import { Base64 } from 'js-base64';
	let data = '';
	let base64 = '';
	let uploader = '';
	let uploaderB64 = '';
	function getBase64(){
		base64 = Base64.encodeURI(data, {
			urlsafe: true
		});
		uploaderB64 = Base64.encodeURI(uploader, {
			urlsafe: true
		});
	}
	</script>
	
	<head>
	  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	
	</head>
	<main>
	
		
	<div class="d-flex justify-content-center" id="encode">
	  <div class="container">
		<h1>Gamesdrive Link Encrypter</h1>
	  <input bind:value={data} on:input={() => getBase64()} placeholder="Enter Download Link" class="form-control" id="encode"/>
	  <input bind:value={uploader} on:input={() => getBase64()} placeholder="Uploader" class="form-control" id="encode" />
	  <textarea class="form-control" placeholder="Base64 Encrypted Link" readonly>https://links.gamesdrive.net/#/link/{base64}.{uploaderB64}</textarea>

	</div>
	</div>
	</main>
	
	<style>

	</style>
	
