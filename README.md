# Confession Page
A simple web application that allows users to send anonymous confessions or messages.

<a href="https://cg.rojansapkota.com.np/">
         <img alt="Image" src="http://image.thum.io/get/width/1200/https://rojansapkota.github.io/confession-site/">
      </a>

## Features

- **Form Submission:** Users can enter a name and message to send to a Discord webhook.
- **Validation:** Ensures that the webhook URL and message are valid before sending.
- **Theming:** Users can toggle between light and dark themes.
- **Animations:** Visual feedback with animations using Bounce.js and Noty for notifications.

<h2 align="left">👤 Repo Visitors:</h2>
<p align="left">
<a href="https://rojansapkota.com.np" target="_blank">
<img src="https://profile-counter.glitch.me/RojanSapkota_confession-site/count.svg" alt="Visitor Counter"/>
</a>
</p>

## Usage

1. Open the web page.
2. Enter your **name** in the input field.
3. Write your **message** in the message box.
4. Click **Send** to submit your message to the webhook.
5. A notification will appear to indicate whether the message was successfully sent or if an error occurred.

- If the webhook URL is invalid, an error will be shown.
- Messages over 2000 characters will be truncated.
- A success notification will show how long it took to send the message.

Additionally:
- Theme can be toggled between **light** and **dark** mode using the switch at the top.
- A popup will display a notice when the page is first loaded.

### Webhook Configuration:
- Open the `script.js` file.
- Locate the following line of code:
  `
  const link = "" //Enter your webhook link to receive confession messages `

  Replace the empty string `""` with your Discord webhook URL in the format:

  Make sure your webhook URL starts with `https://discord.com/api/webhooks/.`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [Rojan](mailto:github@rojansapkota.com.np).
