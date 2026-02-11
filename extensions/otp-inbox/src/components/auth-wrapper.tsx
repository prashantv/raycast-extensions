// import withGmailAuth from "../lib/with-gmail-auth";
import { authorize } from "../lib/gmail-oauth";
import { withAccessToken } from "@raycast/utils";
import React from "react";

/**
 * Makes sure that we have a authenticated gmail client available in the children
 */
function AuthWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default withAccessToken({ authorize })(AuthWrapper);
