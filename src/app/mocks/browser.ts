import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

/** 워커 초기화 */
export const initBrowserWorker = async () => {
  await worker.start({
    onUnhandledRequest: "bypass",
    quiet: true,
  });
};
