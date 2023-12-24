import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'

const AnimationWrapper =
  ({
    children,
    keyValue,
    initial = { opacity: 0 },
    animate = { opacity: 1 },
    transition = { duration: 0.5 }
  }) => {
    return (
      <AnimatePresence>
        <motion.div
          key={keyValue}
          initial={initial}
          animate={animate}
          transition={transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )
  }

AnimationWrapper.propTypes = {
  children: PropTypes.object,
  keyValue: PropTypes.string,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object
}

export default AnimationWrapper
