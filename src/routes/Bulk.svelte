<script>
    import { Base64 } from "js-base64";
    let data = [];
    let uploader = "";
    function generateLinks() {
        data = []
        document.getElementById("links").value = "";
        let links = document.getElementById("encode").value.split("\n");
        links.forEach((link) => {
            let b64link;
            if (link.length > 0) {
                if(uploader != ""){
                    b64link = "https://links.gamesdrive.net/#/link/" + Base64.encodeURI(link, {urlsafe: true,}) + '.' + Base64.encodeURI(uploader, {urlsafe: true,});
                }else{
                    b64link = "https://links.gamesdrive.net/#/link/" + Base64.encodeURI(link, {urlsafe: true,});
                }
                data.push(b64link);
            }
        });
         data.forEach((link) => {
            document.getElementById("links").value += link + "\n";
        });
    }
</script>

<main>
    <div class="d-flex justify-content-center text-center">
    <div class="container">
        <h1>Gamesdrive Bulk Link Encrypter</h1>
    <textarea
        placeholder="Enter Download Links (each link seperated by new line!)"
        class="form-control"
        id="encode"
    />
    <input
        bind:value={uploader}
        placeholder="Uploader (optional, default: Gamesdrive)"
        class="form-control"
        id="encode"
    />
    <textarea
        class="form-control"
        id="links"
        placeholder="Base64 Encrypted Links"
        readonly
    />
    <a href="/#/">Single link encrypter</a>
    <br>
    <button class="btn btn-lg btn-primary" on:click={generateLinks}>Encrypt</button>
    <br>
    <small><a href="https://github.com/crackhub-dev/gamesdrive-link-encrypter" target="_blank"><i class="bi bi-github"></i></a></small>
</div>
</div>
</main>

<style>
</style>
