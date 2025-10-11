# ML Model Playground Documentation

ML Model Playground is a browser-based environment for training, testing, and deploying machine learning models without any installation or setup required.

## Overview

This tool allows you to:
- Train ML models directly in your browser
- Experiment with different algorithms
- Test models with your own data
- Export trained models for production use

**Technology:** TensorFlow.js + Brain.js

## Getting Started

### Prerequisites
- Modern web browser
- Internet connection
- Your MarVex app link
- Dataset (CSV, JSON, or built-in datasets)

### System Requirements
- Minimum 4GB RAM
- JavaScript enabled browser
- Stable internet connection
- Modern CPU (GPU acceleration supported)

### Launching the Tool

1. Navigate to ML Model Playground
2. Click "Launch Tool"
3. **Important:** Provide your app link when prompted (e.g., `https://yourapp.lovable.app`)
4. Tool opens with default workspace

## Features

### Supported Algorithms

#### Supervised Learning
- **Linear Regression** - Predict continuous values
- **Logistic Regression** - Binary classification
- **Decision Trees** - Rule-based classification
- **Random Forest** - Ensemble tree methods
- **Neural Networks** - Deep learning models
- **Support Vector Machines (SVM)** - Classification/regression
- **K-Nearest Neighbors (KNN)** - Instance-based learning

#### Unsupervised Learning
- **K-Means Clustering** - Group similar data
- **PCA** - Dimensionality reduction
- **Anomaly Detection** - Identify outliers

#### Model Types
- Classification (binary/multi-class)
- Regression (linear/non-linear)
- Time series forecasting
- Clustering

### Built-in Datasets
- **Iris Dataset** - Flower classification
- **Boston Housing** - Price prediction
- **MNIST** - Handwritten digits
- **Wine Quality** - Classification
- **Titanic** - Survival prediction
- **Custom Upload** - Your own data

## How to Use

### Quick Start: Training Your First Model

#### Step 1: Load Data
1. Click "Load Dataset"
2. Choose option:
   - Select built-in dataset
   - Upload CSV file
   - Upload JSON file
   - Connect to external source

#### Step 2: Explore Data
- View data preview table
- Check statistics and distribution
- Identify missing values
- Visualize features

#### Step 3: Prepare Data
1. Select target variable (what to predict)
2. Choose features (input variables)
3. Handle missing values:
   - Drop rows with missing data
   - Fill with mean/median
   - Use advanced imputation
4. Split data (train/test):
   - Recommended: 80/20 split
   - Adjust as needed

#### Step 4: Choose Algorithm
1. Click "Select Algorithm"
2. Choose based on task:
   - **Classification** - Predicting categories
   - **Regression** - Predicting numbers
   - **Clustering** - Finding groups
3. Popular choices:
   - Random Forest (versatile)
   - Neural Network (complex patterns)
   - Linear/Logistic Regression (simple, interpretable)

#### Step 5: Configure Hyperparameters
Adjust algorithm settings:

**Random Forest:**
- Number of trees: 100 (default)
- Max depth: Auto
- Min samples split: 2

**Neural Network:**
- Hidden layers: [64, 32] (default)
- Activation: ReLU
- Learning rate: 0.001
- Epochs: 100
- Batch size: 32

**SVM:**
- Kernel: RBF
- C parameter: 1.0
- Gamma: Auto

#### Step 6: Train Model
1. Click "Train Model"
2. Monitor training progress:
   - Loss curve
   - Accuracy metrics
   - Training time
   - Current epoch
3. Wait for completion

#### Step 7: Evaluate Performance
Review metrics:
- **Classification:**
  - Accuracy
  - Precision
  - Recall
  - F1-Score
  - Confusion Matrix
  - ROC Curve
  
- **Regression:**
  - Mean Squared Error (MSE)
  - Root Mean Squared Error (RMSE)
  - Mean Absolute Error (MAE)
  - R² Score
  - Residual plots

#### Step 8: Test Model
1. Use test set predictions
2. Try individual predictions:
   - Enter feature values
   - Get instant prediction
   - View confidence scores
3. Validate on new data

#### Step 9: Export Model
Download your trained model:
- TensorFlow.js format
- ONNX format
- JSON weights
- Python code (sklearn/TensorFlow)

## Advanced Features

### Feature Engineering
Transform your data:
- **Normalization** - Scale features to 0-1
- **Standardization** - Mean=0, StdDev=1
- **One-Hot Encoding** - Convert categories to binary
- **Polynomial Features** - Create interaction terms
- **Feature Selection** - Reduce dimensions

### Hyperparameter Tuning
Optimize model performance:
- **Grid Search** - Try all combinations
- **Random Search** - Sample random combinations
- **Bayesian Optimization** - Smart search
- **Cross-Validation** - K-fold validation

### Model Comparison
Compare multiple models:
1. Train several algorithms
2. View side-by-side metrics
3. Select best performer
4. Ensemble methods

### Visualization Tools
- Data distribution plots
- Feature importance
- Learning curves
- Confusion matrices
- Decision boundaries
- ROC/AUC curves
- Residual plots

### Real-time Predictions
- Create API endpoint
- Test with sample inputs
- Monitor prediction speed
- View prediction confidence

## Workflows

### Binary Classification Example
**Task:** Predict customer churn

```
1. Load customer data (CSV)
2. Select target: 'churned' (Yes/No)
3. Choose features: age, tenure, monthly_charges, etc.
4. Handle missing values: fill with median
5. Split: 80% train, 20% test
6. Select: Logistic Regression
7. Train model
8. Evaluate: Accuracy 85%, F1-Score 0.82
9. Test on new customers
10. Export model
```

