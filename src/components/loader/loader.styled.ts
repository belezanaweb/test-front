
import { motion } from "framer-motion";
import { styled } from "../../stitches.config";

export const LoaderOverlay = styled(motion.div, {
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: "$primaryHover",
  zIndex: 1000,
});
