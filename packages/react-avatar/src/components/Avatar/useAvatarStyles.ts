import { mergeClasses, makeStyles, shorthands } from '@fluentui/react-make-styles';
import { tokens } from '@fluentui/react-theme';
import type { AvatarState } from './Avatar.types';

export const avatarClassName = 'fui-Avatar';

//
// TODO: All animation constants should go to theme or globals?
// https://github.com/microsoft/fluentui/issues/16372#issuecomment-778240665

const animationDuration = {
  duration50: '50ms',
  duration100: '100ms',
  duration150: '150ms',
  duration200: '200ms',
  duration300: '300ms',
  duration400: '400ms',
  duration500: '500ms',
};

const animationTiming = {
  ultraFast: animationDuration.duration50,
  faster: animationDuration.duration100,
  fast: animationDuration.duration150,
  normal: animationDuration.duration200,
  slow: animationDuration.duration300,
  slower: animationDuration.duration400,
  ultraSlow: animationDuration.duration500,
};

const animationLines = {
  decelerateMax: 'cubic-bezier(0.00,0.00,0.00,1.00)',
  decelerateMid: 'cubic-bezier(0.10,0.90,0.20,1.00)',
  decelerateMin: 'cubic-bezier(0.33,0.00,0.10,1.00)',
  accelerateMax: 'cubic-bezier(1.00,0.00,1.00,1.00)',
  accelerateMid: 'cubic-bezier(0.90,0.10,1.00,0.20)',
  accelerateMin: 'cubic-bezier(0.80,0.00,0.78,1.00)',
  maxEasyEase: 'cubic-bezier(0.80,0.00,0.20,1.00)',
  easyEase: 'cubic-bezier(0.33,0.00,0.67,1.00)',
  linear: 'linear',
};

