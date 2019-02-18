const save_options = () => {
    const text = document.getElementById('text').value;
    chrome.storage.sync.set({
        text: text
    }, () => {
        alert('Options saved.');
    });
}

const restore_options = () => {
    chrome.storage.sync.get({
        // default
        text: ''
    }, (items) => {
        document.getElementById('text').value = items.text;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    restore_options();
    document.getElementById('save').addEventListener('click',
        save_options);
});