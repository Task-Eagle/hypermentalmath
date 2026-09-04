import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { RegisterServiceWorker } from "@/components/register-sw";
import appCss from "../styles.css?url";

const APP_NAME = "MentalMath Pro";
const APP_DESCRIPTION =
  "Mental math trainer for percentages, multiplication, division, and addition. Optional timer and a 5-question challenge.";

const INLINE_FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%231f5f5b'/%3E%3Ccircle cx='10.5' cy='10.5' r='3.1' fill='%23f3efe6'/%3E%3Ccircle cx='21.5' cy='21.5' r='3.1' fill='%23f3efe6'/%3E%3Cpath d='M20.8 7.2c.7-.5 1.6-.3 2.1.4.5.7.3 1.6-.4 2.1L11.2 24.8c-.7.5-1.6.3-2.1-.4-.5-.7-.3-1.6.4-2.1L20.8 7.2z' fill='%23f3efe6'/%3E%3C/svg%3E";

const THEME_BOOT = `(function(){try{var t=localStorage.getItem('mentalmath-theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: APP_DESCRIPTION },
      { name: "theme-color", content: "#1f5f5b" },
      { name: "application-name", content: APP_NAME },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: INLINE_FAVICON },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/icon-192.png" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=IBM+Plex+Mono:wght@500;600&family=Outfit:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <RegisterServiceWorker />
        <Scripts />
      </body>
    </html>
  ),
});
