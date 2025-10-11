# Neural Network Visualizer Documentation

The Neural Network Visualizer is an interactive tool for building, visualizing, and understanding neural network architectures in real-time.

## Overview

This tool helps you:
- Design neural network architectures visually
- Understand layer connections and data flow
- Experiment with different network configurations
- Learn deep learning concepts interactively

**Technology:** D3.js + TensorFlow.js

## Getting Started

### Prerequisites
- Modern web browser
- Internet connection
- Your MarVex app link

### Launching the Tool

1. Navigate to the Neural Network Visualizer page
2. Click "Launch Tool"
3. **Important:** Provide your MarVex app link when prompted (e.g., `https://yourapp.lovable.app`)
4. The tool will open in a new window

## Features

### Visual Architecture Builder
- Drag-and-drop layer creation
- Real-time visualization of network structure
- Interactive node and connection display
- Layer parameter configuration

### Supported Layer Types
- **Input Layer** - Define input dimensions
- **Dense/Fully Connected** - Standard neural network layers
- **Convolutional** - For image processing
- **Pooling** - Max pooling, average pooling
- **Dropout** - Regularization layers
- **Activation** - ReLU, Sigmoid, Tanh, etc.
- **Output Layer** - Classification or regression

### Network Analysis
- View layer shapes and parameters
- Calculate total model parameters
- Visualize activation functions
- Analyze network depth and width

## How to Use

### Step 1: Create a New Network
1. Click "New Network"
2. Choose a starting template or build from scratch
3. Define input dimensions

### Step 2: Add Layers
1. Click "Add Layer" button
2. Select layer type from dropdown
3. Configure layer parameters:
   - Number of units/neurons
   - Activation function
   - Regularization options

### Step 3: Visualize
- The network updates in real-time as you add layers
- Click on layers to see detailed information
- Hover over connections to view weight information

### Step 4: Configure Network
Set global parameters:
- **Learning Rate** - Optimization speed
- **Batch Size** - Training batch size
- **Loss Function** - MSE, Cross-entropy, etc.
- **Optimizer** - Adam, SGD, RMSprop

### Step 5: Export/Save
- Export network architecture as JSON
- Generate TensorFlow/PyTorch code
- Save to your account
- Share with collaborators

## Example Workflows

### Building a Simple Classifier

```
Input Layer (784 units) 
  ↓
Dense Layer (128 units, ReLU)
  ↓
Dropout (0.2)
  ↓
Dense Layer (64 units, ReLU)
  ↓
Output Layer (10 units, Softmax)
```

### Creating a CNN for Images

```
Input Layer (28x28x1)
  ↓
Conv2D (32 filters, 3x3, ReLU)
  ↓
MaxPooling (2x2)
  ↓
Conv2D (64 filters, 3x3, ReLU)
  ↓
MaxPooling (2x2)
  ↓
Flatten
  ↓
Dense (128 units, ReLU)
  ↓
Output Layer (10 units, Softmax)
```

## Best Practices

### Design Principles
1. **Start Simple** - Begin with basic architectures
2. **Incremental Complexity** - Add layers gradually
3. **Consider Input Shape** - Match layer dimensions
4. **Test Architectures** - Validate before training

### Performance Tips
- Use appropriate layer types for your task
- Balance network depth and width
- Include regularization (dropout, L1/L2)
- Choose suitable activation functions

### Common Patterns
- **Classification** - End with Softmax activation
- **Regression** - End with Linear activation
- **Binary Classification** - Single output with Sigmoid
- **Multi-label** - Multiple outputs with Sigmoid

## Understanding Visualizations

### Node Colors
- **Blue** - Input layers
- **Green** - Hidden layers
- **Orange** - Output layers
- **Gray** - Dropout/Regularization

### Connection Thickness
- Thicker lines indicate stronger connections
- Dotted lines show dropout layers

### Layer Information Display
Hover over layers to see:
- Layer type and parameters
- Input/output shapes
- Number of trainable parameters
- Activation function

## Troubleshooting

### Issue: Can't add layer
**Solution:** Check that previous layer output shape matches new layer input requirements.

### Issue: Network won't visualize
**Solution:** Ensure all layers are properly configured with valid parameters.

### Issue: Export fails
**Solution:** Verify network has at least input and output layers defined.

### Issue: Parameters showing incorrect
**Solution:** Refresh the visualization after making changes.

## Keyboard Shortcuts

- `Ctrl/Cmd + N` - New network
- `Ctrl/Cmd + S` - Save network
- `Delete` - Remove selected layer
- `Ctrl/Cmd + Z` - Undo last action
- `Ctrl/Cmd + Y` - Redo action

## Advanced Features

### Custom Layers
Create custom layer types with specific parameters and behaviors.

### Template Library
Access pre-built architectures:
- LeNet-5
- AlexNet
- VGG16
- ResNet50
- MobileNet

### Batch Operations
- Duplicate layers
- Copy/paste layer configurations
- Bulk parameter updates

## Educational Resources

### Learning Materials
- Interactive tutorials within the tool
- Example architectures for common tasks
- Explanations of layer types
- Best practices guides

### Recommended Use Cases
- Learning deep learning basics
- Prototyping network architectures
- Teaching neural network concepts
- Comparing different designs

## Restrictions & Rules

⚠️ **Important Guidelines:**

- Use for educational and research purposes only
- Do not create networks for harmful applications
- Respect computational resource limits
- Credit MarVex when sharing architectures
- Follow ethical AI development practices

## API Integration

Export networks for use in:
- TensorFlow/Keras
- PyTorch
- ONNX format
- Custom training pipelines

## Support

Need help? Check these resources:
- In-tool tutorial (click Help button)
- [Getting Started Guide](getting-started.md)
- Community forums
- Video tutorials

## Version History

- **v1.0** - Initial release with basic layer types
- **v1.1** - Added CNN layers and templates
- **v1.2** - Enhanced visualization features
- **v1.3** - Added export functionality

---

Ready to visualize your neural networks? [Launch the tool](#) and start building!
