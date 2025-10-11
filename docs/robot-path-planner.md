# Robot Path Planner Documentation

Robot Path Planner is an interactive simulation environment for designing, testing, and optimizing robot navigation algorithms in various environments.

## Overview

This tool enables you to:
- Design custom environments with obstacles
- Test multiple path planning algorithms
- Simulate robot movement in real-time
- Optimize paths for different criteria
- Export paths for robot deployment

**Technology:** Three.js + Custom Path Planning Library

## Getting Started

### Prerequisites
- Modern web browser with WebGL support
- Internet connection
- Your MarVex app link
- Basic understanding of robotics concepts (helpful but not required)

### System Requirements
- WebGL-enabled browser
- Minimum 4GB RAM
- Mouse or touchpad for environment editing
- Stable internet connection

### Launching the Tool

1. Navigate to Robot Path Planner page
2. Click "Launch Tool"
3. **Important:** Enter your MarVex app link when prompted (e.g., `https://yourapp.lovable.app`)
4. Tool opens with default grid environment

## Features

### Environment Editor
Create custom environments:
- **Grid-based** - 2D occupancy grids
- **Continuous** - Free space navigation
- **Multi-level** - 3D environments
- **Dynamic obstacles** - Moving obstacles

### Supported Algorithms

#### Graph-based Algorithms
- **A\*** - Optimal pathfinding with heuristics
- **Dijkstra** - Guaranteed shortest path
- **Breadth-First Search (BFS)** - Uniform cost search
- **Depth-First Search (DFS)** - Memory efficient

#### Sampling-based Algorithms
- **RRT** (Rapidly-exploring Random Tree) - Fast exploration
- **RRT\*** - Optimal RRT variant
- **PRM** (Probabilistic Roadmap) - Multi-query planning
- **RRT-Connect** - Bidirectional RRT

#### Other Algorithms
- **D\*** - Dynamic replanning
- **Potential Fields** - Gradient-based navigation
- **Bug Algorithms** - Sensor-based navigation

### Robot Models
Choose robot type:
- **Point Robot** - Simple circular robot
- **Differential Drive** - Two-wheel robot
- **Ackermann** - Car-like robot
- **Omnidirectional** - Holonomic robot
- **Custom** - Define your own kinematics

### Visualization
Real-time display of:
- Path planning progress
- Explored nodes
- Final path
- Robot position and orientation
- Obstacle clearance
- Cost-to-go values

## How to Use

### Basic Workflow

#### Step 1: Create Environment
1. Select "New Environment"
2. Choose grid size (default: 100x100)
3. Set resolution (meters per cell)
4. Define boundaries

#### Step 2: Add Obstacles
Multiple ways to add obstacles:
- **Draw Mode** - Click and drag to draw
- **Shape Tools** - Add rectangles, circles, polygons
- **Import** - Load map from image or file
- **Random** - Generate random obstacles

**Controls:**
- Left-click: Add obstacle
- Right-click: Remove obstacle
- Shift+Drag: Draw multiple cells
- Ctrl+Z: Undo

#### Step 3: Set Start and Goal
1. Click "Set Start" button
2. Click on grid to place start position
3. Click "Set Goal" button
4. Click on grid to place goal position
5. Adjust orientations if needed

#### Step 4: Choose Robot
1. Select robot type from dropdown
2. Configure robot parameters:
   - **Radius** - Robot size
   - **Max Speed** - Maximum velocity
   - **Max Acceleration** - Dynamics
   - **Turning Radius** - For car-like robots

#### Step 5: Select Algorithm
1. Click "Choose Algorithm"
2. Pick from available options
3. Configure algorithm parameters:
   - Heuristic function (for A*)
   - Step size (for RRT)
   - Goal bias (for RRT)
   - Iterations (for sampling-based)

#### Step 6: Plan Path
1. Click "Plan Path"
2. Watch algorithm explore environment
3. See path appear when found
4. View statistics:
   - Planning time
   - Path length
   - Number of nodes explored
   - Optimality

