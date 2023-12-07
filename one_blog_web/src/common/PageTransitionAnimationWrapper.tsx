import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'

const PageTransitionAnimationWrapper =
  ({
    children,
    keyValue,
    initial = { opacity: 0 },
    animate = { opacity: 1 },
    transition = { duration: 0.5 },
    className
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

PageTransitionAnimationWrapper.propTypes = {
  children: PropTypes.object,
  keyValue: PropTypes.string,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object,
  className: PropTypes.string
}

export default PageTransitionAnimationWrapper
