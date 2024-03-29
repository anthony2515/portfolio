import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from '@/app/globals.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anthony Santiago',
  description: 'Generated by Anthony',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className = {styles.html}lang="en">
      <body className={`${inter.className} ${styles.body}`}>{children}</body>
    </html>
  )
}
