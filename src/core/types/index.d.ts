import { SystemStyleObject, Theme } from '@styled-system/css'

export type SStyles = SystemStyleObject

export type SVariants = { [variantKey: string]: SStyles }

export type SComponents = { [componentKey: string]: { default?: SStyles, variants?: SVariants } }

export type STheme = Theme & { components: SComponents }

export interface SProps {
  sRef: string;
  children: React.ReactNode;
  theme: STheme;
  s: SystemStyleObject;
  [key: string]: any;
}

export type SDeclParams = (SStyles | SVariants | string)

export interface SWrapperCallback { (props: SProps): any; }

export type SWrapper = (cb: SWrapperCallback) => SReturnType;

export type SReturnType = StyledComponent<IntrinsicElementsKeys | React.ComponentType<any>, Theme>;
