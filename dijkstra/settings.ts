export const graph = [
  ["X1", "X2", "V1"],
  ["X2", "X3", "V2"],
  ["X3", "X4", "V4"],
  ["X4", "X5", "V4"],
  ["X5", "X6", "V5"],
  ["X6", "X7", "V6"],
  ["X7", "X8", "V7"],
  ["X8", "X9", "V8"],
  ["X9", "X10", "V9"],
  ["X10", "X11", "V10"],
  ["X11", "X12", "V11"],
  ["X12", "X13", "V12"],
  ["X4", "X2", "V21"],
  ["X2", "X3", ""],
  ["X3", "X2", ""],
  ["X2", "X3", ""],
  ["X3", "X4", ""],
  ["X4", "X3", ""],
  ["X4", "X8", "V13"],
  ["X8", "X6", "V14"],
  ["X6", "X12", "V15"],
  ["X12", "X9", "V16"],
  ["X9", "X11", "V17"],
  ["X11", "X8", "V18"],
  ["X8", "X1", "V19"],
  ["X1", "X10", "V20"],
  ["X13", "X1", "V22"],
  ["X13", "X2", "V23"],
];
export const graph2 = {
  X1: { X2: "7", X10: "1" },
  X2: { X3: "8" },
  X3: { X4: "6", X2: "1" },
  X4: { X5: "9", X2: "4", X3: "6", X8: "4" },
  X5: { X6: "8" },
  X6: { X7: "6", X12: "5" },
  X7: { X8: "8" },
  X8: { X9: "9", X6: "2", X1: "2" },
  X9: { X10: "7", X11: "2" },
  X10: { X11: "7" },
  X11: { X12: "5", X8: "7" },
  X12: { X13: "4", X9: "7" },
  X13: { X1: "9", X2: "9" },
};
