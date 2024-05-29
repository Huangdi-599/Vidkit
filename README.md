# VidKit - Your Ultimate Video Toolkit

## Project Overview
VidKit is a comprehensive video editing platform designed to provide users with a suite of tools, including video compression and video-to-audio conversion. Our platform is user-friendly, eliminating the need for advanced technical skills and allowing users to edit and convert videos with ease. This web application enables users to upload videos, compress them, convert them to audio, and download the processed files.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Video Compression:** Compress videos to reduce file size without significant loss of quality.
- **Video-to-Audio Conversion:** Convert video files to audio files for easy listening.
- **User-Friendly Interface:** Intuitive design for easy navigation and usage.
- **No Backend Required:** Uses external APIs for backend functionalities.

## Technologies Used
### Frontend
- **React:** A JavaScript library for building user interfaces.
- **Vite:** A build tool that provides a faster and leaner development experience for modern web projects.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.
- **Material UI:** A popular React UI framework with a comprehensive set of components.

### Backend (External APIs)
- **Cloudinary:** For video compression and conversion services.

### Deployment
- **Vercel:** For deploying the web application.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/vidkit.git
    ```
2. Navigate to the project directory:
    ```bash
    cd vidkit
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root of your project and add your Cloudinary configuration:
    ```env
    REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
    REACT_APP_CLOUDINARY_API_KEY=your_api_key
    REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
    ```

## Usage
1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173`.

### Video Compression
1. Upload a video file.
2. Select the desired compression settings.
3. Click the "Compress" button.
4. Download the compressed video once processing is complete.

### Video-to-Audio Conversion
1. Upload a video file.
2. Click the "Convert to Audio" button.
3. Download the audio file once processing is complete.

## APIs Used
- **Cloudinary API:** Used for video compression and conversion. For more details, visit [Cloudinary Documentation](https://cloudinary.com/documentation).

## Contributing
We welcome contributions from the community. If you have any ideas or suggestions, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.