# Ashes of Solas Website

This is a simple, five-page website for the fictional game "Ashes of Solas." It includes a home page, story page, features page, gallery, and development plan.

## How to Change the Images

The images in this website are loaded from URLs. To change an image, you will need to follow these steps:

1.  **Find a new image:** Find a new image online that you want to use.
2.  **Get the image URL:** Right-click on the image and select "Copy Image Address" or "Copy Image Link."
3.  **Open the HTML file:** Open the HTML file that contains the image you want to change.
4.  **Find the `src` attribute:** In the HTML file, find the `<img>` tag for the image you want to replace. The `src` attribute of the `<img>` tag contains the URL of the current image.
5.  **Replace the URL:** Replace the existing URL in the `src` attribute with the new URL you copied in step 2.
6.  **Save the file:** Save the HTML file.

For example, to change the main background image on the homepage, you would open `index.html` and find this line:

```html
<img alt="Dark fantasy landscape with ruined castle and fog" class="w-full h-full object-cover opacity-60" data-alt="Dark fantasy landscape with ruined castle and fog" src="REPLACE_THIS_URL_WITH_YOUR_NEW_IMAGE_URL"/>
```

Replace `REPLACE_THIS_URL_WITH_YOUR_NEW_IMAGE_URL` with the URL of your new image.