const animations = {
  fastOutSlowInMax: animationLines.decelerateMax,
  fastOutSlowInMid: animationLines.decelerateMid,
  fastOutSlowInMin: animationLines.decelerateMin,
  slowOutFastInMax: animationLines.accelerateMax,
  slowOutFastInMid: animationLines.accelerateMid,
  slowOutFastInMin: animationLines.accelerateMin,
  fastEase: animationLines.maxEasyEase,
  normalEase: animationLines.easyEase,
  nullEasing: animationLines.linear,
};

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    flexShrink: 0,
    position: 'relative',
    verticalAlign: 'middle',
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
    fontFamily: tokens.fontFamilyBase,
    fontWeight: tokens.fontWeightSemibold,
    boxShadow: `0 0 0 ${tokens.strokeWidthThin} ${tokens.colorTransparentStroke} inset`,
  },

  textCaption2: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightRegular,
  },
  textCaption1Strong: { fontSize: tokens.fontSizeBase200 },
  textBody1Strong: { fontSize: tokens.fontSizeBase300 },
  textSubtitle2: { fontSize: tokens.fontSizeBase400 },
  textSubtitle1: { fontSize: tokens.fontSizeBase500 },
  textTitle: { fontSize: tokens.fontSizeBase600 },

  squareSmall: {
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
  },
  squareMedium: {
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
  },
  squareLarge: {
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
  },
  squareXLarge: {
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
  },

  activeOrInactive: {
    transform: 'perspective(1px)', // Work-around for text pixel snapping at the end of the animation
    transitionProperty: 'transform, opacity',
    transitionDuration: `${animationTiming.ultraSlow}, ${animationTiming.faster}`,
    transitionDelay: `${animations.fastEase}, ${animations.nullEasing}`,

    ':before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,

      ...shorthands.borderRadius('inherit'),
      transitionProperty: 'margin, opacity',
      transitionDuration: `${animationTiming.ultraSlow}, ${animationTiming.slower}`,
      transitionDelay: `${animations.fastEase}, ${animations.nullEasing}`,
    },
  },

  ring: {
    ':before': {
      ...shorthands.borderColor(tokens.colorBrandBackgroundStatic),
      ...shorthands.borderStyle('solid'),
    },
  },
  ringThick: {
    ':before': {
      ...shorthands.margin(`calc(-2 * ${tokens.strokeWidthThick})`),
      ...shorthands.borderWidth(tokens.strokeWidthThick),
    },
  },
  ringThicker: {
    ':before': {
      ...shorthands.margin(`calc(-2 * ${tokens.strokeWidthThicker})`),
      ...shorthands.borderWidth(tokens.strokeWidthThicker),
    },
  },
  ringThickest: {
    ':before': {
      ...shorthands.margin(`calc(-2 * ${tokens.strokeWidthThickest})`),
      ...shorthands.borderWidth(tokens.strokeWidthThickest),
    },
  },

  shadow4: { ':before': { boxShadow: tokens.shadow4 } },
  shadow8: { ':before': { boxShadow: tokens.shadow8 } },
  shadow16: { ':before': { boxShadow: tokens.shadow16 } },
  shadow28: { ':before': { boxShadow: tokens.shadow28 } },

  // TODO: use proper tokens instead of "rgba(0,120,212,0.3)"
  glow4: { ':before': { boxShadow: `${tokens.shadow4}, 0 0 4px 2px rgba(0,120,212,0.3)` } },
  glow8: { ':before': { boxShadow: `${tokens.shadow8}, 0 0 8px 2px rgba(0,120,212,0.3)` } },
  glow16: { ':before': { boxShadow: `${tokens.shadow16}, 0 0 8px 2px rgba(0,120,212,0.3)` } },
  glow28: { ':before': { boxShadow: `${tokens.shadow28}, 0 0 28px 4px rgba(0,120,212,0.3)` } },

  inactive: {
    opacity: '0.8',
    transform: 'scale(0.875)',

    transitionProperty: 'transform, opacity',
    transitionDuration: `${animationTiming.ultraSlow}, ${animationTiming.faster}`,
    transitionDelay: `${animations.fastOutSlowInMin}, ${animations.nullEasing}`,

    ':before': {
      ...shorthands.margin(0),
      opacity: 0,

      transitionProperty: 'margin, opacity',
      transitionDuration: `${animationTiming.ultraSlow}, ${animationTiming.slower}`,
      transitionDelay: `${animations.fastOutSlowInMin}, ${animations.nullEasing}`,
    },
  },

  badge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    boxShadow: `0 0 0 ${tokens.strokeWidthThin} ${tokens.colorNeutralBackground1}`,
  },
  badgeLarge: {
    boxShadow: `0 0 0 ${tokens.strokeWidthThick} ${tokens.colorNeutralBackground1}`,
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    ...shorthands.borderRadius('inherit'),
    objectFit: 'cover',
    verticalAlign: 'top',
  },

  iconLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    lineHeight: '1',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
    textAlign: 'center',
    ...shorthands.borderRadius('inherit'),
  },

  icon16: { fontSize: '16px' },
  icon20: { fontSize: '20px' },
  icon24: { fontSize: '24px' },
  icon28: { fontSize: '28px' },
  icon32: { fontSize: '32px' },
  icon48: { fontSize: '48px' },
});

const useSizeStyles = makeStyles({
  20: { width: '20px', height: '20px' },
  24: { width: '24px', height: '24px' },
  28: { width: '28px', height: '28px' },
  32: { width: '32px', height: '32px' },
  36: { width: '36px', height: '36px' },
  40: { width: '40px', height: '40px' },
  48: { width: '48px', height: '48px' },
  56: { width: '56px', height: '56px' },
  64: { width: '64px', height: '64px' },
  72: { width: '72px', height: '72px' },
  96: { width: '96px', height: '96px' },
  120: { width: '120px', height: '120px' },
  128: { width: '128px', height: '128px' },
});

