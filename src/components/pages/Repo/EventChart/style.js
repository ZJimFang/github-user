const chartStyled = {
  minWidth: "35vw",
  height: "35vh",
  border: "1px solid rgb(75, 192, 192)",
  borderRadius: "10px",
  padding: "8px",
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 1,
      to: 0,
      loop: true,
    },
  },
  scales: {
    y: {
      display: false, // Hide Y axis labels
    },
    x: {
      display: false, // Hide X axis labels
    },
  },
  tooltips: { enabled: false },
  hover: { mode: null },
};

export { chartStyled, options };
