import clsx, { ClassValue } from "clsx";

/** 클래스를 합치기 위한 함수 */
export const cn = (...args: ClassValue[]) => clsx(args);
