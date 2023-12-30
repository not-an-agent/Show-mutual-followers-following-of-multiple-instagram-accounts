// Use:
// InSaverify | Web for Instagram™: https://chromewebstore.google.com/detail/insaverify-web-for-instag/fobaamfiblkoobhjpiigemmdegbmpohd
// or:
// Network conditions > Chrome - Android Mobile (high-end) > Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36

let spans = document.querySelectorAll('span');
let firstSpanWithoutChildAndSiblings;

try {
    for (let span of spans) {
        if (span.parentNode.tagName === 'DIV' && span.childElementCount === 0 && span.parentNode.childElementCount === 1) {
            firstSpanWithoutChildAndSiblings = span;
            break;
        }
    }

    if (!firstSpanWithoutChildAndSiblings) {
        throw new Error('No matching span found.');
    }

    // Get the class of the span
    const spanClass = firstSpanWithoutChildAndSiblings.classList.value;

    // Log the span and its class
    console.log('Selected span:', firstSpanWithoutChildAndSiblings);
    console.log('Class of the span:', spanClass);

    const spanClassJoined = "span." + spanClass.split(" ").join(".");

    // Get all elements with the specified class
    const elements = document.querySelectorAll(spanClassJoined);

    // Check if there are no elements with the specified class
    if (elements.length === 0) {
        throw new Error('No elements found with the specified class.');
    }

    // Create an array to store the values
    const values = [];
    const currentURL = window.location.href;
    const followers_following = currentURL.split("/")[4];
    const filename = currentURL.split("/")[3] + '-' + currentURL.split("/")[4];

    values.push('Account ' + followers_following + ':\n' + currentURL + '\n');

    // Loop through the elements and store their values
    elements.forEach(element => {
        values.push("https://www.instagram.com/" + element.textContent);
        console.log("https://www.instagram.com/" + element.textContent);
    });

    // Print the count of elements
    console.log('Count:', elements.length);

    console.log('Account ' + followers_following + ':\n' + currentURL + '\n')

    // Create a Blob with the values
    const blob = new Blob([values.join('\n')], {
        type: 'text/plain'
    });

    // Remove any existing button with id 'download_file'
    const existingButton = document.getElementById('download_file');
    if (existingButton) {
        existingButton.parentNode.removeChild(existingButton);
    }

    // Create a link (button) to download the Blob
    const link = document.createElement('button');
    link.id = 'download_file';
    link.style.display = 'block';
    link.textContent = 'Download the file';
    link.onclick = function (e) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename + '.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        e.preventDefault(); // prevent button default behavior
    };

    // Get the parent div
    const parentDiv = document.querySelector('div[style="display: flex; flex-direction: column; padding-bottom: 0px; padding-top: 0px; position: relative;"]');

    if (!parentDiv) {
        throw new Error('Parent div not found.');
    }

    // Append the link (button) to the parent div
    parentDiv.append(link);

} catch (error) {
    console.error('Error:', error.message);
}
