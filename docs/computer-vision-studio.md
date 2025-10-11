# Computer Vision Studio Documentation

Computer Vision Studio is a powerful tool for real-time object detection, image classification, and face recognition using state-of-the-art pretrained models.

## Overview

This tool enables you to:
- Perform object detection on images and video
- Classify images using pretrained models
- Run face recognition and detection
- Analyze visual data in real-time

**Technology:** MediaPipe + TensorFlow.js

## Getting Started

### Prerequisites
- Modern web browser
- Internet connection
- Webcam (optional, for live video)
- Your MarVex app link

### System Requirements
- Browser with JavaScript enabled
- Camera permissions (for webcam features)
- Minimum 4GB RAM recommended
- Stable internet for model loading

### Launching the Tool

1. Go to Computer Vision Studio page
2. Click "Launch Tool"
3. **Important:** Enter your MarVex app link (e.g., `https://yourapp.lovable.app`)
4. Grant camera permissions if using webcam
5. Tool opens in new window

## Features

### Object Detection
Detect and locate multiple objects in images or video streams.

**Supported Models:**
- **YOLOv5** - Real-time detection, high accuracy
- **SSD MobileNet** - Fast, lightweight detection
- **Faster R-CNN** - High precision object detection
- **EfficientDet** - Balanced speed and accuracy

**Detectable Objects:**
- People, vehicles, animals
- Common household items
- Street objects and signs
- 80+ COCO dataset categories

### Image Classification
Classify entire images into predefined categories.

**Available Models:**
- **MobileNet** - Fast classification
- **ResNet50** - High accuracy
- **InceptionV3** - Multi-scale features
- **EfficientNet** - State-of-the-art efficiency

**Categories:**
- 1000+ ImageNet classes
- Animals, plants, objects
- Vehicles, food items
- Scenes and landscapes

### Face Recognition
Detect faces and identify individuals (with proper consent).

**Capabilities:**
- Face detection and localization
- Facial landmark detection
- Age and emotion estimation
- Face matching and verification

## How to Use

### Object Detection Workflow

#### Step 1: Choose Task
1. Select "Object Detection" from task menu
2. Choose input source:
   - Upload Image
   - Use Webcam
   - Upload Video

#### Step 2: Select Model
1. Click "Select Model" dropdown
2. Choose from available models:
   - **YOLOv5** (recommended for general use)
   - **SSD MobileNet** (for speed)
   - **Faster R-CNN** (for accuracy)
3. Wait for model to load

#### Step 3: Run Detection
1. If using image: Click "Upload" and select file
2. If using webcam: Click "Start Camera"
3. Click "Detect Objects" button
4. View results with bounding boxes

#### Step 4: Review Results
- Objects labeled with class names
- Confidence scores displayed
- Bounding boxes color-coded
- Click boxes for detailed info

#### Step 5: Export Results
- Download annotated image
- Export detection data (JSON)
- Save to your account
- Share results

### Image Classification Workflow

#### Step 1: Select Classifier
1. Choose "Image Classification" task
2. Select model (MobileNet recommended)
3. Upload image

#### Step 2: Classify
1. Click "Classify Image"
2. View top predictions
3. See confidence scores
4. Explore class descriptions

#### Step 3: Fine-tune
- Adjust confidence threshold
- View alternative predictions
- Compare different models

### Face Recognition Setup

⚠️ **Important:** Only use with proper consent and for authorized purposes.

#### Step 1: Initialize
1. Select "Face Recognition" task
2. Choose detection model
3. Enable webcam or upload image

#### Step 2: Detect Faces
1. Click "Detect Faces"
2. Review detected faces
3. View facial landmarks
4. See detection confidence

#### Step 3: Analyze
- Age estimation
- Emotion detection
- Face quality assessment
- Landmark visualization

## Advanced Features

### Batch Processing
Process multiple images at once:
1. Select multiple files
2. Choose task and model
3. Run batch detection
4. Export all results

### Custom Thresholds
Adjust detection parameters:
- **Confidence Threshold** - Minimum detection confidence (0.1-1.0)
- **IoU Threshold** - Overlap threshold for non-max suppression
- **Max Detections** - Maximum objects per image

### Real-time Video Analysis
For live video streams:
1. Enable webcam
2. Start detection
3. View FPS and latency
4. Record and export video

### Region of Interest (ROI)
Focus on specific areas:
1. Draw ROI box on image
2. Run detection only in ROI
3. Reduce processing time
4. Improve accuracy

## Understanding Results

### Detection Output
Each detection includes:
- **Class** - Object category
- **Confidence** - Detection certainty (0-100%)
- **Bounding Box** - [x, y, width, height]
- **Color** - Category-specific color

