export const LAMP_OFF_COLOR = "grey";

export const POSITION_STYLES = {
  east: {
    left: "100%",
    top: "50%",
    transform: "translateX(-50%) rotate(90deg)",
  },
  north: { left: "50%", top: "0", transform: "translateX(-50%)" },
  south: { left: "50%", top: "100%", transform: "translateX(-50%)" },
  west: { left: "0", top: "50%", transform: "translateX(-50%) rotate(90deg)" },
};

export const TRAFFIC_LIGHT_STYLE = {
  position: "absolute",
  display: "flex",
  gap: "10px",
};

export const LAMP_STYLE = {
  width: "50px",
  height: "50px",
  backgroundColor: LAMP_OFF_COLOR,
  borderRadius: "50%",
};
