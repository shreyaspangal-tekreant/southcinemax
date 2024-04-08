export const prevBtnVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { delay: 0.05, duration: 1 },
  },
};

export const nextBtnVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { delay: 0.05, duration: 1 },
  },
};

export const seeAllTextVariants = {
  initial: {
    x: -10,
    opacity: 0,
    transition: { duration: 0.5 }
  },
  animate: {
    x: 10,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1 }
  },
  exit: {
    x: -10,
    opacity: 0,
    transition: { duration: 0.5, }
  }
};

export const seeAllIconVariants = {
  initial: {
    x: -60,
    transition: { duration: 0.5 }
  },
  animate: {
    x: 10,
    transition: { duration: 0.5 }
  }
}