#### Step 7: Simulate
1. Click "Start Simulation"
2. Robot follows planned path
3. Adjust simulation speed
4. Observe robot behavior
5. Check for collisions

#### Step 8: Optimize
1. Try different algorithms
2. Adjust parameters
3. Compare results
4. Refine environment if needed

#### Step 9: Export
Download results:
- Path waypoints (CSV/JSON)
- Environment map (PNG/SVG)
- Algorithm statistics
- Simulation video
- Robot trajectory data

## Advanced Features

### Dynamic Replanning
Handle moving obstacles:
1. Enable "Dynamic Mode"
2. Add moving obstacles
3. Algorithm replans automatically
4. Robot adjusts path in real-time

### Multi-Robot Planning
Plan for multiple robots:
1. Add multiple robots
2. Set individual start/goal positions
3. Choose coordination strategy:
   - Independent planning
   - Prioritized planning
   - Centralized planning
4. Avoid inter-robot collisions

### 3D Environments
Create 3D environments:
1. Switch to "3D Mode"
2. Add obstacles with height
3. Set robot flying altitude
4. Plan in 3D space
5. Visualize in 3D viewer

### Cost Maps
Add terrain costs:
1. Enable "Cost Map"
2. Assign costs to cells:
   - Low cost (preferred)
   - High cost (avoid)
   - Infinite cost (obstacle)
3. Algorithm finds lowest-cost path

### Waypoint Editor
Fine-tune paths:
1. View path waypoints
2. Add/remove waypoints
3. Adjust positions manually
4. Smooth path
5. Validate clearance

## Algorithm Comparison

| Algorithm | Speed | Optimality | Best For |
|-----------|-------|------------|----------|
| A* | Fast | Optimal | Most scenarios |
| Dijkstra | Medium | Optimal | Unknown heuristics |
| RRT | Very Fast | Not optimal | Complex environments |
| RRT* | Medium | Asympt. optimal | Quality paths |
| PRM | Fast (after setup) | Good | Multi-query |
| D* | Fast | Optimal | Dynamic environments |
| Potential Fields | Very Fast | Not optimal | Simple scenarios |

## Configuration Options

### A* Parameters
- **Heuristic:** Euclidean, Manhattan, Chebyshev
- **Weight:** 1.0 (optimal) to 2.0 (faster, suboptimal)
- **Allow diagonal:** Yes/No

### RRT Parameters
- **Step size:** 0.5 - 5.0 meters
- **Goal bias:** 0.05 - 0.2 (5-20%)
- **Max iterations:** 1000 - 10000

### Robot Parameters
- **Radius:** 0.1 - 2.0 meters
- **Max speed:** 0.1 - 5.0 m/s
- **Max acceleration:** 0.5 - 3.0 m/s²
- **Turning radius:** 0.5 - 3.0 meters (Ackermann)

## Best Practices

### Environment Design
- Use realistic obstacle layouts
- Leave sufficient clearance
- Test with different densities
- Consider robot size in design
- Add safety margins

### Algorithm Selection
- **Simple environments** - A* or Dijkstra
- **Complex/cluttered** - RRT or RRT*
- **Dynamic obstacles** - D* or Potential Fields
- **Multi-query** - PRM
- **Real-time** - Fast algorithms (RRT, Potential Fields)

### Parameter Tuning
- Start with default values
- Adjust based on results
- Balance speed vs optimality
- Test multiple scenarios
- Document settings

### Testing
- Test with various start/goal pairs
- Try different obstacle configurations
- Verify safety margins
- Check corner cases
- Validate in simulation

## Understanding Results

### Path Metrics
- **Length** - Total path distance
- **Smoothness** - Number of turns
- **Clearance** - Distance from obstacles
- **Planning Time** - Computation time
- **Optimality** - Compared to shortest possible

### Visualization Legend
- 🟦 **Blue** - Start position
- 🟥 **Red** - Goal position
- ⬛ **Black** - Obstacles
- 🟩 **Green** - Explored nodes
- 🟨 **Yellow** - Frontier nodes
- 🔵 **Cyan** - Final path
- ⚫ **Gray** - Free space

