import { headers } from 'next/headers';

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1455162359038611466/soFB71jbRdJZJXjNvfFx_4BRLCuTIitEGMi4Ampu2id5i592gGEAoIP9loZXPDxmvtXR";

export async function trackPageVisit(slug: string) {
  try {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "Unknown UA";
    const referer = headersList.get("referer") || "Direct";
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "Unknown IP";
    
    // Disable tracking for localhost / development
    const isDevelopment = process.env.NODE_ENV === 'development';
    const isLocal = ip === "Unknown IP" || ip === "::1" || ip === "127.0.0.1" || ip.startsWith("192.168.") || ip.startsWith("10.");

    if (isDevelopment || isLocal) {
        console.log(`[Tracker] Local visit detected for ${slug} (${ip}). Skipping Discord notification.`);
        return;
    }
    
    let geoInfo = "Not available";
    
    try {
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,city,regionName,isp,lat,lon`, { 
          signal: AbortSignal.timeout(3000) 
      });
      
      if (geoResponse.ok) {
         const data = await geoResponse.json();
         if (data.status === 'success') {
           geoInfo = `${data.city}, ${data.regionName}, ${data.country}`;
         }
      }
    } catch {
      // Silent fail for GeoIP
    }

    const payload = {
      embeds: [
        {
          title: `💕 Page Visit: ${slug}`,
          color: 0xE11D48, // Rose-600
          fields: [
            { name: "🌍 Location", value: geoInfo, inline: true },
            { name: "🖥️ IP Address", value: ip, inline: true },
            { name: "📱 User Agent", value: userAgent.substring(0, 1024), inline: false },
            { name: "🔗 Referer", value: referer, inline: false },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Mini Love Tracker"
          }
        }
      ]
    };

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

  } catch (error) {
    // Fail silently to not impact user experience
    console.error("Tracker error:", error);
  }
}