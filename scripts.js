const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        const fileUrl = this.getAttribute('data-file');
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = fileUrl.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
