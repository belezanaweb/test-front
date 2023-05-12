import { AnimatePresence } from "framer-motion";
import { ReactComponent as Spinner } from '../../assets/spinner.svg';
import { LoaderOverlay } from "./loader.styled";

export const Loader = () => {
  return (
    <AnimatePresence>
      <LoaderOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Spinner />
      </LoaderOverlay>
    </AnimatePresence>
  );
};