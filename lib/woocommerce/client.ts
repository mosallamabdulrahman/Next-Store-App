import "server-only";

interface WooFetchOptions {
  revalidate?: number;
}
export class WooCommerceApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "WooCommerceApiError";
  }
}

function getWooCommerceConfig() {
  const domain = process.env.WC_DOMAIN;
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;
  if (!domain || !consumerKey || !consumerSecret) {
    throw new Error(`Missing WooCommerce environment variables`);
  }
  return {
    domain: domain.replace(/\/$/, ""),
    consumerKey,
    consumerSecret,
  };
}

export async function wooFetch<T>(
  endpoint: string,
  options: WooFetchOptions = {},
): Promise<T> {
  const { domain, consumerKey, consumerSecret } = getWooCommerceConfig();

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64",
  );
  const response = await fetch(`${domain}/wp-json/wc/v3/${endpoint}`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
    next: {
      revalidate: options.revalidate ?? 60,
    },
  });
  if (!response.ok) {
    throw new WooCommerceApiError(
      `WooCommerce request failed: ${response.statusText}`,
      response.status,
    );
  }
  return response.json() as Promise<T>;
}
