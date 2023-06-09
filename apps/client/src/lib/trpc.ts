import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "../../../server/trpc/api/router";

export const t = createTRPCReact<AppRouter>();