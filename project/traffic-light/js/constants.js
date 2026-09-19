export const LAMP_OFF_COLOR = 'gray';

export const TRAFFIC_POSITION_STYLES = {
  east: {
    left: '100%',
    top: '40%',
    transform: 'translateX(-50%) rotate(90deg)',
  },
  north: { left: '40%', top: '0', transform: 'translateX(-50%)' },
  south: { left: '60%', top: '100%', transform: 'translateX(-50%)' },
  west: { left: '0', top: '60%', transform: 'translateX(-50%) rotate(90deg)' },
};

export const TRAFFIC_LIGHT_STYLE = {
  position: 'absolute',
  display: 'flex',
  gap: '8px',
};

export const PEDESTRIAN_POSITION_STYLES = {
  east: {
    left: {
      left: '90%',
      top: '20%',
      transform: 'translateX(-50%) rotate(90deg)',
    },
    right: {
      left: '90%',
      top: '80%',
      transform: 'translateX(-50%) rotate(90deg)',
    },
  },
  north: {
    left: { left: '20%', top: '10%', transform: 'translateX(-50%)' },
    right: { left: '80%', top: '10%', transform: 'translateX(-50%)' },
  },
  south: {
    left: { left: '20%', top: '90%', transform: 'translateX(-50%)' },
    right: { left: '80%', top: '90%', transform: 'translateX(-50%)' },
  },
  west: {
    left: { left: '10%', top: '20%', transform: 'translateX(-50%) rotate(90deg)' },
    right: { left: '10%', top: '80%', transform: 'translateX(-50%) rotate(90deg)' },
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
};
