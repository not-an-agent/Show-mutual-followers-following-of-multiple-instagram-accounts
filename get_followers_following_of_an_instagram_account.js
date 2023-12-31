// Use:
// InSaverify | Web for Instagram™: https://chromewebstore.google.com/detail/insaverify-web-for-instag/fobaamfiblkoobhjpiigemmdegbmpohd
// or:
// Network conditions > Chrome - Android Mobile (high-end) > Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36

(async () => {
  try {
    // Select all span elements
    let spans = document.querySelectorAll('span');
    let firstSpanWithoutChildAndSiblings;

    // Find the first span that meets the specified conditions
    for (let span of spans) {
      if (span.parentNode.tagName === 'DIV' && span.childElementCount === 0 && span.parentNode.childElementCount === 1) {
        firstSpanWithoutChildAndSiblings = span;
        break;
      }
    }

    // Check if a matching span is found
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

    // Input Instagram username
    const username = currentURL.split("/")[3];

    // Construct Instagram profile URL
    const url = `https://www.instagram.com/${username}/`;

    // Make request to page
    const response = await fetch(url);
    const html = await response.text();

    // Parse HTML to find meta tag with follower count
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const meta = doc.querySelector('meta[name="description"]');

    // Check if the meta tag is found
    if (meta) {
      let content = meta.getAttribute('content');
      console.log(content);

      // Extract follower count from content string
      content = content.split(" ");
      console.log(content);
      console.log("Followers: " + content[0]);
      console.log("Following: " + content[2]);

      const total_followers_following = followers_following == "followers" ? content[0] : content[2];

      values.push('Account ' + followers_following + ':\n' + currentURL + '\n');
      values.push(`${followers_following[0].toUpperCase() + followers_following.slice(1)} count: ${elements.length} / ${total_followers_following}\n`);

      // Loop through the elements and store their values
      elements.forEach(element => {
        values.push("https://www.instagram.com/" + element.textContent);
        console.log("https://www.instagram.com/" + element.textContent);
      });

      // Print the count of elements
      console.log('Count: ' + elements.length + " / " + total_followers_following);

      console.log('Account ' + followers_following + ':\n' + currentURL + '\n');

      // Create a Blob with the values
      const blob = new Blob([values.join('\n')], {
        type: 'text/plain'
      });

      // Remove any existing button with id 'download_file'
      const existingButton = document.getElementById('download_file');
      if (existingButton) {
        existingButton.parentNode.removeChild(existingButton);
      }

      const filename = currentURL.split("/")[3] + "-" + currentURL.split("/")[4] + "-" + elements.length + "_" + total_followers_following;

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
        e.preventDefault();
        // prevent button default behavior
      };

      // Get the parent div
      const parentDiv = document.querySelector('div[style="display: flex; flex-direction: column; padding-bottom: 0px; padding-top: 0px; position: relative;"]');

      // Check if the parent div is found
      if (!parentDiv) {
        throw new Error('Parent div not found.');
      }

      // Append the link (button) to the parent div
      parentDiv.append(link);

    } else {
      throw new Error('Meta tag not found.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