## Troubleshooting

### Issue: No path found
**Solution:** 
- Check if path exists (goal reachable)
- Reduce robot size
- Increase max iterations
- Remove blocking obstacles
- Try different algorithm

### Issue: Path too long
**Solution:**
- Use A* instead of Dijkstra
- Increase A* heuristic weight
- Smooth the path
- Optimize obstacle placement

### Issue: Robot collides
**Solution:**
- Increase safety margin
- Enlarge robot radius in planning
- Smooth sharp turns
- Reduce max speed
- Check path validity

### Issue: Planning too slow
**Solution:**
- Reduce grid resolution
- Use faster algorithm (RRT)
- Limit max iterations
- Simplify environment
- Enable GPU acceleration

### Issue: Path not smooth
**Solution:**
- Apply path smoothing
- Use RRT* instead of RRT
- Adjust step size
- Post-process with spline fitting

## Keyboard Shortcuts

- `Space` - Start/pause planning
- `R` - Reset environment
- `S` - Set start position
- `G` - Set goal position
- `O` - Toggle obstacles
- `D` - Delete selected
- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Y` - Redo
- `+/-` - Zoom in/out

## Export Formats

### Path Waypoints (CSV)
```csv
x,y,theta,velocity
0.0,0.0,0.0,0.5
1.2,0.5,0.1,1.0
```

### Path Waypoints (JSON)
```json
{
  "waypoints": [
    {"x": 0.0, "y": 0.0, "theta": 0.0},
    {"x": 1.2, "y": 0.5, "theta": 0.1}
  ],
  "metadata": {
    "algorithm": "A*",
    "length": 15.3,
    "planning_time": 0.05
  }
}
```

### ROS Integration
Export paths in ROS nav_msgs/Path format for direct use with ROS robots.

## Real-World Applications

### Indoor Navigation
- Warehouse robots
- Service robots
- Mobile manipulators
- Autonomous wheelchairs

### Outdoor Navigation
- Delivery robots
- Agricultural robots
- Search and rescue
- Exploration robots

### Industrial Automation
- AGVs (Automated Guided Vehicles)
- Assembly line robots
- Material handling
- Inspection robots

## Ethical Guidelines & Restrictions

⚠️ **Important Rules:**

### Safety First
- Always test in simulation before deployment
- Include safety margins in planning
- Plan for emergency stops
- Consider human safety
- Validate paths thoroughly

### Responsible Use
- Don't use for harmful applications
- Consider privacy implications
- Follow local regulations
- Ensure proper supervision
- Document safety measures

### Testing Requirements
- Extensive simulation testing
- Gradual real-world deployment
- Monitor robot behavior
- Emergency stop capabilities
- Regular safety audits

## Integration

### Export to Robot
- ROS (Robot Operating System)
- Custom protocols
- Direct serial communication
- Web APIs
- MQTT messaging

### Import Data
- Occupancy grids (PGM format)
- CAD floor plans (DXF)
- Point clouds (PCD)
- Custom formats (CSV, JSON)

## Learning Resources

### Tutorials
- Path planning basics
- Algorithm comparisons
- Parameter tuning guide
- Real-world deployment

### Example Scenarios
- Office navigation
- Warehouse automation
- Outdoor exploration
- Multi-robot coordination

### Documentation
- Algorithm theory
- Implementation details
- Best practices
- Troubleshooting guide

## Support

Need assistance?
- In-tool help system
- Video tutorials
- [Getting Started Guide](getting-started.md)
- Community forums
- Technical documentation

## Version History

- **v1.0** - Initial release with A* and RRT
- **v1.1** - Added 3D environments
- **v1.2** - Multi-robot support
- **v1.3** - Dynamic replanning
- **v1.4** - ROS integration

---

Ready to plan robot paths? [Launch Robot Path Planner](#) and start navigating!