const useColorStyles = makeStyles({
  neutral: {
    color: tokens.colorNeutralForeground3,
    backgroundColor: tokens.colorNeutralBackground6,
  },
  brand: {
    color: tokens.colorNeutralForegroundInverted,
    backgroundColor: tokens.colorBrandBackgroundStatic,
  },
  darkRed: {
    color: tokens.colorPaletteDarkRedForeground2,
    backgroundColor: tokens.colorPaletteDarkRedBackground2,
  },
  cranberry: {
    color: tokens.colorPaletteCranberryForeground2,
    backgroundColor: tokens.colorPaletteCranberryBackground2,
  },
  red: {
    color: tokens.colorPaletteRedForeground2,
    backgroundColor: tokens.colorPaletteRedBackground2,
  },
  pumpkin: {
    color: tokens.colorPalettePumpkinForeground2,
    backgroundColor: tokens.colorPalettePumpkinBackground2,
  },
  peach: {
    color: tokens.colorPalettePeachForeground2,
    backgroundColor: tokens.colorPalettePeachBackground2,
  },
  marigold: {
    color: tokens.colorPaletteMarigoldForeground2,
    backgroundColor: tokens.colorPaletteMarigoldBackground2,
  },
  gold: {
    color: tokens.colorPaletteGoldForeground2,
    backgroundColor: tokens.colorPaletteGoldBackground2,
  },
  brass: {
    color: tokens.colorPaletteBrassForeground2,
    backgroundColor: tokens.colorPaletteBrassBackground2,
  },
  brown: {
    color: tokens.colorPaletteBrownForeground2,
    backgroundColor: tokens.colorPaletteBrownBackground2,
  },
  forest: {
    color: tokens.colorPaletteForestForeground2,
    backgroundColor: tokens.colorPaletteForestBackground2,
  },
  seafoam: {
    color: tokens.colorPaletteSeafoamForeground2,
    backgroundColor: tokens.colorPaletteSeafoamBackground2,
  },
  darkGreen: {
    color: tokens.colorPaletteDarkGreenForeground2,
    backgroundColor: tokens.colorPaletteDarkGreenBackground2,
  },
  lightTeal: {
    color: tokens.colorPaletteLightTealForeground2,
    backgroundColor: tokens.colorPaletteLightTealBackground2,
  },
  teal: {
    color: tokens.colorPaletteTealForeground2,
    backgroundColor: tokens.colorPaletteTealBackground2,
  },
  steel: {
    color: tokens.colorPaletteSteelForeground2,
    backgroundColor: tokens.colorPaletteSteelBackground2,
  },
  blue: {
    color: tokens.colorPaletteBlueForeground2,
    backgroundColor: tokens.colorPaletteBlueBackground2,
  },
  royalBlue: {
    color: tokens.colorPaletteRoyalBlueForeground2,
    backgroundColor: tokens.colorPaletteRoyalBlueBackground2,
  },
  cornflower: {
    color: tokens.colorPaletteCornflowerForeground2,
    backgroundColor: tokens.colorPaletteCornflowerBackground2,
  },
  navy: {
    color: tokens.colorPaletteNavyForeground2,
    backgroundColor: tokens.colorPaletteNavyBackground2,
  },
  lavender: {
    color: tokens.colorPaletteLavenderForeground2,
    backgroundColor: tokens.colorPaletteLavenderBackground2,
  },
  purple: {
    color: tokens.colorPalettePurpleForeground2,
    backgroundColor: tokens.colorPalettePurpleBackground2,
  },
  grape: {
    color: tokens.colorPaletteGrapeForeground2,
    backgroundColor: tokens.colorPaletteGrapeBackground2,
  },
  lilac: {
    color: tokens.colorPaletteLilacForeground2,
    backgroundColor: tokens.colorPaletteLilacBackground2,
  },
  pink: {
    color: tokens.colorPalettePinkForeground2,
    backgroundColor: tokens.colorPalettePinkBackground2,
  },
  magenta: {
    color: tokens.colorPaletteMagentaForeground2,
    backgroundColor: tokens.colorPaletteMagentaBackground2,
  },
  plum: {
    color: tokens.colorPalettePlumForeground2,
    backgroundColor: tokens.colorPalettePlumBackground2,
  },
  beige: {
    color: tokens.colorPaletteBeigeForeground2,
    backgroundColor: tokens.colorPaletteBeigeBackground2,
  },
  mink: {
    color: tokens.colorPaletteMinkForeground2,
    backgroundColor: tokens.colorPaletteMinkBackground2,
  },
  platinum: {
    color: tokens.colorPalettePlatinumForeground2,
    backgroundColor: tokens.colorPalettePlatinumBackground2,
  },
  anchor: {
    color: tokens.colorPaletteAnchorForeground2,
    backgroundColor: tokens.colorPaletteAnchorBackground2,
  },
});

