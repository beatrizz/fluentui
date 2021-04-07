import * as prettier from 'prettier';

import { MakeStylesDOMRenderer } from '../../renderer/createDOMRenderer';
import { isObject } from '../../runtime/utils/isObject';
import { MakeStylesResolvedRule, StyleBucketName } from '../../types';

export const makeStylesRendererSerializer: jest.SnapshotSerializerPlugin = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  test(value: MakeStylesDOMRenderer | any) {
    return typeof value.styleElements === 'object';
  },
  print(renderer: MakeStylesDOMRenderer) {
    const rules = Object.keys(renderer.styleElements).reduce<string[]>((acc, styleEl) => {
      const styleElement: HTMLStyleElement | undefined = renderer.styleElements[styleEl as StyleBucketName];

      if (styleElement) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const cssRules: CSSRule[] = Array.from((styleElement.sheet as CSSStyleSheet).cssRules);

        return [...acc, ...cssRules.map(rule => rule.cssText)];
      }

      return acc;
    }, []);

    return prettier.format(rules.join('\n'), { parser: 'css' }).trim();
  },
};

export const makeStylesRulesSerializer: jest.SnapshotSerializerPlugin = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  test(value: any) {
    return isObject(value);
  },
  print(value: Record<string, MakeStylesResolvedRule>) {
    return Object.keys(value).reduce((acc, property) => {
      const rule: MakeStylesResolvedRule = value[property];

      return prettier.format(acc + rule[2] + (rule[3] || ''), { parser: 'css' }).trim();
    }, '');
  },
};
