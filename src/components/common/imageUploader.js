import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CircularProgress, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const ImageUpload = ({ setUploading, uploading, selectedImage, setSelectedImage, setImageURL, imageURL }) => {
    const [uploaded, setUploaded] = useState(false);

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        setSelectedImage(image);
        setUploaded(false);
    };

    const handleUpload = () => {
        // Perform your upload logic here
        // This is just a mock example
        const formData = new FormData();
        formData.append('file', selectedImage);
        formData.append('upload_preset', 's0c9pirq'); // Replace with your upload preset

        fetch('https://api.cloudinary.com/v1_1/dufwlcmte/image/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setImageURL(data.secure_url);
                setUploading(false);
                console.log('Uploaded image data:', data);
                setUploaded(true);
            })
            .catch((error) => {
                console.error('Error uploading image:', error);
                setUploading(false);
            });
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
        }, 2000);
    };

    return (
        <Card>
            <CardHeader title="Product Image" />
            <CardContent>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="image-input"
                    onChange={handleImageChange}
                />
                <label htmlFor="image-input">
                    <IconButton color="primary" component="span">
                        <PhotoCameraIcon />
                    </IconButton>
                </label>
                {(selectedImage || imageURL) && (
                    <div>
                        <img src={imageURL ? imageURL : URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpload}
                            disabled={uploading}
                            startIcon={uploading ? <CircularProgress size={20} /> : null}
                        >
                            {uploaded ? "Uploaded" : "Upload"}
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default ImageUpload;
