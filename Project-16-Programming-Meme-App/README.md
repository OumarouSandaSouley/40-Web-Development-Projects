# Programming Memes Gallery 🎭

A lightweight, responsive web application that displays programming memes fetched from the Programming Memes API. Built with vanilla JavaScript, HTML, and CSS, this application allows users to view, download, and share programming-related memes.

## 🌟 Features

* **Real-time API Integration**: Fetches memes from the Programming Memes API
* **Responsive Design**: Works seamlessly across desktop and mobile devices
* **Download Functionality**: Save memes directly to your device
* **Share Capability**: Share memes using the Web Share API (with clipboard fallback)
* **Vote Display**: View upvotes and downvotes for each meme
* **Error Handling**: Robust error management with user-friendly messages
* **Modern UI**: Clean and intuitive interface with smooth animations

## 🚀 Getting Started

### Prerequisites

* A modern web browser
* An API key from RapidAPI for the Programming Memes API

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OumarouSandaSouley/programming-memes-gallery.git
cd programming-memes-gallery
```

2. Open `index.html` in your text editor and replace the API key with your own:
```javascript
const options = {
    headers: {
        'x-rapidapi-key': 'YOUR_API_KEY_HERE',
        'x-rapidapi-host': 'programming-memes-images.p.rapidapi.com'
    }
};
```

3. Deploy the files to your web server or open `index.html` locally in your browser.

## 🔧 Configuration

The application can be configured by modifying the following parameters in the JavaScript code:

* Grid layout: Adjust the `minmax` value in CSS Grid settings
* Image dimensions: Modify the dimensions in the `meme-image` class
* Animation timing: Change transition values in CSS
* API endpoint: Update the URL in the `fetchMemes` function

## 📱 Browser Support

The application supports all modern browsers including:
* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest)

Some features like Web Share API might not be available in all browsers, but fallbacks are implemented.

## 🔍 API Reference

The application uses the Programming Memes API from RapidAPI. Each meme object contains the following properties:

```javascript
{
    id: number,
    created: string,
    modified: string,
    image: string,
    tags: array|null,
    upvotes: number,
    downvotes: number
}
```

## 🛠️ Technical Details

### File Structure
```
programming-memes-gallery/
├── index.html      # Main HTML file with embedded CSS and JavaScript
├── README.md       # Documentation
└── LICENSE         # License file
```

### Technologies Used
* HTML5
* CSS3 (with Grid and Flexbox)
* Vanilla JavaScript (ES6+)
* Web Share API
* Fetch API

## 🔒 Security

* API key should be stored securely in production
* Image URLs are sanitized before display
* Download functionality includes proper error handling
* Share functionality includes fallback mechanisms

## 🚧 Known Limitations

* API rate limits may apply based on your RapidAPI plan
* Web Share API is not supported in all browsers
* Image download may be restricted by CORS policies
* Some features require HTTPS in production

## 🔄 Future Improvements

* Add infinite scroll for loading more memes
* Implement image lazy loading
* Add search and filter functionality
* Include categories and tags
* Add favorite/bookmark feature
* Implement proper image caching
* Add dark mode support

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@OumarouSandaSouley](https://x.com/OumarouSaSouley)

Project Link: [https://github.com/OumarouSandaSouley/programming-memes-gallery](https://github.com/yourusername/programming-memes-gallery)

## 🙏 Acknowledgments

* [Programming Memes API](https://rapidapi.com/programming-memes-api)
* [RapidAPI](https://rapidapi.com/)
* Icons from various free resources