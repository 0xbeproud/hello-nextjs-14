import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 모든 페이지에 공유되는 루트 레이아웃은 반드시 html, body 태그가 있어야 함
  return (
    <html lang="en">
      <head>
        <title>Be:theProud</title>
        <meta charSet="utf-8" />
        <meta
          property="og:site_name"
          content="Betheproud"
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content="Betheproud"
          data-react-helmet="true"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
