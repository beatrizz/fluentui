import { mergeClasses, shorthands, makeStyles } from '@fluentui/react-make-styles';
import { tokens } from '@fluentui/react-theme';
import { DividerState } from './Divider.types';

export const dividerClassName = 'fui-Divider';

const contentSpacing = '12px';
const insetSpacing = '12px';
const startEndMaxHeight = '8px';

const useBaseStyles = makeStyles({
  // Base styles
  base: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    position: 'relative',

    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase200,

    color: tokens.colorNeutralForeground2,

    ':before': {
      boxSizing: 'border-box',
      display: 'flex',
      flexGrow: 1,

      ...shorthands.borderColor(tokens.colorNeutralStroke2),
    },

    ':after': {
      boxSizing: 'border-box',
      display: 'flex',
      flexGrow: 1,

      ...shorthands.borderColor(tokens.colorNeutralStroke2),
    },
  },

  // Childless styles
  childless: {
    ':before': {
      marginBottom: 0,
      marginRight: 0,
    },

    ':after': {
      marginLeft: 0,
      marginTop: 0,
    },
  },

  // Alignment variations
  start: {
    ':after': {
      content: '""',
    },
  },
  center: {
    ':before': {
      content: '""',
    },
    ':after': {
      content: '""',
    },
  },
  end: {
    ':before': {
      content: '""',
    },
  },

  // Appearance variations
  brand: {
    color: tokens.colorBrandForeground1,

    ':before': {
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },

    ':after': {
      ...shorthands.borderColor(tokens.colorBrandStroke1),
    },
  },
  subtle: {
    ':before': {
      ...shorthands.borderColor(tokens.colorNeutralStroke3),
    },

    ':after': {
      ...shorthands.borderColor(tokens.colorNeutralStroke3),
    },
  },
  strong: {
    ':before': {
      ...shorthands.borderColor(tokens.colorNeutralStroke1),
    },

    ':after': {
      ...shorthands.borderColor(tokens.colorNeutralStroke1),
    },
  },
});

const useHorizontalStyles = makeStyles({
  // Base styles
  base: {
    width: '100%',

    ':before': {
      borderTopStyle: 'solid',
      borderTopWidth: tokens.strokeWidthThin,
    },

    ':after': {
      borderTopStyle: 'solid',
      borderTopWidth: tokens.strokeWidthThin,
    },
  },

  // Inset styles
  inset: {
    paddingLeft: insetSpacing,
    paddingRight: insetSpacing,
  },

  // Alignment variations
  start: {
    ':before': {
      content: '""',
      marginRight: contentSpacing,
      maxWidth: startEndMaxHeight,
    },

    ':after': {
      marginLeft: contentSpacing,
    },
  },
  center: {
    ':before': {
      marginRight: contentSpacing,
    },
    ':after': {
      marginLeft: contentSpacing,
    },
  },
  end: {
    ':before': {
      marginRight: contentSpacing,
    },
    ':after': {
      content: '""',
      marginLeft: contentSpacing,
      maxWidth: startEndMaxHeight,
    },
  },
});

const useVerticalStyles = makeStyles({
  // Base styles
  base: {
    flexDirection: 'column',
    minHeight: '20px',

    ':before': {
      borderRightStyle: 'solid',
      borderRightWidth: tokens.strokeWidthThin,
    },

    ':after': {
      borderRightStyle: 'solid',
      borderRightWidth: tokens.strokeWidthThin,
    },
  },

  // Inset styles
  inset: {
    marginTop: insetSpacing,
    marginBottom: insetSpacing,
  },

  // With children styles
  withChildren: {
    minHeight: '84px',
  },

  // Alignment variations
  start: {
    ':before': {
      content: '""',
      marginBottom: contentSpacing,
      maxHeight: startEndMaxHeight,
    },

    ':after': {
      marginTop: contentSpacing,
    },
  },
  center: {
    ':before': {
      marginBottom: contentSpacing,
    },
    ':after': {
      marginTop: contentSpacing,
    },
  },
  end: {
    ':before': {
      marginBottom: contentSpacing,
    },
    ':after': {
      content: '""',
      marginTop: contentSpacing,
      maxHeight: startEndMaxHeight,
    },
  },
});

export const useDividerStyles = (state: DividerState): DividerState => {
  const baseStyles = useBaseStyles();
  const horizontalStyles = useHorizontalStyles();
  const verticalStyles = useVerticalStyles();

  const { alignContent, appearance, inset, vertical } = state;

  state.root.className = mergeClasses(
    dividerClassName,

    // Base styles
    baseStyles.base,
    baseStyles[alignContent],
    appearance && baseStyles[appearance],

    // Horizontal styles
    !vertical && horizontalStyles.base,
    !vertical && inset && horizontalStyles.inset,
    !vertical && horizontalStyles[alignContent],

    // Vertical styles
    vertical && verticalStyles.base,
    vertical && inset && verticalStyles.inset,
    vertical && verticalStyles[alignContent],
    vertical && state.root.children !== undefined && verticalStyles.withChildren,

    // Childless styles
    state.root.children === undefined && baseStyles.childless,

    // User provided class name
    state.root.className,
  );

  return state;
};
