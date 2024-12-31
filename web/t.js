document.addEventListener('alpine:init', () => {
    //siteinfo provides the footer text
    Alpine.data('siteinfo', () => ({
        _info: "",

        update() {
            const url = "https://api.github.com/repos/datadavev/t/commits/main";
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let _sha = data.sha.substr(0, 7);
                    var dmod = data.commit.author.date;
                    this._info = "Revision " + _sha + " at " + dmod;
                }).catch(error => {
                    console.error(error);
            })
        }
    }));
});