export const useAvatarStyles = (state: AvatarState): AvatarState => {
  const { size, shape, active, activeAppearance, color } = state;

  const styles = useStyles();
  const sizeStyles = useSizeStyles();
  const colorStyles = useColorStyles();

  const rootClasses = [styles.root, sizeStyles[size], colorStyles[color]];

  if (size <= 24) {
    rootClasses.push(styles.textCaption2);
  } else if (size <= 28) {
    rootClasses.push(styles.textCaption1Strong);
  } else if (size <= 40) {
    rootClasses.push(styles.textBody1Strong);
  } else if (size <= 56) {
    rootClasses.push(styles.textSubtitle2);
  } else if (size <= 96) {
    rootClasses.push(styles.textSubtitle1);
  } else {
    rootClasses.push(styles.textTitle);
  }

  if (shape === 'square') {
    if (size <= 24) {
      rootClasses.push(styles.squareSmall);
    } else if (size <= 48) {
      rootClasses.push(styles.squareMedium);
    } else if (size <= 72) {
      rootClasses.push(styles.squareLarge);
    } else {
      rootClasses.push(styles.squareXLarge);
    }
  }

  if (active === 'active' || active === 'inactive') {
    rootClasses.push(styles.activeOrInactive);

    if (activeAppearance.includes('ring')) {
      rootClasses.push(styles.ring);

      if (size <= 48) {
        rootClasses.push(styles.ringThick);
      } else if (size <= 64) {
        rootClasses.push(styles.ringThicker);
      } else {
        rootClasses.push(styles.ringThickest);
      }
    }

    if (activeAppearance.includes('shadow')) {
      if (size <= 28) {
        rootClasses.push(styles.shadow4);
      } else if (size <= 48) {
        rootClasses.push(styles.shadow8);
      } else if (size <= 64) {
        rootClasses.push(styles.shadow16);
      } else {
        rootClasses.push(styles.shadow28);
      }
    }

    if (activeAppearance.includes('glow')) {
      if (size <= 28) {
        rootClasses.push(styles.glow4);
      } else if (size <= 48) {
        rootClasses.push(styles.glow8);
      } else if (size <= 64) {
        rootClasses.push(styles.glow16);
      } else {
        rootClasses.push(styles.glow28);
      }
    }

    // Note: The inactive style overrides some of the activeAppearance styles and must be applied after them
    if (active === 'inactive') {
      rootClasses.push(styles.inactive);
    }
  }

  state.root.className = mergeClasses(avatarClassName, ...rootClasses, state.root.className);

  if (state.badge) {
    state.badge.className = mergeClasses(styles.badge, size >= 64 && styles.badgeLarge, state.badge.className);
  }

  if (state.image) {
    state.image.className = mergeClasses(styles.image, state.image.className);
  }

  if (state.label) {
    state.label.className = mergeClasses(styles.iconLabel, state.label.className);
  }

  if (state.icon) {
    let iconSizeClass;
    if (size <= 24) {
      iconSizeClass = styles.icon16;
    } else if (size <= 40) {
      iconSizeClass = styles.icon20;
    } else if (size <= 48) {
      iconSizeClass = styles.icon24;
    } else if (size <= 56) {
      iconSizeClass = styles.icon28;
    } else if (size <= 72) {
      iconSizeClass = styles.icon32;
    } else {
      iconSizeClass = styles.icon48;
    }

    state.icon.className = mergeClasses(styles.iconLabel, iconSizeClass, state.icon.className);
  }

  return state;
};
