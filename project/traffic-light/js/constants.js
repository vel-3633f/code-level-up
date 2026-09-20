export const LAMP_OFF_COLOR = 'gray';

const TRAFFIC_EDGE_MARGIN = 8;
const TRAFFIC_LANE_SHIFT = 5;
const PEDESTRIAN_EDGE_MARGIN = 23;
const PEDESTRIAN_SIDE_MARGIN = 12;

export const TRAFFIC_POSITION_STYLES = {
  north: {
    left: `${50 - TRAFFIC_EDGE_MARGIN}%`,
    top: `${TRAFFIC_LANE_SHIFT}%`,
    transform: 'translate(-50%, -50%)',
  },
  south: {
    left: `${50 + TRAFFIC_EDGE_MARGIN}%`,
    top: `${100 - TRAFFIC_LANE_SHIFT}%`,
    transform: 'translate(-50%, -50%)',
  },
  west: {
    left: `${TRAFFIC_LANE_SHIFT}%`,
    top: `${50 + TRAFFIC_EDGE_MARGIN}%`,
    transform: 'translate(-50%, -50%) rotate(90deg)',
  },
  east: {
    left: `${100 - TRAFFIC_LANE_SHIFT}%`,
    top: `${50 - TRAFFIC_EDGE_MARGIN}%`,
    transform: 'translate(-50%, -50%) rotate(90deg)',
  },
};

export const TRAFFIC_LIGHT_STYLE = {
  position: 'absolute',
  display: 'flex',
  gap: '8px',
};

export const PEDESTRIAN_POSITION_STYLES = {
  north: {
    left: {
      left: `${PEDESTRIAN_EDGE_MARGIN}%`,
      top: `${PEDESTRIAN_SIDE_MARGIN}%`,
      transform: 'translate(-50%, -50%)',
    },
    right: {
      left: `${100 - PEDESTRIAN_EDGE_MARGIN}%`,
      top: `${PEDESTRIAN_SIDE_MARGIN}%`,
      transform: 'translate(-50%, -50%)',
    },
  },
  south: {
    left: {
      left: `${PEDESTRIAN_EDGE_MARGIN}%`,
      top: `${100 - PEDESTRIAN_SIDE_MARGIN}%`,
      transform: 'translate(-50%, -50%)',
    },
    right: {
      left: `${100 - PEDESTRIAN_EDGE_MARGIN}%`,
      top: `${100 - PEDESTRIAN_SIDE_MARGIN}%`,
      transform: 'translate(-50%, -50%)',
    },
  },
  west: {
    left: {
      left: `${PEDESTRIAN_SIDE_MARGIN}%`,
      top: `${PEDESTRIAN_EDGE_MARGIN}%`,
      transform: 'translate(-50%, -50%) rotate(90deg)',
    },
    right: {
      left: `${PEDESTRIAN_SIDE_MARGIN}%`,
      top: `${100 - PEDESTRIAN_EDGE_MARGIN}%`,
      transform: 'translate(-50%, -50%) rotate(90deg)',
    },
  },
  east: {
    left: {
      left: `${100 - PEDESTRIAN_SIDE_MARGIN}%`,
      top: `${PEDESTRIAN_EDGE_MARGIN}%`,
      transform: 'translate(-50%, -50%) rotate(90deg)',
    },
    right: {
      left: `${100 - PEDESTRIAN_SIDE_MARGIN}%`,
      top: `${100 - PEDESTRIAN_EDGE_MARGIN}%`,
      transform: 'translate(-50%, -50%) rotate(90deg)',
    },
  },
};

export const LAMP_STYLE = {
  width: '40px',
  height: '40px',
  backgroundColor: LAMP_OFF_COLOR,
  borderRadius: '50%',
};

export const CROSSING_STYLE = {
  width: '700px',
  height: '700px',
  position: 'relative',
  backgroundImage: `
  linear-gradient(to right, transparent 30%, #e0e0e0 30% 70%, transparent 70%),
  linear-gradient(to bottom, transparent 30%, #e0e0e0 30% 70%, transparent 70%)`,
};
