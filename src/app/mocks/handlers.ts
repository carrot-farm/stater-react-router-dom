import { authMockHandlers } from "../../features/auth/mocks/authMockHandlers";
import { postMockHandlers } from "../../features/post/mocks/postMockHandlers";

export const handlers = [...postMockHandlers, ...authMockHandlers];