### Regression Example
**Task:** Predict house prices

```
1. Load housing dataset
2. Target: 'price'
3. Features: bedrooms, sqft, location, etc.
4. Feature engineering: create 'price_per_sqft'
5. Normalize features
6. Split: 70% train, 30% test
7. Select: Random Forest Regressor
8. Hyperparameters: 200 trees, max_depth=15
9. Train model
10. Evaluate: RMSE $45,000, R²=0.87
11. Make predictions
12. Export model
```

### Clustering Example
**Task:** Customer segmentation

```
1. Load customer behavior data
2. Select features: purchase_freq, avg_spend, recency
3. Normalize all features
4. Select: K-Means Clustering
5. Choose K=4 (4 segments)
6. Train model
7. Visualize clusters
8. Analyze cluster characteristics
9. Assign new customers to segments
```

## Best Practices

### Data Preparation
- ✅ Clean data before training
- ✅ Handle missing values appropriately
- ✅ Remove outliers if necessary
- ✅ Balance imbalanced datasets
- ✅ Normalize/standardize features
- ✅ Split data properly (train/val/test)

### Model Selection
- Start simple (Linear/Logistic Regression)
- Increase complexity if needed
- Consider interpretability vs accuracy
- Match algorithm to problem type
- Try multiple algorithms

### Training Tips
- Use appropriate train/test split
- Monitor for overfitting
- Use cross-validation
- Early stopping for neural networks
- Save checkpoints during training

### Hyperparameter Tuning
- Start with default values
- Use validation set for tuning
- Don't overfit to validation data
- Document all changes
- Use automated tuning when possible

### Evaluation
- Use multiple metrics
- Check confusion matrix
- Analyze errors/residuals
- Test on unseen data
- Consider business metrics

## Understanding Metrics

### Classification Metrics

**Accuracy:**
- (Correct Predictions) / (Total Predictions)
- Good for balanced datasets
- Can be misleading with imbalanced data

**Precision:**
- True Positives / (True Positives + False Positives)
- "When model predicts positive, how often is it correct?"
- Important when false positives are costly

**Recall:**
- True Positives / (True Positives + False Negatives)
- "Of all actual positives, how many did we find?"
- Important when false negatives are costly

**F1-Score:**
- Harmonic mean of precision and recall
- Balanced metric
- Good for imbalanced datasets

### Regression Metrics

**Mean Squared Error (MSE):**
- Average of squared errors
- Penalizes large errors
- Same units as target²

**RMSE:**
- Square root of MSE
- Same units as target
- Interpretable

**R² Score:**
- Proportion of variance explained
- Range: 0 to 1
- 1 = perfect fit

## Troubleshooting

### Issue: Model won't train
**Solution:** Check data format, ensure target variable is selected, verify no missing values in required fields.

### Issue: Low accuracy
**Solution:** Try different algorithm, tune hyperparameters, add more training data, check for data leakage, improve features.

### Issue: Overfitting
**Solution:** Reduce model complexity, add regularization, use more training data, apply dropout (neural networks).

### Issue: Training too slow
**Solution:** Reduce dataset size, use simpler model, decrease epochs/iterations, enable GPU acceleration.

### Issue: Export fails
**Solution:** Ensure model is fully trained, check browser memory, try smaller model, use different export format.

## Keyboard Shortcuts

- `Ctrl/Cmd + T` - Train model
- `Ctrl/Cmd + E` - Evaluate model
- `Ctrl/Cmd + S` - Save model
- `Ctrl/Cmd + L` - Load dataset
- `Space` - Pause/Resume training
- `Esc` - Stop training

## Data Format Requirements

### CSV Format
```csv
feature1,feature2,feature3,target
1.2,3.4,5.6,A
2.3,4.5,6.7,B
```

### JSON Format
```json
[
  {"feature1": 1.2, "feature2": 3.4, "target": "A"},
  {"feature1": 2.3, "feature2": 4.5, "target": "B"}
]
```

## Export Formats

### TensorFlow.js
```javascript
// Load and use model
const model = await tf.loadLayersModel('model.json');
const prediction = model.predict(inputTensor);
```

### Python (sklearn)
```python
# Generated code
from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)
```

## Educational Resources

### Tutorials
- Introduction to Machine Learning
- Understanding algorithms
- Feature engineering guide
- Hyperparameter tuning best practices

### Example Projects
- Customer churn prediction
- House price estimation
- Image classification
- Sentiment analysis

## Restrictions & Rules

⚠️ **Important Guidelines:**

- Use for educational and research purposes
- Respect data privacy and ownership
- Don't train on sensitive personal data without consent
- Avoid creating biased or discriminatory models
- Test models thoroughly before deployment
- Document all model decisions and limitations
- Provide model cards for transparency

## Ethical Considerations

### Data Ethics
- Obtain proper consent for data usage
- Anonymize personal information
- Respect copyright and licensing
- Consider data provenance

### Model Ethics
- Test for bias and fairness
- Ensure model transparency
- Provide explanations for predictions
- Monitor model performance over time
- Plan for model updates and maintenance

## Support

Need help? Resources available:
- In-app tutorials
- Example notebooks
- Video walkthroughs
- [Getting Started Guide](getting-started.md)
- Community forums

---

Ready to train your first model? [Launch ML Model Playground](#) and start experimenting!
