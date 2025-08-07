"use client"

import type React from "react"

import { useEffect } from "react"

interface AdBannerProps {
  slot: string
  format?: string
  responsive?: boolean
  style?: React.CSSProperties
}

export default function AdBanner({ slot, format = "auto", responsive = true, style }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error("AdSense error:", err)
    }
  }, [])

  const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID

  if (!ADSENSE_CLIENT_ID) {
    return (
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 text-center text-slate-500">
        <div className="text-sm">Advertisement Space</div>
        <div className="text-xs mt-1">AdSense not configured</div>
      </div>
    )
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", ...style }}
      data-ad-client={ADSENSE_CLIENT_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive.toString()}
    />
  )
}
