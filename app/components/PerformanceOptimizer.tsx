"use client"

import { useEffect } from "react"

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement("link")
      fontLink.rel = "preload"
      fontLink.href = "/fonts/inter.woff2"
      fontLink.as = "font"
      fontLink.type = "font/woff2"
      fontLink.crossOrigin = "anonymous"
      document.head.appendChild(fontLink)

      // Preload critical images
      const heroImage = new Image()
      heroImage.src = "/hero-bg.jpg"
    }

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      // Lazy load images
      const images = document.querySelectorAll("img[data-src]")
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src!
            img.removeAttribute("data-src")
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }

    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          await navigator.serviceWorker.register("/sw.js")
          console.log("Service Worker registered successfully")
        } catch (error) {
          console.log("Service Worker registration failed:", error)
        }
      }
    }

    preloadCriticalResources()
    lazyLoadResources()
    registerServiceWorker()

    // Performance monitoring
    if (typeof window !== "undefined" && "performance" in window) {
      window.addEventListener("load", () => {
        const perfData = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
        console.log("Page Load Time:", perfData.loadEventEnd - perfData.fetchStart, "ms")
      })
    }
  }, [])

  return null
}
