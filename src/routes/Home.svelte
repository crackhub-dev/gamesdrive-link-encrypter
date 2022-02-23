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
	

	<main>
	
		
	<div class="d-flex justify-content-center text-center" id="encode">
	  <div class="container">
		<h1>Gamesdrive Link Encrypter</h1>
	  <input bind:value={data} on:input={() => getBase64()} placeholder="Enter Download Link" class="form-control" id="encode"/>
	  <input bind:value={uploader} on:input={() => getBase64()} placeholder="Uploader (optional, default: Gamesdrive)" class="form-control" id="encode" />
	  {#if base64 == ''}
	  <textarea class="form-control" placeholder="Base64 Encrypted Link" readonly></textarea>
	  {:else if uploaderB64 == ''}
	  <textarea class="form-control" placeholder="Base64 Encrypted Link" readonly>https://links.gamesdrive.net/#/link/{base64}</textarea>
	  {:else}
	  <textarea class="form-control" placeholder="Base64 Encrypted Link" readonly>https://links.gamesdrive.net/#/link/{base64}.{uploaderB64}</textarea>

	  {/if}
	  <a href="/#/bulk">Bulk link encrypter</a>
	<div class="text-center">
	  <small><a href="https://github.com/crackhub-dev/gamesdrive-link-encrypter" target="_blank"><i class="bi bi-github"></i></a></small>
	</div>
	</div>
	</div>
	</main>
	
	<style>

	</style>
	