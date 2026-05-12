import { listRegions } from "@/lib/data/regions"
import RegionSwitcherClient, {
  type RegionOption,
} from "./region-switcher-client"

const FALLBACK_OPTIONS: RegionOption[] = [
  { countryCode: "ar", label: "ARS", currency: "Pesos argentinos" },
  { countryCode: "us", label: "USD", currency: "Dólares" },
]

export default async function RegionSwitcher() {
  let options: RegionOption[] = FALLBACK_OPTIONS

  try {
    const regions = await listRegions()
    const opts: RegionOption[] = regions.flatMap((region) =>
      (region.countries ?? []).map((c) => ({
        countryCode: (c.iso_2 ?? "").toLowerCase(),
        label: (region.currency_code ?? "").toUpperCase(),
        currency: region.name ?? region.currency_code ?? "",
      }))
    )
    if (opts.length > 0) options = opts
  } catch {
    // backend caído: usamos fallback
  }

  return <RegionSwitcherClient options={options} />
}