### Classification Output
- **Top-1 Accuracy** - Best prediction
- **Top-5 Predictions** - Five most likely classes
- **Confidence Scores** - Probability distribution
- **Class Description** - Category information

### Performance Metrics
- **FPS** - Frames per second (video)
- **Latency** - Processing time per frame
- **Model Size** - Memory usage
- **Accuracy** - Detection/classification accuracy

## Model Comparison

| Model | Speed | Accuracy | Use Case |
|-------|-------|----------|----------|
| YOLOv5 | Fast | High | General object detection |
| SSD MobileNet | Very Fast | Medium | Real-time mobile apps |
| Faster R-CNN | Slow | Very High | Precision applications |
| MobileNet | Very Fast | Medium | Quick classification |
| ResNet50 | Medium | High | Balanced performance |
| EfficientDet | Fast | High | Production systems |

## Best Practices

### Image Quality
- Use high-resolution images (min 640x480)
- Ensure good lighting
- Avoid blurry or distorted images
- Use clear, focused shots

### Model Selection
- **Speed priority** - Use MobileNet or SSD
- **Accuracy priority** - Use ResNet or Faster R-CNN
- **Balanced** - Use YOLOv5 or EfficientDet
- **Resource constrained** - Use lightweight models

### Privacy & Ethics
- Always obtain consent for face recognition
- Don't use for unauthorized surveillance
- Respect data privacy regulations
- Disclose AI use to subjects
- Secure and encrypt sensitive data

### Performance Optimization
- Reduce image resolution if needed
- Lower confidence threshold carefully
- Use appropriate model for task
- Enable GPU acceleration if available

## Troubleshooting

### Issue: Model won't load
**Solution:** Check internet connection. Try refreshing the page. Clear browser cache.

### Issue: Webcam not detected
**Solution:** Grant camera permissions in browser settings. Check if camera is in use by another app.

### Issue: Poor detection accuracy
**Solution:** Improve image quality. Adjust confidence threshold. Try different model. Ensure proper lighting.

### Issue: Slow processing
**Solution:** Reduce image resolution. Use faster model. Close other browser tabs. Check CPU/GPU usage.

### Issue: No objects detected
**Solution:** Lower confidence threshold. Ensure objects are in supported categories. Try different model.

## Keyboard Shortcuts

- `Space` - Run detection/classification
- `C` - Toggle camera
- `S` - Save results
- `R` - Reset view
- `Esc` - Cancel operation

## Export Options

### Supported Formats
- **Images** - PNG, JPEG with annotations
- **Data** - JSON, CSV with detection results
- **Video** - MP4 with overlays
- **Reports** - PDF summary of results

### Export Data Structure
```json
{
  "detections": [
    {
      "class": "person",
      "confidence": 0.95,
      "bbox": [100, 150, 200, 400]
    }
  ],
  "metadata": {
    "model": "YOLOv5",
    "timestamp": "2025-01-15T10:30:00Z"
  }
}
```

## Ethical Guidelines & Restrictions

⚠️ **Critical Rules:**

### Prohibited Uses
- ❌ Unauthorized face recognition or surveillance
- ❌ Real-time monitoring without consent
- ❌ Discriminatory or biased applications
- ❌ Privacy-violating implementations
- ❌ Harmful or malicious purposes

### Required Practices
- ✅ Obtain explicit consent before collecting visual data
- ✅ Disclose AI use to all subjects
- ✅ Comply with data protection laws (GDPR, CCPA)
- ✅ Implement data security measures
- ✅ Provide opt-out mechanisms
- ✅ Regular bias and fairness testing

### Data Handling
- Process data locally when possible
- Encrypt sensitive visual data
- Delete data after processing
- Don't store biometric data without consent
- Implement access controls

## Integration & API

### Programmatic Access
Export detection code for:
- Python (OpenCV, TensorFlow)
- JavaScript (TensorFlow.js)
- REST API endpoints
- Mobile apps (iOS/Android)

### Custom Training
- Fine-tune models on your data
- Export custom model weights
- Integrate with training pipelines

## Learning Resources

### Tutorials
- Object detection basics
- Face detection implementation
- Real-time video processing
- Custom model integration

### Example Projects
- Pedestrian detection system
- Inventory counting app
- Safety monitoring tool
- Wildlife camera trap analysis

## Support & Community

- In-app help documentation
- Video tutorials
- Community forums
- [Getting Started Guide](getting-started.md)

## Version History

- **v1.0** - Initial release with YOLOv5
- **v1.1** - Added face recognition
- **v1.2** - Real-time video support
- **v1.3** - Batch processing
- **v1.4** - Custom model support

---

Ready to analyze images? [Launch Computer Vision Studio](#) and start detecting!
