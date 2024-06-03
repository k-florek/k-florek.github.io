let HTML = `
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-151344274-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-151344274-1');
</script>
`;
let HTMLtarget = document.querySelector('head');
HTMLtarget.insertAdjacentHTML('beforeend', HTML);